// Native word hub payload. Word lists and search remain in the WebView.

function getNativeWordsPayload() {
  const currentView = APP_STATE.currentView || "words";
  return {
    title: DOM.wordHubTitle?.textContent?.trim() || "Words",
    items: [
      {
        action: "mistakes",
        label: DOM.wordHubMistakesLabel?.textContent?.trim() || "Difficult words",
        icon: "warning",
      },
      {
        action: "bookmark",
        label: DOM.wordHubBookmarkLabel?.textContent?.trim() || "Bookmarks",
        icon: "bookmark",
      },
      {
        action: "search",
        label: DOM.wordHubSearchLabel?.textContent?.trim() || "Search",
        icon: "search",
      },
    ],
    list: getNativeWordListPayload(currentView),
    search: getNativeSearchPayload(),
  };
}

function getNativeSearchPayload() {
  const mode = DOM.searchMode?.value || "ui";
  return {
    query: DOM.searchInput?.value || "",
    mode,
    modeLabel: DOM.searchMode?.selectedOptions?.[0]?.textContent?.trim() || "",
    placeholder: DOM.searchInput?.placeholder || "Search",
    modes: Array.from(DOM.searchMode?.options || []).map((option) => ({
      value: option.value,
      label: option.textContent?.trim() || option.value,
    })),
    items: Array.from(DOM.searchResults?.querySelectorAll(".wordbook-item") || []).map((item) => ({
      id: item.dataset.wordId || "",
      word: item.querySelector(".wordbook-word")?.textContent?.trim() || "",
      meta: item.querySelector(".wordbook-meta")?.textContent?.trim() || "",
      bookmarked: item.querySelector(".bookmark-btn")?.textContent?.trim() === "★",
      canSpeak: !item.querySelector(".speaker-icon")?.disabled,
    })),
  };
}

function getNativeWordListPayload(view) {
  const context = view === "mistakes" || view === "bookmark" ? view : "";
  if (!context) return { context: "", items: [] };

  const allStats = getWordStatsAll();
  const wordsById = new Map(
    getAllWords().map((word) => [String(word.id), word]),
  );
  let entries = Object.entries(allStats).filter(([, stats]) =>
    context === "mistakes"
      ? (stats.hardCount || 0) > 0 || (stats.wrongAttempts || 0) > 0
      : Boolean(stats.bookmarked),
  );

  entries.sort(([, left], [, right]) => {
    if (context === "mistakes") {
      return (
        (right.hardCount || 0) +
        (right.wrongAttempts || 0) -
        ((left.hardCount || 0) + (left.wrongAttempts || 0))
      );
    }
    return (right.level || 0) - (left.level || 0);
  });
  if (context === "mistakes") entries = entries.slice(0, 50);

  const items = entries.flatMap(([id, stats]) => {
    const word = wordsById.get(String(id));
    if (!word) return [];
    const meaning = getMeaning(word) || "";
    const cefr = (word.cefr || "?").toUpperCase();
    const details = [];
    if (context === "mistakes") {
      const hard = formatHardCountLabel(stats.hardCount || 0);
      const wrong = formatWrongLabel(stats.wrongAttempts || 0);
      if (hard) details.push(hard);
      if (wrong) details.push(wrong);
    }
    return [{
      id: String(word.id),
      word: buildStudyForm(word),
      meta: context === "mistakes"
        ? [meaning, cefr, details.join(" · ")].filter(Boolean).join("\n")
        : [meaning, cefr].filter(Boolean).join(" · "),
      bookmarked: Boolean(stats.bookmarked),
      canSpeak: SETTINGS.soundEnabled !== false &&
        (hasNativeTtsSupport() || TTS_SUPPORTED),
    }];
  });

  return {
    context,
    emptyLabel: context === "mistakes"
      ? trKey("mistakes_empty", "No difficult words yet.")
      : trKey("bookmark_empty", "No bookmarked words yet."),
    items,
  };
}

function getNativeWordById(id) {
  return getAllWords().find((word) => String(word.id) === String(id)) || null;
}

function dispatchNativeWordAction(detail = {}) {
  if (detail.action === "search_query") {
    if (DOM.searchInput) DOM.searchInput.value = detail.value || "";
    handleSearch();
    scheduleNativeChromeUpdate({ force: true });
    return;
  }
  if (detail.action === "search_mode") {
    if (DOM.searchMode) DOM.searchMode.value = detail.value || "ui";
    handleSearch();
    scheduleNativeChromeUpdate({ force: true });
    return;
  }

  const word = getNativeWordById(detail.wordId);
  if (!word) return;

  if (detail.action === "word_speak") {
    speakStudyText(buildStudyForm(word));
    return;
  }

  if (detail.action === "word_bookmark") {
    toggleBookmark(String(word.id));
    renderWordbookIfNeeded();
    scheduleNativeChromeUpdate({ force: true });
    return;
  }

  if (detail.action === "word_detail") {
    openWordDetail(word);
    scheduleNativeChromeUpdate({ force: true });
  }
}

function initNativeWordsBridge() {
  const plugin = getNativeChromePlugin();
  if (!plugin || typeof plugin.addListener !== "function") return;
  plugin.addListener("wordAction", dispatchNativeWordAction);
  plugin.addListener("searchAction", dispatchNativeWordAction);
}
