const CACHE_NAME = 'locapark-cache-v1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll([
          '/',
        ]);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // If the request is found in the cache, return it
        if (response) {
          return response;
        }
        // Otherwise, fetch the request from the network
        return fetch(event.request);
      })
  );
});
