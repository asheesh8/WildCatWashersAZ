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

/** Hero loop per service hub. */
export const serviceLoop: Record<string, string> = {
  'window-cleaning': 'crew-slider-patio',
  'solar-panel-cleaning': 'solar-clean-reflection',
  'solar-screens': 'solar-screens-rinse',
};

/** "See it done" strip on the window cleaning page. */
export const windowStrip = ['lather-squeegee', 'squeegee-pov', 'french-door-panes'];

/** A loop shown under the answer on a few guide pages. */
export const guideLoop: Record<string, string> = {
  'cleaning-divided-light-french-pane-windows': 'french-door-panes',
  'can-i-clean-my-own-windows': 'lather-squeegee',
  'why-do-my-windows-streak': 'squeegee-pov',
  'can-i-clean-my-own-solar-panels': 'solar-clean-reflection',
  'how-long-do-solar-screens-last': 'solar-screens-rinse',
};
