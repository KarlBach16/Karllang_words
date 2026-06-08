// Remote read helpers. These functions do not write to localStorage.

const SYNC_PULL_PAGE_SIZE = 1000;

let SYNC_PULL_PROMISE = null;

async function fetchAllSyncRows(client, table, userId, options = {}) {
  const pageSize = options.pageSize || SYNC_PULL_PAGE_SIZE;
  const orderColumn = options.orderColumn || "updated_at";
  const ascending = options.ascending !== false;
  const rows = [];
  let from = 0;

  while (true) {
    let query = client
      .from(table)
      .select("*")
      .eq("user_id", userId)
      .range(from, from + pageSize - 1);

    if (orderColumn) {
      query = query.order(orderColumn, { ascending });
    }

    const { data, error } = await query;
    if (error) {
      throw error;
    }

    const batch = Array.isArray(data) ? data : [];
    rows.push(...batch);

    if (batch.length < pageSize) break;
    from += pageSize;
  }

  return rows;
}

async function fetchRemoteSyncSnapshot(userId = getCurrentAuthUserId()) {
  if (SYNC_PULL_PROMISE) return SYNC_PULL_PROMISE;

  const client = getSupabaseClient();
  if (!client?.from) {
    throw new Error("Supabase client is not ready.");
  }
  if (!userId) {
    throw new Error("Sign in before fetching remote sync data.");
  }

  SYNC_PULL_PROMISE = (async () => {
    const [settings, syncMeta, wordProgress, languageStats, attendance] =
      await Promise.all([
        client
          .from("user_settings")
          .select("*")
          .eq("user_id", userId)
          .maybeSingle(),
        client.from("sync_meta").select("*").eq("user_id", userId).maybeSingle(),
        fetchAllSyncRows(client, "user_word_progress", userId, {
          orderColumn: "updated_at",
        }),
        fetchAllSyncRows(client, "user_language_stats", userId, {
          orderColumn: "updated_at",
        }),
        fetchAllSyncRows(client, "user_attendance", userId, {
          orderColumn: "date_key",
        }),
      ]);

    if (settings.error) throw settings.error;
    if (syncMeta.error) throw syncMeta.error;

    const snapshot = {
      settings: settings.data || null,
      syncMeta: syncMeta.data || null,
      wordProgress,
      languageStats,
      attendance,
    };

    console.info("[sync] remote snapshot fetched.", {
      wordProgress: snapshot.wordProgress.length,
      languageStats: snapshot.languageStats.length,
      attendance: snapshot.attendance.length,
      hasSettings: !!snapshot.settings,
      hasSyncMeta: !!snapshot.syncMeta,
    });

    return snapshot;
  })();

  try {
    return await SYNC_PULL_PROMISE;
  } finally {
    SYNC_PULL_PROMISE = null;
  }
}
