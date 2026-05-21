const LEGACY_ARTICLE_TO_GENDER = {
  de: {
    der: "masculine",
    die: "feminine",
    das: "neuter",
  },
};

function getWordArticle(word, langCode) {
  if (!word) return "";
  const lang = (
    langCode ||
    word.lang ||
    SETTINGS.studyLang ||
    "de"
  ).toLowerCase();
  const article = typeof word.article === "string" ? word.article.trim() : "";
  if (article) return article;

  const legacyGender =
    typeof word.gender === "string" ? word.gender.trim().toLowerCase() : "";
  if (
    LEGACY_ARTICLE_TO_GENDER[lang] &&
    LEGACY_ARTICLE_TO_GENDER[lang][legacyGender]
  ) {
    return legacyGender;
  }

  return "";
}

function getWordGrammarGender(word, langCode) {
  if (!word) return "";
  const lang = (
    langCode ||
    word.lang ||
    SETTINGS.studyLang ||
    "de"
  ).toLowerCase();
  const gender = typeof word.gender === "string" ? word.gender.trim() : "";
  if (!gender) return "";

  const normalized = gender.toLowerCase();
  if (["masculine", "feminine", "neuter", "common"].includes(normalized)) {
    return normalized;
  }

  return LEGACY_ARTICLE_TO_GENDER[lang]?.[normalized] || "";
}

function getFormForLang(word, lang) {
  if (!word) return {};

  if (lang === "de") {
    return {
      word: word.lemma || "",
      base: word.lemma || "",
      article: getWordArticle(word, lang),
      gender: getWordGrammarGender(word, lang),
      plural: word.plural || "",
      pos: word.pos || "",
    };
  }

  const meaning = word.meanings ? word.meanings[lang] : "";
  return {
    word: meaning || word.lemma || "",
    base: meaning || word.lemma || "",
  };
}

function buildGermanForm(word) {
  if (!word) return "";

  const targetLang = SETTINGS.studyLang || "de";

  if (targetLang === "de") {
    const article = getWordArticle(word, targetLang);
    const lemma = (word.lemma || "").trim();

    if (article && lemma) {
      return `${article} ${lemma}`;
    }
    return lemma;
  }

  const meaning = word.meanings ? word.meanings[targetLang] : "";
  return meaning || word.lemma || "";
}

function getMeaning(word, options) {
  if (!word) return "";

  const uiLang = CURRENT_LANG || "ko";
  const primaryOnly = !options || options.primaryOnly !== false;

  let text = "";

  if (word.meanings) {
    text = word.meanings[uiLang] || word.meanings.en || "";
  }

  if (!text) return "";

  if (primaryOnly) {
    const idx = text.indexOf(",");
    if (idx !== -1) {
      text = text.slice(0, idx);
    }
  }

  return text.trim();
}

function getReadingForLang(word, langCode) {
  if (!word) return "";
  const lang = (langCode || "").toLowerCase();
  const reading = word.reading;
  if (reading && typeof reading === "object") {
    const v = reading[lang];
    if (typeof v === "string" && v.trim()) return v.trim();
  }
  const meta = word.meta || {};
  if (
    lang === "ja" &&
    typeof meta.ja_reading === "string" &&
    meta.ja_reading.trim()
  ) {
    return meta.ja_reading.trim();
  }
  if (
    lang === "zh" &&
    typeof meta.zh_pinyin === "string" &&
    meta.zh_pinyin.trim()
  ) {
    return meta.zh_pinyin.trim();
  }
  return "";
}

function hasKanji(text) {
  if (!text || typeof text !== "string") return false;
  return /[\u4E00-\u9FFF]/.test(text);
}

function hasCjkHan(text) {
  if (!text || typeof text !== "string") return false;
  return /[\u3400-\u4DBF\u4E00-\u9FFF]/.test(text);
}

function hasHangul(text) {
  if (!text || typeof text !== "string") return false;
  return /[\uAC00-\uD7A3]/.test(text);
}

function hasCyrillic(text) {
  if (!text || typeof text !== "string") return false;
  return /[\u0400-\u04FF]/.test(text);
}

function getStudyReadingValue(word) {
  if (!word) return "";
  const studyLang = (SETTINGS.studyLang || "de").toLowerCase();
  const rawLemma = (word.lemma || "").trim();

  if (studyLang === "ja") {
    return hasKanji(rawLemma) ? getReadingForLang(word, "ja") : "";
  }
  if (studyLang === "zh") {
    return hasCjkHan(rawLemma) ? getReadingForLang(word, "zh") : "";
  }
  if (studyLang === "ko") {
    return hasHangul(rawLemma) ? getReadingForLang(word, "ko") : "";
  }
  if (studyLang === "ru") {
    return hasCyrillic(rawLemma) ? getReadingForLang(word, "ru") : "";
  }
  return "";
}
