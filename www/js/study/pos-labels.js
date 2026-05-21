function normalizePosKey(rawPos) {
  if (!rawPos) return "";
  const s = rawPos.toString().trim().toLowerCase();

  if (["nomen", "noun", "명사", "名詞"].includes(s)) return "noun";
  if (["verb", "verben", "동사", "動詞"].includes(s)) return "verb";
  if (["adjektiv", "adjective", "형용사", "形容詞"].includes(s)) return "adj";
  if (["adverb", "부사", "副詞"].includes(s)) return "adv";
  if (["pronomen", "pronoun", "대명사", "代名詞"].includes(s)) return "pron";
  if (["artikel", "article", "관사", "冠詞"].includes(s)) return "art";
  if (["präposition", "praeposition", "preposition"].includes(s)) return "prep";
  if (["konjunktion", "conjunction"].includes(s)) return "conj";
  if (["interjektion", "interjection"].includes(s)) return "interj";
  if (["partikel", "particle"].includes(s)) return "part";

  return "";
}

function getPosLabelForLang(posKey, lang) {
  const table = {
    noun: {
      de: "Nomen",
      en: "noun",
      ko: "명사",
      es: "sustantivo",
      fr: "nom",
      it: "sostantivo",
      pt: "substantivo",
      pl: "rzeczownik",
      nl: "zelfstandig naamwoord",
      ru: "существительное",
      sv: "substantiv",
      ja: "名詞",
      zh: "名词",
    },
    verb: {
      de: "Verb",
      en: "verb",
      ko: "동사",
      es: "verbo",
      fr: "verbe",
      it: "verbo",
      pt: "verbo",
      pl: "czasownik",
      nl: "werkwoord",
      ru: "глагол",
      sv: "verb",
      ja: "動詞",
      zh: "动词",
    },
    adj: {
      de: "Adjektiv",
      en: "adjective",
      ko: "형용사",
      es: "adjetivo",
      fr: "adjectif",
      it: "aggettivo",
      pt: "adjetivo",
      pl: "przymiotnik",
      nl: "bijvoeglijk naamwoord",
      ru: "прилагательное",
      sv: "adjektiv",
      ja: "形容詞",
      zh: "形容词",
    },
    adv: {
      de: "Adverb",
      en: "adverb",
      ko: "부사",
      es: "adverbio",
      fr: "adverbe",
      it: "avverbio",
      pt: "advérbio",
      pl: "przysłówek",
      nl: "bijwoord",
      ru: "наречие",
      sv: "adverb",
      ja: "副詞",
      zh: "副词",
    },
    pron: {
      de: "Pronomen",
      en: "pronoun",
      ko: "대명사",
      es: "pronombre",
      fr: "pronom",
      it: "pronome",
      pt: "pronome",
      pl: "zaimek",
      nl: "voornaamwoord",
      ru: "местоимение",
      sv: "pronomen",
      ja: "代名詞",
      zh: "代词",
    },
    art: {
      de: "Artikel",
      en: "article",
      ko: "관사",
      es: "artículo",
      fr: "article",
      it: "articolo",
      pt: "artigo",
      pl: "rodzajnik",
      nl: "lidwoord",
      ru: "артикль",
      sv: "artikel",
      ja: "冠詞",
      zh: "冠词",
    },
    prep: {
      de: "Präposition",
      en: "preposition",
      ko: "전치사",
      es: "preposición",
      fr: "préposition",
      it: "preposizione",
      pt: "preposição",
      pl: "przyimek",
      nl: "voorzetsel",
      ru: "предлог",
      sv: "preposition",
      ja: "前置詞",
      zh: "介词",
    },
    conj: {
      de: "Konjunktion",
      en: "conjunction",
      ko: "접속사",
      es: "conjunción",
      fr: "conjonction",
      it: "congiunzione",
      pt: "conjunção",
      pl: "spójnik",
      nl: "voegwoord",
      ru: "союз",
      sv: "konjunktion",
      ja: "接続詞",
      zh: "连词",
    },
    interj: {
      de: "Interjektion",
      en: "interjection",
      ko: "감탄사",
      es: "interjección",
      fr: "interjection",
      it: "interiezione",
      pt: "interjeição",
      pl: "wykrzyknik",
      nl: "tussenwerpsel",
      ru: "междометие",
      sv: "interjektion",
      ja: "間投詞",
      zh: "感叹词",
    },
    part: {
      de: "Partikel",
      en: "particle",
      ko: "조사",
      es: "partícula",
      fr: "particule",
      it: "particella",
      pt: "partícula",
      pl: "partykuła",
      nl: "partikel",
      ru: "частица",
      sv: "partikel",
      ja: "助詞",
      zh: "助词",
    },
  };

  const row = table[posKey];
  if (!row) return "";

  return row[lang] || row["en"] || "";
}

function getPosWithMeaning(word) {
  if (!word) return "";

  const rawPos = word.pos || "";
  if (!rawPos) return "";

  const posKey = normalizePosKey(rawPos);

  const studyLang = SETTINGS.studyLang || "de";
  const uiLang = CURRENT_LANG || "ko";

  const studyLabel = posKey
    ? getPosLabelForLang(posKey, studyLang) || rawPos
    : rawPos;
  const uiLabel = posKey
    ? getPosLabelForLang(posKey, uiLang) || studyLabel || rawPos
    : studyLabel || rawPos;

  if (studyLabel && uiLabel && studyLabel !== uiLabel) {
    return `${studyLabel} ${uiLabel}`;
  }

  return studyLabel || uiLabel || rawPos;
}

const CONJ_LABELS = {
  base: {
    de: "Grundform",
    en: "Base form",
    ko: "기본형 (Grundform)",
    es: "Forma base",
  },
  pres_ich: {
    de: "Präsens (ich)",
    en: "Present (ich)",
    ko: "현재형 ich",
    es: "Presente (ich)",
  },
  pres_du: {
    de: "Präsens (du)",
    en: "Present (du)",
    ko: "현재형 du",
    es: "Presente (du)",
  },
  pres_er: {
    de: "Präsens (er/sie/es)",
    en: "Present (er/sie/es)",
    ko: "현재형 er/sie/es",
    es: "Presente (él/ella)",
  },
  praet: {
    de: "Präteritum",
    en: "Simple past",
    ko: "과거형 (Präteritum)",
    es: "Pretérito",
  },
  part2: {
    de: "Partizip II",
    en: "Past participle",
    ko: "과거분사 (Partizip II)",
    es: "Participio pasado",
  },
};

function getConjLabel(key, uiLang) {
  const row = CONJ_LABELS[key];
  if (!row) {
    return key;
  }
  return row[uiLang] || row.en || row.de || key;
}
