# Wildcat Washers

The public website for Wildcat Washers — window cleaning, solar panel cleaning and pressure washing in Greater Tucson, Arizona. Built by [ArkiTech Solutions](https://github.com/asheesh8).

Static Astro site. No database, no server runtime, no CMS. Every page is HTML generated at build time from one TypeScript file of business facts.

**New here? If you're joining to work on AEO/GEO content, read [`docs/START-HERE.md`](docs/START-HERE.md) first — this README covers the website, that folder covers the content engine.**

---

## Quick start

```bash
npm install
npm run dev
```

Opens on **http://localhost:4501**. Hot reload is on; edit and the browser updates.

```bash
npm run build      # static output into dist/ — 49 pages, ~2s
npm run preview    # serve the built site on :4321
```

Node 20.3+ required (`engines` in `package.json`).

---

## The one rule

**`src/data/business.ts` is the single source of truth for every factual claim on the site.**

Phone numbers, service names, guarantee lengths, customer counts, service areas, FAQ answers — all of it lives in that one file, and every page, template and schema block reads from it. The file says it plainly at the top:

> 1. If a fact is not in this file, it does not go on the website.
> 2. Change a number here and it changes everywhere — never hard-code counts, guarantee lengths, phone numbers or service names into a page.
> 3. Anything marked `TODO` is unverified and must be confirmed by Wildcat before it ships. Do not invent replacements.

This is not style preference. It is what makes 150 generated pages defensible: one place to correct a fact, one place to audit, and no page can claim something the business hasn't confirmed. Breaking this rule is the fastest way to create a problem nobody notices for six months.

---

## How the site is built

### Pages

49 pages come out of 17 route files, because three of them are templates that expand:

| Route file | Produces | Count |
|---|---|---|
| `src/pages/services/[service]/[location].astro` | Every service × area combination | 24 |
| `src/pages/services/[service]/index.astro` | One page per service | 3 |
| `src/pages/areas/[location].astro` | One page per service area | 8 |
| everything else in `src/pages/` | Home, about, quote, FAQ, guarantee, reviews, contact, legal, 404… | 14 |

The combination pages get a different photo per service×location (seeded, deterministic), locally-worded FAQs, and area-specific review selections — so no two are the same document with the town name swapped. Keep it that way; see [`docs/QUALITY-BAR.md`](docs/QUALITY-BAR.md).

Add a service or an area to `business.ts` and the pages, navigation, sitemap, schema and answer index all follow automatically.

### Layout and structured data

`src/layouts/Base.astro` wraps every page and owns the `<head>`: canonical URL, robots directives, Open Graph, and the JSON-LD graph (`LocalBusiness` + `WebSite` + breadcrumbs). Pages pass extra JSON-LD nodes through the `schema` prop rather than writing their own `<script>` tags.

### The answer index

`src/pages/ask-index.json.ts` builds **`/ask-index.json`** at build time — every service, area, combination, FAQ, guarantee and contact route as a flat list of `{question, answer, href, terms}` entries. Two consumers:

- `src/components/AskWildcat.astro` — the on-site natural-language search. Runs entirely in the browser against that JSON. No API key, no model call, and it cannot invent an answer: everything it says already exists on the site.
- Anything machine-reading the site. This file is the AEO surface, and the content engine extends it.

### Styles and motion

| File | Owns |
|---|---|
| `src/styles/global.css` | Reset, typography scale, base components |
| `src/styles/brand.css` | Brand system, section layouts, responsive rules |
| `src/styles/immersive.css` | Hero composition, scroll-driven layout |
| `src/styles/wash-world.css` | Homepage motion: soap flow, water beads, photo dust, headline wipe, water spots |

Homepage interactions live in `src/scripts/`. All of them respect `prefers-reduced-motion` and the on-page **Pause motion** toggle, which dispatches a `wildcat:motion` event that every animated component listens for. The signature interaction — a squeegee that clears fogged glass (`GlassStudio.astro` + `glass-scene.ts`) — lazy-loads Three.js only when it scrolls into view, and falls back to a CSS tool without WebGL.

**These heavy interactions are homepage-only, and they must stay that way.** See the performance budget below.

---

## Performance budget — this is contractual

The hosting agreement guarantees a **Google PageSpeed Insights Performance score of 90 or higher on both Mobile and Desktop** at https://pagespeed.web.dev/, for the public pages delivered under it. If a score drops below 90, ArkiTech fixes it free and retests. That obligation runs the whole time hosting is active.

Practical consequences:

- **Measure before you merge anything that adds weight.** Mobile is scored on throttled hardware; desktop scores tell you almost nothing about it.
- **The homepage carries the most risk** — it's the only page with a hero video and Three.js. Test it first, every time, and treat its score as the canary.
- **Content pages get the lean template.** No video, no WebGL, no per-page JavaScript beyond what's already shared. A hundred generated pages that each pull a library is how this guarantee gets expensive.
- Images go through Astro's `<Image>` with explicit `widths`/`sizes` — never a raw `<img>` with a full-size source.
- `vercel.json` sets immutable caching on `/_astro/*`. Don't add cache-busting query strings to hashed assets.

---

## Deploying

Vercel, from `main`. `vercel.json` is committed and complete: framework preset, build command, output directory, `trailingSlash: true` (matching `astro.config.mjs`), legacy `.html` redirects, security headers and asset caching. Import the repo and it builds.

Two things to set on the host:

1. **`PUBLIC_QUOTE_ENDPOINT`** — where the quote form POSTs. Without it the form does *not* silently fail: it shows the visitor a call/email fallback with their answers pre-filled. But nothing reaches you. Any endpoint accepting a multipart POST works (Formspree, Basin, a Zapier catch hook). See `.env.example`.
2. **The domain must be `www.wildcatwashers.com`** — that value is `site` in `astro.config.mjs` and it's baked into canonicals and the sitemap. Different domain? Change it there and redeploy.

`netlify.toml` is also present if the host ever changes.

---

## Repository map

```
src/
  data/business.ts        ← the fact bank. Start here. Everything reads from it.
  data/reviews.ts         ← customer review text (verbatim; source dates deliberately omitted)
  data/media.ts           ← image pools + deterministic per-page photo selection
  layouts/Base.astro      ← <head>, JSON-LD graph, header/footer wrapper
  pages/                  ← routes; three files are templates that expand
  components/             ← page sections (AskWildcat, QuoteForm, GlassStudio…)
  scripts/                ← homepage interaction code
  styles/                 ← four CSS layers, cascading in the order above
docs/                     ← AEO/GEO content engine: plan, quality bar, measurement
public/                   ← brand assets, video, robots.txt, favicons
```

Companion docs: [`BRAND.md`](BRAND.md) for the visual and voice system, [`ASSET-PROVENANCE.md`](ASSET-PROVENANCE.md) for where every image and video came from (including which asset is AI-generated and must never be presented as customer work).

---

## Content and claims

Everything on this site traces to something verifiable, and that is deliberate:

- Business facts were checked against the live wildcatwashers.com on September 7, 2026 — 500+ clients, 10-day rainproof guarantee, 10% first-service discount.
- Reviews are verbatim customer text supplied by the client. Exact live Google counts are not claimed, and source dates were omitted rather than guessed.
- The Sonoran desert scene in the homepage glass interaction is **AI-generated** (Higgsfield; full prompt and job ID in `ASSET-PROVENANCE.md`). It is a brand illustration. It is never presented as a customer property or a cleaning result.
- Anything unverified is marked `TODO(wildcat)` in `business.ts` and must be confirmed by the owner before launch.

Hold new content to the same line. The engine in `docs/` is built around it.
