const WORDS_DE_A1_SAFE = typeof WORDS_DE_A1 !== "undefined" ? WORDS_DE_A1 : [];
const WORDS_DE_A2_SAFE = typeof WORDS_DE_A2 !== "undefined" ? WORDS_DE_A2 : [];
const WORDS_DE_B1_SAFE = typeof WORDS_DE_B1 !== "undefined" ? WORDS_DE_B1 : [];
const WORDS_DE_B2_SAFE = typeof WORDS_DE_B2 !== "undefined" ? WORDS_DE_B2 : [];

const WORDS_ES_A1_SAFE = typeof WORDS_ES_A1 !== "undefined" ? WORDS_ES_A1 : [];
const WORDS_ES_A2_SAFE = typeof WORDS_ES_A2 !== "undefined" ? WORDS_ES_A2 : [];
const WORDS_ES_B1_SAFE = typeof WORDS_ES_B1 !== "undefined" ? WORDS_ES_B1 : [];
const WORDS_ES_B2_SAFE = typeof WORDS_ES_B2 !== "undefined" ? WORDS_ES_B2 : [];
const WORDS_EN_A1_SAFE = typeof WORDS_EN_A1 !== "undefined" ? WORDS_EN_A1 : [];
const WORDS_EN_A2_SAFE = typeof WORDS_EN_A2 !== "undefined" ? WORDS_EN_A2 : [];
const WORDS_EN_B1_SAFE = typeof WORDS_EN_B1 !== "undefined" ? WORDS_EN_B1 : [];
const WORDS_EN_B2_SAFE = typeof WORDS_EN_B2 !== "undefined" ? WORDS_EN_B2 : [];
const WORDS_FR_A1_SAFE = typeof WORDS_FR_A1 !== "undefined" ? WORDS_FR_A1 : [];
const WORDS_FR_A2_SAFE = typeof WORDS_FR_A2 !== "undefined" ? WORDS_FR_A2 : [];
const WORDS_FR_B1_SAFE = typeof WORDS_FR_B1 !== "undefined" ? WORDS_FR_B1 : [];
const WORDS_FR_B2_SAFE = typeof WORDS_FR_B2 !== "undefined" ? WORDS_FR_B2 : [];
const WORDS_IT_A1_SAFE = typeof WORDS_IT_A1 !== "undefined" ? WORDS_IT_A1 : [];
const WORDS_IT_A2_SAFE = typeof WORDS_IT_A2 !== "undefined" ? WORDS_IT_A2 : [];
const WORDS_IT_B1_SAFE = typeof WORDS_IT_B1 !== "undefined" ? WORDS_IT_B1 : [];
const WORDS_IT_B2_SAFE = typeof WORDS_IT_B2 !== "undefined" ? WORDS_IT_B2 : [];
const WORDS_PT_A1_SAFE = typeof WORDS_PT_A1 !== "undefined" ? WORDS_PT_A1 : [];
const WORDS_PT_A2_SAFE = typeof WORDS_PT_A2 !== "undefined" ? WORDS_PT_A2 : [];
const WORDS_PT_B1_SAFE = typeof WORDS_PT_B1 !== "undefined" ? WORDS_PT_B1 : [];
const WORDS_PT_B2_SAFE = typeof WORDS_PT_B2 !== "undefined" ? WORDS_PT_B2 : [];
const WORDS_PL_A1_SAFE = typeof WORDS_PL_A1 !== "undefined" ? WORDS_PL_A1 : [];
const WORDS_PL_A2_SAFE = typeof WORDS_PL_A2 !== "undefined" ? WORDS_PL_A2 : [];
const WORDS_PL_B1_SAFE = typeof WORDS_PL_B1 !== "undefined" ? WORDS_PL_B1 : [];
const WORDS_PL_B2_SAFE = typeof WORDS_PL_B2 !== "undefined" ? WORDS_PL_B2 : [];
const WORDS_NL_A1_SAFE = typeof WORDS_NL_A1 !== "undefined" ? WORDS_NL_A1 : [];
const WORDS_NL_A2_SAFE = typeof WORDS_NL_A2 !== "undefined" ? WORDS_NL_A2 : [];
const WORDS_NL_B1_SAFE = typeof WORDS_NL_B1 !== "undefined" ? WORDS_NL_B1 : [];
const WORDS_NL_B2_SAFE = typeof WORDS_NL_B2 !== "undefined" ? WORDS_NL_B2 : [];
const WORDS_RU_A1_SAFE = typeof WORDS_RU_A1 !== "undefined" ? WORDS_RU_A1 : [];
const WORDS_RU_A2_SAFE = typeof WORDS_RU_A2 !== "undefined" ? WORDS_RU_A2 : [];
const WORDS_RU_B1_SAFE = typeof WORDS_RU_B1 !== "undefined" ? WORDS_RU_B1 : [];
const WORDS_RU_B2_SAFE = typeof WORDS_RU_B2 !== "undefined" ? WORDS_RU_B2 : [];
const WORDS_SV_A1_SAFE = typeof WORDS_SV_A1 !== "undefined" ? WORDS_SV_A1 : [];
const WORDS_SV_A2_SAFE = typeof WORDS_SV_A2 !== "undefined" ? WORDS_SV_A2 : [];
const WORDS_SV_B1_SAFE = typeof WORDS_SV_B1 !== "undefined" ? WORDS_SV_B1 : [];
const WORDS_SV_B2_SAFE = typeof WORDS_SV_B2 !== "undefined" ? WORDS_SV_B2 : [];
const WORDS_KO_A1_SAFE = typeof WORDS_KO_A1 !== "undefined" ? WORDS_KO_A1 : [];
const WORDS_KO_A2_SAFE = typeof WORDS_KO_A2 !== "undefined" ? WORDS_KO_A2 : [];
const WORDS_KO_B1_SAFE = typeof WORDS_KO_B1 !== "undefined" ? WORDS_KO_B1 : [];
const WORDS_KO_B2_SAFE = typeof WORDS_KO_B2 !== "undefined" ? WORDS_KO_B2 : [];
const WORDS_JA_A1_SAFE = typeof WORDS_JA_A1 !== "undefined" ? WORDS_JA_A1 : [];
const WORDS_JA_A2_SAFE = typeof WORDS_JA_A2 !== "undefined" ? WORDS_JA_A2 : [];
const WORDS_JA_B1_SAFE = typeof WORDS_JA_B1 !== "undefined" ? WORDS_JA_B1 : [];
const WORDS_JA_B2_SAFE = typeof WORDS_JA_B2 !== "undefined" ? WORDS_JA_B2 : [];
const WORDS_ZH_A1_SAFE = typeof WORDS_ZH_A1 !== "undefined" ? WORDS_ZH_A1 : [];
const WORDS_ZH_A2_SAFE = typeof WORDS_ZH_A2 !== "undefined" ? WORDS_ZH_A2 : [];
const WORDS_ZH_B1_SAFE = typeof WORDS_ZH_B1 !== "undefined" ? WORDS_ZH_B1 : [];
const WORDS_ZH_B2_SAFE = typeof WORDS_ZH_B2 !== "undefined" ? WORDS_ZH_B2 : [];

const ALL_WORDS_DE = [
  ...WORDS_DE_A1_SAFE,
  ...WORDS_DE_A2_SAFE,
  ...WORDS_DE_B1_SAFE,
  ...WORDS_DE_B2_SAFE,
];

const ALL_WORDS_ES = [
  ...WORDS_ES_A1_SAFE,
  ...WORDS_ES_A2_SAFE,
  ...WORDS_ES_B1_SAFE,
  ...WORDS_ES_B2_SAFE,
];

const ALL_WORDS_EN = [
  ...WORDS_EN_A1_SAFE,
  ...WORDS_EN_A2_SAFE,
  ...WORDS_EN_B1_SAFE,
  ...WORDS_EN_B2_SAFE,
];

const ALL_WORDS_FR = [
  ...WORDS_FR_A1_SAFE,
  ...WORDS_FR_A2_SAFE,
  ...WORDS_FR_B1_SAFE,
  ...WORDS_FR_B2_SAFE,
];

const ALL_WORDS_IT = [
  ...WORDS_IT_A1_SAFE,
  ...WORDS_IT_A2_SAFE,
  ...WORDS_IT_B1_SAFE,
  ...WORDS_IT_B2_SAFE,
];

const ALL_WORDS_PT = [
  ...WORDS_PT_A1_SAFE,
  ...WORDS_PT_A2_SAFE,
  ...WORDS_PT_B1_SAFE,
  ...WORDS_PT_B2_SAFE,
];

const ALL_WORDS_PL = [
  ...WORDS_PL_A1_SAFE,
  ...WORDS_PL_A2_SAFE,
  ...WORDS_PL_B1_SAFE,
  ...WORDS_PL_B2_SAFE,
];

const ALL_WORDS_NL = [
  ...WORDS_NL_A1_SAFE,
  ...WORDS_NL_A2_SAFE,
  ...WORDS_NL_B1_SAFE,
  ...WORDS_NL_B2_SAFE,
];

const ALL_WORDS_RU = [
  ...WORDS_RU_A1_SAFE,
  ...WORDS_RU_A2_SAFE,
  ...WORDS_RU_B1_SAFE,
  ...WORDS_RU_B2_SAFE,
];

const ALL_WORDS_SV = [
  ...WORDS_SV_A1_SAFE,
  ...WORDS_SV_A2_SAFE,
  ...WORDS_SV_B1_SAFE,
  ...WORDS_SV_B2_SAFE,
];

const ALL_WORDS_KO = [
  ...WORDS_KO_A1_SAFE,
  ...WORDS_KO_A2_SAFE,
  ...WORDS_KO_B1_SAFE,
  ...WORDS_KO_B2_SAFE,
];

const ALL_WORDS_JA = [
  ...WORDS_JA_A1_SAFE,
  ...WORDS_JA_A2_SAFE,
  ...WORDS_JA_B1_SAFE,
  ...WORDS_JA_B2_SAFE,
];

const ALL_WORDS_ZH = [
  ...WORDS_ZH_A1_SAFE,
  ...WORDS_ZH_A2_SAFE,
  ...WORDS_ZH_B1_SAFE,
  ...WORDS_ZH_B2_SAFE,
];

function getAllWords() {
  const study = (SETTINGS.studyLang || "de").toLowerCase();
  if (study === "en") return ALL_WORDS_EN || [];
  if (study === "fr") return ALL_WORDS_FR || [];
  if (study === "it") return ALL_WORDS_IT || [];
  if (study === "pt") return ALL_WORDS_PT || [];
  if (study === "pl") return ALL_WORDS_PL || [];
  if (study === "nl") return ALL_WORDS_NL || [];
  if (study === "ru") return ALL_WORDS_RU || [];
  if (study === "sv") return ALL_WORDS_SV || [];
  if (study === "ko") return ALL_WORDS_KO || [];
  if (study === "ja") return ALL_WORDS_JA || [];
  if (study === "zh") return ALL_WORDS_ZH || [];
  if (study === "es") return ALL_WORDS_ES || [];
  if (study === "de") return ALL_WORDS_DE || [];
  return ALL_WORDS_DE || [];
}
