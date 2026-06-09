// Quiet post-migration backup sync. Pull/merge remains explicit.

const AUTO_SYNC_PUSH_DELAY_MS = 3500;

let AUTO_SYNC_TIMER = null;
let AUTO_SYNC_READY_PROMISE = null;
let AUTO_SYNC_ENABLED_FOR_USER_ID = null;
let AUTO_SYNC_SUPPRESS_DEPTH = 0;

function isAutoSyncSuppressed() {
  return AUTO_SYNC_SUPPRESS_DEPTH > 0;
}

function withAutoSyncSuppressed(callback) {
  AUTO_SYNC_SUPPRESS_DEPTH += 1;
  try {
    return callback();
  } finally {
    AUTO_SYNC_SUPPRESS_DEPTH = Math.max(0, AUTO_SYNC_SUPPRESS_DEPTH - 1);
  }
}

function resetAutoSyncState() {
  AUTO_SYNC_ENABLED_FOR_USER_ID = null;
  AUTO_SYNC_READY_PROMISE = null;
  if (AUTO_SYNC_TIMER) {
    clearTimeout(AUTO_SYNC_TIMER);
    AUTO_SYNC_TIMER = null;
  }
}

async function ensureAutoSyncReady() {
  const userId = getCurrentAuthUserId();
  if (!userId) return false;
  if (AUTO_SYNC_ENABLED_FOR_USER_ID === userId) return true;
  if (AUTO_SYNC_READY_PROMISE) return AUTO_SYNC_READY_PROMISE;

  AUTO_SYNC_READY_PROMISE = fetchRemoteSyncSnapshot(userId)
    .then((snapshot) => {
      const ready = snapshot.syncMeta?.first_migration_completed === true;
      AUTO_SYNC_ENABLED_FOR_USER_ID = ready ? userId : null;
      if (!ready) {
        refreshFirstSyncPanel();
      }
      return ready;
    })
    .catch((error) => {
      console.info("[sync] auto sync readiness check skipped.", error);
      return false;
    })
    .finally(() => {
      AUTO_SYNC_READY_PROMISE = null;
    });

  return AUTO_SYNC_READY_PROMISE;
}

function scheduleAutoSyncPush(reason = "change") {
  if (isAutoSyncSuppressed()) return;
  if (!getCurrentAuthUserId()) return;

  if (AUTO_SYNC_TIMER) {
    clearTimeout(AUTO_SYNC_TIMER);
  }

  AUTO_SYNC_TIMER = setTimeout(async () => {
    AUTO_SYNC_TIMER = null;
    const ready = await ensureAutoSyncReady();
    if (!ready) return;

    try {
      const summary = await pushLocalSyncSnapshot(getCurrentAuthUserId(), {
        markFirstComplete: false,
      });
      console.info("[sync] auto push complete.", { reason, ...summary });
    } catch (error) {
      console.info("[sync] auto push skipped.", error);
    }
  }, AUTO_SYNC_PUSH_DELAY_MS);
}
