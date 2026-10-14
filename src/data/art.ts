/*
 * Spot illustrations (tools and small Tucson accents) scattered into the empty
 * space of inner pages. Brief: /mnt/project-files/artwork/CLAUDE.md.
 * Files live in public/art/; art-index.json lists each file's subject and size.
 * The page picks an ordered pool here; ArtScatter.astro places them in the
 * browser only where nothing else sits.
 */
import index from './art-index.json';

export type ArtItem = { f: string; w: number; h: number; k: string };
const all = index as ArtItem[];

const WINDOW = ['squeegee', 'strip-washer', 'squeegee-and-scrubber-pair', 'window-bucket', 'microfiber-stack', 'microfiber-draped', 'buffing-kit', 'tool-belt', 'track-vacuum', 'window-screen', 'sliding-door-track', 'clean-window', 'step-ladder', 'water-fed-pole', 'glass-scraper'];
/* Left out after review: pure-water-tank reads as a chemical sprayer; sun-and-dust is off-palette. */
const SOLAR = ['solar-panel', 'solar-brush', 'solar-panel-clean-half', 'water-fed-pole', 'water-droplets', 'monsoon-cloud'];
const PIGEON = ['pigeon-mesh', 'solar-panel', 'checklist-clipboard', 'solar-brush'];
const SCREENS = ['solar-screen-roll', 'window-screen', 'clean-window', 'screen-repair-kit'];
const REPAIR = ['screen-repair-kit', 'window-screen', 'solar-screen-roll', 'sliding-door-track'];
const PRESSURE = ['pressure-washer', 'surface-cleaner', 'spray-wand', 'deck-brush', 'hose-coil'];
const DESERT = ['saguaro', 'desert-sprig'];
const CARE = ['shoe-covers', 'checklist-clipboard', 'microfiber-stack', 'buffing-kit', 'tool-belt', 'window-bucket'];
const COMMERCIAL = ['clean-window', 'water-fed-pole', 'pressure-washer', 'checklist-clipboard', 'squeegee-and-scrubber-pair', 'step-ladder'];
const HARD_WATER = ['water-droplets', 'buffing-kit', 'clean-window', 'glass-scraper'];
const WEATHER = ['monsoon-cloud'];

/* Pages that stay clean: conversion, legal, and the home page (not part of this pass). */
const SKIP = /^\/(|quote|contact|thank-you|privacy|404)\/?$/;

function topic(path: string): string[] {
  if (/pigeon|bird|critter/.test(path)) return PIGEON;
  if (/solar-screen|sun-screen|shade/.test(path)) return SCREENS;
  if (/screen-repair|screen/.test(path)) return REPAIR;
  if (/solar/.test(path)) return SOLAR;
  if (/pressure|driveway|patio|paver|arizona-room|garage/.test(path)) return PRESSURE;
  return WINDOW;
}

function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

/** A seeded shuffle, so each page gets its own order and the same order on every build. */
function shuffle<T>(xs: T[], seed: number): T[] {
  const a = [...xs];
  let s = seed || 1;
  for (let i = a.length - 1; i > 0; i--) {
    s = (Math.imul(s, 1103515245) + 12345) >>> 0;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Subjects for a page, in priority order. */
export function artSubjects(path: string): string[] {
  const p = path.toLowerCase();
  if (SKIP.test(p)) return [];
  const t = topic(p);
  const extra: string[] = [];
  if (/hard-water|mineral|spot|etch|stain/.test(p)) extra.push(...HARD_WATER);
  if (/monsoon|season|time-of-year|rain|dust|weather|summer|winter/.test(p)) extra.push(...WEATHER);
  if (p.startsWith('/areas/')) return [...extra, DESERT[0], ...t.slice(0, 3), DESERT[1], ...t.slice(3)];
  if (p.startsWith('/commercial/')) return [...extra, ...COMMERCIAL, ...t];
  if (p.startsWith('/who-we-help/')) return [...extra, ...CARE, ...DESERT, ...t];
  if (p.startsWith('/services/') || p.startsWith('/guides/')) return [...extra, ...t, ...(p.startsWith('/guides/') ? CARE : [])];
  return [...extra, ...CARE, ...t];
}

/** The ordered artwork pool for one page: one variant per subject, page-specific order. */
export function artPool(path: string): ArtItem[] {
  const subjects = [...new Set(artSubjects(path))];
  if (!subjects.length) return [];
  const seed = hash(path);
  // Keep the page's lead subjects early but vary their order between siblings.
  const head = shuffle(subjects.slice(0, 6), seed);
  const tail = shuffle(subjects.slice(6), seed ^ 0x9e3779b9);
  return [...head, ...tail]
    .map((k, i) => {
      const options = all.filter((a) => a.k === k);
      return options.length ? options[hash(path + k + i) % options.length] : null;
    })
    .filter((a): a is ArtItem => !!a);
}
