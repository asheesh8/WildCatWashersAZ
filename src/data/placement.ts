/**
 * PHOTO PLACEMENT for the programmatic local pages (towns, communities, service × town).
 * -----------------------------------------------------------------------------
 * One deterministic pass hands every page a hero and a small gallery:
 *   - photos taken in the page's town (photoTown, from GPS) come first; a
 *     community page uses its parent town's photos;
 *   - then photos that fit the page's service, from the metro-wide library;
 *   - every photo is spread out: each use makes it less likely to be picked
 *     again, and past `cap` uses it is skipped whenever anything else fits;
 *   - one scene per page: twins and near-identical frames never share a page.
 * Same input, same output, so builds are stable.
 */
import { towns, communities, type Town, type Community } from './areas';
import { localServices } from './localServices';
import { services } from './business';
import { allKeys, photoTown, photoKind, sceneOf, type PhotoKind } from './media';

export type Placement = { hero: string; gallery: string[] };

/** Photos used on the hand-built pages, so the local pages lean on the others. */
const staticUses = [
  'crew-chamber-of-commerce', 'crew-chamber-of-commerce', 'crew-chamber-of-commerce', 'crew-firefighters-santa-rita',
  'crew-firefighters-santa-rita', 'award-presentation-team', 'award-presentation-team', 'award-az19-winner-2025',
  'two-techs-tall-glass', 'clean-french-doors-golf-view', 'clean-three-windows-reflection', 'fire-station-windows',
  'clean-window-sunset-glow', 'clean-patio-sliders', 'crew-fire-station-commercial', 'two-techs-interior-modern',
  ...services.flatMap((s) => [s.image, ...(s.gallery ?? [])]),
];

/** What a page wants, best first, by service. */
const wants: Record<string, PhotoKind[]> = {
  town: ['window-action', 'window-result', 'team', 'solar', 'screens', 'pressure'],
  community: ['window-action', 'window-result', 'team', 'screens', 'solar'],
  'window-cleaning': ['window-action', 'window-result'],
  'solar-panel-cleaning': ['solar'],
  'solar-screens': ['screens'],
  'pressure-washing': ['pressure'],
};
/** Heroes are working or finished-glass shots (and the crew on town pages), never split comparisons. */
const heroKinds: Record<string, PhotoKind[]> = {
  town: ['window-action', 'window-result', 'team', 'screens'],
  community: ['window-action', 'window-result'],
};
/* No crop of these keeps a head in frame at hero size (review thread, mobile pass 1). */
const notHero = (k: string) => /^before-after|split$/.test(k) || k.startsWith('award-') || k === 'tech-slider-squeegee'
  /* Only ~570px wide: sharp in gallery tiles, soft as a hero on phones. */
  || k === 'tech-squeegee-reflection-glass' || k === 'tech-squeegee-soapy-window-sky';

const usable = allKeys.filter((k) => photoKind[k] && k !== 'hero-film-poster');
const uses = new Map<string, number>();
const sceneUses = new Map<string, number>();
for (const k of staticUses) sceneUses.set(sceneOf(k), (sceneUses.get(sceneOf(k)) ?? 0) + 1);

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619) >>> 0;
  return h;
}

type Ask = { id: string; town: string; want: PhotoKind[]; heroWant: PhotoKind[]; size: number; avoid?: string[] };
/** A photo's page budget across hero and gallery slots (static pages count too). */
const CAP = 4;

function choose(ask: Ask, slot: 'hero' | 'gallery', onPage: Set<string>): string | undefined {
  const kinds = slot === 'hero' ? ask.heroWant : ask.want;
  const score = (k: string) => {
    const kind = photoKind[k];
    const rank = kinds.indexOf(kind);
    const local = photoTown[k] === ask.town ? 12 : 0;
    const fit = rank < 0 ? -100 : 6 - rank;
    const used = sceneUses.get(sceneOf(k)) ?? 0;
    return local + fit - 7 * used + (hash(ask.id + slot + k) % 1000) / 1000;
  };
  const open = usable.filter((k) => !onPage.has(sceneOf(k)) && (slot === 'gallery' || !notHero(k)) && kinds.includes(photoKind[k]));
  const underCap = open.filter((k) => (sceneUses.get(sceneOf(k)) ?? 0) < CAP);
  /* A hero always gets a photo; a gallery would rather be shorter than repeat a photo again. */
  /* A hero never shows a photo tagged to a different town when a local or metro-wide shot fits,
     even if that shot is past its budget. */
  const home = (k: string) => !photoTown[k] || photoTown[k] === ask.town;
  const pool = slot === 'gallery' ? underCap
    : [underCap.filter(home), open.filter(home), underCap, open].find((l) => l.length) ?? [];
  return pool.sort((a, b) => score(b) - score(a) || a.localeCompare(b))[0];
}

function place(ask: Ask): Placement {
  const onPage = new Set<string>((ask.avoid ?? []).map(sceneOf));
  const take = (k: string | undefined) => {
    if (!k) return;
    onPage.add(sceneOf(k));
    uses.set(k, (uses.get(k) ?? 0) + 1);
    sceneUses.set(sceneOf(k), (sceneUses.get(sceneOf(k)) ?? 0) + 1);
    return k;
  };
  const hero = take(choose(ask, 'hero', onPage))!;
  const gallery: string[] = [];
  for (let i = 0; i < ask.size; i++) {
    const k = take(choose(ask, 'gallery', onPage));
    if (k) gallery.push(k);
  }
  return { hero, gallery };
}

/* Order: towns, then service × town, then community pages (live before pending),
   interleaved across towns so no one town's pages use up its photos first. */
const asks: Ask[] = [];
const placements = new Map<string, Placement>();
const serviceImage = new Map(services.map((s) => [s.slug, s.image]));
/* Town pages already show each emphasised service's card photo. */
for (const t of towns) asks.push({ id: `/areas/${t.slug}/`, town: t.slug, want: wants.town, heroWant: heroKinds.town, size: 3, avoid: t.emphasis.map((e) => serviceImage.get(e.service) ?? '') });
for (const ls of localServices) {
  const want = wants[ls.service] ?? wants['window-cleaning'];
  asks.push({ id: `/services/${ls.service}/${ls.town}/`, town: ls.town, want, heroWant: want, size: 3 });
}
for (const a of asks) placements.set(a.id, place(a));
const byTown = new Map<string, Community[]>();
for (const c of [...communities.filter((c) => !c.pending), ...communities.filter((c) => c.pending)]) {
  if (!byTown.has(c.parent)) byTown.set(c.parent, []);
  byTown.get(c.parent)!.push(c);
}
for (let round = 0; [...byTown.values()].some((l) => l.length > round); round++) {
  for (const list of byTown.values()) {
    const c = list[round];
    /* A community page doesn't open on its town page's photos. */
    const townPage = c && placements.get(`/areas/${c.parent}/`);
    if (c) asks.push({ id: `/areas/${c.parent}/${c.slug}/`, town: c.parent, want: wants.community, heroWant: heroKinds.community, size: c.pending ? 0 : 2, avoid: townPage ? [townPage.hero, ...townPage.gallery] : [] });
  }
}

for (const a of asks) if (!placements.has(a.id)) placements.set(a.id, place(a));

export function townPhotos(t: Town): Placement {
  return placements.get(`/areas/${t.slug}/`) ?? { hero: t.photo, gallery: [] };
}
export function communityPhotos(c: Community): Placement {
  return placements.get(`/areas/${c.parent}/${c.slug}/`) ?? { hero: c.photo, gallery: [] };
}
export function serviceTownPhotos(service: string, town: string, fallback: string): Placement {
  return placements.get(`/services/${service}/${town}/`) ?? { hero: fallback, gallery: [] };
}
/** How many local pages each photo lands on (hero + gallery), for audits. */
export const placementUses: ReadonlyMap<string, number> = uses;
