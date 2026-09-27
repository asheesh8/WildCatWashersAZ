/**
 * Depth copy from the research thread (/mnt/project-files/aeo-geo/depth-round-1..5.md),
 * keyed by page URL. Templates read it when present:
 * - answer: the 40–60 word direct answer, shown first under the H1 (it replaces the old lead in that slot).
 * - sections: short local sections. Links are written [label](/path/) and render as links
 *   only when the target isn't a pending (unapproved) page.
 * - proof: review numbers shown first in the page's review block (quoted exactly, never relabeled).
 * - faq: FAQ numbers the page must show besides its plan refs. Schema ownership still follows
 *   page-plan-200.json: Base drops questions a page doesn't own from its FAQPage markup.
 * - title / meta: only for templates whose title isn't derived from the plan H1.
 * Source tags ([F91], [S §3] …) are stripped. Where a spec line broke a site rule, the rule won.
 */
import { arroyoGardens, review, type Review } from './reviews';
import { faqs, type Faq } from './faq';

export type DepthSection = { h: string; p: string; q?: { text: string; by: string } };
export type Depth = {
  title?: string;
  meta?: string;
  answer?: string;
  /** Heading over the sections block (town, community and service pages). */
  heading?: string;
  sections?: DepthSection[];
  proof?: number[];
  /** Proof reviews to label with their town rather than the neighborhood detail (e.g. R121 is Marana). */
  proofAsTown?: number[];
  /** Reviews quoted inside a section, kept out of the review block so they aren't shown twice. */
  quoted?: number[];
  /** Reviews moved to their home page (round 5 review moves), kept out of this page's review block. */
  omit?: number[];
  faq?: number[];
};

/** FAQ shown on every window × town page, linked to its owner (no schema here). */
const windowFaqs = [25, 34, 159, 187];
const threeAYear = (club = true) =>
  `Right after summer and monsoon season, around the holidays, and in spring. That spacing stops mineral buildup before it can etch the glass.${club ? ' The [Wildcat Club](/wildcat-club/) books all three visits for you, and one-time cleans are always available.' : ''}`;

export const depth: Record<string, Depth> = {
  /* ============================== Round 1 ============================== */
  '/areas/green-valley/': {
    title: 'Window Cleaning Green Valley AZ | Wildcat Washers',
    meta: 'Voted Best Window Cleaners in Green Valley and Sahuarita (2025 AZ-19 Readers’ Pick). Windows, solar panels, solar screens and more. (520) 525-0084.',
    answer:
      'Wildcat Washers cleans windows, solar panels, solar screens and more across Green Valley, and it’s one of our home markets. Readers voted us Best Window Cleaners in Green Valley and Sahuarita in the 2025 AZ-19 Readers’ Pick. Our trucks are there most weeks, and every job is quoted per pane by phone at (520) 525-0084.',
    heading: 'Green Valley, up close',
    sections: [
      { h: 'Why Green Valley glass gets dirty faster', p: 'Desert dust never really stops here, and the water is mineral heavy. Mining nearby adds to the dust in the air, so windows and solar panels in Green Valley collect more than homes in central Tucson. Rain doesn’t fix it either: it [moves dust around on panels rather than washing it off](/guides/does-rain-clean-solar-panels/).' },
      { h: 'Here all year, or here for the season', p: 'Seasonal owners usually have us come right when they arrive, so the house is ready the day they get back. Tell us your arrival date and we’ll schedule it; you don’t need to be home. Year-round residents get the same three-a-year rhythm we recommend. The [Wildcat Club](/wildcat-club/) can book it for you, and one-time cleans are always available.' },
      { h: 'Giving back here first', p: 'Our first [Wash It Forward](/wash-it-forward/) was here: we cleaned every window at the Santa Rita Fire Department in Green Valley at no charge. See [all our awards](/awards/).' },
      { h: 'Commercial and senior living', p: 'We clean for [senior living communities](/who-we-help/senior-living/) and businesses in Green Valley as well as homes.', q: { text: arroyoGardens.quote, by: `${arroyoGardens.name}, ${arroyoGardens.role}` } },
    ],
    proof: [6, 20, 32],
    faq: [91, 7, 36, 167, 65, 19],
  },

  '/services/window-cleaning/green-valley/': {
    title: 'Window Cleaning in Green Valley AZ | 5-in-1 Deep Clean',
    meta: 'Glass, frames, sills, tracks and screens hand-cleaned in Green Valley. Hard water removal included. 14-Day Spotless Guarantee. (520) 525-0084.',
    answer:
      'Our Green Valley window cleaning is a 5-in-1 Deep Clean: glass, frames, sills, tracks and screens, all cleaned by hand. Mineral buildup is buffed off with 0000-grade steel wool at no extra charge. Every job is priced per pane, quoted by phone in minutes, and backed by our 14-Day Spotless Guarantee.',
    heading: 'The 5-in-1 Deep Clean in Green Valley',
    sections: [
      { h: 'What the 5-in-1 means on your windows', p: 'Glass, frames and sills are cleaned by hand. Tracks are vacuumed out, then washed. Screens come out and get reconditioned. Every pane is double-checked before we walk the job with you.' },
      { h: 'Hard water in the southern metro', p: 'White spots come from mineral-heavy water drying on the glass. We remove buildup that sits on the glass. Etched glass can’t be fixed, and we’ll tell you which one you have before you pay. More on [spots vs etching](/guides/is-hard-water-damage-on-glass-permanent/).' },
      { h: 'Screens, solar screens and repairs in one visit', p: 'Green Valley customers often add [screen replacement](/services/screen-repair/) or [solar screen](/services/solar-screens/green-valley/) washing to the same visit, so it’s all done while the crew is already there.' },
      { h: 'How often', p: `[Three times a year](/guides/how-often-clean-windows-tucson/). ${threeAYear()}` },
    ],
    proof: [49, 14],
    faq: windowFaqs,
  },

  '/areas/green-valley/quail-creek/': {
    title: 'Window Cleaning Quail Creek, Green Valley | Wildcat Washers',
    meta: 'Window, screen and track cleaning for Quail Creek homes, scheduled around your arrival if you winter here. (520) 525-0084.',
    answer:
      'Yes, Wildcat Washers cleans windows in Quail Creek. It’s one of the Green Valley communities we work in most, with customers throughout it. Seasonal owners can have the house done before they arrive, with no need to be home. Every job is quoted per pane by phone.',
    heading: 'Living in Quail Creek',
    sections: [
      { h: 'Away when it’s time? Covered', p: 'We service homes while owners are away, keep payment on file, and charge after the job. Exterior work needs no one there. [Do I need to be home?](/guides/do-i-need-to-be-home-for-window-cleaning/)' },
      { h: 'Golf-course irrigation and your glass', p: 'Where sprinklers reach the windows, mineral-heavy water spots the glass. Adjust the heads, and don’t hose the windows off: [it makes things worse](/guides/should-i-hose-off-my-windows/).' },
      { h: 'Neighbors found us on the street', p: 'Sometimes it starts with a neighbor seeing the truck.', q: { text: 'I saw Jose and his crew across the street in Quail Creek and asked him to come over and check our house for his services.', by: 'Chris P., Quail Creek' } },
    ],
    proof: [74, 36],
    quoted: [38],
    faq: [92, 144, 145, 38, 128],
  },

  '/areas/oro-valley/': {
    title: 'Window Cleaning Oro Valley AZ | Wildcat Washers',
    meta: 'Window, solar panel, solar screen and pressure washing in Oro Valley, from Rancho Vistoso to La Reserve. 14-Day Spotless Guarantee. (520) 525-0084.',
    answer:
      'Wildcat Washers does window washing all over Oro Valley, and it’s one of our strongest markets. We hand-clean the glass, frames, sills, tracks and screens, and remove hard water buildup at no extra charge. We also clean solar panels and install solar screens. Call (520) 525-0084 for a per-pane quote.',
    heading: 'Oro Valley, up close',
    sections: [
      { h: 'Big glass, Pusch Ridge views', p: 'Oro Valley homes are often newer, with large view windows facing the Catalinas, so streaks and spots are easy to see. Homes with smaller windows get the same care. Buildup on the glass comes off; [etching is a different story](/guides/is-hard-water-damage-on-glass-permanent/).' },
      { h: 'High glass without the risk', p: 'For second-story or hard-to-reach panes we use pure deionized water on a water-fed pole, which dries spot-free. We use ladders only where they’re the right tool.' },
      { h: 'New build?', p: 'Builder dust and construction residue come off the glass too, so a first clean on a new home is everyday work for us.' },
    ],
    proof: [99, 97, 102],
    faq: [96, 35, 30, 144, 236],
  },

  '/services/window-cleaning/oro-valley/': {
    title: 'Window Cleaning in Oro Valley AZ | Hand-Cleaned, Guaranteed',
    meta: 'The 5-in-1 Deep Clean for Oro Valley homes. Hard water removal included, per-pane quotes by phone, 14-Day Spotless Guarantee. (520) 525-0084.',
    answer:
      'Oro Valley window cleaning from Wildcat Washers is the full 5-in-1 Deep Clean: glass, frames, sills, tracks and screens, all by hand, with mineral buildup removed at no extra charge. We quote per pane by phone, and if anything isn’t right in the first 14 days, we come back free.',
    heading: 'Pusch Ridge views through clean glass',
    sections: [
      { h: 'Why hand cleaning matters on view glass', p: 'Hand work lets the crew buff off mineral buildup and catch every streak. It’s a professional technique, not a shortcut.' },
      { h: 'Care around your home', p: 'Shoe covers, towels for drips, and furniture put back where it was. Outside, your landscaping gets the same care.' },
      { h: 'Timing for Oro Valley', p: `[Three cleanings a year](/guides/how-often-clean-windows-tucson/): after summer and monsoon, around the holidays, and in spring, when pollen lands on top of the year-round dust. The same schedule works from [Rancho Vistoso](/areas/oro-valley/rancho-vistoso/) to the rest of town.` },
      { h: 'Birds and clean glass', p: 'One Oro Valley customer’s only worry after we left was a new one.', q: { text: 'Now to keep the birds from striking our clean windows.', by: 'Susan R., Oro Valley' } },
    ],
    proof: [110, 108],
    quoted: [112],
    faq: windowFaqs,
  },

  '/areas/marana/': {
    title: 'Marana Window Cleaning | Continental Ranch to Dove Mountain',
    meta: 'Window, solar panel, and pressure washing across Marana, from Continental Ranch and Gladden Farms to Dove Mountain. (520) 525-0084.',
    answer:
      'Wildcat Washers cleans windows across Marana, from Continental Ranch all the way up to Dove Mountain, including Gladden Farms. We hand-clean glass, screens and tracks, clean solar panels, and pressure wash patios and driveways. Quotes are per pane and take a few minutes by phone at (520) 525-0084.',
    heading: 'Marana, up close',
    sections: [
      { h: 'Open desert, more dust', p: 'Homes next to open desert, dirt roads or horse properties collect noticeably more dust on glass and panels. That’s why screens and tracks get cleaned every time: it’s where the dust waits to blow back.' },
      { h: 'Families and retirees alike', p: 'Marana has young families in the newer master plans and retirees in the golf communities, and every home gets the same 5-in-1. Pets are welcome; our crews love animals.' },
      { h: 'Solar in Marana', p: 'Many Marana homes have solar, and [rain won’t clean it](/guides/does-rain-clean-solar-panels/). We take before and after photos on every [solar panel cleaning](/services/solar-panel-cleaning/marana/), so you can see the difference on a roof you can’t see.' },
    ],
    proof: [116, 119, 120],
    faq: [104, 107, 166, 136, 249, 36],
  },

  '/areas/marana/dove-mountain/': {
    title: 'Window Cleaning Dove Mountain, Marana | Wildcat Washers',
    meta: 'From the Villages to custom homes up the hill: window, screen and pool deck cleaning in Dove Mountain. (520) 525-0084.',
    answer:
      'Yes, Wildcat Washers cleans windows throughout Dove Mountain, one of our favorite places to work. From family homes in the Villages to custom homes up the hill, we hand-clean every pane, screen and track. Second-story glass is quoted per pane, with no separate surcharge.',
    heading: 'Working in Dove Mountain',
    sections: [
      { h: 'Big glass, big views', p: 'Dove Mountain’s hillside homes often have large or high panes. We handle those with water-fed poles and deionized water where that works best.' },
      { h: 'The whole master plan', p: 'It runs from the Villages to [Del Webb at Dove Mountain](/areas/marana/del-webb-at-dove-mountain/), [The Highlands at Dove Mountain](/areas/marana/the-highlands-at-dove-mountain/) and [Canyon Pass](/areas/marana/canyon-pass/), and we work across all of it.' },
      { h: 'Patios and pool decks', p: 'We [pressure wash patios and pool decks](/services/pressure-washing/patios-pool-decks/) with minimal chemical use and watch where the water goes.' },
      { h: 'Screens every time', p: 'A clean pane behind a dirty screen gets dirty again within a week, so the screens come out and get cleaned on every visit.' },
    ],
    proof: [121],
    proofAsTown: [121],
    faq: [105, 17, 26, 78, 13],
  },

  '/areas/saddlebrooke/': {
    title: 'Window Cleaning SaddleBrooke AZ | One, Two, The Preserve',
    meta: 'Window, screen and solar cleaning for SaddleBrooke One, SaddleBrooke Two, The Preserve and SaddleBrooke Ranch. (520) 525-0084.',
    answer:
      'Wildcat Washers cleans windows in SaddleBrooke, one of our strongest communities. We have customers in SaddleBrooke One, SaddleBrooke Two, The Preserve and SaddleBrooke Ranch. Every visit hand-cleans the glass, screens and tracks, and our technicians are background checked and trained. Call (520) 525-0084 for a per-pane quote.',
    heading: 'SaddleBrooke, up close',
    sections: [
      { h: 'Clubhouses and common areas', p: 'We clean HOA clubhouses and community facilities on a recurring schedule, not just homes. See [HOA and community work](/who-we-help/hoas-communities/).' },
      { h: 'Letting a crew inside', p: 'A confirmed appointment, a marked truck, an introduction at the door, and shoe covers on before anyone steps in.' },
      { h: 'Irrigation spotting', p: 'Sprinkler overspray on glass leaves mineral deposits, and deposits left long enough etch. Adjust the heads and [skip the hose](/guides/should-i-hose-off-my-windows/).' },
      { h: 'Skylights', p: 'Skylights are counted as extra panes and done in the same visit as the rest of your windows.' },
    ],
    proof: [131, 133, 128],
    faq: [108, 110, 127, 37, 193, 42],
  },

  '/guides/does-rain-clean-solar-panels/': {
    answer:
      'No. Rain moves dust around on solar panels rather than washing it off, and the dust sticks. When the water dries, it can leave mineral spots on the glass. Panels need gentle scrubbing with a soft brush and soap to come clean. Published research puts efficiency losses from debris at 5 to 30 percent.',
    sections: [
      { h: 'Green Valley and Sahuarita panels', p: 'In Green Valley, Sahuarita and the southern metro, nearby mining adds to the dust in the air, so panels there collect more between cleanings. More on [mine dust and solar panels](/guides/mine-dust-solar-panels-green-valley-sahuarita/).' },
      { h: 'Where the 5 to 30 percent comes from', p: 'Published research indicates debris can cut panel efficiency by 5 to 30 percent, depending on conditions. It isn’t our own measurement; the range appeared in our KGVY Spring Home & Life 2026 feature. How much your array loses depends on how dirty it is, which is why we photograph every job.' },
    ],
    proof: [117, 69],
    faq: [54, 65],
  },

  '/guides/should-i-hose-off-my-windows/': {
    answer:
      'No. In Tucson, hosing off windows makes them worse. Our water is mineral-heavy, and when it dries on glass it leaves the minerals behind. Deposits left long enough etch into the glass permanently, and etched glass has to be replaced, not cleaned. Irrigation that keeps hitting the glass causes the same damage.',
    sections: [
      { h: 'And no pressure washer', p: 'Turning up the pressure doesn’t help. It can force water past the seals and damage the frames. Windows are hand work.' },
      { h: 'Spots you can still remove', p: 'Buildup sitting on the glass comes off with 0000-grade steel wool, and that’s included in every clean we do. Etching can’t be fixed. [How to tell them apart](/guides/is-hard-water-damage-on-glass-permanent/).' },
    ],
    faq: [37, 38, 36, 34, 180],
  },

  '/guides/how-often-clean-windows-tucson/': {
    answer:
      'Three times a year. Tucson’s year-round dust and hard water mean buildup never stops, and three cleanings keep windows clear and stop minerals before they etch the glass. The natural timing is right after summer and monsoon season, around the holidays, and in spring. Longer gaps between cleanings leave time for etching to start.',
    sections: [
      { h: 'The three visits in the calendar', p: 'After monsoon season, when the storms leave the heaviest dirt. Around the holidays, when guests arrive and the natural interval comes up. In spring, when pollen lands on top of the dust. Dust and minerals build up all year, so the seasons are extra reasons, not the only ones, and all three visits apply to every home.' },
      { h: 'Seasonal residents', p: 'Schedule around your arrival. Most seasonal owners have us come right when they get back, so the house is clean the day they arrive.' },
      { h: 'Let the Club keep track', p: 'The [Wildcat Club](/wildcat-club/) is three visits a year, scheduled for you with reminders, plus 10 percent off added services. It’s never required: one-time cleans are always available.' },
    ],
    faq: [159, 160, 161, 209, 167],
  },

  '/guides/how-much-does-window-cleaning-cost-tucson/': {
    answer:
      'It depends on how many panes of glass your home has. We price residential window cleaning per pane, meaning each individual piece of glass, not per hour or per window. A quote takes a few minutes by phone at (520) 525-0084, with no site visit and no trip charge, and you pay only when you’re happy.',
    sections: [
      { h: 'Per pane, explained', p: 'One window can have several panes. A slider has more than one panel, a window with an upper and lower sash has a pane in each, and a divided-light French door has a pane for every light. We count them with you on the phone.' },
      { h: 'Two-story homes', p: 'Second-story glass is quoted per pane like everything else. Access can factor into some quotes, but there’s no separate surcharge.' },
      { h: 'Why your neighbor paid less', p: 'Almost always because they have fewer panes. Two homes on the same street can be very different once you count the glass.' },
    ],
    faq: [1, 2, 3, 4, 5, 6, 7, 8, 24],
  },

  '/guides/can-i-clean-my-own-windows/': {
    answer:
      'You can, and if you enjoy it, go for it. It’s harder than it looks in Arizona, though. Glass streaks in the heat, scrapers scratch it if used wrong, and ladders are where people get hurt. If you skip the tracks and screens, the dust comes right back. Whatever you do, don’t just hose them off.',
    sections: [
      { h: 'Use the right grade of steel wool', p: 'Only 0000 steel wool should touch glass. Grades 000, 00 and 0 will scratch it, and scratched glass has to be replaced.' },
      { h: 'What a pro adds', p: 'Streak-free glass in the heat, safe mineral removal, every part of the window, high glass handled safely, the whole house done in a few hours, and the [14-Day Spotless Guarantee](/guarantee/) behind it.' },
    ],
    proof: [48],
    faq: [175, 176, 177, 178, 180],
  },

  '/guides/solar-screens-80-vs-90/': {
    answer:
      'The number is heat and glare, not UV. Phifer SunTex 80 blocks 80 percent of the sun’s heat and glare and about 75 percent of UV, with a more open weave you can see through more easily. SunTex 90 blocks up to 90 percent of heat and glare and about 90 percent of UV, with a tighter weave.',
    sections: [
      { h: 'What the screens are made of', p: 'Both are vinyl-coated polyester, GREENGUARD Gold certified, fade, mildew and pet resistant, and made in the USA. Screens come with a warranty, and we’re glad to go over the terms. See [solar screens](/services/solar-screens/) and [repair and rescreening](/services/solar-screens/repair-rescreening/).' },
      { h: 'Check with your HOA first', p: 'Solar screens are a visible change to the outside of a home. If your community has architectural review, check with it before you order.' },
    ],
    proof: [116, 19, 20],
    faq: [219],
  },

  '/guides/is-hard-water-damage-on-glass-permanent/': {
    answer:
      'It can be. Hard water spots sitting on the glass come off, and we buff them away with 0000-grade steel wool as part of every clean. Minerals left long enough etch into the glass itself, and etched glass can’t be repaired; it has to be replaced. Cleaning on a schedule keeps it from getting there.',
    sections: [
      { h: 'Why only 0000 steel wool', p: 'Coarser grades scratch, and a scratch is just as permanent as etching. We tell you which kind of damage you have before you pay.' },
      { h: 'Where the minerals come from', p: 'Hose rinsing, irrigation and rain drying on the glass. [Should you hose off your windows?](/guides/should-i-hose-off-my-windows/) Keeping to [three cleanings a year](/guides/how-often-clean-windows-tucson/) takes deposits off before they etch.' },
    ],
    faq: [35, 170, 34, 36],
  },

  /* ============================== Round 2 ============================== */
  '/areas/catalina-foothills/': {
    title: 'Window Cleaning Catalina Foothills | Large, High View Glass',
    meta: 'Window, solar screen and solar panel cleaning for Catalina Foothills homes, from Skyline to Sabino Canyon. 14-Day Spotless Guarantee. (520) 525-0084.',
    answer:
      'Wildcat Washers cleans windows across the Catalina Foothills. Large, high view glass is exactly the work we’re known for. We hand-clean glass, frames, sills, tracks and screens, reach high panes with water-fed poles, and clean solar panels and solar screens too. Every home is quoted per pane by phone at (520) 525-0084.',
    heading: 'The Foothills, up close',
    sections: [
      { h: 'Every size of home, the same 5-in-1', p: 'Plenty of Foothills homes have wall-to-wall view glass, and plenty don’t. Every home gets the same 5-in-1 Deep Clean, whatever its size.' },
      { h: 'High glass, inside and out', p: 'Clerestories and high interior panes are a common request. Outside, deionized water on a water-fed pole reaches high glass from the ground and dries spot-free.' },
      { h: 'Everything glass, in one visit', p: 'Shower doors, mirrors, glass doors and skylights are all handled in the same visit, with skylights counted as extra panes.' },
      { h: 'Sprinklers and desert landscaping', p: 'Where irrigation reaches the glass, adjust it and keep to three cleanings a year, so mineral spotting never gets the time to etch.' },
    ],
    proof: [96, 95, 246],
    faq: [100, 43, 44, 165, 38],
  },

  '/services/window-cleaning/catalina-foothills/': {
    title: 'Window Cleaning in Catalina Foothills | Hand-Cleaned 5-in-1',
    meta: 'Hand-cleaned glass, frames, sills, tracks and screens for Foothills homes. Hard water removal included. Per-pane quotes by phone. (520) 525-0084.',
    answer:
      'Catalina Foothills window cleaning from Wildcat Washers is the full 5-in-1 Deep Clean: glass, frames, sills, tracks and screens, all by hand. Mineral buildup is buffed off with 0000-grade steel wool at no extra charge. Second-story glass is quoted per pane, with no separate surcharge, and the 14-Day Spotless Guarantee covers everything.',
    heading: 'Large, high, expensive view glass',
    sections: [
      { h: 'Hand wash or water-fed pole?', p: 'For most glass we hand wash, because being right at the pane is how we catch detail and buff off buildup. The pole is for height. We use whichever gets the window perfect. More on [water-fed pole vs hand washing](/guides/water-fed-pole-vs-hand-washing/) and [two-story windows](/guides/two-story-window-cleaning/).' },
      { h: 'View glass and hard water', p: 'Deposits on big panes show in every sunset. We remove what sits on the glass and tell you honestly if a pane is etched. [Spots vs etching](/guides/is-hard-water-damage-on-glass-permanent/).' },
      { h: 'Tint and low-E', p: 'Tinted glass, low-E coatings and security film are regular work. [Will window cleaning damage tint or low-E?](/guides/will-window-cleaning-damage-tint-or-low-e/)' },
      { h: 'Three times a year', p: threeAYear() },
    ],
    // R247 is Sabino Canyon's proof (round 5), so it isn't repeated here.
    omit: [247],
    faq: windowFaqs,
  },

  '/services/solar-screens/catalina-foothills/': {
    title: 'Solar Screens Catalina Foothills | Custom Phifer SunTex',
    meta: 'Custom-built solar screens for Foothills view windows. SunTex 80 or 90, installed, repaired and rescreened. Warranty included. (520) 525-0084.',
    answer:
      'Wildcat Washers custom measures, builds and installs Phifer SunTex solar screens for Catalina Foothills homes, and repairs and rescreens existing ones. SunTex 80 blocks 80 percent of the sun’s heat and glare, and SunTex 90 blocks up to 90 percent. Start with west-facing windows, then south. A warranty is included.',
    heading: 'Solar screens for Foothills view glass',
    sections: [
      { h: 'Keeping the view', p: 'The view gets slightly darker and a touch less crisp, and most people are surprised how well they can still see out, even through 90 percent mesh. For view glass, SunTex 80 has the more open weave, about 25 percent open against about 10 percent. [80 vs 90](/guides/solar-screens-80-vs-90/) · [Can you see out?](/guides/can-you-see-out-of-solar-screens/)' },
      { h: 'Which windows first', p: 'West, then south, then any window that gets sun. Many people do the whole house for a consistent look. [Which windows need solar screens?](/guides/which-windows-need-solar-screens/)' },
      { h: 'Check with your HOA', p: 'Solar screens are a visible exterior change, and several Foothills HOAs have architectural review. Check with yours before you order.' },
      { h: 'Already have screens?', p: 'We wash solar screens in the same visit as the windows, and we [repair and rescreen](/services/solar-screens/repair-rescreening/) worn ones.' },
    ],
    proof: [246],
    faq: [217, 219, 220, 222],
  },

  '/areas/tanque-verde/': {
    title: 'Window Cleaning Tanque Verde | East Tucson Homes and Acreage',
    meta: 'Window, solar and pressure washing in Tanque Verde, Bear Canyon and Agua Caliente. Long driveways and big glass welcome. (520) 525-0084.',
    answer:
      'Wildcat Washers cleans windows in Tanque Verde and across all of east Tucson, including Bear Canyon and Agua Caliente. Homes on acreage with big glass and long driveways are the work we love. We also clean solar panels and pressure wash patios and pool decks. Call (520) 525-0084 for a quote.',
    heading: 'Tanque Verde, up close',
    sections: [
      { h: 'Open desert, more dust', p: 'Open exposure, dirt roads and horse properties put more dust on glass and panels. Not every Tanque Verde home sits on acreage, and every home gets the same care.' },
      { h: 'Mature trees', p: 'Mesquite drops pollen and debris on glass and panels, and spring pollen lands on top of the year-round dust.' },
      { h: 'Patios and pool decks', p: 'We [pressure wash patios and pool decks](/services/pressure-washing/patios-pool-decks/) with minimal chemical use, and we’re careful where the water goes.' },
      { h: 'High glass', p: 'A water-fed pole with deionized water reaches high glass from the ground and dries spot-free.' },
      { h: 'A record you can check', p: 'Over 1,000 customers served across Greater Tucson, and not a single customer review below five stars.' },
    ],
    // R094 moved to its home page, Vactor Ranch (round 5).
    omit: [94],
    faq: [111, 112, 78, 31, 164, 13],
  },

  '/services/window-cleaning/tanque-verde/': {
    title: 'Window Cleaning in Tanque Verde | Wildcat Washers',
    meta: 'The 5-in-1 Deep Clean for Tanque Verde and east Tucson homes. Hard water removal included, 14-Day Spotless Guarantee. (520) 525-0084.',
    answer:
      'Tanque Verde window cleaning from Wildcat Washers covers every part of the window: glass, frames, sills, tracks and screens, hand-cleaned, with mineral buildup removed at no extra charge. Homes near open desert collect dust faster, so three cleanings a year is the right rhythm. Quotes are per pane by phone.',
    heading: 'Acreage, long drives and desert dust',
    sections: [
      { h: 'Screens every time', p: 'A dirty screen in front of clean glass is how windows get dirty again within a week, and that matters more with desert dust. [Why windows get dirty again so fast](/guides/why-do-windows-get-dirty-again-so-fast/).' },
      { h: 'Mid-century glass', p: 'Angled panes, clerestories and sliders are common in the older east-side neighborhoods. Every pane is cleaned by hand whatever its shape, and very high glass gets the water-fed pole. [Skylights and high windows](/guides/do-you-clean-skylights-and-high-windows/).' },
      { h: 'Out on the property?', p: 'You don’t need to be home for exterior work, and payment can stay on file.' },
      { h: 'Three times a year', p: `${threeAYear()} [Why three?](/guides/how-often-clean-windows-tucson/)` },
    ],
    faq: windowFaqs,
  },

  '/areas/sahuarita/': {
    title: 'Window Cleaning Sahuarita AZ | 2025 AZ-19 Readers’ Pick',
    meta: '2025 AZ-19 Readers’ Pick for Best Window Cleaners. Windows, solar panels, and pressure washing across Sahuarita. (520) 525-0084.',
    answer:
      'Wildcat Washers has customers all over Sahuarita, and readers voted us Best Window Cleaners in Green Valley and Sahuarita in the 2025 AZ-19 Readers’ Pick. We hand-clean windows, screens and tracks, clean solar panels, and pressure wash driveways and patios. Every job is quoted by phone at (520) 525-0084, with no site visit needed.',
    heading: 'Sahuarita, up close',
    sections: [
      { h: 'Southern-metro dust', p: 'Mining nearby adds to the dust in the air here, which is why glass and panels in Sahuarita get dirty faster than in central Tucson. More on [mine dust and solar panels](/guides/mine-dust-solar-panels-green-valley-sahuarita/).' },
      { h: 'Newer stucco homes, grey concrete', p: 'Years of dust and sun turn driveways grey. The original color is usually still underneath, which is why a first [driveway pressure washing](/services/pressure-washing/driveways-garage-floors/) is so dramatic.' },
      { h: 'Families and the 55+ community alike', p: 'Sahuarita is family-oriented with a growing 55+ community, and every home gets the same care. Every technician is trained to the same standard, even when the crew changes.' },
    ],
    proof: [79, 78],
    faq: [94, 129, 82, 8, 55],
  },

  '/services/window-cleaning/sahuarita/': {
    title: 'Window Cleaning in Sahuarita AZ | 5-in-1 Deep Clean',
    meta: 'Glass, frames, sills, tracks and screens hand-cleaned for Sahuarita homes. Inside and out in one visit. (520) 525-0084.',
    answer:
      'Sahuarita window cleaning from Wildcat Washers is the 5-in-1 Deep Clean: glass, frames, sills, tracks and screens, cleaned by hand, with hard water buildup removed at no extra charge. Doing inside and out in one visit is more efficient, and that shows up in your per-pane quote.',
    heading: 'Southern-metro dust on newer homes',
    sections: [
      { h: 'Inside and out, or exterior only', p: 'Both are priced per pane. Most people choose both, since that’s the full 5-in-1. [How pricing works](/guides/how-much-does-window-cleaning-cost-tucson/).' },
      { h: 'Dust that comes back fast', p: 'Southern-metro dust, including mine dust, settles on Sahuarita glass faster than in most of Tucson, and hard water adds spots on top. Next door, see [window cleaning in Green Valley](/services/window-cleaning/green-valley/).' },
      { h: 'Three times a year', p: threeAYear() },
    ],
    // R082 moved to its home page, Rancho Resort (round 5).
    proof: [77],
    omit: [82],
    faq: windowFaqs,
  },

  '/services/solar-panel-cleaning/sahuarita/': {
    title: 'Solar Panel Cleaning in Sahuarita | Mine Dust and Hard Water',
    meta: 'Hand-washed with deionized water, no pressure washing, before-and-after photos on every job. Sahuarita solar panel cleaning. (520) 525-0084.',
    answer:
      'Sahuarita panels collect more dust than most, because nearby mining adds to the airborne dust in the southern metro. Wildcat Washers hand-washes panels with deionized water and a soft brush, with no harsh chemicals and no pressure washing. We take before and after photos on every job so you can see the difference on a roof you can’t see.',
    heading: 'Newer rooftops in the dustiest part of the metro',
    sections: [
      { h: 'White spots after rain', p: 'Rain dries into mineral deposits and makes panels worse, not cleaner. [Does rain clean solar panels?](/guides/does-rain-clean-solar-panels/)' },
      { h: 'How often', p: 'One or two cleanings a year keep panels performing and protect the glass. [How often to clean solar panels](/guides/how-often-clean-solar-panels-tucson/).' },
      { h: 'Warranty-safe methods', p: 'No harsh chemicals and no stiff brushes, which protects the panel surface and your manufacturer warranty. [Mine dust and solar panels](/guides/mine-dust-solar-panels-green-valley-sahuarita/).' },
      { h: 'Birds under the array?', p: 'If pigeons have moved in under your panels, we [pigeon-proof the array](/services/solar-panel-pigeon-proofing/) with no drilling into the roof.' },
    ],
    faq: [51, 54, 57],
  },

  '/areas/sahuarita/rancho-sahuarita/': {
    title: 'Window Cleaning in Rancho Sahuarita | Wildcat Washers',
    meta: 'Window, screen and solar panel cleaning for Rancho Sahuarita homes around the lake. Pet friendly. (520) 525-0084.',
    answer:
      'Yes, Wildcat Washers cleans windows in Rancho Sahuarita, right in the heart of our service area. We hand-clean glass, screens and tracks, clean solar panels, and our crews are careful and kind with pets. Inside and out in one visit saves on your per-pane quote.',
    heading: 'Living in Rancho Sahuarita',
    sections: [
      { h: 'Solar on newer roofs', p: 'One or two cleanings a year keep rooftop panels performing, and [rain won’t do it for you](/guides/does-rain-clean-solar-panels/). See [solar panel cleaning in Sahuarita](/services/solar-panel-cleaning/sahuarita/).' },
      { h: 'Kids, dogs and a crew in the house', p: 'Shoe covers on at the door, a marked truck out front, and crews who are careful and kind with pets.' },
    ],
    proof: [80],
    faq: [95, 8, 53, 249, 54],
  },

  '/guides/best-window-cleaning-company-tucson/': {
    answer:
      'Tucson voted Wildcat Washers Best Window Cleaning in the 2026 Arizona Daily Star Readers’ Choice, a community vote with no judges. We also won the 2025 AZ-19 Readers’ Pick in Green Valley and Sahuarita. We’ve served over 1,000 customers and have over 400 five-star reviews, without a single customer review below five stars.',
    sections: [
      { h: 'What’s behind the reviews', p: 'The whole window, not just the glass. Mineral removal included. You don’t pay until you’re happy, the [14-Day Spotless Guarantee](/guarantee/) covers any touch-up, and phones are answered seven days a week. [Read the reviews](/reviews/) or see [every award](/awards/).' },
      { h: 'Giving back', p: 'Once a year we do a free community cleaning through [Wash It Forward](/wash-it-forward/). The first was every window at the Santa Rita Fire Department in Green Valley.' },
    ],
    faq: [244, 245, 250, 124],
  },

  '/guides/is-solar-panel-cleaning-worth-it/': {
    answer:
      'Often, yes. Dust and mineral buildup block light before it reaches the cell, and published research puts the efficiency loss at 5 to 30 percent depending on conditions. How much you recover depends on how dirty your panels were. That’s why we take before and after photos on every job, so you can see the difference yourself.',
    sections: [
      { h: 'What we won’t promise', p: 'We don’t publish dollar savings or payback periods. The honest numbers are the published research range and the photos from your own roof. [How much output dirty panels lose](/guides/how-much-output-do-dirty-solar-panels-lose/).' },
    ],
    proof: [117],
    faq: [11, 51, 52, 9],
  },

  '/guides/how-often-clean-solar-panels-tucson/': {
    answer:
      'One or two cleanings a year keep solar panels in Tucson performing and protect the glass from mineral damage. Homes near open desert or dirt roads, or in the southern metro where mining adds dust, may see buildup sooner. Rain doesn’t count as a cleaning, and hosing the panels off adds mineral spots.',
    sections: [
      { h: 'Signs it’s time', p: 'Visible dust from the ground, or [white spots after rain](/guides/white-spots-on-solar-panels-after-rain/).' },
      { h: 'Add it to another visit', p: 'Doing panels while we’re already out saves a trip, and [Wildcat Club](/wildcat-club/) members get 10 percent off added services like panel cleaning. [Is solar panel cleaning worth it?](/guides/is-solar-panel-cleaning-worth-it/)' },
    ],
    faq: [53, 55, 66],
  },

  '/guides/how-to-get-pigeons-out-from-under-solar-panels/': {
    answer:
      'Clear them out, clean up, then seal the array. We encourage the birds to leave and fly off, remove all nesting debris and droppings (bagged and hauled away, since droppings are a biohazard), and clip galvanized mesh around the perimeter so they can’t get back in. There’s no drilling into the roof and nothing attached to the panels.',
    sections: [
      { h: 'What’s included', p: 'A full panel cleaning while we’re up there, cleanup of the affected roof area, and a roof and panel inspection with before and after photos. A warranty is included. [Does it affect the roof or warranty?](/guides/does-pigeon-proofing-damage-roof-or-warranty/)' },
      { h: 'Pest control or us?', p: 'Customers have told us we came in at a fraction of what pest control quoted for the same work. [Pigeon proofing vs pest control](/guides/pigeon-proofing-vs-pest-control/).' },
      { h: 'No birds yet?', p: 'It’s the cheapest time to do it, because there’s no cleanup. [Should you pigeon-proof first?](/guides/should-i-pigeon-proof-before-birds-arrive/)' },
      { h: 'Solar panels only', p: 'This service is for solar arrays. We don’t do general bird control or pest control.' },
    ],
    faq: [214, 64, 212, 213, 215, 216],
  },

  '/guides/is-it-safe-to-let-window-cleaners-inside/': {
    answer:
      'It should be, and here’s what that looks like with Wildcat Washers: a confirmed appointment, a marked truck, uniformed technicians who are background checked and trained, an introduction at the door, and shoe covers on before anyone steps inside. Over 1,000 customers have let us in, and not one has rated us below five stars.',
    sections: [
      { h: 'If you’re not home', p: 'Exterior work is fine without you, and payment can stay on file. [Do I need to be home?](/guides/do-i-need-to-be-home-for-window-cleaning/) See [how a visit works](/how-it-works/) from call to walkthrough, and how we work with [senior living communities](/who-we-help/senior-living/).' },
    ],
    proof: [121, 14],
    proofAsTown: [121],
    faq: [127, 128, 136, 129, 130, 249],
  },

  '/guides/is-professional-window-cleaning-worth-it/': {
    answer:
      'In Tucson, it protects the glass, not just the view. Hard water left on a pane long enough etches it permanently, and etched glass has to be replaced, not cleaned. Keeping windows clean costs far less than replacing them, and with Wildcat Washers you don’t pay until you’re happy.',
    sections: [
      { h: 'Window robots?', p: 'They’re fine on flat interior glass, but they can’t handle frames, tracks, screens, mineral buildup or exteriors.' },
      { h: 'Doing it yourself instead', p: 'You can, and [here’s what to watch for](/guides/can-i-clean-my-own-windows/). What a pro adds is streak-free glass in the heat, safe mineral removal and every part of the window, backed by the [14-Day Spotless Guarantee](/guarantee/).' },
    ],
    proof: [6],
    faq: [173, 181, 170, 176],
  },

  /* ============================== Round 3 ============================== */
  '/areas/saddlebrooke/saddlebrooke-one/': {
    title: 'SaddleBrooke One HOA Window Cleaning | Wildcat Washers',
    meta: 'Window, screen and track cleaning for SaddleBrooke One homes, plus clubhouse and common-area service on a schedule. (520) 525-0084.',
    answer:
      'Yes, Wildcat Washers serves SaddleBrooke One, the original HOA on the south side, along with SaddleBrooke Two, The Preserve and SaddleBrooke Ranch. We hand-clean glass, frames, sills, tracks and screens for homeowners. We also clean clubhouses and common areas on a recurring schedule, and HOA group work gets a custom quote.',
    heading: 'For SaddleBrooke One homeowners and the HOA',
    sections: [
      { h: 'For homeowners', p: 'We recommend the 5-in-1 Deep Clean three times a year. [Wildcat Club](/wildcat-club/) members get all three visits scheduled automatically, and one-time cleans are always available. Next door, see [SaddleBrooke Two](/areas/saddlebrooke/saddlebrooke-two/).' },
      { h: 'For the HOA board', p: 'Clubhouses and common areas can go on a recurring schedule, and group work gets its own custom quote. See [HOA and community work](/who-we-help/hoas-communities/).' },
      { h: 'Several services, one visit', p: 'Booking more than one service at once saves a trip, and that shows up in the price. Club members also get 10 percent off added services.' },
      { h: 'Tell a neighbor', p: 'If a neighbor books because of you, our [referral program](/referrals/) thanks you both. Send it through your referral text or email link before their service.' },
    ],
    proof: [124, 130, 125],
    faq: [110, 194, 195, 18, 193],
  },

  '/areas/saddlebrooke/saddlebrooke-two/': {
    title: 'SaddleBrooke Two HOA Window Cleaning | With The Preserve',
    meta: 'Window and screen cleaning across SaddleBrooke Two and The Preserve, plus recurring clubhouse service. (520) 525-0084.',
    answer:
      'Yes, Wildcat Washers cleans windows throughout SaddleBrooke Two, the larger HOA on the north side, including The Preserve. Homeowners get the full 5-in-1 Deep Clean with hard water removal included. For the HOA itself, we clean clubhouses and common areas on a recurring schedule, and group work is custom-quoted.',
    heading: 'For SaddleBrooke Two homeowners and the HOA',
    sections: [
      { h: 'Including The Preserve', p: 'The Preserve, the newest golf neighborhood, is part of SaddleBrooke Two and [has its own page](/areas/saddlebrooke/the-preserve-at-saddlebrooke/).' },
      { h: 'Golf-course irrigation', p: 'Where sprinklers reach the glass, mineral spotting follows, so adjust the heads and keep a schedule. [How to stop sprinklers spotting windows](/guides/how-to-stop-sprinklers-spotting-windows/).' },
      { h: 'For the HOA and property managers', p: 'Recurring clubhouse and common-area service, and multi-property work on one schedule with one point of contact. See [property managers](/who-we-help/property-managers/).' },
      { h: 'Away for part of the year?', p: 'You don’t need to be home. [Here’s how that works](/guides/do-i-need-to-be-home-for-window-cleaning/).' },
    ],
    // R123 moved to its home page, The Preserve (round 5).
    proof: [126, 127],
    omit: [123],
    faq: [110, 193, 194, 195],
  },

  '/areas/marana/continental-ranch/': {
    title: 'Continental Ranch HOA Window Cleaning | Wildcat Washers',
    meta: 'Window, screen and solar panel cleaning for Continental Ranch and Sunflower homes along Silverbell and Cortaro. (520) 525-0084.',
    answer:
      'Yes, Wildcat Washers cleans windows across Continental Ranch, Marana’s largest established HOA along Silverbell and Cortaro, including the Sunflower 55+ section. We hand-clean glass, screens and tracks, clean solar panels, and move furniture ourselves. Neighbors often get different quotes because pane counts differ, even on the same street.',
    heading: 'For Continental Ranch homeowners and the HOA',
    sections: [
      { h: 'Every kind of home', p: 'Continental Ranch runs from starter homes to larger family homes, built through the 90s and 2000s, and every one gets the same 5-in-1.' },
      { h: 'Sunflower at Continental Ranch', p: 'The gated 55+ section with its own clubhouse [has its own page](/areas/marana/sunflower-at-continental-ranch/).' },
      { h: 'HOA and property managers', p: 'Community work gets a custom quote, and multiple properties run on one schedule. See [HOA and community work](/who-we-help/hoas-communities/).' },
    ],
    proof: [117],
    faq: [106, 147, 194, 24, 195],
  },

  '/areas/vail-az/': {
    title: 'Window Cleaning Vail AZ | Rancho del Lago and Rocking K',
    meta: 'Window, solar and pressure washing across Vail AZ and the Rincon Valley, including Del Webb at Rocking K and Rancho del Lago. (520) 525-0084.',
    answer:
      'Yes, Vail AZ is part of Wildcat Washers’ regular coverage, including Del Webb at Rocking K, Rancho del Lago and the surrounding Rincon Valley neighborhoods. We hand-clean windows, screens and tracks, clean solar panels, and pressure wash driveways, even ones that have never been washed. You pay only after the work is done and you’re happy.',
    heading: 'Vail AZ, up close',
    sections: [
      { h: 'New construction and builder dust', p: 'Rocking K and parts of Rancho del Lago are still building. We take builder dust and construction residue off the glass. See [builders and new construction](/who-we-help/builders-new-construction/).' },
      { h: 'Driveways that have never been washed', p: 'We take those on, and it’s usually the most satisfying result. See [driveway pressure washing](/services/pressure-washing/driveways-garage-floors/).' },
      { h: 'A record you can check', p: 'Over 1,000 customers served across Greater Tucson, and not a single customer review below five stars.' },
    ],
    faq: [118, 146, 88, 249, 152],
  },

  '/services/window-cleaning/vail-az/': {
    title: 'Window Cleaning in Vail AZ | 5-in-1 Deep Clean',
    meta: 'Hand-cleaned glass, frames, sills, tracks and screens for Vail AZ homes, new builds included. 14-Day Spotless Guarantee. (520) 525-0084.',
    answer:
      'Window cleaning in Vail AZ from Wildcat Washers is the 5-in-1 Deep Clean: glass, frames, sills, tracks and screens, all by hand, with hard water buildup removed at no extra charge. New homes get builder dust and construction residue taken off the glass. Quotes are per pane by phone.',
    heading: 'Builder dust on new homes',
    sections: [
      { h: 'First clean on a new home', p: 'Builder dust and debris come off the glass, and paint or stucco overspray usually comes off with steel wool or a scraper, though heavy overspray can be stubborn. See [builders and new construction](/who-we-help/builders-new-construction/).' },
      { h: 'Two-story glass', p: 'Quoted per pane with no separate surcharge. [Two-story window cleaning](/guides/two-story-window-cleaning/).' },
      { h: 'Three times a year after that', p: threeAYear() },
    ],
    faq: windowFaqs,
  },

  '/areas/casas-adobes/': {
    title: 'Window Cleaning Casas Adobes | Northwest Tucson',
    meta: 'Window, screen and track cleaning for Casas Adobes homes between Oracle and La Cholla, inside and out. (520) 525-0084.',
    answer:
      'Wildcat Washers cleans windows throughout Casas Adobes, the established northwest area between Oracle and La Cholla. We clean inside and out, including the screens every time, because a dirty screen in front of clean glass is how windows get dirty again within a week. Every job is quoted per pane by phone.',
    heading: 'Casas Adobes, up close',
    sections: [
      { h: 'Mature trees, more pollen', p: 'Mature landscaping drops pollen and debris on glass and screens, and spring pollen lands on top of the year-round dust.' },
      { h: 'Older windows', p: 'Tracks get vacuumed before they’re washed, and sills and frames are hand-cleaned on every job. [Why windows get dirty again so fast](/guides/why-do-windows-get-dirty-again-so-fast/).' },
      { h: 'Why your neighbor’s quote differs', p: 'Pane counts vary, even between two homes on the same street.' },
    ],
    // No borrowed quotes here: no Casas Adobes review on record.
    faq: [113, 28, 26, 147, 24],
  },

  '/services/window-cleaning/casas-adobes/': {
    title: 'Window Cleaning in Casas Adobes | Wildcat Washers',
    meta: 'The 5-in-1 Deep Clean for Casas Adobes homes. Mineral buildup removed at no extra charge. (520) 525-0084.',
    answer:
      'Casas Adobes window cleaning from Wildcat Washers covers every part of the window: glass, frames, sills, tracks and screens, all cleaned by hand. Hard water buildup is buffed off with 0000-grade steel wool at no extra charge, and the 14-Day Spotless Guarantee covers the result.',
    heading: 'Mature landscaping and sprinkler spotting',
    sections: [
      { h: 'Hard water on older glass', p: 'We remove the buildup and tell you honestly if a pane is etched. [Spots vs etching](/guides/is-hard-water-damage-on-glass-permanent/).' },
      { h: 'Screens and repairs', p: 'Torn screens can be replaced in the same visit. See [screen repair](/services/screen-repair/).' },
      { h: 'Three times a year', p: threeAYear() },
    ],
    faq: windowFaqs,
  },

  '/areas/tucson/': {
    title: 'Window Cleaning Tucson | Voted Best Window Cleaning 2026',
    meta: '2026 Arizona Daily Star Readers’ Choice winner. Window, solar panel, solar screen and pressure washing across Greater Tucson. (520) 525-0084.',
    answer:
      'Wildcat Washers covers the entire Greater Tucson metro and surrounding Southern Arizona, with no trip charges anywhere. Readers voted us Best Window Cleaning in the 2026 Arizona Daily Star Readers’ Choice. We clean windows, solar panels, solar screens and more, seven days a week. Our office is in Blenman-Elm in central Tucson. Call (520) 525-0084.',
    heading: 'Tucson, up close',
    sections: [
      { h: 'Why Tucson glass stays dirty', p: 'Dust storms, hard water and more than 300 days of sun, with the heaviest dirt after monsoon season. [Monsoon season and your home](/guides/monsoon-season-home-exterior-guide/).' },
      { h: 'Historic glass', p: '[Sam Hughes](/areas/tucson/sam-hughes/), West University, El Encanto and other historic districts have original divided-light windows. More panes means more detail work, quoted per pane. [Cleaning divided-light windows](/guides/cleaning-divided-light-french-pane-windows/).' },
      { h: 'The whole window', p: 'Frames and sills are hand-cleaned, tracks are vacuumed and then washed, and transom and entryway glass is included.' },
      { h: 'Every town we serve', p: 'Beyond Tucson itself: [Oro Valley](/areas/oro-valley/), [Marana](/areas/marana/), [Catalina Foothills](/areas/catalina-foothills/), [Tanque Verde](/areas/tanque-verde/), [Casas Adobes](/areas/casas-adobes/), [Vail AZ](/areas/vail-az/), [Sahuarita](/areas/sahuarita/), [Green Valley](/areas/green-valley/), [SaddleBrooke](/areas/saddlebrooke/) and [Catalina](/areas/catalina/). See [every area we cover](/areas/) and [our awards](/awards/).' },
    ],
    proof: [84, 91],
    faq: [117, 120, 50, 29, 27, 45],
  },

  '/services/window-cleaning/saddlebrooke/': {
    title: 'Window Cleaning in SaddleBrooke | Hand-Cleaned, Guaranteed',
    meta: 'The 5-in-1 Deep Clean for SaddleBrooke homes: glass, frames, sills, tracks and screens. Skylights too. (520) 525-0084.',
    answer:
      'SaddleBrooke window cleaning from Wildcat Washers is the full 5-in-1 Deep Clean: glass, frames, sills, tracks and screens, cleaned by hand, with hard water removal included. Skylights count as extra panes and are done in the same visit. The 14-Day Spotless Guarantee covers everything we clean.',
    heading: 'Single-story homes with mountain-view glass',
    sections: [
      { h: 'Mountain-view glass', p: 'Sun and irrigation show every spot on big mountain-view glass, so hard water removal matters here. We work across [SaddleBrooke One](/areas/saddlebrooke/saddlebrooke-one/) and [SaddleBrooke Two](/areas/saddlebrooke/saddlebrooke-two/).' },
      { h: 'Letting us in', p: 'A marked truck, uniformed technicians, and shoe covers on before anyone steps inside.' },
      { h: 'Three times a year', p: threeAYear() },
    ],
    proof: [129, 122],
    faq: windowFaqs,
  },

  '/services/window-cleaning/marana/': {
    title: 'Window Cleaning in Marana AZ | 5-in-1 Deep Clean',
    meta: 'Window, screen and track cleaning from Continental Ranch to Dove Mountain. Per-pane quotes by phone. (520) 525-0084.',
    answer:
      'Window cleaning in Marana from Wildcat Washers covers every part of the window: glass, frames, sills, tracks and screens, all by hand, from Continental Ranch up to Dove Mountain. Homes near open desert collect dust faster, so three cleanings a year is the right rhythm. Quotes are per pane by phone.',
    heading: 'From Continental Ranch to Dove Mountain',
    sections: [
      { h: 'Desert-edge dust', p: 'Unpaved roads and open desert put more dust in the air, and it reaches the glass faster. That’s true from [Continental Ranch](/areas/marana/continental-ranch/) to [Dove Mountain](/areas/marana/dove-mountain/).' },
      { h: 'Two-story and high glass', p: 'A water-fed pole with deionized water where it works best. Second-story glass is quoted per pane with no separate surcharge.' },
      { h: 'Solar while we’re there', p: 'Add [solar panel cleaning](/services/solar-panel-cleaning/marana/) to the same visit. Wildcat Club members get 10 percent off added services.' },
    ],
    proof: [118],
    faq: windowFaqs,
  },

  /* ====================== Community depth (uniqueness) ====================== */
  '/areas/tanque-verde/forty-niner-country-club-estates/': {
    answer:
      'Yes, Wildcat Washers cleans windows in Forty Niner Country Club Estates, the golf-course neighborhood on Tanque Verde Road. We hand-clean glass, frames, sills, tracks and screens, with hard water removal included. That matters wherever sprinkler water reaches the glass. Call (520) 525-0084 and we’ll quote your home per pane, right over the phone.',
    heading: 'Golf-course living on Tanque Verde Road',
    sections: [
      { h: 'Put the hose down', p: 'Rinsing windows with a hose feels like it helps, but it makes things worse. Tucson’s water is mineral heavy, and every rinse that dries on the glass leaves more behind. If spray from the yard or the course keeps reaching your windows, adjust it where you can, and have any buildup removed before it etches. [How to stop sprinklers spotting windows](/guides/how-to-stop-sprinklers-spotting-windows/).' },
      { h: 'East-side dust', p: 'Out on the east side toward the Rincons, desert dust settles all year and is heaviest after monsoon storms. We clean the tracks and screens along with the glass, so there’s no dust left to blow back onto clean windows. [Why windows get dirty again so fast](/guides/why-do-windows-get-dirty-again-so-fast/).' },
      { h: 'Patios and pathways too', p: 'We also [pressure wash](/services/pressure-washing/) patios, pool decks and walkways. We watch where we step, where we set equipment and where the water goes, so your landscaping is left the way we found it.' },
    ],
    faq: [165],
  },

  /* ============================== Round 4 ============================== */
  '/areas/green-valley/canoa-ranch/': {
    title: 'Window Cleaning in Canoa Ranch, Green Valley',
    meta: 'Window, screen and track cleaning for Canoa Ranch homes on the south end of Green Valley. Background-checked, uniformed crews. (520) 525-0084.',
    answer:
      'Yes. Canoa Ranch is a regular stop for Wildcat Washers, with customers throughout the community. We hand-clean glass, frames, sills, tracks and screens, with shoe covers on before we step inside. Our technicians wear uniforms and drive marked trucks, so you’ll know it’s us before we knock.',
    heading: 'Living in Canoa Ranch',
    sections: [
      { h: 'Solar on the roof?', p: 'Rooftop panels collect the same dust as your glass, and rain won’t wash it off. Before and after photos come with every [solar panel cleaning in Green Valley](/services/solar-panel-cleaning/green-valley/), so you can see the difference on a roof you can’t see.' },
      { h: 'Away part of the year?', p: 'Tell us your arrival date and the house can be done before you get back, with no need to be home. See how we work with [snowbirds and seasonal residents](/who-we-help/snowbirds-seasonal-residents/). Sprinklers reaching the glass while you’re gone? [Here’s how to stop the spotting](/guides/how-to-stop-sprinklers-spotting-windows/).' },
      { h: 'It started at the door', p: 'One Canoa Ranch customer gave us a chance after we knocked.', q: { text: 'We usually don\'t hire anyone who just comes to the door. However, these young men were so polite and took pride in doing a great job for their customers. They had already washed some of our neighbors windows.', by: 'Peggy W., Canoa Ranch' } },
    ],
    proof: [23, 71],
    quoted: [70],
    faq: [93, 165, 136, 130, 52],
  },

  '/areas/oro-valley/rancho-vistoso/': {
    title: 'Window and Exterior Cleaning in Rancho Vistoso, Oro Valley',
    meta: 'Windows, solar panels, screens and pressure washing across Rancho Vistoso’s villages. Fully insured. (520) 525-0084.',
    answer:
      'Yes. Wildcat Washers handles windows, solar panels, screens and pressure washing throughout Rancho Vistoso, the master plan spanning the north end of Oro Valley. Whichever village you live in, you get the same 5-in-1 Deep Clean. We’re fully insured and will give you a certificate of insurance on request.',
    heading: 'Across the villages of Rancho Vistoso',
    sections: [
      { h: 'The named neighborhoods inside it', p: '[Sun City Oro Valley](/areas/oro-valley/sun-city-oro-valley/), [Stone Canyon](/areas/oro-valley/stone-canyon/) and [Vistoso Village](/areas/oro-valley/vistoso-village/) each have their own page. Every other village gets the same crews and the same visit.' },
      { h: 'Golf-course sprinklers', p: 'Where course or yard irrigation reaches the glass, it dries into mineral spots. Adjust the heads if you can and skip the garden hose. Buildup caught early comes right off. [How to stop sprinklers spotting windows](/guides/how-to-stop-sprinklers-spotting-windows/).' },
      { h: 'Panels and patios too', p: 'We clean rooftop arrays with before and after photos on every [solar panel cleaning in Oro Valley](/services/solar-panel-cleaning/oro-valley/), and we [pressure wash patios and pool decks](/services/pressure-washing/patios-pool-decks/) with minimal chemicals.' },
    ],
    proof: [99],
    faq: [99, 38, 132, 165, 126],
  },

  '/areas/oro-valley/sun-city-oro-valley/': {
    title: 'Window Cleaning in Sun City Oro Valley',
    meta: 'Window cleaning for Sun City Oro Valley homes. You pay only after the walkthrough, once you’re happy. Card on file if you’re away. (520) 525-0084.',
    answer:
      'Yes. Wildcat Washers works in Sun City Oro Valley regularly. You pay only after the work is done and we’ve walked it with you, once you’re happy. If you’re not home, we can keep a card on file and charge after service. Every window gets the full 5-in-1 Deep Clean.',
    heading: 'Sun City Oro Valley, up close',
    sections: [
      { h: 'Part of Rancho Vistoso', p: 'Sun City Oro Valley sits inside [Rancho Vistoso](/areas/oro-valley/rancho-vistoso/), and we work across the whole master plan, [Vistoso Village](/areas/oro-valley/vistoso-village/) included.' },
      { h: 'Hard water, caught early', p: 'Spotting that’s caught early comes right off, and we buff it away on every visit at no extra charge. Left long enough, it etches. [Is hard water damage permanent?](/guides/is-hard-water-damage-on-glass-permanent/)' },
      { h: 'Patios and pool decks', p: 'We [pressure wash patios and pool decks](/services/pressure-washing/patios-pool-decks/) with minimal chemicals, and we’re careful where the water goes.' },
      { h: 'Three visits, or one', p: 'We recommend three cleanings a year, and the [Wildcat Club](/wildcat-club/) schedules them for you. It’s never required: one-time cleans are always available.' },
    ],
    proof: [105],
    faq: [97, 35, 152, 78, 153],
  },

  '/areas/oro-valley/stone-canyon/': {
    title: 'Window Cleaning in Stone Canyon, Oro Valley',
    meta: 'Large, specialized glass in Stone Canyon, cleaned by background-checked technicians. Two-story and high glass handled safely. (520) 525-0084.',
    answer:
      'Yes. Stone Canyon has some of the biggest and most specialized glass in Oro Valley, and it’s the kind of work Wildcat Washers is built for. Every technician is background checked and trained before working at a customer’s home, and two-story glass is handled with proper equipment.',
    heading: 'Big glass in Stone Canyon',
    sections: [
      { h: 'High and hard-to-reach glass', p: 'A water-fed pole with pure deionized water reaches high glass from the ground and dries spot-free. Where a ladder is the right tool, we use one safely. [Two-story window cleaning](/guides/two-story-window-cleaning/) · [Water-fed pole vs hand washing](/guides/water-fed-pole-vs-hand-washing/)' },
      { h: 'White spots on big panes', p: 'Irrigation and rain dry into mineral spots, and large panes show every one. We buff them off on every visit at no extra charge. [What causes white spots on windows](/guides/what-causes-white-spots-on-windows-arizona/)' },
      { h: 'Patios and pool decks', p: 'We [pressure wash patios and pool decks](/services/pressure-washing/patios-pool-decks/) too, quoted per job.' },
    ],
    proof: [100],
    faq: [98, 13, 128, 135, 36],
  },

  '/areas/marana/the-highlands-at-dove-mountain/': {
    title: 'Window Cleaning, The Highlands at Dove Mountain',
    meta: 'Window cleaning for The Highlands at Dove Mountain. Nothing to prepare: we move the furniture and put it back. (520) 525-0084.',
    answer:
      'Yes. Wildcat Washers cleans windows throughout Dove Mountain, including The Highlands, the gated 55+ golf community at its entrance. There’s nothing to prepare: we move furniture and put it back exactly where it was. Look for verifiable reviews, insurance and a marked truck, and we check every box.',
    heading: 'Working in The Highlands',
    sections: [
      { h: 'Sprinklers and white spots', p: 'Where irrigation reaches the glass, mineral-heavy water dries into white spots, and deposits left long enough etch. Adjust the heads if you can, and skip the hose. [What causes white spots on windows](/guides/what-causes-white-spots-on-windows-arizona/)' },
      { h: 'The rest of Dove Mountain', p: 'We work across [Dove Mountain](/areas/marana/dove-mountain/), from [Del Webb at Dove Mountain](/areas/marana/del-webb-at-dove-mountain/) to [Canyon Pass](/areas/marana/canyon-pass/). See all of [Marana](/areas/marana/).' },
    ],
    // No Highlands review on record: R115 is labeled Marana.
    proof: [115],
    faq: [105, 36, 146, 124, 37],
  },

  '/areas/saddlebrooke/saddlebrooke-ranch/': {
    title: 'Window Cleaning in SaddleBrooke Ranch',
    meta: 'Window, screen and track cleaning for SaddleBrooke Ranch homes, including first cleans on new builds. (520) 525-0084.',
    answer:
      'Yes. SaddleBrooke Ranch is a regular stop for Wildcat Washers. New homes are still being built there, and we handle builder dust, debris and construction cleanup on glass. Stubborn paint or stucco overspray usually comes off with steel wool or a scraper. Every visit covers glass, frames, sills, tracks and screens.',
    heading: 'Living in SaddleBrooke Ranch',
    sections: [
      { h: 'Solar screens on the windows?', p: 'We take them off, clean the glass behind them and put them back, and we can wash the screens while they’re off. [Should solar screens come off for window cleaning?](/guides/remove-solar-screens-before-window-cleaning/)' },
      { h: 'Next door in SaddleBrooke', p: 'We work all over [SaddleBrooke](/areas/saddlebrooke/) too. [Window cleaning in SaddleBrooke](/services/window-cleaning/saddlebrooke/) covers skylights, counted as extra panes. Builders and new owners, see [new construction](/who-we-help/builders-new-construction/).' },
    ],
    proof: [134],
    faq: [109, 35, 129, 236, 47],
  },

  '/areas/tucson/sam-hughes/': {
    title: 'Window Cleaning in Sam Hughes, Tucson',
    meta: 'Divided-light and original windows in Sam Hughes, cleaned by hand per pane. Our office is next door in Blenman-Elm. (520) 525-0084.',
    answer:
      'Yes. Sam Hughes is one of Wildcat Washers’ central Tucson neighborhoods, and our office is right next door in Blenman-Elm. Original divided-light windows are welcome work here. Every visit covers the glass, frames, sills, tracks and screens, all cleaned by hand, and your quote is per pane, by phone.',
    heading: 'Historic glass in Sam Hughes',
    sections: [
      { h: 'Every light is a pane', p: 'In a divided-light or French-pane window, each small light is its own pane, and each one is cleaned by hand. [Cleaning divided-light and French-pane windows](/guides/cleaning-divided-light-french-pane-windows/)' },
      { h: 'Skylights', p: 'Counted as extra panes and done in the same visit. [Skylights and high windows](/guides/do-you-clean-skylights-and-high-windows/)' },
    ],
    // No Sam Hughes review on record: R089 is recorded as Central Tucson.
    proof: [89],
    faq: [114, 50, 29, 42],
  },

  '/areas/tucson/rita-ranch/': {
    title: 'Window Cleaning in Rita Ranch and Civano, Tucson',
    meta: 'Inside-and-out window cleaning for Rita Ranch and Civano family homes. Pet friendly, screens every time. (520) 525-0084.',
    answer:
      'Wildcat Washers cleans windows in Rita Ranch and neighboring Civano as part of our southeast Tucson coverage. We recommend inside and out, the full 5-in-1 Deep Clean, and doing both in one visit costs less than two trips. Screens come out and get reconditioned every time, and our crews are great with pets.',
    heading: 'Rita Ranch, up close',
    sections: [
      { h: 'Why the screens matter', p: 'A dirty screen in front of clean glass puts dust right back on it within a week. [Why windows get dirty again so fast](/guides/why-do-windows-get-dirty-again-so-fast/)' },
      { h: 'Nose prints on the slider?', p: 'Inside glass is where pets leave their mark, which is one more reason to do inside and out. [Pet nose prints on sliding glass doors](/guides/pet-nose-prints-on-sliding-glass-doors/)' },
      { h: 'Further southeast', p: 'Our coverage runs on into [Vail AZ](/areas/vail-az/), and across all of [Tucson](/areas/tucson/).' },
    ],
    // No Rita Ranch review on record: R086 is labeled Tucson.
    proof: [86],
    faq: [116, 28, 26, 8, 249],
  },

  '/services/solar-panel-cleaning/green-valley/': {
    title: 'Solar Panel Cleaning in Green Valley AZ',
    meta: 'Green Valley solar panels hand-washed with deionized water, never pressure washed, with before-and-after photos. Mine dust off. (520) 525-0084.',
    answer:
      'Wildcat Washers cleans solar panels in Green Valley, where readers voted us Best Window Cleaners in the 2025 AZ-19 Readers’ Pick. Nearby mining adds to the dust here, and rain won’t wash it off. We hand-wash with deionized water and a soft brush, never a pressure washer, and photograph the panels before and after.',
    heading: 'Mine dust and hard water on southern-metro panels',
    sections: [
      { h: 'Mine dust and hard water', p: 'The dust from nearby mining settles evenly across panels in Green Valley, Sahuarita and the southern metro, and hard water from rain or irrigation dries into mineral spots on top. More on [mine dust and solar panels](/guides/mine-dust-solar-panels-green-valley-sahuarita/), or next door, [solar panel cleaning in Sahuarita](/services/solar-panel-cleaning/sahuarita/).' },
      { h: 'How often', p: 'One or two cleanings a year keep panels performing and protect the glass. If you’re away for the summer while the dust builds, a cleaning timed to your return has the array producing again the week you’re back.' },
      { h: 'Warranty-safe methods', p: 'No harsh chemicals and no stiff brushes, which protects the panel surface and your manufacturer warranty.' },
      { h: 'Birds under the array?', p: 'If pigeons have moved in under your panels, we [pigeon-proof the array](/services/solar-panel-pigeon-proofing/) with no drilling into the roof.' },
      { h: 'Add it to a window visit', p: 'Panels can be done while we’re already there for the windows. [Wildcat Club](/wildcat-club/) members get 10 percent off added services, and one-time cleans are always available.', q: { text: 'They not only did the windows, but also the solar panels at our home in Green Valley.', by: 'Linda A., Green Valley' } },
    ],
    // R069 moved to its home page, Colonia de los Alamos (round 5).
    proof: [43],
    quoted: [32],
    omit: [69],
    faq: [51, 53, 54, 57],
  },

  '/services/solar-panel-cleaning/oro-valley/': {
    title: 'Solar Panel Cleaning in Oro Valley AZ',
    meta: 'Solar panel cleaning in Oro Valley with before-and-after photos on every job. No harsh chemicals, no pressure washing. (520) 525-0084.',
    answer:
      'Wildcat Washers cleans solar panels across Oro Valley, one of our strongest markets. Desert dust, pollen and mineral residue build up constantly, and there’s rarely enough rain to clear it. We hand-wash with deionized water and a soft brush, never a pressure washer, and take before and after photos on every job.',
    heading: 'Dust plus spring pollen',
    sections: [
      { h: 'Pollen on top of the dust', p: 'Spring pollen lands on top of the year-round dust, so an Oro Valley array can look hazy sooner than you’d expect.' },
      { h: 'Rain makes it worse', p: 'Rain moves the film around, then dries into mineral spots on the glass. [Does rain clean solar panels?](/guides/does-rain-clean-solar-panels/)' },
      { h: 'Once or twice a year', p: 'One or two cleanings a year keep most arrays performing, with no harsh chemicals and no stiff brushes to put the panel surface or your warranty at risk. [How often to clean solar panels](/guides/how-often-clean-solar-panels-tucson/)' },
      { h: 'Solar screens too', p: 'We also custom build and install [solar screens in Oro Valley](/services/solar-screens/oro-valley/).' },
    ],
    proof: [108],
    faq: [96, 51, 53, 54, 57],
  },

  '/services/solar-screens/green-valley/': {
    title: 'Solar Screens in Green Valley AZ | Installed and Washed',
    meta: 'Custom-built Phifer SunTex solar screens for Green Valley homes, plus rescreening and screen washing. Warranty included. (520) 525-0084.',
    answer:
      'Wildcat Washers custom measures, builds and installs solar screens for Green Valley homes, and repairs, rescreens and washes existing ones. SunTex 80 blocks 80 percent of the sun’s heat and glare, and SunTex 90 blocks up to 90 percent. Start with west-facing windows, then south. A warranty is included on solar screens.',
    heading: 'Solar screens for Green Valley homes',
    sections: [
      { h: 'Already have screens?', p: 'We take them off, clean the glass behind them, and pressure wash the screens while they’re off. Faded or torn ones can often keep their frames with new mesh. See [repair and rescreening](/services/solar-screens/repair-rescreening/).' },
      { h: 'Colors and daytime privacy', p: 'Black and beige are the most common colors, and beige is usually picked to match stucco. From outside, people can’t see in during the day. [80 or 90?](/guides/solar-screens-80-vs-90/)' },
      { h: 'In an HOA?', p: 'Solar screens are a visible exterior change. If your home is in an HOA with architectural review, check with it before you order. [Which windows need solar screens?](/guides/which-windows-need-solar-screens/)' },
    ],
    proof: [19],
    faq: [217, 219, 220, 222],
  },

  '/services/solar-screens/oro-valley/': {
    title: 'Solar Screens in Oro Valley AZ | Custom Phifer SunTex',
    meta: 'Solar screens custom measured for Oro Valley homes and view windows. SunTex 80 or 90, installed or rescreened. Warranty included. (520) 525-0084.',
    answer:
      'Wildcat Washers installs custom-measured Phifer SunTex solar screens in Oro Valley, and repairs and rescreens existing ones. If a window frames a Pusch Ridge view, SunTex 80 keeps a more open weave (about 25 percent openness) while blocking 80 percent of heat and glare. SunTex 90 blocks up to 90 percent.',
    heading: 'West-facing glass and hot afternoon rooms',
    sections: [
      { h: 'West first', p: 'Afternoon sun hits west-facing glass nearly straight on during the hottest hours, so start there. You can choose the mesh window by window: 80 where the view matters most, 90 where the sun is harshest. [Can you see out of solar screens?](/guides/can-you-see-out-of-solar-screens/)' },
      { h: 'UV and fading', p: 'SunTex 80 blocks about 75 percent of UV and SunTex 90 about 90 percent, which protects furniture and flooring from fading. [80 vs 90](/guides/solar-screens-80-vs-90/)' },
      { h: 'Check your design guidelines', p: 'Solar screens change how the outside of a home looks. If your community has design guidelines or architectural review, check with it before you order.' },
      { h: 'What the mesh is made of', p: 'GREENGUARD Gold certified, with Microban antimicrobial protection, and made in the USA. Worn screens can be [repaired and rescreened](/services/solar-screens/repair-rescreening/).' },
      { h: 'A record you can check', p: 'Over 1,000 customers served, and not a single customer review below five stars.' },
    ],
    faq: [96, 217, 219, 220, 222],
  },

  '/services/pressure-washing/green-valley/': {
    title: 'Pressure Washing in Green Valley AZ | Patios, Arizona Rooms',
    meta: 'Patios, pavers, Arizona rooms and driveways pressure washed in Green Valley. Pressure matched to the surface, landscaping protected. (520) 525-0084.',
    answer:
      'Wildcat Washers pressure washes patios, pavers, Arizona rooms and driveways in Green Valley. We match the pressure to the surface, protect stucco, paint, sills and landscaping, and keep chemical use to a minimum. We don’t soft wash. Where a surface needs it, we scrub a cleaning solution in by hand, then rinse.',
    heading: 'Arizona rooms and patios',
    sections: [
      { h: 'Arizona rooms and screened porches', p: 'We scrub the screens with a brush and cleaning solution, pressure wash from the inside out to flush the dust, then from the outside in with a surface cleaner, and clean the floor. [Arizona room cleaning](/services/pressure-washing/arizona-rooms/)' },
      { h: 'Patios, pavers and driveways', p: 'Done in the same visit: [patios and pool decks](/services/pressure-washing/patios-pool-decks/), walkways and [driveways](/services/pressure-washing/driveways-garage-floors/). We clean; we don’t seal or stain.' },
      { h: 'How often', p: 'For most driveways, a couple of times a year at minimum keeps buildup from getting ahead of you. Patios and Arizona rooms go on whatever schedule the property needs. [How often to pressure wash a driveway](/guides/how-often-pressure-wash-driveway-arizona/)' },
      { h: 'Add it to a window visit', p: 'Several services in one visit saves a trip, and that shows up in the price. [Wildcat Club](/wildcat-club/) members also get 10 percent off added services.' },
    ],
    proof: [65, 14],
    faq: [71, 72, 79, 81],
  },

  '/guides/why-do-windows-look-worse-after-i-clean-them/': {
    answer:
      'Usually for two reasons. The cleaning solution dried in the Arizona heat before it could be squeegeed off, leaving streaks and haze. And the frames, sills, tracks and screens stayed dirty, so the next breeze blew their dust right back onto the clean glass. That’s why a professional clean covers every part of the window.',
    sections: [
      { h: 'If you’re doing it yourself', p: 'Getting glass truly streak-free in Arizona heat takes skill and speed, and the tracks and screens need cleaning too, or the dust comes right back. [Can I clean my own windows?](/guides/can-i-clean-my-own-windows/) · [Why do my windows streak?](/guides/why-do-my-windows-streak/)' },
      { h: 'In Green Valley or Sahuarita?', p: 'Dust comes back faster there, because nearby mining adds to what’s in the air, so the screens and tracks matter even more. See [window cleaning in Green Valley](/services/window-cleaning/green-valley/).', q: { text: 'The whole house is brighter and lighter, and my wife and I were spared the onerous task of doing it ourselves', by: 'Peter C., Green Valley' } },
    ],
    faq: [33, 177, 178],
  },

  '/guides/what-causes-white-spots-on-windows-arizona/': {
    answer:
      'Hard water. Tucson’s water carries a lot of minerals, and when a drop dries on glass, the water evaporates and the minerals stay. Sprinklers, rain and above all rinsing windows with a hose leave them behind. Caught early, the spots buff right off. Left long enough, they etch into the glass for good.',
    sections: [
      { h: 'Only 0000 steel wool', p: 'Buildup comes off with 0000-grade steel wool, and we include it in every clean. Coarser grades scratch the glass, and a scratch is as permanent as etching. [Spots vs etching](/guides/is-hard-water-damage-on-glass-permanent/)' },
      { h: 'How often to clean', p: 'For windows, we recommend three cleanings a year: right after summer and monsoon season, around the holidays, and in spring. That takes deposits off before they etch. One-time cleans are always available too. [How often to clean windows in Tucson](/guides/how-often-clean-windows-tucson/)' },
    ],
    faq: [36, 34, 35, 37, 55],
  },

  /* ============================== Round 5 ============================== */
  '/areas/catalina-foothills/sabino-canyon/': {
    title: 'Window Cleaning near Sabino Canyon, Tucson',
    meta: 'Window cleaning and solar screens for homes around Sabino Canyon Road. Part of our regular Foothills coverage. (520) 525-0084.',
    answer:
      'We do. The Sabino Canyon area is part of Wildcat Washers’ regular Catalina Foothills coverage. We hand-clean glass, frames, sills, tracks and screens, and skylights count as extra panes done in the same visit. We also clean and install solar screens, starting with the west-facing windows that get the afternoon sun.',
    heading: 'Around Sabino Canyon Road',
    sections: [
      { h: 'Foothills on one side, Tanque Verde on the other', p: 'We work all over the [Catalina Foothills](/areas/catalina-foothills/), from [Ventana Canyon](/areas/catalina-foothills/ventana-canyon/) to [Skyline Country Club](/areas/catalina-foothills/skyline-country-club/), and east across [Tanque Verde](/areas/tanque-verde/), including [Vactor Ranch](/areas/tanque-verde/vactor-ranch/).' },
      { h: 'Solar screens, new or washed', p: 'We custom build and install [solar screens for Foothills homes](/services/solar-screens/catalina-foothills/), and wash existing ones while we’re there for the windows. Not sure where to start? [Which windows need solar screens?](/guides/which-windows-need-solar-screens/)' },
      { h: 'Skylights and high glass', p: 'Skylights, clerestories and high panes are part of the same visit, not a second trip. [Do you clean skylights and high windows?](/guides/do-you-clean-skylights-and-high-windows/)' },
    ],
    // No Sabino Canyon review on record: R247 is labeled with its Nextdoor area.
    proof: [247],
    faq: [102, 46, 222, 220, 42],
  },

  '/areas/catalina-foothills/ventana-canyon/': {
    title: 'Window Cleaning in Ventana Canyon, Catalina Foothills',
    meta: 'Window cleaning for Ventana Canyon homes and villas: high interior glass, shower doors and mirrors in the same visit. (520) 525-0084.',
    answer:
      'Yes. Ventana Canyon is one of the Catalina Foothills communities Wildcat Washers serves, from luxury homes to villas. High interior windows and clerestories are a common request, and shower glass, mirrors and glass doors are handled in the same visit. Inside and out is the full 5-in-1 Deep Clean.',
    heading: 'Ventana Canyon, up close',
    sections: [
      { h: 'Homes and villas alike', p: 'A villa gets the same 5-in-1 as a luxury home: every pane by hand, with hard water removal included. See [window cleaning in the Catalina Foothills](/services/window-cleaning/catalina-foothills/).' },
      { h: 'Golf-lot glass', p: 'Course and yard sprinklers are the usual source of white spots on golf-lot glass. Adjust the heads where you can, and skip the hose. [How to stop sprinklers spotting windows](/guides/how-to-stop-sprinklers-spotting-windows/)' },
      { h: 'High glass inside', p: 'Clerestories and tall interior panes are the glass most people don’t want to be on a ladder for. [Skylights and high windows](/guides/do-you-clean-skylights-and-high-windows/)' },
      { h: 'A record you can check', p: 'Over 1,000 customers served, and not a single customer review below five stars. Elsewhere in the Foothills, see [La Paloma](/areas/catalina-foothills/la-paloma/), [Sabino Canyon](/areas/catalina-foothills/sabino-canyon/) and all of the [Catalina Foothills](/areas/catalina-foothills/).' },
    ],
    // No Ventana Canyon review on record, and R095 already shows on the Foothills page.
    faq: [101, 37, 43, 6, 44],
  },

  '/areas/catalina-foothills/la-paloma/': {
    title: 'Window Cleaning in La Paloma, Catalina Foothills',
    meta: 'Window cleaning for La Paloma view homes and townhomes. Solar screens removed and cleaned around. Per-pane quotes by phone. (520) 525-0084.',
    answer:
      'Wildcat Washers cleans windows in La Paloma, the golf and resort community around the Westin La Paloma, for view homes and townhomes alike. Solar screens come off, we clean the glass behind them, and they go back on. Quotes are per pane, and we’ll count them with you by phone in a couple of minutes.',
    heading: 'La Paloma, up close',
    sections: [
      { h: 'High glass, from the ground', p: 'Foothills glass is often large and high. For most panes we hand wash, because being right at the glass is how we catch every detail. High panes get pure deionized water on a water-fed pole, and a ladder only where that’s the right tool. [Two-story window cleaning](/guides/two-story-window-cleaning/).' },
      { h: 'Golf-course irrigation', p: 'Where course or yard sprinklers reach the glass, mineral spotting follows, and left long enough it etches. A regular schedule keeps it off. [How to stop sprinklers spotting windows](/guides/how-to-stop-sprinklers-spotting-windows/).' },
      { h: 'New solar screens or a rescreen', p: 'Screens that are faded or torn can be rebuilt, and new ones are custom built for your windows. See [solar screens in the Catalina Foothills](/services/solar-screens/catalina-foothills/) and [should solar screens come off for window cleaning?](/guides/remove-solar-screens-before-window-cleaning/)' },
      { h: 'A record you can check', p: 'Over 1,000 customers served, and not a single customer review below five stars. We work all over the [Catalina Foothills](/areas/catalina-foothills/), [Ventana Canyon](/areas/catalina-foothills/ventana-canyon/) included.' },
    ],
    // No La Paloma review on record, so no borrowed Foothills quote here.
    faq: [38, 30, 5, 47],
  },

  '/areas/vail-az/del-webb-at-rocking-k/': {
    title: 'Window Cleaning in Del Webb at Rocking K, Vail AZ',
    meta: 'First cleans for new Del Webb at Rocking K homes, then reminders when windows are due. Senior discount available. (520) 525-0084.',
    answer:
      'Wildcat Washers cleans windows in Del Webb at Rocking K, the new-construction 55+ community east of Vail AZ. New homes get builder dust and construction residue taken off the glass. After that, we remind you when your windows are due, and seniors get a discount when they mention it on the call.',
    heading: 'Del Webb at Rocking K, up close',
    sections: [
      { h: 'After the move-in clean', p: 'We recommend three cleanings a year for windows: after summer and monsoon season, around the holidays, and in spring. The [Wildcat Club](/wildcat-club/) can schedule them, and one-time cleans are always available. See [builders and new construction](/who-we-help/builders-new-construction/) and [window cleaning in Vail AZ](/services/window-cleaning/vail-az/).' },
      { h: 'New driveways turn grey too', p: 'Dust, sun and traffic settle on new concrete fast. We [pressure wash driveways](/services/pressure-washing/driveways-garage-floors/) in the same visit as the windows.' },
      { h: 'A record you can check', p: 'Over 1,000 customers served across Greater Tucson, and not a single customer review below five stars. See all of [Vail AZ](/areas/vail-az/).' },
    ],
    faq: [19, 156, 82, 127],
  },

  '/areas/green-valley/legends/': {
    title: 'Window Cleaning for Legends Residents, Green Valley',
    meta: 'Window, screen and track cleaning for homes in Legends, Green Valley, with shoe covers on inside. HOA clubhouse service too. (520) 525-0084.',
    answer:
      'Wildcat Washers cleans windows, screens and tracks for homes in Legends, the Green Valley neighborhood associated with Torres Blancas golf. Shoe covers go on before we step inside. For the HOA, we clean clubhouses and common areas on a recurring schedule.',
    heading: 'Legends, up close',
    sections: [
      { h: 'Screens and tracks, every time', p: 'Every window job is the full 5-in-1, so screens come out and tracks are vacuumed and washed along with the glass. See [window cleaning in Green Valley](/services/window-cleaning/green-valley/).', q: { text: 'The screens and windows look amazing too (even the window tracks are super clean).', by: 'Linda B., Legends' } },
      { h: 'Golf irrigation', p: 'If sprinklers keep reaching your glass, adjust the heads and keep a regular schedule. [How to stop sprinklers spotting windows](/guides/how-to-stop-sprinklers-spotting-windows/)' },
      { h: 'Panels while we’re there', p: 'Rooftop solar collects the same dust as your glass. Add [solar panel cleaning in Green Valley](/services/solar-panel-cleaning/green-valley/) to the window visit. Elsewhere nearby, see [Las Campanas](/areas/green-valley/las-campanas/).' },
      { h: 'Another Legends review', p: 'In the customer’s own words.', q: { text: 'I had my windows washed today by Wildcat Washers and they did a fantastic job.', by: 'Anne D., Legends' } },
    ],
    // R064's blinds sentences and R075's college lines stay out: excerpts only.
    quoted: [64, 75],
    faq: [165, 65, 18, 35, 193],
  },

  '/areas/green-valley/springs-at-canoa/': {
    title: 'Window Cleaning for Springs at Canoa Residents',
    meta: 'Window cleaning and solar panel care for Springs at Canoa homes in Green Valley. HOA common areas on a schedule. (520) 525-0084.',
    answer:
      'Wildcat Washers cleans windows for Springs at Canoa homes in Green Valley, and our customers here use the name. We hand-clean glass, frames, sills, tracks and screens, and clean solar panels too. For the HOA, we clean clubhouses and common areas on a recurring schedule.',
    heading: 'Springs at Canoa, up close',
    sections: [
      { h: 'Solar panels too', p: 'Rain dries into white mineral spots on panel glass, and we photograph every array before and after. See [solar panel cleaning in Green Valley](/services/solar-panel-cleaning/green-valley/) and [white spots on solar panels after rain](/guides/white-spots-on-solar-panels-after-rain/).' },
      { h: 'Across Green Valley', p: 'Green Valley is one of our home markets, and our trucks are there most weeks. See all of [Green Valley](/areas/green-valley/), including [Canoa Ranch](/areas/green-valley/canoa-ranch/).' },
    ],
    proof: [61],
    faq: [55, 52, 193],
  },

  '/areas/green-valley/links-at-santa-rita-springs/': {
    title: 'Window Cleaning, The Links at Santa Rita Springs',
    meta: 'Window and solar panel cleaning for The Links at Santa Rita Springs in Green Valley, plus HOA and property-manager service. (520) 525-0084.',
    answer:
      'Wildcat Washers cleans windows and solar panels for homes in The Links at Santa Rita Springs, a Green Valley neighborhood whose customers use the name. For the HOA and property managers, we run multiple properties on one schedule with one point of contact, and community work gets a custom quote.',
    heading: 'The Links, up close',
    sections: [
      { h: 'Windows and panels together', p: 'One visit saves a trip, and one or two panel cleanings a year keep an array performing. See [solar panel cleaning in Green Valley](/services/solar-panel-cleaning/green-valley/) and [does rain clean solar panels?](/guides/does-rain-clean-solar-panels/)', q: { text: 'We are very appreciated of the solar panels and window washing they did for us. We highly recommend them. They are a delight', by: 'Peg H., The Links at Santa Rita Springs' } },
      { h: 'Board or manager?', p: 'The answers for boards and managers are just below. See [HOA and community work](/who-we-help/hoas-communities/) and [property managers](/who-we-help/property-managers/), or all of [Green Valley](/areas/green-valley/).' },
    ],
    // R073's "college students" opening stays out: excerpt only. R069 lives on Colonia de los Alamos.
    quoted: [73],
    omit: [69],
    faq: [53, 194, 54, 195, 193],
  },

  '/areas/green-valley/colonia-de-los-alamos/': {
    title: 'Window Cleaning for Colonia de los Alamos Residents',
    meta: 'Solar panel and window cleaning for Colonia de los Alamos homes in Green Valley, where mine dust builds up fast. (520) 525-0084.',
    answer:
      'Wildcat Washers cleans windows and solar panels for Colonia de los Alamos homes in Green Valley. One customer here said the water ran brown off their panels. Southern Arizona is one of the dustiest places anywhere, mining adds to it here, and panels can go months without real rain to rinse them.',
    heading: 'Colonia de los Alamos, up close',
    sections: [
      { h: 'After the rain', p: 'Rain on dusty panels dries into white mineral spots, so a wet week can leave an array looking worse. [White spots on solar panels after rain](/guides/white-spots-on-solar-panels-after-rain/) · [Mine dust and solar panels](/guides/mine-dust-solar-panels-green-valley-sahuarita/)' },
      { h: 'Windows in the same visit', p: 'Panels and windows done together saves a trip. See [solar panel cleaning in Green Valley](/services/solar-panel-cleaning/green-valley/), [window cleaning in Green Valley](/services/window-cleaning/green-valley/) and all of [Green Valley](/areas/green-valley/).' },
    ],
    proof: [69],
    faq: [65, 18, 55, 193],
  },

  '/areas/green-valley/las-campanas/': {
    title: 'Window Cleaning for Las Campanas Residents',
    meta: 'Window cleaning for Las Campanas, the gated 55+ GVR neighborhood on Green Valley’s west side. No need to be home. (520) 525-0084.',
    answer:
      'Wildcat Washers cleans windows in Las Campanas, the gated 55+ GVR neighborhood on Green Valley’s west side. Every visit is the full 5-in-1 Deep Clean, with hard water removal included. Our technicians wear uniforms and drive marked trucks, so you’ll know it’s us before we knock, whether or not you’re home.',
    heading: 'Las Campanas, up close',
    sections: [
      { h: 'Arriving for the season?', p: 'Tell us your arrival date and we’ll schedule around it, so the house is ready when you get back. See how we work with [snowbirds and seasonal residents](/who-we-help/snowbirds-seasonal-residents/) and [do I need to be home?](/guides/do-i-need-to-be-home-for-window-cleaning/)' },
      { h: 'Solar on the roof?', p: 'Panels can be cleaned in the same visit as the windows, with before and after photos. See [solar panel cleaning in Green Valley](/services/solar-panel-cleaning/green-valley/).' },
      { h: 'Across Green Valley', p: 'Readers voted us Best Window Cleaners in Green Valley and Sahuarita in the 2025 AZ-19 Readers’ Pick. See all of [Green Valley](/areas/green-valley/), including [Legends](/areas/green-valley/legends/).' },
    ],
    // No Las Campanas review on record: R044 is labeled Green Valley.
    proof: [44],
    faq: [144, 130, 52, 193],
  },

  '/areas/sahuarita/rancho-resort/': {
    title: 'Window Cleaning for Rancho Resort Residents, Sahuarita',
    meta: 'Inside-and-out window cleaning for Rancho Resort, a small gated 55+ neighborhood in Sahuarita. Floors protected. (520) 525-0084.',
    answer:
      'Wildcat Washers cleans windows inside and out for Rancho Resort, the small gated 55+ neighborhood in Sahuarita. Shoe covers go on before we come in, towels catch any drips, and furniture goes back exactly where it was. We also clean solar screens and solar panels, usually in the same visit.',
    heading: 'Rancho Resort, up close',
    sections: [
      { h: 'Inside and out', p: 'A Rancho Resort customer, after an inside-and-out clean. [Is it safe to let window cleaners inside?](/guides/is-it-safe-to-let-window-cleaners-inside/)', q: { text: 'We had our windows cleaned today both inside and out. Wildcat Washers were very professional, polite, and thorough.', by: 'Shelley B., Rancho Resort' } },
      { h: 'Solar screens and panels', p: 'Solar screens are washed while they’re off the windows, and rooftop panels need one or two cleanings a year. See [solar panel cleaning in Sahuarita](/services/solar-panel-cleaning/sahuarita/), [window cleaning in Sahuarita](/services/window-cleaning/sahuarita/) and [Sonora at Rancho Sahuarita](/areas/sahuarita/sonora-at-rancho-sahuarita/).' },
    ],
    // R082's college sentence stays out: excerpt only.
    quoted: [82],
    faq: [136, 124, 53, 46, 193],
  },

  '/areas/sahuarita/sonora-at-rancho-sahuarita/': {
    title: 'Window Cleaning, Sonora at Rancho Sahuarita',
    meta: 'Window and solar panel cleaning for Sonora at Rancho Sahuarita, the Del Webb 55+ section. Clubhouse service too. (520) 525-0084.',
    answer:
      'Wildcat Washers cleans windows and solar panels in Sonora at Rancho Sahuarita, the Del Webb 55+ section with its own clubhouse. There’s nothing to prepare, because we handle everything, including moving furniture. For the community, we clean clubhouses and common areas on a recurring schedule.',
    heading: 'Life in Sonora, south on I-19',
    sections: [
      { h: 'Mine dust on glass and panels', p: 'Rain doesn’t wash southern-metro dust off panels. It moves it around and then dries into mineral spots. One or two cleanings a year keep rooftop panels performing. See [solar panel cleaning in Sahuarita](/services/solar-panel-cleaning/sahuarita/) and [mine dust and solar panels](/guides/mine-dust-solar-panels-green-valley-sahuarita/).' },
      { h: 'Away for part of the year?', p: 'We clean for seasonal residents and out-of-state owners all the time, and you don’t need to be in town. See how we work with [snowbirds and seasonal residents](/who-we-help/snowbirds-seasonal-residents/).' },
      { h: 'Around Sahuarita', p: 'Readers voted us Best Window Cleaners in Green Valley and Sahuarita in the 2025 AZ-19 Readers’ Pick. See all of [Sahuarita](/areas/sahuarita/), including [Rancho Sahuarita](/areas/sahuarita/rancho-sahuarita/) and [Rancho Resort](/areas/sahuarita/rancho-resort/).' },
    ],
    // No Sonora review on record: R081 is labeled Sahuarita.
    proof: [81],
    // R082 (Rancho Resort) quotes a college line; it lives on its home page as an excerpt.
    omit: [82],
    faq: [129, 54, 146, 65, 193, 53],
  },

  '/areas/tanque-verde/vactor-ranch/': {
    title: 'Window Cleaning for Vactor Ranch Residents',
    meta: 'Window cleaning for Vactor Ranch custom homes near Sabino Canyon Road. Tint and low-E glass handled safely. (520) 525-0084.',
    answer:
      'Wildcat Washers cleans windows for Vactor Ranch, the gated custom-home community near Sabino Canyon Road. We check for tint, film and coatings before anything touches the glass, reach high panes with deionized water on a water-fed pole, and arrive in uniform in a marked truck.',
    heading: 'Vactor Ranch, up close',
    sections: [
      { h: 'Custom homes, custom glass', p: 'Tinted glass, low-E coatings and security film are regular work, and no type of glass is off limits. [Will window cleaning damage tint or low-E?](/guides/will-window-cleaning-damage-tint-or-low-e/)' },
      { h: 'Hand wash first, pole for height', p: 'Most glass is hand washed, because being right at the pane is how we catch every detail. The pole is for the panes you can’t reach. [Water-fed pole vs hand washing](/guides/water-fed-pole-vs-hand-washing/)' },
      { h: 'Nearby', p: 'We work all over [Tanque Verde](/areas/tanque-verde/) and the [Sabino Canyon](/areas/catalina-foothills/sabino-canyon/) area.' },
    ],
    // R094 is recorded against Vactor Ranch, but its text ends "(Tucson)": labeled Tanque Verde.
    proof: [94],
    proofAsTown: [94],
    faq: [130, 31, 124, 48, 193],
  },

  '/areas/marana/sunflower-at-continental-ranch/': {
    title: 'Window Cleaning for Sunflower at Continental Ranch',
    meta: 'Window cleaning for Sunflower, the gated 55+ section of Continental Ranch. Pay after the walkthrough, fully insured. (520) 525-0084.',
    answer:
      'We do. Sunflower is one of the Continental Ranch communities Wildcat Washers serves regularly. You pay only after the work is done and we’ve walked it with you, and we can keep a card on file if you’re away. We’re fully insured and will provide a certificate of insurance on request.',
    heading: 'Sunflower, up close',
    sections: [
      { h: 'Part of Continental Ranch', p: 'We work across [Continental Ranch](/areas/marana/continental-ranch/) and all of [Marana](/areas/marana/), and every window job is the same 5-in-1.' },
      { h: 'You see it before you pay', p: 'The walkthrough comes first, and the bill comes after. [When do I pay for window cleaning?](/guides/when-do-i-pay-for-window-cleaning/)' },
      { h: 'A record you can check', p: 'Over 1,000 customers served, and not a single customer review below five stars.' },
    ],
    faq: [106, 152, 132, 153, 126, 193],
  },

  '/areas/catalina-foothills/skyline-country-club/': {
    title: 'Window Cleaning for Skyline Country Club Residents',
    meta: 'Window cleaning for Skyline Country Club custom homes on Skyline Drive. Two-story and coated glass, fully insured. (520) 525-0084.',
    answer:
      'Yes. Skyline Country Club is in the Catalina Foothills, which Wildcat Washers covers fully. For these custom homes on Skyline Drive, second-story glass is quoted per pane like everything else, and we identify security film and low-E coatings before we start. We’re fully insured and provide a certificate on request.',
    heading: 'Skyline Country Club, up close',
    sections: [
      { h: 'Two-story glass', p: 'Second-story panes are everyday work for us. [Two-story window cleaning](/guides/two-story-window-cleaning/)' },
      { h: 'Insurance, in writing', p: 'Ask for our certificate of insurance before we start. [Are window cleaners licensed and insured?](/guides/are-window-cleaners-licensed-and-insured-arizona/)' },
      { h: 'A record you can check', p: 'Over 1,000 customers served, and not a single customer review below five stars. Nearby, see [Sin Vacas](/areas/catalina-foothills/sin-vacas/) and all of the [Catalina Foothills](/areas/catalina-foothills/).' },
    ],
    faq: [103, 132, 49, 126, 3, 193],
  },

  '/areas/saddlebrooke/the-preserve-at-saddlebrooke/': {
    title: 'Window Cleaning, The Preserve at SaddleBrooke',
    meta: 'Window cleaning for The Preserve, the newest golf neighborhood in SaddleBrooke Two. Patios and pool decks too. (520) 525-0084.',
    answer:
      'Wildcat Washers cleans windows in The Preserve, the newest golf neighborhood within SaddleBrooke Two, as part of our SaddleBrooke coverage. We also pressure wash patios and pool decks with minimal chemical use, and booking several services in one visit costs less than separate trips.',
    heading: 'The Preserve, up close',
    sections: [
      { h: 'Inside SaddleBrooke Two', p: 'We work across [SaddleBrooke Two](/areas/saddlebrooke/saddlebrooke-two/) and all of [SaddleBrooke](/areas/saddlebrooke/). See [window cleaning in SaddleBrooke](/services/window-cleaning/saddlebrooke/).' },
      { h: 'Patios and pool decks', p: 'We [pressure wash patios and pool decks](/services/pressure-washing/patios-pool-decks/), quoted per job, and we’re careful where the water goes.' },
    ],
    proof: [123],
    faq: [110, 78, 18, 13, 193],
  },
};

export const depthFor = (url: string): Depth | undefined => depth[url];

/** A plan's FAQ list plus the depth list, in order, skipping repeats and withheld answers. */
const shownN = new Set(faqs.map((f) => f.n));
const byN = new Map(faqs.map((f) => [f.n, f]));
export function withDepthFaqs(base: Faq[], d?: Depth): Faq[] {
  if (!d?.faq) return base;
  const have = new Set(base.map((f) => f.n));
  return [...base, ...d.faq.filter((n) => shownN.has(n) && !have.has(n)).map((n) => byN.get(n)!)];
}

/** Reviews a page's review block must skip: quoted in its copy, or moved to their home page. */
export const keptOut = (d?: Depth): number[] => [...(d?.quoted ?? []), ...(d?.omit ?? [])];

/** Proof reviews in order, skipping withheld ones; R121-style town labels applied. */
export function proofReviews(d?: Depth): Review[] {
  if (!d?.proof) return [];
  return d.proof
    .map((n) => review(n))
    .filter((r): r is Review => Boolean(r))
    .map((r) => (d.proofAsTown?.includes(r.n) ? { ...r, detail: '' } : r));
}

