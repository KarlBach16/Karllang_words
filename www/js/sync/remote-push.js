// Manual first-push helpers. Pull/merge sync is added after this is verified.

const SYNC_PUSH_BATCH_SIZE = 200;

let SYNC_PUSH_PROMISE = null;

function chunkSyncRows(rows, size = SYNC_PUSH_BATCH_SIZE) {
  const chunks = [];
  for (let idx = 0; idx < rows.length; idx += size) {
    chunks.push(rows.slice(idx, idx + size));
  }
  return chunks;
}

async function upsertSyncRows(client, table, rows, onConflict, options = {}) {
  if (!Array.isArray(rows) || rows.length === 0) return 0;

  let pushed = 0;
  const chunks = chunkSyncRows(rows, options.batchSize || SYNC_PUSH_BATCH_SIZE);

  for (const chunk of chunks) {
    const { error } = await client.from(table).upsert(chunk, {
      onConflict,
      ignoreDuplicates: options.ignoreDuplicates === true,
    });
    if (error) {
      throw error;
    }
    pushed += chunk.length;
  }

  return pushed;
}

function getCurrentAuthUserId() {
  const state = typeof getAuthState === "function" ? getAuthState() : null;
  return state?.signedIn && state.user?.id ? state.user.id : null;
}

async function markFirstLocalPushComplete(client, userId) {
  const now = new Date().toISOString();
  const { error } = await client.from("sync_meta").upsert(
    {
      user_id: userId,
      schema_version: 1,
      first_migration_completed: true,
      first_migration_completed_at: now,
      last_push_at: now,
      last_local_migration_at: now,
    },
    { onConflict: "user_id" },
  );

  if (error) {
    throw error;
  }
}

async function markSyncPushComplete(client, userId) {
  const now = new Date().toISOString();
  const { error } = await client.from("sync_meta").upsert(
    {
      user_id: userId,
      schema_version: 1,
      last_push_at: now,
    },
    { onConflict: "user_id" },
  );

  if (error) {
    throw error;
  }
}

async function pushLocalSyncSnapshot(
  userId = getCurrentAuthUserId(),
  options = {},
) {
  if (SYNC_PUSH_PROMISE) return SYNC_PUSH_PROMISE;

  const client = getSupabaseClient();
  if (!client?.from) {
    throw new Error("Supabase client is not ready.");
  }
  if (!userId) {
    throw new Error("Sign in before pushing local sync data.");
  }

  SYNC_PUSH_PROMISE = (async () => {
    const snapshot = buildLocalSyncSnapshot(userId);

    const wordProgress = await upsertSyncRows(
      client,
      "user_word_progress",
      snapshot.wordProgress,
      "user_id,study_lang,word_id",
    );
    const languageStats = await upsertSyncRows(
      client,
      "user_language_stats",
      snapshot.languageStats,
      "user_id,study_lang",
    );
    const attendance = await upsertSyncRows(
      client,
      "user_attendance",
      snapshot.attendance,
      "user_id,date_key",
      { ignoreDuplicates: true },
    );

    if (options.markFirstComplete === false) {
      await markSyncPushComplete(client, userId);
    } else {
      await markFirstLocalPushComplete(client, userId);
    }

    const summary = {
      wordProgress,
      languageStats,
      attendance,
    };
    console.info("[sync] local snapshot pushed.", summary);
    return summary;
  })();

  try {
    return await SYNC_PUSH_PROMISE;
  } finally {
    SYNC_PUSH_PROMISE = null;
  }
}
