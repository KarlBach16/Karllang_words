// Supabase Auth integration. Sync is added in later steps.

let AUTH_STATE = {
  ready: false,
  signedIn: false,
  user: null,
  reason: "not_checked",
};

let AUTH_CONTROLS_READY = false;
let AUTH_LISTENER_READY = false;
let AUTH_SERVER_BOOTSTRAPPED_USER_ID = null;
let AUTH_SERVER_BOOTSTRAP_PROMISE = null;

function getValidAuthReturnView(view) {
  const allowed = ["study", "user", "training", "words", "settings"];
  return allowed.includes(view) ? view : "settings";
}

function saveAuthReturnView() {
  const view = getValidAuthReturnView(APP_STATE.currentView);
  safeSet(STORAGE_KEYS.AUTH_RETURN_VIEW, view);
}

function consumeAuthReturnView() {
  const view = getValidAuthReturnView(safeGet(STORAGE_KEYS.AUTH_RETURN_VIEW));
  if (typeof window !== "undefined" && window.localStorage) {
    window.localStorage.removeItem(STORAGE_KEYS.AUTH_RETURN_VIEW);
  }
  return view;
}

function hasAuthReturnView() {
  return !!safeGet(STORAGE_KEYS.AUTH_RETURN_VIEW);
}

function initAuth() {
  bindAuthControls();
  subscribeAuthChanges();
  return refreshAuthState();
}

function bindAuthControls() {
  if (AUTH_CONTROLS_READY || !DOM.accountLoginBtn) return;
  AUTH_CONTROLS_READY = true;

  DOM.accountLoginBtn.addEventListener("click", () => {
    if (AUTH_STATE.signedIn) {
      signOut();
    } else {
      signInWithGoogle();
    }
  });

  if (DOM.accountSyncCheckBtn) {
    DOM.accountSyncCheckBtn.addEventListener("click", () => {
      runManualRemoteSyncCheck();
    });
  }
}

function subscribeAuthChanges() {
  if (AUTH_LISTENER_READY) return;

  const client = getSupabaseClient();
  if (!client?.auth?.onAuthStateChange) return;

  AUTH_LISTENER_READY = true;
  client.auth.onAuthStateChange((_event, session) => {
    AUTH_STATE = {
      ready: true,
      signedIn: !!session?.user,
      user: session?.user || null,
      reason: session?.user ? "signed_in" : "guest",
    };
    renderAuthState();
    if (session?.user) {
      ensureAuthServerRecords(session.user).then(() => {
        refreshFirstSyncPanel();
        scheduleRemoteLocalDiffCheck("auth_state_change");
      });
    } else {
      refreshFirstSyncPanel();
    }
  });
}

async function refreshAuthState() {
  const client = getSupabaseClient();
  if (!client?.auth?.getSession) {
    AUTH_STATE = {
      ready: false,
      signedIn: false,
      user: null,
      reason: "supabase_unavailable",
    };
    renderAuthState();
    return AUTH_STATE;
  }

  try {
    const { data, error } = await client.auth.getSession();
    if (error) {
      AUTH_STATE = {
        ready: false,
        signedIn: false,
        user: null,
        reason: "session_error",
        error,
      };
      console.warn("[auth] session check failed.", error);
    } else {
      const session = data?.session || null;
      AUTH_STATE = {
        ready: true,
        signedIn: !!session?.user,
        user: session?.user || null,
        reason: session?.user ? "signed_in" : "guest",
      };
      if (session?.user) {
        ensureAuthServerRecords(session.user).then(() => {
          refreshFirstSyncPanel();
          scheduleRemoteLocalDiffCheck("session_restore");
        });
      } else {
        refreshFirstSyncPanel();
      }
    }
  } catch (error) {
    AUTH_STATE = {
      ready: false,
      signedIn: false,
      user: null,
      reason: "session_check_failed",
      error,
    };
    console.warn("[auth] session check failed.", error);
  }

  renderAuthState();
  return AUTH_STATE;
}

async function signInWithGoogle() {
  const client = getSupabaseClient();
  if (!client?.auth?.signInWithOAuth) {
    console.warn("[auth] Supabase auth is unavailable.");
    return;
  }

  if (DOM.accountLoginBtn) {
    DOM.accountLoginBtn.disabled = true;
    DOM.accountLoginBtn.textContent = trKey("account.signing_in", "Signing in...");
  }

  saveAuthReturnView();
  const redirectTo = `${window.location.origin}${window.location.pathname}`;
  const { error } = await client.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo,
    },
  });

  if (error) {
    console.warn("[auth] Google sign-in failed.", error);
    renderAuthState();
  }
}

async function signOut() {
  const client = getSupabaseClient();
  if (!client?.auth?.signOut) {
    console.warn("[auth] Supabase auth is unavailable.");
    return;
  }

  if (DOM.accountLoginBtn) {
    DOM.accountLoginBtn.disabled = true;
  }

  const { error } = await client.auth.signOut();
  if (error) {
    console.warn("[auth] sign-out failed.", error);
  }

  resetAutoSyncState();
  resetRemoteLocalDiffState();
  await refreshAuthState();
  refreshFirstSyncPanel();
}

function normalizeServerCefr(value) {
  const cefr = (value || "A1").toString();
  if (cefr.toLowerCase() === "all") return "all";
  const upper = cefr.toUpperCase();
  return ["A1", "A2", "B1", "B2"].includes(upper) ? upper : "A1";
}

function normalizeServerGoal(value) {
  const parsed = parseInt(value, 10);
  return [5, 10, 20, 30, 50].includes(parsed) ? parsed : 5;
}

function buildServerSettingsPayload(userId) {
  const mode = normalizeStudyMode(SETTINGS.mode);
  return {
    user_id: userId,
    ui_lang: UI_LANG_CODES.includes(SETTINGS.uiLang) ? SETTINGS.uiLang : "en",
    study_lang: ALLOWED_STUDY_LANGS.includes(SETTINGS.studyLang)
      ? SETTINGS.studyLang
      : "de",
    mode,
    goal_typing: normalizeServerGoal(SETTINGS.goalTyping),
    goal_card: normalizeServerGoal(SETTINGS.goalCard || SETTINGS.goalTyping),
    new_word_cefr: normalizeServerCefr(SETTINGS.newWordCefr),
    new_word_category: SETTINGS.newWordCategory || "all",
    sound_enabled: SETTINGS.soundEnabled !== false,
    haptic_enabled: SETTINGS.hapticEnabled !== false,
    reminder_enabled: SETTINGS.studyReminderEnabled === true,
    reminder_time: normalizeReminderTime(SETTINGS.studyReminderTime),
  };
}

async function ensureAuthServerRecords(user) {
  const client = getSupabaseClient();
  if (!client?.from || !user?.id) return false;

  if (AUTH_SERVER_BOOTSTRAPPED_USER_ID === user.id) {
    return true;
  }
  if (AUTH_SERVER_BOOTSTRAP_PROMISE) {
    return AUTH_SERVER_BOOTSTRAP_PROMISE;
  }

  AUTH_SERVER_BOOTSTRAP_PROMISE = upsertAuthServerRecords(client, user)
    .then(() => {
      AUTH_SERVER_BOOTSTRAPPED_USER_ID = user.id;
      AUTH_SERVER_BOOTSTRAP_PROMISE = null;
      console.info("[auth] server account records ready.");
      return true;
    })
    .catch((error) => {
      AUTH_SERVER_BOOTSTRAP_PROMISE = null;
      console.warn("[auth] server account record upsert failed.", error);
      return false;
    });

  return AUTH_SERVER_BOOTSTRAP_PROMISE;
}

async function upsertAuthServerRecords(client, user) {
  const now = new Date().toISOString();
  const settingsPayload = buildServerSettingsPayload(user.id);

  const operations = [
    client
      .from("profiles")
      .upsert({ id: user.id, last_seen_at: now }, { onConflict: "id" }),
    client
      .from("user_settings")
      .upsert(settingsPayload, {
        onConflict: "user_id",
        ignoreDuplicates: true,
      }),
    client.from("sync_meta").upsert(
      {
        user_id: user.id,
        schema_version: 1,
      },
      {
        onConflict: "user_id",
        ignoreDuplicates: true,
      },
    ),
  ];

  const results = await Promise.all(operations);
  const failed = results.find((result) => result.error);
  if (failed?.error) {
    throw failed.error;
  }
}

function getAuthState() {
  return { ...AUTH_STATE };
}

function renderAuthState() {
  if (!DOM.accountStatusText || !DOM.accountStatusDetail) return;

  if (AUTH_STATE.signedIn) {
    const email = AUTH_STATE.user?.email || "";
    DOM.accountStatusText.textContent = trKey("account.status_signed_in", "Signed in");
    DOM.accountStatusDetail.textContent =
      email || trKey("account.status_sync_ready", "Cloud sync is ready.");
  } else {
    DOM.accountStatusText.textContent = trKey("account.status_guest", "Guest mode");
    DOM.accountStatusDetail.textContent = trKey(
      "account.status_local_only",
      "Learning data is stored on this device.",
    );
  }

  if (DOM.accountLoginBtn) {
    DOM.accountLoginBtn.textContent = AUTH_STATE.signedIn
      ? trKey("account.sign_out", "Sign out")
      : trKey("account.sign_in", "Sign in");
    DOM.accountLoginBtn.disabled = false;
    DOM.accountLoginBtn.setAttribute(
      "aria-label",
      AUTH_STATE.signedIn
        ? trKey("account.sign_out", "Sign out")
        : trKey("account.sign_in", "Sign in"),
    );
  }

  if (DOM.accountSyncCheckBtn) {
    DOM.accountSyncCheckBtn.disabled = !AUTH_STATE.signedIn;
    DOM.accountSyncCheckBtn.textContent = trKey(
      "account.sync_check",
      "Check sync",
    );
  }
  if (DOM.accountSyncSection) {
    DOM.accountSyncSection.hidden = !AUTH_STATE.signedIn;
  }
  if (DOM.accountSyncSectionTitle) {
    DOM.accountSyncSectionTitle.textContent = trKey(
      "account.sync_section_title",
      "Sync",
    );
  }
  if (DOM.accountSyncStatus && !AUTH_STATE.signedIn) {
    DOM.accountSyncStatus.textContent = "";
  }

  if (!AUTH_STATE.signedIn) {
    setFirstSyncPanelVisible(false);
  }
}
