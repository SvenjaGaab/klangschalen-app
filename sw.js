const V="klangschalen-v7";
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>Promise.all(["./","index.html","manifest.json","icon-192.png","icon-512.png","tibetisch.mp3","klassisch.mp3","ombu.mp3"].map(u=>c.add(u).catch(()=>{})))));self.skipWaiting();});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))));self.clients.claim();});
self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{if(res.ok){const cp=res.clone();caches.open(V).then(c=>c.put(e.request,cp));}return res;})));});
