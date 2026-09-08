# Wildcat Washers — final brand website

Astro site combining the two supplied demos. Real crew film, electric cyan/navy visual system, Barlow Condensed display type, original brand marks, 28 customer reviews retained from demo 1, and a custom mouse-controlled glass/squeegee interaction. Includes the 49 static pages from the service/area architecture.

## Run

```sh
npm install
npm run dev
```

Local preview: http://localhost:4501/

```sh
npm run build
npm run preview
```

## Key files

- `src/pages/index.astro`: final homepage.
- `src/styles/brand.css`: shared brand and responsive styling.
- `src/styles/immersive.css`, `src/scripts/immersive-scroll.ts`: centered hero, native scroll motion and immersive scene layout.
- `src/styles/wash-world.css`, `src/scripts/wash-world.ts`, `src/components/WashBackdrop.astro`: soap flow and water droplets, framed photo tilt/rinse interactions, compact reviews/locations/FAQ, and page-motion pause controls.
- `src/components/GlassStudio.astro`, `src/scripts/glass-scene.ts`: direct mouse/touch/keyboard cleaning with a removable canvas frost layer.
- `src/scripts/cleaning-tool.ts`: optional lazy-loaded Three.js mop/squeegee cursor; CSS tool fallback.
- `src/data/business.ts`: business facts, service definitions and location data.
- `src/data/reviews.ts`: customer text retained from the first demo. Source review dates are intentionally omitted.
- `src/components/QuoteForm.astro`: quote request flow, service/area preselection and email handoff.

## Quote delivery

No CRM or form endpoint was configured in either supplied demo. By default the form prepares a request and shows an explicit email link; the visitor presses Send in their email app. The UI never claims that a request was delivered automatically. Set `PUBLIC_QUOTE_ENDPOINT` to a real form provider accepting multipart POST for automatic delivery, then rebuild. Existing Netlify Forms markup is retained; NETLIFY=true at build time (or PUBLIC_FORM_PROVIDER=netlify) enables native delivery on custom domains. Verify form detection and routing on the chosen host before launch.

## Content and media provenance

- Logos, mascot, photos and videos are supplied Wildcat assets from the two demos.
- Homepage video: original 14-second real-job edit from demo 2; small mobile variant included. No AI footage is represented as actual work.
- Business website checked September 7, 2026: https://www.wildcatwashers.com/ and /residential — supports 500+ clients, 10-day rainproof guarantee and 10% first-service discount. These replace demo 2's conflicting 1,000+/14-day claims.
- Phone/email retained from both demos. Inconsistent appointment hours were removed from visible contact details and structured data.
- Reviews are verbatim supplied demo 1 content, where documented as Google reviews; exact live Google count is not claimed.
- Higgsfield generated the Sonoran landscape used in the interactive brand scene. It is an AI illustration, not a customer property or result. Full prompt, job ID and model are recorded in `ASSET-PROVENANCE.md`. Generation estimate: 2 credits; no credits purchased.
- The custom 3D squeegee follows the pointer while a canvas layer erases along its blade. Rendering stops when stationary/offscreen or the tab is hidden, caps resolution, and honors reduced motion. Cleaning works with a CSS tool if WebGL is unavailable. Touch uses an explicit cleaning mode so normal page scrolling remains available; Reveal and Reset support keyboard use.

## Before public launch

Connect and verify the destination form provider, review all business promises with the owner, confirm the canonical domain, and deploy the generated `dist` directory to the selected host. Existing Netlify/Vercel configuration is retained. No public deployment or original demo changes were made.
