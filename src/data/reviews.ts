/**
 * All 404 customer reviews from Fact Bank 4, parsed from the source .docx into
 * reviews.json (number, name, platform, area, detail, services, text).
 * Usage rules (Doc 4 §13): attribute accurately, never relocate a review,
 * match reviews to the service and the customer's own wording, distribute
 * rather than repeat the same few.
 */
import all from './reviews.json';

export type Review = {
  n: number;
  name: string;
  platform: string;
  area: string;
  detail: string;
  services: string[];
  alsoDone: string[];
  serviceLine: string;
  text: string;
};

/** Normalize a few spellings customers used for crew names (Doc 4 §12). */
const fixes: [RegExp, string][] = [
  [/\bIzaac\b|\bIssac\b/g, 'Isaac'],
  [/\bJessiah\b|\bJosia\b(?!h)/g, 'Josiah'],
  [/\bCopper\b/g, 'Cooper'],
  [/Wildlife Washers|Wildcat Washing/g, 'Wildcat Washers'],
];
const clean = (t: string) => fixes.reduce((s, [re, to]) => s.replace(re, to), t).trim();

export const reviews: Review[] = (all as Review[]).map((r) => ({ ...r, text: clean(r.text) }));
const byN = new Map(reviews.map((r) => [r.n, r]));
export const review = (n: number) => byN.get(n)!;

/** Where a review can honestly be placed, as a short label. */
export function placeLabel(r: Review): string {
  if (r.detail && !r.detail.includes(';')) return r.detail.includes(',') ? r.detail.split(',')[0] : r.detail;
  if (r.area === 'Location not stated') return '';
  if (r.area.endsWith(' area')) return 'Greater Tucson';
  return r.area;
}

/** First name + last initial, the way reviews are usually shown. */
export function displayName(r: Review): string {
  const parts = r.name.replace(/\s+/g, ' ').trim().split(' ');
  const cap = (w: string) => (w ? w[0].toUpperCase() + w.slice(1) : w);
  if (parts.length < 2) return cap(parts[0]);
  return `${cap(parts[0])} ${cap(parts[parts.length - 1])[0]}.`;
}

export const reviewsByArea = (area: string) => reviews.filter((r) => r.area === area);
export const reviewsByDetail = (details: string[]) => reviews.filter((r) => details.includes(r.detail));
export const reviewsForService = (tags: string[]) => reviews.filter((r) => r.services.some((s) => tags.includes(s)));

/** Prefer substantive reviews: long enough to say something, short enough to read on a phone. */
export function pick(list: Review[], count: number, opts: { min?: number; max?: number; seed?: number } = {}) {
  const { min = 90, max = 420, seed = 0 } = opts;
  const good = list.filter((r) => r.text.length >= min && r.text.length <= max);
  const pool = good.length >= count ? good : list;
  const start = pool.length ? seed % pool.length : 0;
  return [...pool.slice(start), ...pool.slice(0, start)].slice(0, count);
}

/** Featured reviews called out in Doc 4 §6, plus strong, varied voices for the homepage. */
export const featured = {
  anneWebb: review(108),
  rainTest: review(236),
  home: [108, 2, 96, 110, 117, 236, 84, 94].map(review),
};

/** Short excerpts for the quiet review ticker. Verbatim fragments of real reviews. */
export const tickerQuotes: { text: string; n: number }[] = [
  { text: 'I’ve never been able to see through them so clearly.', n: 2 },
  { text: 'The windows look brand new. There is not a streak in sight!', n: 110 },
  { text: 'Our windows look like we just had them replaced.', n: 6 },
  { text: 'They double-checked every pane for missed spots or stubborn streaks.', n: 108 },
  { text: 'You can’t even tell we had rain. My windows are still clean!', n: 236 },
  { text: 'Arrived on time. Did a great job. Will hire again.', n: 114 },
  { text: 'Took before and after pictures of the solar panels so I could see for myself.', n: 117 },
];

export const arroyoGardens = {
  quote:
    'Arroyo Gardens Independent and Assisted Living recently hired Wildcat Washers to clean all of the exterior windows of our large building. From the start, they were professional, providing a competitive estimate and clearly explaining their process. They arrived on time as scheduled and did an excellent job. We’re very pleased with the results and will definitely be using their services again.',
  name: 'Amy Malkin, ALM, CDP',
  role: 'Executive Director, Arroyo Gardens Independent and Assisted Living, Green Valley',
};
