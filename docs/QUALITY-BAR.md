# The quality bar

What passes, what gets rejected, and why the rubric is shaped this way.

Contract §2, in full, because it's the reason this document exists:

> Generated pages must be unique, useful, and compliant with Google's Spam Policies for Google Web Search in effect when published. Provider will review content and correct or replace deficient pages free of charge. Low traffic alone is not a content deficiency. Search rankings, indexing, traffic, leads, and inclusion in AI-generated answers are objectives, not guaranteed results.

Two things follow. **Deficient pages cost us money** — we fix them free, forever, on our time. And **a quiet page is not a deficient page** — nobody can demand a rewrite because a page didn't get traffic. The quality bar is about the page, not its performance.

---

## The policies that actually apply

Google's spam policies are public and worth reading once. Three are live risks for a 150-page programmatic build; the rest aren't things we'd do by accident.

**Scaled content abuse.** Generating many pages primarily to manipulate rankings rather than help people. The important nuance, and it's Google's own stated position: **using AI to make content is not itself a violation.** Low-value content produced at scale is, regardless of how it was made. A human typing 100 thin town pages violates this; a model writing 100 genuinely useful answers doesn't. The test is value per page, so that's what the rubric measures.

**Doorway pages.** Multiple similar pages targeting slight variations of a query that all funnel to the same destination. This is the trap our page mix is designed around: 100 "window cleaning in [community]" pages would be a textbook doorway farm. Answer pages avoid it because each one answers a genuinely different question and provides its value *on the page* rather than routing you elsewhere for it.

**Keyword stuffing.** Unlikely from a model with a voice guide, but check for the tell: the exact-match phrase appearing in the H1, the first sentence, three headings and the alt text.

The judge rubric maps onto these deliberately. Uniqueness is the scaled-content defence. Usefulness — *does the page answer its own question without making you go somewhere else* — is the doorway defence.

---

## The rubric

Five criteria, 1–10. Weighted overall. **Publish threshold: 8.0 overall with no criterion below 6.**

### Uniqueness (weight 25%)
Could this page be produced by find-and-replacing a noun in another page?

| Score | Means |
|---|---|
| 9–10 | Contains specifics no other page could carry — a local condition, a real constraint, a genuine trade-off |
| 7–8 | Distinct angle, some shared framing with its neighbours |
| 5–6 | Same shape as a sibling page with different nouns |
| 1–4 | Template with the variables swapped |

Below 6 is an automatic **reject**, not a revise. A page that scores 4 here doesn't need rewriting, it needs deleting — and if it scores 4, the brief was wrong, which means its neighbours are probably wrong too. Go back to the inventory.

### Usefulness (weight 25%)
Does a person with this exact question leave satisfied — *without contacting us*?

| Score | Means |
|---|---|
| 9–10 | Fully answered, including the part that costs us something to admit |
| 7–8 | Answered; edges left open |
| 5–6 | Partial answer, leans on "it depends" or "call for a quote" |
| 1–4 | The answer is effectively "hire us" |

The counter-intuitive rule: **a page that tells you when you don't need us scores higher than one that doesn't.** "Can I clean my own solar panels?" answered honestly — yes, here's how, here's when it's a bad idea — is a better page commercially *and* by this rubric than a page that says no. It's also the kind of page an answer engine quotes, because it reads as information rather than marketing.

### Grounding (weight 25%)
Every factual claim traces to a `business.ts` fact ID.

**This one is binary in effect.** Any unsourced factual claim caps the page at `revise` regardless of the other scores. A number the model invented — a price, a percentage, a frequency, a water-hardness figure — is the single most damaging thing this pipeline can produce, because it's wrong in a way that reads as authoritative and nobody catches it until a customer quotes it back to the crew.

Stage 4 checks the `claims[]` array mechanically: every entry needs a `factId` that exists. General knowledge ("dust accumulates faster in arid climates") doesn't need one. Anything specific to *this business* or *this place* does.

### Voice (weight 15%)
Reads like the crew, per `BRAND.md`: friendly, local, hardworking, accountable. Plain sentences. No superlatives, no invented review counts, no "nestled in the heart of the Sonoran Desert."

Watch for the model's default register — the three-item lists, the "Whether you're X or Y" opener, the closing paragraph that restates the intro. Those aren't wrong exactly; they're the texture that makes a page read as generated, and readers clock it even when they can't name it.

### Answer-first structure (weight 10%)
Does the 40–60 word short answer stand alone? Could you lift it into a chat response and have it be correct, complete and free of dangling references?

This is the AEO criterion. It's weighted lowest because it's the easiest to fix mechanically and the least likely to be catastrophically wrong.

---

## Automatic rejections

No score needed:

- A claim with no fact ID that isn't general knowledge.
- Any invented number — price, percentage, timeframe, measurement.
- A guarantee stated differently from `business.ts`. The rainproof guarantee is 10 days. Not "about a week," not "up to two weeks."
- Any promise of rankings, traffic, or being cited by AI. §2 explicitly makes these objectives, not results — and that applies to what our *pages* claim too.
- Medical, legal or safety advice beyond "we don't recommend that, here's why."
- A short answer that's really a CTA.
- Duplicate short answer with an existing page.

---

## Keeping the judge honest

LLM judges drift generous. Not sometimes — reliably, and quietly. It'll pass things month two that it rejected month one, and nothing in the output will look different.

Build the counter-measure on day one, because retrofitting it means re-auditing everything published in between:

1. **Hand-score 20 pages yourself.** Include 5 deliberately bad ones — one keyword-stuffed, one thin, one with an invented statistic, one that's a sibling page with nouns swapped, one that answers with a CTA.
2. **Re-run that set whenever you change the rubric, the judge prompt, or the model.**
3. **If a known-bad page passes, the gate is broken.** Fix it before generating anything else. Not after the run finishes.
4. **Log every score.** If mean scores climb over a run while the pages don't visibly improve, that's drift, and the only way you'll see it is in the numbers.

Judge before generating at volume, too. A hundred pages through an uncalibrated judge is a hundred pages you have to re-review by hand.

---

## Human review

The judge is a filter, not an approval. A human reads every page before it ships — at least in the first cohorts.

Per page, about ten minutes:

- [ ] Read the short answer alone. Is it true, complete, and standalone?
- [ ] Spot-check two claims against `business.ts`.
- [ ] Open the nearest sibling page side by side. Are these genuinely two pages?
- [ ] Would you send this to a customer who asked this question? *This is the real test — everything above is a proxy for it.*
- [ ] Anything here the crew would be embarrassed to be asked about?

Review gets faster as the pipeline stabilises, and you can sample rather than read every page once a cohort has proven itself. Don't sample before then.

---

## Performance budget (§6)

The PageSpeed guarantee — 90+ on mobile and desktop, fixed free while hosting is active — is a per-page obligation on everything we deliver.

The structural protection is that all ~101 answer pages render from **one template**, so one measurement covers all of them. Protect that:

- No per-page JavaScript. No library imports in generated content. Not "just this one page."
- At most one image per page, via Astro's `<Image>` with explicit `widths`/`sizes`. Most answer pages need zero.
- No embeds — no maps, no video, no third-party widgets.
- Nothing in the shared head grows because of these pages.

Measure on real URLs after the first cohort, and again after every 25 pages. Mobile, on the throttled run pagespeed.web.dev actually reports — desktop numbers will look fine long after mobile stops being fine.

If a score does slip: it's ours to fix, free, until it passes. Cheaper to not ship the regression.

---

## The one-sentence version

If you wouldn't send the page to a customer who asked that exact question, it doesn't ship — and no rubric score overrides that.
