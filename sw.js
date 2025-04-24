const CACHE_NAME = "static-cache-v1";

const urlsToCache = [
  "/", // kalau kamu pakai server lokal atau deploy di root
  "/index.html",
  "/src/css/style.css",
  "/src/css/awoo.min.css",
  "/src/img/favico.svg",
  "/src/img/banners/cbg-10.gif",

  // JS komponen
  "/src/common/service-worker.js",
  "/src/common/utils.js",
  "/src/common/storage.js",
  "/src/common/actions.js",
  "/src/common/config.js",
  "/src/common/strftime.js",
  "/src/common/component.js",
  "/src/common/module.js",
  "/userconfig.js",

  "/src/components/tabs/tabs.component.js",
  "/src/components/weather/weather.api.js",
  "/src/components/weather/weather.component.js",
  "/src/components/clock/clock.component.js",
  "/src/components/statusbar/statusbar.component.js",
  "/src/components/search/search.component.js",
  "/src/components/config/config.component.js",

  // Fonts dan icon eksternal (dari CDN)
  "https://fonts.googleapis.com/css?family=Nunito:200|Roboto:100,400,700|Raleway:600",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "https://cdn.jsdelivr.net/gh/monzanifabio/cryptofont/cryptofont.css",
];

// Install event handler
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Caching app shell and images");
        return cache.addAll(urlsToCache);
      })
      .catch((err) => {
        console.error("Cache addAll failed:", err);
      })
  );
});

// Fetch event handler
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        return (
          response ||
          fetch(event.request).then((networkResponse) => {
            if (networkResponse && networkResponse.ok && event.request.url.startsWith(location.origin)) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, networkResponse.clone());
              });
            }
            return networkResponse;
          })
        );
      })
      .catch((err) => {
        console.error("Fetch failed for", event.request.url, err);
        return new Response("Offline or not cached", {
          status: 503,
          statusText: "Service Unavailable",
        });
      })
  );
});
