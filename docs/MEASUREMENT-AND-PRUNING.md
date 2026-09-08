# Measurement and the quarterly review

Contract §4 commits us to a quarterly cycle for the life of the hosting relationship. It's the part of this project that runs longest, and the part most likely to be painful if the plumbing isn't laid before the first page ships.

---

## What §4 actually says

**Cycles run every three months from website launch, not by calendar quarter.** Launch is defined in §3: the site publicly accessible on the production domain with the agreed launch functions working. Approval isn't launch. Write the launch date down — every review date derives from it.

**First quarter:** publish the initial content, establish workable tracking, collect three months of data for each generated page.

**At each quarter end:** evaluate eligible pages on their latest three months of data — "visibility, visits, inquiries, and business relevance where measurable."

**Pages without three months of usable tracking history carry forward.** Explicitly: *"missing tracking is not treated as poor performance."* A page published six weeks ago isn't eligible. A page whose tracking broke isn't a failing page, it's an untracked one.

**Next quarter:** remove or unpublish low performers, or revise or consolidate them where useful. Share a brief summary of changes and next priorities. *"Refine evaluation criteria as evidence develops, without a fixed removal quota."*

Two things that protect us, worth remembering when the client asks why a page is still there: **no quota** — we're not obliged to cut a set number — and from §2, **low traffic alone is not a content deficiency.** A page that's quiet but correct and useful is a legitimate keep.

And from §1: the page count can fall. *"Quarterly pruning may reduce the count without requiring replacement solely to maintain 150 pages."* Don't backfill to hit a number.

---

## What has to exist before page one

Retrofitting this is miserable, so build it into the publish step.

**A stable page ID.** Same ID from brief to published page to every future review. It's the join key for three months of history; regenerate it and the history silently detaches.

**A publish date, recorded at publish time.** Determines eligibility. Store it in the content entry's frontmatter, not in a spreadsheet someone maintains by hand.

**A cohort.** Pages published together get reviewed together. Makes the review a batch job instead of 101 individual eligibility checks.

**A source record** — brief ID, judge scores, model, prompt version. When a cohort underperforms you want to know what was different about how it was made. This is the difference between "these 20 pages did badly" and "the pages written before the rubric change did badly."

Frontmatter is enough:

```yaml
id: how-often-clean-solar-panels-tucson
publishedAt: 2026-10-14
cohort: 2026-10-A
briefId: how-often-clean-solar-panels-tucson
judgeScore: 8.6
engineVersion: 0.3.1
```

---

## The three data sources

§1 leaves the analytics platform open — *"no particular platform, interface, or custom reporting feature is promised"* — so pick something workable and don't over-promise a dashboard we then owe them.

**Google Search Console — visibility.** Impressions, clicks, average position, and the actual queries a page surfaces for. Free, authoritative, and the only source that shows *what people were asking* when the page appeared. **Get access in week one**; verification has lead time and there is no backfill — data starts when access starts.

**Site analytics — visits and engagement.** Whatever's chosen. Keep it light: §6 makes every third-party script a performance liability, and a heavyweight analytics bundle across 150 pages is the easiest way to lose the PageSpeed guarantee.

**Quote-form attribution — inquiries.** The one that actually matters and the one nobody sets up. Pass the landing page into the quote form as a hidden field so a submission carries where the visitor entered. Without it "inquiries" in §4 is unmeasurable and every review is a conversation about impressions.

There's a fourth, unmeasurable one worth being honest about: **answer-engine citations.** There is no reliable way to know when ChatGPT or an AI Overview quoted a page. Don't build a metric on it and don't imply one to the client — §2 already frames AI-answer inclusion as an objective, not a result.

---

## Review decisions

At each quarter end, for every page with three months of usable data:

| Signal | Decision |
|---|---|
| Impressions, clicks and inquiries all healthy | **Keep.** Note what worked — that's the evidence for what to write next. |
| Impressions healthy, clicks poor | **Revise** the title and short answer. The page is surfacing and losing the click; that's a snippet problem, not a content problem. |
| Impressions poor, content good | **Keep and revisit.** Possibly a slow-burn question or one with genuinely low volume. §2: low traffic alone isn't a deficiency. |
| Two or three pages splitting the same queries | **Consolidate** into the strongest, redirect the others. Cannibalisation is a real find and the fix improves everything. |
| No impressions, no clicks, no inquiries, and reads thin on re-read | **Remove.** |
| Query data shows people arriving with a *different* question | **Revise** to answer the question they're actually asking. The best outcome of a review — Search Console just told you what to write. |

**Removing a page:** unpublish, 301 to the nearest genuinely relevant page (its cluster hub or the service page — not the homepage, which is a soft-404 signal), drop it from the sitemap, keep the record with its outcome. Never leave a 404 behind for a URL that was indexed.

Keep the removal records. After two cycles they're the most valuable asset in this project — the beginnings of a real answer to *which kinds of pages are worth making*, for this client and the next one.

---

## The client summary

§4 asks for "a brief summary of changes and next priorities." Brief is the operative word — one page, quarterly:

1. **What we published** this quarter and how it's tracking.
2. **What we changed** — kept, revised, consolidated, removed, with the reason in a sentence.
3. **What we learned** — which question types are landing. This is the part the client can act on.
4. **Next quarter's priorities.**

Plain language, no jargon, no vanity metrics. If a number needs a paragraph of explanation to look good, leave it out.

---

## The cadence, concretely

Assuming an October 2026 launch:

| When | What happens |
|---|---|
| Launch | Tracking live and verified *before* the first cohort publishes |
| Launch + 3mo | **Review 1.** Only the first cohort is eligible. Mostly "what did we learn", few removals — three months of data on a new site is thin and everyone should expect that. |
| Launch + 6mo | **Review 2.** First real pruning. Later cohorts become eligible. |
| Launch + 9mo | **Review 3.** Criteria refine as evidence accumulates (§4 anticipates this). |
| Every 3mo after | Repeat while hosting is active. |

The obligation continues as long as hosting does. Design the review so it takes a day, not a week — a process that's painful to run is a process that quietly stops running, and this one is contractual.
