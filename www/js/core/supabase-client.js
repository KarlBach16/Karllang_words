// Supabase client bootstrap. Auth and sync are implemented in later modules.

const SUPABASE_URL = "https://dmuuyfhpmauoanoimbue.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_z4eZbQBFUyCO22Eo4mBG_A_IvoRtGwp";

let SUPABASE_CLIENT = null;
let SUPABASE_CLIENT_STATUS = {
  ready: false,
  reason: "not_initialized",
};

function initSupabaseClient() {
  if (SUPABASE_CLIENT) {
    return SUPABASE_CLIENT;
  }

  const factory = window.supabase?.createClient;
  if (typeof factory !== "function") {
    SUPABASE_CLIENT_STATUS = {
      ready: false,
      reason: "sdk_unavailable",
    };
    console.info("[supabase] SDK unavailable; app remains local-only.");
    return null;
  }

  try {
    SUPABASE_CLIENT = factory(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: false,
      },
    });
    SUPABASE_CLIENT_STATUS = {
      ready: true,
      reason: "ready",
    };
    console.info("[supabase] client initialized.");
    return SUPABASE_CLIENT;
  } catch (error) {
    SUPABASE_CLIENT = null;
    SUPABASE_CLIENT_STATUS = {
      ready: false,
      reason: "init_failed",
      error,
    };
    console.warn("[supabase] client initialization failed.", error);
    return null;
  }
}

function getSupabaseClient() {
  return SUPABASE_CLIENT || initSupabaseClient();
}

function getSupabaseClientStatus() {
  return { ...SUPABASE_CLIENT_STATUS };
}
