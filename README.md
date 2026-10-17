# Wildcat Washers

The public website for Wildcat Washers: window cleaning, solar panel cleaning, pigeon proofing, solar screens, screen repair and pressure washing across Greater Tucson and Southern Arizona.

Static Astro site. No database. Every page is generated at build time from typed data files; the only server code is one small function that emails quote requests.

**Live:** https://wildcatwashers.com (Vercel preview domain: `wildcatwashers-az.vercel.app`)

## Tech stack

- Astro 7, TypeScript data files, plain CSS (`src/styles/global.css`)
- `@astrojs/sitemap`, `sharp` for image optimisation, self-hosted fonts via Fontsource
- `api/quote.js` — a Vercel serverless function that sends quote requests through Resend
- Hosted on Vercel (`vercel.json`); `netlify.toml` keeps a Netlify deploy working too

## Quick start

Requires Node 22.12+.

```bash
npm install
npm run dev        # http://localhost:4501
npm run build      # static output into dist/
npm run preview    # serve the build on :4321
```

## Where things live

| What | File |
| --- | --- |
| Every business fact (phone, services, awards, guarantees, Club, nav) | `src/data/business.ts` |
| Towns, communities and HOA pages | `src/data/areas.ts` |
| All 404 reviews (parsed from Fact Bank 4) | `src/data/reviews.json`, helpers in `src/data/reviews.ts` |
| All FAQ answers (Fact Bank 6), with never-publish answers withheld | `src/data/faq.json`, `src/data/faq.ts` |
| The 200-page AEO/GEO plan; pages read their H1 from it | `src/data/page-plan-200.json`, `src/data/plan.ts` |
| Photos and alt text | `src/assets/img/`, `src/data/media.ts` |
| Design tokens, type scale, buttons, motion | `src/styles/global.css` |

## Rules that are enforced in code

- The only phone number is (520) 525-0084. Photos showing the retired number (truck wraps, yard signs, shirt backs) have it blurred or painted out, or are not in the library.
- No prices, job minimum, neighbor or Club enrollment discounts, workmanship warranty terms, ROC status or University of Arizona affiliation. `faq.ts` withholds the FAQ answers that touch these.
- Reviews are never relocated: area pages show local reviews first, then clearly-labeled reviews from the parent town or metro.

## Design

Light-blue forward (`#36C6F4`), navy (`#121832`) and red (`#D91E3D`) in support. Archivo (variable width) for big uppercase display type, Figtree for body text, Yellowtail for the script tagline, all self-hosted. Body text starts at 18px for 55+ readers. Motion is a one-time light sweep on headings and a fade-up on cards, both off with reduced motion.

## Forms

The quote form (`src/components/QuoteForm.astro`) picks its target in this order:

1. `PUBLIC_QUOTE_ENDPOINT`, if set — any service that accepts a POST (Formspree, Basin, a Zapier hook).
2. On Netlify, Netlify Forms natively.
3. Otherwise `/api/quote` (`api/quote.js`), which emails the office through Resend. It validates origin, rate-limits, and silently "succeeds" for bots.

If sending fails, the visitor sees a call/email fallback instead of a fake success.

## Environment variables

Names only — set values in Vercel's project settings (or `.env` locally). Never commit them.

| Variable | Used by | Purpose |
|---|---|---|
| `PUBLIC_QUOTE_ENDPOINT` | Quote form (build time, public) | Optional third-party form endpoint |
| `PUBLIC_FORM_PROVIDER` | Quote form (build time, public) | Optional; `netlify` forces Netlify Forms on a custom domain |
| `RESEND_API_KEY` | `api/quote.js` | Required for `/api/quote` to send; without it the form shows the fallback |
| `QUOTE_TO_EMAIL` | `api/quote.js` | Optional inbox override |
| `QUOTE_FROM_EMAIL` | `api/quote.js` | Optional sender override (domain must be verified in Resend) |

## Hosting & deploy

- Vercel builds with `npm run build` and serves `dist/`; pushes to `main` go to production and branches get preview URLs.
- `netlify.toml` and `vercel.json` both redirect `www` to `wildcatwashers.com` and map old paths to their new homes — keep the two in step when adding a redirect.
- Security headers and long-cache rules for `/_astro/*` are set in the same two files.

## More docs

`docs/START-HERE.md` is the entry point for the AEO/GEO content engine (page plan, quality bar, measurement). `BRAND.md` and `ASSET-PROVENANCE.md` cover the visual identity and where each photo came from.
