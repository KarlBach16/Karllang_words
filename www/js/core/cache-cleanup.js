// Remove legacy PWA caches/service workers that can serve stale local builds.

const LEGACY_CACHE_CLEANUP_KEY = "karllang_legacy_cache_cleanup_v1";

function cleanupLegacyWebCaches() {
  if (typeof window === "undefined") return;

  if (safeGet(LEGACY_CACHE_CLEANUP_KEY) === "done") return;

  const cleanupTasks = [];

  if ("serviceWorker" in navigator && navigator.serviceWorker.getRegistrations) {
    cleanupTasks.push(
      navigator.serviceWorker
        .getRegistrations()
        .then((registrations) =>
          Promise.all(
            registrations.map((registration) => registration.unregister()),
          ),
        ),
    );
  }

  if (window.caches?.keys) {
    cleanupTasks.push(
      window.caches
        .keys()
        .then((keys) =>
          Promise.all(
            keys
              .filter((key) => key.startsWith("karl-lang"))
              .map((key) => window.caches.delete(key)),
          ),
        ),
    );
  }

  Promise.allSettled(cleanupTasks)
    .then(() => {
      safeSet(LEGACY_CACHE_CLEANUP_KEY, "done");
    })
    .catch((error) => {
      console.info("[cache] legacy cleanup skipped.", error);
    });
}
