const LANG_CONFIG = {
  de: {
    input_rules: {
      case_sensitive: false,
      article_required: true,
      umlaut_variants: {
        "ä": ["ae"],
        "ö": ["oe"],
        "ü": ["ue"],
        "ß": ["ss"]
      },
      accents_optional: false
    },
    orthography: {
      capitalization: "NOUN_CAP"
    },
    punctuation_normalize: {
      apostrophe_variants: ["'", "'"],
      hyphen_variants: ["‐", "-", "–"],
      space_variants: ["\u00A0", " "]  // non-breaking space
    }
  }
};
