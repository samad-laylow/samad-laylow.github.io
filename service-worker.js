const CACHE_NAME = "portfolio-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/pages/portfolio.html",
  "/pages/gestionCompetences.html",
  "/pages/cv.html",
  "/pages/contact.html",
  "/assets/styles/contact.css",
  "/assets/styles/cv.css",
  "/assets/styles/gestionCompetences.css",
  "/assets/styles/portfolio.css",
  "/assets/styles/index.css",
  "/assets/styles/globals.css",
  "/js/script.js",
  "/js/gestionCompetences.js",
  "/assets/favicon/android-chrome-192x192.png",
  "/assets/favicon/android-chrome-512x512.png",
  "/assets/imgaes/badgecv.png",
  "/assets/imgaes/banner.png",
  "/assets/imgaes/photo.png",
  "/assets/imgaes/project1.png",
  "/assets/imgaes/project2.png",
  "/assets/imgaes/project3.png",
  "/assets/imgaes/rb_1560.png",
  "/assets/imgaes/Untitled__5_-removebg-preview.png",
  "/assets/samad-cv.pdf"
];

// Installer le service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activer le service worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Intercepter les requêtes pour servir le contenu en cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
