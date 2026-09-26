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
  'team-on-truck-desert': 'Wildcat Washers team sitting on a branded truck at sunrise outside Tucson',
  'team-lineup-commercial-plaza': 'Wildcat Washers crew and truck outside a Tucson commercial plaza',
  'founders-yard-sign': 'Wildcat Washers founders holding a branded window washing yard sign outside a client home',
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
  'solar-panels-tile-roof-neighborhood': 'Clean rooftop solar array on a tile roof in a Tucson-area neighbourhood',
  'solar-panels-roof-tucson': 'Solar panels on a Tucson home after cleaning',
  'solar-panel-closeup': 'Close-up of a solar panel surface cleaned with deionised water',
  'solar-panels-pool-patio': 'Solar array above a backyard pool and patio',
  'solar-array-clean': 'Large residential solar array after a Wildcat Washers clean',
  'solar-panels-clouds': 'Clean solar panels reflecting Arizona clouds',
  'solar-panels-hillside': 'Solar array on a hillside home outside Tucson',
  'tech-cleaning-solar-commercial-roof': 'Technician cleaning a commercial rooftop solar array',
  'tech-cleaning-solar-mountains': 'Technician soft-washing solar panels with the mountains behind',
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
  ],
} as const;

/** Deterministic pick so a given page always shows the same photo between builds. */
export function pickFrom(pool: readonly string[], seed: string): string {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return pool[h % pool.length];
}
