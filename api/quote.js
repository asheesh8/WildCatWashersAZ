/**
 * Vercel serverless function: emails a quote request to the office through Resend.
 *
 * Env vars (Vercel project → Settings → Environment Variables):
 *   RESEND_API_KEY    required. Without it this returns 503 and the form shows
 *                     its call/email fallback, so nothing is ever silently lost.
 *   QUOTE_TO_EMAIL    optional, defaults to services@wildcatwashers.com
 *   QUOTE_FROM_EMAIL  optional, defaults to "Wildcat Washers Website <quotes@wildcatwashers.com>".
 *                     The domain must be verified in Resend.
 */
const TO = process.env.QUOTE_TO_EMAIL || 'services@wildcatwashers.com';
const FROM = process.env.QUOTE_FROM_EMAIL || 'Wildcat Washers Website <quotes@wildcatwashers.com>';
const FIELDS = { name: 100, phone: 40, service: 60, area: 60, details: 2000, page: 200 };

const clean = (v, max) => String(Array.isArray(v) ? v[0] : v ?? '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '').trim().slice(0, max);
/** Single-line fields: no line breaks, so nothing can reach the subject or add a header. */
const line = (v, max) => clean(v, max).replace(/[\r\n\u2028\u2029]+/g, ' ');
/** service and area are select values: slugs only. */
const slug = (v) => { const s = line(v, 60).toLowerCase(); return /^[a-z0-9-]*$/.test(s) ? s : ''; };

/* Light per-instance rate limit: 5 requests per IP per 10 minutes. */
const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < 600000);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return list.length > 5;
}
/* Posts without JavaScript carry no load-time token, so they get a tighter budget:
   2 per IP per 10 minutes and about 20 an hour across this instance. */
const noJsHits = new Map();
let noJsHour = [];
function noJsLimited(ip) {
  const now = Date.now();
  const list = (noJsHits.get(ip) || []).filter((t) => now - t < 600000);
  noJsHour = noJsHour.filter((t) => now - t < 3600000);
  if (list.length >= 2 || noJsHour.length >= 20) return true;
  list.push(now); noJsHour.push(now);
  noJsHits.set(ip, list);
  if (noJsHits.size > 5000) noJsHits.clear();
  return false;
}
/* A real browser submitting the form with JavaScript off: a top-level navigation from this site. */
function isBrowserFormPost(req) {
  const h = req.headers;
  const accept = String(h.accept || '');
  const mode = h['sec-fetch-mode'];
  const site = h['sec-fetch-site'];
  return accept.includes('text/html') && (!mode || mode === 'navigate') && (!site || site === 'same-origin');
}

/* A plain form post (JavaScript off) gets pages, not JSON: success goes on to /thank-you/,
   anything else gets a short page with the phone number so the request is never lost silently. */
const wantsHtml = (req) => !String(req.headers.accept || '').includes('application/json');
const PHONE = '(520) 525-0084';
function sendPage(res, status, heading, text) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  return res.status(status).send(`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>${heading} | Wildcat Washers</title><style>body{font:1.15rem/1.5 system-ui,sans-serif;color:#121832;background:#f3f8fd;margin:0;padding:3rem 1.2rem}main{max-width:36rem;margin:auto}a{color:#0b5d8f;font-weight:700}</style></head><body><main><h1>${heading}</h1><p>${text}</p><p>Call or text us at <a href="tel:+15205250084">${PHONE}</a>, seven days a week.</p><p><a href="/quote/">Back to the quote form</a> · <a href="/">Homepage</a></p></main></body></html>`);
}
const done = (req, res) => (wantsHtml(req) ? (res.setHeader('Location', '/thank-you/'), res.status(303).end()) : res.status(200).json({ ok: true }));
const failed = (req, res, status, extra = {}) => (wantsHtml(req)
  ? sendPage(res, status, 'We couldn’t send that automatically', status === 400 ? 'Please go back and add your name and a phone number we can call or text.' : 'Something went wrong on our end, so your request didn’t reach us. Please give us a call instead.')
  : res.status(status).json({ ok: false, ...extra }));

async function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  const raw = typeof req.body === 'string' ? req.body : await new Promise((resolve) => {
    let s = '';
    req.on('data', (c) => { s += c; if (s.length > 20000) { resolve(''); req.destroy(); } });
    req.on('end', () => resolve(s));
    req.on('error', () => resolve(''));
    req.on('close', () => resolve(s.length > 20000 ? '' : s));
  });
  try { return JSON.parse(raw); } catch { return Object.fromEntries(new URLSearchParams(raw)); }
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ ok: false }); }

  // Only accept posts from this site's own pages.
  const origin = req.headers.origin;
  let sameSite = false;
  try { sameSite = !!origin && new URL(origin).host === req.headers.host; } catch { sameSite = false; }
  if (!sameSite) return failed(req, res, 403);

  const ip = String(req.headers['x-real-ip'] || req.headers['x-vercel-forwarded-for'] || req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  if (limited(ip)) return failed(req, res, 429);

  if (!process.env.RESEND_API_KEY) return failed(req, res, 503, { error: 'not-configured' });

  const body = await readBody(req);
  if (clean(body['company-website'], 200)) return done(req, res); // honeypot: pretend success
  const f = {
    name: line(body.name, FIELDS.name),
    phone: line(body.phone, FIELDS.phone),
    service: slug(body.service),
    area: slug(body.area),
    details: clean(body.details, FIELDS.details),
    page: '',
  };
  // Only a path on this site; anything else (an outside URL) never reaches the email as a link.
  const page = line(body.page, FIELDS.page);
  f.page = /^\/[\w\-/]{0,150}$/.test(page) ? page : '';
  if (!f.name || f.phone.replace(/\D/g, '').length < 7) return failed(req, res, 400, { error: 'missing' });

  // Bot signals answer with fake success so bots learn nothing: no load time or a submit
  // under 3 seconds after the page loaded, a link in the name, or two or more links in the note.
  // A post with no load time counts only when it looks like a browser's own form submit
  // (JavaScript off); everything else without one gets the fake success.
  const loaded = Number(line(body.t, 20));
  const noJs = !loaded && isBrowserFormPost(req);
  const tooFast = loaded ? Date.now() - loaded < 3000 : !noJs;
  const links = (f.details.match(/https?:\/\//gi) || []).length;
  const pageUrl = /https?:|\/\//i.test(page);
  if (tooFast || pageUrl || /https?:\/\/|www\./i.test(f.name) || links >= 2) return done(req, res);
  if (noJs && noJsLimited(ip)) return failed(req, res, 429);

  const text = [
    'New quote request from the website',
    '',
    `Name: ${f.name}`,
    `Phone: ${f.phone}`,
    `Service: ${f.service || 'not chosen'}`,
    `Town: ${f.area || 'not chosen'}`,
    `Details: ${f.details || '-'}`,
    f.page ? `Sent from: ${f.page}` : '',
  ].join('\n').trim();

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: FROM, to: [TO], subject: `Quote request: ${f.name} (${f.area || 'town not given'})${noJs ? ' (no-JS)' : ''}`, text }),
    });
    if (!r.ok) { console.error('resend', r.status, await r.text()); return failed(req, res, 502); }
    return done(req, res);
  } catch (err) {
    console.error('resend', err);
    return failed(req, res, 502);
  }
}
