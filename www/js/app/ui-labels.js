const LANG_META = {
  ko: { name_local: "한국어", name_en: "Korean" },
  en: { name_local: "English", name_en: "English" },
  de: { name_local: "Deutsch", name_en: "German" },
  es: { name_local: "Español", name_en: "Spanish" },
  fr: { name_local: "Français", name_en: "French" },
  it: { name_local: "Italiano", name_en: "Italian" },
  pt: { name_local: "Português", name_en: "Portuguese" },
  pl: { name_local: "Polski", name_en: "Polish" },
  nl: { name_local: "Nederlands", name_en: "Dutch" },
  ja: { name_local: "日本語", name_en: "Japanese" },
  zh: { name_local: "中文", name_en: "Chinese" },
  ru: { name_local: "Русский", name_en: "Russian" },
  sv: { name_local: "Svenska", name_en: "Swedish" },
};

function getUiLangLabel(code, uiLang) {
  if (!code) return "";

  const fallback = () => {
    const meta = LANG_META[code] || {};
    return meta.name_local || meta.name_en || code.toUpperCase();
  };

  switch (uiLang) {
    case "ko": {
      const map = {
        ko: "한국어",
        en: "영어",
        de: "독일어",
        es: "스페인어",
        fr: "프랑스어",
        it: "이탈리아어",
        pt: "포르투갈어",
        pl: "폴란드어",
        nl: "네덜란드어",
        ja: "일본어",
        zh: "중국어",
        ru: "러시아어",
      };
      return map[code] || fallback();
    }

    case "en": {
      const map = {
        ko: "Korean",
        en: "English",
        de: "German",
        es: "Spanish",
        fr: "French",
        it: "Italian",
        pt: "Portuguese",
        pl: "Polish",
        nl: "Dutch",
        ja: "Japanese",
        zh: "Chinese",
        ru: "Russian",
      };
      return map[code] || fallback();
    }

    case "de": {
      const map = {
        ko: "Koreanisch",
        en: "Englisch",
        de: "Deutsch",
        es: "Spanisch",
        fr: "Französisch",
        it: "Italienisch",
        pt: "Portugiesisch",
        pl: "Polnisch",
        nl: "Niederländisch",
        ja: "Japanisch",
        zh: "Chinesisch",
        ru: "Russisch",
      };
      return map[code] || fallback();
    }

    case "es": {
      const map = {
        ko: "coreano",
        en: "inglés",
        de: "alemán",
        es: "español",
        fr: "francés",
        it: "italiano",
        pt: "portugués",
        pl: "polaco",
        nl: "neerlandés",
        ja: "japonés",
        zh: "chino",
        ru: "ruso",
      };
      return map[code] || fallback();
    }

    case "fr": {
      const map = {
        ko: "coréen",
        en: "anglais",
        de: "allemand",
        es: "espagnol",
        fr: "français",
        it: "italien",
        pt: "portugais",
        pl: "polonais",
        nl: "néerlandais",
        ja: "japonais",
        zh: "chinois",
        ru: "russe",
      };
      return map[code] || fallback();
    }

    case "it": {
      const map = {
        ko: "coreano",
        en: "inglese",
        de: "tedesco",
        es: "spagnolo",
        fr: "francese",
        it: "italiano",
        pt: "portoghese",
        pl: "polacco",
        nl: "olandese",
        ja: "giapponese",
        zh: "cinese",
        ru: "russo",
      };
      return map[code] || fallback();
    }

    case "pt": {
      const map = {
        ko: "coreano",
        en: "inglês",
        de: "alemão",
        es: "espanhol",
        fr: "francês",
        it: "italiano",
        pt: "português",
        pl: "polonês",
        nl: "neerlandês",
        ja: "japonês",
        zh: "chinês",
        ru: "russo",
      };
      return map[code] || fallback();
    }

    case "ja": {
      const map = {
        ko: "韓国語",
        en: "英語",
        de: "ドイツ語",
        es: "スペイン語",
        fr: "フランス語",
        it: "イタリア語",
        pt: "ポルトガル語",
        pl: "ポーランド語",
        nl: "オランダ語",
        ja: "日本語",
        zh: "中国語",
        ru: "ロシア語",
      };
      return map[code] || fallback();
    }

    case "zh": {
      const map = {
        ko: "韩语",
        en: "英语",
        de: "德语",
        es: "西班牙语",
        fr: "法语",
        it: "意大利语",
        pt: "葡萄牙语",
        pl: "波兰语",
        nl: "荷兰语",
        ja: "日语",
        zh: "中文",
        ru: "俄语",
      };
      return map[code] || fallback();
    }

    case "ru": {
      const map = {
        ko: "корейский",
        en: "английский",
        de: "немецкий",
        es: "испанский",
        fr: "французский",
        it: "итальянский",
        pt: "португальский",
        pl: "польский",
        nl: "нидерландский",
        ja: "японский",
        zh: "китайский",
        ru: "русский",
      };
      return map[code] || fallback();
    }

    default:
      return fallback();
  }
}

function getFeedbackButtonLabel(uiLang) {
  const map = {
    ko: "피드백 보내기",
    en: "Send Feedback",
    de: "Feedback senden",
    es: "Enviar comentarios",
    fr: "Envoyer un retour",
    it: "Invia feedback",
    pt: "Enviar feedback",
    ja: "フィードバックを送る",
    zh: "发送反馈",
    ru: "Отправить отзыв",
  };
  return map[uiLang] || map.en;
}

function refreshUiLangSelectLabels() {
  const uiLang = CURRENT_LANG || "ko";
  [DOM.startUiLang, DOM.settingsUiLang].forEach((select) => {
    if (!select) return;
    Array.from(select.options).forEach((opt) => {
      const code = opt.value;
      if (!code) return;
      opt.textContent = getUiLangLabel(code, uiLang);
    });
  });
}
