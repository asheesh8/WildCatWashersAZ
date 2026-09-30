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
  /** Landing pages (round 6): the page's link row, in order, in place of the landing's related list. */
  related?: string[];
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
      'It should be, when the company earns it. With Wildcat Washers that means a confirmed appointment, a marked truck, uniformed technicians who are background checked and trained, an introduction at the door, and shoe covers on before anyone steps inside. Over 1,000 customers have let us in, and not one has rated us below five stars.',
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

  /* ============================== Round 6: who we help and commercial ============================== */
  '/who-we-help/real-estate-agents/': {
    title: 'Window Cleaning for Real Estate Agents | Listing Prep',
    meta: 'Listing prep and pre-sale window cleaning for Tucson real estate agents: glass, screens and tracks ready for photos and showings. (520) 525-0084.',
    // CONFIRM WITH COOPER before launch: agent rebooking claim
    // (the sentence below is F237's own wording; it stays out of the title and meta).
    answer:
      'Yes, Wildcat Washers works with real estate agents, mostly on listing prep and pre-sale cleaning. Clean windows make a home look well kept, in person and in listing photos. And every real estate agent who’s hired us once has kept using us. We won’t claim a number for how much faster a home sells.',
    sections: [
      { h: 'Before the photographer', p: 'Glass, frames, sills, tracks and screens all show in listing photos and at showings, so every window gets the full [5-in-1 Deep Clean](/services/window-cleaning/): cleaned by hand, tracks vacuumed out, screens reconditioned, and every pane double checked before we walk the job. [Getting your home ready to sell](/guides/getting-your-home-ready-to-sell/) covers the rest.' },
      { h: 'Vacant listings', p: 'You don’t need to be there, and neither do your sellers. Plenty of our customers aren’t home, especially for exterior work. We keep payment on file and charge after the job.' },
      { h: 'Solar panels, driveways and screens too', p: 'If the listing needs more than glass, book it in the same visit. Several services at once saves us time and routing, and we pass that back: one visit costs less than several. That includes [driveways and garage floors](/services/pressure-washing/driveways-garage-floors/), [solar panel cleaning](/services/solar-panel-cleaning/) and [screen repair](/services/screen-repair/).' },
    ],
    faq: [237, 168, 169],
    related: ['/guides/getting-your-home-ready-to-sell/', '/services/window-cleaning/', '/services/pressure-washing/driveways-garage-floors/', '/reviews/'],
  },

  '/who-we-help/property-managers/': {
    title: 'Window Cleaning for Property Managers in Tucson',
    meta: 'Rentals, vacation homes and multi-property portfolios on one schedule with one point of contact. COIs available. (520) 525-0084.',
    answer:
      'Wildcat Washers works with property managers, landlords and absentee owners regularly. Multi-property portfolios run on a single schedule with one point of contact, and we provide certificates of insurance and whatever documentation you need. Community and portfolio work is custom-quoted, and we pass the routing savings back in the pricing.',
    sections: [
      { h: 'Turnovers and vacant units', p: 'Nobody needs to be on site. We do this all the time for seasonal residents and out-of-state owners: we keep payment on file and charge after the job. [Do I need to be home?](/guides/do-i-need-to-be-home-for-window-cleaning/)' },
      { h: 'Every service, every property', p: 'Window cleaning, [solar panel cleaning](/services/solar-panel-cleaning/), [solar screens](/services/solar-screens/), [screen repair](/services/screen-repair/), [pressure washing](/services/pressure-washing/) and [solar panel pigeon proofing](/services/solar-panel-pigeon-proofing/) are all available for rentals and commercial properties, done the same way we do them on any home.' },
      { h: 'Service agreements', p: 'Recurring work runs on a service agreement with the mix and frequency each property needs. There’s no rate card: portfolios are custom-quoted, with discounted pricing for property managers and real estate portfolios. [Apartment communities](/commercial/multifamily-apartments/) and [HOAs](/who-we-help/hoas-communities/) work the same way.' },
      { h: 'Around your tenants', p: 'We work before open, after close or on weekends, seven days a week. Licensed and fully insured, with certificates of insurance available before we start. [Are window cleaners licensed and insured?](/guides/are-window-cleaners-licensed-and-insured-arizona/)' },
    ],
    faq: [158, 195],
    related: ['/commercial/multifamily-apartments/', '/who-we-help/hoas-communities/', '/commercial/', '/guides/are-window-cleaners-licensed-and-insured-arizona/'],
  },

  '/who-we-help/painting-contractors/': {
    title: 'Pre-Paint Pressure Washing for Painting Contractors',
    meta: 'Pre-paint prep washing for Tucson painting contractors: dust and chalking off before the first coat. Seven days a week. (520) 525-0084.',
    answer:
      'Yes. Wildcat Washers pressure washes exteriors before painting, for painting contractors and homeowners alike. Paint won’t bond properly to a dusty surface, and desert dust, chalking and buildup are exactly what cause premature paint failure. We match pressure to the surface and protect stucco, sills and landscaping on every job.',
    sections: [
      { h: 'Why prep washing matters here', p: 'Walls in the desert collect fine dust, chalking from old paint and general buildup. Paint laid over that doesn’t bond properly, and that’s what leads to premature paint failure. A [prep wash](/services/pressure-washing/pre-paint-prep/) takes it off before the first coat.' },
      { h: 'For painting contractors', p: 'You don’t need to own or haul the equipment. Hand the prep wash to us and we’ll work around your paint schedule, seven days a week. Homeowners getting ready for a paint job book it the same way.' },
      { h: 'Stucco-safe', p: 'Pressure washing can damage stucco if it’s done wrong. We match the pressure to the surface and protect stucco, paint, sills and landscaping on every job. More on [pressure washing and stucco](/guides/can-pressure-washing-damage-stucco/).' },
      { h: 'Cleaning only', p: 'We clean the surface and leave the coatings to you: we don’t seal or stain. The rest of our [pressure washing](/services/pressure-washing/) covers driveways, patios and more.' },
    ],
    faq: [233, 72, 79],
    related: ['/services/pressure-washing/pre-paint-prep/', '/services/pressure-washing/', '/guides/can-pressure-washing-damage-stucco/', '/who-we-help/builders-new-construction/'],
  },

  '/who-we-help/builders-new-construction/': {
    title: 'New Construction Window Cleaning in Tucson',
    meta: 'Builder dust, debris and construction cleanup on glass for new homes and buildings across Greater Tucson. (520) 525-0084.',
    answer:
      'Wildcat Washers handles new construction cleanup: builder dust, debris and construction residue on glass, across any of our service lines. Heavy paint or stucco overspray on glass can be stubborn. We usually get it off with steel wool or a scraper, but we won’t promise it all comes off.',
    sections: [
      { h: 'Glass, frames, tracks and screens', p: 'A new home gets the same [5-in-1 Deep Clean](/services/window-cleaning/) as any other: glass, frames, sills, tracks and screens, all cleaned by hand, with tracks vacuumed out and every pane double checked.' },
      { h: 'Overspray, honestly', p: 'Paint or stucco overspray stuck to glass is usually solvable, but it’s never guaranteed. We usually get it with steel wool or a scraper, and we won’t promise that every bit comes off.' },
      { h: 'Only 0000 steel wool on glass', p: 'The only steel wool that touches glass is 0000 grade, the finest there is. Coarser grades scratch. [Why 0000 steel wool on glass?](/guides/why-0000-steel-wool-on-glass/)' },
      { h: 'After move-in', p: 'We also clean for homeowners in newer communities like [Del Webb at Rocking K](/areas/vail-az/del-webb-at-rocking-k/) in Vail AZ and [SaddleBrooke Ranch](/areas/saddlebrooke/saddlebrooke-ranch/). New concrete and driveways can be pressure washed too: [driveways that have never been washed](/services/pressure-washing/driveways-garage-floors/) come up.' },
    ],
    faq: [236],
    related: ['/areas/vail-az/del-webb-at-rocking-k/', '/areas/saddlebrooke/saddlebrooke-ranch/', '/services/window-cleaning/', '/guides/why-0000-steel-wool-on-glass/'],
  },

  '/who-we-help/hoas-communities/': {
    title: 'HOA Window Cleaning and Exterior Services in Tucson',
    meta: 'Clubhouses, common areas and resident homes on one schedule. Custom HOA group pricing, COIs available. (520) 525-0084.',
    answer:
      'Wildcat Washers cleans clubhouses, common areas, leasing offices and community facilities for HOAs on a recurring schedule. Community work is more efficient for us, with one trip and one schedule, so HOAs get custom-quoted pricing that passes those savings back. Certificates of insurance and compliance paperwork are available.',
    sections: [
      { h: 'For the association', p: 'Clubhouses, pools and rec centers, community centers and common areas, cleaned on a recurring schedule under a service agreement with the mix and frequency your community needs. Licensed and fully insured. [Country club and golf clubhouses](/commercial/country-clubs-golf/) work the same way.' },
      { h: 'For residents: find your HOA', p: 'Start with [SaddleBrooke One](/areas/saddlebrooke/saddlebrooke-one/), [SaddleBrooke Two](/areas/saddlebrooke/saddlebrooke-two/) and [Continental Ranch](/areas/marana/continental-ranch/). Each community page covers what we see there. In SaddleBrooke, also [The Preserve at SaddleBrooke](/areas/saddlebrooke/the-preserve-at-saddlebrooke/). In Marana, [Sunflower at Continental Ranch](/areas/marana/sunflower-at-continental-ranch/) and [Del Webb at Dove Mountain](/areas/marana/del-webb-at-dove-mountain/).' },
      { h: 'More HOAs by town', p: 'Green Valley: [Legends](/areas/green-valley/legends/), [Springs at Canoa](/areas/green-valley/springs-at-canoa/), [The Links at Santa Rita Springs](/areas/green-valley/links-at-santa-rita-springs/), [Colonia de los Alamos](/areas/green-valley/colonia-de-los-alamos/) and [Las Campanas](/areas/green-valley/las-campanas/). Sahuarita: [Sonora at Rancho Sahuarita](/areas/sahuarita/sonora-at-rancho-sahuarita/) and [Rancho Resort](/areas/sahuarita/rancho-resort/). Oro Valley: [Vistoso Village](/areas/oro-valley/vistoso-village/). Catalina Foothills: [Skyline Country Club](/areas/catalina-foothills/skyline-country-club/) and [Sin Vacas](/areas/catalina-foothills/sin-vacas/). Tanque Verde: [Vactor Ranch](/areas/tanque-verde/vactor-ranch/) and [Forty Niner Country Club Estates](/areas/tanque-verde/forty-niner-country-club-estates/). Tucson: [Tucson Estates](/areas/tucson/tucson-estates/). Vail AZ: [Del Webb at Rancho del Lago](/areas/vail-az/del-webb-at-rancho-del-lago/) and [Academy Village](/areas/vail-az/academy-village/). Don’t see yours? [Browse every area](/areas/).' },
      { h: 'Architectural review', p: 'Solar screens are a visible exterior change, so residents should check with their HOA before ordering them. Approvals are between the homeowner and the HOA; we don’t handle them.' },
      { h: 'Service agreements and pricing', p: 'Community work is custom-quoted, with no rate card, and recurring work runs on a service agreement. [Property managers](/who-we-help/property-managers/) with several communities get one schedule and one point of contact. Call (520) 525-0084 and we’ll put together a quote.' },
    ],
    faq: [194, 193],
    related: ['/areas/saddlebrooke/saddlebrooke-one/', '/areas/saddlebrooke/saddlebrooke-two/', '/areas/marana/continental-ranch/', '/areas/green-valley/legends/', '/commercial/country-clubs-golf/', '/who-we-help/property-managers/', '/areas/'],
  },

  '/who-we-help/senior-living/': {
    title: 'Senior Living Window Cleaning in Tucson | Arroyo Gardens',
    meta: 'Window cleaning for assisted and independent living communities. Quiet, uniformed crews. Trusted by Arroyo Gardens in Green Valley. (520) 525-0084.',
    answer:
      'Wildcat Washers cleans windows for senior living communities, including Arroyo Gardens Independent and Assisted Living in Green Valley, where we cleaned every exterior window of their large building. Crews are quiet, uniformed and background checked, and we schedule around residents and staff, seven days a week.',
    sections: [
      { h: 'Arroyo Gardens, in their words', p: 'Arroyo Gardens Independent and Assisted Living in [Green Valley](/areas/green-valley/) hired us to clean all of the exterior windows of their large building.', q: { text: arroyoGardens.quote, by: `${arroyoGardens.name}, ${arroyoGardens.role}` } },
      { h: 'Assisted living, independent living and memory care', p: 'We schedule around residents and staff, seven days a week, with quiet, uniformed crews. Licensed and fully insured, with certificates of insurance and standard compliance paperwork available. See all our [commercial work](/commercial/).' },
      { h: 'With residents at home', p: 'Shoe covers go on before we come in, towels catch any drips, and furniture is moved and put back exactly where it was. No water left inside, no mess left behind. [Is it safe to let window cleaners inside?](/guides/is-it-safe-to-let-window-cleaners-inside/)' },
      { h: 'For 55+ homeowners', p: 'We clean homes across 55+ communities like [Sun City Oro Valley](/areas/oro-valley/sun-city-oro-valley/), [Quail Creek](/areas/green-valley/quail-creek/) and [SaddleBrooke](/areas/saddlebrooke/). We offer a senior discount too: just mention it when you call. [Senior and veteran discounts](/guides/senior-and-veteran-discounts-window-cleaning/)' },
    ],
    faq: [193, 196],
    related: ['/commercial/', '/areas/green-valley/', '/areas/oro-valley/sun-city-oro-valley/', '/guides/senior-and-veteran-discounts-window-cleaning/', '/guides/is-it-safe-to-let-window-cleaners-inside/'],
  },

  '/who-we-help/snowbirds-seasonal-residents/': {
    title: 'Window Cleaning for Snowbirds in Tucson | Ready on Arrival',
    meta: 'Tell us your arrival date and your house will be clean and ready the day you get to Tucson. No need to be in town. (520) 525-0084.',
    answer:
      'Wildcat Washers works with snowbirds and seasonal residents all the time. Tell us your arrival date and we’ll have the house clean and ready the day you get to Tucson. You don’t need to be in town: we keep a card on file and charge after the job.',
    sections: [
      { h: 'Timed to your arrival', p: 'Most seasonal residents have us come right when they arrive, so the house is clean and ready the day they get to Tucson. Tell us your arrival date and we’ll have it scheduled. [Do I need to be home?](/guides/do-i-need-to-be-home-for-window-cleaning/)' },
      { h: 'Where seasonal owners live', p: 'We work with seasonal owners across [Green Valley](/areas/green-valley/), [Quail Creek](/areas/green-valley/quail-creek/), [SaddleBrooke](/areas/saddlebrooke/) and [Sun City Oro Valley](/areas/oro-valley/sun-city-oro-valley/), and all over Greater Tucson.' },
      { h: 'Reminders', p: '[Wildcat Club](/wildcat-club/) members get automated reminders, and we reach out when it’s time. One-time service is always available too.' },
      { h: 'Solar panels while you’re away', p: '[Solar panels](/services/solar-panel-cleaning/) need cleaning once or twice a year to keep performing, and nobody has to be home for it. We take before and after photos on every job, so you can see the difference yourself.' },
    ],
    faq: [167, 238, 145],
    related: ['/areas/green-valley/', '/areas/green-valley/quail-creek/', '/areas/saddlebrooke/', '/guides/do-i-need-to-be-home-for-window-cleaning/', '/wildcat-club/'],
  },

  '/commercial/storefronts-retail/': {
    title: 'Storefront and Retail Window Cleaning in Tucson',
    meta: 'Storefront and retail window cleaning weekly, biweekly or monthly, before you open or after close. COIs available. (520) 525-0084.',
    answer:
      'For high-traffic retail, monthly storefront cleaning is common, and some shops go weekly. Wildcat Washers builds a custom plan around what your storefront actually needs, anywhere from weekly to twice a year. We clean before you open or after you close, seven days a week, and provide certificates of insurance.',
    sections: [
      { h: 'Entryways that stay spotless', p: 'Entryways see the most traffic, so storefront glass is often on a monthly, biweekly or weekly plan. Recurring work runs on a service agreement built around your store, not a template.' },
      { h: 'Priced per pane', p: 'Windows are priced per pane, with difficulty, access and glass size factored in. Call (520) 525-0084 for a quote.' },
      { h: 'Every kind of shop', p: 'Shopping centers, grocery stores, pharmacies, salons and single storefronts. Licensed and fully insured, with certificates of insurance available before we start. [Restaurants](/commercial/restaurants-hospitality/) and [offices](/commercial/office-buildings/) work the same way.' },
      { h: 'The same guarantees', p: 'Commercial glass is cleaned the same way as residential: by hand, with every pane double checked. It’s backed by the same guarantees, including the [14-Day Spotless Guarantee](/guarantee/).' },
    ],
    faq: [190],
    related: ['/commercial/', '/commercial/restaurants-hospitality/', '/commercial/office-buildings/', '/guarantee/'],
  },

  '/commercial/office-buildings/': {
    title: 'Office Building Window Cleaning in Tucson',
    meta: 'Office, business park and professional building window cleaning after hours or on weekends. Service agreements and COIs. (520) 525-0084.',
    answer:
      'Wildcat Washers does commercial window cleaning across Greater Tucson: office buildings, business parks, professional complexes and more. We work before open, after close or on weekends, seven days a week, around your business. High glass is reached with deionized water on a water-fed pole, and every job is fully insured.',
    sections: [
      { h: 'Recurring service agreements', p: 'Most offices run on a service agreement: a custom plan with the mix and frequency your building needs, anywhere from weekly to twice a year.' },
      { h: 'Documentation', p: 'Licensed and fully insured. Certificates of insurance and standard compliance paperwork are available before we start. Managing several buildings? See [property managers](/who-we-help/property-managers/).' },
      { h: 'Every kind of office', p: 'Co-working spaces, law and accounting offices, insurance, title and escrow offices, and banks, from a single suite to a whole business park. [Medical and dental offices](/commercial/medical-dental/) too.' },
      { h: 'Quiet crews, spot-free high glass', p: 'Crews are quiet and uniformed. Upper glass is cleaned with pure deionized water on a water-fed pole, which dries spot-free. [Water-fed pole vs hand washing](/guides/water-fed-pole-vs-hand-washing/)' },
    ],
    faq: [189, 191, 196],
    related: ['/commercial/', '/commercial/medical-dental/', '/guides/water-fed-pole-vs-hand-washing/', '/who-we-help/property-managers/'],
  },

  '/commercial/medical-dental/': {
    title: 'Medical and Dental Office Window Cleaning in Tucson',
    meta: 'Quiet, uniformed crews for medical and dental offices, clinics and veterinary hospitals. Scheduled around patients. (520) 525-0084.',
    answer:
      'Wildcat Washers cleans windows for medical and professional offices with quiet, uniformed crews who understand a waiting room isn’t a worksite. We schedule before open, after close or on weekends, and provide certificates of insurance. Clinics, dental offices, imaging centers and veterinary hospitals are all in scope.',
    sections: [
      { h: 'Around patients', p: 'We work before open, after close or on weekends, seven days a week, and schedule around your appointments.' },
      { h: 'Background-checked technicians', p: 'Every hire is background checked and trained before they ever work on a customer’s property. Licensed and fully insured, with certificates of insurance and standard compliance paperwork available.' },
      { h: 'Every kind of practice', p: 'Medical plazas, multi-provider dental offices, urgent care, physical therapy, dialysis centers, labs and veterinary hospitals, plus [office buildings](/commercial/office-buildings/) and [senior living communities](/who-we-help/senior-living/).' },
    ],
    faq: [196],
    related: ['/commercial/', '/commercial/office-buildings/', '/who-we-help/senior-living/'],
  },

  '/commercial/restaurants-hospitality/': {
    title: 'Restaurant and Hotel Window Cleaning in Tucson',
    meta: 'Restaurant, café, hotel and event venue window cleaning before service or after close, seven days a week. (520) 525-0084.',
    answer:
      'Yes. Wildcat Washers cleans windows for restaurants and cafés before service or after close, so we’re never in your customers’ way. We also serve hotels, resorts, breweries, tasting rooms and event venues, with patios and entryways pressure washed on the same visit if you need it.',
    sections: [
      { h: 'Patios and walkways', p: 'Patios, entryways and walkways can be [pressure washed](/services/pressure-washing/patios-pool-decks/) on the same visit. We keep chemical use to a minimum; where a surface needs it, we scrub in a cleaning solution by hand and rinse.' },
      { h: 'Built around your traffic', p: 'High-traffic spots are often cleaned monthly, and some go weekly. We build a custom service plan around what your property needs, anywhere from weekly to twice a year. [Storefronts and retail](/commercial/storefronts-retail/) work the same way.' },
      { h: 'Seven days a week', p: 'Before service, after close or on weekends. Licensed and fully insured, with certificates of insurance available before we start.' },
    ],
    faq: [198],
    related: ['/commercial/', '/commercial/storefronts-retail/', '/services/pressure-washing/patios-pool-decks/'],
  },

  '/commercial/country-clubs-golf/': {
    title: 'Country Club and Golf Clubhouse Window Cleaning',
    meta: 'Clubhouses, pro shops and community facilities cleaned on a recurring schedule, across Tucson’s golf communities. (520) 525-0084.',
    answer:
      'Wildcat Washers cleans windows for clubhouses, common areas, leasing offices and community facilities on a recurring schedule, including country clubs, golf pro shops, and tennis and pickleball clubs. We work around tee times and events, seven days a week, and provide certificates of insurance.',
    sections: [
      { h: 'Irrigation spotting on clubhouse glass', p: 'Mineral-heavy water that dries on glass again and again leaves deposits, and deposits left long enough etch. If sprinklers regularly reach the clubhouse windows, that’s worth addressing. [Should I hose off my windows?](/guides/should-i-hose-off-my-windows/)' },
      { h: 'Pool decks and patios', p: 'Pool decks, patios and walkways can be [pressure washed](/services/pressure-washing/patios-pool-decks/) on the same visit. We keep chemical use minimal and we’re careful about where the water goes.' },
      { h: 'For the HOA', p: 'Clubhouses are often part of a larger community. See [HOAs and communities](/who-we-help/hoas-communities/) for common areas and resident homes, and [SaddleBrooke](/areas/saddlebrooke/), one of the golf communities we work in. Recurring work runs on a service agreement.' },
    ],
    faq: [193],
    related: ['/who-we-help/hoas-communities/', '/commercial/', '/services/pressure-washing/patios-pool-decks/', '/areas/saddlebrooke/'],
  },

  '/commercial/multifamily-apartments/': {
    title: 'Apartment and Multifamily Window Cleaning in Tucson',
    meta: 'Apartment communities, leasing offices and multi-property portfolios on one schedule, one point of contact. COIs available. (520) 525-0084.',
    answer:
      'Yes. Wildcat Washers works with property managers on multiple properties. Portfolios run on a single schedule with one point of contact, and we provide whatever documentation you need. Apartment communities, leasing offices, condo associations and 55+ communities get custom-quoted pricing that passes the routing savings back.',
    sections: [
      { h: 'Leasing offices and common areas', p: 'Leasing office glass, clubhouses, common areas and community facilities, cleaned on a recurring schedule under a service agreement.' },
      { h: 'Turnovers', p: 'We work with property managers, landlords and absentee owners regularly. Vacant units can be done with nobody on site, and every window gets the same 5-in-1 as any home: glass, frames, sills, tracks and screens.' },
      { h: 'Breezeways and pool decks', p: 'Breezeways, walkways and [pool decks](/services/pressure-washing/patios-pool-decks/) can be pressure washed with minimal chemical use, and we’re careful about where the water goes.' },
      { h: 'Documentation', p: 'Licensed and fully insured, with certificates of insurance and standard compliance paperwork available. More for [property managers](/who-we-help/property-managers/) and [HOAs](/who-we-help/hoas-communities/).' },
    ],
    faq: [195],
    related: ['/who-we-help/property-managers/', '/who-we-help/hoas-communities/', '/commercial/'],
  },

  '/commercial/commercial-solar/': {
    title: 'Commercial Solar Panel Cleaning in Tucson',
    meta: 'Commercial rooftop and ground-mount solar arrays cleaned on a recurring schedule, with before-and-after photos. (520) 525-0084.',
    answer:
      'Wildcat Washers cleans commercial rooftop and ground-mount solar arrays, including on a recurring schedule. Any panel type and any roof pitch: we don’t turn down solar jobs. We hand-wash with deionized water and a soft brush, never a pressure washer, and photograph the panels before and after every job.',
    sections: [
      { h: 'Why it matters', p: 'Dust and mineral buildup block light before it reaches the cells. Published research puts losses at 5 to 30 percent, depending on how much has built up and local conditions. Your array’s actual number depends on your panels, which is why we photograph them before and after. [Is solar panel cleaning worth it?](/guides/is-solar-panel-cleaning-worth-it/)' },
      { h: 'Warranty-safe methods', p: 'We avoid harsh chemicals and stiff brushes specifically to protect the panels, and our methods are warranty-safe. More on [solar panel cleaning](/services/solar-panel-cleaning/).' },
      { h: 'Pigeon proofing for the array', p: 'If pigeons nest under a rooftop array, we can install [solar panel pigeon proofing](/services/solar-panel-pigeon-proofing/) around the panels. It covers the array only; we don’t offer general bird control.' },
      { h: 'Southern-metro sites', p: 'Arrays in Green Valley and Sahuarita collect mine dust on top of the usual desert dust. Recurring cleaning runs on a service agreement built around each site.' },
    ],
    faq: [67, 68],
    related: ['/services/solar-panel-cleaning/', '/services/solar-panel-pigeon-proofing/', '/guides/is-solar-panel-cleaning-worth-it/', '/commercial/'],
  },

  '/commercial/schools-churches-civic/': {
    title: 'School, Church and Civic Building Window Cleaning',
    meta: 'Window cleaning for schools, churches, libraries and municipal buildings, including the Santa Rita Fire Department. (520) 525-0084.',
    answer:
      'Wildcat Washers has done municipal work in the Tucson area, including cleaning every window at the Santa Rita Fire Department in Green Valley at no charge through our Wash It Forward program. We serve schools, daycares, churches, libraries and civic buildings, scheduled around services and school hours.',
    sections: [
      { h: 'Wash It Forward', p: '[Wash It Forward](/wash-it-forward/) is how we give back. In [Green Valley](/areas/green-valley/), we cleaned every window at the Santa Rita Fire Department at no charge, as community service.' },
      { h: 'After hours and weekends', p: 'Schools, daycares, churches, libraries and civic buildings are scheduled around services and school hours: before open, after close or on weekends, seven days a week.' },
      { h: 'Background-checked technicians', p: 'Every hire is background checked and trained before they ever work on a customer’s property. Licensed and fully insured, with certificates of insurance and standard compliance paperwork available.' },
    ],
    faq: [200],
    related: ['/wash-it-forward/', '/commercial/', '/areas/green-valley/'],
  },
};

/* ============================== Round 7: weakest window, town and HOA pages ==============================
   Merged over the entries above: a page that already has depth keeps its title, meta, answer and omit;
   heading, sections, proof and faq come from here. */
const round7: Record<string, Depth> = {
  '/services/window-cleaning/casas-adobes/': {
    heading: 'Mature landscaping and sprinkler spotting',
    sections: [
      { h: 'Where sprinklers meet glass', p: 'Casas Adobes is an established area, and plenty of homes have mature landscaping with irrigation near the windows. When that mineral-heavy water dries on glass, it leaves white spots behind, and spots left long enough etch in. If a sprinkler head keeps hitting the same window, it’s worth adjusting. [How to stop sprinklers spotting windows](/guides/how-to-stop-sprinklers-spotting-windows/).' },
      { h: 'Spots come off, etching doesn’t', p: 'Mineral buildup sitting on the glass is buffed off with 0000-grade steel wool, included in every clean. Etching, where minerals have eaten into the glass, can’t be cleaned away. We inspect every window before we start and tell you which one you have before you’ve paid anything. [Spots vs etching](/guides/is-hard-water-damage-on-glass-permanent/).' },
      { h: 'Frames, tracks and screens', p: 'Whether your home is a mid-century ranch or something newer, tracks are vacuumed out and hand-cleaned, frames and sills are wiped down, and screens come out and get reconditioned. A torn screen can usually be replaced in the same visit, because the crew carries equipment for every service. [Screen repair](/services/screen-repair/).' },
      { h: 'Three times a year', p: threeAYear() },
    ],
    faq: windowFaqs,
  },

  '/services/window-cleaning/vail-az/': {
    heading: 'Builder dust on new homes',
    sections: [
      { h: 'The first clean on a new home', p: 'A newly built home usually has builder dust, debris and construction residue on the glass, and we take all of it off, frames, sills and tracks included. Paint or stucco overspray usually comes off with steel wool or a scraper. Heavy overspray can be stubborn, and we’ll tell you what to expect before we start. [Builders and new construction](/who-we-help/builders-new-construction/).' },
      { h: 'Open land at the foot of the Rincons', p: 'Where homes back onto open desert, noticeably more dust reaches the glass. That’s why screens get cleaned every visit: a dirty screen in front of clean glass puts the dust right back. [Windows near open desert](/guides/do-windows-get-dirtier-near-open-desert/).' },
      { h: 'Two-story glass', p: 'Second-story glass is quoted per pane like everything else, with no separate surcharge. For high or hard-to-reach panes we use pure deionized water on a water-fed pole, which dries without a spot, and where a ladder is the right tool we use one safely. [Two-story window cleaning](/guides/two-story-window-cleaning/).' },
      { h: 'Three times a year after that', p: `${threeAYear()} New to the area? See [Del Webb at Rocking K](/areas/vail-az/del-webb-at-rocking-k/) and all of [Vail AZ](/areas/vail-az/).` },
    ],
    faq: windowFaqs,
  },

  '/services/window-cleaning/sahuarita/': {
    heading: 'Southern-metro dust on newer homes',
    sections: [
      { h: 'Inside and out, or exterior only', p: 'Both are quoted per pane over the phone in a few minutes. Most people choose inside and out, which is the full 5-in-1 Deep Clean, and doing both in one visit is more efficient, which shows up in the quote. Exterior only is available anytime. [How pricing works](/guides/how-much-does-window-cleaning-cost-tucson/).' },
      { h: 'Dust that comes back fast', p: 'Sahuarita is in the southern metro, where mining adds measurably to the dust in the air, so glass here collects it faster than in most of Tucson, and hard water leaves spots on top. That’s why screens and tracks are cleaned every visit, not just the glass. We work all over town, [Rancho Sahuarita](/areas/sahuarita/rancho-sahuarita/) included, and next door in [Green Valley](/services/window-cleaning/green-valley/).' },
      { h: 'Sliding doors and nose prints', p: 'Sliding glass doors collect more handprints and pet nose prints than any other glass in most homes. They’re cleaned inside and out as part of the 5-in-1, tracks included. [Pet nose prints on sliding doors](/guides/pet-nose-prints-on-sliding-glass-doors/).' },
      { h: 'Three times a year', p: threeAYear() },
    ],
    faq: windowFaqs,
  },

  '/services/window-cleaning/marana/': {
    heading: 'From Continental Ranch to Dove Mountain',
    sections: [
      { h: 'Desert-edge dust', p: 'Marana runs from Continental Ranch up to Dove Mountain and the Tortolita foothills, and plenty of it borders open desert or unpaved roads. Both put more dust in the air, and it reaches the glass faster. Screens and tracks get cleaned every visit so it doesn’t come straight back. We work across [Continental Ranch](/areas/marana/continental-ranch/) and [Dove Mountain](/areas/marana/dove-mountain/).' },
      { h: 'Just built?', p: 'Marana is growing fast, and a newly built home usually has builder dust and construction residue on the glass. We clean it off, frames and tracks included. Paint or stucco overspray usually comes off with steel wool or a scraper, and if it’s heavy we’ll say so up front. [Builders and new construction](/who-we-help/builders-new-construction/).' },
      { h: 'Two-story and high glass', p: 'Second-story glass is quoted per pane with no separate surcharge. For high glass we use pure deionized water on a water-fed pole, which dries without spotting, and a ladder where that’s the right tool. [Water-fed pole vs hand washing](/guides/water-fed-pole-vs-hand-washing/).' },
      { h: 'Solar while we’re there', p: 'Crews carry equipment for every service, so [solar panel cleaning](/services/solar-panel-cleaning/marana/) can go on the same visit. Wildcat Club members get 10 percent off added services.' },
    ],
    proof: [118, 115],
    faq: windowFaqs,
  },

  '/services/window-cleaning/saddlebrooke/': {
    heading: 'Single-story homes with mountain-view glass',
    sections: [
      { h: 'Mountain-view glass', p: 'Many SaddleBrooke homes are single-story with big windows facing the Catalinas. Big glass in full sun shows every spot, and where irrigation reaches the windows, mineral-heavy water dries into white spots. Hard water removal is included in every clean, across [SaddleBrooke One](/areas/saddlebrooke/saddlebrooke-one/) and [SaddleBrooke Two](/areas/saddlebrooke/saddlebrooke-two/).' },
      { h: 'Skylights and high glass', p: 'Skylights count as extra panes and are cleaned in the same visit. High interior windows and clerestories are one of the most common things people ask us for, and exactly the work most people don’t want to be on a ladder for. [Skylights and high windows](/guides/do-you-clean-skylights-and-high-windows/).' },
      { h: 'Letting us in', p: 'You get a text 7 days out, another 24 hours out, and one when the crew is on the way, with a three-hour arrival window. The truck is marked, technicians are uniformed and background checked, and shoe covers go on before anyone steps inside. [Letting window cleaners in](/guides/is-it-safe-to-let-window-cleaners-inside/).' },
      { h: 'Here for the season, or all year', p: `Seasonal owners can have the windows done before they arrive, timed to their travel dates, and don’t need to be in town for it. [Snowbirds and seasonal residents](/who-we-help/snowbirds-seasonal-residents/). ${threeAYear()}` },
    ],
    proof: [129, 122],
    faq: windowFaqs,
  },

  '/services/window-cleaning/tanque-verde/': {
    heading: 'Acreage, long drives and desert dust',
    sections: [
      { h: 'Long drives and horse properties', p: 'Out where Tanque Verde Road ends, unpaved drives, horse properties and open desert all put more dust in the air, and on acreage the glass catches it from every side. So screens and tracks are cleaned every visit, not just the glass: a dirty screen in front of clean glass is how windows get dirty again within a week. [Dirt roads and desert dust](/guides/do-windows-get-dirtier-near-open-desert/).' },
      { h: 'Mid-century glass', p: 'Angled panes, clerestories and sliders are common in the older east-side neighborhoods. Every pane is cleaned by hand whatever its shape, and very high glass gets the water-fed pole. [Skylights and high windows](/guides/do-you-clean-skylights-and-high-windows/).' },
      { h: 'Out on the property?', p: 'You don’t need to be home for exterior work. We keep a card on file and charge after the job, and if you are home, we walk the job with you at the end. We cover all of east Tucson, Bear Canyon and Agua Caliente included, and [Vactor Ranch](/areas/tanque-verde/vactor-ranch/) has its own page.' },
      { h: 'Three times a year', p: `${threeAYear()} [Why three?](/guides/how-often-clean-windows-tucson/)` },
    ],
    faq: windowFaqs,
  },

  '/areas/catalina/': {
    title: 'Window Cleaning Catalina AZ | Windows, Solar and More',
    meta: 'Windows, solar panels, screens and pressure washing in Catalina AZ, from Oracle Road to the acreage lots. No trip charge. (520) 525-0084.',
    answer: 'Wildcat Washers cleans windows, solar panels, solar screens and more in Catalina, the unincorporated community on Oracle Road between Oro Valley and SaddleBrooke. Open desert means more dust on the glass, so screens and tracks get cleaned every visit. There’s no trip charge, and quotes take a few minutes by phone at (520) 525-0084.',
    heading: 'Catalina, up close',
    sections: [
      { h: 'Open land on every side', p: 'Catalina is older, mixed housing, from acreage lots to smaller ones, with Catalina Mountain views. Open desert and unpaved roads put more dust in the air, and it reaches glass and solar panels faster than in town. We clean the screens and tracks along with the glass so the dust doesn’t blow straight back in. [Windows near open desert](/guides/do-windows-get-dirtier-near-open-desert/).' },
      { h: 'Fences, walls and patios', p: 'We pressure wash fences, gates, block walls, patios and outdoor furniture too. Your landscaping is protected while we work: we watch where we step, where equipment goes and where the water runs. [Pressure washing](/services/pressure-washing/) and [patios and pool decks](/services/pressure-washing/patios-pool-decks/).' },
      { h: 'Between Oro Valley and SaddleBrooke', p: 'Catalina is the last stop on Oracle Road before SaddleBrooke, and our crews work in both directions from here, with no trip charge anywhere. See [Oro Valley](/areas/oro-valley/) and [SaddleBrooke](/areas/saddlebrooke/).' },
      { h: 'How often', p: 'For windows we recommend three cleanings a year: after summer and monsoon season, around the holidays, and in spring. Solar panels need it once or twice a year. One-time cleans are always available, and the [Wildcat Club](/wildcat-club/) can schedule the windows for you. [Window cleaning](/services/window-cleaning/) and [solar panel cleaning](/services/solar-panel-cleaning/).' },
    ],
  },

  '/areas/corona-de-tucson/': {
    title: 'Window Cleaning Corona de Tucson AZ | Wildcat Washers',
    meta: 'Windows, solar panels and pressure washing in Corona de Tucson. No trip charge, and you pay only once you’re happy. (520) 525-0084.',
    answer: 'Yes, Wildcat Washers serves Corona de Tucson and has customers there. We hand-clean windows, screens and tracks, clean solar panels and solar screens, and pressure wash driveways and patios, with no trip charge. Every job is quoted by phone in a few minutes at (520) 525-0084, and you don’t pay until you’re happy.',
    heading: 'Corona de Tucson, up close',
    sections: [
      { h: 'Newer homes below the Santa Ritas', p: 'Corona de Tucson is a small, newer community tucked against the Santa Rita foothills. Open foothill land brings steady dust, and hard water leaves white spots wherever rain or sprinklers reach the glass. Hard water removal is included in every window cleaning. [What causes white spots](/guides/what-causes-white-spots-on-windows-arizona/). Next door, see [Vail AZ](/areas/vail-az/).' },
      { h: 'Driveways a couple of times a year', p: 'Dust, sun and traffic turn concrete grey faster than most people expect. For most homes, pressure washing the driveway a couple of times a year keeps buildup from getting ahead of you. [Driveways and garage floors](/services/pressure-washing/driveways-garage-floors/).' },
      { h: 'Inside and out', p: 'Inside and out is the full 5-in-1 Deep Clean, and sliding doors get the same care as every other pane. Exterior only is available if you prefer. [Pet nose prints on sliding doors](/guides/pet-nose-prints-on-sliding-glass-doors/).' },
      { h: 'Paying, and discounts', p: 'You pay after the job, after the walkthrough, and only once you’re happy. We take all standard payment methods and can keep a card on file if you’re not home. Seniors and veterans get a discount, just mention it when you call. [Senior and veteran discounts](/guides/senior-and-veteran-discounts-window-cleaning/).' },
    ],
  },

  '/areas/tubac/': {
    title: 'Window Cleaning Tubac AZ | Windows, Solar and More',
    meta: 'Windows, solar panels and solar screens for Tubac, Tumacacori, Amado and Rio Rico. No trip charge, and timed to your arrival. (520) 525-0084.',
    answer: 'Wildcat Washers cleans windows, solar panels, solar screens and more in Tubac, with no trip charge, the same as anywhere else we work. Big fixed view windows are cleaned by hand, hard water removal included. Seasonal owners can have the house done before they arrive, timed to their travel dates. Call (520) 525-0084.',
    heading: 'Tubac, up close',
    sections: [
      { h: 'Big fixed view glass', p: 'Tubac’s Santa Fe-style homes are known for big fixed view windows, and big glass in full sun shows every hard water spot. We check for tint, film and low-E coatings before anything touches the glass, then buff mineral buildup off by hand. [Tint and low-E coatings](/guides/will-window-cleaning-damage-tint-or-low-e/).' },
      { h: 'Ready when you get back', p: 'Tell us when you’re arriving and we’ll have the house clean and ready before you walk in. You don’t need to be in town: we keep a card on file and charge after the job. [Snowbirds and seasonal residents](/who-we-help/snowbirds-seasonal-residents/).' },
      { h: 'Skip the hose', p: 'Rinsing dusty windows with the hose between visits feels helpful, but the water is mineral heavy and dries into white spots, and spots left long enough etch the glass. [Should I hose off my windows?](/guides/should-i-hose-off-my-windows/)' },
      { h: 'Tumacacori, Amado and Rio Rico', p: 'We work all around Tubac: Tumacacori by the historic mission, Amado and its horse properties between Green Valley and Tubac, and Rio Rico to the south. No trip charge for any of them. [How far we travel](/guides/how-far-outside-tucson-do-you-travel/) and [Green Valley](/areas/green-valley/).' },
    ],
  },

  '/areas/sonoita/': {
    title: 'Window Cleaning Sonoita AZ | Windows, Solar and More',
    meta: 'Wall-to-wall glass, solar panels and screens for Sonoita and Elgin homes. No trip charge, and quotes by phone in minutes. (520) 525-0084.',
    answer: 'Yes, Wildcat Washers works in Sonoita and Elgin, with no trip charge, the same as anywhere else we serve. We hand-clean windows, screens and tracks, including the wall-to-wall glass on ranch and view homes, and we clean solar panels and solar screens. Every job is quoted by phone in a few minutes.',
    heading: 'Sonoita, up close',
    sections: [
      { h: 'Wall-to-wall glass in the grasslands', p: 'Sonoita’s custom view homes and ranch estates are known for wall-to-wall glass, and open exposure means more airborne dust reaching it. Every pane is cleaned by hand, frames, sills, tracks and screens included. [Windows near open desert](/guides/do-windows-get-dirtier-near-open-desert/).' },
      { h: 'High glass and second stories', p: 'Second-story and high glass is quoted per pane like everything else. For high or hard-to-reach glass we use pure deionized water on a water-fed pole, which dries without leaving a spot. [Two-story window cleaning](/guides/two-story-window-cleaning/).' },
      { h: 'Coated and filmed glass', p: 'Big view windows often carry low-E coatings or security film. We identify coatings and films first and use the right approach for each, and no type of glass is off limits. [Tint and low-E coatings](/guides/will-window-cleaning-damage-tint-or-low-e/).' },
      { h: 'Elgin and the drive out', p: 'We work in Elgin’s ranch and winery country just east of Sonoita too. We serve Greater Tucson and Southern Arizona, generally within about an hour’s drive of central Tucson, with no trip charge. [How far we travel](/guides/how-far-outside-tucson-do-you-travel/).' },
    ],
  },

  '/areas/vail-az/del-webb-at-rancho-del-lago/': {
    answer: 'Yes. Wildcat Washers cleans windows for residents of Del Webb at Rancho del Lago, the 55+ golf section of Rancho del Lago on the north side of Vail AZ. Every visit is the 5-in-1 Deep Clean, hard water removal included, and you pay only after the walkthrough, once you’re happy. Quotes take minutes by phone.',
    heading: 'Del Webb at Rancho del Lago, up close',
    sections: [
      { h: 'Nothing to prepare', p: 'You don’t need to do anything before we arrive. We move what needs moving and put it back exactly where it was. If it’s convenient, raising delicate blinds and clearing small items off interior sills speeds things up, but it’s not required. [How to prepare](/guides/how-to-prepare-for-window-cleaning/).' },
      { h: 'The same standard every visit', p: 'We try for the same crew each time but can’t promise it. What we can promise is that every technician is trained to the same standard and held to the same guarantees, including the [14-Day Spotless Guarantee](/guarantee/).' },
      { h: 'Paying at the end', p: 'You pay after the work is done, after we’ve walked it with you, and only once you’re happy. Seniors and veterans get a discount, just mention it when you call. [When do I pay?](/guides/when-do-i-pay-for-window-cleaning/)' },
      { h: 'Clubhouses and common areas', p: 'We also clean clubhouses, common areas and community facilities on a recurring schedule. An HOA can call for a custom quote on community work. [HOAs and communities](/who-we-help/hoas-communities/). Nearby: [Academy Village](/areas/vail-az/academy-village/), [Del Webb at Rocking K](/areas/vail-az/del-webb-at-rocking-k/) and all of [Vail AZ](/areas/vail-az/).' },
    ],
  },

  '/areas/vail-az/academy-village/': {
    answer: 'Wildcat Washers cleans windows for Academy Village residents, the 55+ community in the Vail AZ area tied to the Arizona Senior Academy. Every visit is the 5-in-1 Deep Clean, done by hand. We move any furniture that needs moving and put it back, and you don’t pay until the walkthrough is done and you’re happy.',
    heading: 'Academy Village, up close',
    sections: [
      { h: 'We handle the furniture', p: 'No need to move anything before we arrive. Shoe covers go on before we come in, towels catch any drips, and furniture goes back exactly where it was. No water left inside, no mess left behind. [Letting window cleaners in](/guides/is-it-safe-to-let-window-cleaners-inside/).' },
      { h: 'Patios, walls and outdoor furniture', p: 'We pressure wash patios, walkways, block walls and fences, plus patio furniture, tables and grills. Landscaping is protected on every job. [Patios and pool decks](/services/pressure-washing/patios-pool-decks/) and [pressure washing](/services/pressure-washing/).' },
      { h: 'Rincon Valley dust', p: 'Academy Village sits in the Rincon Valley, the local name for the area at the foot of the Rincons. Homes near open land collect dust noticeably faster, so screens and tracks are cleaned every visit along with the glass. Seniors get a discount, just mention it when you call.' },
      { h: 'Community spaces', p: 'We also clean clubhouses, common areas and community facilities on a recurring schedule, and the community can call for a custom quote. [HOAs and communities](/who-we-help/hoas-communities/). Nearby: [Del Webb at Rancho del Lago](/areas/vail-az/del-webb-at-rancho-del-lago/) and all of [Vail AZ](/areas/vail-az/).' },
    ],
  },

  '/areas/catalina-foothills/sin-vacas/': {
    answer: 'Wildcat Washers cleans windows for Sin Vacas residents, in the guard-gated community off Sunrise Drive in the Catalina Foothills. Large, high view glass is cleaned by hand, inside and out, by background-checked technicians. We inspect each window before we start and walk the job with you at the end, and you pay only once you’re happy.',
    heading: 'Sin Vacas, up close',
    sections: [
      { h: 'Who comes through the gate', p: 'Every visit is a confirmed appointment, with texts 7 days out, 24 hours out and when the crew is on the way. The truck is marked and the technicians are uniformed, background checked and trained, so you know it’s us before we knock. [Letting window cleaners in](/guides/is-it-safe-to-let-window-cleaners-inside/).' },
      { h: 'High glass, inside and out', p: 'Foothills homes tend to have large, high glass, and high interior windows and clerestories are some of the most common things we’re asked for. Outside, very high panes get pure deionized water on a water-fed pole; two-story work is done by trained technicians with the right equipment. [Skylights and high windows](/guides/do-you-clean-skylights-and-high-windows/).' },
      { h: 'Tinted and coated glass', p: 'We check for tint, film and low-E coatings before anything touches the glass and adjust the method to match. We work on tinted and coated glass regularly. [Tint and low-E coatings](/guides/will-window-cleaning-damage-tint-or-low-e/).' },
      { h: 'Solar screens, and nearby', p: 'Solar screens are washed in the same visit. If you’re thinking about new ones, check with your HOA’s architectural review first; see [solar screens in the Catalina Foothills](/services/solar-screens/catalina-foothills/). Nearby: [Skyline Country Club](/areas/catalina-foothills/skyline-country-club/), [Ventana Canyon](/areas/catalina-foothills/ventana-canyon/) and all of the [Catalina Foothills](/areas/catalina-foothills/).' },
    ],
  },

  '/areas/oro-valley/vistoso-village/': {
    answer: 'Wildcat Washers cleans windows for Vistoso Village residents, in the small gated 55+ community of attached homes in Rancho Vistoso, Oro Valley. You don’t need to be home, we protect floors and furniture when we work inside, and every technician is background checked. Quotes are per pane by phone in a few minutes.',
    heading: 'Vistoso Village, up close',
    sections: [
      { h: 'You don’t need to be home', p: 'We like to walk the job with you at the end, but plenty of customers aren’t home, especially for exterior work. We keep payment on file and charge after the job. [Do I need to be home?](/guides/do-i-need-to-be-home-for-window-cleaning/)' },
      { h: 'Inside, left as we found it', p: 'Shoe covers go on before we come in, towels catch any drips, and anything we move goes back exactly where it was. No water left inside, no mess left behind.' },
      { h: 'Who we send', p: 'Every hire is background checked and trained before working at a customer’s home. You get a confirmed appointment, a marked truck and uniformed technicians who introduce themselves at the door. [Letting window cleaners in](/guides/is-it-safe-to-let-window-cleaners-inside/).' },
      { h: 'Common areas and nearby', p: 'We also clean common areas and community facilities on a recurring schedule, and the HOA can call for a custom quote. Around you: [Rancho Vistoso](/areas/oro-valley/rancho-vistoso/), [Sun City Oro Valley](/areas/oro-valley/sun-city-oro-valley/) and [window cleaning in Oro Valley](/services/window-cleaning/oro-valley/).' },
    ],
  },

  '/areas/marana/del-webb-at-dove-mountain/': {
    answer: 'Wildcat Washers cleans windows for residents of Del Webb at Dove Mountain, the newer 55+ neighborhood of single-story homes inside Dove Mountain in Marana. Every visit is the 5-in-1 Deep Clean by hand, seniors and veterans get a discount when they mention it, and you pay only after the walkthrough. Call (520) 525-0084.',
    heading: 'Del Webb at Dove Mountain, up close',
    sections: [
      { h: 'Tortolita foothills dust', p: 'Dove Mountain sits in the Tortolita foothills, and homes near open desert collect noticeably more dust on the glass. Screens and tracks are cleaned every visit along with the glass, so it doesn’t come straight back. [Windows near open desert](/guides/do-windows-get-dirtier-near-open-desert/).' },
      { h: 'Driveways, even never-washed ones', p: 'Dust, sun and tire marks build up on concrete, and a driveway that has never been washed is usually the most satisfying result. For most homes, a couple of times a year keeps buildup from getting ahead of you. [Driveways and garage floors](/services/pressure-washing/driveways-garage-floors/).' },
      { h: 'Letting us in', p: 'A confirmed appointment, a marked truck, uniformed technicians who are background checked and trained, and shoe covers on before anyone steps inside. [Letting window cleaners in](/guides/is-it-safe-to-let-window-cleaners-inside/).' },
      { h: 'Clubhouses and nearby', p: 'We also clean clubhouses and common areas on a recurring schedule, and an HOA can call for a custom quote. Around you: [Dove Mountain](/areas/marana/dove-mountain/), [The Highlands at Dove Mountain](/areas/marana/the-highlands-at-dove-mountain/) and [window cleaning in Marana](/services/window-cleaning/marana/).' },
    ],
  },
};
for (const [url, d] of Object.entries(round7)) depth[url] = { ...depth[url], ...d };

const round8: Record<string, Depth> = {
  /* ============================== Round 8: cost, frequency, hard water and solar answers ============================== */
  '/guides/window-cleaning-cost-guide/': {
    answer:
      'Window cleaning in Tucson is priced per pane, meaning each individual piece of glass, not per hour or per window. Glass size, access and how dirty the glass is all factor in. Quotes are free and take a few minutes by phone at (520) 525-0084, with no site visit, no trip charge and nothing paid until you’re happy.',
    sections: [
      { h: 'What goes into a quote', p: 'Three things move the number: how big the glass is, how easy it is to reach (height, obstacles, and things to work around indoors), and how dirty it is. On the call we count your panes together, so you know exactly what’s in your number. [How much window cleaning costs in Tucson](/guides/how-much-does-window-cleaning-cost-tucson/).' },
      { h: 'What’s already included', p: 'Every clean is the 5-in-1 Deep Clean: glass, frames, sills, tracks and screens, all by hand. Screens, tracks and hard water removal don’t cost extra. [Do screens and tracks cost extra?](/guides/do-window-cleaners-charge-extra-for-screens-and-tracks/)' },
      { h: 'Ways the price comes down', p: 'Inside and out in one visit is more efficient than two trips, and that shows up in the price. Doing several services in one visit saves time and routing, and we pass that back. Seniors and veterans get a discount, and Wildcat Club members get 10 percent off added services. [Senior and veteran discounts](/guides/senior-and-veteran-discounts-window-cleaning/).' },
      { h: 'When you pay', p: 'No deposit. You pay after the work is finished, after the double check and walkthrough, and only once you’re happy. [When do I pay?](/guides/when-do-i-pay-for-window-cleaning/)' },
    ],
    faq: [1, 2, 3, 4, 5, 6, 7, 8],
  },

  '/guides/how-much-does-solar-panel-cleaning-cost/': {
    answer:
      'Solar panel cleaning is priced per job, based on how many panels you have and how the array is set up. Call (520) 525-0084 with your panel count and we’ll quote it in a few minutes. A typical residential array is a single visit of one to three hours, with before and after photos.',
    sections: [
      { h: 'What sets the price', p: 'Panel count and how the array is set up: rooftop or ground mount, the roof type and the pitch. We clean any panel type on any roof, residential or commercial, and no job is declined.' },
      { h: 'What the visit includes', p: 'Hand washing with deionized water, and soap when the buildup calls for it. No harsh chemicals and no stiff or abrasive brushes, so the method is safe for the panel surface and your manufacturer warranty. We work from the roof surface and never stand on panels. [Does cleaning void the warranty?](/guides/does-cleaning-void-solar-warranty/)' },
      { h: 'Is it worth it?', p: 'Published research puts output loss from buildup at 5 to 30 percent, depending on conditions. What you recover depends on how dirty your panels were, which is why every job gets before and after photos. Once or twice a year keeps panels performing. [Is solar panel cleaning worth it?](/guides/is-solar-panel-cleaning-worth-it/)' },
      { h: 'With your windows', p: 'Crews carry equipment for every service, so panels can be cleaned on the same visit as the windows. Wildcat Club members get 10 percent off added services. [Solar panel cleaning](/services/solar-panel-cleaning/).' },
    ],
    faq: [9, 10],
  },

  '/guides/how-much-does-pressure-washing-cost-tucson/': {
    answer:
      'Pressure washing is priced per job, by the surfaces being cleaned and the scope of the work. A driveway, a patio and pool deck, or fences and block walls are each quoted on their own terms. Call (520) 525-0084 and we’ll quote it by phone in a couple of minutes, with no trip charge. You pay only once you’re happy.',
    sections: [
      { h: 'What we quote on', p: 'Driveways and garage floors, patios, walkways, pavers, pool decks, entryways, fences, gates, block walls, exterior walls, patio furniture, grills and trash cans. The general rule: anywhere dirt, dust and debris build up around the outside of a property. [Pressure washing](/services/pressure-washing/).' },
      { h: 'What we don’t take on', p: 'Rust, oil stain, graffiti and deep stain removal depend on heavy chemical treatment, which we stay away from. We don’t offer soft washing either; where a surface calls for it, we scrub in a cleaning solution by hand before rinsing. [Oil and rust stains](/guides/can-oil-and-rust-stains-be-removed-from-concrete/) and [pressure washing vs soft washing](/guides/pressure-washing-vs-soft-washing/).' },
      { h: 'How long, and how often', p: 'A driveway usually takes one to three hours. For most homes, a couple of times a year at minimum keeps buildup from getting ahead of you. [How often to pressure wash a driveway](/guides/how-often-pressure-wash-driveway-arizona/).' },
      { h: 'Doing more in one visit', p: 'Several services in one visit saves us time and routing, and we pass that back. Wildcat Club members get 10 percent off added services.' },
    ],
    faq: [12, 13],
  },

  '/guides/do-window-cleaners-charge-extra-for-screens-and-tracks/': {
    answer:
      'Not with us. Screens, tracks and hard water removal are all part of every 5-in-1 Deep Clean at no extra charge. Tracks get vacuumed out and cleaned, screens come out and get reconditioned, and mineral buildup is buffed off the glass. The one thing no one can fix is etched glass, and we’ll tell you first.',
    sections: [
      { h: 'Why screens and tracks are in every clean', p: 'Most cleaning leaves dust in the tracks, frames and screens, so the next gust blows it right back onto the glass. Cleaning all of it is how windows stay clean much longer. [Why windows get dirty again so fast](/guides/why-do-windows-get-dirty-again-so-fast/).' },
      { h: 'Hard water, and its limit', p: 'Mineral buildup is buffed off with 0000-grade steel wool and walnut pads, included every time. Etching, where minerals have eaten into the glass, can’t be removed by anyone. [Can hard water stains be removed?](/guides/can-hard-water-stains-be-removed-from-windows/)' },
      { h: 'Torn screens are different', p: 'Cleaning a screen is included; repairing or replacing a torn one is a separate job, priced by screen size. Crews carry equipment for every service, so work spotted during the inspection can usually be added the same day. [Repair or replace a torn screen](/guides/repair-or-replace-window-screen/).' },
    ],
    faq: [15, 16],
  },

  '/guides/window-replacement-vs-cleaning-cost/': {
    answer:
      'Cleaning, by a wide margin. Replacing windows costs dramatically more than maintaining them. The catch is that neglect turns one into the other: minerals left on glass long enough etch into it, and etched glass has to be replaced, not cleaned. Regular cleaning keeps windows from ever reaching that point.',
    sections: [
      { h: 'How a cleaning bill becomes a replacement cost', p: 'Dust and minerals build up, the buildup etches the glass, and eventually it’s a replacement cost instead of a cleaning bill. Windows cleaned on a schedule never reach the point of etching. [Is hard water damage permanent?](/guides/is-hard-water-damage-on-glass-permanent/)' },
      { h: 'What cleaning can’t fix', p: 'Etched glass, scratched glass and fogging between double panes. Fogging is a failed seal, moisture inside the sealed unit, and no one can clean inside it. [Can a foggy double-pane window be cleaned?](/guides/fogged-double-pane-window-can-it-be-cleaned/)' },
      { h: 'Find out before you pay', p: 'We inspect every window before we start and walk you through anything we find: chips, scratches, etching, failed seals. You never learn about damage after the crew leaves.' },
      { h: 'Keeping it a cleaning bill', p: 'For windows we recommend three cleanings a year: right after summer and monsoon season, around the holidays, and in spring. One-time cleans are always available, and the [Wildcat Club](/wildcat-club/) can schedule all three for you. [How often to clean windows in Tucson](/guides/how-often-clean-windows-tucson/).' },
    ],
    faq: [170, 171],
  },

  '/guides/best-time-of-year-to-clean-windows-tucson/': {
    answer:
      'Three points in the year. Right after summer and monsoon season, when everything is covered in dust. Around the holidays, so your home is ready for guests and the new year. And in spring, when pollen adds to the usual buildup. Dust and hard water build up all year, so every home needs all three.',
    sections: [
      { h: 'After monsoon season', p: 'Monsoon season runs roughly June through September and leaves heavy dirt and debris on the glass. Cleaning right after it resets everything going into fall. [Before or after monsoon?](/guides/clean-windows-before-or-after-monsoon/)' },
      { h: 'Around the holidays', p: 'Your home is ready for guests and the new year, and the visit falls midway between the fall and spring cleanings.' },
      { h: 'In spring', p: 'Spring pollen lands on top of the year-round dust. A spring clean clears both before summer.' },
      { h: 'Here part of the year?', p: 'Most seasonal residents have us come right when they arrive, so the house is clean the day they get back. Tell us your arrival date; you don’t need to be in town. [Snowbirds and seasonal residents](/who-we-help/snowbirds-seasonal-residents/). The [Wildcat Club](/wildcat-club/) can schedule all three visits, and one-time cleans are always available.' },
    ],
    faq: [162],
  },

  '/guides/clean-windows-before-or-after-monsoon/': {
    answer:
      'After. Monsoon storms, roughly June through September, leave heavy dirt and dust on the glass, so the clean that counts is the one after them. Cleaning right after summer resets everything going into fall. And if rain lands in the first 14 days after any visit, the 14-Day Spotless Guarantee covers a free touch-up.',
    sections: [
      { h: 'What monsoon leaves behind', p: 'Dust from the storms, and rain drying on the glass. Tucson’s water is mineral heavy, so storm water that dries leaves white spots behind. [What causes white spots](/guides/what-causes-white-spots-on-windows-arizona/).' },
      { h: 'Don’t hose it off', p: 'Rinsing dusty windows with a hose feels like it helps, but it adds more mineral deposits, and deposits left long enough etch the glass. [Should I hose off my windows?](/guides/should-i-hose-off-my-windows/)' },
      { h: 'Solar panels too', p: 'Rain doesn’t clean solar panels either. It moves dust around, the dust sticks, and the water dries into mineral spots. [Does rain clean solar panels?](/guides/does-rain-clean-solar-panels/)' },
      { h: 'The rest of the year', p: 'For windows we recommend three cleanings a year: right after summer and monsoon season, around the holidays, and in spring. One-time cleans are always available, and the [Wildcat Club](/wildcat-club/) can schedule all three for you.' },
    ],
    faq: [163],
  },

  '/guides/how-often-pressure-wash-driveway-arizona/': {
    answer:
      'For most homes, a couple of times a year at minimum keeps buildup from getting ahead of you. Dust, sun and traffic settle into Arizona concrete year-round, which is why driveways turn grey. A first pressure washing is often dramatic, because the original color is usually still underneath. A driveway takes one to three hours.',
    sections: [
      { h: 'Why concrete turns grey', p: 'Years of dust, sun and traffic sit on the surface. The original color is usually still under there, which is why the first wash is the most satisfying one.' },
      { h: 'Never washed? Still fine', p: 'A driveway that has never been washed takes more work, but it comes up. Tire marks come off readily; one customer had us clean 15 years of them off a garage floor. [Driveways and garage floors](/services/pressure-washing/driveways-garage-floors/).' },
      { h: 'What pressure washing won’t do', p: 'We don’t take on oil stain or rust removal, which depend on heavy chemical treatment. [Oil and rust stains](/guides/can-oil-and-rust-stains-be-removed-from-concrete/).' },
      { h: 'Patios and pool decks', p: 'The same dust settles on patios, walkways and pool decks, and they can be done in the same visit. [Patios and pool decks](/services/pressure-washing/patios-pool-decks/).' },
    ],
    faq: [81],
  },

  '/guides/hard-water-and-your-windows/': {
    answer:
      'Tucson’s water is mineral heavy. When it dries on glass from rain, sprinklers or a hose, it leaves white mineral spots. Caught early, those deposits come right off, and removal is included in every Wildcat Washers window cleaning. Left long enough, they etch into the glass permanently, and etched glass has to be replaced.',
    sections: [
      { h: 'Where the spots come from', p: 'Rain, irrigation and, most of all, rinsing windows with a hose. Where sprinklers reach the glass, the same water dries there again and again. [What causes white spots](/guides/what-causes-white-spots-on-windows-arizona/) and [stopping sprinkler spots](/guides/how-to-stop-sprinklers-spotting-windows/).' },
      { h: 'Deposits vs etching', p: 'Deposits sit on the glass and come off. Etching is minerals that have eaten into the glass itself, which is physical damage no one can reverse. [Is hard water damage permanent?](/guides/is-hard-water-damage-on-glass-permanent/)' },
      { h: 'How we remove it', p: 'We buff buildup off with 0000-grade steel wool and walnut pads, at no extra charge. Coarser grades scratch glass, which is why the grade matters. [Why 0000 steel wool?](/guides/why-0000-steel-wool-on-glass/)' },
      { h: 'Keeping it off', p: 'Keep irrigation off the glass and don’t rinse windows with a hose. For windows we recommend three cleanings a year: right after summer and monsoon season, around the holidays, and in spring. One-time cleans are always available, and the [Wildcat Club](/wildcat-club/) can schedule all three for you. [Should I hose off my windows?](/guides/should-i-hose-off-my-windows/)' },
      { h: 'Solar panels get it too', p: 'Rain that dries on panel glass leaves the same mineral spots. [White spots on solar panels](/guides/white-spots-on-solar-panels-after-rain/).' },
    ],
    faq: [34, 35, 36, 37, 38],
  },

  '/guides/can-hard-water-stains-be-removed-from-windows/': {
    answer:
      'Yes, if the minerals are still sitting on the glass. We buff hard water buildup off with 0000-grade steel wool and walnut pads, and it’s included in every clean at no extra charge. What no one can fix is etching, where minerals have eaten into the glass itself. We’ll tell you which you have before you pay anything.',
    sections: [
      { h: 'We check first', p: 'Every window is inspected before we start, and we walk you through what we find: buildup that will come off, and any etching, scratches or failed seals that won’t. You never learn about it after the crew leaves.' },
      { h: 'Why the grade of steel wool matters', p: 'Only 0000-grade is fine enough for glass. Coarser grades scratch it, and scratched glass can’t be repaired. [Why 0000 steel wool?](/guides/why-0000-steel-wool-on-glass/)' },
      { h: 'Stopping it coming back', p: 'Keep sprinklers and hose water off the glass, and clean on a schedule so deposits never sit long enough to etch. [The complete hard water guide](/guides/hard-water-and-your-windows/).' },
    ],
    faq: [34, 16],
  },

  '/guides/how-to-stop-sprinklers-spotting-windows/': {
    answer:
      'Adjust any irrigation that’s reaching the glass, so mineral-heavy water stops drying on your windows. Don’t rinse the windows with a hose to fix it, which only adds more minerals. If spots are already there, have them removed before they etch. With the sprinklers adjusted, three cleanings a year handles it for most homes.',
    sections: [
      { h: 'Why sprinkler water spots glass', p: 'Tucson’s water is mineral heavy. Where irrigation reaches a window, the water dries and leaves its minerals behind, and the next cycle adds another layer. Not every home has sprinklers near the glass, but where it happens, it happens every day.' },
      { h: 'Why the hose makes it worse', p: 'Hose water is the same hard water. Rinsing spotted windows adds deposits instead of removing them. [Should I hose off my windows?](/guides/should-i-hose-off-my-windows/)' },
      { h: 'Already spotted?', p: 'Mineral buildup on the glass comes off, and removal is included in every clean. Spots left long enough etch, and etching is permanent. [Can hard water stains be removed?](/guides/can-hard-water-stains-be-removed-from-windows/)' },
      { h: 'How often to clean', p: 'For windows we recommend three cleanings a year: right after summer and monsoon season, around the holidays, and in spring. One-time cleans are always available, and the [Wildcat Club](/wildcat-club/) can schedule all three for you.' },
    ],
    faq: [37, 38, 165],
  },

  '/guides/why-0000-steel-wool-on-glass/': {
    answer:
      'Because 0000-grade, or quad-zero, steel wool is fine enough to buff mineral buildup off glass without scratching it. Coarser grades, 000, 00 or 0, will scratch glass, and scratched glass can’t be repaired, only replaced. We use it with walnut pads to lift hard water deposits, included in every window cleaning at no extra charge.',
    sections: [
      { h: 'The grade is the whole point', p: 'Steel wool is graded by fineness, and only the finest is safe on glass. The wrong grade turns a cleaning into a replacement.' },
      { h: 'What it removes, and what it can’t', p: 'It lifts mineral deposits sitting on the glass. It can’t repair etching, where minerals have eaten into the glass, and it can’t fix a scratch. We tell you which is which before we start. [Can hard water stains be removed?](/guides/can-hard-water-stains-be-removed-from-windows/)' },
      { h: 'Tools that need a trained hand', p: 'Scrapers and abrasives have to be used correctly or they scratch the glass, and Arizona heat dries cleaning solution before you can pull it. That’s why streak-free glass takes real skill. [Can I clean my own windows?](/guides/can-i-clean-my-own-windows/)' },
    ],
    faq: [16, 34],
  },

  '/guides/how-much-output-do-dirty-solar-panels-lose/': {
    answer:
      'Research puts it anywhere from 5 to 30 percent, depending on how much has built up and local conditions. Dust and mineral deposits block light before it reaches the cell. Your own loss depends on how dirty your panels are, which is why we take before and after photos on every solar job.',
    sections: [
      { h: 'Why Southern Arizona panels get dirty', p: 'Constant airborne dust, pollen and mineral residue, with frequent wind and months without meaningful rain. In Green Valley, Sahuarita and the southern metro, nearby mining adds to the dust. [Mine dust and solar panels](/guides/mine-dust-solar-panels-green-valley-sahuarita/).' },
      { h: 'Rain doesn’t fix it', p: 'Rain moves dust around rather than washing it off, then dries into mineral spots. Panels need a brush and soap to come clean. [Does rain clean solar panels?](/guides/does-rain-clean-solar-panels/)' },
      { h: 'Will cleaning raise production?', p: 'If the panels were dirty, yes: you’re removing what was blocking the light. How much depends on how much had built up, so we don’t promise a number for your array. The photos show you the difference on a roof you can’t see yourself.' },
      { h: 'How often', p: 'Once or twice a year keeps panels performing and protects the glass from mineral damage. [How often to clean solar panels](/guides/how-often-clean-solar-panels-tucson/).' },
    ],
    faq: [52, 65, 66],
  },

  '/guides/white-spots-on-solar-panels-after-rain/': {
    answer:
      'Minerals. Tucson’s water is hard, and when rain dries on panel glass it leaves the minerals behind as white spots. That’s part of why rain doesn’t clean solar panels: it moves dust around, then dries mineral spotting onto the glass. Panels need actual scrubbing with a brush and soap to come clean.',
    sections: [
      { h: 'Why the spots matter', p: 'Mineral deposits block light like dust does, and hard water residue contributes to premature wear on the glass. [How much output dirty panels lose](/guides/how-much-output-do-dirty-solar-panels-lose/).' },
      { h: 'Don’t hose them off', p: 'A garden hose uses the same hard water and leaves more spots. If you clean panels yourself: no pressure washer, no stiff brushes, and don’t walk on the panels. [Can I clean my own solar panels?](/guides/can-i-clean-my-own-solar-panels/)' },
      { h: 'How we clean them', p: 'Hand washing with deionized water, which dries without leaving mineral spots, and soap when the buildup calls for it. No harsh chemicals, and before and after photos on every job. [Solar panel cleaning](/services/solar-panel-cleaning/).' },
      { h: 'How often', p: 'Once or twice a year. [How often to clean solar panels](/guides/how-often-clean-solar-panels-tucson/).' },
    ],
    faq: [55],
  },
};
for (const [url, d] of Object.entries(round8)) depth[url] = { ...depth[url], ...d };

/* ============================== Round 9: thin community pages ============================== */
const round9Add: Record<string, { sections: DepthSection[]; quoted?: number[] }> = {
  '/areas/sahuarita/rancho-resort/': {
    sections: [
      { h: 'Solar screens, off and back on', p: 'We take solar screens off, clean the glass behind them and put them back. Cleaning the screens themselves is a pressure washing service, separate from the 5-in-1, and it’s often done on the same visit. [Should solar screens come off first?](/guides/remove-solar-screens-before-window-cleaning/)', q: { text: 'They tackled all of my filthy solar screens and got all the dirt and grime off of them. They look brand new!', by: 'Sheri S., Tucson, Sahuarita & Green Valley area' } },
      { h: 'How to check out any company', p: 'Look for reviews you can verify, a real business address, licensing and insurance, uniformed crews in marked vehicles, and a clear price before work starts. Our office is at 2101 N Country Club Rd, Suite 103, in central Tucson, and we’re licensed and fully insured. [How to choose a window cleaner](/guides/how-to-choose-a-window-cleaner/)' },
    ],
    quoted: [142],
  },
  '/areas/marana/the-highlands-at-dove-mountain/': {
    sections: [
      { h: 'Established homes, honest answers', p: 'The Highlands is established, with single-story homes and views at the entrance to Dove Mountain. Glass that has seen years of hard water can carry buildup, and some of it may have etched. We inspect every window before we start and tell you what will come off and what won’t, before you’ve paid anything. [Is hard water damage permanent?](/guides/is-hard-water-damage-on-glass-permanent/)', q: { text: 'I was impressed with professionalism, promptness, efficiency, and quality of their work. My windows are spotless.', by: 'Linda S., Oro Valley, Marana & Northwest Tucson area' } },
    ],
    quoted: [248],
  },
  '/areas/marana/sunflower-at-continental-ranch/': {
    sections: [
      { h: 'Before and after, on the roof', p: 'You can’t see your own roof, so every solar job gets before and after photos. That’s the part one Sunflower at Continental Ranch customer mentioned first. Once or twice a year keeps panels performing and protects the glass from mineral damage. [Solar panel cleaning in Marana](/services/solar-panel-cleaning/marana/)' },
    ],
  },
  '/areas/green-valley/links-at-santa-rita-springs/': {
    sections: [
      { h: 'More than the glass', p: 'Every window cleaning is the 5-in-1: glass, frames, sills, tracks and screens. A whole house takes anywhere from one to five hours depending on its size, and we move anything we need to and put it back. [How long does window cleaning take?](/guides/how-long-does-window-cleaning-take/)', q: { text: 'They arrived on time, worked three hours doing a full service of cleaning not only the windows, but the tracks, frames, and wiping the sills.', by: 'Chaille W., Tucson, Sahuarita & Green Valley area' } },
    ],
    quoted: [144],
  },
  '/areas/tanque-verde/vactor-ranch/': {
    sections: [
      { h: 'Tint, film and patio doors', p: 'We check for tint, film and low-E coatings before anything touches the glass and adjust the method to match. Sliders and patio doors get the same treatment as every other pane, tracks included. [Tint and low-E coatings](/guides/will-window-cleaning-damage-tint-or-low-e/)', q: { text: 'Did a great job on all of our windows and patio doors and at a fair price.', by: 'Olga E., Catalina Foothills & East Tucson area' } },
    ],
    quoted: [245],
  },
  '/areas/saddlebrooke/the-preserve-at-saddlebrooke/': {
    sections: [
      { h: 'One trip, several jobs', p: 'Doing several services in one visit saves us time and routing, and we pass that back: one trip costs less than three. Windows, a patio or pool deck, and solar screens can all happen together, and Wildcat Club members get 10 percent off every added service.', q: { text: 'Angel did a great job! I would recommend!', by: 'Ken W., SaddleBrooke' } },
    ],
    quoted: [132],
  },
  '/areas/catalina-foothills/ventana-canyon/': {
    sections: [
      { h: 'Inside and out, or exterior only', p: 'Both are priced per pane, and exterior only costs less than doing both. Most customers choose inside and out, since that’s the full 5-in-1 and one visit for both is more efficient than two trips. Villa or view home, the quote works the same way. [How pricing works](/guides/window-cleaning-cost-guide/)' },
    ],
  },
  '/areas/vail-az/del-webb-at-rocking-k/': {
    sections: [
      { h: 'We remind you when it’s time', p: 'Club members get automated reminders, and we reach out to everyone else when windows are due. Before each visit you get a text 7 days out, another 24 hours out, and one when the crew is on the way, with a three-hour arrival window.' },
      { h: 'Who comes to the door', p: 'A marked truck, uniformed technicians who are background checked and trained, an introduction at the door, and shoe covers on before anyone steps inside. [Letting window cleaners in](/guides/is-it-safe-to-let-window-cleaners-inside/)' },
    ],
  },
  '/areas/catalina-foothills/skyline-country-club/': {
    sections: [
      { h: 'Coatings and film', p: 'Custom-home glass can carry low-E coatings or security film. We identify coatings and films before anything touches the glass and use the right approach for each, so no type of glass is off limits. [Tint and low-E coatings](/guides/will-window-cleaning-damage-tint-or-low-e/)' },
    ],
  },
  '/areas/marana/continental-ranch/': {
    sections: [
      { h: 'Why two quotes on one street differ', p: 'Almost always because one home has more panes of glass. Two similar-looking houses can be very different once you count the panes, which is why we count them with you on the phone and walk you through exactly what’s in your number. [How pricing works](/guides/window-cleaning-cost-guide/)' },
    ],
  },
  '/areas/sahuarita/rancho-sahuarita/': {
    sections: [
      { h: 'Inside and out costs less together', p: 'One visit for inside and out is more efficient than two separate trips, and that shows up in the price. It’s also the better way to do it, since both sides get dirty at the same rate.', q: { text: 'The two young men did a splendid job on windows, screens, rails, etc. They were very efficient, polite, and respectful.', by: 'Wayne S., Tucson, Sahuarita & Green Valley area' } },
    ],
    quoted: [163],
  },
  '/areas/catalina-foothills/la-paloma/': {
    sections: [
      { h: 'Townhome or view home, it’s counted by pane', p: 'La Paloma has everything from townhomes to view homes, and every one is quoted the same way: per pane, meaning each individual piece of glass. Twenty windows can mean many more than twenty panes, so we count them together on the phone and you have your quote on the spot. [How pricing works](/guides/window-cleaning-cost-guide/)' },
    ],
  },
  '/areas/sahuarita/sonora-at-rancho-sahuarita/': {
    sections: [
      { h: 'No prep on your end', p: 'There’s nothing to do before we arrive. We move what needs moving and put it back where it was; clearing small items off interior sills speeds things up, but it’s optional. [How to prepare](/guides/how-to-prepare-for-window-cleaning/)', q: { text: 'They arrived on time and they did a wonderful job, was a lot of windows. They\'re very courteous very polite. They put things back to the way they were, hire them!', by: 'Linda M., Tucson, Sahuarita & Green Valley area' } },
    ],
    quoted: [158],
  },
  '/areas/tucson/sam-hughes/': {
    sections: [
      { h: 'Frames and sills, not just the pane', p: 'We clean the whole window, not only the glass in the middle of it. On older windows with more frame and more sill, that’s a big part of the job, and it’s hand work on every visit. Our office is next door in Blenman-Elm.', q: { text: 'Cooper and Jose were professional, on time and generally great guys.', by: 'Traci E., Tucson' } },
    ],
    quoted: [83],
  },
};
for (const [url, a] of Object.entries(round9Add)) {
  const cur = depth[url];
  if (!cur) throw new Error(`round 9: no depth entry for ${url}`);
  depth[url] = { ...cur, sections: [...(cur.sections ?? []), ...a.sections], quoted: [...(cur.quoted ?? []), ...(a.quoted ?? [])] };
}
const round9: Record<string, Depth> = {
  '/areas/tucson/tucson-estates/': {
    answer:
      'Wildcat Washers cleans windows for Tucson Estates homeowners on the west side of Tucson, and we have customers there. Every visit is the 5-in-1 Deep Clean: glass, frames, sills, tracks and screens, by hand, with hard water removal included. Quotes are per pane by phone at (520) 525-0084, and you pay only once you’re happy.',
    heading: 'Tucson Estates, up close',
    sections: [
      { h: 'Detail work', p: 'Frames and sills are hand cleaned, tracks are vacuumed out, and screens come out and get reconditioned. Every pane gets a double check before we walk the job with you.' },
      { h: 'Where there’s open desert nearby', p: 'Homes close to open desert or unpaved roads collect noticeably more dust on the glass. Cleaning the screens and tracks every visit keeps it from blowing straight back. [Windows near open desert](/guides/do-windows-get-dirtier-near-open-desert/)' },
      { h: 'Walls, fences and gates', p: 'We pressure wash block walls, fences, gates, patios and driveways too, and protect your landscaping while we work. [Pressure washing](/services/pressure-washing/)' },
      { h: 'Elsewhere in Tucson', p: 'See [Sam Hughes](/areas/tucson/sam-hughes/), [Rita Ranch](/areas/tucson/rita-ranch/) and all of [Tucson](/areas/tucson/).' },
    ],
    proof: [88],
  },
};
for (const [url, d] of Object.entries(round9)) depth[url] = { ...depth[url], ...d };

/* ============================== Round 10: town and HOA pages ============================== */
const round10Add: Record<string, { sections: DepthSection[]; quoted?: number[] }> = {
  '/areas/casas-adobes/': {
    sections: [
      { h: 'Inside too, furniture handled', p: 'Inside and out is the full 5-in-1 Deep Clean, and it’s what we recommend. You don’t need to move anything first: shoe covers go on before we come in, towels catch any drips, and furniture goes back exactly where it was. Exterior only is available if you prefer.' },
      { h: 'Between Oro Valley and central Tucson', p: 'Casas Adobes sits between Oracle and La Cholla, with Tucson National on its edge, and our crews work all around it. See [Oro Valley](/areas/oro-valley/), [Marana](/areas/marana/), the [Catalina Foothills](/areas/catalina-foothills/) and [Tucson](/areas/tucson/).' },
    ],
  },
  '/areas/saddlebrooke/saddlebrooke-two/': {
    sections: [
      { h: 'Solar panels on single-story roofs', p: 'We clean any panel type on any roof, by hand with deionized water and soap when it’s needed, and never with a pressure washer. Once or twice a year keeps panels performing, and every job gets before and after photos so you can see the roof you can’t see yourself. [Solar panel cleaning](/services/solar-panel-cleaning/)' },
    ],
  },
  '/areas/marana/del-webb-at-dove-mountain/': {
    sections: [
      { h: 'Senior and veteran discounts', p: 'Both are real and both are published. Mention it when you call for your quote and we’ll take care of it. [Senior and veteran discounts](/guides/senior-and-veteran-discounts-window-cleaning/)' },
    ],
  },
  '/areas/tanque-verde/': {
    sections: [
      { h: 'Rooftop or ground-mount solar', p: 'Custom homes out here have every kind of array. We clean rooftop and ground-mount panels alike, on any roof type and pitch, by hand and never with a pressure washer. Once or twice a year keeps them performing. [Solar panel cleaning](/services/solar-panel-cleaning/)' },
    ],
  },
  '/areas/oro-valley/rancho-vistoso/': {
    sections: [
      { h: 'Insurance, on paper', p: 'We’re fully insured, and if your village or HOA wants proof before work starts, ask for a certificate of insurance. A legitimate company provides it without hesitation, and we do.', q: { text: 'These young men do a great job washing my windows. It\'s great that they service Oro. Valley, AZ. They are friendly & professional. Would highly recommend!', by: 'Linda S., Oro Valley' } },
    ],
    quoted: [103],
  },
  '/areas/tucson/rita-ranch/': {
    sections: [
      { h: 'Inside and out, one visit', p: 'Doing inside and out in the same visit is more efficient than two trips, and that shows up in the price. Pets are welcome too: our crews are careful and kind with them on every job.', q: { text: 'Great work! Crystal clear!', by: 'Christina C., Tucson' } },
    ],
    quoted: [85],
  },
  '/areas/green-valley/legends/': {
    sections: [
      { h: 'Several services, one trip', p: 'One trip costs less than three, so windows, pressure washing and solar panels done together cost less than separate visits. Wildcat Club members also get 10 percent off every added service.', q: { text: 'We had Isaac and Angel clean our windows and do some pressure washing in green valley. Wonderful job, great prices. Highly recommend', by: 'Mary M., Green Valley' } },
    ],
    quoted: [29],
  },
  '/areas/catalina-foothills/sabino-canyon/': {
    sections: [
      { h: 'Will solar screens darken the house?', p: 'Barely. The view gets slightly darker and a touch less crisp, and from outside no one can see in at all, so you get daytime privacy and keep the view. West-facing windows come first, then south. [Can you see out of solar screens?](/guides/can-you-see-out-of-solar-screens/)' },
    ],
  },
  '/areas/saddlebrooke/': {
    sections: [
      { h: 'Tell a friend first', p: 'SaddleBrooke runs on word of mouth, and our referral program rewards both sides. The one rule: the referral has to go through your referral text or email link before your friend’s service, since it can’t be added afterward. [How referrals work](/referrals/)' },
    ],
  },
  '/areas/tanque-verde/forty-niner-country-club-estates/': {
    sections: [
      { h: 'Your yard, left as we found it', p: 'We watch where we step, where we set equipment and where the water goes, and bushes and desert landscaping are protected on every job. [Pressure washing](/services/pressure-washing/)' },
      { h: 'Why quotes differ house to house', p: 'Almost always the pane count. Two homes that look alike can be very different once you count the glass, so we count it with you on the call. [How pricing works](/guides/window-cleaning-cost-guide/)' },
    ],
  },
  '/areas/oro-valley/sun-city-oro-valley/': {
    sections: [
      { h: 'Pay at the end, any way you like', p: 'You pay after the work is done and walked with you, and only once you’re happy. We take all standard payment methods and can keep a card on file if you won’t be home.', q: { text: 'Arrived on time. Did a great job on the windows. Will hire again.', by: 'Ed C., Oro Valley' } },
    ],
    quoted: [114],
  },
  '/areas/sahuarita/': {
    sections: [
      { h: 'White spots on solar panels', p: 'Those are minerals. Rain dries on the panel glass and leaves them behind, and in Sahuarita the dust from nearby mining sticks to it too. Rain moves dust around rather than washing it off, so panels need a brush and soap. [White spots after rain](/guides/white-spots-on-solar-panels-after-rain/) and [Rancho Resort](/areas/sahuarita/rancho-resort/).' },
    ],
  },
  '/areas/marana/dove-mountain/': {
    sections: [
      { h: 'Second-story glass, same pricing', p: 'Second-story glass is quoted per pane like everything else, with no separate surcharge. From the family homes in the Villages to the custom homes up the hill, high panes get pure deionized water on a water-fed pole or a ladder where that’s the right tool. [Two-story window cleaning](/guides/two-story-window-cleaning/)' },
    ],
  },
  '/areas/oro-valley/stone-canyon/': {
    sections: [
      { h: 'Background checked, every hire', p: 'Every technician is background checked and trained before working at a customer’s home, and they arrive uniformed in a marked truck, so you know it’s us before we knock.', q: { text: 'Outstanding professional window cleaners in Oro Valley AZ', by: 'Nancy S., Oro Valley' } },
    ],
    quoted: [104],
  },
  '/areas/vail-az/': {
    sections: [
      { h: 'Rincon Valley, all of it', p: 'Rincon Valley is the local name for Vail and the area east of Houghton at the foot of the Rincons, and we cover all of it: [Del Webb at Rocking K](/areas/vail-az/del-webb-at-rocking-k/), [Del Webb at Rancho del Lago](/areas/vail-az/del-webb-at-rancho-del-lago/), [Academy Village](/areas/vail-az/academy-village/), Rancho del Lago and the newer family subdivisions.' },
      { h: 'Pets and a busy house', p: 'Our crews love animals and are careful and kind with them on every job. There’s nothing to prepare before we arrive, and anything we move goes back where it was.' },
    ],
  },
};
for (const [url, a] of Object.entries(round10Add)) {
  const cur = depth[url];
  if (!cur) throw new Error(`round 10: no depth entry for ${url}`);
  depth[url] = { ...cur, sections: [...(cur.sections ?? []), ...a.sections], quoted: [...(cur.quoted ?? []), ...(a.quoted ?? [])] };
}

/* ============================== Round 12: service-in-town pages ==============================
   Appended to whatever the rounds above left: sections and quoted reviews are added, FAQ numbers merged. */
const round12Add: Record<string, { sections: DepthSection[]; quoted?: number[]; faq?: number[] }> = {
  '/services/window-cleaning/catalina-foothills/': {
    sections: [
      { h: 'From Skyline to Sabino Canyon', p: 'We work all across the Foothills: [Skyline Country Club](/areas/catalina-foothills/skyline-country-club/), [La Paloma](/areas/catalina-foothills/la-paloma/), [Ventana Canyon](/areas/catalina-foothills/ventana-canyon/) and the area around [Sabino Canyon](/areas/catalina-foothills/sabino-canyon/) Road. Every window is inspected before we start, and anything already chipped, scratched or etched is pointed out first.' },
      { h: 'Afternoon sun on big glass', p: 'Foothills view glass takes the afternoon sun hard. [Solar screens](/services/solar-screens/catalina-foothills/) block up to 80 to 90 percent of the heat and glare while you keep the view, and the glass behind them gets cleaned first.' },
    ],
    faq: [101, 102, 103],
  },
  '/services/solar-panel-cleaning/sahuarita/': {
    sections: [
      { h: 'Newer stucco roofs, any array', p: 'Most Sahuarita homes are newer stucco houses in [Rancho Sahuarita](/areas/sahuarita/rancho-sahuarita/), and plenty carry rooftop solar. We clean any panel type on any roof pitch, rooftop or ground mount. A residential array usually takes one to three hours, and we work from the roof surface, never standing on the panels.' },
      { h: 'Photos from the roof', p: 'You can’t stand on your roof to check the work, so every job gets before and after photos. That’s how you see what came off.', q: { text: 'They did a great job of cleaning my solar panels yesterday! And it was cold and windy that day.', by: 'Barbara Z., Tucson, Sahuarita & Green Valley area' } },
    ],
    quoted: [243],
    faq: [95, 65, 69],
  },
  '/services/solar-panel-cleaning/oro-valley/': {
    sections: [
      { h: 'Careful footing on big roofs', p: 'Standing on panels is how microcracks happen, so we work from the roof surface with the right equipment. Rooftop or ground mount, any panel type, any pitch.' },
      { h: 'Rancho Vistoso to Sun City', p: 'From the villages of [Rancho Vistoso](/areas/oro-valley/rancho-vistoso/) to the single-story roofs of [Sun City Oro Valley](/areas/oro-valley/sun-city-oro-valley/), we clean arrays all over town. A residential job usually takes one to three hours.' },
    ],
    faq: [97, 99, 58],
  },
  '/services/solar-screens/catalina-foothills/': {
    sections: [
      { h: 'Privacy on wall-to-wall glass', p: 'From outside, no one can see in through solar screens at all. On Foothills glass that means daytime privacy without drawing the curtains, and you still see out.' },
      { h: 'Built to last, installed in weeks', p: 'We use top-grade Phifer materials in any color and shade. Screens typically last around a decade, and at least five years, and it’s usually two to three weeks from measure to install. [How long do solar screens last?](/guides/how-long-do-solar-screens-last/)' },
    ],
    faq: [221, 224, 225],
  },
  '/services/window-cleaning/green-valley/': {
    sections: [
      { h: 'Safer than the ladder', p: 'Our crews bring the right ladders and a water-fed pole for high glass, and we’re licensed and fully insured.', q: { text: 'At our age, we have to be aware of the safety aspects of any do-it-yourself projects, and Wildcat Washers are a safe and affordable solution.', by: 'Peter C., Green Valley' } },
      { h: 'Quail Creek, Canoa Ranch and the GVR areas', p: '[Quail Creek](/areas/green-valley/quail-creek/) and [Canoa Ranch](/areas/green-valley/canoa-ranch/) are regular stops, along with GVR communities like [Legends](/areas/green-valley/legends/) and [The Links at Santa Rita Springs](/areas/green-valley/links-at-santa-rita-springs/).' },
    ],
    quoted: [66],
    faq: [92, 93, 122],
  },
  '/services/window-cleaning/oro-valley/': {
    sections: [
      { h: 'Setting it up is quick', p: 'Quotes happen on one short call: we count your panes together and give you a price on the spot, with no site visit. You get a text 7 days out, another 24 hours out, and one when the crew is on the way.', q: { text: 'Isaac did a very nice job cleaning my windows. Very pleasant guy! I talked to Jose first to set up the appt. He called back quickly.', by: 'Barbara A., Oro Valley' } },
      { h: 'Stone Canyon to Sun City', p: '[Stone Canyon](/areas/oro-valley/stone-canyon/) has some of the biggest and most specialized glass in Oro Valley, and we also work throughout [Rancho Vistoso](/areas/oro-valley/rancho-vistoso/) and [Sun City Oro Valley](/areas/oro-valley/sun-city-oro-valley/).' },
    ],
    quoted: [111],
    faq: [97, 98, 99],
  },
  '/services/window-cleaning/sahuarita/': {
    sections: [
      { h: 'Rancho Sahuarita and the 55+ side', p: 'Most Sahuarita residents live in [Rancho Sahuarita](/areas/sahuarita/rancho-sahuarita/), around the lake, and we also work in [Sonora at Rancho Sahuarita](/areas/sahuarita/sonora-at-rancho-sahuarita/) and [Rancho Resort](/areas/sahuarita/rancho-resort/).', q: { text: 'Our windows are so clean, it appears there is no glass in the frames.', by: 'Carol J., Tucson, Sahuarita & Green Valley area' } },
    ],
    quoted: [141],
    faq: [95],
  },
  '/services/pressure-washing/green-valley/': {
    sections: [
      { h: 'Garage floors and tire marks', p: 'Garage floors come up too. Years of tire marks and buildup come off readily, and a driveway or garage floor usually takes one to three hours. [Driveways and garage floors](/services/pressure-washing/driveways-garage-floors/)', q: { text: 'Jose and Cooper did a great job cleaning our garage floor of 15 years of tire marks. They showed up on time and kept us informed of their progress.', by: 'Ken C., Tucson, Sahuarita & Green Valley area' } },
      { h: 'Furniture, grills and trash cans', p: 'Patio furniture, tables, chairs, grills and BBQ areas are common jobs, and trash cans too. You don’t need to be home for the work itself, though we like to walk it with you at the end.' },
    ],
    quoted: [216],
    faq: [88, 85, 90],
  },
  '/services/solar-screens/oro-valley/': {
    sections: [
      { h: 'Daytime privacy', p: 'From outside, no one can see in through solar screens at all, so big Oro Valley view windows get daytime privacy while you keep the Pusch Ridge view.' },
      { h: 'From measure to install', p: 'Usually two to three weeks from measure to install. Screens mount with brackets that rotate in and out, so they pop off easily whenever you want them off.' },
    ],
    faq: [221, 225, 227],
  },
  '/services/window-cleaning/tanque-verde/': {
    sections: [
      { h: 'Bear Canyon to the end of the road', p: 'We cover all of east Tucson, from Bear Canyon and Agua Caliente to where Tanque Verde Road ends, with no trip charge anywhere. That includes [Forty Niner Country Club Estates](/areas/tanque-verde/forty-niner-country-club-estates/), [Vactor Ranch](/areas/tanque-verde/vactor-ranch/), Tucson Country Club Estates and Indian Ridge Estates.' },
      { h: 'Drives, walls and gates', p: 'Long drives, patios, block walls and gates gather desert dust too. We [pressure wash](/services/pressure-washing/) all of them and protect your landscaping while we work.' },
    ],
    faq: [117, 119],
  },
  '/services/window-cleaning/vail-az/': {
    sections: [
      { h: 'Senior and veteran discounts', p: 'Both are real and both are published. Mention it on the call and we’ll take care of it. [Senior and veteran discounts](/guides/senior-and-veteran-discounts-window-cleaning/)' },
      { h: 'Regular coverage, no trip charge', p: 'Vail AZ is part of our regular routes, not a special trip, so there’s no trip charge, and your quote happens by phone in a few minutes.' },
    ],
    faq: [117, 119],
  },
  '/services/solar-screens/green-valley/': {
    sections: [
      { h: 'Cleaning the screens you have', p: 'Solar screens collect dust like everything else. We take them off, pressure wash and recondition them, clean the glass behind them and put them back, often on the same visit as the windows.', q: { text: 'Washed my window panes and pressured washed my solar screens.', by: 'Deborah W., Tucson, Sahuarita & Green Valley area' } },
      { h: 'How long new screens last', p: 'Typically around a decade, and at least five years; fading is what eventually wears them out, which is why we use top-grade materials. It’s usually two to three weeks from measure to install.' },
    ],
    quoted: [137],
    faq: [224, 225, 228],
  },
  '/services/window-cleaning/marana/': {
    sections: [
      { h: 'Gladden Farms to the Highlands', p: 'We cover all of Marana: Gladden Farms and the newer family subdivisions up north, [Continental Ranch](/areas/marana/continental-ranch/) and its 55+ [Sunflower](/areas/marana/sunflower-at-continental-ranch/) section, and [The Highlands](/areas/marana/the-highlands-at-dove-mountain/) and [Del Webb at Dove Mountain](/areas/marana/del-webb-at-dove-mountain/).' },
      { h: 'Torn screens, fixed on the spot', p: 'Screens come out, get cleaned and reconditioned, and go back in. Most torn standard screens can be repaired on site during the same visit. [Repair or replace a torn screen](/guides/repair-or-replace-window-screen/)' },
    ],
    faq: [105, 106],
  },
  '/services/window-cleaning/saddlebrooke/': {
    sections: [
      { h: 'One, Two, The Preserve and the Ranch', p: 'We have customers throughout [SaddleBrooke One](/areas/saddlebrooke/saddlebrooke-one/), [SaddleBrooke Two](/areas/saddlebrooke/saddlebrooke-two/) and [The Preserve](/areas/saddlebrooke/the-preserve-at-saddlebrooke/), plus [SaddleBrooke Ranch](/areas/saddlebrooke/saddlebrooke-ranch/) up the road.' },
      { h: 'West-facing glass first', p: 'Single-story homes with big west-facing windows heat up in the afternoon. For [solar screens](/services/solar-screens/), west-facing windows come first, then south.' },
    ],
    faq: [109, 122],
  },
};
for (const [url, a] of Object.entries(round12Add)) {
  const cur = depth[url];
  if (!cur) throw new Error(`round 12: no depth entry for ${url}`);
  const faq = cur.faq ?? [];
  depth[url] = { ...cur, sections: [...(cur.sections ?? []), ...a.sections], quoted: [...(cur.quoted ?? []), ...(a.quoted ?? [])], faq: [...faq, ...(a.faq ?? []).filter((n) => !faq.includes(n))] };
}
/* A new entry: this page had no depth copy. */
const round12: Record<string, Depth> = {
  '/services/solar-panel-cleaning/marana/': {
    title: 'Solar Panel Cleaning in Marana AZ',
    meta: 'Solar panel cleaning in Marana, from Continental Ranch to Dove Mountain. Hand washed with deionized water, before and after photos. (520) 525-0084.',
    answer:
      'Wildcat Washers cleans solar panels across Marana, from Continental Ranch up to Dove Mountain. Panels are hand washed with deionized water and a soft brush, never pressure washed, and every job gets before and after photos. Once or twice a year keeps them performing. Call (520) 525-0084 with your panel count for a quote.',
    heading: 'New builds, established arrays and birds',
    sections: [
      { h: 'Construction dust on new arrays', p: 'Gladden Farms and other newer subdivisions are still building out. When dust does collect on panels, rain won’t clear it: it moves the dust around and dries mineral spots onto the glass. [Does rain clean solar panels?](/guides/does-rain-clean-solar-panels/)' },
      { h: 'Continental Ranch to Dove Mountain', p: 'The established homes of [Continental Ranch](/areas/marana/continental-ranch/), the single-story roofs in Sunflower and The Highlands, and the big custom homes up [Dove Mountain](/areas/marana/dove-mountain/) all get the same method. We clean any panel type on any roof, rooftop or ground mount, and a residential array usually takes one to three hours.' },
      { h: 'Birds under the panels', p: 'If pigeons have moved in under the array, we clear out the nesting debris and droppings and install exclusion mesh that clips on, with no drilling and nothing attached to the panel frames. [Solar panel pigeon proofing](/services/solar-panel-pigeon-proofing/)' },
      { h: 'Windows on the same visit', p: 'Crews carry equipment for every service, so panels can be cleaned on the same visit as your [Marana windows](/services/window-cleaning/marana/). Wildcat Club members get 10 percent off added services.' },
    ],
    faq: [105, 67, 69, 70, 61],
  },
};
for (const [url, d] of Object.entries(round12)) {
  if (depth[url]) throw new Error(`round 12: ${url} already has depth`);
  depth[url] = d;
}

/* ============================== Round 13: next weakest town and HOA pages ==============================
   Appended like round 12. Every line traces to a Doc 6 answer or a fact bank line. */
const round13Add: Record<string, { sections: DepthSection[]; quoted?: number[]; faq?: number[] }> = {
  '/areas/marana/sunflower-at-continental-ranch/': {
    sections: [
      { h: 'Arriving for the season?', p: 'Most seasonal residents have us come right when they arrive, so the house is clean and ready the day they get back. Tell us your arrival date and we’ll have it scheduled; you don’t need to be in town for us to do it.' },
      { h: 'Senior and veteran discounts', p: 'We offer both. Just mention it when you call for your quote and we’ll take care of it. [Senior and veteran discounts](/guides/senior-and-veteran-discounts-window-cleaning/)' },
    ],
    faq: [167, 19],
  },
  '/areas/sahuarita/rancho-sahuarita/': {
    sections: [
      { h: 'Seven days a week', p: 'We work seven days a week, and most people are scheduled within a week or two, often sooner. Same-day is possible more often than you’d think, so just ask.', q: { text: 'They arrived on time, were friendly and considerate of our property, AND did an excellent job washing windows and screens inside and out.', by: 'Bonnie S., Tucson, Sahuarita & Green Valley area' } },
      { h: 'Getting ready to sell?', p: 'Clean windows make a home look well kept, in person and in listing photos. Real estate agents use us for listing prep, and every agent who’s hired us once has kept coming back.' },
    ],
    quoted: [190],
    faq: [142, 168],
  },
  '/areas/catalina-foothills/skyline-country-club/': {
    sections: [
      { h: 'French panes and divided lights', p: 'More panes means more detail work, which is what we do best. French panes and divided-light windows are quoted per pane like everything else.' },
      { h: 'Transoms and entry glass', p: 'Transom and entryway glass is part of the job too. Chandeliers aren’t something we offer.' },
    ],
    faq: [50, 45],
  },
  '/areas/catalina-foothills/ventana-canyon/': {
    sections: [
      { h: 'Skylights', p: 'Skylights are counted as additional panes and handled in the same visit.' },
      { h: 'Fog between the panes', p: 'We clean both surfaces, but fog between double panes is inside the sealed unit, where nobody can clean it. It’s a failed seal, and we’ll point it out during our inspection, before we start. [Can a foggy double-pane window be cleaned?](/guides/fogged-double-pane-window-can-it-be-cleaned/)' },
    ],
    faq: [42, 39],
  },
  '/areas/sahuarita/rancho-resort/': {
    sections: [
      { h: 'Out of town for part of the year?', p: 'We clean for seasonal residents and out-of-state owners all the time. For exterior work you don’t need to be home: we can keep a card on file and charge after the job.', q: { text: 'Had my windows washed today and they did a great job. Showed up on time and worked till the job was done.', by: 'Denise L., Tucson, Sahuarita & Green Valley area' } },
    ],
    quoted: [226],
    faq: [145, 153],
  },
  '/areas/tanque-verde/vactor-ranch/': {
    sections: [
      { h: 'If something isn’t right', p: 'Tell your technician during the walkthrough and it gets fixed on the spot. If anything comes up after you’ve paid, call us and we’ll make it right, including a refund.' },
      { h: 'Drives, patios and pool decks', p: 'Pressure washing is priced by the surface and the scope of the job, and we’ll quote it by phone in a couple of minutes. Your bushes and landscaping are protected on every job. [Pressure washing](/services/pressure-washing/)' },
    ],
    faq: [188, 12],
  },
  '/areas/green-valley/links-at-santa-rita-springs/': {
    sections: [
      { h: 'Right after the monsoon', p: 'Monsoon storms leave heavy dirt and dust behind, so right after summer is the natural time for a clean. It resets everything going into fall.' },
      { h: 'The glass, not just the view', p: 'Hard water left on a pane long enough etches it permanently, and etched glass has to be replaced. Maintaining your windows is far cheaper than replacing them.', q: { text: 'Everything the trees and flowers and mountains in the sky look brighter because my windows are so clean.', by: 'Betsy R., Green Valley' } },
    ],
    quoted: [52],
    faq: [163, 173],
  },
  '/areas/saddlebrooke/the-preserve-at-saddlebrooke/': {
    sections: [
      { h: 'The Wildcat Club, no premium', p: 'Club pricing is standard pricing, locked in for the year, with no premium for joining. You pay after each visit, same as a one-time clean, and we handle the scheduling and reminders. One-time cleans are always available. [The Wildcat Club](/wildcat-club/)' },
      { h: 'Shower glass and mirrors', p: 'Shower glass, mirrors, glass doors and patio enclosures are all handled in the same visit.' },
    ],
    faq: [203, 44],
  },
  '/areas/marana/continental-ranch/': {
    sections: [
      { h: 'Rentals and absentee owners', p: 'We work with property managers, landlords and absentee owners regularly. Plenty of customers aren’t home, especially for exterior work, and we keep payment on file and charge after the job.' },
      { h: 'A quote without a site visit', p: 'We quote over the phone: we walk you through counting your panes and have a number for you on the spot. It usually takes a minute or two.' },
    ],
    faq: [158, 140],
  },
  '/areas/marana/the-highlands-at-dove-mountain/': {
    sections: [
      { h: 'Back for the season', p: 'Tell us when you’re arriving and we’ll have the house clean and ready before you walk in. You don’t need to be in town for us to do it.' },
      { h: '14 days of touch-ups', p: 'For 14 days after any service, if you want anything touched up for any reason, we come back and do it free: rain, dust, or a spot you noticed later. That’s the 14-Day Spotless Guarantee.' },
    ],
    faq: [238, 208],
  },
  '/areas/vail-az/del-webb-at-rocking-k/': {
    sections: [
      { h: 'Overspray on new glass', p: 'Builder dust, debris and construction cleanup on glass are regular work for us. Heavy paint or stucco overspray can be stubborn, but we usually get it with steel wool or a scraper. [New construction cleans](/who-we-help/builders-new-construction/)' },
      { h: 'No deposit', p: 'You don’t pay until the work is finished, we’ve walked it with you, and you’re happy.' },
    ],
    faq: [236, 22],
  },
  '/areas/casas-adobes/': {
    sections: [
      { h: 'Solar screens, west side first', p: 'West-facing windows come first, since afternoon sun hits them hardest, then south-facing. Solar screens block up to 80 to 90 percent of the sun’s heat and glare, depending on the mesh. [Solar screens](/services/solar-screens/)' },
      { h: 'Rain on the day', p: 'If it’s pouring, we reschedule. In a light drizzle we work through it, because with the tracks, sills, frames and screens clean there’s no dust left to wash back down. If weather ever does spot the glass, the 14-Day Spotless Guarantee covers it.' },
    ],
    faq: [222, 150],
  },
  '/areas/sahuarita/sonora-at-rancho-sahuarita/': {
    sections: [
      { h: 'Will the same crew come?', p: 'We try for continuity, but we can’t promise the same technician every visit. What we can promise is that every technician is trained to the same standard and held to the same guarantees.', q: { text: 'They do an excellent job and are very professional. They also clean the frames and tracks.', by: 'Irene G., Tucson, Sahuarita & Green Valley area' } },
      { h: 'Senior and veteran discounts', p: 'Both are available. Let us know when you call and we’ll take care of it. [Senior and veteran discounts](/guides/senior-and-veteran-discounts-window-cleaning/)' },
    ],
    quoted: [192],
    faq: [19, 20],
  },
  '/areas/oro-valley/vistoso-village/': {
    sections: [
      { h: 'Attached homes, priced by the pane', p: 'Every home is quoted per pane, meaning each individual piece of glass, not per hour or per window opening. We count them with you on the phone and you have the price on the spot.' },
      { h: 'Done in a few hours', p: 'A whole house takes anywhere from one to five hours depending on its size.', q: { text: 'Wildcat washers wash my windows today and did an excellent job. The work was done quickly and thoroughly.', by: 'Judy P., Oro Valley' } },
    ],
    quoted: [107],
    faq: [4, 148],
  },
  '/areas/catalina-foothills/la-paloma/': {
    sections: [
      { h: 'Streak free in the heat', p: 'In Arizona heat, solution dries on the glass before most people can pull it, which is where streaks come from. Our technicians are trained to work quickly and precisely, and we double check every pane before we leave.' },
      { h: 'Call, and we call back', p: 'There’s no online booking, and that’s on purpose. Call us or send a quick form and we’ll call you right back, because a real conversation is the best way to get your quote right.' },
    ],
    faq: [32, 240],
  },
};
for (const [url, a] of Object.entries(round13Add)) {
  const cur = depth[url];
  if (!cur) throw new Error(`round 13: no depth entry for ${url}`);
  const faq = cur.faq ?? [];
  depth[url] = { ...cur, sections: [...(cur.sections ?? []), ...a.sections], quoted: [...(cur.quoted ?? []), ...(a.quoted ?? [])], faq: [...faq, ...(a.faq ?? []).filter((n) => !faq.includes(n))] };
}

/* ============================== Round 14: next weakest service-in-town pages ==============================
   Appended like rounds 12 and 13. Every line traces to a Doc 6 answer or a fact bank line. */
const round14Add: Record<string, { sections: DepthSection[]; quoted?: number[]; faq?: number[] }> = {
  '/services/solar-panel-cleaning/green-valley/': {
    sections: [
      { h: 'Protecting the glass itself', p: 'Cleaning does more than restore output. It protects the panel’s glass surface from hard water and mineral damage, which protects the life of an expensive investment.' },
      { h: 'Windows and panels, one visit', p: 'Crews carry equipment for every service. Customers have posted that a whole house of windows plus solar panels took about three hours.', q: { text: 'Cleaned the windows, solar panels and Arizona room screens. Awesome job. Looks great.', by: 'Daniel C., Tucson, Sahuarita & Green Valley area' } },
    ],
    quoted: [230],
    faq: [157],
  },
  '/services/solar-screens/catalina-foothills/': {
    sections: [
      { h: 'What 80 and 90 mean', p: 'The 80 or 90 on a screen refers to heat and glare, not UV. SunTex 80 blocks about 75 percent of UV, so the two numbers aren’t the same thing.' },
      { h: 'East and north windows', p: 'East-facing windows get morning sun at a low angle: real heat gain, but during cooler hours. North-facing windows get little direct sun. The simple rule is that any window that gets sun is worth screening, and the more sun it gets, the more it’s worth.' },
    ],
    faq: [],
  },
  '/services/solar-panel-cleaning/marana/': {
    sections: [
      { h: 'Why panels here get dirty', p: 'The region’s arid climate and frequent winds put more dust in the air than most places, and it settles evenly across panels. Hard water from rain or irrigation dries into mineral deposits that further reduce efficiency.' },
      { h: 'What buildup costs', p: 'Research puts production loss anywhere from 5 to 30 percent, depending on how much has built up and local conditions. Your actual number depends on your panels, which is why every job gets before and after photos.' },
    ],
    faq: [52, 65],
  },
  '/services/solar-panel-cleaning/oro-valley/': {
    sections: [
      { h: 'Will production go up?', p: 'If the panels were dirty, yes: you’re removing what was blocking the light. How much depends on how much had built up, which is why we show you the before and after.' },
      { h: 'Commercial arrays too', p: 'We also clean commercial rooftop arrays, including on a recurring schedule.' },
    ],
    faq: [66, 68],
  },
  '/services/window-cleaning/casas-adobes/': {
    sections: [
      { h: 'Grates and tricky glass', p: 'Decorative metal grates over windows are handled without issue, and so is decorative glass taken down from a high window.' },
      { h: 'Inspected before we start', p: 'We inspect every window first and walk you through anything we find: existing chips, scratches, etching, failed seals or prior damage. You should never learn about pre-existing damage after the crew leaves.' },
    ],
    faq: [],
  },
  '/services/window-cleaning/sahuarita/': {
    sections: [
      { h: 'A double check before you see it', p: 'At the end of every job, the crew double checks all the work before you see anything. Then we walk the property with you, and nobody pays until that walkthrough is done and you’re satisfied.', q: { text: 'They also double inspected their work just to make sure they didn\'t miss anything.', by: 'Patty S., Tucson, Sahuarita & Green Valley area' } },
    ],
    quoted: [139],
    faq: [188],
  },
  '/services/solar-panel-cleaning/sahuarita/': {
    sections: [
      { h: 'The water we use', p: 'Deionized water is ideal because it dries clean and leaves nothing behind. We use it with hand washing, and soap when the buildup calls for it.' },
      { h: 'Added to a window visit', p: 'Adding solar panel cleaning to a window cleaning appointment costs less than two separate visits, and our trucks carry equipment for every service.', q: { text: 'I also had them do our solar panels!! Very happy!!', by: 'Mike K., Tucson, Sahuarita & Green Valley area' } },
    ],
    quoted: [194],
    faq: [59, 157],
  },
  '/services/window-cleaning/catalina-foothills/': {
    sections: [
      { h: 'Mirrors, glass doors and high interior glass', p: 'Mirrors, skylights, glass doors, shower glass, patio enclosures and high interior glass are all handled, usually counted as additional panes.' },
      { h: 'Anything else, same day', p: 'Crews carry equipment for every service, so anything spotted during the inspection can usually be added and finished the same day. If you want to think it over, we send you an estimate instead.' },
    ],
    faq: [],
  },
  '/services/window-cleaning/oro-valley/': {
    sections: [
      { h: 'Who comes, and for how long', p: 'A residential crew is usually two technicians, sometimes one. A whole house takes anywhere from one to five hours depending on its size.', q: { text: 'Wildcat Washers - Oro Valley and Marana Window Cleaning I highly recommend!', by: 'Trish P., Oro Valley' } },
    ],
    quoted: [113],
    faq: [],
  },
  '/services/window-cleaning/vail-az/': {
    sections: [
      { h: 'Inside on the same schedule', p: 'Inside and out is the default and what we recommend, and interiors are cleaned on the same schedule as exteriors. Exterior only and interior only are available too.' },
      { h: 'Sliding doors and their rails', p: 'Sliding glass doors and their rails are part of the job, not an extra.' },
    ],
    faq: [],
  },
  '/services/solar-screens/oro-valley/': {
    sections: [
      { h: 'Colors to match stucco', p: 'Any color and any shade, fully custom. The most common choices are 80 and 90 percent mesh in black or beige, and beige is usually picked to match stucco.' },
      { h: 'Warranty on material and work', p: 'Solar screens come with a warranty on the material and on our work, and we’re glad to go over the terms.' },
    ],
    faq: [],
  },
  '/services/window-cleaning/saddlebrooke/': {
    sections: [
      { h: 'Getting a quote', p: 'Call (520) 525-0084 or fill out the short form on our site and we’ll call you right back. Quotes usually take a minute or two.' },
      { h: 'No deposit', p: 'You don’t pay until the work is finished, we’ve walked it with you, and you’re happy.' },
    ],
    faq: [139, 22],
  },
  '/services/solar-screens/green-valley/': {
    sections: [
      { h: 'Clean screens, cleaner windows', p: 'Clean solar screens keep the windows cleaner longer, since dirty screens shed dust back onto freshly cleaned glass.', q: { text: 'Had my outdoor windows done outside first time with these guys and my sunscreens never looked better.', by: 'Sherry C., Tucson, Sahuarita & Green Valley area' } },
      { h: 'Priced per screen', p: 'New solar screens are priced per screen, based on size, with quantity discounts on larger jobs.' },
    ],
    quoted: [182],
    faq: [],
  },
  '/services/window-cleaning/green-valley/': {
    sections: [
      { h: 'Hand washed, pane by pane', p: 'Hand scrubbing, washing and squeegeeing is how most residential glass gets cleaned, because being right at the glass allows far more attention to detail.', q: { text: 'They did a good job. No spots or streaks. Great green valley window cleaners.', by: 'Richard S., Green Valley' } },
    ],
    quoted: [28],
    faq: [],
  },
  '/services/window-cleaning/marana/': {
    sections: [
      { h: 'If you’re not happy, you don’t pay', p: 'Our guarantee covers every service, every visit. We don’t leave until it’s right, and if something ever comes up after you’ve paid, we make it right, including a refund.' },
      { h: 'Why skipping cleanings costs more', p: 'Minerals left on glass long enough etch into it permanently, and etched glass gets replaced, not cleaned. Regular cleaning prevents that entirely.' },
    ],
    faq: [186, 170],
  },
};
for (const [url, a] of Object.entries(round14Add)) {
  const cur = depth[url];
  if (!cur) throw new Error(`round 14: no depth entry for ${url}`);
  const faq = cur.faq ?? [];
  depth[url] = { ...cur, sections: [...(cur.sections ?? []), ...a.sections], quoted: [...(cur.quoted ?? []), ...(a.quoted ?? [])], faq: [...faq, ...(a.faq ?? []).filter((n) => !faq.includes(n))] };
}

/* ============================== Round 15: next weakest pages ==============================
   Appended like rounds 12 to 14. Every line traces to a Doc 6 answer or a fact bank line. */
const round15Add: Record<string, { sections: DepthSection[]; quoted?: number[]; faq?: number[] }> = {
  '/services/solar-panel-cleaning/oro-valley/': {
    sections: [
      { h: 'One membership, several schedules', p: 'Several services can be bundled into one Wildcat Club membership, each on its own schedule: windows three times a year, solar panels once or twice. [The Wildcat Club](/wildcat-club/)' },
      { h: 'Pigeon proofing before the birds', p: 'An array with no birds yet is the cheapest one to protect, since there’s no nesting or droppings to clear out first. [Solar panel pigeon proofing](/services/solar-panel-pigeon-proofing/)' },
    ],
  },
  '/services/window-cleaning/tanque-verde/': {
    sections: [
      { h: 'Arizona rooms and screen enclosures', p: 'Screens are scrubbed with a brush and cleaning solution, pressure washed from the inside out, then from the outside in with a surface cleaner, and the floor gets cleaned too. The mesh comes out looking new.' },
      { h: 'Roofs, case by case', p: 'We pressure wash roofs as well, any roof type, most often for heavy dust, dirt or bird droppings. Give us a call and we’ll talk it through.' },
    ],
  },
  '/services/solar-panel-cleaning/green-valley/': {
    sections: [
      { h: 'Droppings, bagged and hauled', p: 'Droppings are a genuine biohazard. Crews wear protective equipment, bag everything and haul it away, so you never have to handle any of it.' },
      { h: 'Before you call pest control', p: 'Customers have told us we came in at a fraction of what pest control quoted them for the same work, and we clean the panels while we’re up there.' },
    ],
  },
  '/areas/marana/sunflower-at-continental-ranch/': {
    sections: [
      { h: 'Why three times a year', p: 'The three-visit rhythm was set for Tucson’s dust and hard water, not borrowed from a generic plan. Each visit clears minerals before they can harm the glass, and nobody gets a crew more often than the house needs.' },
      { h: 'Tipping', p: 'Nobody on the crew expects one. If you do leave something, it goes in full to the people who cleaned your windows.' },
    ],
  },
  '/services/pressure-washing/green-valley/': {
    sections: [
      { h: 'Walkways, entries and gates', p: 'Walkways, sidewalks, entryways, porches, gates and doors are all in scope: anywhere dirt, dust and debris build up around the outside of a property.', q: { text: 'These young men power washed my walkway and trash cans today.', by: 'Karen C., Tucson, Sahuarita & Green Valley area' } },
      { h: 'Before the painters come', p: 'Paint won’t bond properly to a dusty surface, so pre-paint prep washing is exactly what a paint job needs. Homeowners and painting contractors both use us for it. [Pre-paint prep](/services/pressure-washing/pre-paint-prep/)' },
    ],
    quoted: [238],
  },
  '/services/window-cleaning/oro-valley/': {
    sections: [
      { h: 'Club members save on add-ons', p: 'On a Wildcat Club membership, anything added to a window visit is 10 percent less, whether that’s panels on the roof, new or cleaned screens, a driveway or a pigeon barrier.' },
      { h: 'Covered for 14 days', p: 'If a monsoon shower, a sprinkler or a dusty afternoon marks the glass within two weeks of your visit, call or text and we come back to touch it up at no charge. That’s the 14-Day Spotless Guarantee.' },
    ],
  },
  '/services/window-cleaning/casas-adobes/': {
    sections: [
      { h: 'Cleaning or washing?', p: 'Casas Adobes customers ask for both, and they mean the same 5-in-1 visit either way.' },
      { h: 'How soon we can come', p: 'Crews are out seven days a week, so a visit usually lands within a week or two of your call, and sometimes sooner.' },
    ],
  },
  '/areas/catalina-foothills/skyline-country-club/': {
    sections: [
      { h: 'If something breaks', p: 'Accidents are rare because every pane is checked with you before work begins. If one ever happened, you’d be told on the spot, and our insurance covers putting it right.' },
      { h: 'Ladders and gutters', p: 'Careful ladder placement keeps gutters safe on two-story custom homes. If one were ever damaged, that’s on us, and it’s insured.' },
    ],
  },
  '/areas/marana/del-webb-at-dove-mountain/': {
    sections: [
      { h: 'The Wildcat Club', p: 'Members get the three seasonal window visits booked for them at a rate that holds for the year, and pay after each one. A single clean is always an option too. [The Wildcat Club](/wildcat-club/)' },
      { h: 'Solar panels too', p: 'Rooftop or ground mount, any panel type, any roof pitch. Once or twice a year keeps them performing. [Solar panel cleaning in Marana](/services/solar-panel-cleaning/marana/)' },
    ],
  },
  '/services/window-cleaning/sahuarita/': {
    sections: [
      { h: 'Shower glass and mirrors', p: 'Bathroom mirrors, shower doors, glass doors and patio enclosures can all be done while the crew is already there.', q: { text: 'Wildcat Washers cleaned our windows today and did a great job!', by: 'Maria-Lyn N., Tucson, Sahuarita & Green Valley area' } },
    ],
    quoted: [198],
  },
  '/services/solar-panel-cleaning/sahuarita/': {
    sections: [
      { h: 'What pigeon proofing includes', p: 'Along with the mesh, pigeon proofing includes a full panel cleaning while we’re up there, roof cleaning in the affected area, and a roof and panel inspection with before-and-after photos.' },
    ],
  },
  '/services/solar-panel-cleaning/marana/': {
    sections: [
      { h: 'Doing it yourself', p: 'It’s possible, but a roof, a fragile panel and the wrong water are real risks. Keep the pressure washer and stiff brushes away, and never step on the panels.' },
    ],
  },
  '/areas/green-valley/las-campanas/': {
    sections: [
      { h: 'Same pricing in Green Valley', p: 'Las Campanas homes are priced exactly like every other home we serve: by the pane, with no trip charge, and quoted on a short call.', q: { text: 'We are very pleased with the window cleaning and the customer service.', by: 'Lyle L., Green Valley' } },
      { h: 'Wash It Forward started here', p: 'Our annual free community cleaning began in Green Valley, at the Santa Rita Fire Department. [Wash It Forward](/wash-it-forward/)' },
    ],
    quoted: [24],
  },
  '/services/window-cleaning/catalina-foothills/': {
    sections: [
      { h: 'What a pro does differently', p: 'On big Foothills glass the difference shows: no streaks even in afternoon heat, minerals removed without scratching, frames through screens included, high panes reached safely, and the house finished in hours.' },
      { h: 'Comparing quotes', p: 'Line quotes up on three points: how the glass is counted, whether screens and tracks are in it, and what happens if you’re not happy. A glass-only price can look lower and deliver less.' },
    ],
  },
  '/areas/catalina-foothills/sin-vacas/': {
    sections: [
      { h: 'Proof of insurance', p: 'Behind a guard gate, it’s reasonable to want paperwork first. We’ll send a certificate of insurance before the visit.' },
      { h: 'Awards you can check', p: 'We’re the 2026 Arizona Daily Star Readers’ Choice Winner for Best Window Cleaning and BBB Accredited. [All our awards](/awards/)' },
    ],
  },
};
for (const [url, a] of Object.entries(round15Add)) {
  const cur = depth[url];
  if (!cur) throw new Error(`round 15: no depth entry for ${url}`);
  const faq = cur.faq ?? [];
  depth[url] = { ...cur, sections: [...(cur.sections ?? []), ...a.sections], quoted: [...(cur.quoted ?? []), ...(a.quoted ?? [])], faq: [...faq, ...(a.faq ?? []).filter((n) => !faq.includes(n))] };
}

/* ============================== Round 16: next weakest pages ==============================
   Appended like rounds 12 to 15, worded apart from the pages that own each fact. Every line traces to a Doc 6 answer or a fact bank line. */
const round16Add: Record<string, { sections: DepthSection[]; quoted?: number[]; faq?: number[] }> = {
  '/services/solar-screens/catalina-foothills/': {
    sections: [
      { h: 'The room that always runs hot', p: 'Most houses have one room that heats up every afternoon. Screening its windows makes it noticeably more comfortable and takes the edge off the glare.' },
      { h: 'Keeping furnishings from fading', p: 'Stopping UV at the screen, before it reaches the glass, helps keep furniture, floors, artwork and window treatments from fading.' },
    ],
  },
  '/areas/oro-valley/rancho-vistoso/': {
    sections: [
      { h: 'Dozens of gated villages', p: 'Rancho Vistoso covers the north end of Oro Valley, with dozens of gated villages, golf and trailheads into the Tortolitas. Whichever village is yours, the visit and the pricing work the same way.' },
      { h: 'Timing that fits your day', p: 'Crews are out seven days a week and flexible about timing, so the visit can fit around your schedule.', q: { text: 'They did a good job, even with the sun starting to go down.', by: 'Annette G., Oro Valley' } },
    ],
    quoted: [109],
  },
  '/areas/saddlebrooke/saddlebrooke-ranch/': {
    sections: [
      { h: 'Homes still going up', p: 'SaddleBrooke Ranch is still being built. On a newly finished home, the first clean takes builder dust and debris off the glass; heavy paint or stucco overspray usually comes off with steel wool or a scraper, though it can be stubborn.', q: { text: 'Had great service!', by: 'Wonona & Jerry D., SaddleBrooke Ranch' } },
      { h: 'Oracle, just up the road', p: 'Oracle, the small mountain town just north with its older hillside custom homes, is on our routes as well.' },
    ],
    quoted: [135],
  },
  '/areas/vail-az/del-webb-at-rancho-del-lago/': {
    sections: [
      { h: 'The 55+ side of Rancho del Lago', p: 'This is the 55+ golf section of Rancho del Lago, the master-planned golf community on the north side of Vail, and it sits on our regular Rincon Valley routes.' },
      { h: 'Seniors and veterans', p: 'Seniors and veterans each get a discount. Bring it up on the quote call. [Senior and veteran discounts](/guides/senior-and-veteran-discounts-window-cleaning/)' },
    ],
  },
  '/areas/oro-valley/stone-canyon/': {
    sections: [
      { h: 'Among the boulders', p: 'Custom homes set among the boulders at the top of Rancho Vistoso tend to carry enormous, specialty glass. Coatings and films are identified before anything touches a pane, and no type of glass is turned away.', q: { text: 'Great team of personable young men did professional job on my home in Oro Valley', by: 'Diane, Oro Valley' } },
    ],
    quoted: [106],
  },
  '/areas/saddlebrooke/saddlebrooke-two/': {
    sections: [
      { h: 'The larger, north-side HOA', p: 'SaddleBrooke Two is the bigger of the two HOAs, on the north side, and residents know it by name. We have customers all through it.' },
      { h: 'Adding a service costs less for members', p: 'On a Wildcat Club membership, anything added to a window visit, like the panels or a patio, is 10 percent less.' },
    ],
  },
  '/areas/tucson/sam-hughes/': {
    sections: [
      { h: 'Original glass, handled with care', p: 'Many Sam Hughes owners are keeping original windows, so each one is looked over before we start. Existing chips, scratches or failed seals get pointed out to you first.', q: { text: 'The guys showed up on time, we\'re professional and explained everything I needed to know!', by: 'Kathy B., Tucson' } },
    ],
    quoted: [92],
  },
  '/areas/green-valley/springs-at-canoa/': {
    sections: [
      { h: 'Inside and outside, one visit', p: 'Most Springs at Canoa customers have both sides of the glass done together, since the full 5-in-1 covers inside and out in a single trip.', q: { text: 'Three guys swept in to our home in Green Valley AZ....cleaned all windows inside and out. Very happy with results and pricing.', by: 'Mark G., Green Valley' } },
    ],
    quoted: [30],
  },
  '/services/solar-screens/green-valley/': {
    sections: [
      { h: 'Easy to take down', p: 'Each screen is held by brackets screwed into the house, which keeps it secure without any risk to the window. The brackets rotate, so you can pop a screen out yourself by loosening the hardware.' },
    ],
  },
  '/services/window-cleaning/vail-az/': {
    sections: [
      { h: 'Dogs at home are fine', p: 'Our crews like animals and are gentle with them, so there’s no need to shut the dog away for the day.' },
      { h: 'Quoted from your kitchen table', p: 'Nobody needs to come out and look. Count the panes with us on the phone and the price is settled on the same call.' },
    ],
  },
  '/services/window-cleaning/saddlebrooke/': {
    sections: [
      { h: 'Mirrors and shower doors', p: 'Bathroom mirrors, shower doors and patio enclosures can be done while the crew is already inside.' },
      { h: 'Three visits, booked for you', p: 'Wildcat Club members have all three seasonal visits scheduled for them at a rate that holds for the year, with reminders along the way.' },
    ],
  },
  '/areas/saddlebrooke/saddlebrooke-one/': {
    sections: [
      { h: 'The original, south side', p: 'SaddleBrooke One is the original HOA, on the south side, and residents use the name. We have customers throughout it.' },
      { h: 'Panels on the roof', p: 'Rooftop arrays of any type and pitch get a hand wash with pure water, once or twice a year, with photos of the roof you can’t see. [Solar panel cleaning](/services/solar-panel-cleaning/)' },
    ],
  },
  '/services/solar-screens/oro-valley/': {
    sections: [
      { h: 'Pets, mildew and lead', p: 'The Phifer mesh we use is pet-resistant, mildew-resistant and lead-free.' },
      { h: 'A skin-health connection', p: 'Phifer is a member of the Skin Cancer Foundation’s Corporate Council.' },
    ],
  },
  '/services/window-cleaning/green-valley/': {
    sections: [
      { h: 'Screens out, every visit', p: 'A clean pane behind a dusty screen doesn’t stay clean long, so screens come out, get reconditioned and go back in on every visit.', q: { text: 'The young men that helped clean my windows and screens in green valley did a great job!', by: 'Sherwood M., Green Valley' } },
    ],
    quoted: [12],
  },
  '/services/solar-panel-cleaning/green-valley/': {
    sections: [
      { h: 'Ground mounts too', p: 'Arrays on the ground get the same careful hand wash as rooftop panels.' },
      { h: 'Businesses and communities', p: 'Commercial rooftop arrays are cleaned too, and they can run on a recurring schedule.' },
    ],
  },
};
for (const [url, a] of Object.entries(round16Add)) {
  const cur = depth[url];
  if (!cur) throw new Error(`round 16: no depth entry for ${url}`);
  const faq = cur.faq ?? [];
  depth[url] = { ...cur, sections: [...(cur.sections ?? []), ...a.sections], quoted: [...(cur.quoted ?? []), ...(a.quoted ?? [])], faq: [...faq, ...(a.faq ?? []).filter((n) => !faq.includes(n))] };
}

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

