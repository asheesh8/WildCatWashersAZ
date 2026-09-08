/** A shared motion language: flowing soap, rinsing photographs and tactile frames. */
export function mountWashWorld() {
  const world = document.querySelector<HTMLElement>('.wash-world');
  if (!world || world.dataset.motionMounted) return;
  world.dataset.motionMounted = 'true';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(pointer: fine)');
  const toggle = world.querySelector<HTMLButtonElement>('[data-motion-toggle]');
  const photos = [...world.querySelectorAll<HTMLElement>('[data-photo-motion]')];
  const visible = new Set<HTMLElement>();
  let paused = false;
  let frame = 0;
  let activePhoto: HTMLElement | null = null;
  let pointer: { x: number; y: number } | null = null;
  const clamp = (n: number, min = 0, max = 1) => Math.max(min, Math.min(max, n));

  function syncMotion() {
    const stopped = paused || reduced.matches;
    document.documentElement.classList.toggle('wash-motion-paused', stopped);
    toggle?.setAttribute('aria-pressed', String(stopped));
    if (toggle) {
      toggle.setAttribute('aria-label', stopped ? 'Resume page animations' : 'Pause page animations');
      toggle.querySelector('span')!.textContent = stopped ? 'PLAY MOTION' : 'PAUSE MOTION';
      toggle.querySelector('i')!.textContent = stopped ? '▷' : 'Ⅱ';
      toggle.hidden = reduced.matches;
    }
    document.dispatchEvent(new CustomEvent('wildcat:motion', { detail: { paused: stopped } }));
    if (stopped) photos.forEach(p => { p.style.setProperty('--tilt-x', '0deg'); p.style.setProperty('--tilt-y', '0deg'); });
    else schedule();
  }
  toggle?.addEventListener('click', () => { paused = !paused; syncMotion(); });
  reduced.addEventListener('change', syncMotion);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const el = entry.target as HTMLElement;
      el.classList.toggle('wash-visible', entry.isIntersecting);
      if (el.matches('[data-photo-motion]')) {
        if (entry.isIntersecting) visible.add(el); else visible.delete(el);
      }
    });
    schedule();
  }, { rootMargin: '60px', threshold: 0 });
  photos.forEach(p => observer.observe(p));
  world.querySelectorAll<HTMLElement>('[data-wash-backdrop], .brand-marquee').forEach(el => observer.observe(el));
  const resizeObserver = new ResizeObserver(entries => entries.forEach(entry => {
    (entry.target as HTMLElement).style.setProperty('--wash-distance', `${entry.contentRect.height + 440}px`);
  }));
  world.querySelectorAll<HTMLElement>('[data-wash-backdrop]').forEach(el => resizeObserver.observe(el));

  function draw() {
    frame = 0;
    if (paused || reduced.matches || document.hidden) return;
    visible.forEach(photo => {
      const r = photo.getBoundingClientRect();
      const progress = clamp((innerHeight - r.top) / (innerHeight + r.height));
      photo.style.setProperty('--photo-progress', progress.toFixed(4));
      photo.style.setProperty('--rinse-progress', clamp((innerHeight - r.top) / (r.height + innerHeight * .3)).toFixed(4));
    });
    if (activePhoto && pointer) {
      const r = activePhoto.getBoundingClientRect();
      const x = clamp((pointer.x - r.left) / r.width), y = clamp((pointer.y - r.top) / r.height);
      activePhoto.style.setProperty('--tilt-x', `${(0.5 - y) * 7}deg`);
      activePhoto.style.setProperty('--tilt-y', `${(x - 0.5) * 9}deg`);
      activePhoto.style.setProperty('--shine-x', `${x * 100}%`);
      activePhoto.style.setProperty('--shine-y', `${y * 100}%`);
    }
  }
  function schedule() { if (!frame && !paused && !reduced.matches) frame = requestAnimationFrame(draw); }
  photos.forEach(photo => {
    const reset = () => {
      photo.classList.remove('is-polishing');
      photo.style.setProperty('--tilt-x', '0deg'); photo.style.setProperty('--tilt-y', '0deg');
      if (activePhoto === photo) { activePhoto = null; pointer = null; }
    };
    photo.addEventListener('pointerenter', event => {
      if (!fine.matches || event.pointerType === 'touch' || reduced.matches || paused) return;
      activePhoto = photo;
      photo.classList.add('is-polishing');
      pointer = { x: event.clientX, y: event.clientY }; schedule();
    });
    photo.addEventListener('pointermove', event => {
      if (activePhoto !== photo) return;
      pointer = { x: event.clientX, y: event.clientY }; schedule();
    });
    photo.addEventListener('pointerleave', reset);
    photo.addEventListener('pointercancel', reset);
  });

  // The review row is naturally swipeable on small screens; buttons offer the same control.
  const reviews = world.querySelector<HTMLElement>('[data-review-track]');
  world.querySelectorAll<HTMLButtonElement>('[data-review-step]').forEach(button => {
    button.addEventListener('click', () => {
      if (!reviews) return;
      const direction = Number(button.dataset.reviewStep);
      const card = reviews.querySelector<HTMLElement>('.home-review');
      const step = (card?.getBoundingClientRect().width || reviews.clientWidth) + 18;
      reviews.scrollBy({ left: direction * step, behavior: paused || reduced.matches ? 'instant' : 'smooth' });
    });
  });
  function syncReviewButtons() {
    if (!reviews) return;
    const previous = world.querySelector<HTMLButtonElement>('[data-review-step="-1"]');
    const next = world.querySelector<HTMLButtonElement>('[data-review-step="1"]');
    if (previous) previous.disabled = reviews.scrollLeft < 2;
    if (next) next.disabled = reviews.scrollLeft >= reviews.scrollWidth - reviews.clientWidth - 2;
  }
  reviews?.addEventListener('scroll', syncReviewButtons, { passive: true });
  addEventListener('resize', syncReviewButtons, { passive: true });
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule, { passive: true });
  document.addEventListener('visibilitychange', () => {
    document.documentElement.classList.toggle('wash-tab-hidden', document.hidden);
    if (!document.hidden) schedule();
  });
  addEventListener('pagehide', event => { if (!event.persisted) { observer.disconnect(); resizeObserver.disconnect(); cancelAnimationFrame(frame); } });
  syncMotion(); syncReviewButtons(); schedule();
}
