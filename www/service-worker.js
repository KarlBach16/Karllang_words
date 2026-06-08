// Legacy PWA cache cleanup.
// KarlLang currently ships through native shells, so stale web caches should not
// control local testing or deployed web builds.

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith("karl-lang"))
            .map((key) => caches.delete(key)),
        ),
      ),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      caches
        .keys()
        .then((keys) =>
          Promise.all(
            keys
              .filter((key) => key.startsWith("karl-lang"))
              .map((key) => caches.delete(key)),
          ),
        ),
      self.registration.unregister(),
    ]),
  );
});

self.addEventListener("fetch", () => {
  // No cache-first response. Let the browser/network handle every request.
});
