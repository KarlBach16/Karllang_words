// First sync choice UI. No automatic overwrite is performed.

let FIRST_SYNC_CONTROLS_READY = false;
let FIRST_SYNC_REFRESH_PROMISE = null;
let FIRST_SYNC_LAST_REMOTE = null;
let FIRST_SYNC_PANEL_MODE = "first";
let FIRST_SYNC_DETAIL_KEY = "account.sync_conflict_detail";
let FIRST_SYNC_DETAIL_FALLBACK = "Choose how to sync your learning data.";

function countLocalSyncData(snapshot) {
  const data = snapshot || {};
  return (
    (data.wordProgress || []).length +
    (data.languageStats || []).length +
    (data.attendance || []).length
  );
}

function countRemoteSyncData(snapshot) {
  const data = snapshot || {};
  return (
    (data.wordProgress || []).length +
    (data.languageStats || []).length +
    (data.attendance || []).length
  );
}

function setFirstSyncPanelVisible(visible) {
  if (DOM.accountSyncPanel) {
    DOM.accountSyncPanel.hidden = !visible;
  }
}

function setFirstSyncPanelText(detailKey, fallback) {
  FIRST_SYNC_DETAIL_KEY = detailKey;
  FIRST_SYNC_DETAIL_FALLBACK = fallback;
  if (DOM.accountSyncDetail) {
    DOM.accountSyncDetail.textContent = trKey(detailKey, fallback);
  }
  if (DOM.accountSyncUploadBtn) {
    DOM.accountSyncUploadBtn.textContent = trKey(
      "account.sync_upload",
      "Upload this device",
    );
  }
  if (DOM.accountSyncDownloadBtn) {
    DOM.accountSyncDownloadBtn.textContent = trKey(
      "account.sync_download",
      "Download cloud data",
    );
  }
}

function refreshFirstSyncPanelTranslations() {
  setFirstSyncPanelText(FIRST_SYNC_DETAIL_KEY, FIRST_SYNC_DETAIL_FALLBACK);
}

function setFirstSyncActionsVisible({ upload = true, download = true } = {}) {
  if (DOM.accountSyncUploadBtn) {
    DOM.accountSyncUploadBtn.hidden = !upload;
  }
  if (DOM.accountSyncDownloadBtn) {
    DOM.accountSyncDownloadBtn.hidden = !download;
  }
}

function setFirstSyncButtonsDisabled(disabled) {
  if (DOM.accountSyncUploadBtn) DOM.accountSyncUploadBtn.disabled = disabled;
  if (DOM.accountSyncDownloadBtn) DOM.accountSyncDownloadBtn.disabled = disabled;
}

function bindFirstSyncControls() {
  if (FIRST_SYNC_CONTROLS_READY) return;
  FIRST_SYNC_CONTROLS_READY = true;

  if (DOM.accountSyncUploadBtn) {
    DOM.accountSyncUploadBtn.addEventListener("click", async () => {
      await runFirstSyncUpload();
    });
  }

  if (DOM.accountSyncDownloadBtn) {
    DOM.accountSyncDownloadBtn.addEventListener("click", async () => {
      await runFirstSyncDownload();
    });
  }
}

async function refreshFirstSyncPanel() {
  bindFirstSyncControls();

  const userId = getCurrentAuthUserId();
  if (!userId) {
    FIRST_SYNC_PANEL_MODE = "first";
    FIRST_SYNC_LAST_REMOTE = null;
    setFirstSyncPanelVisible(false);
    return null;
  }

  if (FIRST_SYNC_PANEL_MODE === "post_migration") {
    return null;
  }

  if (FIRST_SYNC_REFRESH_PROMISE) return FIRST_SYNC_REFRESH_PROMISE;

  FIRST_SYNC_PANEL_MODE = "first";
  setFirstSyncPanelText("account.sync_checking", "Checking sync data...");
  setFirstSyncActionsVisible({ upload: true, download: true });
  setFirstSyncButtonsDisabled(true);
  setFirstSyncPanelVisible(false);

  FIRST_SYNC_REFRESH_PROMISE = (async () => {
    try {
      const localSnapshot = buildLocalSyncSnapshot(userId);
      const remoteSnapshot = await fetchRemoteSyncSnapshot(userId);
      FIRST_SYNC_LAST_REMOTE = remoteSnapshot;

      const localCount = countLocalSyncData(localSnapshot);
      const remoteCount = countRemoteSyncData(remoteSnapshot);
      const firstDone = remoteSnapshot.syncMeta?.first_migration_completed === true;

      if (firstDone) {
        if (FIRST_SYNC_PANEL_MODE !== "post_migration") {
          setFirstSyncPanelVisible(false);
        }
        return { localCount, remoteCount, firstDone };
      }

      if (localCount > 0 && remoteCount > 0) {
        setFirstSyncPanelText(
          "account.sync_conflict_detail",
          "Choose which learning data to keep for the first sync.",
        );
        setFirstSyncActionsVisible({ upload: true, download: true });
        setFirstSyncButtonsDisabled(false);
        setFirstSyncPanelVisible(true);
      } else if (localCount > 0) {
        setFirstSyncPanelText(
          "account.sync_upload_detail",
          "Upload this device's learning data to the cloud.",
        );
        setFirstSyncActionsVisible({ upload: true, download: false });
        setFirstSyncButtonsDisabled(false);
        setFirstSyncPanelVisible(true);
      } else if (remoteCount > 0) {
        setFirstSyncPanelText(
          "account.sync_download_detail",
          "Download cloud learning data to this device.",
        );
        setFirstSyncActionsVisible({ upload: false, download: true });
        setFirstSyncButtonsDisabled(false);
        setFirstSyncPanelVisible(true);
      } else {
        setFirstSyncPanelVisible(false);
      }

      return { localCount, remoteCount, firstDone };
    } catch (error) {
      console.warn("[sync] first sync status check failed.", error);
      if (FIRST_SYNC_PANEL_MODE !== "post_migration") {
        setFirstSyncPanelVisible(false);
      }
      return null;
    } finally {
      FIRST_SYNC_REFRESH_PROMISE = null;
    }
  })();

  return FIRST_SYNC_REFRESH_PROMISE;
}

async function runFirstSyncUpload() {
  setFirstSyncButtonsDisabled(true);
  setFirstSyncPanelText("account.sync_working", "Syncing...");
  const summary = await pushLocalSyncSnapshot(undefined, {
    markFirstComplete: FIRST_SYNC_PANEL_MODE !== "first" ? false : undefined,
  });
  setFirstSyncPanelText("account.sync_done", "Sync complete.");
  setFirstSyncPanelVisible(false);
  resetRemoteLocalDiffState();
  return summary;
}

async function runFirstSyncDownload() {
  setFirstSyncButtonsDisabled(true);
  setFirstSyncPanelText("account.sync_working", "Syncing...");
  const userId = getCurrentAuthUserId();
  const preview = FIRST_SYNC_LAST_REMOTE
    ? buildRemoteLocalPreview(FIRST_SYNC_LAST_REMOTE)
    : await previewRemoteLocalSnapshot();
  const summary = applyRemoteLocalPreview(preview);
  const client = getSupabaseClient();
  if (client?.from && userId) {
    if (FIRST_SYNC_PANEL_MODE === "first") {
      await markFirstLocalPushComplete(client, userId);
    } else {
      await markSyncPullComplete(client, userId);
    }
  }
  setFirstSyncPanelText("account.sync_done", "Sync complete.");
  setFirstSyncPanelVisible(false);
  resetRemoteLocalDiffState();
  return summary;
}

function showPostMigrationSyncChoice(remoteSnapshot) {
  bindFirstSyncControls();
  FIRST_SYNC_PANEL_MODE = "post_migration";
  FIRST_SYNC_LAST_REMOTE = remoteSnapshot || null;
  setFirstSyncPanelText(
    "account.sync_changed_detail",
    "Cloud learning data is different from this device. Choose which data to keep.",
  );
  setFirstSyncActionsVisible({ upload: true, download: true });
  setFirstSyncButtonsDisabled(false);
  setFirstSyncPanelVisible(true);
}
