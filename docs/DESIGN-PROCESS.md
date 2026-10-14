# Page redesign: design process (October 2026)

## The problem

Every inner page was built on one skeleton: a light-blue hero with copy on the left and a
tilted photo on the right, the navy trust strip, then a run of same-size cards (three across),
a photo grid, reviews, FAQ, link chips. Service hubs, towns, HOAs, audience, commercial and
guide pages only differed in their words. Ashish read that as plain, and as a doorway-page
risk: 200 pages that look stamped from one mould.

The photos made it worse. 68 of the 101 photos are portrait phone shots (3:4 or taller),
but nearly every slot was landscape (4:3.3 hero, 16:9 phone band, 16:10 cards, 4:3 tiles).
A 3:4 photo in a 16:9 band shows 42% of its height, which is the "zoomed in way too much"
look.

## What stays fixed (Doc 7, Cooper)

Light-blue forward with navy and red in support. Big type for a 55+ reader. Big nav logo,
Call + Free Quote bottom bar on phones, no quote button in the top bar. A static real photo
on the first screen, never video. Proof right under the hero. The bold navy headline with the
script tagline is the signature. Calm: remove before rearranging, one quiet motion, no
coupon stickers.

## Principles for the redesign

1. **Each family has its own shape, taken from its content.** A town page is about a place,
   so it opens on the place name. An HOA page is small and specific, so it is short and
   reads like a note to that neighborhood. A commercial page is read by a manager, so it
   reads like a spec sheet. A guide is read, so it looks like an article.
2. **Photos keep their own shape.** A photo frame takes the ratio nearest the photo's own
   (portrait 4:5 / 3:4, square, landscape 4:3 / 3:2), never cropping more than about a
   fifth away, and each photo has a hand-set focal point. Photos carry a plain caption
   with the town they were taken in, which is what makes them read as real jobs.
3. **Fewer boxes.** Facts sit in ruled ledgers (a definition list with hairlines), not in
   three identical icon cards. One featured review set large beats six small cards.
4. **No label over every heading.** The small all-caps "eyebrow" goes from the redesigned
   templates; headings carry themselves. The script face appears once per page, as the
   tagline under the hero headline.
5. **Siblings vary too.** Within a family, a page's seed (its URL) picks the hero's photo
   side, the order of the middle sections and the review layout, and the content decides
   which blocks exist at all. Two HOA pages share a family look, not a skeleton.

## Section library

| Block | What it is | Used by |
|---|---|---|
| `Photo` | Orientation-aware frame: picks the slot ratio from the photo, aims at its focal point, optional town caption | everywhere |
| `HeroSplit` | Copy beside a pair of overlapping portrait prints | service hubs |
| `HeroField` | Full-width headline; below it a portrait photo, the local answer and a "this town in numbers" panel | service × town |
| `HeroPlace` | The town name set very large with the script tagline, over a strip of three photos from that town | towns |
| `HeroPostcard` | Copy beside one framed photo with a place stamp | communities and HOAs |
| `HeroBrief` | Text hero with a blue "what you get" panel instead of a photo | audience pages |
| `HeroBanner` | A wide photo banner with the headline card overlapping its foot | commercial pages |
| `HeroArticle` | Narrow, no photo; the short answer as the lead paragraph, updated date | guides and answers |
| `Ledger` | Ruled two-column facts table | services (at a glance), commercial (spec sheet), HOAs (at a glance) |
| `PullQuote` | One real review set large, with name, place and platform | service × town, towns, HOAs |
| `ZigZag` | Alternating photo/text rows | towns (what we do here), service hubs (why it matters) |
| `Filmstrip` | Photos in a justified row at their natural ratios, captioned | towns, service hubs, service × town |
| `Directory` | A neighborhood index in columns | towns |
| `StepsRail` | Numbered steps, only where the content is a sequence | service hubs, audience |
| `NoteCard` | A short note for the neighborhood signed in the script face | HOAs |
| `Toc` | Sticky table of contents beside the article | guides |
| `WhoComes` | Who comes to your door: a crew photo, three facts about the people (uniform, background checks, training, crew leaders, founders; Doc 2 §3–5) and a real review that names a crew member, local when one exists. Lines, photo and review are picked per page | towns, service hubs, audience |

## Family rhythms

Arrows are the order on the page; brackets are blocks that only appear when the content exists;
`|` marks the seeded alternatives.

- **Service hubs (6):** HeroSplit, trust strip, What's included (photo beside checklist),
  [See it done clips], Why it matters as ZigZag, Filmstrip, At a glance Ledger (price,
  how often, how long, what we won't promise), reviews as PullQuote + two, [Club],
  towns, FAQ, pairs well with.
- **Service × town (17):** HeroField, trust strip, local notes (depth copy, two columns,
  sticky basics aside), PullQuote from that town, Filmstrip, more reviews, answers, FAQ,
  more in this town.
- **Towns (14):** HeroPlace, trust strip, [About the town depth sections], What the desert
  does here (one ruled panel, not cards), What we do here as ZigZag, Directory of
  neighborhoods, PullQuote + reviews | reviews first, FAQ, DIY guides, nearby.
- **Communities and HOAs (39):** HeroPostcard, trust strip, NoteCard + At a glance Ledger,
  [depth sections], what the desert does (inline list), [also nearby], reviews as PullQuote |
  grid, [for HOA boards], FAQ, more in the town. Short by design.
- **Audience (7):** HeroBrief, trust strip, how it works as StepsRail, detail sections,
  reviews, answers, FAQ, related.
- **Commercial (8) and sub-service (5):** HeroBanner, trust strip, spec-sheet Ledger,
  details, reviews, answers, FAQ, related.
- **Guides and answers (80):** HeroArticle, article with Toc (guides) or a single column
  (answers), an inline figure, what we do about it, FAQ, related.

## How it is checked

- Fact drift against the seven docs (phone, guarantee, award, customers, no UA, no
  any-hour promise, one FAQPage owner per question).
- Template overlap: section-skeleton similarity between siblings and between families,
  plus unique-text share per page.
- Phone and desktop screenshots of every family, before and after.
- Lighthouse mobile on one page per family.
- Internal links, one H1, canonical, JSON-LD validity, sitemap.
