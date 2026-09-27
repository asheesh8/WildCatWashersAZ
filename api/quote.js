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

async function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  const raw = typeof req.body === 'string' ? req.body : await new Promise((resolve) => {
    let s = '';
    req.on('data', (c) => { s += c; if (s.length > 20000) req.destroy(); });
    req.on('end', () => resolve(s));
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
  if (!sameSite) return res.status(403).json({ ok: false });

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  if (limited(ip)) return res.status(429).json({ ok: false });

  if (!process.env.RESEND_API_KEY) return res.status(503).json({ ok: false, error: 'not-configured' });

  const body = await readBody(req);
  if (clean(body['company-website'], 200)) return res.status(200).json({ ok: true }); // honeypot: pretend success
  const f = {
    name: line(body.name, FIELDS.name),
    phone: line(body.phone, FIELDS.phone),
    service: slug(body.service),
    area: slug(body.area),
    details: clean(body.details, FIELDS.details),
    page: line(body.page, FIELDS.page),
  };
  if (!f.name || f.phone.replace(/\D/g, '').length < 7) return res.status(400).json({ ok: false, error: 'missing' });

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
      body: JSON.stringify({ from: FROM, to: [TO], subject: `Quote request: ${f.name} (${f.area || 'town not given'})`, text }),
    });
    if (!r.ok) { console.error('resend', r.status, await r.text()); return res.status(502).json({ ok: false }); }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('resend', err);
    return res.status(502).json({ ok: false });
  }
}
