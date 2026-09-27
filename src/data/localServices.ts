/**
 * Service × town pages (plan family "service-x-location", 25 rows). Doc 3 §11:
 * only where the market supports it, never a blanket matrix. Each page carries
 * the one thing it adds beyond the service hub: a local angle written from
 * Doc 3 (character, conditions) and Doc 1 (method, facts). If an angle can't be
 * carried with real specifics, the page isn't built.
 */
export type LocalService = {
  service: string;
  town: string;
  angle: { title: string; body: string[] };
};

const solarRain = 'Rain doesn’t clean panels. It moves dust around, the dust sticks, and the water can dry mineral spots onto the glass. Panels need a brush and mild soap, with no harsh chemicals and no stiff brushes, which is how we protect the surface and your warranty.';
const solarWhy = 'Dust and mineral buildup block light before it reaches the cell. Published research puts the loss at 5 to 30 percent depending on local conditions, and we take before and after photos so you can see your own difference.';
const screenFacts = 'We custom measure, build and install Phifer solar screens in any color and shade percentage. 80 and 90 percent block that share of the sun’s heat and glare, and roughly 75 to 90 percent of UV.';

export const localServices: LocalService[] = [
  /* ---------------- Window cleaning × town ---------------- */
  {
    service: 'window-cleaning', town: 'green-valley',
    angle: {
      title: 'Timed to your arrival, built for southern-metro dust',
      body: [
        'Green Valley is a 30-mile run of 55+ neighborhoods organized around GVR centers and golf, with a large snowbird population that arrives in fall and leaves in spring. The most common request here is a clean timed to arrival: tell us your travel dates and the house is clean the day you get back, with no need to be in town.',
        'Mining activity adds measurably to airborne dust in Green Valley, on top of the desert dust and hard water every Tucson home deals with. It’s why we recommend three cleanings a year here, and why the Wildcat Club schedules them for you.',
      ],
    },
  },
  {
    service: 'window-cleaning', town: 'saddlebrooke',
    angle: {
      title: 'Single-story homes with mountain-view glass',
      body: [
        'SaddleBrooke is thousands of single-story homes at the base of the Catalinas, and most of them face the mountains with a lot of glass. Every job is the full 5-in-1, inside and out: glass, frames, sills, tracks and screens, cleaned by hand.',
        'We have customers throughout SaddleBrooke One, SaddleBrooke Two, The Preserve and SaddleBrooke Ranch. Many are seasonal, so arrival-timed cleans and payment on file are routine.',
      ],
    },
  },
  {
    service: 'window-cleaning', town: 'catalina-foothills',
    angle: {
      title: 'Large, high, expensive view glass',
      body: [
        'Foothills homes climb the south slopes of the Santa Catalinas with wall-to-wall view glass, and it’s often high. We hand wash most glass. Very high or hard-to-reach panes get a water-fed pole with pure deionized water, which dries without leaving mineral spots and is never a compromise.',
        'We’re safe on tinted glass, low-E coatings and security film, and we identify coatings before anything touches the glass. Every window is inspected before we start, so you hear about any existing chip, scratch or failed seal first.',
      ],
    },
  },
  {
    service: 'window-cleaning', town: 'oro-valley',
    angle: {
      title: 'Pusch Ridge views through clean glass',
      body: [
        'Oro Valley homes are newer, with big view windows toward Pusch Ridge and the Catalinas. Newer glass is the easiest to keep perfect: windows cleaned on a schedule never reach the point where hard water etches them, and etched glass can only be replaced.',
        'Skylights, mirrors and high interior glass are handled too, usually counted as additional panes on the same quote. We work across Rancho Vistoso, Sun City Oro Valley, Stone Canyon and the rest of town.',
      ],
    },
  },
  {
    service: 'window-cleaning', town: 'tanque-verde',
    angle: {
      title: 'Acreage, long drives and horse-country dust',
      body: [
        'Tanque Verde is semi-rural: horse properties, custom homes on acreage, mature mesquite and long private driveways at the foot of the Rincons. Unpaved roads, horses and open desert all put more dust in the air, so windows here get dirty noticeably faster.',
        'That’s why the 5-in-1 cleans tracks, sills, frames and screens as well as the glass. Leave dust in the tracks and the next breeze or light rain puts it right back on clean glass.',
      ],
    },
  },
  {
    service: 'window-cleaning', town: 'marana',
    angle: {
      title: 'New construction and golf communities',
      body: [
        'Marana stretches from Continental Ranch up to Dove Mountain, with newer master-planned neighborhoods still being built. New construction cleanup is part of what we do: construction dust, debris and glass cleanup. Heavy paint or stucco overspray bonded into glass can be difficult, and we’ll tell you honestly what will come off.',
        'Up the hill at Dove Mountain the glass gets big and high, and that’s where the water-fed pole with deionized water comes in.',
      ],
    },
  },
  {
    service: 'window-cleaning', town: 'casas-adobes',
    angle: {
      title: 'Mature landscaping and sprinkler spotting',
      body: [
        'Casas Adobes is a large, established northwest area of mid-century and 1980s–90s ranch homes with mature landscaping. Where irrigation reaches the glass, Tucson’s mineral-heavy water dries into white spots, and left long enough it etches the glass permanently.',
        'Hard water removal is included in every 5-in-1, buffed off with 0000-grade steel wool and walnut pads. If sprinklers hit your windows regularly, it’s worth adjusting them too. Three cleanings a year handles it for most homes.',
      ],
    },
  },
  {
    service: 'window-cleaning', town: 'sahuarita',
    angle: {
      title: 'Southern-metro dust on newer homes',
      body: [
        'Sahuarita is newer stucco homes built largely around Rancho Sahuarita and its lake, with young households and a growing 55+ pocket. Mining activity adds measurably to airborne dust here and in Green Valley, and it settles on glass faster than in most of Tucson.',
        'Most families choose inside and out for the full 5-in-1, and exterior only is available anytime. Both are priced per pane and quoted over the phone in a few minutes.',
      ],
    },
  },
  {
    service: 'window-cleaning', town: 'catalina',
    angle: {
      title: 'Acreage lots and open desert',
      body: [
        'Catalina is the unincorporated community north of Oro Valley on Oracle Road, the last stop before SaddleBrooke: older, mixed housing on acreage lots with Catalina Mountain views. Open exposure means more airborne dust reaches the glass.',
        'There’s no trip charge out here, or anywhere we work. We quote per pane over the phone, and you don’t pay until you’ve walked the finished job and you’re happy.',
      ],
    },
  },
  {
    service: 'window-cleaning', town: 'vail-az',
    angle: {
      title: 'Builder dust on new homes',
      body: [
        'Vail AZ is newer subdivisions against the Rincon Mountains, with Del Webb at Rocking K still selling homes. Brand-new windows come with builder dust and construction residue, and a proper first clean makes the difference.',
        'After that, a regular schedule keeps new glass from ever building up the hard-water spotting that etches over time. The Wildcat Club handles three visits a year for you.',
      ],
    },
  },
  {
    service: 'window-cleaning', town: 'corona-de-tucson',
    angle: {
      title: 'Newer homes with Santa Rita views',
      body: [
        'Corona de Tucson is a small, newer community tucked against the Santa Rita foothills, almost entirely owner-occupied, with mountain views from a lot of windows.',
        'We have customers here, and it’s part of our regular southeast coverage with no trip charge. Newer glass kept on a three-a-year schedule never gets the chance to etch.',
      ],
    },
  },
  {
    service: 'window-cleaning', town: 'tubac',
    angle: {
      title: 'Big fixed view glass, ready when you arrive',
      body: [
        'Tubac’s Santa Fe-style homes have big fixed view windows, and many belong to seasonal residents. We pre-schedule the clean around your travel dates so the house is ready the day you arrive, and you don’t need to be in town for us to do it.',
        'Tubac is about 45 minutes south on I-19, and there’s no trip charge. We serve it like anywhere else.',
      ],
    },
  },
  {
    service: 'window-cleaning', town: 'sonoita',
    angle: {
      title: 'Wall-to-wall glass in wine country',
      body: [
        'Sonoita is high-grassland wine country, with custom view homes on acreage and ranch estates with wall-to-wall glass. Very high or hard-to-reach panes get a water-fed pole with pure deionized water, and the rest is hand washed.',
        'It’s about an hour southeast via Highway 83, and there’s no trip charge. We cover Elgin too.',
      ],
    },
  },

  /* ---------------- Solar panel cleaning × town ---------------- */
  {
    service: 'solar-panel-cleaning', town: 'green-valley',
    angle: {
      title: 'Mine dust and hard water on southern-metro panels',
      body: [
        'Nearby mining activity meaningfully affects airborne dust in Green Valley, Sahuarita and the southern metro, and it settles evenly across panels. Hard water from rain or irrigation then dries into mineral deposits on top.',
        `${solarRain} ${solarWhy}`,
      ],
    },
  },
  {
    service: 'solar-panel-cleaning', town: 'sahuarita',
    angle: {
      title: 'Newer rooftops in the dustiest part of the metro',
      body: [
        'Sahuarita’s newer stucco homes carry a lot of rooftop solar, and mining activity in the southern metro puts more dust in the air here than across most of Tucson.',
        'We work from the roof surface with the right equipment and never stand on panels, because standing on them is how microcracks happen. Mild soap only where there’s real buildup, and nothing abrasive.',
      ],
    },
  },
  {
    service: 'solar-panel-cleaning', town: 'oro-valley',
    angle: {
      title: 'Dust plus spring pollen',
      body: [
        'Oro Valley has heavy residential solar, and panels here face the metro’s constant desert dust with spring pollen landing on top.',
        `${solarWhy} Once or twice a year is the right frequency for most Oro Valley homes, and a cleaning usually takes one to three hours.`,
      ],
    },
  },
  {
    service: 'solar-panel-cleaning', town: 'marana',
    angle: {
      title: 'New-build arrays and construction dust',
      body: [
        'Marana’s newer master-planned neighborhoods are still building, and construction dust lands on nearby rooftop arrays as well as windows.',
        'If birds have started nesting under your panels, we handle solar panel pigeon proofing too. The mesh secures with a clip-and-wire system, with no drilling into the roof and nothing attached to the panel frames, and we clean the panels while we’re up there.',
      ],
    },
  },
  {
    service: 'solar-panel-cleaning', town: 'vail-az',
    angle: {
      title: 'New arrays, builder dust',
      body: [
        'Vail AZ’s newer subdivisions and the Rocking K master plan mean new arrays in neighborhoods where building is still going on. Builder dust settles on panels just as it does on glass.',
        'The method depends on the buildup: hand washing, deionized water, and mild soap when it’s needed. Any panel type, any roof type, any pitch, and no job is declined.',
      ],
    },
  },
  {
    service: 'solar-panel-cleaning', town: 'saddlebrooke',
    angle: {
      title: 'Single-story roofs, done alongside your windows',
      body: [
        'SaddleBrooke homes are single-story, and many carry rooftop solar. Crews carry equipment for every service, so panels and windows can be cleaned in the same visit.',
        'Cleaning does more than restore output. Hard water and mineral residue that dry on the panel glass contribute to premature wear, so regular cleaning protects the life of an expensive investment.',
      ],
    },
  },
  {
    service: 'solar-panel-cleaning', town: 'catalina-foothills',
    angle: {
      title: 'Hillside and ground-mount arrays',
      body: [
        'Foothills custom homes sit on slopes, and some carry ground-mount arrays as well as rooftop panels. We clean any panel type on any roof type and pitch, rooftop or ground mount.',
        'Once or twice a year keeps most arrays performing. Customers can’t see their own roof, so we take before and after photos on every job and show you the difference.',
      ],
    },
  },

  /* ---------------- Solar screens × town ---------------- */
  {
    service: 'solar-screens', town: 'oro-valley',
    angle: {
      title: 'West-facing view windows and hot afternoon rooms',
      body: [
        'West-facing glass is the highest priority for solar screens: afternoon and evening sun hits at a low angle, striking the glass nearly straight on during the hottest hours of the day. Oro Valley’s big view windows are often exactly that.',
        'SunTex 80 and 90 block that share of the sun’s heat and glare. You can still see out easily, even through 90 percent mesh, while people outside can’t see in during the day.',
      ],
    },
  },
  {
    service: 'solar-screens', town: 'catalina-foothills',
    angle: {
      title: 'South-slope homes with big sun-facing glass',
      body: [
        'Foothills homes sit on the south slopes of the Catalinas, and south-facing glass gets direct sun most of the day, year-round. Large sun-facing windows are where solar screens earn their keep.',
        'Screens block roughly 75 to 90 percent of UV, which protects furniture, flooring, artwork and window treatments from fading. We use top-grade Phifer materials, which carry a 10-year manufacturer warranty on the material.',
      ],
    },
  },
  {
    service: 'solar-screens', town: 'green-valley',
    angle: {
      title: 'Beige to match the stucco, and daytime privacy',
      body: [
        'Black and beige are the most common colors, and beige is usually chosen to match stucco, which suits most Green Valley homes. From outside, people can’t see in during the day, which many residents value as much as the cooling.',
        'We custom measure, build and install every screen. They’re secured with brackets that rotate in and out, so screens pop out easily when you want them to, with no risk to the window.',
      ],
    },
  },
  {
    service: 'solar-screens', town: 'marana',
    angle: {
      title: 'Newer homes and the one room that overheats',
      body: [
        'Many Marana homes are newer, and almost every house has one room that always overheats. That room is the place to start: any window that gets sun is worth screening, and the more sun it gets, the more it’s worth.',
        'The U.S. Department of Energy reports that well-placed shade can cut annual cooling costs by 7 to 15 percent. Typical turnaround is two to three weeks from measure to install.',
      ],
    },
  },

  /* ---------------- Pressure washing × town ---------------- */
  {
    service: 'pressure-washing', town: 'green-valley',
    angle: {
      title: 'Arizona rooms and patios',
      body: [
        'Arizona rooms and screen enclosures are a real process for us: we scrub the screens with a brush and cleaning solution, pressure wash from the inside out to flush the dust, then from the outside in with a surface cleaner, and clean the floor. The mesh comes out reconditioned and looking like new.',
        'Many customers have tried to clean their own Arizona room and couldn’t get it clean. Patios, walkways, pool decks and driveways are done the same visit. We clean; we don’t seal or stain.',
      ],
    },
  },
];
