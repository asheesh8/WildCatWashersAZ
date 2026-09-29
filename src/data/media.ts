/**
 * MEDIA LIBRARY
 * -----------------------------------------------------------------------------
 * Job, crew and award photos are supplied Wildcat Washers assets.
 * Photos showing the retired (520) 450-9500 number (truck wraps, yard signs,
 * shirt backs) have it blurred or painted out, or are not in the library.
 * Images are imported eagerly so any page (including programmatic ones) can look
 * one up by key and hand it to <Image /> for automatic AVIF/WebP + srcset.
 *
 * Alt text lives here so the same photo is always described the same way.
 */

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/img/*.{jpg,jpeg,png}', {
  eager: true,
});

export type MediaKey = string;

const byKey: Record<string, ImageMetadata> = {};
for (const [path, mod] of Object.entries(files)) {
  const key = path.split('/').pop()!.replace(/\.(jpe?g|png)$/i, '');
  byKey[key] = mod.default;
}

/** Human alt text, keyed the same as the image files. */
export const alt: Record<string, string> = {
  'hero-poster': 'Wildcat Washers technician squeegeeing a window with the Tucson desert behind',

  // Team & brand
  'team-truck-lineup-tucson': 'The Wildcat Washers crew lined up in front of two branded trucks in the Tucson desert',
  'team-lineup-commercial-plaza': 'Wildcat Washers crew and truck outside a Tucson commercial plaza',
  'award-az19-winner-2025': 'Wildcat Washers founders holding the 2025 AZ-19 Readers’ Picks winner plaque',
  'award-presentation-team': 'The Wildcat Washers team receiving the 2025 AZ-19 Readers’ Picks award',
  'team-fire-station-truck': 'Wildcat Washers crew with their truck alongside a fire engine at a Tucson-area fire station',
  'crew-fire-station-commercial': 'Wildcat Washers technicians cleaning the glass at a Tucson-area fire station',
  'two-techs-window-ladder': 'Two uniformed Wildcat Washers technicians cleaning a home’s exterior windows from a ladder',
  'team-living-room-supplies': 'Wildcat Washers crew with their equipment inside a customer’s living room',

  // Window cleaning
  'tech-squeegee-window-uniform': 'Wildcat Washers technician in branded uniform squeegeeing a large picture window',
  'tech-interior-window-golf-course': 'Technician cleaning interior glass in a home overlooking a golf course',
  'tech-squeegee-desert-view': 'Technician squeegeeing a window that looks out over the Sonoran Desert',
  'tech-cleaning-slider-white-uniform': 'Wildcat Washers technician cleaning a sliding glass door',
  'tech-high-window-reach': 'Technician reaching a tall window on a Tucson home',
  'tech-front-door-ladder': 'Technician on a ladder cleaning the glass above a wooden front entry',
  'two-techs-modern-home-glass': 'Two technicians cleaning floor-to-ceiling glass in a modern Tucson home',
  'two-techs-patio-glass': 'Two Wildcat Washers technicians cleaning patio glass beside a desert garden',
  'tech-glass-door-pool': 'Technician cleaning a glass door beside a backyard pool',
  'tech-waterfed-pole-exterior': 'Technician using a water-fed pole to reach second-storey exterior glass',
  'tech-waterfed-pole-stucco': 'Water-fed pole cleaning windows on a stucco home in Tucson',
  'tech-window-mountain-view': 'Technician cleaning a window framing the Catalina Mountains',
  'tech-interior-wide-window': 'Technician cleaning a wide living-room window from the inside',
  'tech-kneeling-low-window': 'Technician kneeling to detail a low window and its track',
  'tech-carrying-screen': 'Wildcat Washers technician carrying a window screen out for washing',
  'tech-washing-screens': 'Technician washing window screens outside a Tucson home',

  // Results
  'clean-window-mountain-view': 'Spotless window reflecting the mountains after a Wildcat Washers clean',
  'clean-window-sky-reflection': 'Freshly cleaned window mirroring blue Arizona sky',
  'clean-window-bougainvillea': 'Clean window above blooming bougainvillea at a Tucson home',
  'clean-window-stucco-sky': 'Small stucco-framed window reflecting the desert sky after cleaning',
  'clean-patio-view-glass': 'Covered patio seen through freshly cleaned glass',
  'clean-glass-wall-golf-course': 'Wall of clean glass looking out over a golf course from inside a home',
  'clean-windows-desert-reflection': 'Row of clean windows reflecting the open desert',
  'clean-covered-patio': 'Clean covered patio and furniture after a Wildcat Washers visit',
  'clean-window-sunset-reflection': 'Window reflecting an Arizona sunset after cleaning',
  'clean-living-room-fireplace-windows': 'Living room with a fireplace flanked by spotless windows',
  'clean-patio-through-glass': 'View of a backyard patio through freshly cleaned sliding doors',

  // Before / after
  'before-after-window-split': 'Side-by-side comparison of a dusty window and the same window after cleaning',
  'before-after-patio-1': 'Stained patio concrete at a Tucson-area home',
  'before-after-patio-2': 'Flagstone patio surface at a Tucson-area home',
  'before-after-solar-1': 'Rooftop solar array with the Catalinas behind',
  'before-after-solar-2': 'Two rooftop solar panels side by side, one still dusty and one cleaned',
  'before-after-solar-3': 'Clean solar panel catching the sun on a tile roof',
  'before-after-patio-split': 'Stamped concrete patio with one half pressure washed — the cleaned side is tan and patterned, the untouched side grey and stained',

  // Solar
  'solar-panels-tile-roof-neighborhood': 'Clean rooftop solar array on a tile roof in a Tucson-area neighborhood',
  'solar-panels-roof-tucson': 'Solar panels on a Tucson home after cleaning',
  'solar-panel-closeup': 'Close-up of a solar panel surface cleaned with deionised water',
  'solar-panels-pool-patio': 'Solar array above a backyard pool and patio',
  'solar-array-clean': 'Large residential solar array after a Wildcat Washers clean',
  'solar-panels-clouds': 'Clean solar panels reflecting Arizona clouds',
  'solar-panels-hillside': 'Solar array on a hillside home outside Tucson',
  'tech-cleaning-solar-commercial-roof': 'Technician cleaning a commercial rooftop solar array',
  'tech-cleaning-solar-mountains': 'Technician hand-cleaning solar panels with the mountains behind',
  'solar-panels-pool-mountain-view': 'Solar panels beside a pool with a mountain view',
  'solar-array-road-view': 'Rooftop solar array overlooking a Tucson road',

  // Screens
  'sun-screens-installed-1': 'Sun screens on a Tucson home after cleaning',
  'sun-screens-installed-2': 'Freshly cleaned sun screens across a home’s rear windows',
  'sun-screens-tan-house': 'Sun screens on a tan stucco home in the Tucson area',
  'screen-door-clean': 'Cleaned screen door and surrounding glass',
  // Added for the final build (supplied by Wildcat Washers, September 2026)
  'hero-crew-trucks-sky': 'The Wildcat Washers crew standing between two branded trucks under a clear blue Tucson sky',
  'crew-chamber-of-commerce': 'Wildcat Washers crew in uniform with their branded truck outside a chamber of commerce',
  'crew-firefighters-santa-rita': 'Wildcat Washers crew with firefighters in front of a fire station after a free Wash It Forward cleaning',
  'fire-station-windows': 'Technicians cleaning the entry glass of a fire station',
  'crew-yard-sign-patio': 'Wildcat Washers crew holding a window washing yard sign on a customer’s patio',
  'crew-yard-sign-living-room': 'Two Wildcat Washers technicians holding a yard sign inside a customer’s living room',
  'tech-slider-squeegee': 'Technician in uniform squeegeeing a large sliding glass door',
  'tech-spotless-reputation-shirt': 'Technician whose shirt reads “We have a spotless reputation!” scrubbing a window',
  'tech-kneeling-window-detail': 'Technician kneeling to detail a window frame and track',
  'tech-squeegee-desert-window': 'Technician squeegeeing a window with the desert reflected in the glass',
  'two-techs-front-window': 'Two technicians cleaning the front windows of a stucco home',
  'tech-solar-screen-carry': 'Technician carrying a solar screen beside a stucco wall',
  'pressure-washing-solar-screen': 'Technician pressure washing a solar screen in a desert backyard',
  'tech-scrubbing-solar-flat-roof': 'Technician scrubbing solar panels with soapy water on a flat roof',
  'tech-solar-pole-clean': 'Technician cleaning a rooftop solar array with a soft brush pole',
  'solar-array-pool-golf-view': 'Clean rooftop solar array above a pool with a golf course and mountains beyond',
  'solar-panels-cloud-reflection': 'Freshly cleaned solar panels reflecting clouds on a tile roof',
  'solar-screens-front-elevation': 'Dark solar screens installed on the front windows of a tan stucco home',
  'solar-screens-garden-home': 'Solar screens on a stucco home above a flower garden',
  'solar-screen-large-window': 'Large custom solar screen installed on a picture window',
  'solar-screens-stucco-close': 'Close view of a custom solar screen fitted to a stucco window',
  'solar-screen-side-yard': 'Solar screen installed on a side-yard window',
  'solar-screens-backyard': 'Solar screens on the back of a home with a green lawn',
  'before-after-window-dust-split': 'One window half dusty and half cleaned, showing the difference side by side',
  'clean-patio-sliders': 'Covered patio with spotless sliding glass doors',
  'clean-french-doors-golf-view': 'Clean French doors looking out to a patio and golf course',
  'clean-fireplace-view-windows': 'Living room fireplace between two spotless windows with desert views',
  'clean-window-sunset-glow': 'Clean window glowing with an Arizona sunset',
  'two-techs-interior-modern': 'Two technicians cleaning tall interior glass in a modern home',
  'patio-screen-enclosure': 'Screened patio enclosure with clean mesh and pavers',
  'tech-arched-door-ladder': 'Technician on a ladder cleaning arched glass above a wooden front door',
  'tech-waterfed-stucco-window': 'Technician using a water-fed pole on a stucco home window',
  'pressure-wash-flagstone-split': 'Flagstone patio half pressure washed, showing clean stone next to dirty stone',
  'two-techs-tall-glass': 'Two technicians reaching tall glass in a modern Tucson home',
  'tech-arizona-room-window': 'Technician cleaning the windows of an Arizona room',
  'clean-three-windows-reflection': 'Three clean windows on a stucco home reflecting the desert',
  'hero-film-poster': 'Technician scrubbing a window on a stucco home with a tool belt on his hip',

  // Added September 2026 from the owner's uploads. The retired number on signs,
  // truck wraps and shirt backs is painted out; every file is stripped of EXIF/GPS.
  'crew-yard-sign-arched-window': 'Two Wildcat Washers technicians holding a window washing yard sign in front of an arched, shuttered window',
  'team-on-truck-desert': 'The Wildcat Washers crew sitting on a branded pickup truck in the desert with mountains behind',
  'team-trucks-desert-mountains': 'The Wildcat Washers crew with a ladder and gear between two branded pickup trucks, mountains behind',
  'tech-shirt-back-scrubbing': 'Technician in a Wildcat Washers shirt scrubbing the top of a soapy window',
  'tech-scrubbing-sliding-door': 'Technician scrubbing a sliding glass door under a covered patio',
  'tech-crouching-gridded-door': 'Technician crouching to squeegee a gridded glass door on a wood-sided home',
  'tech-kneeling-french-doors-pool': 'Technician kneeling indoors to clean tall glass doors that look out to a pool and cactus garden',
  'tech-detailing-door-frame-pool': 'Technician kneeling to detail a glass door frame, with a pool patio beyond',
  'tech-squeegee-reflection-glass': 'Technician squeegeeing soapy glass, his reflection showing against the sky',
  'tech-squeegee-soapy-window-sky': 'Squeegee pulling soap off a window that reflects blue sky and desert trees',
  'solar-screens-gable-garden': 'Dark solar screens on the side windows of a stucco home above a flower garden',
  'solar-screens-two-windows-garden': 'Two solar screens on a stucco wall behind potted plants and a garden trellis',
  'solar-screen-gable-window': 'Large solar screen on a gable-end window of a stucco home',
  'solar-screens-side-yard-path': 'Solar screens along the side of a home beside a brick path and desert landscaping',
  'solar-panels-tile-roof-closeup': 'Rooftop solar panels on a tile roof with neighboring homes and mountains beyond',
  'clean-window-stucco-desert': 'Clean sliding window on a stucco home reflecting desert trees',
  'clean-sliders-covered-patio-sunset': 'Clean sliding glass doors along a covered patio at sunset',
  'security-screen-door-clean': 'Clean security screen door and side window at a home’s entry',
  'clean-window-blinds-stucco': 'Clean three-panel window with blinds on a stucco wall',
  'clean-arizona-room-glass': 'Arizona room with clean glass looking out over the desert at dusk',
  'clean-window-front-yard-reflection': 'Clean window reflecting a front yard with desert landscaping',
  'clean-window-porch-reflection': 'Clean window beside a porch, reflecting the courtyard and trees',
};


/** Look up an image by key. Throws loudly in dev if a key is wrong. */
export function img(key: MediaKey): ImageMetadata {
  const found = byKey[key];
  if (!found) {
    throw new Error(
      `[media] No image found for key "${key}". Available: ${Object.keys(byKey).sort().join(', ')}`
    );
  }
  return found;
}

/** Alt text for a key, falling back to a safe generic description. */
export function altFor(key: MediaKey): string {
  return alt[key] ?? `Wildcat Washers window cleaning in the Tucson area`;
}

export function hasImg(key: MediaKey): boolean {
  return Boolean(byKey[key]);
}

export const allKeys = Object.keys(byKey).sort();

/** Curated pools that programmatic pages draw from, so no page repeats another. */
export const pools = {
  windowAction: [
    'tech-squeegee-desert-window',
    'tech-kneeling-window-detail',
    'two-techs-tall-glass',
    'tech-waterfed-stucco-window',
    'tech-arched-door-ladder',
    'two-techs-front-window',
    'tech-slider-squeegee',
    'two-techs-interior-modern',
    'tech-interior-window-golf-course',
    'tech-scrubbing-sliding-door',
    'tech-crouching-gridded-door',
    'tech-kneeling-french-doors-pool',
    'tech-shirt-back-scrubbing',
    'tech-squeegee-soapy-window-sky',
  ],
  windowResult: [
    'clean-window-mountain-view',
    'clean-glass-wall-golf-course',
    'clean-window-sky-reflection',
    'clean-windows-desert-reflection',
    'clean-window-bougainvillea',
    'clean-living-room-fireplace-windows',
    'clean-patio-view-glass',
    'clean-window-sunset-reflection',
    'clean-window-stucco-desert',
    'clean-sliders-covered-patio-sunset',
    'clean-arizona-room-glass',
    'clean-window-front-yard-reflection',
    'clean-window-blinds-stucco',
  ],
  solar: [
    'tech-cleaning-solar-mountains',
    'solar-panels-tile-roof-neighborhood',
    'tech-cleaning-solar-commercial-roof',
    'solar-panels-pool-mountain-view',
    'solar-panels-clouds',
    'solar-array-clean',
    'solar-panels-hillside',
    'solar-panels-pool-patio',
    'solar-panels-tile-roof-closeup',
  ],
  pressure: [
    'before-after-patio-1',
    'before-after-patio-2',
    'before-after-patio-split',
    'clean-covered-patio',
    'tech-washing-screens',
  ],
  team: [
    'team-fire-station-truck',
    'award-az19-winner-2025',
    'team-on-truck-desert',
    'crew-yard-sign-patio',
  ],
} as const;

/** Hero photo pools per service, for rotating sibling pages (mobile review 1, item 6).
 *  Each pool holds one copy of each shot: several photos are saved twice under two names. */
export const heroPools: Record<string, readonly string[]> = {
  'window-cleaning': [...pools.windowAction, ...pools.windowResult],
  'solar-panel-cleaning': pools.solar,
  'solar-screens': ['solar-screens-front-elevation', 'solar-screens-garden-home', 'solar-screen-large-window', 'solar-screens-stucco-close', 'solar-screen-side-yard', 'solar-screens-backyard', 'solar-screens-gable-garden', 'solar-screen-gable-window', 'solar-screens-side-yard-path'],
  'pressure-washing': pools.pressure.filter((k) => k !== 'before-after-patio-split'),
  commercial: ['crew-fire-station-commercial', 'two-techs-tall-glass', 'tech-waterfed-pole-stucco', 'tech-waterfed-pole-exterior', 'tech-cleaning-solar-commercial-roof', 'two-techs-front-window', 'tech-arched-door-ladder'],
};

/** The nth sibling gets the nth photo, so pages in one family don't open on the same image. */
export function rotateFrom(pool: readonly string[], siblings: readonly string[], key: string): string {
  const usable = pool.filter((k) => hasImg(k as MediaKey));
  const i = Math.max(0, siblings.indexOf(key));
  return usable[i % usable.length];
}

/** Deterministic pick so a given page always shows the same photo between builds. */
export function pickFrom(pool: readonly string[], seed: string): string {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return pool[h % pool.length];
}

/* ---------------------------------------------------------------------------
 * PHOTO METADATA (September 2026)
 * Town is read from each upload's EXIF GPS and snapped to the nearest town we
 * serve. Only the town is kept: no coordinates, streets or homes are stored or
 * published, and the image files themselves carry no EXIF.
 * ------------------------------------------------------------------------- */

/** Town slug per photo, from GPS. Photos without GPS are metro-wide (absent). */
export const photoTown: Record<string, string> = {
  // Green Valley
  'clean-patio-view-glass': 'green-valley',
  'tech-arizona-room-window': 'green-valley',
  'solar-panels-clouds': 'green-valley',
  'solar-panels-hillside': 'green-valley',
  'clean-windows-desert-reflection': 'green-valley',
  'clean-three-windows-reflection': 'green-valley',
  'crew-chamber-of-commerce': 'green-valley',
  'tech-cleaning-solar-mountains': 'green-valley',
  'tech-solar-pole-clean': 'green-valley',
  'clean-covered-patio': 'green-valley',
  'tech-solar-screen-carry': 'green-valley',
  'solar-panels-cloud-reflection': 'green-valley',
  'tech-waterfed-pole-stucco': 'green-valley',
  'tech-waterfed-stucco-window': 'green-valley',
  'tech-waterfed-pole-exterior': 'green-valley',
  'solar-panels-tile-roof-neighborhood': 'green-valley',
  'clean-glass-wall-golf-course': 'green-valley',
  'clean-french-doors-golf-view': 'green-valley',
  'tech-washing-screens': 'green-valley',
  'pressure-washing-solar-screen': 'green-valley',
  'solar-panels-pool-patio': 'green-valley',
  'tech-cleaning-solar-commercial-roof': 'green-valley',
  'tech-scrubbing-solar-flat-roof': 'green-valley',
  'solar-panel-closeup': 'green-valley',
  'solar-array-clean': 'green-valley',
  'patio-screen-enclosure': 'green-valley',
  'tech-squeegee-desert-window': 'green-valley',
  'solar-array-road-view': 'green-valley',
  'clean-patio-through-glass': 'green-valley',
  'clean-patio-sliders': 'green-valley',
  'solar-panels-tile-roof-closeup': 'green-valley',
  'clean-window-stucco-desert': 'green-valley',
  'security-screen-door-clean': 'green-valley',
  'solar-screens-side-yard-path': 'green-valley',
  'clean-window-blinds-stucco': 'green-valley',
  // Green Valley (Quail Creek area, north of the GVR core)
  'solar-panels-roof-tucson': 'green-valley',
  'clean-window-sunset-reflection': 'green-valley',
  'clean-window-sunset-glow': 'green-valley',
  'hero-crew-trucks-sky': 'green-valley',
  'crew-yard-sign-patio': 'green-valley',
  'team-on-truck-desert': 'green-valley',
  'team-trucks-desert-mountains': 'green-valley',
  'clean-sliders-covered-patio-sunset': 'green-valley',
  'clean-arizona-room-glass': 'green-valley',
  // Marana (Continental Ranch)
  'sun-screens-installed-1': 'marana',
  'solar-screen-large-window': 'marana',
  'sun-screens-installed-2': 'marana',
  'solar-screens-front-elevation': 'marana',
  'solar-screens-garden-home': 'marana',
  'solar-screens-stucco-close': 'marana',
  'solar-screens-backyard': 'marana',
  'sun-screens-tan-house': 'marana',
  'solar-screen-side-yard': 'marana',
  'solar-screens-gable-garden': 'marana',
  'solar-screens-two-windows-garden': 'marana',
  'solar-screen-gable-window': 'marana',
  // Oro Valley (incl. Rancho Vistoso)
  'clean-window-sky-reflection': 'oro-valley',
  'clean-window-bougainvillea': 'oro-valley',
  'before-after-patio-1': 'oro-valley',
  'before-after-patio-2': 'oro-valley',
  'pressure-wash-flagstone-split': 'oro-valley',
  'clean-window-mountain-view': 'oro-valley',
  'clean-window-front-yard-reflection': 'oro-valley',
  'clean-window-porch-reflection': 'oro-valley',
  // Casas Adobes
  'two-techs-tall-glass': 'casas-adobes',
  'two-techs-interior-modern': 'casas-adobes',
  'tech-kneeling-french-doors-pool': 'casas-adobes',
  'tech-detailing-door-frame-pool': 'casas-adobes',
  // Catalina Foothills
  'clean-living-room-fireplace-windows': 'catalina-foothills',
  'clean-fireplace-view-windows': 'catalina-foothills',
};

/** One scene per group: exact twins (the same file saved under two names) and
 *  near-identical frames. Never show two of one group on the same page. */
const sceneGroups: string[][] = [
  ['before-after-patio-2', 'pressure-wash-flagstone-split'],
  ['before-after-window-split', 'before-after-window-dust-split'],
  ['clean-living-room-fireplace-windows', 'clean-fireplace-view-windows'],
  ['clean-glass-wall-golf-course', 'clean-french-doors-golf-view'],
  ['clean-patio-through-glass', 'clean-patio-sliders'],
  ['clean-windows-desert-reflection', 'clean-three-windows-reflection'],
  ['clean-window-sunset-reflection', 'clean-window-sunset-glow'],
  ['crew-fire-station-commercial', 'fire-station-windows'],
  ['team-fire-station-truck', 'crew-firefighters-santa-rita'],
  ['tech-washing-screens', 'pressure-washing-solar-screen'],
  ['solar-panels-pool-mountain-view', 'solar-array-pool-golf-view'],
  ['sun-screens-installed-1', 'solar-screen-large-window'],
  ['sun-screens-tan-house', 'solar-screen-side-yard'],
  /* One gable house, same two screened windows, shot from several angles. */
  ['sun-screens-installed-2', 'solar-screens-front-elevation', 'solar-screens-garden-home', 'solar-screens-two-windows-garden', 'solar-screen-gable-window', 'solar-screens-gable-garden'],
  ['tech-cleaning-solar-commercial-roof', 'tech-scrubbing-solar-flat-roof'],
  ['tech-cleaning-solar-mountains', 'tech-solar-pole-clean'],
  ['tech-waterfed-pole-stucco', 'tech-waterfed-stucco-window'],
  // near-identical frames of one moment
  ['hero-crew-trucks-sky', 'team-trucks-desert-mountains'],
  ['tech-squeegee-reflection-glass', 'tech-squeegee-soapy-window-sky'],
  ['clean-window-front-yard-reflection', 'clean-window-porch-reflection'],
  ['tech-kneeling-french-doors-pool', 'tech-detailing-door-frame-pool'],
  // same patio, sliders and Arizona room glass
  ['clean-sliders-covered-patio-sunset', 'clean-arizona-room-glass'],
];
const sceneIndex = new Map<string, string>();
for (const g of sceneGroups) for (const k of g) sceneIndex.set(k, g[0]);
/** The scene a photo belongs to (its own key when it has no twin). */
export function sceneOf(key: string): string {
  return sceneIndex.get(key) ?? key;
}

export type PhotoKind = 'window-action' | 'window-result' | 'solar' | 'screens' | 'pressure' | 'team' | 'commercial';
/** What each photo shows, so a page draws photos that fit its service. */
export const photoKind: Record<string, PhotoKind> = {};
const kindLists: Record<PhotoKind, string[]> = {
  'window-action': [
    'tech-arizona-room-window', 'tech-arched-door-ladder', 'tech-interior-window-golf-course', 'tech-kneeling-window-detail',
    'tech-slider-squeegee', 'tech-spotless-reputation-shirt', 'tech-squeegee-desert-window', 'tech-waterfed-pole-exterior',
    'tech-waterfed-pole-stucco', 'tech-waterfed-stucco-window', 'two-techs-front-window', 'two-techs-interior-modern', 'two-techs-tall-glass',
    'tech-shirt-back-scrubbing', 'tech-scrubbing-sliding-door', 'tech-crouching-gridded-door', 'tech-kneeling-french-doors-pool',
    'tech-detailing-door-frame-pool', 'tech-squeegee-reflection-glass', 'tech-squeegee-soapy-window-sky', 'hero-film-poster',
  ],
  'window-result': [
    'clean-patio-view-glass', 'clean-window-stucco-sky', 'clean-window-bougainvillea', 'clean-window-mountain-view', 'clean-window-sky-reflection',
    'clean-window-sunset-reflection', 'clean-window-sunset-glow', 'clean-windows-desert-reflection', 'clean-three-windows-reflection',
    'clean-glass-wall-golf-course', 'clean-french-doors-golf-view', 'clean-living-room-fireplace-windows', 'clean-fireplace-view-windows',
    'clean-patio-through-glass', 'clean-patio-sliders', 'before-after-window-split', 'before-after-window-dust-split',
    'clean-window-stucco-desert', 'clean-sliders-covered-patio-sunset', 'clean-window-blinds-stucco', 'clean-arizona-room-glass',
    'clean-window-front-yard-reflection', 'clean-window-porch-reflection', 'security-screen-door-clean',
  ],
  solar: [
    'solar-panels-tile-roof-neighborhood', 'solar-panels-roof-tucson', 'solar-panel-closeup', 'solar-panels-pool-patio', 'solar-array-clean',
    'solar-panels-clouds', 'solar-panels-hillside', 'tech-cleaning-solar-commercial-roof', 'tech-scrubbing-solar-flat-roof',
    'tech-cleaning-solar-mountains', 'tech-solar-pole-clean', 'solar-panels-pool-mountain-view', 'solar-array-pool-golf-view',
    'solar-array-road-view', 'solar-panels-cloud-reflection', 'before-after-solar-1', 'before-after-solar-2', 'before-after-solar-3',
    'solar-panels-tile-roof-closeup',
  ],
  screens: [
    'sun-screens-installed-1', 'sun-screens-installed-2', 'sun-screens-tan-house', 'solar-screens-front-elevation', 'solar-screens-garden-home',
    'solar-screen-large-window', 'solar-screens-stucco-close', 'solar-screen-side-yard', 'solar-screens-backyard', 'tech-solar-screen-carry',
    'solar-screens-gable-garden', 'solar-screens-two-windows-garden', 'solar-screen-gable-window', 'solar-screens-side-yard-path',
  ],
  pressure: [
    'before-after-patio-1', 'before-after-patio-2', 'before-after-patio-split', 'pressure-wash-flagstone-split', 'clean-covered-patio',
    'tech-washing-screens', 'pressure-washing-solar-screen', 'patio-screen-enclosure', 'screen-door-clean',
  ],
  team: [
    'team-fire-station-truck', 'crew-firefighters-santa-rita', 'crew-chamber-of-commerce', 'hero-crew-trucks-sky', 'award-az19-winner-2025',
    'award-presentation-team', 'crew-yard-sign-patio', 'crew-yard-sign-living-room', 'crew-yard-sign-arched-window',
    'team-on-truck-desert', 'team-trucks-desert-mountains',
  ],
  commercial: ['crew-fire-station-commercial', 'fire-station-windows'],
};
for (const [kind, keys] of Object.entries(kindLists) as [PhotoKind, string[]][]) for (const k of keys) photoKind[k] = kind;

/** Where to anchor a crop so faces and the work stay in frame. */
const focusOverride: Record<string, string> = {
  'crew-yard-sign-patio': '50% 45%',
  'crew-yard-sign-arched-window': '50% 55%',
  'crew-yard-sign-living-room': '45% 50%',
  'team-on-truck-desert': '50% 60%',
  'team-trucks-desert-mountains': '50% 70%',
  'hero-crew-trucks-sky': '50% 65%',
  'tech-shirt-back-scrubbing': '50% 30%',
  'tech-scrubbing-sliding-door': '45% 25%',
  'tech-crouching-gridded-door': '50% 25%',
  'tech-kneeling-french-doors-pool': '50% 65%',
  'tech-detailing-door-frame-pool': '50% 60%',
  'tech-squeegee-reflection-glass': '60% 5%',
  'tech-squeegee-soapy-window-sky': '50% 55%',
  'tech-spotless-reputation-shirt': '50% 45%',
  'solar-panels-hillside': '50% 70%',
  'solar-panels-tile-roof-closeup': '50% 45%',
  'tech-slider-squeegee': '50% 0%',
  'clean-arizona-room-glass': '50% 55%',
  'solar-screen-gable-window': '50% 55%',
};
/** Phone hero bands (16:9) use sharp's attention crop, which finds people well;
    these photos need a fixed anchor instead (the crop would drop heads or the subject). */
const bandOverride: Record<string, string> = {
  'crew-yard-sign-patio': 'centre',
  'crew-yard-sign-arched-window': 'centre',
  'crew-yard-sign-living-room': 'centre',
  'tech-solar-screen-carry': 'centre',
  'tech-arched-door-ladder': 'centre',
  'tech-crouching-gridded-door': 'centre',
  'tech-squeegee-desert-window': 'centre',
};
export function bandFor(key: string): string { return bandOverride[key] ?? 'attention'; }
/** CSS object-position for a photo: portrait shots anchor a little above centre. */
export function focusFor(key: string): string {
  if (focusOverride[key]) return focusOverride[key];
  const m = byKey[key];
  return m && m.height > m.width * 1.1 ? '50% 40%' : '50% 50%';
}
/** The same focus as a build-time crop anchor for sharp, which takes only
 *  named positions: "50% 25%" becomes "top", "60% 70%" becomes "bottom". */
export function cropFor(key: string): string {
  const [x, y] = focusFor(key).split(/\s+/).map((v) => parseFloat(v));
  const v = y <= 35 ? 'top' : y >= 65 ? 'bottom' : '';
  const h = x <= 35 ? 'left' : x >= 65 ? 'right' : '';
  return [h, v].filter(Boolean).join(' ') || 'centre';
}
