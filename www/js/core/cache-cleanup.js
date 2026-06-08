// Remove legacy PWA caches/service workers that can serve stale local builds.

function cleanupLegacyWebCaches() {
  if (typeof window === "undefined") return;

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .getRegistrations()
      .then((registrations) =>
        Promise.all(registrations.map((registration) => registration.unregister())),
      )
      .catch((error) => {
        console.info("[cache] service worker cleanup skipped.", error);
      });
  }

  if (window.caches?.keys) {
    window.caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith("karl-lang"))
            .map((key) => window.caches.delete(key)),
        ),
      )
      .catch((error) => {
        console.info("[cache] cache cleanup skipped.", error);
      });
  }
}
