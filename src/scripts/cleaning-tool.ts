import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

export function createCleaningTool(layer:HTMLElement,width:number,height:number,blade:number,reduced:MediaQueryList){
 let renderer:THREE.WebGLRenderer;
 try{renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});}catch{return null;}
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setSize(width,height);renderer.setClearColor(0,0);renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;
 const scene=new THREE.Scene();const camera=new THREE.OrthographicCamera(-width/2,width/2,height/2,-height/2,1,2000);camera.position.z=900;
 const generator=new THREE.PMREMGenerator(renderer);const room=new RoomEnvironment();const environment=generator.fromScene(room,.04);scene.environment=environment.texture;room.dispose();generator.dispose();
 scene.add(new THREE.HemisphereLight(0xffffff,0x123041,2));const light=new THREE.DirectionalLight(0xffefd9,3);light.position.set(-300,500,400);scene.add(light);
 const group=new THREE.Group();scene.add(group);
 const chrome=new THREE.MeshStandardMaterial({color:0xb7d4df,metalness:1,roughness:.2});
 const cyan=new THREE.MeshPhysicalMaterial({color:0x08afd8,metalness:.15,roughness:.24,clearcoat:1});
 const rubber=new THREE.MeshStandardMaterial({color:0x122531,roughness:.7});
 const foam=new THREE.MeshStandardMaterial({color:0xd4f5f4,roughness:.9});
 const box=(w:number,h:number,d:number,mat:THREE.Material,x:number,y:number,z:number)=>{const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);mesh.position.set(x,y,z);group.add(mesh);return mesh;};
 // The metal channel and wet washer head sit exactly on the cleaning footprint.
 const head=new THREE.Mesh(new THREE.CapsuleGeometry(10,160,8,20),foam);head.rotation.z=Math.PI/2;head.position.set(0,0,-5);group.add(head);
 box(188,12,13,chrome,0,-2,0);box(194,4,9,rubber,0,6,5);box(32,22,17,chrome,0,-16,8);
 const handle=new THREE.Mesh(new THREE.CapsuleGeometry(9,83,8,24),cyan);handle.position.set(0,-64,13);handle.rotation.x=-.18;group.add(handle);
 const grip=new THREE.Mesh(new THREE.CapsuleGeometry(9.6,27,8,24),rubber);grip.position.set(0,-103,20);grip.rotation.x=-.18;group.add(grip);
 for(let i=0;i<5;i++)box(18,1.2,17,rubber,0,-89-i*4,20);
 // A tiny collar reinforces the established blue/navy identity without changing the logo.
 box(8,5,2,chrome,0,-51,24);
 let viewWidth=width,viewHeight=height,targetX=width/2,targetY=height/2,targetAngle=0,present=false,raf=0,last=0;
 let x=targetX,y=targetY,angle=0;
 group.scale.setScalar(blade/194);group.rotation.x=-.16;
 layer.append(renderer.domElement);
 function render(){group.position.set(x-viewWidth/2,viewHeight/2-y,0);group.rotation.z=-angle;renderer.render(scene,camera);}
 function frame(t:number){raf=0;if(!present||document.hidden)return;if(t-last>=16){last=t;const ease=reduced.matches?1:.46;x+=(targetX-x)*ease;y+=(targetY-y)*ease;angle+=(targetAngle-angle)*ease;render();}if(Math.abs(x-targetX)+Math.abs(y-targetY)+Math.abs(angle-targetAngle)>.08)raf=requestAnimationFrame(frame);}
 return {
  move(nx:number,ny:number,na:number,show:boolean){
   const entering=show&&!present;present=show;targetX=nx;targetY=ny;targetAngle=na;
   if(entering||reduced.matches){x=nx;y=ny;angle=na;render();}
   if(!show){cancelAnimationFrame(raf);raf=0;return;}if(!raf)raf=requestAnimationFrame(frame);
  },
  resize(w:number,h:number,newBlade:number){viewWidth=w;viewHeight=h;camera.left=-w/2;camera.right=w/2;camera.top=h/2;camera.bottom=-h/2;camera.updateProjectionMatrix();group.scale.setScalar(newBlade/194);renderer.setSize(w,h);if(present)render();},
  dispose(){cancelAnimationFrame(raf);group.traverse(obj=>{if(obj instanceof THREE.Mesh)obj.geometry.dispose();});[chrome,cyan,rubber,foam].forEach(m=>m.dispose());environment.dispose();renderer.dispose();renderer.domElement.remove();}
 };
}
