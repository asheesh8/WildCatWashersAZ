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
  intro: string;
  angle: string[];
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
      { service: 'window-cleaning', why: 'Big view glass on single-story homes, scheduled HOA by HOA.' },
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
      'Big west-facing view windows catch hot afternoon sun and show every spot.',
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

export const communities: Community[] = [
  {
    kind: 'community', slug: 'quail-creek', name: 'Quail Creek', parent: 'green-valley', reviewDetails: ['Quail Creek'],
    intro: 'Robson’s gated 55+ golf community on the east side of Green Valley, newer and more upscale than most of GVR, with a large snowbird share. Residents say Quail Creek first and Green Valley second.',
    angle: [metroConditions.snowbird, metroConditions.mine, 'Neighbors often book after seeing our crew across the street, so we’re in Quail Creek most weeks.'],
    photo: 'two-techs-front-window',
  },
  {
    kind: 'community', slug: 'canoa-ranch', name: 'Canoa Ranch', parent: 'green-valley', reviewDetails: ['Canoa Ranch'],
    intro: 'A large gated 55+ golf community on the south end of Green Valley with a distinct identity of its own.',
    angle: [metroConditions.mine, metroConditions.snowbird, 'Golf-course lots mean open exposure and irrigation that can reach the glass.'],
    photo: 'clean-french-doors-golf-view',
  },
  {
    kind: 'community', slug: 'saddlebrooke-ranch', name: 'SaddleBrooke Ranch', parent: 'saddlebrooke', reviewDetails: [], reviewAreas: ['SaddleBrooke Ranch', 'Oracle'],
    intro: 'Robson’s newer 55+ community just north of SaddleBrooke near Oracle, still under construction, with a resort clubhouse and golf. The same kind of neighbor as SaddleBrooke, in newer homes.',
    angle: ['Ongoing construction nearby means builder dust on new glass.', 'Newer homes often need a first clean for construction residue.', metroConditions.water],
    sections: [{ name: 'Oracle', body: 'Small mountain town just north, older and artsy, with hillside custom homes.' }],
    photo: 'clean-window-sunset-glow',
  },
  {
    kind: 'community', slug: 'dove-mountain', name: 'Dove Mountain', parent: 'marana', reviewDetails: ['Dove Mountain'],
    intro: 'Marana’s luxury master plan in the Tortolita foothills, anchored by The Ritz-Carlton and its golf courses. From family neighborhoods in the Villages to custom homes up the hill. Big glass, big views.',
    angle: ['Large view glass up the hill, often high and hard to reach.', 'Active construction in parts of the master plan.', metroConditions.water],
    sections: [
      { name: 'Del Webb at Dove Mountain', body: 'Newer 55+ neighborhood of single-story homes within Dove Mountain.' },
      { name: 'The Gallery', body: 'Private golf club community with custom homes on the mountain.' },
      { name: 'Ritz-Carlton Residences Dove Mountain', body: 'Luxury residences adjoining the resort.' },
      { name: 'Canyon Pass', body: 'Guard-gated estate section with two-acre lots at the top of Dove Mountain.' },
    ],
    photo: 'two-techs-tall-glass',
  },
  {
    kind: 'community', slug: 'the-highlands-at-dove-mountain', name: 'The Highlands at Dove Mountain', parent: 'marana', reviewDetails: [],
    intro: 'A gated 55+ golf community at the entrance to Dove Mountain. Established single-story homes with views and an active clubhouse culture.',
    angle: ['Single-story view homes on open desert lots.', metroConditions.water, 'Seasonal residents can pre-schedule so the house is ready on arrival.'],
    photo: 'clean-window-sunset-glow',
  },
  {
    kind: 'community', slug: 'continental-ranch', name: 'Continental Ranch', parent: 'marana', reviewDetails: ['Sunflower at Continental Ranch'],
    intro: 'Marana’s largest and most established subdivision along Silverbell and Cortaro, a big HOA of 1990s–2000s homes.',
    angle: ['Twenty-plus-year-old screens are often ready for new mesh.', 'Dense neighborhoods make it easy for us to be nearby any day of the week.', metroConditions.water],
    sections: [
      { name: 'Continental Reserve', body: 'Newer sister neighborhood on the west side of Silverbell.' },
      { name: 'Sunflower at Continental Ranch', body: 'The 55+ gated section with its own clubhouse.' },
    ],
    photo: 'tech-kneeling-window-detail',
  },
  {
    kind: 'community', slug: 'rancho-vistoso', name: 'Rancho Vistoso', parent: 'oro-valley', reviewDetails: ['Rancho Vistoso, Stone Canyon'],
    intro: 'The biggest master-planned community in Oro Valley, spanning the north end of town with dozens of gated villages, golf and trailheads into the Tortolitas. Residents name their village but search Rancho Vistoso.',
    angle: ['Skylights and high interior glass are common here, and we handle both.', 'Big Tortolita and Catalina view windows.', metroConditions.water],
    photo: 'two-techs-interior-modern',
  },
  {
    kind: 'community', slug: 'sun-city-oro-valley', name: 'Sun City Oro Valley', parent: 'oro-valley', reviewDetails: [],
    intro: 'The established Del Webb 55+ community inside Rancho Vistoso: single-story homes, golf and a very active resident base.',
    angle: ['Single-story homes make a thorough interior and exterior clean quick and easy to schedule.', metroConditions.water, metroConditions.snowbird],
    photo: 'clean-patio-sliders',
  },
  {
    kind: 'community', slug: 'stone-canyon', name: 'Stone Canyon', parent: 'oro-valley', reviewDetails: ['Stone Canyon', 'Rancho Vistoso, Stone Canyon'],
    intro: 'The guard-gated luxury enclave at the top of Rancho Vistoso, with a Jay Morrish golf course and custom homes set among boulders. The glass is enormous and often specialty.',
    angle: ['Specialty and coated glass is identified before anything touches it.', 'High glass is reached with a water-fed pole and pure deionized water.', metroConditions.water],
    photo: 'two-techs-tall-glass',
  },
  {
    kind: 'community', slug: 'rancho-sahuarita', name: 'Rancho Sahuarita', parent: 'sahuarita', reviewDetails: [],
    intro: 'The master-planned heart of Sahuarita, built around a lake, parks and family amenities. It’s where most Sahuarita residents actually live.',
    angle: [metroConditions.mine, 'Newer stucco homes with sun-facing glass.', metroConditions.water],
    sections: [{ name: 'Sonora at Rancho Sahuarita', body: 'The Del Webb 55+ section with its own clubhouse.' }],
    photo: 'solar-screens-garden-home',
  },
  {
    kind: 'community', slug: 'sabino-canyon', name: 'Sabino Canyon', parent: 'catalina-foothills', reviewDetails: [],
    intro: 'The area name locals use for the neighborhoods around Sabino Canyon Road and the recreation area.',
    angle: ['Foothill homes with big views toward the canyon.', 'Desert washes and trails nearby bring dust close to the house.', metroConditions.water],
    photo: 'clean-fireplace-view-windows',
  },
  {
    kind: 'community', slug: 'ventana-canyon', name: 'Ventana Canyon', parent: 'catalina-foothills', reviewDetails: [],
    intro: 'A resort and golf community around the Loews resort, with luxury homes and villas.',
    angle: ['Golf-course lots with irrigation near the glass.', 'Large view glass on the foothill slope.', metroConditions.water],
    photo: 'clean-french-doors-golf-view',
  },
  {
    kind: 'community', slug: 'la-paloma', name: 'La Paloma', parent: 'catalina-foothills', reviewDetails: [],
    intro: 'A golf and resort community around the Westin La Paloma, with view homes and townhomes.',
    angle: ['Townhomes and view homes with a lot of glass facing the city.', 'Golf irrigation can reach windows and dry into spots.', metroConditions.water],
    photo: 'clean-patio-sliders',
  },
  {
    kind: 'community', slug: 'sam-hughes', name: 'Sam Hughes', parent: 'tucson', reviewDetails: [],
    intro: 'Tucson’s best-known historic neighborhood just east of the university. 1920s–40s brick and adobe on tree-lined streets, original divided-light windows and homeowners who care about preservation. Our office is next door in Blenman-Elm.',
    angle: ['Original divided-light windows get pane-by-pane hand cleaning.', 'Old frames and sills are hand cleaned gently, never blasted.', metroConditions.water],
    photo: 'tech-arched-door-ladder',
  },
  {
    kind: 'community', slug: 'rita-ranch', name: 'Rita Ranch', parent: 'tucson', reviewDetails: [],
    intro: 'A big southeast Tucson master plan near Davis-Monthan and Houghton, with 1990s–2000s family homes, high ownership and its own identity. Residents say Rita Ranch, not Tucson.',
    angle: ['Screens on homes this age are often ready for new mesh.', metroConditions.dust, metroConditions.water],
    sections: [{ name: 'Civano', body: 'Neighboring planned community known for sustainable design and Southwest architecture.' }],
    photo: 'tech-kneeling-window-detail',
  },
  {
    kind: 'community', slug: 'del-webb-at-rocking-k', name: 'Del Webb at Rocking K', parent: 'vail-az', reviewDetails: [],
    intro: 'A new-construction Del Webb 55+ community in the Rocking K master plan east of Vail AZ, still selling homes.',
    angle: ['Builder dust and construction residue on brand-new glass. A post-construction first clean makes a big difference.', 'Then a regular schedule, including seasonal timing.', metroConditions.water],
    photo: 'clean-three-windows-reflection',
  },
  /* ---- HOA / neighborhood pages that carry a real local review (plan wave 3) ---- */
  {
    kind: 'hoa', slug: 'legends', name: 'Legends', parent: 'green-valley', reviewDetails: ['Legends'],
    intro: 'A Green Valley GVR neighborhood associated with Torres Blancas golf. Residents name it when they review us.',
    angle: [metroConditions.mine, 'We’re often working on neighboring homes, which makes scheduling easy.', metroConditions.snowbird],
    photo: 'two-techs-front-window',
  },
  {
    kind: 'hoa', slug: 'springs-at-canoa', name: 'Springs at Canoa', parent: 'green-valley', reviewDetails: ['Springs Canoa'],
    intro: 'A Green Valley neighborhood on the Canoa side of town that customers name in their reviews.',
    angle: [metroConditions.mine, metroConditions.water, metroConditions.snowbird],
    photo: 'clean-patio-sliders',
  },
  {
    kind: 'hoa', slug: 'links-at-santa-rita-springs', name: 'The Links at Santa Rita Springs', parent: 'green-valley', reviewDetails: ['The Links at Santa Rita Springs'],
    intro: 'A Green Valley golf neighborhood where we clean regularly, reviewed by name.',
    angle: ['Golf-course irrigation can reach the glass and dry into spots.', metroConditions.mine, metroConditions.snowbird],
    photo: 'clean-french-doors-golf-view',
  },
  {
    kind: 'hoa', slug: 'colonia-de-los-alamos', name: 'Colonia de los Alamos', parent: 'green-valley', reviewDetails: ['Colonia de los Alamos'],
    intro: 'An established Green Valley neighborhood that customers name in their reviews, including for solar panel cleaning.',
    angle: [metroConditions.mine, 'Rooftop solar collects the same southern-metro dust as the glass.', metroConditions.water],
    photo: 'solar-panels-tile-roof-neighborhood',
  },
  {
    kind: 'hoa', slug: 'the-preserve-at-saddlebrooke', name: 'The Preserve at SaddleBrooke', parent: 'saddlebrooke', reviewDetails: ['The Preserve at SaddleBrooke'],
    intro: 'The newest golf neighborhood within SaddleBrooke Two, with mountain-view homes at the base of the Catalinas.',
    angle: ['Newer homes with big mountain-view glass.', 'We schedule SaddleBrooke HOA by HOA, so we’re nearby often.', metroConditions.water],
    photo: 'clean-window-sunset-glow',
  },
  {
    kind: 'hoa', slug: 'rancho-resort', name: 'Rancho Resort', parent: 'sahuarita', reviewDetails: ['Rancho Resort'],
    intro: 'A small gated 55+ neighborhood in Sahuarita.',
    angle: [metroConditions.mine, metroConditions.water, metroConditions.snowbird],
    photo: 'tech-slider-squeegee',
  },
  {
    kind: 'hoa', slug: 'sunflower-at-continental-ranch', name: 'Sunflower at Continental Ranch', parent: 'marana', reviewDetails: ['Sunflower at Continental Ranch'],
    intro: 'The 55+ gated section of Continental Ranch in Marana, with its own clubhouse.',
    angle: ['Rooftop solar is common, and we clean panels and windows in one visit.', metroConditions.water, metroConditions.dust],
    photo: 'tech-solar-pole-clean',
  },
  {
    kind: 'hoa', slug: 'vactor-ranch', name: 'Vactor Ranch', parent: 'tanque-verde', reviewDetails: ['Vactor Ranch'],
    intro: 'A gated community of custom homes near Sabino Canyon Road on the Tanque Verde side.',
    angle: ['Custom homes on larger lots, with dust from drives and open desert.', metroConditions.water, metroConditions.dust],
    photo: 'clean-fireplace-view-windows',
  },
  {
    kind: 'hoa', slug: 'tucson-estates', name: 'Tucson Estates', parent: 'tucson', reviewDetails: ['Tucson Estates'],
    intro: 'A west-side community near the Tucson Mountains. Customers use the name.',
    angle: ['West-side homes take the full afternoon sun.', metroConditions.dust, metroConditions.water],
    photo: 'tech-squeegee-desert-window',
  },
];

export const townBySlug = Object.fromEntries(towns.map((t) => [t.slug, t])) as Record<string, Town>;
export const communityBySlug = Object.fromEntries(communities.map((c) => [c.slug, c])) as Record<string, Community>;
export const childrenOf = (town: string) => communities.filter((c) => c.parent === town);
export const townHref = (slug: string) => `/areas/${slug}/`;
export const communityHref = (c: Community) => `/areas/${c.parent}/${c.slug}/`;

/** Window cleaning × town pages in the plan's waves 1–2 (towns with real local reviews or a clear local angle). */
export const windowTownSlugs = ['green-valley', 'saddlebrooke', 'catalina-foothills', 'oro-valley', 'tanque-verde', 'marana', 'casas-adobes', 'sahuarita', 'vail-az'];
