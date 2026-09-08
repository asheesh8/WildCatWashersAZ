/* Direct-manipulation glass. The clean image never blurs; only the removable layer does. */
type Stroke = { ax:number; ay:number; bx:number; by:number; aa:number; ba:number; half:number; thick:number };
type Tool = { move:(x:number,y:number,angle:number,visible:boolean)=>void; resize:(width:number,height:number,blade:number)=>void; dispose:()=>void };

export function mountGlassScene(stage: HTMLElement) {
 if(stage.dataset.mounted)return;
 stage.dataset.mounted='true';
 const canvas=stage.querySelector<HTMLCanvasElement>('[data-clean-frost]')!;
 const ctx=canvas.getContext('2d');
 const picture=stage.querySelector<HTMLImageElement>('[data-clean-image]')!;
 const surface=stage.querySelector<HTMLElement>('[data-clean-surface]')!;
 const reveal=stage.querySelector<HTMLButtonElement>('[data-reveal-view]')!;
 const reset=stage.querySelector<HTMLButtonElement>('[data-reset-clean]')!;
 const touchButton=stage.querySelector<HTMLButtonElement>('[data-touch-clean]')!;
 const instruction=stage.querySelector<HTMLElement>('[data-clean-instruction]')!;
 const announcement=stage.querySelector<HTMLElement>('[data-clean-announcement]')!;
 const fallback=stage.querySelector<HTMLElement>('[data-tool-fallback]')!;
 const coarse=matchMedia('(pointer: coarse)');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 if(!ctx){stage.classList.add('clean-unavailable');return;}
 let width=1,height=1,blade=150,dpr=1,touchMode=false,revealed=false;
 let last:{x:number;y:number;angle:number}|null=null,tool:Tool|null=null;
 let keyboard={x:.5,y:.5};
 let strokes:Stroke[]=[];
 const coverage=new Uint8Array(48*28);let covered=0;
 let paintFrame=0;let pendingPoint:{x:number;y:number}|null=null;
 const clamp=(v:number,a:number,b:number)=>Math.max(a,Math.min(b,v));
 const announce=(message:string)=>{announcement.textContent=message;};
 function updateInstruction(){instruction.textContent=coarse.matches?'Touch the glass. Let a little sunshine in.':'Move your mouse. Make yourself a better view.';}
 updateInstruction();coarse.addEventListener('change',updateInstruction);
 function rand(seed:number){const v=Math.sin(seed*127.1+311.7)*43758.5453;return v-Math.floor(v);}
 function erase(s:Stroke){
  if(!ctx)return;
  const ax=s.ax*width,ay=s.ay*height,bx=s.bx*width,by=s.by*height;
  const half=s.half*width,thick=s.thick*height;
  const dax=Math.cos(s.aa)*half,day=Math.sin(s.aa)*half,dbx=Math.cos(s.ba)*half,dby=Math.sin(s.ba)*half;
  ctx.save();ctx.globalCompositeOperation='destination-out';ctx.fillStyle='#000';ctx.strokeStyle='#000';ctx.lineWidth=thick;ctx.lineCap='round';ctx.lineJoin='round';
  ctx.beginPath();ctx.moveTo(ax-dax,ay-day);ctx.lineTo(ax+dax,ay+day);ctx.lineTo(bx+dbx,by+dby);ctx.lineTo(bx-dbx,by-dby);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();
 }
 function paint(){
  if(!ctx)return;
  ctx.globalCompositeOperation='source-over';ctx.clearRect(0,0,width,height);
  if(picture.complete&&picture.naturalWidth){
   const scale=Math.max(width/picture.naturalWidth,height/picture.naturalHeight)*1.06;
   const iw=picture.naturalWidth*scale,ih=picture.naturalHeight*scale;
   ctx.save();ctx.filter='blur(18px) saturate(.55)';ctx.drawImage(picture,(width-iw)/2,(height-ih)/2,iw,ih);ctx.restore();
  }else{ctx.fillStyle='#b8d6dd';ctx.fillRect(0,0,width,height);}
  const fog=ctx.createLinearGradient(0,0,width,height);fog.addColorStop(0,'rgba(229,239,238,.74)');fog.addColorStop(.47,'rgba(213,230,228,.66)');fog.addColorStop(1,'rgba(168,202,216,.82)');ctx.fillStyle=fog;ctx.fillRect(0,0,width,height);
  // Quiet, irregular wash marks and droplets across the removable surface.
  ctx.save();ctx.lineCap='round';ctx.lineWidth=34;ctx.strokeStyle='rgba(255,255,255,.045)';
  for(let i=0;i<12;i++){const y=rand(i+4)*height;ctx.beginPath();ctx.moveTo(-50,y);ctx.bezierCurveTo(width*.3,y-90,width*.65,y+150,width+50,y-20);ctx.stroke();}ctx.restore();
  for(let i=0;i<Math.min(340,Math.floor(width*height/2200));i++){
   const x=rand(i*3+2)*width,y=rand(i*3+3)*height,r=1.5+rand(i*3+4)*5.5;
   ctx.beginPath();ctx.ellipse(x,y,r,r*1.32,-.12,0,Math.PI*2);ctx.fillStyle='rgba(213,238,242,.11)';ctx.fill();ctx.lineWidth=.6;ctx.strokeStyle='rgba(255,255,255,.44)';ctx.stroke();
   ctx.beginPath();ctx.ellipse(x-r*.16,y-r*.2,r*.65,r*.7,-.12,Math.PI,Math.PI*1.65);ctx.strokeStyle='rgba(255,255,255,.7)';ctx.stroke();
  }
  for(let i=0;i<1700;i++){ctx.fillStyle=i%2?'rgba(18,50,59,.038)':'rgba(255,255,255,.2)';ctx.fillRect(rand(i+2000)*width,rand(i+4000)*height,1,1);}
  strokes.forEach(erase);
  stage.classList.add('clean-ready');
 }
 function resize(){
  const nextWidth=stage.clientWidth,nextHeight=stage.clientHeight;
  if(nextWidth===width&&nextHeight===height)return;
  width=nextWidth;height=nextHeight;blade=clamp(width*.135,112,190);dpr=Math.min(devicePixelRatio,1.5);
  canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx!.setTransform(dpr,0,0,dpr,0,0);
  fallback.style.setProperty('--tool-scale',String(blade/150));
  last=null;paint();tool?.resize(width,height,blade);
 }
 const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(stage);
 picture.addEventListener('load',paint);resize();
 function showTool(x:number,y:number,angle:number,present=true){
  stage.classList.toggle('tool-present',present);
  fallback.style.transform=`translate3d(${x}px,${y}px,0) rotate(${angle}rad) scale(${blade/150})`;
  tool?.move(x,y,angle,present);
 }
 function finish(){
  if(revealed)return;revealed=true;stage.classList.add('is-revealed','has-cleaned');
  const restoreFocus=document.activeElement===reveal||document.activeElement===touchButton;
  reveal.hidden=true;reset.hidden=false;showTool(0,0,0,false);surface.style.cursor='auto';
  touchMode=false;stage.classList.remove('touch-cleaning');touchButton.setAttribute('aria-pressed','false');touchButton.innerHTML='TRY CLEANING <span aria-hidden="true">↗</span>';
  announce('A clear view. That’s the Wildcat touch.');
  if(restoreFocus)reset.focus({preventScroll:true});
 }
 function markCoverage(ax:number,ay:number,bx:number,by:number,half:number){
  const minX=clamp(Math.floor((Math.min(ax,bx)-half)/width*48),0,47),maxX=clamp(Math.ceil((Math.max(ax,bx)+half)/width*48),0,47);
  const minY=clamp(Math.floor((Math.min(ay,by)-20)/height*28),0,27),maxY=clamp(Math.ceil((Math.max(ay,by)+20)/height*28),0,27);
  for(let y=minY;y<=maxY;y++)for(let x=minX;x<=maxX;x++){
   const cx=(x+.5)/48*width,cy=(y+.5)/28*height,dy=by-ay;
   const t=Math.abs(dy)<.1?.5:clamp((cy-ay)/dy,0,1),sx=ax+(bx-ax)*t,sy=ay+dy*t;
   if(Math.abs(cx-sx)<=half&&Math.abs(cy-sy)<=23){const index=y*48+x;if(!coverage[index]){coverage[index]=1;covered++;}}
  }
  if(covered/coverage.length>.72)finish();
 }
 function cleanAt(x:number,y:number){
  if(revealed)return;
  const dx=last?x-last.x:0,angle=clamp(dx*.01,-.32,.32);
  const from=last||{x,y,angle};
  const stroke:Stroke={ax:from.x/width,ay:from.y/height,bx:x/width,by:y/height,aa:from.angle,ba:angle,half:blade*.5/width,thick:23/height};
  // This records only meaningful strokes, preserving the cleared surface on resize.
  if(!last||Math.hypot(x-from.x,y-from.y)>1){strokes.push(stroke);erase(stroke);markCoverage(from.x,from.y,x,y,blade*.52);}
  last={x,y,angle};keyboard={x:x/width,y:y/height};
  stage.classList.add('has-cleaned');if(!revealed)showTool(x,y,angle);
 }
 function queuePoint(x:number,y:number){pendingPoint={x,y};if(paintFrame)return;paintFrame=requestAnimationFrame(()=>{paintFrame=0;if(pendingPoint){cleanAt(pendingPoint.x,pendingPoint.y);pendingPoint=null;}});}
 function point(event:PointerEvent){const b=stage.getBoundingClientRect();return{x:clamp(event.clientX-b.left,0,width),y:clamp(event.clientY-b.top,0,height)};}
 function leave(){last=null;pendingPoint=null;showTool(0,0,0,false);}
 surface.addEventListener('pointermove',event=>{
  if(event.pointerType==='touch'&&!touchMode)return;
  if(event.pointerType==='touch'&&event.buttons!==1)return;
  const p=point(event);queuePoint(p.x,p.y);
 });
 surface.addEventListener('pointerdown',event=>{
  if(event.pointerType==='touch'&&!touchMode)return;
  const p=point(event);last=null;cleanAt(p.x,p.y);
  if(event.pointerType==='touch')surface.setPointerCapture(event.pointerId);
 });
 surface.addEventListener('pointerup',event=>{if(event.pointerType==='touch'){if(surface.hasPointerCapture(event.pointerId))surface.releasePointerCapture(event.pointerId);leave();}});
 surface.addEventListener('pointerleave',leave);surface.addEventListener('pointercancel',leave);surface.addEventListener('blur',leave);window.addEventListener('blur',leave);
 surface.addEventListener('keydown',event=>{
  const directions:Record<string,[number,number]>={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]};
  if(event.key==='Escape'){leave();setTouchMode(false);return;}
  if(event.key==='Enter'||event.key===' '){event.preventDefault();finish();return;}
  if(!directions[event.key])return;event.preventDefault();const [dx,dy]=directions[event.key];cleanAt(clamp(keyboard.x*width+dx*32,0,width),clamp(keyboard.y*height+dy*32,0,height));
 });
 function setTouchMode(value:boolean){touchMode=value;stage.classList.toggle('touch-cleaning',value);touchButton.setAttribute('aria-pressed',String(value));touchButton.innerHTML=value?'DONE CLEANING <span aria-hidden="true">✓</span>':'TRY CLEANING <span aria-hidden="true">↗</span>';if(!value)leave();else announce('Cleaning mode on. Drag across the glass. Choose Done cleaning to resume scrolling.');}
 touchButton.setAttribute('aria-pressed','false');touchButton.addEventListener('click',()=>setTouchMode(!touchMode));
 reveal.addEventListener('click',finish);
 reset.addEventListener('click',()=>{
  strokes=[];coverage.fill(0);covered=0;revealed=false;last=null;keyboard={x:.5,y:.5};stage.classList.remove('is-revealed','has-cleaned');surface.style.cursor='';reveal.hidden=false;reset.hidden=true;paint();announce('The glass is ready for another sweep.');
  (coarse.matches?touchButton:surface).focus({preventScroll:true});
 });
 stage.querySelector('.clean-continue')?.addEventListener('click',()=>setTouchMode(false));
 const intersection=new IntersectionObserver(entries=>{const visible=entries[0].isIntersecting;stage.classList.toggle('is-in-view',visible);if(!visible){leave();setTouchMode(false);}},{threshold:.12});intersection.observe(stage);
 // Keep manipulation responsive even if the optional 3D rendering is unavailable.
 import('./cleaning-tool').then(m=>{if(!stage.isConnected)return;tool=m.createCleaningTool(stage.querySelector<HTMLElement>('[data-tool-layer]')!,width,height,blade,reduced);if(tool)stage.classList.add('has-3d-tool');}).catch(()=>{});
 const cleanup=()=>{cancelAnimationFrame(paintFrame);resizeObserver.disconnect();intersection.disconnect();tool?.dispose();};
 window.addEventListener('pagehide',event=>{leave();if(!event.persisted)cleanup();});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)leave();});
}
