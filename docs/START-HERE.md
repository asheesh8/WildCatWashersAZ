# Start here — Michael

You're taking the **AEO/GEO** half of the Wildcat Washers project: the content engine and the pages it produces. Ashish keeps the website itself.

Read this page, then [`AEO-GEO-FRAMEWORK.md`](AEO-GEO-FRAMEWORK.md). The rest you can pull up when you need them.

| Doc | What it answers |
|---|---|
| **START-HERE.md** (this) | What am I building, by when, and what does "done" mean? |
| [`AEO-GEO-FRAMEWORK.md`](AEO-GEO-FRAMEWORK.md) | How does the engine work? Stages, data contracts, cost. |
| [`PAGE-PLAN-150.md`](PAGE-PLAN-150.md) | Which 150 pages, exactly? URLs, template, question inventory. |
| [`QUALITY-BAR.md`](QUALITY-BAR.md) | What passes, what gets rejected, and why the rubric is shaped that way. |
| [`MEASUREMENT-AND-PRUNING.md`](MEASUREMENT-AND-PRUNING.md) | The quarterly keep/revise/cut loop we owe the client. |
| [`PRODUCTIZE.md`](PRODUCTIZE.md) | How this becomes a thing ArkiTech sells again. |

---

## The job in one paragraph

Wildcat Washers is a real window/solar/pressure-washing company in Tucson. Their site is live with 49 pages. The contract commits us to **150 pages** covering their services across greater Tucson, built to be useful to humans, indexable by Google, and quotable by answer engines (ChatGPT, Claude, Perplexity, AI Overviews). You are building the **engine that generates those pages and the quality gate that keeps them defensible** — and building it so ArkiTech can point it at the next client without a rewrite.

---

## What the contract actually requires

You don't need to read the whole agreement, but four clauses shape every technical decision. These are commitments, not aspirations.

**§1 — 150 pages.** "The starting scope is 150 pages about Client's services in the greater Tucson, Arizona area." It's explicitly an *initial build* scope, not a permanent floor — quarterly pruning may reduce the count and we don't have to backfill to stay at 150. So: 150 is the build target, not a number to pad toward.

**§2 — Content quality.** "Generated pages must be unique, useful, and compliant with Google's Spam Policies for Google Web Search in effect when published. Provider will review content and correct or replace deficient pages free of charge." Read that second sentence again — **we eat the cost of bad pages.** A page that gets flagged is worse than a page that never shipped. This is why there's a judge stage and why it can reject.

Also in §2: "Search rankings, indexing, traffic, leads, and inclusion in AI-generated answers are objectives, **not guaranteed results**." Never promise the client a ranking. Also: "Low traffic alone is not a content deficiency" — a quiet page isn't a broken page.

**§6 — PageSpeed ≥ 90, mobile *and* desktop.** Measured at pagespeed.web.dev, on the public pages we deliver, for as long as hosting is active, fixed free if it slips. Your 100 pages all live under this. Practically: the content template is lean, static, and image-disciplined. No per-page JavaScript libraries. Ever.

**§4 — Quarterly pruning.** Every page needs three months of tracking data, then gets evaluated and kept, revised, consolidated or removed. Which means: **tracking has to exist from the first page you publish**, and every page needs a stable identity you can follow across quarters. Retrofitting this is miserable. See [`MEASUREMENT-AND-PRUNING.md`](MEASUREMENT-AND-PRUNING.md).

---

## The timeline problem — read this before you plan

**§3: "The initial development period runs through October 1, 2026."** That's about three weeks from now.

Building an engine, mining ~110 questions, generating, judging, human-reviewing, and publishing 100 pages in three weeks is not realistic at a quality bar we're contractually on the hook for. The good news is the contract anticipates this: §3 continues, *"The parties will coordinate launch timing and priorities, with any revised schedule or remaining initial work agreed in writing"* — and email counts (§1).

So there are two honest paths, and **Ashish picks — this is a client conversation, not a technical one**:

1. **Ship a slice by Oct 1.** Engine working end to end, 20–30 pages published and tracked, remainder on a written schedule. Lower risk, and the first cohort's three-month data starts accruing on time, which matters for the §4 review.
2. **Push for all 100 by Oct 1.** Possible only if the human review queue is genuinely staffed — the model isn't the bottleneck, review is (see the cost section in the framework doc). High risk of exactly the deficient pages §2 makes us fix free.

Raise this with Ashish in week one. Do not silently discover it in week three.

---

## What you own vs. what you don't

**Yours:**
- The engine — a separate ArkiTech repo (see below).
- The question inventory and briefs.
- The judge rubric and the review queue.
- The generated answer pages' content.
- The measurement plumbing and the quarterly report format.

**Not yours (talk to Ashish before touching):**
- The existing 49 pages, the homepage interactions, the brand system.
- `src/data/business.ts` — you *read* from it constantly. You add to it only via PR, because every fact in it is one the client confirmed.
- Anything that changes what the site claims about the business.

---

## Repo split — and why it matters to you

Two repos:

```
arkitech/aeo-engine     ← yours. The generator, rubric, adapters, CLI.
                          Client-agnostic. Wildcat is a config file in it.
asheesh8/WildCatWashersAZ ← the website. Consumes generated content as files.
```

This isn't bureaucracy. Contract §8: on full payment the client owns "the final custom website content and deliverables created specifically for Client," while ArkiTech "retains its pre-existing tools, code, templates, processes, know-how, and reusable components." The generated Wildcat pages are theirs. **The engine is ours** — which is the whole basis for reselling it. Keeping the engine's code and history in a repo the client owns muddies that line for no benefit.

The practical rule: **if it mentions Wildcat, it's config or output, not engine.** A hardcoded "Tucson" in engine code is a bug. See [`PRODUCTIZE.md`](PRODUCTIZE.md).

---

## Week one

**Decide and write down: which model provider.** Ashish deliberately left this to you. The requirements are in [`AEO-GEO-FRAMEWORK.md`](AEO-GEO-FRAMEWORK.md) — long shared context that wants prompt caching, a bulk/batch path, cheap models for the judge tier, structured JSON output. Pick one, put a paragraph in the engine README on why, and keep the provider behind the adapter interface so the choice stays cheap to revisit.

**Then, in rough order:**

1. Clone the site repo, `npm install`, `npm run dev`. Read `src/data/business.ts` end to end — it's the input to everything you'll build. Note the `problems`, `pricingFactors`, `limitations`, `localNotes` fields on services and the `communities`/`zips`/`localNotes` on locations. That's your raw material.
2. Run the homepage through pagespeed.web.dev on mobile. Record the number. That's your §6 baseline and you want it before you add anything.
3. Stand up the engine repo skeleton with the stage boundaries from the framework doc. Run **one** question end to end — brief → draft → judge → file — before building stage two of anything.
4. Get the question inventory to ~110 candidates ([`PAGE-PLAN-150.md`](PAGE-PLAN-150.md) has the taxonomy and a starting set).
5. Publish a first cohort of 10 behind the real template, measure PageSpeed on them, and get Ashish's review on the actual output before scaling. **Ten reviewed pages tell you more than a hundred unreviewed ones.**

## Access you'll need

Ask Ashish for these on day one; two of them have lead time.

- Write access to the site repo (or fork + PR — PR is fine and arguably better).
- A GitHub org/repo for the engine.
- Model provider API key and a spend cap.
- Google Search Console access for wildcatwashers.com — **request this early**, verification can take a day and you cannot do §4 measurement without it.
- Whatever analytics ends up on the site (§1 leaves the platform open — if nothing's chosen yet, that's your call to make and justify).

---

## Definition of done

The build is done when all of these are true:

- [ ] A page can be generated, judged, revised, human-reviewed and published by running one command, and the steps are logged.
- [ ] Every factual claim on a generated page traces to a `business.ts` field. No exceptions, and the judge enforces it rather than trusting the writer.
- [ ] The judge rejects bad pages, and you can show a sample of what it rejected and why. (A judge that passes everything isn't a gate, it's a formality.)
- [ ] Published pages score ≥90 mobile and desktop on PageSpeed, measured on real URLs, not predicted.
- [ ] Every page has a stable ID, a publish date, and tracking, so the first quarterly review can actually run.
- [ ] The engine runs for a second, fictional client from a different config with no code changes. This is the resale test and it's easy to pass if you design for it and expensive to retrofit if you don't.
- [ ] The engine repo's README lets someone who isn't you run it.

---

## How to ask questions

Ashish knows this client and this contract. When something's ambiguous — a claim you can't source, a question you're not sure is honest to answer, a schedule that won't fit — ask early and in writing. §7 puts the obligation on both sides to confirm material changes in writing, and "I assumed" is the expensive answer three weeks in.
