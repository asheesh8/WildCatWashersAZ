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
  const more = shown.length < 3 ? pick(pool, Math.max(3, count - shown.length), { seed }) : [];
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
