self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('garments-store').then((cache) => {
      return cache.addAll([
        './index.html',
        './questions.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});