/**
 * Depth copy from the research thread (/mnt/project-files/aeo-geo/depth-round-1..3.md),
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
  faq?: number[];
};

/** FAQ shown on every window × town page, linked to its owner (no schema here). */
const windowFaqs = [25, 34, 159, 187];
const threeAYear = (club = true) =>
  `Right after summer and monsoon season, around the holidays, and in spring. That spacing stops mineral buildup before it can etch the glass.${club ? ' The [Wildcat Club](/wildcat-club/) books all three visits for you.' : ''}`;

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
      { h: 'Here all year, or here for the season', p: 'Seasonal owners usually have us come right when they arrive, so the house is ready the day they get back. Tell us your arrival date and we’ll schedule it; you don’t need to be home. Year-round residents get the same three-a-year rhythm, and the [Wildcat Club](/wildcat-club/) books it for you.' },
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
      { h: 'Let the Club keep track', p: 'The [Wildcat Club](/wildcat-club/) is three visits a year, scheduled for you with reminders, plus 10 percent off added services.' },
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
    proof: [247],
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
    ],
    proof: [94],
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
    proof: [77],
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
      { h: 'For homeowners', p: 'The 5-in-1 Deep Clean, three times a year. [Wildcat Club](/wildcat-club/) members get all three visits scheduled automatically. Next door, see [SaddleBrooke Two](/areas/saddlebrooke/saddlebrooke-two/).' },
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
    proof: [123, 127],
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

/** Proof reviews in order, skipping withheld ones; R121-style town labels applied. */
export function proofReviews(d?: Depth): Review[] {
  if (!d?.proof) return [];
  return d.proof
    .map((n) => review(n))
    .filter((r): r is Review => Boolean(r))
    .map((r) => (d.proofAsTown?.includes(r.n) ? { ...r, detail: '' } : r));
}

