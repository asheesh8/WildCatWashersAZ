# The AEO/GEO engine

How the content engine works: what the stages are, what moves between them, and why it's shaped this way.

---

## What we're optimizing for

Three overlapping audiences, one page:

**SEO** — Google's index. Ranking for "window cleaning Green Valley AZ". Well-understood, still the traffic base.

**AEO (answer engine optimization)** — being the source a system quotes when someone asks a question. Google's AI Overviews, ChatGPT, Claude, Perplexity. The unit of value is *a question answered cleanly enough to be lifted*, not a keyword.

**GEO (generative engine optimization)** — being retrievable and quotable by a model that crawls or fetches the site. Machine-readable structure, unambiguous facts, self-contained answers that survive being pulled out of context.

The practical convergence: **one page, one real question, answered in the first hundred words, backed by specifics only this business can supply.** That shape happens to be what all three reward, which is lucky, because we can't build three sites.

What that rules out: pages that bury the answer under 600 words of preamble; pages whose "answer" is *contact us for a free quote*; and eight near-identical pages with a town name swapped. The last one is also a spam-policy problem — see [`QUALITY-BAR.md`](QUALITY-BAR.md).

---

## Pipeline

Six stages. Each one takes a file and writes a file, so any stage can be re-run alone, diffed, and cached.

```
  fact bank (business.ts)
          │
     ┌────▼─────┐
     │ 1 PLAN   │  question inventory → briefs          [LLM-assisted + human review]
     └────┬─────┘
          │  brief.json
     ┌────▼─────┐
     │ 2 GROUND │  attach only the facts this brief may use   [deterministic]
     └────┬─────┘
          │  brief.grounded.json
     ┌────▼─────┐
     │ 3 WRITE  │  draft the page                       [LLM]
     └────┬─────┘
          │  draft.json
     ┌────▼─────┐
     │ 4 JUDGE  │  score vs rubric → pass / revise / reject   [LLM, different model]
     └────┬─────┘
          │  score.json        ─── revise ──> back to 3 (max 2 loops)
          │                    ─── reject ──> human queue
     ┌────▼─────┐
     │ 5 LINK   │  internal links + JSON-LD + validation      [deterministic]
     └────┬─────┘
          │  page.mdx (+ frontmatter)
     ┌────▼─────┐
     │ 6 SHIP   │  write into site repo, open a PR      [deterministic + human merge]
     └──────────┘
```

**Stages 2, 5 and 6 are deterministic code, not model calls.** That's the important structural decision. Grounding, linking, schema and publishing are all things a model can do plausibly and get subtly wrong, and they're all things ordinary code does perfectly. Every stage you can move out of the model is a category of bug you don't have to test for. Only 1, 3 and 4 need judgment.

### 1 — Plan

Turns the fact bank plus a question inventory into one brief per page. Question mining is LLM-assisted (see [`PAGE-PLAN-150.md`](PAGE-PLAN-150.md) for the taxonomy and the starting inventory), but **a human approves the inventory before anything gets written.** A bad question produces a page nobody should have written, and no amount of downstream quality control fixes that.

The brief is the contract for the page. It names the question, the angle, which facts are in play, what makes it different from its neighbors, and what it must not claim.

### 2 — Ground

Pure code. Given a brief, pull the exact `business.ts` entries it's allowed to use and attach them with their IDs. The writer sees *only* these facts.

This is the anti-hallucination mechanism, and it's a mechanism rather than an instruction. Prompting a model to "only use provided facts" reduces invention; restricting the input and then checking every claim against fact IDs catches what's left. The site already runs on this rule for human-written pages — it's the first thing `business.ts` says. The engine inherits it.

If a page genuinely needs a fact nobody has confirmed (real local pricing, water hardness in a specific ZIP, an HOA rule), the answer is not to let the model fill it in. It's to add the fact to `business.ts` via PR after the client confirms it, or to drop the page.

### 3 — Write

Draft from the grounded brief. Wants the strongest model you have — this is the judgment-heavy step and the volume is small enough that the price difference is rounding error (see costs below).

Two things go in the system prompt and stay byte-identical across every page in a run: the brand voice from `BRAND.md`, and the page contract. Identical prefix means the provider can cache it, which is most of the cost saving available here.

Output is structured (JSON), not prose-with-markdown-in-it. You want `{question, shortAnswer, sections[], claims[]}` with `claims[]` carrying fact IDs, because stage 4 checks those IDs mechanically.

### 4 — Judge

A separate call, ideally a different (cheaper) model, scoring the draft against the rubric in [`QUALITY-BAR.md`](QUALITY-BAR.md) and returning structured output: per-criterion scores, an overall, a verdict, and specific defects.

Why a separate model rather than asking the writer to self-check: a model reviewing its own output in the same context grades generously. Fresh context and a different model is a real check. This is a standard LLM-as-judge setup and the failure mode is well-known — **judges drift generous.** Counter it: keep a small labelled set of pages you've hand-scored (including deliberately bad ones), and re-run it whenever you touch the rubric or the prompt. If your known-bad pages start passing, the gate is broken and you won't notice any other way.

Verdicts: `pass` publishes. `revise` returns defects to stage 3, capped at two loops. `reject` goes to a human queue and never auto-publishes.

### 5 — Link and mark up

Deterministic. Internal links from the fact bank's own relationships (this question ↔ its service ↔ its area ↔ its neighbours), JSON-LD from the page type, then validate: schema parses, links resolve, no orphan pages, no fact ID that doesn't exist.

Orphan check matters more than it sounds. A hundred pages nothing links to is a hundred pages that read as a doorway farm to a crawler and get no internal signal.

### 6 — Ship

Writes content files into the site repo and opens a PR. **A human merges.** Not because the review is thorough at that point — it isn't, that was stage 4 — but because a merge button is a cheap circuit breaker for the run that goes wrong at 3am, and §2 makes bad pages our problem to fix free.

---

## Data contracts

Keep these stable; everything else is implementation detail you can rewrite.

```jsonc
// brief.json — what to write
{
  "id": "how-often-solar-panels-tucson",     // stable forever. Never regenerate.
  "question": "How often should solar panels be cleaned in Tucson?",
  "intent": "informational",                  // informational | commercial | local
  "service": "solar-panel-cleaning",          // slug from business.ts, or null
  "location": null,                           // slug from business.ts, or null
  "angle": "Dust cycle and monsoon timing drive frequency here, not a generic rule",
  "mustCover": ["monsoon dust load", "output loss between cleans", "what we actually recommend"],
  "mustNotClaim": ["specific % output gain", "any price"],
  "differentiator": "Tucson's two-season dust pattern; nearest page is the general solar service page",
  "factIds": ["service.solar-panel-cleaning.problems", "company.region", "guarantee.rainproof"]
}

// draft.json — what the writer returns
{
  "briefId": "how-often-solar-panels-tucson",
  "title": "How often should solar panels be cleaned in Tucson?",
  "shortAnswer": "…40–60 words. Self-contained. Survives being quoted alone.",
  "sections": [{ "heading": "…", "body": "…" }],
  "claims": [{ "text": "…", "factId": "service.solar-panel-cleaning.problems" }],
  "internalLinkTargets": ["/services/solar-panel-cleaning/", "/areas/tucson/"]
}

// score.json — what the judge returns
{
  "briefId": "how-often-solar-panels-tucson",
  "scores": { "uniqueness": 8, "usefulness": 9, "grounding": 10, "voice": 7, "answerFirst": 9 },
  "overall": 8.6,
  "verdict": "pass",                          // pass | revise | reject
  "defects": [],
  "unsourcedClaims": []                       // any claim without a valid factId → not a pass
}
```

Every ID is stable for the life of the page. The quarterly review in [`MEASUREMENT-AND-PRUNING.md`](MEASUREMENT-AND-PRUNING.md) follows pages across three-month windows; regenerating IDs breaks that history silently.

---

## Provider adapter

Ashish left the provider choice to you. Keep it behind one interface so the choice stays reversible:

```ts
export interface ModelAdapter {
  name: string;
  complete(req: {
    system: string;            // stable prefix — identical across a run, so it caches
    user: string;              // the per-page part
    schema: JSONSchema;        // structured output
    maxTokens: number;
  }): Promise<{ json: unknown; usage: { in: number; out: number; cached: number } }>;
}
```

Non-negotiables when you evaluate providers:

- **Structured JSON output** against a schema. Parsing prose is a bug farm.
- **Prompt caching**, with a way to *verify* it (a usage field reporting cached tokens). Our shared prefix is most of every request; if it isn't caching, you're paying ~10× for nothing and the only way you'll know is by reading usage numbers.
- **A batch path.** 150 pages have no latency requirement. Most providers discount async bulk work substantially — on the Anthropic API the Message Batches endpoint runs at 50% cost.
- **A cheap second tier** for the judge and for bulk extraction.

Return `usage` from every call and log it per page. Cost per page is the number that tells you whether the pipeline is sane, and you can't get it retroactively.

If you go with the Anthropic API: the SDK is `@anthropic-ai/sdk`, current default model `claude-opus-5` for the writer, `claude-sonnet-5` or `claude-haiku-4-5` for the judge tier. Cache the system prefix with `cache_control: { type: "ephemeral" }` and check `usage.cache_read_input_tokens` is non-zero on request two — if it's zero, something in your prefix is varying (a timestamp, an unsorted object key) and it will cost you the whole saving. Batch via `client.messages.batches.create`; results come back keyed by `custom_id`, in any order.

---

## What this costs

Worth doing the arithmetic early, because it reframes where to spend your effort.

Per page: a shared prefix around 15K tokens (fact bank slice, brand voice, contract, rubric), roughly 1K of per-page brief, and about 2.5K of output. Judge adds a similar input and ~600 tokens out. Assume ~1.4 write passes per page after revisions.

At current frontier-tier pricing with the shared prefix cached, that lands around **$0.10–$0.15 per page**, so **roughly $15–20 for all 110** — call it under $50 with every retry, false start and rerun included. Batch pricing halves it. Verify with your own numbers rather than trusting mine, but the order of magnitude won't move.

**The model spend is noise. The expensive resource is human review time.** Ten minutes of real review per page across 110 pages is about 18 hours, and it's the part that actually determines whether we're on the hook for §2 rework. Optimize the review queue — batch similar pages, front-load the judge so humans see fewer bad drafts, make the review UI show the diff against the nearest page. Do not spend a week shaving 30% off a $20 bill.

---

## Machine-readable surfaces

Four of them. The first already exists and is the most valuable.

**`/ask-index.json`** — built by `src/pages/ask-index.json.ts`, a flat list of `{title, answer, href, terms}` covering every service, area, combination, FAQ and guarantee. Extend it with the answer pages; that's a small change to an existing file. It powers on-site search *and* gives any crawler a clean map of what this site can answer. This is the highest-leverage AEO artifact on the site and it's already built.

**JSON-LD.** `Base.astro` emits `LocalBusiness` + `WebSite` + breadcrumbs on every page; pages add nodes via the `schema` prop. Answer pages should add `QAPage` or `FAQPage` plus `Service` where relevant. One caveat so you're not surprised: since 2023 Google restricts FAQ *rich results* to well-known authoritative government and health sites, so this markup will not win you rich snippets for a cleaning company. It still earns its place — it makes the page's structure unambiguous to anything parsing it, including answer engines. Mark it up for machine comprehension, not for stars in the SERP.

**`robots.txt`** currently allows everything, including AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended). For a business that wants to be quoted by answer engines this is correct — but make it a *deliberate* decision, in writing, not an accident of the default file. If Wildcat ever wants out, that's the lever.

**`llms.txt`** — a proposed convention (a Markdown index of the site at `/llms.txt`) that some AI tools read and no major crawler formally commits to honoring. Cheap to generate from the same data as the ask-index, unproven in effect. Ship it as a byproduct, don't build a strategy on it, and don't tell the client it does something we can't demonstrate.

---

## Where generated content lands

The engine writes files; the site repo owns rendering. Concretely: an Astro content collection at `src/content/answers/` with one entry per page and a single route template that renders them.

That boundary is what protects the PageSpeed guarantee. The template is written once, measured once against §6, and every generated page inherits that profile. If instead each generated page shipped its own markup, you'd be re-testing 100 pages forever and one bad one would put us in free-fix territory.

The engine never touches anything else in the site repo. It reads `business.ts`, it writes `src/content/answers/`. That's the whole interface, and keeping it that narrow is what makes the engine reusable — see [`PRODUCTIZE.md`](PRODUCTIZE.md).
