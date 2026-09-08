/* Native scrolling drives composition; no wheel interception or forced scroll positions. */
export function mountImmersiveScroll(){
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const hero=document.querySelector<HTMLElement>('[data-hero-scene]');
 const sections=[...document.querySelectorAll<HTMLElement>('.home-intro,.home-services,.home-proof,.home-promise')];
 let paused=false;
 let frame=0;const visible=new Set<HTMLElement>();
 const observer=new IntersectionObserver(entries=>{entries.forEach(e=>e.isIntersecting?visible.add(e.target as HTMLElement):visible.delete(e.target as HTMLElement));schedule();},{rootMargin:'100px'});
 sections.forEach(s=>observer.observe(s));
 const clamp=(n:number)=>Math.max(0,Math.min(1,n));
 function draw(){frame=0;if(reduced.matches||paused)return;const h=innerHeight;
  if(hero){const r=hero.getBoundingClientRect();hero.style.setProperty('--hero-scroll',String(clamp(-r.top/r.height)));}
  visible.forEach(el=>{const r=el.getBoundingClientRect();el.style.setProperty('--section-progress',String(clamp((h-r.top)/(h+r.height))));});
 }
 function schedule(){if(!frame&&!reduced.matches&&!paused)frame=requestAnimationFrame(draw);}
 document.addEventListener('wildcat:motion',event=>{paused=(event as CustomEvent).detail.paused;schedule();});
 addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule,{passive:true});reduced.addEventListener('change',schedule);schedule();
 addEventListener('pageshow',schedule);
 addEventListener('pagehide',event=>{if(event.persisted)return;observer.disconnect();cancelAnimationFrame(frame);removeEventListener('scroll',schedule);removeEventListener('resize',schedule);},{once:true});
}
