// data/category_meta.js

const CATEGORY_META = {
  exam: {
    // 고정 ID (필터 값, list_words_* 키로 사용)
    id: "exam",
    // 언어별 라벨
    labels: {
      ko: "시험",
      en: "Exam",
      de: "Prüfung",
      es: "Examen"
    },
    // 언어별 설명 (필요한 언어만 채워도 됨)
    descriptions: {
      ko: "Goethe/ÖSD 등 공식 시험 대비 핵심 단어",
      en: "Core words for Goethe/ÖSD and other official exams",
      de: "Kernwortschatz für Goethe/ÖSD und andere Prüfungen",
      es: "Palabras clave para exámenes oficiales"
    }
  },

  basic: {
    id: "basic",
    labels: {
      ko: "기초",
      en: "Basic",
      de: "Grundwortschatz",
      es: "Básico"
    },
    descriptions: {
      ko: "색, 숫자, 신체 등 성인 기초 필수 단어",
      en: "Essential basics like colors, numbers, body parts",
      de: "Grundlegende Wörter wie Farben, Zahlen, Körperteile",
      es: "Básicos como colores, números, partes del cuerpo"
    }
  },

  daily: {
    id: "daily",
    labels: {
      ko: "일상",
      en: "Daily life",
      de: "Alltag",
      es: "Uso diario"
    },
    descriptions: {
      ko: "일상 대화, 소통, 기본 표현",
      en: "Everyday conversation and common expressions",
      de: "Alltägliche Ausdrücke und Konversation",
      es: "Expresiones cotidianas y conversación"
    }
  },

  travel: {
    id: "travel",
    labels: {
      ko: "여행",
      en: "Travel",
      de: "Reise",
      es: "Viaje"
    },
    descriptions: {
      ko: "이동, 숙소, 음식점, 여행 상황 표현",
      en: "Transport, hotel, restaurant and travel situations",
      de: "Transport, Unterkunft, Restaurant und Reisesituationen",
      es: "Transporte, hotel, restaurante y situaciones de viaje"
    }
  },

  work: {
    id: "work",
    labels: {
      ko: "직장",
      en: "Work",
      de: "Arbeit",
      es: "Trabajo"
    },
    descriptions: {
      ko: "직장, 사무, 업무 관련 단어",
      en: "Office and work-related vocabulary",
      de: "Wortschatz für Büro und Arbeit",
      es: "Vocabulario de oficina y trabajo"
    }
  }
};
