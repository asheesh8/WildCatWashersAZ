# The 150 pages

What's already built, what gets added, where it lives, and what each page must contain.

---

## The arithmetic

| Group | Route | Count | Status |
|---|---|---:|---|
| Home, about, contact, quote, thank-you, 404, legal | various | 8 | ✅ live |
| Residential, commercial, reviews, guarantee, FAQ | various | 5 | ✅ live |
| Service index + area index | `/services/`, `/areas/` | 2 | ✅ live |
| Service pages | `/services/[service]/` | 3 | ✅ live |
| Area pages | `/areas/[location]/` | 8 | ✅ live |
| Service × area | `/services/[service]/[location]/` | 24 | ✅ live |
| **Answer pages** | **`/answers/[question]/`** | **~101** | **to build** |
| | | **~151** | |

The existing 49 come out of the site repo's own templates and need no engine work. Everything the engine builds lands in one new section.

**Why all ~101 are answer pages.** The other obvious way to reach 150 is more service×location combinations — expand into the 41 named communities in `business.ts` and you'd hit the number in an afternoon. Don't. Those pages are structurally near-identical by construction, which is the exact shape Google's scaled-content-abuse policy describes, and §2 makes deficient pages our free-of-charge problem. Answer pages are each a different question with a different answer. They're harder to generate and much easier to defend, and they're the format answer engines actually quote.

---

## URL scheme

```
/answers/                              index, grouped by cluster
/answers/how-often-clean-solar-panels-tucson/
/answers/hard-water-spots-on-windows/
/answers/window-cleaning-cost-tucson/
```

Rules:

- **Question-shaped slugs.** `/answers/how-often-clean-solar-panels-tucson/` beats `/answers/solar-frequency/`. The URL is a retrieval signal and it's free.
- **Trailing slash**, matching `astro.config.mjs` (`trailingSlash: 'always'`). Vercel enforces it too.
- **Slugs are permanent.** They're the page identity across quarterly reviews. If a question needs rewording, change the `<title>`, not the URL.
- No dates, no numbers, no `-2` suffixes. A `-2` means you have two pages that should be one.

---

## Page template

One Astro route renders every answer page from a content collection entry. Written once, measured once against the §6 PageSpeed floor, inherited by all ~101.

**Required structure, top to bottom:**

1. **H1 = the question**, in the words a person would use.
2. **The short answer, 40–60 words, immediately.** No preamble, no "great question", no throat-clearing about how Tucson's climate is unique. This block is the thing an answer engine lifts, so it has to stand alone — someone reading only these 50 words gets a genuinely useful answer, and no pronoun in it refers to something above it.
3. **Detail sections**, 2–4, each under a real heading. This is where the local specifics live.
4. **What we actually do about it** — one short section connecting the answer to the service, with a link. This is the commercial turn and it earns its place only after the question is honestly answered.
5. **Related questions** — 3–5 internal links, generated in stage 5.
6. **One CTA.** The shared quote block. Not three.

**Constraints:**

- 350–700 words. Under 350 usually means the question was too thin to deserve a page — fold it into a neighbour. Over 700 usually means it's two questions.
- Zero per-page JavaScript. Shared bundle only.
- At most one image, through Astro's `<Image>` with explicit `widths`/`sizes`. Most answer pages need none.
- `QAPage` JSON-LD plus `Service` where a service is named.
- Every factual claim carries a `business.ts` fact ID (checked in stage 4).

---

## Question inventory

~116 candidates below for ~101 published pages — the gap absorbs judge rejections and merges. Mine more with the engine, but keep the cluster shape: it's what stops two writers producing the same page twice.

**Before writing any of these, check the answer against `business.ts`.** Several need a fact nobody has confirmed yet (real water hardness, actual prices, specific output-loss percentages). For those the sequence is: ask the client → add to `business.ts` → then write. Never let the model supply the number. A page that answers its question with a plausible invention is worse than no page, and it's the specific failure §2 makes us fix free.

### A. Cost and pricing — 14
What does window cleaning cost in Tucson? · What affects the price of a window cleaning job? · Is solar panel cleaning worth the cost? · How much does pressure washing a driveway cost? · Do you charge per window or per hour? · Is there a minimum charge? · Do two-story homes cost more to clean? · Are screens and tracks included in the price? · Do you charge extra for hard-water stain removal? · Is a recurring plan cheaper than one-off cleans? · Do you offer a discount for first-time customers? · Do you need to visit before quoting? · What's included in a free quote? · Do I pay before or after the work?

### B. Frequency and timing — 14
How often should windows be cleaned in Tucson? · How often should solar panels be cleaned in Tucson? · When is the best time of year to clean windows in Arizona? · Should I clean windows before or after monsoon season? · How long does window cleaning last in the desert? · Do you work during monsoon season? · What happens if it rains right after a clean? · How long does a typical window cleaning take? · How soon can you come out? · Do you clean in summer heat? · Should snowbirds clean before or after the season? · How often do driveways need pressure washing here? · When should I clean solar panels before peak season? · How far ahead should I book?

### C. Method, safety and equipment — 14
How do you clean windows without leaving streaks? · What is pure water window cleaning? · Do you use ladders or poles? · How do you reach second-story windows? · Are your cleaning products safe for pets? · Are they safe for desert landscaping? · Do you clean window screens? · How do you clean window tracks and sills? · Will pressure washing damage my stucco? · What PSI do you use on pavers? · Do you use soft washing? · Are you licensed and insured? · What happens if something is damaged? · Do I need to be home during the service?

### D. Problems and stains — 16
How do you remove hard water spots from windows? · Why do my windows have white spots that won't wipe off? · Can hard water damage glass permanently? · What causes the film on Tucson windows? · How do you remove sprinkler overspray from glass? · Why do my windows look dirty right after cleaning? · How do you clean sun-baked window screens? · What is caliche and how do you remove it from concrete? · How do you remove oil stains from a driveway? · How do you get rid of algae on a patio? · What causes dark streaks on stucco? · Why has my solar output dropped? · Can dust really reduce solar panel output? · How do you remove bird droppings from solar panels? · What is monsoon dust film? · Can you fix a window someone else scratched?

### E. Local and area — 14
Do you serve Green Valley? · Do you serve SaddleBrooke? · Do you work in Oro Valley and Catalina Foothills? · Do you serve Marana and Dove Mountain? · Do you cover Sahuarita and Rancho Sahuarita? · Do you work in Tanque Verde? · How far outside Tucson do you travel? · Do you work in retirement communities? · Why is window cleaning different in the desert? · Does Tucson's water make windows harder to clean? · Do you handle HOA requirements? · Do you clean homes in gated communities? · Which Tucson neighborhoods do you visit most? · Do you serve seasonal residents?

### F. Solar-specific — 12
Does cleaning solar panels actually increase output? · Will cleaning void my solar warranty? · Can I clean my own solar panels? · Why you shouldn't pressure wash solar panels · Do you clean panels on tile roofs? · How do you clean panels without walking on the roof? · Do you clean ground-mounted arrays? · How does dust affect panels in Arizona? · Do solar panels self-clean in the rain? · How long does solar panel cleaning take? · Do you clean commercial solar arrays? · What water do you use on panels?

### G. Pressure washing — 12
What surfaces can be pressure washed? · Driveway, patio or pool deck — what needs it most? · Will pressure washing remove old stains? · How often should a patio be cleaned? · Can you pressure wash a pool deck safely? · Do you seal after cleaning? · How long does concrete take to dry? · Will it damage my pavers or grout? · Do you pressure wash roofs? · Can you clean a garage floor? · Do you need my water or do you bring it? · How much water does a job use?

### H. Commercial, HOA and property management — 10
Do you clean storefront windows? · Do you offer recurring commercial contracts? · Can you work outside business hours? · Do you work with property managers? · Do you clean HOA common areas? · Do you provide certificates of insurance? · Can you clean multiple properties on one invoice? · Do you do post-construction cleaning? · Do you clean office buildings? · How do you handle access and keys?

### I. Choosing and trust — 10
How do I choose a window cleaning company in Tucson? · What questions should I ask before hiring? · What does your guarantee actually cover? · What happens if I'm not happy? · Are you a local company? · Who will show up at my house? · Do you run background checks? · Can I see examples of your work? · What if it rains within 10 days? · Do you require a contract?

---

## Anti-duplication

The failure mode for a build this size is two pages that answer the same question in different words. Search engines see near-duplicates, and the client sees us padding.

- **Cluster ownership.** One page per question per cluster. Cluster A owns *all* cost questions; a frequency page that drifts into pricing links to A instead of answering it.
- **Nearest-neighbour check before writing.** Every brief names its closest existing page and how it differs (`differentiator` in the brief). If you can't articulate the difference, there isn't one — merge.
- **A hard rule that will hurt:** if two drafts share their short answer in substance, one gets deleted, not reworded. Rewording near-duplicates is exactly the behaviour the scaled-content policy targets.
- **Location questions are answered once.** Cluster E answers "do you serve X" for the *areas that already have pages*. Never generate one per community — the 41 named communities belong inside their area page, and the existing service×location pages already cover the commercial intent.

---

## Order of build

1. **Cluster D (problems and stains)** first. Highest intent, most distinctive answers, and the hardest to fake — it's the best early test of whether the engine can produce something worth publishing.
2. **Clusters B and F.** Genuine local specificity, frequently asked of answer engines.
3. **Cluster A (cost).** Highest value, and the most likely to need facts the client must confirm first — start the confirmation conversation early.
4. **C, G, H, I, E** to fill.

Publish the first ten, measure PageSpeed on the real URLs, get Ashish's read on the actual output, *then* scale. The first cohort exists to find out what's wrong with the pipeline while it's cheap to change.
