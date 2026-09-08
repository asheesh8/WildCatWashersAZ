# Making it resellable

Wildcat is client one. The engine is the thing ArkiTech sells again. This doc is about the difference between those two sentences and how to keep it real in the code.

---

## The IP line

Contract §8:

> Upon full payment of all amounts due, Client owns the final custom website content and deliverables created specifically for Client. Provider retains its pre-existing tools, code, templates, processes, know-how, and reusable components.

Wildcat owns their pages, their copy, their site. **ArkiTech owns the engine, the rubric, the templates, the process.** That's the clause the resale business rests on, and it's clean as long as the two things stay separable. It gets murky if the engine's code and history live inside a repo the client owns.

Hence two repos:

```
arkitech/aeo-engine            ← ArkiTech IP. Generic. Reusable. Sellable.
  clients/wildcat-washers.json ← config: one file per client
  
asheesh8/WildCatWashersAZ      ← the client's site. Owns rendering + output.
```

**The test, applied to every line of engine code: would this still be correct for a roofing company in Ohio?** If not, it's config, not engine. A hardcoded "Tucson" is a bug. So is a rubric criterion that mentions windows, a prompt that assumes three services, or a question cluster named "monsoon."

---

## What's engine and what's config

**Engine (generic, ArkiTech's):**
- The six pipeline stages and the file contracts between them.
- The judge rubric's *structure* — criteria, weights, thresholds, the automatic-rejection list.
- Prompt templates with slots.
- Model adapters, batching, caching, cost logging.
- Link generation, JSON-LD emission, validation.
- The measurement schema and review workflow.
- The calibration harness.

**Config (per client, cheap to produce):**
- Fact bank — services, locations, guarantees, proof, FAQs.
- Brand voice and tone rules.
- Question inventory and cluster weighting.
- Facts-that-need-confirming list.
- Site repo target and content path.

The engine has no idea what a squeegee is. It knows there are services, places, facts and questions.

---

## Where the reuse actually is

Being honest about this shapes what's worth polishing.

**Reuses cleanly, near-zero marginal cost:** the pipeline, the rubric structure, the grounding mechanism, adapters, validation, the measurement schema, the review workflow. This is most of the code and effectively all of the hard thinking.

**Reuses with an hour of tuning:** prompt templates (voice slots change), cluster taxonomy (a roofer's clusters differ from a window cleaner's, but the *shape* — cost, frequency, method, problems, local, trust — is close to universal for home services), the site template.

**Doesn't reuse, and shouldn't:** the fact bank, the question inventory, the confirmed local specifics. This is the client's business, and it's exactly what they're paying for.

**The honest cost curve:** client two is faster than client one but not free. Budget a day or two of config plus the client-facing work of getting facts confirmed — which is a conversation, not code, and it's the real bottleneck on every one of these. The engine doesn't remove that work; it removes everything after it.

---

## Onboarding client two

The target, once the engine exists:

1. **Fact-gathering session** with the client. Services, areas, guarantees, proof, the things they get asked constantly. Half a day, and it's the only part that doesn't compress.
2. **Write the config** — fact bank plus voice. A few hours.
3. **Generate the question inventory** from the fact bank, then *have a human cut it*. This step is not optional; the inventory determines whether the whole build is defensible.
4. **First cohort of ten.** Review with the client. Adjust voice and depth against real output rather than a description.
5. **Scale**, with judge and human review.
6. **Hand over the measurement cadence.**

Build every stage with a client-two mindset from the start. It costs almost nothing while you're writing it and it's a rewrite later.

---

## What we can and can't sell

Because it matters that the pitch matches the contract.

**We can say:** we generate substantial volumes of genuinely useful, factually grounded content, with a quality gate, structured for search and answer engines, on a fast static site with a performance guarantee, reviewed and pruned quarterly on evidence.

**We cannot say:** rankings, traffic numbers, lead counts, or that anyone will be cited by ChatGPT. §2 frames every one of those as an objective, not a guaranteed result — and that framing exists because it's true, not because it's cautious. Anyone promising otherwise is selling something they can't deliver, and the first client who measures it will find out.

The differentiator worth leading with isn't volume. Anyone can generate 150 pages, and increasingly everyone does. It's **the grounding and the gate**: every claim traces to a fact the client confirmed, and a page that can't clear the bar doesn't publish. That's the thing a competitor with a content-spinner cannot say, and it's the thing that survives the next algorithm update aimed at exactly those competitors.

---

## Rough packaging

Not a decision, just what the current build suggests. Ashish's call.

The Wildcat shape — $1,000 build plus $99/month covering hosting, PageSpeed and quarterly review — prices the build low and the relationship sustainably. The recurring side is where this works: the quarterly cycle is genuinely valuable, genuinely ongoing, and cheap to deliver *once the engine exists*.

Things to think about before client two:

- The build fee should reflect that client one paid for the engine. It doesn't need building again.
- Model spend is negligible (~$20 a build). Don't price on it; don't itemise it.
- Human review is the real per-client cost, and it scales with page count. Price by tier, not by page.
- The PageSpeed guarantee is only cheap to honour because the stack is static and the template is lean. It stops being cheap the moment someone says yes to a client who wants a booking widget on every page.

---

## Before this gets sold twice

- [ ] Engine runs for a second config with zero code changes. Test it with a fictional client — a roofing company in Ohio — before you believe it.
- [ ] No client name, city, or service anywhere in engine code. Grep for them.
- [ ] Engine README lets someone who isn't Michael run a client build end to end.
- [ ] Calibration set travels with the engine, including the deliberately-bad examples.
- [ ] Config schema is documented and validated, so a malformed client config fails loudly at load rather than quietly at generation.
- [ ] Somebody other than the author has run it once, start to finish, from the README alone.
