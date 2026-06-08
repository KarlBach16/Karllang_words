// Wordbook and search rendering helpers.

function formatHardCountLabel(hard) {
  if (!hard || hard <= 0) return "";

  const pack = t() || {};
  const lang = CURRENT_LANG || "ko";

  const key = `mistakes_hard_${lang}`;
  if (pack[key]) {
    return pack[key].replace("{n}", hard);
  }

  switch (lang) {
    case "ko":
      return `어려움 ${hard}회`;
    case "en":
      return `hard ${hard} times`;
    case "de":
      return `schwierig ${hard}-mal`;
    case "es":
      return `difícil ${hard} veces`;
    case "fr":
      return `difficile ${hard} fois`;
    case "it":
      return `difficile ${hard} volte`;
    case "pt":
      return `difícil ${hard} vezes`;
    case "ja":
      return `難しい ${hard} 回`;
    case "zh":
      return `困难 ${hard} 次`;
    case "ru":
      return `сложно ${hard} раз`;
    default: {
      const fallback = pack.mistakes_hard_en || "hard {n} times";
      return fallback.replace("{n}", hard);
    }
  }
}

function formatWrongLabel(wrong) {
  if (!wrong || wrong <= 0) return "";

  const pack = t() || {};
  const lang = CURRENT_LANG || "ko";

  const key = `mistakes_wrong_${lang}`;
  if (pack[key]) {
    return pack[key].replace("{n}", wrong);
  }

  switch (lang) {
    case "ko":
      return `오답 ${wrong}회`;
    case "en":
      return `wrong ${wrong} times`;
    case "de":
      return `Fehler ${wrong}-mal`;
    case "es":
      return `error ${wrong} veces`;
    case "fr":
      return `faux ${wrong} fois`;
    case "it":
      return `errore ${wrong} volte`;
    case "pt":
      return `erro ${wrong} vezes`;
    case "ja":
      return `間違い ${wrong} 回`;
    case "zh":
      return `错误 ${wrong} 次`;
    case "ru":
      return `ошибка ${wrong} раз`;
    default: {
      const fallback = pack.mistakes_wrong_en || "wrong {n} times";
      return fallback.replace("{n}", wrong);
    }
  }
}

function createWordListItem(word, stats, context) {
  const item = document.createElement("div");
  item.className = "wordbook-item";

  const left = document.createElement("div");
  left.className = "wordbook-main";

  const studyText = buildStudyForm(word);
  const meaning = getMeaning(word) || "";
  const cefrShort = (word.cefr || "?").toUpperCase(); // A1, A2 …
  const hard = stats.hardCount || 0;

  let metaHtml = "";

  if (context === "mistakes") {
    const wrong = stats.wrongAttempts || 0;

    const hardLabel = formatHardCountLabel(hard);
    const wrongLabel = formatWrongLabel(wrong);

    const labels = [];
    if (hardLabel) labels.push(hardLabel);
    if (wrongLabel) labels.push(wrongLabel);

    // 🔹 1줄: 뜻 / A1
    // 🔹 2줄: 어려움 n회 오답 n회   (언어별 라벨은 그대로 사용)
    const line1 = `${meaning}${meaning ? ", " : ""}${cefrShort}`;

    let line2 = "";
    if (labels.length > 0) {
      // 예: "어려움 3회 · 오답 2회" 또는 "hard 3 times · wrong 2 times"
      line2 = labels.join(" · ");
    }

    if (line2) {
      metaHtml =
        `<div class="wordbook-meta-line1">${line1}</div>` +
        `<div class="wordbook-meta-line2">${line2}</div>`;
    } else {
      metaHtml = `<div class="wordbook-meta-line1">${line1}</div>`;
    }
  } else {
    // 북마크 / 검색: 예전처럼 한 줄로만
    metaHtml = `${meaning}, ${cefrShort}`;
  }

  left.innerHTML =
    `<div class="wordbook-word">${studyText}</div>` +
    `<div class="wordbook-meta">${metaHtml}</div>`;

  const right = document.createElement("div");
  right.className = "wordbook-right";

  const speakBtn = document.createElement("button");
  speakBtn.type = "button";
  speakBtn.className = "icon-btn speaker-icon";
  speakBtn.setAttribute("aria-label", "발음 듣기");
  speakBtn.addEventListener("click", () => {
    speakStudyText(studyText);
  });
  // 렌더 시점에도 현재 TTS 가능 여부 반영
  {
    const soundOn = SETTINGS.soundEnabled !== false;
    const canClick = soundOn && (hasNativeTtsSupport() || TTS_SUPPORTED);
    speakBtn.disabled = !canClick;
    speakBtn.classList.toggle("tts-disabled", !canClick);
  }

  const bookmarkBtn = document.createElement("button");
  bookmarkBtn.type = "button";
  bookmarkBtn.className = "icon-btn bookmark-btn";
  bookmarkBtn.textContent = stats.bookmarked ? "★" : "☆";
  bookmarkBtn.addEventListener("click", () => {
    if (typeof triggerHaptic === "function") {
      triggerHaptic("light");
    }

    toggleBookmark(String(word.id));
    const newStats = getWordStatsById(String(word.id));
    bookmarkBtn.textContent = newStats.bookmarked ? "★" : "☆";
  });

  const infoBtn = document.createElement("button");
  infoBtn.type = "button";
  infoBtn.className = "icon-btn info-icon";
  infoBtn.textContent = "i";
  infoBtn.setAttribute("aria-label", "자세히 보기");
  infoBtn.addEventListener("click", () => {
    openWordDetail(word);
  });

  right.appendChild(speakBtn);
  right.appendChild(infoBtn);
  right.appendChild(bookmarkBtn);

  item.appendChild(left);
  item.appendChild(right);

  return item;
}

function renderMistakes() {
  const container = DOM.wordbookList;
  if (!container) return;

  const allStats = getWordStatsAll();
  const entries = Object.entries(allStats).filter(([, s]) => {
    const hard = s.hardCount || 0;
    const wrong = s.wrongAttempts || 0;
    return hard > 0 || wrong > 0;
  });

  const allWords = getAllWords();
  const mapById = {};
  allWords.forEach((w) => {
    mapById[String(w.id)] = w;
  });

  container.innerHTML = "";

  const pack = t() || {};

  if (entries.length === 0) {
    container.innerHTML =
      '<p class="empty-text">' +
      (pack.mistakes_empty || "틀린 단어가 아직 없습니다.") +
      "</p>";
    return;
  }

  // ✅ 많이 틀린 순으로 정렬
  entries.sort(([, a], [, b]) => {
    const scoreA = (a.hardCount || 0) + (a.wrongAttempts || 0);
    const scoreB = (b.hardCount || 0) + (b.wrongAttempts || 0);
    return scoreB - scoreA;
  });

  // ✅ 상위 50개만 보여주기 (스크롤 지옥 방지)
  const MAX_MISTAKES_VIEW = 50;
  const limitedEntries = entries.slice(0, MAX_MISTAKES_VIEW);
  const hiddenCount = Math.max(0, entries.length - MAX_MISTAKES_VIEW);

  // 리스트 렌더링
  limitedEntries.forEach(([id, stats]) => {
    const word = mapById[id];
    if (!word) return;

    const item = createWordListItem(word, stats, "mistakes");
    container.appendChild(item);
  });

  // ✅ 잘린 개수가 있으면 맨 아래 안내 문구 (번역팩 연동 버전)
  if (hiddenCount > 0) {
    const li = document.createElement("li");
    li.className = "list-limit-msg";

    // 1. 번역팩에서 문구 가져오기 (없으면 영어 기본값)
    let msg = trKey("common_list_more", "...and {n} more");

    // 2. {n}을 실제 숫자로 치환
    msg = msg.replace("{n}", hiddenCount);

    li.textContent = msg;
    container.appendChild(li);
  }

  updateTtsUiState();
}

function renderBookmarks() {
  const container = DOM.bookmarkList;
  if (!container) return;

  const allStats = getWordStatsAll();
  const entries = Object.entries(allStats).filter(([, s]) => !!s.bookmarked);

  const allWords = getAllWords();
  const mapById = {};
  allWords.forEach((w) => {
    mapById[String(w.id)] = w;
  });

  container.innerHTML = "";

  const pack = t() || {};

  if (entries.length === 0) {
    container.innerHTML =
      '<p class="empty-text">' +
      (pack.bookmark_empty || "북마크한 단어가 아직 없습니다.") +
      "</p>";
    return;
  }

  entries.sort(([, a], [, b]) => {
    const la = a.level || 0;
    const lb = b.level || 0;
    return lb - la;
  });

  entries.forEach(([id, stats]) => {
    const word = mapById[id];
    if (!word) return;

    const item = createWordListItem(word, stats, "bookmark");
    container.appendChild(item);
  });

  updateTtsUiState();
}

function renderWordbookIfNeeded() {
  if (APP_STATE.currentView === "mistakes") {
    renderMistakes();
  } else if (APP_STATE.currentView === "bookmark") {
    renderBookmarks();
  }
}

function handleSearch() {
  if (!DOM.searchInput || !DOM.searchResults) return;

  const rawMode = DOM.searchMode ? DOM.searchMode.value : "ui";
  const container = DOM.searchResults;
  const query = DOM.searchInput.value.trim().toLowerCase();

  container.innerHTML = "";

  if (!query) {
    container.innerHTML =
      '<p class="empty-text">' +
      trKey("search.empty", "검색어를 입력해 주세요.") +
      "</p>";
    return;
  }

  const uiLang = CURRENT_LANG || "ko";
  const studyLang = SETTINGS.studyLang || "de";

  let mode;
  if (rawMode === "ui" || rawMode === "study") {
    mode = rawMode;
  } else if (rawMode === "ko") {
    mode = "ui";
  } else if (rawMode === "de") {
    mode = "study";
  } else {
    mode = "ui";
  }

  const allWords = getAllWords();

  const results = allWords.filter((w) => {
    if (mode === "ui") {
      // ✅ UI 언어 기준: lemma + 해당 UI 언어 뜻만 검색
      const uiLang = SETTINGS.uiLang || "ko";

      let meaningText = "";
      if (w.meanings && typeof w.meanings === "object") {
        // 우선 UI 언어
        meaningText =
          w.meanings[uiLang] ||
          w.meanings.en || // 영어 fallback
          w.meanings.ko || // 한국어 fallback
          "";
      }

      const targets = ((w.lemma || "") + " " + meaningText).toLowerCase();

      return targets.includes(query);
    } else {
      // study 모드: 학습 언어 표제어(lemma) 기준 검색
      const text = (w.lemma || "").toLowerCase();
      if (!text) return false;
      return text.includes(query);
    }
  });

  if (results.length === 0) {
    container.innerHTML =
      '<p class="empty-text">' +
      trKey("search.no_result", "검색 결과가 없습니다.") +
      "</p>";
    return;
  }

  const allStats = getWordStatsAll();
  results.forEach((word) => {
    const stats = allStats[String(word.id)] || {
      hardCount: 0,
      bookmarked: false,
      level: 0,
    };
    const item = createWordListItem(word, stats, "search");
    container.appendChild(item);
  });

  updateTtsUiState();
}

function clearSearchView() {
  if (!DOM.searchInput || !DOM.searchResults) return;

  DOM.searchInput.value = "";
  DOM.searchResults.innerHTML =
    '<p class="empty-text">' +
    trKey("search.empty", "검색어를 입력해 주세요.") +
    "</p>";
}
