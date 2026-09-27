/**
 * Local proof for area pages. Reviews are never relocated (Doc 4 §13): a page
 * shows its own place's reviews first, then clearly-labeled reviews from the
 * parent town or the wider metro, each card showing where it came from.
 */
import { reviews, reviewsByArea, reviewsByDetail, pick, type Review } from '@/data/reviews';
import { faqs, type Faq } from '@/data/faq';
import { townBySlug, childrenOf, type Town, type Community } from '@/data/areas';

const metroFor: Record<string, string> = {
  'green-valley': 'Tucson, Sahuarita & Green Valley area',
  sahuarita: 'Tucson, Sahuarita & Green Valley area',
  tubac: 'Tucson, Sahuarita & Green Valley area',
  'catalina-foothills': 'Catalina Foothills & East Tucson area',
  'tanque-verde': 'Catalina Foothills & East Tucson area',
  'oro-valley': 'Oro Valley, Marana & Northwest Tucson area',
  marana: 'Oro Valley, Marana & Northwest Tucson area',
  'casas-adobes': 'Oro Valley, Marana & Northwest Tucson area',
};

export type ReviewSet = { local: Review[]; localLabel: string; more: Review[]; moreLabel: string; count: number };

function metroReviews(slug: string) {
  const area = metroFor[slug] ?? 'Tucson, Sahuarita & Green Valley area';
  return reviewsByArea(area);
}

export function townReviews(t: Town, count = 6, seed = 0): ReviewSet {
  const local = t.reviewArea ? reviewsByArea(t.reviewArea) : [];
  const shown = pick(local, count, { seed });
  const more = shown.length < count ? pick(metroReviews(t.slug), count - shown.length, { seed }) : [];
  return {
    local: shown, localLabel: `From ${t.name} customers`,
    more, moreLabel: 'From customers across the metro',
    count: local.length,
  };
}

export function communityReviews(c: Community, count = 6, seed = 0): ReviewSet {
  const own = [
    ...reviewsByDetail(c.reviewDetails ?? []),
    ...(c.reviewAreas ?? []).flatMap((a) => reviewsByArea(a)),
  ];
  const shown = pick(own, count, { min: 40, seed });
  const parent = townBySlug[c.parent];
  const pool = parent.reviewArea ? reviewsByArea(parent.reviewArea).filter((r) => !own.includes(r)) : metroReviews(parent.slug);
  /* Siblings pass different seeds, so pages in one town don't show the same neighbors' reviews. */
  const more = shown.length < 3 ? pick(pool, 3, { seed: seed * 3 + 1 }) : [];
  return {
    local: shown, localLabel: `From ${c.name} residents`,
    more, moreLabel: `From neighbors in ${parent.name}`,
    count: own.length,
  };
}

/** Area FAQs (Doc 6 §91–122) that name this place or one of its neighborhoods. */
export function areaFaqs(names: string[], extra: number[] = []): Faq[] {
  const areaQs = faqs.filter((f) => f.n >= 91 && f.n <= 122);
  const hit = areaQs.filter((f) => names.some((n) => f.q.toLowerCase().includes(n.toLowerCase().replace(/ az$/, ''))));
  const add = faqs.filter((f) => extra.includes(f.n) && !hit.includes(f));
  return [...hit, ...add];
}

export const namesFor = (t: Town) => [t.name, ...childrenOf(t.slug).map((c) => c.name), ...t.sections.map((s) => s.name)];
export { reviews };

/** Services the given reviews mention, as links (Doc 4 service tags). */
const serviceTags: { label: string; href: string; tags: string[] }[] = [
  { label: 'window washing', href: '/services/window-cleaning/', tags: ['Window Washing', 'Window Cleaning', 'Windows', 'Windows (other wording)'] },
  { label: 'track cleaning', href: '/services/window-cleaning/', tags: ['Track Cleaning'] },
  { label: 'screen cleaning', href: '/services/window-cleaning/', tags: ['Screen Cleaning', 'Screen Washing', 'Screens'] },
  { label: 'screen repair', href: '/services/screen-repair/', tags: ['Screen Repair', 'Screen Replacement'] },
  { label: 'solar panel cleaning', href: '/services/solar-panel-cleaning/', tags: ['Solar Panel Cleaning', 'Solar Panels', 'Solar Panel Washing'] },
  { label: 'solar screens', href: '/services/solar-screens/', tags: ['Solar Screens', 'Sun Screens'] },
  { label: 'pressure washing', href: '/services/pressure-washing/', tags: ['Pressure Washing', 'Power Washing', 'Pressure/Power Washing', 'Arizona Room', 'Screened Porch'] },
  { label: 'pigeon proofing', href: '/services/solar-panel-pigeon-proofing/', tags: ['Pigeon Proofing'] },
  { label: 'skylights', href: '/services/window-cleaning/', tags: ['Skylights'] },
];
export function servicesMentioned(list: { services: string[] }[]) {
  const tags = new Set(list.flatMap((r) => r.services));
  return serviceTags.filter((s) => s.tags.some((t) => tags.has(t))).map(({ label, href }) => ({ label, href }));
}

/**
 * Put a page's chosen proof reviews (src/data/depth.ts) first. Reviews from the
 * page's own place lead the local group; others lead the "more" group, and a
 * Nextdoor area review keeps its own area wording as the group label.
 */
export function withProof(set: ReviewSet, proof: Review[], isLocal: (r: Review) => boolean, max = 6, quoted: number[] = []): ReviewSet {
  if (!proof.length && !quoted.length) return set;
  /* A review already quoted in the page copy isn't repeated in the review block. */
  const ids = new Set([...proof.map((r) => r.n), ...quoted]);
  const own = proof.filter(isLocal);
  const other = proof.filter((r) => !isLocal(r));
  const local = [...own, ...set.local.filter((r) => !ids.has(r.n))].slice(0, Math.max(max, own.length));
  let more = set.more.filter((r) => !ids.has(r.n));
  let moreLabel = set.moreLabel;
  if (other.length) {
    const areas = new Set(other.map((r) => r.area));
    const area = [...areas][0];
    if (areas.size === 1 && area.endsWith(' area')) {
      more = more.filter((r) => r.area === area);
      moreLabel = `From customers in the ${area}`;
    }
    more = [...other, ...more].slice(0, Math.max(local.length ? 3 : max, other.length));
  }
  return { ...set, local, more, moreLabel, count: local.length ? set.count : 0 };
}
