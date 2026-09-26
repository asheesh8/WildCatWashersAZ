# Wildcat Washers

The public website for Wildcat Washers: window cleaning, solar panel cleaning, pigeon proofing, solar screens, screen repair and pressure washing across Greater Tucson and Southern Arizona.

Static Astro site. No database, no server runtime. Every page is generated at build time from typed data files.

## Quick start

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

Set `PUBLIC_QUOTE_ENDPOINT` to any service that accepts a POST (Formspree, Basin, a Zapier hook). On Netlify the form works with no endpoint. With neither, the form shows a call/email fallback instead of pretending to send.

## Hosting

`netlify.toml` and `vercel.json` both redirect `www` to `wildcatwashers.com` and map old paths to their new homes.
