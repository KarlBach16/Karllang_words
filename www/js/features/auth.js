// Supabase Auth integration. Sync is added in later steps.

let AUTH_STATE = {
  ready: false,
  signedIn: false,
  user: null,
  reason: "not_checked",
};

let AUTH_CONTROLS_READY = false;
let AUTH_LISTENER_READY = false;

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

  await refreshAuthState();
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
}
