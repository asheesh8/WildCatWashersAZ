/**
 * SERVICE AREAS — built from Fact Bank 3 (Areas & Locations) and the 200-page plan
 * in /mnt/project-files/aeo-geo/. 14 towns, 16 communities that clear the
 * prominence bar, and the named HOA/neighborhood pages that carry a real local
 * review. Every other neighborhood is a named section on its parent page
 * (A§9), which is what keeps a town page from reading as a city-name swap.
 *
 * Copy rules (A§3, A§5): never narrow the audience; use current names
 * (Sun City Oro Valley, The Highlands at Dove Mountain, SaddleBrooke One/Two,
 * Forty Niner); say "Vail AZ", never bare "Vail"; mine dust only in Green
 * Valley, Sahuarita and the southern metro.
 */

export type Section = { name: string; body: string };

export type Town = {
  kind: 'town';
  slug: string;
  name: string;
  tier: 1 | 2 | 3;
  /** Doc 4 section heading whose reviews are local to this town. */
  reviewArea?: string;
  intro: string;
  conditions: string[];
  emphasis: { service: string; why: string }[];
  sections: Section[];
  photo: string;
  nearby: string[];
};

export type Community = {
  kind: 'community' | 'hoa';
  slug: string;
  name: string;
  parent: string;
  /** Doc 4 `detail` values that belong to this community. */
  reviewDetails?: string[];
  /** Doc 4 section headings that belong wholly to this community. */
  reviewAreas?: string[];
  /** Doc 3 §9 description, reworded for customers. */
  intro: string;
  /** The first answer on the page: who cleans windows here (Doc 6 place answer where one exists). */
  lead: string;
  /** How this place differs from its nearest sibling page (plan local_details). */
  differs: string;
  /** One service-emphasis paragraph (Doc 3 §13), written from Doc 1 facts. */
  emphasis: { title: string; body: string };
  /** Local conditions (Doc 3 §4) that genuinely apply here. */
  angle: string[];
  /** 55+ / seasonal community: shows the snowbird answer. */
  senior?: boolean;
  /** Doc 3 explicitly calls it an HOA. */
  hoa?: boolean;
  sections?: Section[];
  photo: string;
};

/* Local conditions true across the metro (A§4) — reused with care, never as the only local content. */
export const metroConditions = {
  dust: 'Desert dust settles year-round and is heaviest after monsoon storms, roughly June through September.',
  water: 'Tucson’s water is hard and mineral heavy. When it dries on glass it leaves spotting that, left long enough, etches permanently.',
  sun: 'More than 300 days of sun drive both solar adoption and the demand for solar screens.',
  pollen: 'Spring pollen lands on top of the baseline dust.',
  irrigation: 'Where irrigation reaches the glass, mineral-heavy water dries into spots.',
  mine: 'Nearby mining activity adds measurably to airborne dust in Green Valley, Sahuarita and the southern metro.',
  snowbird: 'Many residents are seasonal. We pre-schedule service so the house is clean the day you arrive, with no need to be in town.',
} as const;

export const towns: Town[] = [
  {
    kind: 'town',
    slug: 'green-valley',
    name: 'Green Valley',
    tier: 1,
    reviewArea: 'Green Valley',
    intro:
      'Southern Arizona’s retirement capital: a thirty-mile run of neighborhoods along I-19, organized around Green Valley Recreation (GVR) centers and golf courses. It’s where we work most often, where we won the 2025 AZ-19 Readers’ Pick, and where we did our first Wash It Forward at the Santa Rita Fire Department.',
    conditions: [metroConditions.mine, metroConditions.water, metroConditions.snowbird],
    emphasis: [
      { service: 'window-cleaning', why: 'Arrival-timed cleans for seasonal homes and the Wildcat Club for year-round residents.' },
      { service: 'solar-panel-cleaning', why: 'Mine dust and hard water film panels faster in the southern metro.' },
      { service: 'pressure-washing', why: 'Arizona rooms and patios, cleaned the way the screens actually need.' },
    ],
    sections: [
      { name: 'Las Campanas', body: 'Gated 55+ GVR neighborhood on the west side.' },
      { name: 'Legends', body: 'GVR neighborhood near Torres Blancas golf. Customers here name it in their reviews.' },
      { name: 'Springs at Canoa', body: 'A neighborhood customers name when they write about us.' },
      { name: 'The Links at Santa Rita Springs', body: 'Golf neighborhood where we clean regularly.' },
      { name: 'Colonia de los Alamos', body: 'Established Green Valley neighborhood, reviewed by name.' },
      { name: 'Torres Blancas', body: 'Golf community associated with the Legends area.' },
    ],
    photo: 'crew-chamber-of-commerce',
    nearby: ['sahuarita', 'tubac', 'tucson'],
  },
  {
    kind: 'town',
    slug: 'saddlebrooke',
    name: 'SaddleBrooke',
    tier: 1,
    reviewArea: 'SaddleBrooke',
    intro:
      'A large 55+ resort community north of Catalina at the base of the Santa Catalinas, with golf, clubhouses and thousands of single-story homes looking out at the mountains. Residents identify strongly with SaddleBrooke and with their own HOA.',
    conditions: [
      'Single-story homes with mountain-view glass pick up open-desert dust from every direction.',
      metroConditions.water,
      metroConditions.snowbird,
    ],
    emphasis: [
      { service: 'window-cleaning', why: 'Big mountain-view glass on single-story homes.' },
      { service: 'solar-screens', why: 'A uniform exterior look across neighboring homes.' },
      { service: 'solar-panel-cleaning', why: 'Single-story roofs and efficient routing within the community.' },
    ],
    sections: [
      { name: 'SaddleBrooke One', body: 'The original HOA on the south side. Residents use the name.' },
      { name: 'SaddleBrooke Two', body: 'The larger HOA on the north side, including The Preserve.' },
      { name: 'The Preserve at SaddleBrooke', body: 'The newest golf neighborhood within SaddleBrooke Two.' },
    ],
    photo: 'clean-window-sunset-glow',
    nearby: ['catalina', 'oro-valley'],
  },
  {
    kind: 'town',
    slug: 'catalina-foothills',
    name: 'Catalina Foothills',
    tier: 1,
    reviewArea: 'Catalina Foothills',
    intro:
      'The prestige address of Tucson: custom homes climbing the south slopes of the Santa Catalinas between Oracle and Sabino Canyon, with resorts, La Encantada, and some of the largest glass in the metro.',
    conditions: [
      'Glass here is often large, high and expensive, so height and access matter. We use pure deionized water on a water-fed pole for glass that’s hard to reach.',
      'South-slope homes take direct sun most of the day, which makes solar screens worth a look on sun-facing glass.',
      metroConditions.water,
    ],
    emphasis: [
      { service: 'window-cleaning', why: 'High view glass, second floors and clerestories.' },
      { service: 'solar-screens', why: 'Sun-facing glass on south-slope homes.' },
      { service: 'solar-panel-cleaning', why: 'Hillside and ground-mount arrays on custom homes.' },
    ],
    sections: [
      { name: 'Skyline Country Club', body: 'Private club and gated custom-home community on Skyline Drive.' },
      { name: 'Pima Canyon', body: 'Guard-gated estate community with large lots at the trailhead.' },
      { name: 'Sabino Mountain', body: 'Gated community of newer custom homes near Sabino Canyon.' },
      { name: 'Sin Vacas', body: 'Guard-gated luxury community off Sunrise Drive.' },
      { name: 'Skyline Bel Air Estates', body: 'Established custom-home neighborhood below Skyline Country Club.' },
    ],
    photo: 'two-techs-tall-glass',
    nearby: ['tanque-verde', 'tucson', 'oro-valley'],
  },
  {
    kind: 'town',
    slug: 'oro-valley',
    name: 'Oro Valley',
    tier: 1,
    reviewArea: 'Oro Valley',
    intro:
      'Upscale northwest suburb at the base of the Catalinas along Oracle Road, known for golf, bike lanes and Pusch Ridge views. Newer homes with big view windows and residents who say Oro Valley, not Tucson.',
    conditions: [
      'Big view windows show every spot of dust and hard water.',
      'Heavy residential solar across the town, with spring pollen on top of the dust.',
      metroConditions.water,
    ],
    emphasis: [
      { service: 'window-cleaning', why: 'Large Pusch Ridge view glass on newer homes.' },
      { service: 'solar-panel-cleaning', why: 'Rooftop arrays are everywhere here.' },
      { service: 'solar-screens', why: 'West-facing rooms that overheat in the afternoon.' },
    ],
    sections: [
      { name: 'Oro Valley Country Club', body: 'The original 1950s golf community and clubhouse in the heart of town.' },
      { name: 'La Reserve', body: 'Guard-gated community below Pusch Ridge, next to the Hilton El Conquistador.' },
      { name: 'Cañada Hills', body: 'Master-planned villages around the El Conquistador golf courses.' },
      { name: 'Vistoso Village', body: 'Small gated 55+ community of attached homes, separate from Sun City Oro Valley.' },
    ],
    photo: 'clean-french-doors-golf-view',
    nearby: ['catalina', 'marana', 'casas-adobes', 'saddlebrooke'],
  },
  {
    kind: 'town',
    slug: 'tanque-verde',
    name: 'Tanque Verde',
    tier: 1,
    reviewArea: 'Tanque Verde',
    intro:
      'The semi-rural east side at the foot of the Rincons where Tanque Verde Road ends: horse properties, custom homes on acreage, mature mesquite and long private driveways. Residents are loyal to local businesses.',
    conditions: [
      'Long dirt drives and open acreage put more dust in the air around the house.',
      metroConditions.water,
      metroConditions.dust,
    ],
    emphasis: [
      { service: 'window-cleaning', why: 'Custom homes with dust from drives and open land.' },
      { service: 'pressure-washing', why: 'Patios, walkways and entryways on larger properties.' },
      { service: 'solar-panel-cleaning', why: 'Ground-mount and rooftop arrays on acreage.' },
    ],
    sections: [
      { name: 'Vactor Ranch', body: 'Gated community of custom homes near Sabino Canyon Road.' },
      { name: 'Tucson Country Club Estates', body: 'Established homes around the private Tucson Country Club.' },
      { name: 'Forty Niner Country Club Estates', body: 'Golf-course neighborhood on Tanque Verde Road.' },
      { name: 'Indian Ridge Estates', body: 'Mid-century custom-home neighborhood near Tanque Verde and Sabino Canyon.' },
    ],
    photo: 'clean-fireplace-view-windows',
    nearby: ['catalina-foothills', 'tucson', 'vail-az'],
  },
  {
    kind: 'town',
    slug: 'tucson',
    name: 'Tucson',
    tier: 2,
    reviewArea: 'Tucson',
    intro:
      'A sprawling desert city of mostly single-story stucco and adobe homes ringed by five mountain ranges, where dust storms, hard water and 300+ days of sun keep glass dirty year-round. Our office is in Blenman-Elm, in central Tucson.',
    conditions: [
      'Historic neighborhoods have original divided-light windows, which take patience and the right technique to clean well.',
      metroConditions.dust,
      metroConditions.water,
    ],
    emphasis: [
      { service: 'window-cleaning', why: 'From historic divided-light windows to modern sliders.' },
      { service: 'solar-screens', why: 'West- and south-facing glass on single-story stucco homes.' },
      { service: 'pressure-washing', why: 'Patios, pool decks and Arizona rooms across the metro.' },
    ],
    sections: [
      { name: 'Blenman-Elm', body: 'Historic neighborhood north of Speedway, and home to our office.' },
      { name: 'Colonia Solana', body: 'Historic 1920s estate neighborhood of large lots next to Reid Park.' },
      { name: 'El Encanto Estates', body: 'Grand 1930s homes on curving streets near Broadway and Country Club.' },
      { name: 'Starr Pass', body: 'West-side resort community around the Tucson Mountains, with golf and view homes.' },
      { name: 'Winterhaven', body: 'Mid-century neighborhood famous for its December Festival of Lights.' },
      { name: 'Armory Park', body: 'Downtown historic district of Victorian and territorial homes.' },
      { name: 'West University', body: 'Historic bungalows between campus and downtown.' },
      { name: 'El Presidio', body: 'The oldest neighborhood in Tucson, adobe rowhouses around the original fort site.' },
      { name: 'Barrio Viejo', body: 'Colorful 19th-century adobe barrio south of downtown.' },
      { name: 'Civano', body: 'Planned community known for sustainable design, next to Rita Ranch.' },
    ],
    photo: 'hero-crew-trucks-sky',
    nearby: ['catalina-foothills', 'casas-adobes', 'tanque-verde', 'vail-az'],
  },
  {
    kind: 'town',
    slug: 'marana',
    name: 'Marana',
    tier: 2,
    reviewArea: 'Marana',
    intro:
      'Fast-growing town northwest of Tucson along I-10, stretching from Continental Ranch up to Dove Mountain and the Tortolita foothills. Young families in newer neighborhoods and retirees in the golf communities.',
    conditions: [
      'Active construction means builder dust, and new homes often need a first clean for construction residue.',
      metroConditions.dust,
      metroConditions.water,
    ],
    emphasis: [
      { service: 'window-cleaning', why: 'First cleans on new homes and view glass up in Dove Mountain.' },
      { service: 'solar-screens', why: 'Many new homes come without them.' },
      { service: 'solar-panel-cleaning', why: 'New-build rooftop arrays collect construction dust.' },
    ],
    sections: [
      { name: 'Saguaro Ranch', body: 'Gated estate community in the Tortolitas, reached through a tunnel.' },
      { name: 'Tucson National', body: 'Golf resort community around the Omni Tucson National course.' },
      { name: 'Gladden Farms', body: 'Newer master-planned neighborhood in north Marana off Tangerine.' },
      { name: 'Saguaro Bloom', body: 'New-construction neighborhood near Twin Peaks.' },
    ],
    photo: 'tech-slider-squeegee',
    nearby: ['oro-valley', 'casas-adobes', 'tucson'],
  },
  {
    kind: 'town',
    slug: 'casas-adobes',
    name: 'Casas Adobes',
    tier: 2,
    intro:
      'A large, established northwest area between Oracle and La Cholla, older than Oro Valley, with mid-century and 1980s–90s ranch homes, mature landscaping and Tucson National on its edge.',
    conditions: [
      'Mature landscaping often means irrigation near the glass, and sprinkler water dries into mineral spots.',
      metroConditions.water,
      metroConditions.dust,
    ],
    emphasis: [
      { service: 'window-cleaning', why: 'Sprinkler spotting removed before it can etch.' },
      { service: 'screen-repair', why: 'Older screens that are ready for new mesh.' },
      { service: 'pressure-washing', why: 'Patios and walkways under mature trees.' },
    ],
    sections: [],
    photo: 'tech-waterfed-stucco-window',
    nearby: ['oro-valley', 'marana', 'tucson', 'catalina-foothills'],
  },
  {
    kind: 'town',
    slug: 'sahuarita',
    name: 'Sahuarita',
    tier: 2,
    reviewArea: 'Sahuarita',
    intro:
      'A family-oriented town on I-19 between Tucson and Green Valley, built largely around Rancho Sahuarita and its lake. Newer stucco homes, high ownership and a growing 55+ pocket. It’s part of the area that voted us 2025 AZ-19 Readers’ Pick.',
    conditions: [metroConditions.mine, metroConditions.water, metroConditions.dust],
    emphasis: [
      { service: 'window-cleaning', why: 'Mine dust film on southern-metro glass.' },
      { service: 'solar-panel-cleaning', why: 'Newer rooftops and extra dust in the air.' },
      { service: 'solar-screens', why: 'Newer homes with sun-facing glass.' },
    ],
    sections: [
      { name: 'Rancho Resort', body: 'Small gated 55+ neighborhood in Sahuarita.' },
      { name: 'Sonora at Rancho Sahuarita', body: 'The Del Webb 55+ section with its own clubhouse.' },
      { name: 'Madera Highlands', body: 'Master-planned neighborhood on the south edge with Santa Rita views.' },
    ],
    photo: 'solar-panels-cloud-reflection',
    nearby: ['green-valley', 'tucson', 'corona-de-tucson'],
  },
  {
    kind: 'town',
    slug: 'catalina',
    name: 'Catalina',
    tier: 2,
    intro:
      'An unincorporated community north of Oro Valley on Oracle Road, the last stop before SaddleBrooke. Older, mixed housing on acreage lots with Catalina Mountain views.',
    conditions: [
      'Acreage lots and open desert on every side mean dust arrives from every direction.',
      metroConditions.water,
      metroConditions.sun,
    ],
    emphasis: [
      { service: 'window-cleaning', why: 'Mountain-view glass on acreage homes.' },
      { service: 'solar-panel-cleaning', why: 'Arrays on open lots catch wind-blown dust.' },
      { service: 'screen-repair', why: 'Screens on older homes that take a beating from sun and wind.' },
    ],
    sections: [],
    photo: 'tech-squeegee-desert-window',
    nearby: ['oro-valley', 'saddlebrooke'],
  },
  {
    kind: 'town',
    slug: 'vail-az',
    name: 'Vail AZ',
    tier: 2,
    intro:
      'A southeast bedroom community off I-10 past Houghton, defined by newer subdivisions, the Rincon Mountain backdrop and a strong school district. Family territory, with a growing retiree segment at Rocking K.',
    conditions: [
      'New construction is everywhere, which means builder dust and new homes that need a first clean.',
      metroConditions.dust,
      metroConditions.water,
    ],
    emphasis: [
      { service: 'window-cleaning', why: 'Post-construction first cleans, then a regular schedule.' },
      { service: 'solar-panel-cleaning', why: 'New-build arrays collect builder dust.' },
      { service: 'solar-screens', why: 'New homes that ship without screens.' },
    ],
    sections: [
      { name: 'Rancho del Lago', body: 'Master-planned golf community on the north side of Vail AZ.' },
      { name: 'Del Webb at Rancho del Lago', body: 'The 55+ golf section of Rancho del Lago.' },
      { name: 'Rocking K', body: 'Large newer master plan east of Vail AZ with several family neighborhoods.' },
      { name: 'Rincon Valley', body: 'The local name for the whole area at the foot of the Rincons.' },
      { name: 'Academy Village', body: 'Small 55+ community tied to the Arizona Senior Academy.' },
    ],
    photo: 'clean-patio-sliders',
    nearby: ['corona-de-tucson', 'tucson', 'tanque-verde'],
  },
  {
    kind: 'town',
    slug: 'corona-de-tucson',
    name: 'Corona de Tucson',
    tier: 3,
    intro:
      'A small, newer community southeast of Tucson near Vail AZ, tucked against the Santa Rita foothills, with mountain views and almost entirely owner-occupied homes. Quiet, with a family and retiree mix.',
    conditions: ['Open foothill land around newer homes brings steady dust.', metroConditions.water, metroConditions.sun],
    emphasis: [
      { service: 'window-cleaning', why: 'Santa Rita views through clean glass.' },
      { service: 'solar-panel-cleaning', why: 'Newer rooftops with solar.' },
      { service: 'solar-screens', why: 'Sun-facing rooms in newer homes.' },
    ],
    sections: [],
    photo: 'clean-three-windows-reflection',
    nearby: ['vail-az', 'sahuarita'],
  },
  {
    kind: 'town',
    slug: 'tubac',
    name: 'Tubac',
    tier: 3,
    intro:
      'The historic arts village 45 minutes south on I-19, where galleries, the Tubac Golf Resort and Santa Fe-style homes with big fixed view windows draw retirees and snowbirds. No trip charge, same as anywhere else we work.',
    conditions: [metroConditions.snowbird, 'Large fixed view glass shows every spot of hard water.', metroConditions.mine],
    emphasis: [
      { service: 'window-cleaning', why: 'Big fixed glass, timed to your arrival.' },
      { service: 'solar-screens', why: 'Sun-facing glass on Santa Fe-style homes.' },
      { service: 'pressure-washing', why: 'Patios and courtyards ready for the season.' },
    ],
    sections: [
      { name: 'Tumacacori', body: 'Village around the historic mission just south of Tubac.' },
      { name: 'Amado', body: 'Rural stop between Green Valley and Tubac with horse properties.' },
      { name: 'Rio Rico', body: 'Large newer suburb south of Tubac.' },
    ],
    photo: 'clean-window-sunset-glow',
    nearby: ['green-valley', 'sahuarita'],
  },
  {
    kind: 'town',
    slug: 'sonoita',
    name: 'Sonoita',
    tier: 3,
    intro:
      'High-grassland wine country an hour southeast via Highway 83: custom view homes on acreage, wineries and ranch estates with wall-to-wall glass. No trip charge.',
    conditions: ['Open grassland wind carries dust onto wall-to-wall glass.', metroConditions.water, metroConditions.sun],
    emphasis: [
      { service: 'window-cleaning', why: 'Wall-to-wall glass on ranch estates.' },
      { service: 'solar-panel-cleaning', why: 'Ground-mount arrays on acreage.' },
      { service: 'pressure-washing', why: 'Patios and entries on larger properties.' },
    ],
    sections: [{ name: 'Elgin', body: 'Ranch and winery country just east of Sonoita.' }],
    photo: 'clean-fireplace-view-windows',
    nearby: ['vail-az', 'tubac'],
  },
];

/*
 * Community and HOA pages. Every sentence traces to Doc 3 (character, hierarchy,
 * conditions), Doc 1 (method), Doc 6 (approved place answers) or Doc 4 (which
 * reviews were recorded where). Doc 3 §1: Wildcat Washers has real customers in
 * every community named in the fact bank, so local experience is stated plainly.
 * No invented frequencies, counts or neighborhood-specific claims (Doc 2 §10).
 */
const glassMethod = 'We hand wash most glass. Very high or hard-to-reach panes get a water-fed pole with pure deionized water, which dries without leaving mineral spots.';
const coatings = 'We’re safe on tinted glass, low-E coatings and security film, and we identify coatings before anything touches the glass. No glass type is declined.';
const newBuild = 'New construction cleanup is part of what we do: construction dust, debris and glass cleanup. After that, a regular schedule keeps new windows from ever building up the hard-water spotting that etches glass over time.';
const protect = 'Crews wear shoe covers inside, lay towels against drips and protect stucco, sills and landscaping. You can’t tell we were there, except that everything looks spotless.';
const oneVisit = 'Crews carry equipment for every service, so anything spotted during the pre-service inspection, like dusty solar panels, torn screens or a patio, can usually be added and finished the same day.';
const solarDust = 'Rain doesn’t clean solar panels. It moves dust around, the dust sticks, and the water dries into mineral spots. Panels need real scrubbing with a brush and mild soap, never harsh chemicals or stiff brushes.';

export const communities: Community[] = [
  /* ---------------- Green Valley ---------------- */
  {
    kind: 'community', slug: 'quail-creek', name: 'Quail Creek', parent: 'green-valley', reviewDetails: ['Quail Creek'], senior: true,
    intro: 'Robson’s gated 55+ golf community on the east side of Green Valley, newer and more upscale than most of GVR, with a large snowbird share. Residents say Quail Creek first and Green Valley second.',
    lead: 'Yes. Wildcat Washers cleans windows in Quail Creek, one of the communities we work in most, with customers throughout it. Quail Creek residents review us by name for window washing, track cleaning and screens.',
    differs: 'Canoa Ranch anchors the south end of Green Valley. Quail Creek is on the east side, newer and more upscale than most of GVR.',
    emphasis: { title: 'Ready when you get back to Tucson', body: 'With so many seasonal residents, the most common Quail Creek request is a clean timed to arrival. Tell us the date you’re flying in and the house is clean before you walk through the door. You don’t need to be in town for us to do it.' },
    angle: [metroConditions.mine, metroConditions.water],
    photo: 'two-techs-front-window',
  },
  {
    kind: 'community', slug: 'canoa-ranch', name: 'Canoa Ranch', parent: 'green-valley', reviewDetails: ['Canoa Ranch'], senior: true,
    intro: 'A large gated 55+ golf community on the south end of Green Valley, with a distinct identity of its own.',
    lead: 'Yes. Canoa Ranch is a regular stop for Wildcat Washers, with customers throughout the community. Canoa Ranch residents review us by name, and one had us back for a second cleaning.',
    differs: 'Quail Creek sits on the east side of Green Valley. Canoa Ranch is its own gated golf community on the south end.',
    emphasis: { title: 'Golf lots and sprinkler spots', body: 'Where irrigation reaches the glass, Tucson’s mineral-heavy water dries into white spots, and left long enough it etches. Hard water removal is included in every 5-in-1, buffed off with 0000-grade steel wool and walnut pads, so the spotting never gets the chance to become permanent.' },
    angle: [metroConditions.mine, metroConditions.dust],
    photo: 'clean-french-doors-golf-view',
  },
  {
    kind: 'hoa', slug: 'legends', name: 'Legends', parent: 'green-valley', reviewDetails: ['Legends'], senior: true,
    intro: 'Legends is a GVR neighborhood in Green Valley, associated with the Torres Blancas golf community. Residents use the name, and so do our customers there.',
    lead: 'Wildcat Washers cleans windows for Legends residents, and Legends customers have reviewed us by name for windows, screens and tracks.',
    differs: 'Las Campanas is the gated 55+ neighborhood on Green Valley’s west side. Legends is tied to the Torres Blancas golf area.',
    emphasis: { title: 'Careful inside your home', body: `${protect} One Legends customer noticed the crew covering their shoes before they came inside, which is exactly how every job runs.` },
    angle: [metroConditions.mine, metroConditions.water],
    photo: 'two-techs-front-window',
  },
  {
    kind: 'hoa', slug: 'springs-at-canoa', name: 'Springs at Canoa', parent: 'green-valley', reviewDetails: ['Springs Canoa'], senior: true,
    intro: 'Springs at Canoa is a Green Valley neighborhood whose residents use the name, including our customers there. Green Valley itself is Southern Arizona’s retirement capital, a 30-mile run of neighborhoods south on I-19 organized around GVR centers and golf.',
    lead: 'Wildcat Washers cleans windows for Springs at Canoa residents. A Springs at Canoa customer reviewed us by name and called us their new go-to window washers.',
    differs: 'Canoa Ranch, the large gated golf community on the south end of Green Valley, has its own page. This page is for Springs at Canoa.',
    emphasis: { title: 'Southern-metro dust', body: 'Mining activity adds measurably to airborne dust in Green Valley, Sahuarita and the southern metro, on top of the desert dust every Tucson home deals with. It’s why windows here look dusty sooner, and why three cleanings a year is the schedule we recommend.' },
    angle: [metroConditions.water, metroConditions.snowbird],
    photo: 'clean-patio-sliders',
  },
  {
    kind: 'hoa', slug: 'links-at-santa-rita-springs', name: 'The Links at Santa Rita Springs', parent: 'green-valley', reviewDetails: ['The Links at Santa Rita Springs'], senior: true,
    intro: 'The Links at Santa Rita Springs is a Green Valley neighborhood whose residents use the name, including the customers who have reviewed us there.',
    lead: 'Wildcat Washers cleans windows and solar panels for residents of The Links at Santa Rita Springs, and customers there have reviewed us by name for both.',
    differs: 'Of the Green Valley neighborhoods with their own page, this is the one where customers reviewed us for solar panels and windows together.',
    emphasis: { title: 'Windows and solar panels in one visit', body: `${solarDust} We clean panels from the roof surface, never by standing on them, and we take before and after photos so you can see the difference.` },
    angle: [metroConditions.mine, metroConditions.water],
    photo: 'solar-panels-tile-roof-neighborhood',
  },
  {
    kind: 'hoa', slug: 'colonia-de-los-alamos', name: 'Colonia de los Alamos', parent: 'green-valley', reviewDetails: ['Colonia de los Alamos'], senior: true,
    intro: 'Colonia de los Alamos is a Green Valley neighborhood whose residents use the name. Our customers there have reviewed us by name for solar panel cleaning.',
    lead: 'Wildcat Washers cleans solar panels and windows for Colonia de los Alamos residents. One customer there wrote that the dust that came off their panels was enormous, and the rinse water ran brown.',
    differs: 'The Links at Santa Rita Springs customers booked panels and windows together. In Colonia de los Alamos, the review on record is for solar panels.',
    emphasis: { title: 'Why southern-metro panels get so dirty', body: `Mining activity adds measurably to airborne dust in Green Valley and Sahuarita, and it settles on rooftop solar as well as glass. ${solarDust}` },
    angle: [metroConditions.water, metroConditions.snowbird],
    photo: 'solar-panels-tile-roof-neighborhood',
  },
  {
    kind: 'hoa', slug: 'las-campanas', name: 'Las Campanas', parent: 'green-valley', senior: true,
    intro: 'Las Campanas is a gated 55+ GVR neighborhood on the west side of Green Valley.',
    lead: 'Wildcat Washers cleans windows for Las Campanas residents. Green Valley is one of our home markets, where we won the 2025 AZ-19 Readers’ Pick for Best Window Cleaners, and our trucks are there most weeks.',
    differs: 'Legends is tied to Torres Blancas golf, and Quail Creek and Canoa Ranch sit on the east and south sides. Las Campanas is the gated neighborhood on the west side.',
    emphasis: { title: 'No need to be home', body: 'Plenty of customers aren’t home for their cleaning, especially for exterior work, and seasonal residents often aren’t in Arizona at all. We keep payment on file and charge after the job. If you are home, we’ll walk the finished job with you so you can see it before you pay.' },
    angle: [metroConditions.mine, metroConditions.water],
    photo: 'tech-slider-squeegee',
  },

  /* ---------------- SaddleBrooke ---------------- */
  {
    kind: 'community', slug: 'saddlebrooke-ranch', name: 'SaddleBrooke Ranch', parent: 'saddlebrooke', reviewAreas: ['SaddleBrooke Ranch', 'Oracle'], senior: true,
    intro: 'Robson’s newer 55+ community just north of SaddleBrooke near Oracle, still under construction, with a resort clubhouse and golf. The same kind of neighbor as SaddleBrooke, in newer homes.',
    lead: 'Yes. SaddleBrooke Ranch is a regular stop for Wildcat Washers, and SaddleBrooke Ranch residents review us by name for windows and screens.',
    differs: 'SaddleBrooke One and Two are the established HOAs to the south. SaddleBrooke Ranch is the newer Robson community, with homes still being built.',
    emphasis: { title: 'New homes, new-construction dust', body: newBuild },
    angle: [metroConditions.water, metroConditions.dust],
    sections: [{ name: 'Oracle', body: 'Small mountain town just north, older and artsy, with hillside custom homes. We cover it too.' }],
    photo: 'clean-window-sunset-glow',
  },
  {
    kind: 'hoa', slug: 'saddlebrooke-one', name: 'SaddleBrooke One', parent: 'saddlebrooke', senior: true, hoa: true,
    intro: 'SaddleBrooke One is the original HOA, on the south side of SaddleBrooke, the 55+ resort community north of Catalina at the base of the Catalinas. Residents identify strongly with SaddleBrooke and with their own HOA, so it gets its own page.',
    lead: 'Yes. Wildcat Washers has customers throughout SaddleBrooke One, as well as SaddleBrooke Two, The Preserve and SaddleBrooke Ranch. SaddleBrooke is one of our strongest communities.',
    differs: 'SaddleBrooke Two is the larger HOA on the north side, including The Preserve. SaddleBrooke One is the original HOA, on the south side.',
    emphasis: { title: 'After a light rain, you can’t tell', body: 'SaddleBrooke homes are single-story with views of the Catalinas. Because we clean the tracks, sills, frames and screens as well as the glass, there’s no leftover dust to wash back down onto clean windows. Customers tell us that after light rain they genuinely can’t tell it rained, and the 14-Day Spotless Guarantee backs it up.' },
    angle: [metroConditions.water, metroConditions.dust],
    photo: 'clean-window-sunset-glow',
  },
  {
    kind: 'hoa', slug: 'saddlebrooke-two', name: 'SaddleBrooke Two', parent: 'saddlebrooke', senior: true, hoa: true,
    intro: 'SaddleBrooke Two is the larger HOA on the north side of SaddleBrooke, and it includes The Preserve, the community’s newest golf neighborhood. Residents use the name.',
    lead: 'Yes. Wildcat Washers serves SaddleBrooke Two, including The Preserve, and all of SaddleBrooke.',
    differs: 'SaddleBrooke One is the original HOA on the south side. SaddleBrooke Two is larger, on the north side, and contains The Preserve.',
    emphasis: { title: 'Ready for the season', body: 'Many SaddleBrooke residents are seasonal. The standard approach is service pre-scheduled and timed to your arrival, so the house is clean and ready the day you get back, arranged around your travel dates.' },
    angle: [metroConditions.water, metroConditions.pollen],
    photo: 'two-techs-interior-modern',
  },
  {
    kind: 'hoa', slug: 'the-preserve-at-saddlebrooke', name: 'The Preserve at SaddleBrooke', parent: 'saddlebrooke', reviewDetails: ['The Preserve at SaddleBrooke'], senior: true,
    intro: 'The Preserve is the newest golf neighborhood within SaddleBrooke Two, with homes at the base of the Catalinas.',
    lead: 'Wildcat Washers cleans windows in The Preserve at SaddleBrooke, and a Preserve resident reviewed us by name, calling the crew easy to work with and respectful.',
    differs: 'The Preserve is part of SaddleBrooke Two, which has its own page. This page is for the newest golf neighborhood inside it.',
    emphasis: { title: 'Keep newer glass like new', body: 'Hard water minerals sitting on glass can be removed. Minerals left long enough eat into the glass itself, and no one can reverse that. Windows cleaned on a schedule never reach that point, which is why we recommend three cleanings a year in Tucson.' },
    angle: [metroConditions.water, metroConditions.dust],
    photo: 'clean-three-windows-reflection',
  },

  /* ---------------- Marana ---------------- */
  {
    kind: 'community', slug: 'dove-mountain', name: 'Dove Mountain', parent: 'marana', reviewDetails: ['Dove Mountain'],
    intro: 'Marana’s luxury master plan in the Tortolita foothills, anchored by The Ritz-Carlton and its golf courses. It ranges from family neighborhoods in the Villages to custom homes up the hill. Big glass, big views.',
    lead: 'Yes. Dove Mountain is one of Wildcat Washers’ favorite places to work, with customers throughout it. A Dove Mountain customer called ours the best, most professional window service they’ve ever had.',
    differs: 'The Highlands at Dove Mountain and Del Webb at Dove Mountain each have their own page. This one covers the whole master plan.',
    emphasis: { title: 'Big, high view glass', body: glassMethod },
    angle: [metroConditions.water, metroConditions.dust],
    sections: [
      { name: 'The Gallery', body: 'Private golf club community with custom homes on the mountain.' },
      { name: 'Ritz-Carlton Residences Dove Mountain', body: 'Luxury residences adjoining the resort.' },
      { name: 'Canyon Pass', body: 'Guard-gated estate section with two-acre lots at the top of Dove Mountain.' },
    ],
    photo: 'two-techs-tall-glass',
  },
  {
    kind: 'community', slug: 'the-highlands-at-dove-mountain', name: 'The Highlands at Dove Mountain', parent: 'marana', senior: true,
    intro: 'A gated 55+ golf community at the entrance to Dove Mountain. Established single-story homes with views, and an active clubhouse culture.',
    lead: 'Wildcat Washers cleans windows in The Highlands at Dove Mountain, one of the active adult communities we work in regularly, along with the rest of Dove Mountain.',
    differs: 'Del Webb at Dove Mountain is the newer 55+ neighborhood further in. The Highlands is the established gated community at the entrance.',
    emphasis: { title: 'Clubhouses and common areas too', body: 'Along with homes, we clean clubhouses, common areas and community facilities on a recurring schedule. Community work is more efficient for us, and we pass that back in the pricing.' },
    angle: [metroConditions.water, metroConditions.dust],
    photo: 'clean-window-sunset-glow',
  },
  {
    kind: 'hoa', slug: 'del-webb-at-dove-mountain', name: 'Del Webb at Dove Mountain', parent: 'marana', senior: true,
    intro: 'Del Webb at Dove Mountain is a newer 55+ neighborhood of single-story homes within Dove Mountain, Marana’s luxury master plan in the Tortolita foothills.',
    lead: 'Wildcat Washers cleans windows for Del Webb at Dove Mountain residents, as part of Dove Mountain, one of our favorite places to work.',
    differs: 'The Highlands at Dove Mountain is the established gated 55+ community at the entrance. Del Webb at Dove Mountain is the newer one inside the master plan.',
    emphasis: { title: 'Start newer windows on the right schedule', body: 'Tucson’s hard water leaves spots that, left long enough, etch the glass permanently. Newer windows cleaned three times a year never get there. The Wildcat Club handles that schedule for you, with your rate locked for the year and reminders before every visit.' },
    angle: [metroConditions.dust, metroConditions.pollen],
    photo: 'tech-slider-squeegee',
  },
  {
    kind: 'community', slug: 'continental-ranch', name: 'Continental Ranch', parent: 'marana', reviewDetails: ['Sunflower at Continental Ranch'],
    intro: 'Marana’s largest and most established subdivision along Silverbell and Cortaro, a big HOA of 1990s and 2000s homes.',
    lead: 'Yes. Wildcat Washers covers all of Marana, from Continental Ranch up to Dove Mountain, with customers throughout Continental Ranch and its Sunflower section.',
    differs: 'Sunflower, the gated 55+ section with its own clubhouse, has its own page. Continental Ranch is the big family HOA around it.',
    emphasis: { title: 'Everything in one visit', body: oneVisit },
    angle: [metroConditions.water, metroConditions.dust],
    sections: [{ name: 'Continental Reserve', body: 'Newer sister neighborhood on the west side of Silverbell.' }],
    photo: 'tech-kneeling-window-detail',
  },
  {
    kind: 'hoa', slug: 'sunflower-at-continental-ranch', name: 'Sunflower at Continental Ranch', parent: 'marana', reviewDetails: ['Sunflower at Continental Ranch'], senior: true,
    intro: 'Sunflower is the 55+ gated section of Continental Ranch in Marana, with its own clubhouse.',
    lead: 'We do. Sunflower is one of the communities in Continental Ranch that Wildcat Washers serves regularly. A Sunflower customer had us clean their solar panels and exterior windows in the same visit.',
    differs: 'Continental Ranch, the big family HOA around it, has its own page. Sunflower is the gated 55+ section with its own clubhouse.',
    emphasis: { title: 'Before and after photos on your panels', body: `${solarDust} We take before and after photos of the panels, so you can see the difference for yourself, just like our Sunflower customer did.` },
    angle: [metroConditions.water, metroConditions.dust],
    photo: 'tech-solar-pole-clean',
  },

  /* ---------------- Oro Valley ---------------- */
  {
    kind: 'community', slug: 'rancho-vistoso', name: 'Rancho Vistoso', parent: 'oro-valley', reviewDetails: ['Rancho Vistoso, Stone Canyon'],
    intro: 'The biggest master-planned community in Oro Valley, spanning the north end of town with dozens of gated villages, golf and trailheads into the Tortolitas. Residents name their village but search Rancho Vistoso.',
    lead: 'Yes. Wildcat Washers handles windows, solar panels, screens and pressure washing throughout Rancho Vistoso. A Rancho Vistoso customer reviewed us for window cleaning, skylights included.',
    differs: 'Sun City Oro Valley, Stone Canyon and Vistoso Village sit inside it and have their own pages. This page covers the villages across the whole master plan.',
    emphasis: { title: 'Skylights and high interior glass', body: 'Mirrors, skylights, glass doors and high interior glass are all handled, usually counted as additional panes on the same quote.' },
    angle: [metroConditions.water, metroConditions.dust],
    photo: 'two-techs-interior-modern',
  },
  {
    kind: 'community', slug: 'sun-city-oro-valley', name: 'Sun City Oro Valley', parent: 'oro-valley', senior: true,
    intro: 'The established Del Webb 55+ community inside Rancho Vistoso: single-story homes, golf and a very active resident base.',
    lead: 'Yes. Wildcat Washers works in Sun City Oro Valley regularly. It’s one of the active adult communities that are a big part of who we serve.',
    differs: 'Vistoso Village is the small gated 55+ community of attached homes nearby. Sun City Oro Valley is the large Del Webb community of single-story homes.',
    emphasis: { title: 'We leave your home as we found it', body: protect },
    angle: [metroConditions.water, metroConditions.dust],
    photo: 'clean-patio-sliders',
  },
  {
    kind: 'hoa', slug: 'vistoso-village', name: 'Vistoso Village', parent: 'oro-valley', senior: true,
    intro: 'Vistoso Village is a small gated 55+ community of attached homes in Rancho Vistoso, separate from Sun City Oro Valley.',
    lead: 'Wildcat Washers cleans windows for Vistoso Village residents, as part of Rancho Vistoso, where we handle windows, solar panels, screens and pressure washing throughout.',
    differs: 'Sun City Oro Valley is the large Del Webb community of single-story homes. Vistoso Village is the small gated community of attached homes.',
    emphasis: { title: 'Priced per pane, inside and out or exterior only', body: 'Attached homes are quoted the same way as any other: per pane, over the phone in a few minutes. Most customers choose inside and out for the full 5-in-1, but exterior only is available anytime.' },
    angle: [metroConditions.water, metroConditions.dust],
    photo: 'tech-squeegee-desert-window',
  },
  {
    kind: 'community', slug: 'stone-canyon', name: 'Stone Canyon', parent: 'oro-valley', reviewDetails: ['Stone Canyon', 'Rancho Vistoso, Stone Canyon'],
    intro: 'The guard-gated luxury enclave at the top of Rancho Vistoso, with a Jay Morrish golf course and custom homes set among boulders. The glass is enormous and often specialty.',
    lead: 'We do. Stone Canyon has some of the biggest and most specialized glass in Oro Valley, and it’s the kind of work Wildcat Washers is built for. Stone Canyon customers have reviewed us by name.',
    differs: 'Rancho Vistoso around it is dozens of gated villages. Stone Canyon is the guard-gated enclave at the top, with the biggest glass.',
    emphasis: { title: 'Specialty and coated glass', body: coatings },
    angle: [metroConditions.water, metroConditions.dust],
    photo: 'two-techs-tall-glass',
  },

  /* ---------------- Sahuarita ---------------- */
  {
    kind: 'community', slug: 'rancho-sahuarita', name: 'Rancho Sahuarita', parent: 'sahuarita',
    intro: 'The master-planned heart of Sahuarita, built around a lake, parks and family amenities. It’s where most Sahuarita residents actually live.',
    lead: 'Yes. Rancho Sahuarita is right in the heart of Wildcat Washers’ service area, and we have customers all over Sahuarita.',
    differs: 'Sonora at Rancho Sahuarita, the Del Webb 55+ section, has its own page. This one covers the family master plan around the lake.',
    emphasis: { title: 'Mine dust on glass and panels', body: `Sahuarita is in the southern metro, where mining activity adds measurably to airborne dust. It lands on windows and on rooftop solar, where it blocks light before it reaches the cells. ${oneVisit}` },
    angle: [metroConditions.water, metroConditions.dust],
    photo: 'solar-screens-garden-home',
  },
  {
    kind: 'hoa', slug: 'sonora-at-rancho-sahuarita', name: 'Sonora at Rancho Sahuarita', parent: 'sahuarita', senior: true,
    intro: 'Sonora is the Del Webb 55+ section of Rancho Sahuarita, with its own clubhouse.',
    lead: 'Wildcat Washers cleans windows for Sonora at Rancho Sahuarita residents. Rancho Sahuarita is right in the heart of our service area.',
    differs: 'Rancho Sahuarita, the family master plan around the lake, has its own page. Sonora is its Del Webb 55+ section.',
    emphasis: { title: 'Seasonal and full-time residents alike', body: 'Full-time residents usually book the Wildcat Club, three cleanings a year timed to Tucson’s seasons. Seasonal residents tell us their arrival date and come home to clean windows. Either way, you don’t pay until you’re happy.' },
    angle: [metroConditions.mine, metroConditions.water],
    photo: 'clean-three-windows-reflection',
  },
  {
    kind: 'hoa', slug: 'rancho-resort', name: 'Rancho Resort', parent: 'sahuarita', reviewDetails: ['Rancho Resort'], senior: true,
    intro: 'Rancho Resort is a small gated 55+ neighborhood in Sahuarita.',
    lead: 'Wildcat Washers cleans windows for Rancho Resort residents. A Rancho Resort customer reviewed our inside-and-out window cleaning as very professional, polite and thorough.',
    differs: 'Sonora is the Del Webb 55+ section of Rancho Sahuarita. Rancho Resort is its own small gated neighborhood.',
    emphasis: { title: 'Inside and out, the whole window', body: 'Inside and out is the full 5-in-1 Deep Clean: glass professionally hand washed and squeegeed, frames wiped, sills and tracks cleaned, screens washed, and hard water removal included. Every pane is double checked before we walk it with you.' },
    angle: [metroConditions.mine, metroConditions.water],
    photo: 'tech-slider-squeegee',
  },

  /* ---------------- Catalina Foothills ---------------- */
  {
    kind: 'community', slug: 'sabino-canyon', name: 'Sabino Canyon', parent: 'catalina-foothills',
    intro: 'The area name locals use for the neighborhoods around Sabino Canyon Road and the recreation area, on the Foothills side of Tucson, where glass tends to be large, high and expensive.',
    lead: 'We do. The Sabino Canyon area is part of Wildcat Washers’ regular Catalina Foothills coverage.',
    differs: 'Ventana Canyon and La Paloma are resort communities. Sabino Canyon is an area name, and it covers many different kinds of homes.',
    emphasis: { title: 'Screens are part of the job', body: 'Screens are washed as part of every 5-in-1. If one is torn, repair means new mesh in your existing frame, and crews carry what they need to add it the same day. If the frame itself is badly damaged, we’ll recommend replacement instead.' },
    angle: [metroConditions.water, metroConditions.dust],
    photo: 'clean-fireplace-view-windows',
  },
  {
    kind: 'community', slug: 'ventana-canyon', name: 'Ventana Canyon', parent: 'catalina-foothills',
    intro: 'A resort and golf community with luxury homes and villas around the Loews resort.',
    lead: 'Yes. Ventana Canyon is one of the Catalina Foothills communities Wildcat Washers serves, homes and villas alike.',
    differs: 'La Paloma is built around the Westin. Ventana Canyon is built around the Loews resort.',
    emphasis: { title: 'Exterior only, or inside and out', body: 'Both are priced per pane, and exterior only is less than doing both. Most of our customers have us do inside and out, because that’s the full 5-in-1 Deep Clean, but exterior only is available anytime.' },
    angle: [metroConditions.water, metroConditions.irrigation],
    photo: 'clean-french-doors-golf-view',
  },
  {
    kind: 'community', slug: 'la-paloma', name: 'La Paloma', parent: 'catalina-foothills',
    intro: 'A golf and resort community around the Westin La Paloma, with view homes and townhomes.',
    lead: 'Wildcat Washers cleans windows in La Paloma and across the Catalina Foothills, which we cover fully.',
    differs: 'Ventana Canyon centers on the Loews resort. La Paloma centers on the Westin, with view homes and townhomes.',
    emphasis: { title: 'Townhome or view home', body: 'Every home gets the same 5-in-1: glass, frames, sills, tracks and screens, cleaned by hand, with hard water removal included. It’s quoted per pane, over the phone in a few minutes.' },
    angle: [metroConditions.water, metroConditions.dust],
    photo: 'clean-patio-sliders',
  },
  {
    kind: 'hoa', slug: 'skyline-country-club', name: 'Skyline Country Club', parent: 'catalina-foothills',
    intro: 'Skyline Country Club is a private club and gated custom-home community on Skyline Drive in the Catalina Foothills, the prestige address of Tucson.',
    lead: 'Yes. Skyline Country Club is in the Catalina Foothills, which Wildcat Washers covers fully.',
    differs: 'Sin Vacas is guard-gated off Sunrise Drive. Skyline Country Club is the private club community on Skyline Drive, with Skyline Bel Air Estates below it.',
    emphasis: { title: 'Glass that’s large, high and expensive', body: `${glassMethod} Being right at the glass for everything else gives far higher attention to detail, which is why hand washing stays our primary method.` },
    angle: [metroConditions.water, metroConditions.dust],
    photo: 'clean-fireplace-view-windows',
  },
  {
    kind: 'hoa', slug: 'sin-vacas', name: 'Sin Vacas', parent: 'catalina-foothills',
    intro: 'Sin Vacas is a guard-gated luxury community off Sunrise Drive in the Catalina Foothills.',
    lead: 'Wildcat Washers cleans windows for Sin Vacas residents. Foothills homes mean large, high view glass, and that’s exactly the kind of work we’re known for.',
    differs: 'Skyline Country Club is the private club community on Skyline Drive. Sin Vacas is guard-gated, off Sunrise Drive.',
    emphasis: { title: 'Inspected before we start', body: 'We inspect every window before starting and walk you through anything we find: existing chips, scratches, etching, failed seals. You should never learn about pre-existing damage after the crew leaves.' },
    angle: [metroConditions.water, metroConditions.sun],
    photo: 'two-techs-tall-glass',
  },

  /* ---------------- Tanque Verde ---------------- */
  {
    kind: 'hoa', slug: 'vactor-ranch', name: 'Vactor Ranch', parent: 'tanque-verde', reviewDetails: ['Vactor Ranch'],
    intro: 'Vactor Ranch is a gated community of custom homes near Sabino Canyon Road, on the Tanque Verde side of town.',
    lead: 'Wildcat Washers cleans windows for Vactor Ranch residents, and a Vactor Ranch customer reviewed us by name for being on time and extremely attentive to detail.',
    differs: 'Forty Niner Country Club Estates is the golf-course neighborhood on Tanque Verde Road. Vactor Ranch is gated custom homes near Sabino Canyon Road.',
    emphasis: { title: 'Semi-rural dust', body: 'Unpaved roads, horse properties and open desert all put more dust in the air, and Tanque Verde has all three. Windows near open desert get dirtier noticeably faster, which is why a regular schedule matters here.' },
    angle: [metroConditions.water, metroConditions.pollen],
    photo: 'clean-fireplace-view-windows',
  },
  {
    kind: 'hoa', slug: 'forty-niner-country-club-estates', name: 'Forty Niner Country Club Estates', parent: 'tanque-verde',
    intro: 'Forty Niner Country Club Estates is a golf-course neighborhood on Tanque Verde Road, on the semi-rural east side at the foot of the Rincons.',
    lead: 'Wildcat Washers cleans windows for Forty Niner Country Club Estates residents. Tanque Verde homes with big glass are the kind of work we love.',
    differs: 'Vactor Ranch is gated custom homes near Sabino Canyon Road. Forty Niner is the golf-course neighborhood on Tanque Verde Road.',
    emphasis: { title: 'Golf-course sprinklers and hard water', body: 'Where sprinkler water regularly hits the glass, it’s worth adjusting it and keeping a regular cleaning schedule, because that mineral spotting etches over time. Three times a year handles it for most homes.' },
    angle: [metroConditions.dust, metroConditions.water],
    photo: 'clean-french-doors-golf-view',
  },

  /* ---------------- Tucson ---------------- */
  {
    kind: 'community', slug: 'sam-hughes', name: 'Sam Hughes', parent: 'tucson',
    intro: 'Tucson’s best-known historic neighborhood in central Tucson: 1920s–40s brick and adobe on tree-lined streets, original divided-light windows and homeowners who care about preservation.',
    lead: 'Yes. Sam Hughes is one of Wildcat Washers’ central Tucson neighborhoods, and our office is right next door in Blenman-Elm.',
    differs: 'Rita Ranch is the big southeast master plan. Sam Hughes is the historic central neighborhood, next to Blenman-Elm.',
    emphasis: { title: 'Divided-light and French-pane windows', body: 'More panes means more detail work, which is what we do best. Divided-light windows are quoted per pane like everything else, and every pane is cleaned by hand.' },
    angle: [metroConditions.water, metroConditions.dust],
    sections: [{ name: 'Blenman-Elm', body: 'Adjacent historic neighborhood north of Speedway with similar 1920s–40s homes, and home to the Wildcat Washers office.' }],
    photo: 'tech-arched-door-ladder',
  },
  {
    kind: 'community', slug: 'rita-ranch', name: 'Rita Ranch', parent: 'tucson',
    intro: 'A big southeast Tucson master plan near Davis-Monthan and Houghton, with 1990s–2000s family homes, high ownership and its own identity. Residents say Rita Ranch, not Tucson.',
    lead: 'Wildcat Washers cleans windows across Rita Ranch and neighboring Civano, part of our southeast Tucson coverage.',
    differs: 'Sam Hughes is the historic central neighborhood. Rita Ranch is the large southeast master plan with its own identity, next to Civano.',
    emphasis: { title: 'After monsoon season', body: 'Monsoon storms, roughly June through September, leave heavy dirt and dust behind. Cleaning right after summer resets everything going into fall, and it’s one of the three visits in the Wildcat Club.' },
    angle: [metroConditions.water, metroConditions.pollen],
    sections: [{ name: 'Civano', body: 'Neighboring planned community known for sustainable design and Southwest architecture.' }],
    photo: 'tech-kneeling-window-detail',
  },
  {
    kind: 'hoa', slug: 'tucson-estates', name: 'Tucson Estates', parent: 'tucson', reviewDetails: ['Tucson Estates'],
    intro: 'Tucson Estates is a west-side Tucson community whose residents use the name, including the customers who have reviewed us there.',
    lead: 'Wildcat Washers. We have customers in Tucson Estates, and one of them reviewed us by name as super respectful and really detail oriented.',
    differs: 'Of the Tucson neighborhoods with their own page, Tucson Estates is the west-side one. Sam Hughes is central and Rita Ranch is southeast.',
    emphasis: { title: 'Ready before company comes', body: 'Clean windows make a home look well kept. Tell us when you need it done, and with flexible scheduling seven days a week, evenings and weekends are no problem.' },
    angle: [metroConditions.dust, metroConditions.water],
    photo: 'tech-squeegee-desert-window',
  },

  /* ---------------- Vail AZ ---------------- */
  {
    kind: 'community', slug: 'del-webb-at-rocking-k', name: 'Del Webb at Rocking K', parent: 'vail-az', senior: true,
    intro: 'A new-construction Del Webb 55+ community in the Rocking K master plan east of Vail AZ, still selling homes.',
    lead: 'Yes. Del Webb at Rocking K is one of the active adult communities Wildcat Washers works in regularly, and Vail AZ is part of our regular coverage.',
    differs: 'The rest of Rocking K is family neighborhoods. Del Webb is its 55+ section, and the homes are brand new.',
    emphasis: { title: 'Builder dust on brand-new glass', body: newBuild },
    angle: [metroConditions.water, metroConditions.dust],
    photo: 'clean-three-windows-reflection',
  },
  {
    kind: 'hoa', slug: 'del-webb-at-rancho-del-lago', name: 'Del Webb at Rancho del Lago', parent: 'vail-az', senior: true,
    intro: 'Del Webb at Rancho del Lago is the 55+ golf section of Rancho del Lago, the master-planned golf community on the north side of Vail AZ.',
    lead: 'Yes. Vail AZ is part of Wildcat Washers’ regular coverage, including Rancho del Lago and its Del Webb section.',
    differs: 'Academy Village is the small 55+ community tied to the Arizona Senior Academy. Del Webb at Rancho del Lago is the golf section of Rancho del Lago.',
    emphasis: { title: 'Golf-course lots and hard water', body: 'Where irrigation reaches the glass, mineral-heavy water dries into spots. Hard water removal is included in every 5-in-1, so the spotting comes off before it can etch.' },
    angle: [metroConditions.dust, metroConditions.snowbird],
    photo: 'clean-french-doors-golf-view',
  },
  {
    kind: 'hoa', slug: 'academy-village', name: 'Academy Village', parent: 'vail-az', senior: true,
    intro: 'Academy Village is a small 55+ community in the Vail AZ area tied to the Arizona Senior Academy, with a lecture and arts culture. It sits in the Rincon Valley, the local name for the area at the foot of the Rincons.',
    lead: 'Wildcat Washers cleans windows for Academy Village residents. Vail AZ and the Rincon Valley are part of our regular coverage.',
    differs: 'Del Webb at Rancho del Lago is the golf section of Rancho del Lago. Academy Village is the small community tied to the Arizona Senior Academy.',
    emphasis: { title: 'You don’t pay until you’re happy', body: 'We double check every pane, then walk the job with you. Payment comes at the end, after the walkthrough, and only once you’re satisfied. For 14 days after, any touch-up, for any reason, is free.' },
    angle: [metroConditions.dust, metroConditions.water],
    photo: 'two-techs-front-window',
  },
];

export const townBySlug = Object.fromEntries(towns.map((t) => [t.slug, t])) as Record<string, Town>;
export const communityBySlug = Object.fromEntries(communities.map((c) => [c.slug, c])) as Record<string, Community>;
export const childrenOf = (town: string) => communities.filter((c) => c.parent === town);
export const townHref = (slug: string) => `/areas/${slug}/`;
export const communityHref = (c: Community) => `/areas/${c.parent}/${c.slug}/`;

/** Window cleaning × town pages (plan family service-x-location; see localServices.ts). */
export const windowTownSlugs = ['green-valley', 'saddlebrooke', 'catalina-foothills', 'oro-valley', 'tanque-verde', 'marana', 'casas-adobes', 'sahuarita', 'catalina', 'vail-az', 'corona-de-tucson', 'tubac', 'sonoita'];
