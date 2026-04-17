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
,
  nl: {
    input_rules: {
      case_sensitive: false,
      article_required: true,
      accents_optional: false
    },
    orthography: {
      capitalization: "NONE"
    },
    punctuation_normalize: {
      apostrophe_variants: ["'", "'"] ,
      hyphen_variants: ["‐", "-", "–"],
      space_variants: [" ", " "]
    }
  },
  pl: {
    input_rules: {
      case_sensitive: false,
      article_required: false,
      accents_optional: false
    },
    orthography: {
      capitalization: "NONE"
    },
    punctuation_normalize: {
      apostrophe_variants: ["'", "'"],
      hyphen_variants: ["‐", "-", "–"],
      space_variants: [" ", " "]
    }
  },
  ru: {
    input_rules: {
      case_sensitive: false,
      article_required: false,
      accents_optional: false
    },
    orthography: {
      capitalization: "NONE"
    },
    punctuation_normalize: {
      apostrophe_variants: ["'", "'"],
      hyphen_variants: ["‐", "-", "–"],
      space_variants: [" ", " "]
    }
  },
  sv: {
    input_rules: {
      case_sensitive: false,
      article_required: false,
      accents_optional: false
    },
    orthography: {
      capitalization: "NONE"
    },
    punctuation_normalize: {
      apostrophe_variants: ["'", "'"],
      hyphen_variants: ["‐", "-", "–"],
      space_variants: [" ", " "]
    }
  },
  ko: {
    input_rules: {
      case_sensitive: false,
      article_required: false,
      accents_optional: false
    },
    orthography: {
      capitalization: "NONE"
    },
    punctuation_normalize: {
      apostrophe_variants: ["'", "'"],
      hyphen_variants: ["‐", "-", "–"],
      space_variants: [" ", " "]
    }
  },
  ja: {
    input_rules: {
      case_sensitive: false,
      article_required: false,
      accents_optional: false
    },
    orthography: {
      capitalization: "NONE"
    },
    punctuation_normalize: {
      apostrophe_variants: ["'", "'"],
      hyphen_variants: ["‐", "-", "–"],
      space_variants: [" ", " "]
    }
  },
  zh: {
    input_rules: {
      case_sensitive: false,
      article_required: false,
      accents_optional: false
    },
    orthography: {
      capitalization: "NONE"
    },
    punctuation_normalize: {
      apostrophe_variants: ["'", "'"],
      hyphen_variants: ["‐", "-", "–"],
      space_variants: [" ", " "]
    }
  }
};
