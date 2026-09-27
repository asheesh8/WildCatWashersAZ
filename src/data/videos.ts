/**
 * Short muted loops of real Wildcat Washers jobs (public/media/). Each clip was
 * checked frame by frame: no old phone number, no customer faces up close.
 * The source clips with the retired number on a flyer or shirt were not used.
 */
export type Loop = { src: string; poster: string; label: string; portrait?: boolean };

export const loops: Record<string, Loop> = {
  'crew-slider-patio': { src: '/media/crew-slider-patio.mp4', poster: '/media/crew-slider-patio.jpg', label: 'A Wildcat Washers technician squeegeeing tall patio sliders from a step ladder' },
  'lather-squeegee': { src: '/media/lather-squeegee.mp4', poster: '/media/lather-squeegee.jpg', label: 'Soap lather on a window, cleared with a squeegee stroke', portrait: true },
  'squeegee-pov': { src: '/media/squeegee-pov.mp4', poster: '/media/squeegee-pov.jpg', label: 'A brass squeegee pulling water off a large window', portrait: true },
  'french-door-panes': { src: '/media/french-door-panes.mp4', poster: '/media/french-door-panes.jpg', label: 'Hand washing and squeegeeing each small pane of a French door', portrait: true },
  'solar-clean-reflection': { src: '/media/solar-clean-reflection.mp4', poster: '/media/solar-clean-reflection.jpg', label: 'Solar panels mid-clean, the clean glass reflecting the sky', portrait: true },
  'solar-screens-rinse': { src: '/media/solar-screens-rinse.mp4', poster: '/media/solar-screens-rinse.jpg', label: 'Solar screens lined up against a wall being rinsed', portrait: true },
};

/**
 * "See it done" clips just below the hero on a service hub. Doc 7 keeps video
 * out of the hero itself: the hero stays a still photo, film sits below it.
 */
export const seeItDone: Record<string, string[]> = {
  'window-cleaning': ['lather-squeegee', 'squeegee-pov', 'french-door-panes'],
  'solar-panel-cleaning': ['solar-clean-reflection'],
  'solar-screens': ['solar-screens-rinse'],
};

/** One line beside a single clip (Doc 1 method facts). */
export const seeItDoneLede: Record<string, string> = {
  'solar-panel-cleaning': 'Hand washing and deionized water, with soap when the buildup needs it. No harsh chemicals and no stiff brushes, and you get before-and-after photos of your own roof.',
  'solar-screens': 'Solar screens come off, get washed and go back on, which also keeps freshly cleaned glass cleaner longer. New screens are custom measured, built and installed.',
};

/** A loop shown under the answer on a few guide pages. */
export const guideLoop: Record<string, string> = {
  'cleaning-divided-light-french-pane-windows': 'french-door-panes',
  'can-i-clean-my-own-windows': 'lather-squeegee',
  'why-do-my-windows-streak': 'squeegee-pov',
  'can-i-clean-my-own-solar-panels': 'solar-clean-reflection',
  'how-long-do-solar-screens-last': 'solar-screens-rinse',
};
