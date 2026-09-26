/**
 * ============================================================================
 *  WILDCAT WASHERS — CENTRAL FACT FILE
 * ============================================================================
 *  Every factual claim on the site reads from this file. It is rebuilt from the
 *  seven Wildcat Washers documents (Fact Banks 1–4, Strategy 5, FAQ 6, Design 7)
 *  in /mnt/project-files/context/ — section refs are noted as S§ (Services),
 *  C§ (Company, Brand & Proof), A§ (Areas).
 *
 *  RULES
 *  1. If a fact is not in the fact banks, it does not go on the website.
 *  2. Volatile facts (counts, awards, offers) live ONLY here, so one edit
 *     updates every page (C§9, S§13).
 *  3. Never publish: the old (520) 450-9500 number, prices or the job minimum,
 *     the neighbor / Club enrollment discounts, warranty terms, ROC status,
 *     any University of Arizona affiliation (C§10, S§12).
 * ============================================================================
 */

/* ---------------------------------------------------------------- company */

export const company = {
  name: 'Wildcat Washers',
  legalName: 'Wildcat Washers LLC',
  tagline: 'We Have a Spotless Reputation!',
  shortDescription:
    'Window cleaning, solar panel cleaning, solar screens and pressure washing across Greater Tucson and Southern Arizona.',
  founded: 2024,
  founders: ['Cooper Cleveland', 'Jose Manriquez'],
  crewLeaders: ['Josiah Romero', 'Isaac Reyes'],
  phone: '(520) 525-0084',
  phoneRaw: '+15205250084',
  email: 'services@wildcatwashers.com',
  url: 'https://wildcatwashers.com',
  address: {
    street: '2101 N Country Club Rd, Suite 103',
    city: 'Tucson',
    state: 'AZ',
    zip: '85716',
  },
  neighborhood: 'Blenman-Elm',
  region: 'Greater Tucson',
  geo: { lat: 32.2497, lng: -110.9272 },
  availability: 'Open 7 days a week',
  availabilityLong: 'Seven days a week, early, late and weekends. Call or message anytime and we get back to you fast.',
  serviceAreaStatement: 'Serving Greater Tucson and surrounding Southern Arizona communities',
  social: {
    facebook: 'https://www.facebook.com/wildcatwashers',
  },
} as const;

export const telHref = `tel:${company.phoneRaw}`;

/* --------------------------------------------------------------- proof */
/** Volatile — update here only (C§9). "As of" keeps printed numbers honest. */
export const proof = {
  asOf: 'September 2026',
  customers: '1,000+',
  customersLong: 'Over 1,000 customers served',
  reviews: '400+',
  reviewsLong: 'Over 400 five-star reviews across every platform',
  recordClaim: 'Not a single customer review below five stars',
  googleReviews: '250+',
  platforms: [
    { name: 'Google', count: 227, note: '5.0 rating' },
    { name: 'Nextdoor', count: 137, note: 'neighbor recommendations' },
    { name: 'Facebook', count: 26, note: '5 stars' },
    { name: 'Yelp', count: 7, note: '5 stars' },
  ],
  agentRebook: 'Every real estate agent who has hired us once has kept using us.',
  approvedLine: 'Over 1,000 customers served and not a single customer review below five stars.',
} as const;

export const stats = [
  { value: '1,000+', label: 'Tucson-area customers served' },
  { value: '400+', label: 'Five-star reviews across every platform' },
  { value: '5.0', label: 'Not one customer review below five stars' },
  { value: '14', label: 'Day Spotless Guarantee on every clean' },
] as const;

export const awards = [
  {
    id: 'az-daily-star-2026',
    title: 'Readers’ Choice Winner',
    detail: 'Best Window Cleaning, Greater Tucson',
    issuer: 'Arizona Daily Star',
    year: 2026,
    note: 'Community-voted with third-party authentication. Wildcat Washers was named the Winner, the number one pick, not a Favorite.',
    badge: null,
  },
  {
    id: 'az19-2025',
    title: 'AZ-19 Readers’ Pick',
    detail: 'Best Window Cleaners, Green Valley & Sahuarita',
    issuer: 'Green Valley News & Sahuarita Sun',
    year: 2025,
    note: 'Seventh annual AZ-19 Readers’ Picks, awarded November 7, 2025. The published list names us “Wildcat Window Washers.”',
    badge: '/brand/badge-az19-winner-2025.webp',
  },
  {
    id: 'nextdoor-2025',
    title: 'Neighborhood Fave',
    detail: 'Community-voted',
    issuer: 'Nextdoor',
    year: 2025,
    note: 'Voted by neighbors on the platform where a third of our reviews live.',
    badge: '/brand/badge-nextdoor-fave-2025.webp',
  },
  {
    id: 'angi-2025',
    title: 'Super Service Award',
    detail: 'Earned on Angi',
    issuer: 'Angi',
    year: 2025,
    note: 'Earned while we used the platform.',
    badge: '/brand/badge-angi-super-service-2025.svg',
  },
  {
    id: 'thumbtack',
    title: 'Top Pro',
    detail: 'Earned on Thumbtack',
    issuer: 'Thumbtack',
    year: null,
    note: 'Earned while we used the platform.',
    badge: '/brand/badge-thumbtack-top-pro.webp',
  },
  {
    id: 'bbb',
    title: 'Accredited Business',
    detail: 'Better Business Bureau',
    issuer: 'BBB',
    year: null,
    note: '',
    badge: '/brand/badge-bbb.webp',
  },
] as const;

export const press = {
  outlet: 'KGVY Spring Home & Life 2026',
  title: 'Keeping Southern Arizona Homes Spotless: Protecting Your Investment from Desert Dust and Hard Water',
  author: 'Sydney Watts',
  quote: 'One of Southern Arizona’s most trusted exterior cleaning services.',
} as const;

/* ---------------------------------------------------------- guarantees */

export const guarantees = [
  {
    id: 'satisfaction',
    name: '100% Satisfaction Guarantee',
    headline: 'You don’t pay until you’re happy.',
    body:
      'Payment comes at the end, after the walkthrough, and only once you’re satisfied. If something isn’t right, we keep working until it is. If you’re not happy, you don’t pay.',
  },
  {
    id: 'spotless-14',
    name: '14-Day Spotless Guarantee',
    headline: 'Any touch-up, any reason, free for 14 days.',
    body:
      'Rain, sprinklers, a dusty afternoon, anything. For 14 days after your service we come back and touch it up free. If it rains right after we clean, you’re covered.',
  },
] as const;

/* ------------------------------------------------------------- services */

export type Service = {
  slug: string;
  name: string;
  short: string;
  /** Alternate wording customers actually use (S§1). */
  aka: string[];
  h1: string;
  cta: string;
  lede: string;
  cardLine: string;
  image: string;
  gallery: string[];
  included: { title: string; body: string }[];
  why: { title: string; body: string }[];
  limits: string[];
  pricing: string;
  frequency: string;
  duration: string;
  /** FAQ numbers from Doc 6 to show on the page. */
  faq: number[];
  /** Review-service labels (Doc 4) that match this service. */
  reviewTags: string[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: 'window-cleaning',
    name: 'Window Cleaning',
    short: 'Windows',
    aka: ['window washing', 'window cleaners'],
    h1: 'Window cleaning and window washing in Tucson',
    cta: 'Get My Free Window Cleaning Quote',
    lede:
      'Every job is our 5-in-1 Deep Clean. Glass, frames, sills, tracks and screens, all professionally cleaned by hand. Hard water removal is included, and you don’t pay until you’re happy.',
    cardLine: 'The 5-in-1 Deep Clean. The whole window, not just the glass.',
    image: 'tech-squeegee-desert-window',
    gallery: ['two-techs-tall-glass', 'tech-kneeling-window-detail', 'clean-french-doors-golf-view', 'tech-waterfed-stucco-window', 'clean-fireplace-view-windows', 'tech-arched-door-ladder'],
    included: [
      { title: 'Glass', body: 'Professionally hand washed and squeegeed, inside and out. Mineral buildup buffed off with 0000-grade steel wool and walnut pads.' },
      { title: 'Frames', body: 'Hand washed, so the dust sitting on them can’t blow back onto clean glass.' },
      { title: 'Sills', body: 'Hand washed inside and out, with towels down so nothing drips indoors.' },
      { title: 'Tracks', body: 'Vacuumed out first so debris is removed, not pushed around, then hand cleaned.' },
      { title: 'Screens', body: 'Removed, professionally reconditioned, dried and reinstalled after our double check.' },
    ],
    why: [
      { title: 'It stays clean longer', body: 'Most window cleaning leaves dust in the tracks, frames and screens. The next breeze or light rain carries it right back onto the glass. We remove it from every part of the window, so there’s nothing left to blow back on.' },
      { title: 'It protects the glass', body: 'Tucson’s water is mineral heavy. Deposits left long enough etch into the glass permanently, and etched glass has to be replaced. Cleaning on a schedule removes buildup before it gets there.' },
      { title: 'Hard water removal is included', body: 'We don’t sell it as an add-on. Every 5-in-1 includes buffing mineral deposits off the glass at no extra charge.' },
      { title: 'Safe on every glass type', body: 'Tinted glass, low-E coatings and security film are all fine. We identify coatings before anything touches the glass and adjust our method.' },
    ],
    limits: [
      'Etched or scratched glass can’t be repaired by anyone. We’ll show you before we start, not after.',
      'Fogging between double panes is a failed seal. Nobody can clean inside a sealed unit; the glass needs replacing.',
    ],
    pricing: 'Priced per pane. Glass size, access and how dirty the glass is all factor in. We count panes with you over the phone and quote in a few minutes, no site visit needed.',
    frequency: 'Three times a year is the right frequency for Tucson. It keeps glass clear year-round and stops mineral buildup before it can etch. It’s exactly what the Wildcat Club is built around.',
    duration: '1 to 5 hours depending on the home. One customer’s 37-window house took two technicians about 2 hours.',
    faq: [25, 15, 34, 39, 48, 144, 159],
    reviewTags: ['Window Cleaning', 'Window Washing', 'Windows', 'Track Cleaning'],
    related: ['screen-repair', 'solar-screens', 'solar-panel-cleaning'],
  },
  {
    slug: 'solar-panel-cleaning',
    name: 'Solar Panel Cleaning',
    short: 'Solar panels',
    aka: ['solar panel washing'],
    h1: 'Solar panel cleaning in Tucson',
    cta: 'Get My Free Solar Panel Cleaning Quote',
    lede:
      'Dust, pollen and mineral residue block sunlight before it reaches the cell. We clean any panel, any roof, any pitch, with pure water and soft brushes, and show you the before and after.',
    cardLine: 'Rain doesn’t clean panels. We do, safely.',
    image: 'tech-scrubbing-solar-flat-roof',
    gallery: ['solar-array-pool-golf-view', 'tech-solar-pole-clean', 'solar-panels-cloud-reflection', 'solar-panels-tile-roof-neighborhood'],
    included: [
      { title: 'Any panel, any roof', body: 'Rooftop, ground mount and arrays, residential and commercial. Tile, shingle or flat roof, any pitch.' },
      { title: 'Panel-safe methods', body: 'Hand washing, deionized water and soap when needed. No harsh chemicals, no stiff or abrasive brushes, chosen to protect manufacturer warranties.' },
      { title: 'Before and after photos', body: 'You can’t see your roof, so we show you. Customers tell us the photos are the best part.' },
    ],
    why: [
      { title: 'Rain doesn’t clean solar panels', body: 'Rain moves dust around and it sticks. It can also dry mineral spotting onto the glass, leaving panels worse than before. Panels need gentle agitation to actually come clean.' },
      { title: 'Buildup costs production', body: 'Published research puts efficiency loss from debris at 5 to 30 percent depending on conditions. How much you recover depends on how dirty your array is.' },
      { title: 'Southern Arizona is hard on panels', body: 'Constant airborne dust, pollen and wind settle evenly across panels. In Green Valley, Sahuarita and the southern metro, nearby mining adds measurably to the dust.' },
    ],
    limits: ['We never promise a specific production number. Actual recovery depends on how dirty your array is.'],
    pricing: 'Priced per job by panel count and how the array is set up. Call with your panel count and we’ll quote it in a few minutes.',
    frequency: 'Once or twice a year for most homes and businesses.',
    duration: '1 to 3 hours for a typical residential array.',
    faq: [51, 54, 52, 57, 58, 53, 70],
    reviewTags: ['Solar Panel Cleaning', 'Solar Panels', 'Solar Panel Washing'],
    related: ['solar-panel-pigeon-proofing', 'window-cleaning', 'solar-screens'],
  },
  {
    slug: 'solar-panel-pigeon-proofing',
    name: 'Solar Panel Pigeon Proofing',
    short: 'Pigeon proofing',
    aka: ['critter guard', 'solar panel bird exclusion', 'pigeon guard'],
    h1: 'Solar panel pigeon proofing in Tucson',
    cta: 'Get My Free Pigeon Proofing Quote',
    lede:
      'We seal the edge of your array with galvanized steel mesh so birds can’t nest underneath. No drilling, nothing attached to the panel frames, and your solar warranty is untouched.',
    cardLine: 'No drilling. No mess. No more birds under the panels.',
    image: 'solar-panels-tile-roof-neighborhood',
    gallery: ['solar-panels-cloud-reflection', 'solar-array-pool-golf-view'],
    included: [
      { title: 'Full cleanout', body: 'We encourage any birds to leave, then remove and flush out droppings and nesting debris from above and below the panels. Everything is bagged and hauled away.' },
      { title: 'No-drill mesh barrier', body: 'Galvanized steel mesh secured with a clip-and-wire system and one-way locking discs. Nothing penetrates the roof or attaches to the panel frames.' },
      { title: 'Panel and roof clean', body: 'A full panel cleaning while we’re up there, plus the roof in the affected area.' },
      { title: 'Inspection with photos', body: 'A roof and solar panel inspection, with before and after photos shown to you.' },
    ],
    why: [
      { title: 'Droppings are a biohazard', body: 'Crews wear protective equipment and you never have to handle any of it. We’re careful to avoid harming wildlife.' },
      { title: 'Prevention costs less', body: 'Sealing an array before birds find it is substantially less work than after, because there’s no cleanup. It will never be cheaper than it is right now.' },
      { title: 'Often less than pest control', body: 'Customers have told us our quote came in at a fraction of what pest control companies quoted for the same work, and we’re already on the roof.' },
    ],
    limits: ['This service is specific to solar panels. We don’t do general bird control, eave bird proofing or pest control.'],
    pricing: 'Priced per job, based on panel count, array size and how much cleanup is involved. A warranty is included; terms are provided on request.',
    frequency: 'A one-time install, with panel cleaning once or twice a year after.',
    duration: 'Most installs are completed in a single visit.',
    faq: [212, 213, 214, 215, 216, 64],
    reviewTags: ['Pigeon Proofing', 'Bird Nest Removal'],
    related: ['solar-panel-cleaning', 'window-cleaning'],
  },
  {
    slug: 'solar-screens',
    name: 'Solar Screens',
    short: 'Solar screens',
    aka: ['sun screens', 'sunscreens'],
    h1: 'Solar screens and sun screens, custom built and installed',
    cta: 'Get My Free Solar Screen Quote',
    lede:
      'We custom measure, build and install solar screens with Phifer SunTex, in any color and shade. They block 80 to 90 percent of the sun’s heat and glare before it reaches your glass.',
    cardLine: 'Cooler rooms, less glare, a view you can still see.',
    image: 'solar-screens-front-elevation',
    gallery: ['solar-screens-garden-home', 'solar-screen-large-window', 'solar-screens-stucco-close', 'tech-solar-screen-carry', 'solar-screens-backyard'],
    included: [
      { title: 'Custom measured and built', body: 'Any color, any shade percentage. 90% and 80% are most common, in black or beige to match stucco.' },
      { title: 'Installed with rotating brackets', body: 'Screwed in securely with no risk to the window. Brackets rotate so you can pop screens out yourself.' },
      { title: 'Repairs and rescreening', body: 'We rescreen existing solar screens and keep the frame when it’s in good shape.' },
    ],
    why: [
      { title: 'Heat and glare, stopped at the glass', body: 'SunTex blocks 80 to 90 percent of heat and glare, and roughly 75 to 90 percent of UV. Those are different numbers, and we keep them straight.' },
      { title: 'Protects what’s inside', body: 'Less fading on furniture, floors, artwork and window treatments. And the one room that always overheats gets noticeably more comfortable.' },
      { title: 'Energy savings, honestly sourced', body: 'The U.S. Department of Energy reports well-placed shade can cut annual cooling costs 7 to 15 percent. Arizona installers commonly report up to 25 percent.' },
      { title: 'You can still see out', body: 'The view gets a touch darker, and most people are surprised how well they see through even 90% mesh. From outside, nobody can see in during the day.' },
    ],
    limits: ['We don’t build or repair heavy-duty metal security screens or motorized retractable screens. We can clean them.'],
    pricing: 'Priced per screen by size, with quantity discounts on larger jobs. A 10-year Phifer material warranty, plus our warranty on the work.',
    frequency: 'Screens typically last around a decade. Clean them when we clean your windows.',
    duration: 'Two to three weeks from measure to install.',
    faq: [219, 220, 221, 222, 223, 224, 226],
    reviewTags: ['Solar Screens', 'Sun Screens'],
    related: ['window-cleaning', 'screen-repair', 'pressure-washing'],
  },
  {
    slug: 'screen-repair',
    name: 'Screen Repair',
    short: 'Screen repair',
    aka: ['rescreening', 'screen replacement'],
    h1: 'Window screen repair and rescreening',
    cta: 'Get My Free Screen Repair Quote',
    lede:
      'Torn, bent or sun-rotted screens get new mesh on the existing frame. Window screens, door and patio screens, bug screens and solar screens.',
    cardLine: 'New mesh, same frame, done right.',
    image: 'tech-solar-screen-carry',
    gallery: ['patio-screen-enclosure', 'tech-spotless-reputation-shirt'],
    included: [
      { title: 'Any standard screen', body: 'Window screens, door and patio screens, insect screens, house screens and solar screens.' },
      { title: 'Repair means new mesh', body: 'We replace the mesh and keep the existing frame. If the frame itself is badly damaged, we’ll recommend replacement instead.' },
      { title: 'Easy to add on', body: 'Crews carry equipment for every service, so a torn screen spotted during a window cleaning can often be handled the same day.' },
    ],
    why: [
      { title: 'Assessed on site', body: 'We look at the frame and mesh together and tell you whether repair or replacement makes sense.' },
      { title: 'Pairs with your window clean', body: 'Screens come out during every 5-in-1 anyway. It’s the easiest time to fix the ones that need it.' },
    ],
    limits: ['We don’t build or repair heavy-duty metal security gate screens or motorized retractable screens, though we can clean them.'],
    pricing: 'Based on screen size.',
    frequency: 'As needed. Most customers add it to a window cleaning.',
    duration: 'Usually handled during the same visit.',
    faq: [229, 230, 231, 228],
    reviewTags: ['Screen Replacement', 'Screen Repair'],
    related: ['window-cleaning', 'solar-screens'],
  },
  {
    slug: 'pressure-washing',
    name: 'Pressure Washing',
    short: 'Pressure washing',
    aka: ['power washing'],
    h1: 'Pressure washing and power washing in Tucson',
    cta: 'Get My Free Pressure Washing Quote',
    lede:
      'Driveways, patios, pool decks, walkways, Arizona rooms, walls and outdoor furniture. We lift the dirt, dust and debris that build up around the outside of a desert home.',
    cardLine: 'Patios, drives, pool decks and Arizona rooms.',
    image: 'pressure-wash-flagstone-split',
    gallery: ['pressure-washing-solar-screen', 'patio-screen-enclosure', 'clean-patio-sliders'],
    included: [
      { title: 'Everything underfoot', body: 'Driveways, garage floors, patios, walkways, pavers, pool decks, entryways and porches. Tire marks come off readily.' },
      { title: 'Walls, gates and furniture', body: 'Stucco and block walls, gates, fences and doors, patio furniture, grills and trash cans.' },
      { title: 'Arizona rooms', body: 'We scrub the screens with a cleaning solution, wash them from the inside out, then from the outside in, and clean the floor.' },
      { title: 'Pre-paint prep', body: 'Paint needs a clean surface to bond. We wash exteriors before painting so desert dust and chalking don’t cause early failure.' },
    ],
    why: [
      { title: 'Cleaning, not chemical restoration', body: 'Our focus is removing dirt, dust and debris. Where a surface calls for it, we scrub in a cleaning solution by hand before rinsing.' },
      { title: 'Solar screens too', body: 'Solar screen cleaning is done by pressure washing, and clean screens keep your windows cleaner longer.' },
    ],
    limits: ['We don’t take on rust, oil stain, graffiti or deep masonry stain removal, which depend on heavy chemical treatment. We don’t seal or stain patios.'],
    pricing: 'Priced by the surface and scope of the job. We’ll quote it in a couple of minutes on the phone.',
    frequency: 'A couple of times a year at minimum for most homes. Arizona rooms once or twice a year.',
    duration: 'A driveway takes 1 to 3 hours.',
    faq: [71, 72, 76, 78, 232, 233, 87],
    reviewTags: ['Pressure Washing', 'Power Washing', 'Pressure/Power Washing', 'Arizona Room', 'Screened Porch'],
    related: ['window-cleaning', 'solar-screens'],
  },
];

export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s])) as Record<string, Service>;
export const serviceHref = (slug: string) => `/services/${slug}/`;

/* ------------------------------------------------------------ the club */

export const club = {
  name: 'The Wildcat Club',
  visits: 'Three cleanings a year',
  perk: '10% off every added service',
  lede: 'Three window cleanings a year, scheduled for you, built around Tucson’s dust and hard water.',
  points: [
    { title: 'The right frequency for Tucson', body: 'Three visits a year keeps windows clean year-round and stops mineral buildup before it can etch, without coming out more than you need.' },
    { title: '10% off everything else', body: 'Solar panels, pressure washing, screens, solar screens, pigeon proofing. Anything you add is 10% off.' },
    { title: 'Nothing to remember', body: 'Automated scheduling and reminders, with your rate locked in. Bundle other services on their own schedules.' },
  ],
  oneTime: 'One-time service is always available too. The Club is our recommendation, never a requirement.',
} as const;

/* ------------------------------------------------------------- process */

export const processSteps = [
  { title: 'Reach out', body: `Call ${company.phone} or send the short form. A form gets a call back right away.` },
  { title: 'Get quoted in minutes', body: 'For windows we count panes together on the phone. No site visit needed.' },
  { title: 'Get reminded', body: 'A text 7 days out, another 24 hours out, and one when we’re on the way. A 3-hour arrival window.' },
  { title: 'We inspect, then clean', body: 'Uniformed technicians, shoe covers on. We check every window with you before we start.' },
  { title: 'Walkthrough, then pay', body: 'We double check every pane, walk it with you, and you pay only when you’re happy.' },
] as const;

/* -------------------------------------------------------- the promise */
/** The Wildcat Promise — a designed, ownable trust asset (Doc 7, Pink’s idea in our language). */
export const promise = [
  { title: 'We show up when we say', body: '7-day and 24-hour reminders, an on-the-way text, a 3-hour window. Punctuality is the most repeated thing in our 400+ reviews.' },
  { title: 'We protect your home', body: 'Shoe covers inside, towels under every sill, landscaping and stucco protected. You can’t tell we were there, except everything shines.' },
  { title: 'We clean the whole window', body: 'Glass, frames, sills, tracks and screens. Professionally, by hand, every time.' },
  { title: 'We double check, then walk it with you', body: 'Every pane is reviewed before you see it. Anything not right gets fixed on the spot.' },
  { title: 'You don’t pay until you’re happy', body: 'And for 14 days after, any touch-up, any reason, is free.' },
] as const;

export const protection = [
  'Shoe covers on before anyone steps inside',
  'Towels down so no water drips indoors',
  'Stucco, paint and sills protected, no residue',
  'Landscaping and bushes protected',
  'Ladders placed properly and safely',
  'Background-checked, uniformed technicians',
  'Licensed and fully insured',
  'Pets handled kindly. Our crews like animals.',
] as const;

/* ------------------------------------------------------------ offers */

export const offers = {
  discounts: ['Senior discount', 'Veteran discount', 'Multi-service savings', 'Wildcat Club: 10% off added services'],
  referral: {
    headline: 'Refer a neighbor: you get $50, they get $25',
    body: 'You get $50 off your next service and your neighbor gets $25 off their first. Send the referral through your referral text or email link before their service; it can’t be applied afterwards.',
  },
} as const;

/* ----------------------------------------------------------------- nav */

export const nav = [
  { label: 'Services', href: '/services/' },
  { label: 'Wildcat Club', href: '/wildcat-club/' },
  { label: 'Areas', href: '/areas/' },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'Commercial', href: '/commercial/' },
  { label: 'About', href: '/about/' },
] as const;

export const cta = {
  primary: 'Get My Free Quote',
  call: 'Call Now',
  quoteHref: '/quote/',
  responseLine: 'We’ll call you right back, usually within a couple of minutes.',
} as const;
