/* Servis çalışanı – HTML/CSS/JS: önce ağ (hep güncel), çevrimdışıysa önbellek;
   görseller ve yazı tipleri: önbellekten hemen göster, arkada yenile. */
const V='mugol-v1', SHELL=['./','index.html','styles.css','app.js','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png'];
const MAX_RUNTIME=80;

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(V).then(c=>Promise.allSettled(SHELL.map(u=>c.add(u)))).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));
});

async function trim(c){const k=await c.keys();if(k.length>MAX_RUNTIME)await c.delete(k[0])}

async function networkFirst(req){
  const c=await caches.open(V);
  try{
    const r=await fetch(req);
    if(r&&r.ok)c.put(req,r.clone());
    return r;
  }catch(err){
    return (await c.match(req,{ignoreSearch:true}))||(req.mode==='navigate'?await c.match('index.html'):Response.error());
  }
}
async function staleWhileRevalidate(req){
  const c=await caches.open(V), hit=await c.match(req);
  const net=fetch(req).then(r=>{if(r&&(r.ok||r.type==='opaque')){c.put(req,r.clone());trim(c)}return r}).catch(()=>null);
  return hit||(await net)||Response.error();
}

self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  const u=new URL(req.url);
  if(u.origin===location.origin){
    const d=req.destination;
    if(req.mode==='navigate'||d==='document'||d==='style'||d==='script'||u.pathname.endsWith('.webmanifest'))
      e.respondWith(networkFirst(req));
    else e.respondWith(staleWhileRevalidate(req));
  }else if(u.hostname==='fonts.googleapis.com'||u.hostname==='fonts.gstatic.com'){
    e.respondWith(staleWhileRevalidate(req));
  }
});
