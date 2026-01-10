// DE A1 v1.0 (702 unique lemmas, vs A2/B1...)
const WORDS_DE_A1 = [
  {
    "id": "ab_prep_1",
    "lemma": "ab",
    "pos": "Präposition",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "travel"
    ],
    "meanings": {
      "de": "ab",
      "ko": "부터",
      "en": "from",
      "es": "desde",
      "fr": "à partir de",
      "it": "da",
      "pt": "a partir de",
      "ja": "から",
      "zh": "从",
      "ru": "с"
    },
    "examples": [
      "Ab morgen muss ich arbeiten."
    ],
    "meta": {}
  },
  {
    "id": "aber_konj_1",
    "lemma": "aber",
    "pos": "Konjunktion",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily"
    ],
    "meanings": {
      "de": "aber",
      "ko": "그러나",
      "en": "but",
      "es": "pero",
      "fr": "mais",
      "it": "ma",
      "pt": "mas",
      "ja": "しかし",
      "zh": "但是",
      "ru": "но"
    },
    "examples": [
      "Ich bin oft im Büro, aber nur für wenige Stunden."
    ],
    "meta": {}
  },
  {
    "id": "abfahren_v_1",
    "lemma": "abfahren",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel"
    ],
    "meanings": {
      "de": "abfahren",
      "ko": "출발하다",
      "en": "depart",
      "es": "salir",
      "fr": "partir",
      "it": "partire",
      "pt": "partir",
      "ja": "出発する",
      "zh": "出发",
      "ru": "отправляться"
    },
    "examples": [
      "Wir fahren um zwölf Uhr ab."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich fahre ab",
      "pres_du": "du fährst ab",
      "pres_er": "er/sie/es fährt ab",
      "praet": "fuhr ab",
      "part2": "abgefahren",
      "aux": "sein"
    }
  },
  {
    "id": "abfahrt_nf_1",
    "lemma": "Abfahrt",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel"
    ],
    "meanings": {
      "de": "Abfahrt",
      "ko": "출발",
      "en": "departure",
      "es": "salida",
      "fr": "départ",
      "it": "partenza",
      "pt": "partida",
      "ja": "出発",
      "zh": "出发",
      "ru": "отправление"
    },
    "examples": [
      "Vor der Abfahrt rufe ich an."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Abfahrten"
  },
  {
    "id": "abgeben_v_1",
    "lemma": "abgeben",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "work"
    ],
    "meanings": {
      "de": "abgeben",
      "ko": "반납하다",
      "en": "hand in",
      "es": "entregar",
      "fr": "remettre",
      "it": "consegnare",
      "pt": "entregar",
      "ja": "提出する",
      "zh": "交",
      "ru": "сдавать"
    },
    "examples": [
      "Ich muss meine Schlüssel abgeben."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich gebe ab",
      "pres_du": "du gibst ab",
      "pres_er": "er/sie/es gibt ab",
      "praet": "gab ab",
      "part2": "abgegeben",
      "aux": "haben"
    }
  },
  {
    "id": "abholen_v_1",
    "lemma": "abholen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily"
    ],
    "meanings": {
      "de": "abholen",
      "ko": "마중 나가다",
      "en": "pick up",
      "es": "recoger",
      "fr": "aller chercher",
      "it": "andare a prendere",
      "pt": "buscar",
      "ja": "迎えに行く",
      "zh": "接",
      "ru": "встречать"
    },
    "examples": [
      "Wir müssen noch meinen Bruder abholen."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich hole ab",
      "pres_du": "du holst ab",
      "pres_er": "er/sie/es holt ab",
      "praet": "holte ab",
      "part2": "abgeholt",
      "aux": "haben"
    }
  },
  {
    "id": "abholen_v_2",
    "lemma": "abholen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily"
    ],
    "meanings": {
      "de": "abholen",
      "ko": "수령하다",
      "en": "pick up",
      "es": "recoger",
      "fr": "récupérer",
      "it": "ritirare",
      "pt": "levantar",
      "ja": "受け取る",
      "zh": "取",
      "ru": "забирать"
    },
    "examples": [
      "Wann kann ich den Schrank bei dir abholen?"
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich hole ab",
      "pres_du": "du holst ab",
      "pres_er": "er/sie/es holt ab",
      "praet": "holte ab",
      "part2": "abgeholt",
      "aux": "haben"
    }
  },
  {
    "id": "absender_nm_1",
    "lemma": "Absender",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "work",
      "daily"
    ],
    "meanings": {
      "de": "Absender",
      "ko": "발신인",
      "en": "sender",
      "es": "remitente",
      "fr": "expéditeur",
      "it": "mittente",
      "pt": "remetente",
      "ja": "差出人",
      "zh": "发件人",
      "ru": "отправитель"
    },
    "examples": [
      "Da ist ein Brief für dich ohne Absender."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Absender"
  },
  {
    "id": "achtung_int_1",
    "lemma": "Achtung",
    "pos": "Interjektion",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "basic"
    ],
    "meanings": {
      "de": "Achtung",
      "ko": "주의",
      "en": "attention",
      "es": "atención",
      "fr": "attention",
      "it": "attenzione",
      "pt": "atenção",
      "ja": "注意",
      "zh": "注意",
      "ru": "внимание"
    },
    "examples": [
      "Achtung! Das dürfen Sie nicht tun."
    ],
    "meta": {}
  },
  {
    "id": "adresse_nf_1",
    "lemma": "Adresse",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "basic"
    ],
    "meanings": {
      "de": "Adresse",
      "ko": "주소",
      "en": "address",
      "es": "dirección",
      "fr": "adresse",
      "it": "indirizzo",
      "pt": "endereço",
      "ja": "住所",
      "zh": "地址",
      "ru": "адрес"
    },
    "examples": [
      "Können Sie mir seine Adresse sagen?"
    ],
    "meta": {},
    "gender": "die",
    "plural": "Adressen"
  },
  {
    "id": "alle_pron_1",
    "lemma": "alle",
    "pos": "Pronomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic"
    ],
    "meanings": {
      "de": "alle",
      "ko": "모두",
      "en": "all",
      "es": "todo",
      "fr": "tout",
      "it": "tutto",
      "pt": "todo",
      "ja": "すべて",
      "zh": "所有",
      "ru": "все"
    },
    "examples": [
      "Sind alle da?"
    ],
    "meta": {}
  },
  {
    "id": "allein_adj_1",
    "lemma": "allein",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily"
    ],
    "meanings": {
      "de": "allein",
      "ko": "혼자",
      "en": "alone",
      "es": "solo",
      "fr": "seul",
      "it": "da solo",
      "pt": "sozinho",
      "ja": "一人で",
      "zh": "独自",
      "ru": "один"
    },
    "examples": [
      "Er kommt allein."
    ],
    "meta": {}
  },
  {
    "id": "also_adv_1",
    "lemma": "also",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily"
    ],
    "meanings": {
      "de": "also",
      "ko": "그러므로",
      "en": "so",
      "es": "así que",
      "fr": "donc",
      "it": "quindi",
      "pt": "portanto",
      "ja": "だから",
      "zh": "所以",
      "ru": "итак"
    },
    "examples": [
      "Also, es ist so ..."
    ],
    "meta": {}
  },
  {
    "id": "alt_adj_1",
    "lemma": "alt",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic"
    ],
    "meanings": {
      "de": "alt",
      "ko": "오래된",
      "en": "old",
      "es": "viejo",
      "fr": "vieux",
      "it": "vecchio",
      "pt": "velho",
      "ja": "古い",
      "zh": "老",
      "ru": "старый"
    },
    "examples": [
      "Wie alt sind Sie?"
    ],
    "meta": {}
  },
  {
    "id": "alter_nn_1",
    "lemma": "Alter",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic"
    ],
    "meanings": {
      "de": "Alter",
      "ko": "나이",
      "en": "age",
      "es": "edad",
      "fr": "âge",
      "it": "età",
      "pt": "idade",
      "ja": "年齢",
      "zh": "年龄",
      "ru": "возраст"
    },
    "examples": [
      "Alter: 26 Jahre."
    ],
    "meta": {},
    "gender": "das",
    "plural": "Alter"
  },
  {
    "id": "an_prep_1",
    "lemma": "an",
    "pos": "Präposition",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic"
    ],
    "meanings": {
      "de": "an",
      "ko": "에",
      "en": "at",
      "es": "en",
      "fr": "à",
      "it": "a",
      "pt": "em",
      "ja": "～に",
      "zh": "在",
      "ru": "на"
    },
    "examples": [
      "Fahren Sie an der nächsten Straße nach rechts."
    ],
    "meta": {}
  },
  {
    "id": "anbieten_v_1",
    "lemma": "anbieten",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "shopping"
    ],
    "meanings": {
      "de": "anbieten",
      "ko": "제공하다",
      "en": "offer",
      "es": "ofrecer",
      "fr": "offrir",
      "it": "offrire",
      "pt": "oferecer",
      "ja": "提供する",
      "zh": "提供",
      "ru": "предлагать"
    },
    "examples": [
      "Was darf ich dir anbieten?"
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich biete an",
      "pres_du": "du bietest an",
      "pres_er": "er/sie/es bietet an",
      "praet": "bot an",
      "part2": "angeboten",
      "aux": "haben"
    }
  },
  {
    "id": "angebot_nn_1",
    "lemma": "Angebot",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "shopping",
      "daily"
    ],
    "meanings": {
      "de": "Angebot",
      "ko": "제안",
      "en": "offer",
      "es": "oferta",
      "fr": "offre",
      "it": "offerta",
      "pt": "oferta",
      "ja": "申し出",
      "zh": "提议",
      "ru": "предложение"
    },
    "examples": [
      "Heute sind Sportschuhe im Angebot."
    ],
    "meta": {},
    "gender": "das",
    "plural": "Angebote"
  },
  {
    "id": "andere_pron_1",
    "lemma": "andere",
    "pos": "Pronomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic"
    ],
    "meanings": {
      "de": "andere",
      "ko": "다른",
      "en": "other",
      "es": "otro",
      "fr": "autre",
      "it": "altro",
      "pt": "outro",
      "ja": "他の",
      "zh": "其他",
      "ru": "другой"
    },
    "examples": [
      "Nein, ich möchte die andere."
    ],
    "meta": {}
  },
  {
    "id": "anfangen_v_1",
    "lemma": "anfangen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily"
    ],
    "meanings": {
      "de": "anfangen",
      "ko": "시작하다",
      "en": "begin",
      "es": "empezar",
      "fr": "commencer",
      "it": "cominciare",
      "pt": "começar",
      "ja": "始める",
      "zh": "开始",
      "ru": "начинать"
    },
    "examples": [
      "Hier fängt die Bahnhofstraße an."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich fange an",
      "pres_du": "du fängst an",
      "pres_er": "er/sie/es fängt an",
      "praet": "fing an",
      "part2": "angefangen",
      "aux": "haben"
    }
  },
  {
    "id": "anfang_nm_1",
    "lemma": "Anfang",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "time"
    ],
    "meanings": {
      "de": "Anfang",
      "ko": "시작",
      "en": "beginning",
      "es": "comienzo",
      "fr": "début",
      "it": "inizio",
      "pt": "início",
      "ja": "始まり",
      "zh": "开始",
      "ru": "начало"
    },
    "examples": [
      "Sie wohnt am Anfang der Straße."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Anfänge"
  },
  {
    "id": "anklicken_v_1",
    "lemma": "anklicken",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "work",
      "daily"
    ],
    "meanings": {
      "de": "anklicken",
      "ko": "클릭하다",
      "en": "click",
      "es": "hacer clic",
      "fr": "cliquer",
      "it": "cliccare",
      "pt": "clicar",
      "ja": "クリックする",
      "zh": "点击",
      "ru": "кликать"
    },
    "examples": [
      "Da musst du dieses Wort anklicken."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich klicke an",
      "pres_du": "du klickst an",
      "pres_er": "er/sie/es klickt an",
      "praet": "klickte an",
      "part2": "angeklickt",
      "aux": "haben"
    }
  },
  {
    "id": "ankommen_v_1",
    "lemma": "ankommen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel"
    ],
    "meanings": {
      "de": "ankommen",
      "ko": "도착하다",
      "en": "arrive",
      "es": "llegar",
      "fr": "arriver",
      "it": "arrivare",
      "pt": "chegar",
      "ja": "到着する",
      "zh": "到达",
      "ru": "прибывать"
    },
    "examples": [
      "Wann kommt dieser Zug in Hamburg an?"
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich komme an",
      "pres_du": "du kommst an",
      "pres_er": "er/sie/es kommt an",
      "praet": "kam an",
      "part2": "angekommen",
      "aux": "sein"
    }
  },
  {
    "id": "ankunft_nf_1",
    "lemma": "Ankunft",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel"
    ],
    "meanings": {
      "de": "Ankunft",
      "ko": "도착",
      "en": "arrival",
      "es": "llegada",
      "fr": "arrivée",
      "it": "arrivo",
      "pt": "chegada",
      "ja": "到着",
      "zh": "到达",
      "ru": "прибытие"
    },
    "examples": [
      "Auf diesem Plan steht nur die Ankunft der Züge."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Ankünfte"
  },
  {
    "id": "ankreuzen_v_1",
    "lemma": "ankreuzen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily"
    ],
    "meanings": {
      "de": "ankreuzen",
      "ko": "표시하다",
      "en": "mark with a cross",
      "es": "marcar con una cruz",
      "fr": "cocher",
      "it": "segnare con una crocetta",
      "pt": "assinalar",
      "ja": "印をつける",
      "zh": "打勾",
      "ru": "отмечать крестиком"
    },
    "examples": [
      "Auf dem Formular müssen Sie an mehreren Stellen etwas ankreuzen."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich kreuze an",
      "pres_du": "du kreuzt an",
      "pres_er": "er/sie/es kreuzt an",
      "praet": "kreuzte an",
      "part2": "angekreuzt",
      "aux": "haben"
    }
  },
  {
    "id": "anmachen_v_1",
    "lemma": "anmachen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily"
    ],
    "meanings": {
      "de": "anmachen",
      "ko": "켜다",
      "en": "turn on",
      "es": "encender",
      "fr": "allumer",
      "it": "accendere",
      "pt": "ligar",
      "ja": "つける",
      "zh": "打开",
      "ru": "включать"
    },
    "examples": [
      "Mach bitte das Licht an!"
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich mache an",
      "pres_du": "du machst an",
      "pres_er": "er/sie/es macht an",
      "praet": "machte an",
      "part2": "angemacht",
      "aux": "haben"
    }
  },
  {
    "id": "anmelden_v_1",
    "lemma": "anmelden",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "work"
    ],
    "meanings": {
      "de": "anmelden",
      "ko": "등록하다",
      "en": "register",
      "es": "inscribirse",
      "fr": "s'inscrire",
      "it": "registrarsi",
      "pt": "inscrever-se",
      "ja": "登録する",
      "zh": "注册",
      "ru": "регистрировать"
    },
    "examples": [
      "Wo kann ich mich anmelden?"
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich melde an",
      "pres_du": "du meldest an",
      "pres_er": "er/sie/es meldet an",
      "praet": "meldete an",
      "part2": "angemeldet",
      "aux": "haben"
    }
  },
  {
    "id": "anmeldung_nf_1",
    "lemma": "Anmeldung",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "work"
    ],
    "meanings": {
      "de": "Anmeldung",
      "ko": "등록",
      "en": "registration",
      "es": "inscripción",
      "fr": "inscription",
      "it": "registrazione",
      "pt": "inscrição",
      "ja": "登録",
      "zh": "注册",
      "ru": "регистрация"
    },
    "examples": [
      "Eine Anmeldung für diesen Kurs ist nicht mehr möglich."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Anmeldungen"
  },
  {
    "id": "anrede_nf_1",
    "lemma": "Anrede",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "work",
      "daily"
    ],
    "meanings": {
      "de": "Anrede",
      "ko": "호칭",
      "en": "salutation",
      "es": "tratamiento",
      "fr": "formule d'appel",
      "it": "appellativo",
      "pt": "tratamento",
      "ja": "呼びかけ",
      "zh": "称呼",
      "ru": "обращение"
    },
    "examples": [
      "Schreiben Sie auch eine Anrede und einen Gruß."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Anreden"
  },
  {
    "id": "anrufen_v_1",
    "lemma": "anrufen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "communication"
    ],
    "meanings": {
      "de": "anrufen",
      "ko": "전화하다",
      "en": "call",
      "es": "llamar",
      "fr": "appeler",
      "it": "chiamare",
      "pt": "ligar",
      "ja": "電話する",
      "zh": "打电话",
      "ru": "звонить"
    },
    "examples": [
      "Kann man Sie anrufen?"
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich rufe an",
      "pres_du": "du rufst an",
      "pres_er": "er/sie/es ruft an",
      "praet": "rief an",
      "part2": "angerufen",
      "aux": "haben"
    }
  },
  {
    "id": "anruf_nm_1",
    "lemma": "Anruf",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "communication"
    ],
    "meanings": {
      "de": "Anruf",
      "ko": "전화",
      "en": "call",
      "es": "llamada",
      "fr": "appel",
      "it": "chiamata",
      "pt": "chamada",
      "ja": "電話",
      "zh": "电话",
      "ru": "звонок"
    },
    "examples": [
      "Sie bekommt viele Anrufe auf ihrem Handy."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Anrufe"
  },
  {
    "id": "anrufbeantworter_nm_1",
    "lemma": "Anrufbeantworter",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "communication"
    ],
    "meanings": {
      "de": "Anrufbeantworter",
      "ko": "자동응답기",
      "en": "answering machine",
      "es": "contestador automático",
      "fr": "répondeur",
      "it": "segreteria telefonica",
      "pt": "atendedor de chamadas",
      "ja": "留守番電話",
      "zh": "电话答录机",
      "ru": "автоответчик"
    },
    "examples": [
      "Sprechen Sie bitte auf den Anrufbeantworter."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Anrufbeantworter"
  },
  {
    "id": "ansage_nf_1",
    "lemma": "Ansage",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel",
      "public_transport"
    ],
    "meanings": {
      "de": "Ansage",
      "ko": "안내 방송",
      "en": "announcement",
      "es": "anuncio",
      "fr": "annonce",
      "it": "annuncio",
      "pt": "anúncio",
      "ja": "アナウンス",
      "zh": "通告",
      "ru": "объявление"
    },
    "examples": [
      "Hören Sie die Ansagen."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Ansagen"
  },
  {
    "id": "anschluss_nm_1",
    "lemma": "Anschluss",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel",
      "communication"
    ],
    "meanings": {
      "de": "Anschluss",
      "ko": "연결",
      "en": "connection",
      "es": "conexión",
      "fr": "correspondance",
      "it": "coincidenza",
      "pt": "ligação",
      "ja": "接続",
      "zh": "连接",
      "ru": "подключение"
    },
    "examples": [
      "In Mannheim haben Sie Anschluss nach Saarbrücken."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Anschlüsse"
  },
  {
    "id": "antworten_v_1",
    "lemma": "antworten",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily"
    ],
    "meanings": {
      "de": "antworten",
      "ko": "대답하다",
      "en": "answer",
      "es": "responder",
      "fr": "répondre",
      "it": "rispondere",
      "pt": "responder",
      "ja": "答える",
      "zh": "回答",
      "ru": "отвечать"
    },
    "examples": [
      "Er antwortet nicht."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich antworte",
      "pres_du": "du antwortest",
      "pres_er": "er/sie/es antwortet",
      "praet": "antwortete",
      "part2": "geantwortet",
      "aux": "haben"
    }
  },
  {
    "id": "antwort_nf_1",
    "lemma": "Antwort",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily"
    ],
    "meanings": {
      "de": "Antwort",
      "ko": "대답",
      "en": "answer",
      "es": "respuesta",
      "fr": "réponse",
      "it": "risposta",
      "pt": "resposta",
      "ja": "答え",
      "zh": "回答",
      "ru": "ответ"
    },
    "examples": [
      "Er gibt leider keine Antwort."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Antworten"
  },
  {
    "id": "anzeige_nf_1",
    "lemma": "Anzeige",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "shopping"
    ],
    "meanings": {
      "de": "Anzeige",
      "ko": "광고",
      "en": "advertisement",
      "es": "anuncio",
      "fr": "annonce",
      "it": "annuncio",
      "pt": "anúncio",
      "ja": "広告",
      "zh": "广告",
      "ru": "объявление"
    },
    "examples": [
      "Ich habe Ihre Anzeige in der Zeitung gelesen."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Anzeigen"
  },
  {
    "id": "anziehen_v_1",
    "lemma": "anziehen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "clothing"
    ],
    "meanings": {
      "de": "anziehen",
      "ko": "입다",
      "en": "put on",
      "es": "ponerse",
      "fr": "s'habiller",
      "it": "vestirsi",
      "pt": "vestir",
      "ja": "着る",
      "zh": "穿",
      "ru": "надевать"
    },
    "examples": [
      "Ich muss mich noch anziehen."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich ziehe an",
      "pres_du": "du ziehst an",
      "pres_er": "er/sie/es zieht an",
      "praet": "zog an",
      "part2": "angezogen",
      "aux": "haben"
    }
  },
  {
    "id": "apartment_nn_1",
    "lemma": "Apartment",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel",
      "housing"
    ],
    "meanings": {
      "de": "Apartment",
      "ko": "아파트",
      "en": "apartment",
      "es": "apartamento",
      "fr": "appartement",
      "it": "appartamento",
      "pt": "apartamento",
      "ja": "アパート",
      "zh": "公寓",
      "ru": "квартира"
    },
    "examples": [
      "Wir haben ein Apartment gemietet."
    ],
    "meta": {},
    "gender": "das",
    "plural": "Apartments"
  },
  {
    "id": "apfel_nm_1",
    "lemma": "Apfel",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "food",
      "daily"
    ],
    "meanings": {
      "de": "Apfel",
      "ko": "사과",
      "en": "apple",
      "es": "manzana",
      "fr": "pomme",
      "it": "mela",
      "pt": "maçã",
      "ja": "リンゴ",
      "zh": "苹果",
      "ru": "яблоко"
    },
    "examples": [
      "Ein Pfund Äpfel bitte."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Äpfel"
  },
  {
    "id": "appetit_nm_1",
    "lemma": "Appetit",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "food",
      "daily"
    ],
    "meanings": {
      "de": "Appetit",
      "ko": "식욕",
      "en": "appetite",
      "es": "apetito",
      "fr": "appétit",
      "it": "appetito",
      "pt": "apetite",
      "ja": "食欲",
      "zh": "食欲",
      "ru": "аппетит"
    },
    "examples": [
      "Guten Appetit!"
    ],
    "meta": {},
    "gender": "der"
  },
  {
    "id": "arbeiten_v_1",
    "lemma": "arbeiten",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "work",
      "daily"
    ],
    "meanings": {
      "de": "arbeiten",
      "ko": "일하다",
      "en": "work",
      "es": "trabajar",
      "fr": "travailler",
      "it": "lavorare",
      "pt": "trabalhar",
      "ja": "働く",
      "zh": "工作",
      "ru": "работать"
    },
    "examples": [
      "Wo arbeiten Sie?"
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich arbeite",
      "pres_du": "du arbeitest",
      "pres_er": "er/sie/es arbeitet",
      "praet": "arbeitete",
      "part2": "gearbeitet",
      "aux": "haben"
    }
  },
  {
    "id": "arbeit_nf_1",
    "lemma": "Arbeit",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "work",
      "daily"
    ],
    "meanings": {
      "de": "Arbeit",
      "ko": "일",
      "en": "work",
      "es": "trabajo",
      "fr": "travail",
      "it": "lavoro",
      "pt": "trabalho",
      "ja": "仕事",
      "zh": "工作",
      "ru": "работа"
    },
    "examples": [
      "Mein Bruder sucht Arbeit."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Arbeiten"
  },
  {
    "id": "arbeitslos_adj_1",
    "lemma": "arbeitslos",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": [
      "exam",
      "work",
      "society"
    ],
    "meanings": {
      "de": "arbeitslos",
      "ko": "실직한",
      "en": "unemployed",
      "es": "desempleado",
      "fr": "au chômage",
      "it": "disoccupato",
      "pt": "desempregado",
      "ja": "失業した",
      "zh": "失业",
      "ru": "безработный"
    },
    "examples": [
      "Es gibt bei uns viele Leute, die schon lange arbeitslos sind."
    ],
    "meta": {}
  },
  {
    "id": "arbeitsplatz_nm_1",
    "lemma": "Arbeitsplatz",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "work"
    ],
    "meanings": {
      "de": "Arbeitsplatz",
      "ko": "직장",
      "en": "workplace",
      "es": "lugar de trabajo",
      "fr": "lieu de travail",
      "it": "posto di lavoro",
      "pt": "local de trabalho",
      "ja": "職場",
      "zh": "工作场所",
      "ru": "рабочее место"
    },
    "examples": [
      "An meinem Arbeitsplatz fehlt ein Drucker."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Arbeitsplätze"
  },
  {
    "id": "arm_nm_1",
    "lemma": "Arm",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "body",
      "basic"
    ],
    "meanings": {
      "de": "Arm",
      "ko": "팔",
      "en": "arm",
      "es": "brazo",
      "fr": "bras",
      "it": "braccio",
      "pt": "braço",
      "ja": "腕",
      "zh": "手臂",
      "ru": "рука"
    },
    "examples": [
      "Mein Arm tut weh."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Arme"
  },
  {
    "id": "arzt_nm_1",
    "lemma": "Arzt",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "health",
      "daily"
    ],
    "meanings": {
      "de": "Arzt",
      "ko": "의사",
      "en": "doctor",
      "es": "médico",
      "fr": "médecin",
      "it": "medico",
      "pt": "médico",
      "ja": "医者",
      "zh": "医生",
      "ru": "врач"
    },
    "examples": [
      "Morgen habe ich einen Termin bei meiner Ärztin."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Ärzte"
  },
  {
    "id": "auch_adv_1",
    "lemma": "auch",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "basic"
    ],
    "meanings": {
      "de": "auch",
      "ko": "또한",
      "en": "also",
      "es": "también",
      "fr": "aussi",
      "it": "anche",
      "pt": "também",
      "ja": "～もまた",
      "zh": "也",
      "ru": "тоже"
    },
    "examples": [
      "Ich bin auch Spanier."
    ],
    "meta": {}
  },
  {
    "id": "auf_prep_1",
    "lemma": "auf",
    "pos": "Präposition",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic"
    ],
    "meanings": {
      "de": "auf",
      "ko": "위에",
      "en": "on",
      "es": "en",
      "fr": "sur",
      "it": "su",
      "pt": "em",
      "ja": "～の上に",
      "zh": "在...上",
      "ru": "на"
    },
    "examples": [
      "Die Kinder spielen auf der Straße."
    ],
    "meta": {}
  },
  {
    "id": "aufgabe_nf_1",
    "lemma": "Aufgabe",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "work",
      "school"
    ],
    "meanings": {
      "de": "Aufgabe",
      "ko": "과제",
      "en": "task",
      "es": "tarea",
      "fr": "tâche",
      "it": "compito",
      "pt": "tarefa",
      "ja": "課題",
      "zh": "任务",
      "ru": "задача"
    },
    "examples": [
      "Das ist eine schwere Aufgabe."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Aufgaben"
  },
  {
    "id": "aufhoeren_v_1",
    "lemma": "aufhören",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily"
    ],
    "meanings": {
      "de": "aufhören",
      "ko": "그만두다",
      "en": "stop",
      "es": "parar",
      "fr": "arrêter",
      "it": "smettere",
      "pt": "parar",
      "ja": "やめる",
      "zh": "停止",
      "ru": "прекращать"
    },
    "examples": [
      "Ich höre jetzt auf."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich höre auf",
      "pres_du": "du hörst auf",
      "pres_er": "er/sie/es hört auf",
      "praet": "hörte auf",
      "part2": "aufgehört",
      "aux": "haben"
    }
  },
  {
    "id": "aufhoeren_v_2",
    "lemma": "aufhören",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "time"
    ],
    "meanings": {
      "de": "aufhören",
      "ko": "끝나다",
      "en": "end",
      "es": "terminar",
      "fr": "se terminer",
      "it": "finire",
      "pt": "terminar",
      "ja": "終わる",
      "zh": "结束",
      "ru": "заканчиваться"
    },
    "examples": [
      "Der Kurs hört in einer Woche auf."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich höre auf",
      "pres_du": "du hörst auf",
      "pres_er": "er/sie/es hört auf",
      "praet": "hörte auf",
      "part2": "aufgehört",
      "aux": "haben"
    }
  },
  {
    "id": "aufstehen_v_1",
    "lemma": "aufstehen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily"
    ],
    "meanings": {
      "de": "aufstehen",
      "ko": "일어나다",
      "en": "get up",
      "es": "levantarse",
      "fr": "se lever",
      "it": "alzarsi",
      "pt": "levantar-se",
      "ja": "起きる",
      "zh": "起床",
      "ru": "вставать"
    },
    "examples": [
      "Ich muss immer um vier Uhr aufstehen."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich stehe auf",
      "pres_du": "du stehst auf",
      "pres_er": "er/sie/es steht auf",
      "praet": "stand auf",
      "part2": "aufgestanden",
      "aux": "sein"
    }
  },
  {
    "id": "aufzug_nm_1",
    "lemma": "Aufzug",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "housing",
      "daily"
    ],
    "meanings": {
      "de": "Aufzug",
      "ko": "엘리베이터",
      "en": "elevator",
      "es": "ascensor",
      "fr": "ascenseur",
      "it": "ascensore",
      "pt": "elevador",
      "ja": "エレベーター",
      "zh": "电梯",
      "ru": "лифт"
    },
    "examples": [
      "In diesem Haus gibt es keinen Aufzug."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Aufzüge"
  },
  {
    "id": "auge_nn_1",
    "lemma": "Auge",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "body"
    ],
    "meanings": {
      "de": "Auge",
      "ko": "눈",
      "en": "eye",
      "es": "ojo",
      "fr": "œil",
      "it": "occhio",
      "pt": "olho",
      "ja": "目",
      "zh": "眼睛",
      "ru": "глаз"
    },
    "examples": [
      "Er hat blaue Augen."
    ],
    "meta": {},
    "gender": "das",
    "plural": "Augen"
  },
  {
    "id": "aus_prep_1",
    "lemma": "aus",
    "pos": "Präposition",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic",
      "travel"
    ],
    "meanings": {
      "de": "aus",
      "ko": "에서",
      "en": "from",
      "es": "de",
      "fr": "de",
      "it": "da",
      "pt": "de",
      "ja": "～から",
      "zh": "来自",
      "ru": "из"
    },
    "examples": [
      "Er kommt aus Brasilien."
    ],
    "meta": {}
  },
  {
    "id": "ausflug_nm_1",
    "lemma": "Ausflug",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel",
      "leisure"
    ],
    "meanings": {
      "de": "Ausflug",
      "ko": "소풍",
      "en": "excursion",
      "es": "excursión",
      "fr": "excursion",
      "it": "gita",
      "pt": "excursão",
      "ja": "遠足",
      "zh": "郊游",
      "ru": "экскурсия"
    },
    "examples": [
      "Morgen machen wir einen Ausflug nach Heidelberg."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Ausflüge"
  },
  {
    "id": "ausfuellen_v_1",
    "lemma": "ausfüllen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "work"
    ],
    "meanings": {
      "de": "ausfüllen",
      "ko": "기입하다",
      "en": "fill out",
      "es": "rellenar",
      "fr": "remplir",
      "it": "compilare",
      "pt": "preencher",
      "ja": "記入する",
      "zh": "填写",
      "ru": "заполнять"
    },
    "examples": [
      "Füllen Sie bitte dieses Formular aus."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich fülle aus",
      "pres_du": "du füllst aus",
      "pres_er": "er/sie/es füllt aus",
      "praet": "füllte aus",
      "part2": "ausgefüllt",
      "aux": "haben"
    }
  },
  {
    "id": "ausgang_nm_1",
    "lemma": "Ausgang",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel",
      "building"
    ],
    "meanings": {
      "de": "Ausgang",
      "ko": "출구",
      "en": "exit",
      "es": "salida",
      "fr": "sortie",
      "it": "uscita",
      "pt": "saída",
      "ja": "出口",
      "zh": "出口",
      "ru": "выход"
    },
    "examples": [
      "Wo ist der Ausgang?"
    ],
    "meta": {},
    "gender": "der",
    "plural": "Ausgänge"
  },
  {
    "id": "auskunft_nf_1",
    "lemma": "Auskunft",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel",
      "daily"
    ],
    "meanings": {
      "de": "Auskunft",
      "ko": "안내",
      "en": "information",
      "es": "información",
      "fr": "renseignement",
      "it": "informazione",
      "pt": "informação",
      "ja": "案内",
      "zh": "信息",
      "ru": "справка"
    },
    "examples": [
      "Können Sie mir eine Auskunft geben?"
    ],
    "meta": {},
    "gender": "die",
    "plural": "Auskünfte"
  },
  {
    "id": "ausland_nn_1",
    "lemma": "Ausland",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel"
    ],
    "meanings": {
      "de": "Ausland",
      "ko": "외국",
      "en": "abroad",
      "es": "el extranjero",
      "fr": "l'étranger",
      "it": "l'estero",
      "pt": "o estrangeiro",
      "ja": "外国",
      "zh": "外国",
      "ru": "заграница"
    },
    "examples": [
      "Fahren Sie ins Ausland?"
    ],
    "meta": {},
    "gender": "das"
  },
  {
    "id": "auslaender_nm_1",
    "lemma": "Ausländer",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "society"
    ],
    "meanings": {
      "de": "Ausländer",
      "ko": "외국인",
      "en": "foreigner",
      "es": "extranjero",
      "fr": "étranger",
      "it": "straniero",
      "pt": "estrangeiro",
      "ja": "外国人",
      "zh": "外国人",
      "ru": "иностранец"
    },
    "examples": [
      "Sind Sie Ausländerin?"
    ],
    "meta": {},
    "gender": "der",
    "plural": "Ausländer"
  },
  {
    "id": "auslaendisch_adj_1",
    "lemma": "ausländisch",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": [
      "exam",
      "society"
    ],
    "meanings": {
      "de": "ausländisch",
      "ko": "외국의",
      "en": "foreign",
      "es": "extranjero",
      "fr": "étranger",
      "it": "straniero",
      "pt": "estrangeiro",
      "ja": "外国の",
      "zh": "外国的",
      "ru": "иностранный"
    },
    "examples": [
      "Leider habe ich nur ausländisches Geld."
    ],
    "meta": {}
  },
  {
    "id": "ausmachen_v_1",
    "lemma": "ausmachen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily"
    ],
    "meanings": {
      "de": "ausmachen",
      "ko": "끄다",
      "en": "turn off",
      "es": "apagar",
      "fr": "éteindre",
      "it": "spegnere",
      "pt": "desligar",
      "ja": "消す",
      "zh": "关",
      "ru": "выключать"
    },
    "examples": [
      "Mach bitte das Licht aus!"
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich mache aus",
      "pres_du": "du machst aus",
      "pres_er": "er/sie/es macht aus",
      "praet": "machte aus",
      "part2": "ausgemacht",
      "aux": "haben"
    }
  },
  {
    "id": "aussage_nf_1",
    "lemma": "Aussage",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "communication"
    ],
    "meanings": {
      "de": "Aussage",
      "ko": "진술",
      "en": "statement",
      "es": "declaración",
      "fr": "déclaration",
      "it": "dichiarazione",
      "pt": "declaração",
      "ja": "陳述",
      "zh": "陈述",
      "ru": "высказывание"
    },
    "examples": [
      "Ist die Aussage richtig oder falsch?"
    ],
    "meta": {},
    "gender": "die",
    "plural": "Aussagen"
  },
  {
    "id": "aussehen_v_1",
    "lemma": "aussehen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily"
    ],
    "meanings": {
      "de": "aussehen",
      "ko": "보이다",
      "en": "look",
      "es": "parecer",
      "fr": "avoir l'air",
      "it": "sembrare",
      "pt": "parecer",
      "ja": "見える",
      "zh": "看起来",
      "ru": "выглядеть"
    },
    "examples": [
      "Das sieht schön aus."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich sehe aus",
      "pres_du": "du siehst aus",
      "pres_er": "er/sie/es sieht aus",
      "praet": "sah aus",
      "part2": "ausgesehen",
      "aux": "haben"
    }
  },
  {
    "id": "aussteigen_v_1",
    "lemma": "aussteigen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel"
    ],
    "meanings": {
      "de": "aussteigen",
      "ko": "하차하다",
      "en": "get off",
      "es": "bajar",
      "fr": "descendre",
      "it": "scendere",
      "pt": "descer",
      "ja": "降りる",
      "zh": "下车",
      "ru": "выходить"
    },
    "examples": [
      "Wo muss ich aussteigen?"
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich steige aus",
      "pres_du": "du steigst aus",
      "pres_er": "er/sie/es steigt aus",
      "praet": "stieg aus",
      "part2": "ausgestiegen",
      "aux": "sein"
    }
  },
  {
    "id": "ausweis_nm_1",
    "lemma": "Ausweis",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "travel"
    ],
    "meanings": {
      "de": "Ausweis",
      "ko": "신분증",
      "en": "ID card",
      "es": "carné de identidad",
      "fr": "carte d'identité",
      "it": "carta d'identità",
      "pt": "bilhete de identidade",
      "ja": "身分証明書",
      "zh": "身份证",
      "ru": "удостоверение"
    },
    "examples": [
      "Hier ist mein Ausweis."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Ausweise"
  },
  {
    "id": "ausziehen_v_1",
    "lemma": "ausziehen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "clothing"
    ],
    "meanings": {
      "de": "ausziehen",
      "ko": "벗다",
      "en": "take off",
      "es": "quitarse",
      "fr": "enlever",
      "it": "togliere",
      "pt": "tirar",
      "ja": "脱ぐ",
      "zh": "脱",
      "ru": "снимать"
    },
    "examples": [
      "Zieh die Schuhe aus, bitte!"
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich ziehe aus",
      "pres_du": "du ziehst aus",
      "pres_er": "er/sie/es zieht aus",
      "praet": "zog aus",
      "part2": "ausgezogen",
      "aux": "haben"
    }
  },
  {
    "id": "auto_nn_1",
    "lemma": "Auto",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel",
      "basic"
    ],
    "meanings": {
      "de": "Auto",
      "ko": "자동차",
      "en": "car",
      "es": "coche",
      "fr": "voiture",
      "it": "auto",
      "pt": "carro",
      "ja": "車",
      "zh": "汽车",
      "ru": "автомобиль"
    },
    "examples": [
      "Er kommt mit dem Auto."
    ],
    "meta": {},
    "gender": "das",
    "plural": "Autos"
  },
  {
    "id": "autobahn_nf_1",
    "lemma": "Autobahn",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel"
    ],
    "meanings": {
      "de": "Autobahn",
      "ko": "고속도로",
      "en": "highway",
      "es": "autopista",
      "fr": "autoroute",
      "it": "autostrada",
      "pt": "autoestrada",
      "ja": "高速道路",
      "zh": "高速公路",
      "ru": "автобан"
    },
    "examples": [
      "Wo geht's hier bitte zur Autobahn?"
    ],
    "meta": {},
    "gender": "die",
    "plural": "Autobahnen"
  },
  {
    "id": "automat_nm_1",
    "lemma": "Automat",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "travel"
    ],
    "meanings": {
      "de": "Automat",
      "ko": "자동판매기",
      "en": "vending machine",
      "es": "máquina expendedora",
      "fr": "distributeur",
      "it": "distributore automatico",
      "pt": "máquina de venda automática",
      "ja": "自動販売機",
      "zh": "自动售货机",
      "ru": "автомат"
    },
    "examples": [
      "Die Fahrkarten gibt es nur am Automaten."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Automaten"
  },
  {
    "id": "automatisch_adj_1",
    "lemma": "automatisch",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": [
      "exam",
      "technology"
    ],
    "meanings": {
      "de": "automatisch",
      "ko": "자동의",
      "en": "automatic",
      "es": "automático",
      "fr": "automatique",
      "it": "automatico",
      "pt": "automático",
      "ja": "自動の",
      "zh": "自动",
      "ru": "автоматический"
    },
    "examples": [
      "Du musst nichts machen. Das geht automatisch."
    ],
    "meta": {}
  },
  {
    "id": "baby_nn_1",
    "lemma": "Baby",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "family"
    ],
    "meanings": {
      "de": "Baby",
      "ko": "아기",
      "en": "baby",
      "es": "bebé",
      "fr": "bébé",
      "it": "neonato",
      "pt": "bebê",
      "ja": "赤ちゃん",
      "zh": "婴儿",
      "ru": "младенец"
    },
    "examples": [
      "Mein Kind ist noch ein Baby."
    ],
    "meta": {},
    "gender": "das",
    "plural": "Babys"
  },
  {
    "id": "baeckerei_nf_1",
    "lemma": "Bäckerei",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "shopping",
      "food"
    ],
    "meanings": {
      "de": "Bäckerei",
      "ko": "빵집",
      "en": "bakery",
      "es": "panadería",
      "fr": "boulangerie",
      "it": "panetteria",
      "pt": "padaria",
      "ja": "パン屋",
      "zh": "面包房",
      "ru": "булочная"
    },
    "examples": [
      "Ich geh mal schnell zur Bäckerei."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Bäckereien"
  },
  {
    "id": "bad_nn_1",
    "lemma": "Bad",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "housing",
      "daily"
    ],
    "meanings": {
      "de": "Bad",
      "ko": "욕실",
      "en": "bath",
      "es": "baño",
      "fr": "salle de bain",
      "it": "bagno",
      "pt": "banheiro",
      "ja": "浴室",
      "zh": "浴室",
      "ru": "ванная"
    },
    "examples": [
      "Wir haben kein großes Bad."
    ],
    "meta": {},
    "gender": "das",
    "plural": "Bäder"
  },
  {
    "id": "baden_v_1",
    "lemma": "baden",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily"
    ],
    "meanings": {
      "de": "baden",
      "ko": "목욕하다",
      "en": "bathe",
      "es": "bañarse",
      "fr": "se baigner",
      "it": "fare il bagno",
      "pt": "tomar banho",
      "ja": "入浴する",
      "zh": "洗澡",
      "ru": "купаться"
    },
    "examples": [
      "Ich bade nicht so gern, ich dusche lieber."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich bade",
      "pres_du": "du badest",
      "pres_er": "er/sie/es badet",
      "praet": "badete",
      "part2": "gebadet",
      "aux": "haben"
    }
  },
  {
    "id": "bahn_nf_1",
    "lemma": "Bahn",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel"
    ],
    "meanings": {
      "de": "Bahn",
      "ko": "철도",
      "en": "railway",
      "es": "ferrocarril",
      "fr": "chemin de fer",
      "it": "ferrovia",
      "pt": "ferrovia",
      "ja": "鉄道",
      "zh": "铁路",
      "ru": "железная дорога"
    },
    "examples": [
      "Wir fahren lieber mit der Bahn."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Bahnen"
  },
  {
    "id": "bahnhof_nm_1",
    "lemma": "Bahnhof",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel"
    ],
    "meanings": {
      "de": "Bahnhof",
      "ko": "기차역",
      "en": "train station",
      "es": "estación de tren",
      "fr": "gare",
      "it": "stazione",
      "pt": "estação de trem",
      "ja": "駅",
      "zh": "火车站",
      "ru": "вокзал"
    },
    "examples": [
      "Komme ich hier zum Bahnhof?"
    ],
    "meta": {},
    "gender": "der",
    "plural": "Bahnhöfe"
  },
  {
    "id": "bahnsteig_nm_1",
    "lemma": "Bahnsteig",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel"
    ],
    "meanings": {
      "de": "Bahnsteig",
      "ko": "승강장",
      "en": "platform",
      "es": "andén",
      "fr": "quai",
      "it": "binario",
      "pt": "plataforma",
      "ja": "プラットホーム",
      "zh": "站台",
      "ru": "перрон"
    },
    "examples": [
      "Auf welchem Bahnsteig fährt der Zug?"
    ],
    "meta": {},
    "gender": "der",
    "plural": "Bahnsteige"
  },
  {
    "id": "bald_adv_1",
    "lemma": "bald",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "time"
    ],
    "meanings": {
      "de": "bald",
      "ko": "곧",
      "en": "soon",
      "es": "pronto",
      "fr": "bientôt",
      "it": "presto",
      "pt": "em breve",
      "ja": "まもなく",
      "zh": "很快",
      "ru": "скоро"
    },
    "examples": [
      "Ich komme bald."
    ],
    "meta": {}
  },
  {
    "id": "balkon_nm_1",
    "lemma": "Balkon",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "housing"
    ],
    "meanings": {
      "de": "Balkon",
      "ko": "발코니",
      "en": "balcony",
      "es": "balcón",
      "fr": "balcon",
      "it": "balcone",
      "pt": "varanda",
      "ja": "バルコニー",
      "zh": "阳台",
      "ru": "балкон"
    },
    "examples": [
      "Die Wohnung hat auch einen kleinen Balkon."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Balkone"
  },
  {
    "id": "banane_nf_1",
    "lemma": "Banane",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "food"
    ],
    "meanings": {
      "de": "Banane",
      "ko": "바나나",
      "en": "banana",
      "es": "plátano",
      "fr": "banane",
      "it": "banana",
      "pt": "banana",
      "ja": "バナナ",
      "zh": "香蕉",
      "ru": "банан"
    },
    "examples": [
      "Drei Bananen, bitte!"
    ],
    "meta": {},
    "gender": "die",
    "plural": "Bananen"
  },
  {
    "id": "bank_nf_1",
    "lemma": "Bank",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "finance",
      "city"
    ],
    "meanings": {
      "de": "Bank",
      "ko": "은행",
      "en": "bank",
      "es": "banco",
      "fr": "banque",
      "it": "banca",
      "pt": "banco",
      "ja": "銀行",
      "zh": "银行",
      "ru": "банк"
    },
    "examples": [
      "Die Bank schließt schon um vier Uhr."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Banken"
  },
  {
    "id": "bank_nf_2",
    "lemma": "Bank",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "city"
    ],
    "meanings": {
      "de": "Bank",
      "ko": "벤치",
      "en": "bench",
      "es": "banco",
      "fr": "banc",
      "it": "panchina",
      "pt": "banco",
      "ja": "ベンチ",
      "zh": "长椅",
      "ru": "скамейка"
    },
    "examples": [
      "Er sitzt im Park auf einer Bank und liest."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Bänke"
  },
  {
    "id": "bar_adj_1",
    "lemma": "bar",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": [
      "exam",
      "shopping"
    ],
    "meanings": {
      "de": "bar",
      "ko": "현금의",
      "en": "cash",
      "es": "en efectivo",
      "fr": "en espèces",
      "it": "in contanti",
      "pt": "em dinheiro",
      "ja": "現金の",
      "zh": "现金",
      "ru": "наличный"
    },
    "examples": [
      "Muss ich bar zahlen oder geht's auch mit Karte?"
    ],
    "meta": {}
  },
  {
    "id": "bauch_nm_1",
    "lemma": "Bauch",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "body"
    ],
    "meanings": {
      "de": "Bauch",
      "ko": "배",
      "en": "belly",
      "es": "barriga",
      "fr": "ventre",
      "it": "pancia",
      "pt": "barriga",
      "ja": "腹",
      "zh": "肚子",
      "ru": "живот"
    },
    "examples": [
      "Seit gestern tut mir der Bauch weh."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Bäuche"
  },
  {
    "id": "baum_nm_1",
    "lemma": "Baum",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "nature"
    ],
    "meanings": {
      "de": "Baum",
      "ko": "나무",
      "en": "tree",
      "es": "árbol",
      "fr": "arbre",
      "it": "albero",
      "pt": "árvore",
      "ja": "木",
      "zh": "树",
      "ru": "дерево"
    },
    "examples": [
      "Vorsicht, fahr nicht an den Baum!"
    ],
    "meta": {},
    "gender": "der",
    "plural": "Bäume"
  },
  {
    "id": "beamter_nm_1",
    "lemma": "Beamter",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "work"
    ],
    "meanings": {
      "de": "Beamter",
      "ko": "공무원",
      "en": "civil servant",
      "es": "funcionario",
      "fr": "fonctionnaire",
      "it": "funzionario",
      "pt": "funcionário público",
      "ja": "公務員",
      "zh": "公务员",
      "ru": "чиновник"
    },
    "examples": [
      "Fragen Sie den Beamten an Schalter acht!"
    ],
    "meta": {},
    "gender": "der",
    "plural": "Beamte"
  },
  {
    "id": "bedeuten_v_1",
    "lemma": "bedeuten",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "communication"
    ],
    "meanings": {
      "de": "bedeuten",
      "ko": "의미하다",
      "en": "mean",
      "es": "significar",
      "fr": "signifier",
      "it": "significare",
      "pt": "significar",
      "ja": "意味する",
      "zh": "意味着",
      "ru": "значить"
    },
    "examples": [
      "Was bedeutet das Wort?"
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich bedeute",
      "pres_du": "du bedeutest",
      "pres_er": "er/sie/es bedeutet",
      "praet": "bedeutete",
      "part2": "bedeutet",
      "aux": "haben"
    }
  },
  {
    "id": "beginnen_v_1",
    "lemma": "beginnen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily"
    ],
    "meanings": {
      "de": "beginnen",
      "ko": "시작하다",
      "en": "begin",
      "es": "empezar",
      "fr": "commencer",
      "it": "iniziare",
      "pt": "começar",
      "ja": "始まる",
      "zh": "开始",
      "ru": "начинать"
    },
    "examples": [
      "Das Spiel beginnt um 15.30 Uhr."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich beginne",
      "pres_du": "du beginnst",
      "pres_er": "er/sie/es beginnt",
      "praet": "begann",
      "part2": "begonnen",
      "aux": "haben"
    }
  },
  {
    "id": "bei_prep_1",
    "lemma": "bei",
    "pos": "Präposition",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic"
    ],
    "meanings": {
      "de": "bei",
      "ko": "~근처에",
      "en": "near",
      "es": "cerca de",
      "fr": "près de",
      "it": "vicino a",
      "pt": "perto de",
      "ja": "～の近くに",
      "zh": "在…附近",
      "ru": "рядом с"
    },
    "examples": [
      "Offenbach liegt bei Frankfurt."
    ],
    "meta": {}
  },
  {
    "id": "beide_pron_1",
    "lemma": "beide",
    "pos": "Pronomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic"
    ],
    "meanings": {
      "de": "beide",
      "ko": "둘 다",
      "en": "both",
      "es": "ambos",
      "fr": "tous les deux",
      "it": "entrambi",
      "pt": "ambos",
      "ja": "両方",
      "zh": "两者",
      "ru": "оба"
    },
    "examples": [
      "Beide Eltern arbeiten."
    ],
    "meta": {}
  },
  {
    "id": "bein_nn_1",
    "lemma": "Bein",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "body"
    ],
    "meanings": {
      "de": "Bein",
      "ko": "다리",
      "en": "leg",
      "es": "pierna",
      "fr": "jambe",
      "it": "gamba",
      "pt": "perna",
      "ja": "脚",
      "zh": "腿",
      "ru": "нога"
    },
    "examples": [
      "Mein rechtes Bein tut weh."
    ],
    "meta": {},
    "gender": "das",
    "plural": "Beine"
  },
  {
    "id": "beispiel_nn_1",
    "lemma": "Beispiel",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily"
    ],
    "meanings": {
      "de": "Beispiel",
      "ko": "예시",
      "en": "example",
      "es": "ejemplo",
      "fr": "exemple",
      "it": "esempio",
      "pt": "exemplo",
      "ja": "例",
      "zh": "例子",
      "ru": "пример"
    },
    "examples": [
      "Kannst du mir ein Beispiel sagen?"
    ],
    "meta": {},
    "gender": "das",
    "plural": "Beispiele"
  },
  {
    "id": "bekannt_adj_1",
    "lemma": "bekannt",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily"
    ],
    "meanings": {
      "de": "bekannt",
      "ko": "유명한",
      "en": "well-known",
      "es": "conocido",
      "fr": "connu",
      "it": "conosciuto",
      "pt": "conhecido",
      "ja": "有名な",
      "zh": "著名的",
      "ru": "известный"
    },
    "examples": [
      "Picasso ist sehr bekannt."
    ],
    "meta": {}
  },
  {
    "id": "bekannter_nm_1",
    "lemma": "Bekannter",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "social"
    ],
    "meanings": {
      "de": "Bekannter",
      "ko": "지인",
      "en": "acquaintance",
      "es": "conocido",
      "fr": "connaissance",
      "it": "conoscente",
      "pt": "conhecido",
      "ja": "知人",
      "zh": "熟人",
      "ru": "знакомый"
    },
    "examples": [
      "Ein Bekannter von mir heißt Klaus."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Bekannte"
  },
  {
    "id": "bekommen_v_1",
    "lemma": "bekommen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "shopping"
    ],
    "meanings": {
      "de": "bekommen",
      "ko": "받다",
      "en": "receive",
      "es": "recibir",
      "fr": "recevoir",
      "it": "ricevere",
      "pt": "receber",
      "ja": "もらう",
      "zh": "收到",
      "ru": "получать"
    },
    "examples": [
      "Haben Sie meinen Brief bekommen?"
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich bekomme",
      "pres_du": "du bekommst",
      "pres_er": "er/sie/es bekommt",
      "praet": "bekam",
      "part2": "bekommen",
      "aux": "haben"
    }
  },
  {
    "id": "benutzen_v_1",
    "lemma": "benutzen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily"
    ],
    "meanings": {
      "de": "benutzen",
      "ko": "사용하다",
      "en": "use",
      "es": "usar",
      "fr": "utiliser",
      "it": "usare",
      "pt": "usar",
      "ja": "使う",
      "zh": "使用",
      "ru": "использовать"
    },
    "examples": [
      "Die Aufzüge bitte nicht benutzen!"
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich benutze",
      "pres_du": "du benutzt",
      "pres_er": "er/sie/es benutzt",
      "praet": "benutzte",
      "part2": "benutzt",
      "aux": "haben"
    }
  },
  {
    "id": "beruf_nm_1",
    "lemma": "Beruf",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "work"
    ],
    "meanings": {
      "de": "Beruf",
      "ko": "직업",
      "en": "profession",
      "es": "profesión",
      "fr": "profession",
      "it": "professione",
      "pt": "profissão",
      "ja": "職業",
      "zh": "职业",
      "ru": "профессия"
    },
    "examples": [
      "Was sind Sie von Beruf?"
    ],
    "meta": {},
    "gender": "der",
    "plural": "Berufe"
  },
  {
    "id": "besetzt_adj_1",
    "lemma": "besetzt",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "travel"
    ],
    "meanings": {
      "de": "besetzt",
      "ko": "사용 중인",
      "en": "occupied",
      "es": "ocupado",
      "fr": "occupé",
      "it": "occupato",
      "pt": "ocupado",
      "ja": "使用中の",
      "zh": "占用的",
      "ru": "занятый"
    },
    "examples": [
      "Die Nummer ist immer besetzt."
    ],
    "meta": {}
  },
  {
    "id": "besichtigen_v_1",
    "lemma": "besichtigen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel",
      "culture"
    ],
    "meanings": {
      "de": "besichtigen",
      "ko": "구경하다",
      "en": "visit",
      "es": "visitar",
      "fr": "visiter",
      "it": "visitare",
      "pt": "visitar",
      "ja": "見学する",
      "zh": "参观",
      "ru": "осматривать"
    },
    "examples": [
      "Ich möchte gern das Haus besichtigen."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich besichtige",
      "pres_du": "du besichtigst",
      "pres_er": "er/sie/es besichtigt",
      "praet": "besichtigte",
      "part2": "besichtigt",
      "aux": "haben"
    }
  },
  {
    "id": "bestellen_v_1",
    "lemma": "bestellen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "shopping"
    ],
    "meanings": {
      "de": "bestellen",
      "ko": "주문하다",
      "en": "order",
      "es": "pedir",
      "fr": "commander",
      "it": "ordinare",
      "pt": "encomendar",
      "ja": "注文する",
      "zh": "点",
      "ru": "заказывать"
    },
    "examples": [
      "Wir haben Pizza bestellt."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich bestelle",
      "pres_du": "du bestellst",
      "pres_er": "er/sie/es bestellt",
      "praet": "bestellte",
      "part2": "bestellt",
      "aux": "haben"
    }
  },
  {
    "id": "besuchen_v_1",
    "lemma": "besuchen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "social"
    ],
    "meanings": {
      "de": "besuchen",
      "ko": "방문하다",
      "en": "visit",
      "es": "visitar",
      "fr": "rendre visite",
      "it": "visitare",
      "pt": "visitar",
      "ja": "訪問する",
      "zh": "访问",
      "ru": "посещать"
    },
    "examples": [
      "Darf ich dich besuchen?"
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich besuche",
      "pres_du": "du besuchst",
      "pres_er": "er/sie/es besucht",
      "praet": "besuchte",
      "part2": "besucht",
      "aux": "haben"
    }
  },
  {
    "id": "bett_nn_1",
    "lemma": "Bett",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "housing",
      "daily"
    ],
    "meanings": {
      "de": "Bett",
      "ko": "침대",
      "en": "bed",
      "es": "cama",
      "fr": "lit",
      "it": "letto",
      "pt": "cama",
      "ja": "ベッド",
      "zh": "床",
      "ru": "кровать"
    },
    "examples": [
      "Ich gehe ins Bett."
    ],
    "meta": {},
    "gender": "das",
    "plural": "Betten"
  },
  {
    "id": "bezahlen_v_1",
    "lemma": "bezahlen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "shopping",
      "daily"
    ],
    "meanings": {
      "de": "bezahlen",
      "ko": "지불하다",
      "en": "pay",
      "es": "pagar",
      "fr": "payer",
      "it": "pagare",
      "pt": "pagar",
      "ja": "支払う",
      "zh": "付款",
      "ru": "платить"
    },
    "examples": [
      "Wo muss ich bezahlen?"
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich bezahle",
      "pres_du": "du bezahlst",
      "pres_er": "er/sie/es bezahlt",
      "praet": "bezahlte",
      "part2": "bezahlt",
      "aux": "haben"
    }
  },
  {
    "id": "bier_nn_1",
    "lemma": "Bier",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "food",
      "daily"
    ],
    "meanings": {
      "de": "Bier",
      "ko": "맥주",
      "en": "beer",
      "es": "cerveza",
      "fr": "bière",
      "it": "birra",
      "pt": "cerveja",
      "ja": "ビール",
      "zh": "啤酒",
      "ru": "пиво"
    },
    "examples": [
      "Noch ein Bier, bitte."
    ],
    "meta": {},
    "gender": "das",
    "plural": "Biere"
  },
  {
    "id": "bild_nn_1",
    "lemma": "Bild",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "culture"
    ],
    "meanings": {
      "de": "Bild",
      "ko": "그림",
      "en": "picture",
      "es": "imagen",
      "fr": "image",
      "it": "immagine",
      "pt": "imagem",
      "ja": "絵",
      "zh": "图片",
      "ru": "изображение"
    },
    "examples": [
      "Hast du ein Bild von deinem Sohn?"
    ],
    "meta": {},
    "gender": "das",
    "plural": "Bilder"
  },
  {
    "id": "billig_adj_1",
    "lemma": "billig",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": [
      "exam",
      "shopping"
    ],
    "meanings": {
      "de": "billig",
      "ko": "싼",
      "en": "cheap",
      "es": "barato",
      "fr": "bon marché",
      "it": "economico",
      "pt": "barato",
      "ja": "安い",
      "zh": "便宜",
      "ru": "дешевый"
    },
    "examples": [
      "Das ist mir zu teuer. Haben Sie etwas Billiges?"
    ],
    "meta": {}
  },
  {
    "id": "birne_nf_1",
    "lemma": "Birne",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "food"
    ],
    "meanings": {
      "de": "Birne",
      "ko": "배",
      "en": "pear",
      "es": "pera",
      "fr": "poire",
      "it": "pera",
      "pt": "pera",
      "ja": "梨",
      "zh": "梨",
      "ru": "груша"
    },
    "examples": [
      "Ein Kilo Birnen, bitte!"
    ],
    "meta": {},
    "gender": "die",
    "plural": "Birnen"
  },
  {
    "id": "bis_prep_1",
    "lemma": "bis",
    "pos": "Präposition",
    "cefr": "A1",
    "tags": [
      "exam",
      "time",
      "basic"
    ],
    "meanings": {
      "de": "bis",
      "ko": "까지",
      "en": "until",
      "es": "hasta",
      "fr": "jusqu'à",
      "it": "fino a",
      "pt": "até",
      "ja": "～まで",
      "zh": "直到",
      "ru": "до"
    },
    "examples": [
      "Ich warte bis Freitag."
    ],
    "meta": {}
  },
  {
    "id": "ein_bisschen_adv_1",
    "lemma": "ein bisschen",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic"
    ],
    "meanings": {
      "de": "ein bisschen",
      "ko": "조금",
      "en": "a little",
      "es": "un poco",
      "fr": "un peu",
      "it": "un po'",
      "pt": "um pouco",
      "ja": "少し",
      "zh": "一点",
      "ru": "немного"
    },
    "examples": [
      "Ich spreche ein bisschen Deutsch."
    ],
    "meta": {}
  },
  {
    "id": "bitte_int_1",
    "lemma": "bitte",
    "pos": "Interjektion",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "basic"
    ],
    "meanings": {
      "de": "bitte",
      "ko": "부탁해요",
      "en": "please",
      "es": "por favor",
      "fr": "s'il vous plaît",
      "it": "per favore",
      "pt": "por favor",
      "ja": "お願いします",
      "zh": "请",
      "ru": "пожалуйста"
    },
    "examples": [
      "Eine Tasse Kaffee, bitte!"
    ],
    "meta": {}
  },
  {
    "id": "bitte_nf_1",
    "lemma": "Bitte",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "communication"
    ],
    "meanings": {
      "de": "Bitte",
      "ko": "부탁",
      "en": "request",
      "es": "petición",
      "fr": "demande",
      "it": "richiesta",
      "pt": "pedido",
      "ja": "頼み",
      "zh": "请求",
      "ru": "просьба"
    },
    "examples": [
      "Ich habe eine Bitte."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Bitten"
  },
  {
    "id": "bitten_v_1",
    "lemma": "bitten",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "communication"
    ],
    "meanings": {
      "de": "bitten",
      "ko": "부탁하다",
      "en": "request",
      "es": "pedir",
      "fr": "demander",
      "it": "chiedere",
      "pt": "pedir",
      "ja": "頼む",
      "zh": "请求",
      "ru": "просить"
    },
    "examples": [
      "Darf ich Sie um etwas bitten?"
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich bitte",
      "pres_du": "du bittest",
      "pres_er": "er/sie/es bittet",
      "praet": "bat",
      "part2": "gebeten",
      "aux": "haben"
    }
  },
  {
    "id": "bitter_adj_1",
    "lemma": "bitter",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": [
      "exam",
      "food"
    ],
    "meanings": {
      "de": "bitter",
      "ko": "쓴",
      "en": "bitter",
      "es": "amargo",
      "fr": "amer",
      "it": "amaro",
      "pt": "amargo",
      "ja": "苦い",
      "zh": "苦",
      "ru": "горький"
    },
    "examples": [
      "Der Kaffee schmeckt bitter."
    ],
    "meta": {}
  },
  {
    "id": "bleiben_v_1",
    "lemma": "bleiben",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily"
    ],
    "meanings": {
      "de": "bleiben",
      "ko": "머무르다",
      "en": "stay",
      "es": "quedarse",
      "fr": "rester",
      "it": "rimanere",
      "pt": "ficar",
      "ja": "滞在する",
      "zh": "停留",
      "ru": "оставаться"
    },
    "examples": [
      "Ich bleibe heute zu Hause."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich bleibe",
      "pres_du": "du bleibst",
      "pres_er": "er/sie/es bleibt",
      "praet": "blieb",
      "part2": "geblieben",
      "aux": "sein"
    }
  },
  {
    "id": "bleistift_nm_1",
    "lemma": "Bleistift",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "school",
      "work"
    ],
    "meanings": {
      "de": "Bleistift",
      "ko": "연필",
      "en": "pencil",
      "es": "lápiz",
      "fr": "crayon",
      "it": "matita",
      "pt": "lápis",
      "ja": "鉛筆",
      "zh": "铅笔",
      "ru": "карандаш"
    },
    "examples": [
      "Hast du einen Bleistift?"
    ],
    "meta": {},
    "gender": "der",
    "plural": "Bleistifte"
  },
  {
    "id": "blume_nf_1",
    "lemma": "Blume",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "nature",
      "daily"
    ],
    "meanings": {
      "de": "Blume",
      "ko": "꽃",
      "en": "flower",
      "es": "flor",
      "fr": "fleur",
      "it": "fiore",
      "pt": "flor",
      "ja": "花",
      "zh": "花",
      "ru": "цветок"
    },
    "examples": [
      "Gefallen dir die Blumen?"
    ],
    "meta": {},
    "gender": "die",
    "plural": "Blumen"
  },
  {
    "id": "boese_adj_1",
    "lemma": "böse",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": [
      "exam",
      "feeling"
    ],
    "meanings": {
      "de": "böse",
      "ko": "화난",
      "en": "angry",
      "es": "enfadado",
      "fr": "fâché",
      "it": "arrabbiato",
      "pt": "zangado",
      "ja": "怒った",
      "zh": "生气的",
      "ru": "злой"
    },
    "examples": [
      "Sie ist böse auf mich."
    ],
    "meta": {}
  },
  {
    "id": "brauchen_v_1",
    "lemma": "brauchen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "basic"
    ],
    "meanings": {
      "de": "brauchen",
      "ko": "필요하다",
      "en": "need",
      "es": "necesitar",
      "fr": "avoir besoin de",
      "it": "avere bisogno di",
      "pt": "precisar",
      "ja": "必要とする",
      "zh": "需要",
      "ru": "нуждаться"
    },
    "examples": [
      "Ich brauche ein neues Auto."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich brauche",
      "pres_du": "du brauchst",
      "pres_er": "er/sie/es braucht",
      "praet": "brauchte",
      "part2": "gebraucht",
      "aux": "haben"
    }
  },
  {
    "id": "breit_adj_1",
    "lemma": "breit",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic",
      "measurement"
    ],
    "meanings": {
      "de": "breit",
      "ko": "넓은",
      "en": "wide",
      "es": "ancho",
      "fr": "large",
      "it": "largo",
      "pt": "largo",
      "ja": "広い",
      "zh": "宽",
      "ru": "широкий"
    },
    "examples": [
      "Wie breit ist der Schrank?"
    ],
    "meta": {}
  },
  {
    "id": "brief_nm_1",
    "lemma": "Brief",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "communication"
    ],
    "meanings": {
      "de": "Brief",
      "ko": "편지",
      "en": "letter",
      "es": "carta",
      "fr": "lettre",
      "it": "lettera",
      "pt": "carta",
      "ja": "手紙",
      "zh": "信",
      "ru": "письмо"
    },
    "examples": [
      "Ich schreibe einen Brief."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Briefe"
  },
  {
    "id": "briefmarke_nf_1",
    "lemma": "Briefmarke",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "communication",
      "shopping"
    ],
    "meanings": {
      "de": "Briefmarke",
      "ko": "우표",
      "en": "stamp",
      "es": "sello",
      "fr": "timbre",
      "it": "francobollo",
      "pt": "selo",
      "ja": "切手",
      "zh": "邮票",
      "ru": "почтовая марка"
    },
    "examples": [
      "Kaufst du bitte Briefmarken?"
    ],
    "meta": {},
    "gender": "die",
    "plural": "Briefmarken"
  },
  {
    "id": "bringen_v_1",
    "lemma": "bringen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily"
    ],
    "meanings": {
      "de": "bringen",
      "ko": "가져오다",
      "en": "bring",
      "es": "traer",
      "fr": "apporter",
      "it": "portare",
      "pt": "trazer",
      "ja": "持ってくる",
      "zh": "带来",
      "ru": "приносить"
    },
    "examples": [
      "Bringst du mir bitte ein Glas Wasser?"
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich bringe",
      "pres_du": "du bringst",
      "pres_er": "er/sie/es bringt",
      "praet": "brachte",
      "part2": "gebracht",
      "aux": "haben"
    }
  },
  {
    "id": "brot_nn_1",
    "lemma": "Brot",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "food",
      "daily"
    ],
    "meanings": {
      "de": "Brot",
      "ko": "빵",
      "en": "bread",
      "es": "pan",
      "fr": "pain",
      "it": "pane",
      "pt": "pão",
      "ja": "パン",
      "zh": "面包",
      "ru": "хлеб"
    },
    "examples": [
      "Haben Sie auch Weißbrot?"
    ],
    "meta": {},
    "gender": "das",
    "plural": "Brote"
  },
  {
    "id": "broetchen_nn_1",
    "lemma": "Brötchen",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "food",
      "daily"
    ],
    "meanings": {
      "de": "Brötchen",
      "ko": "롤빵",
      "en": "bread roll",
      "es": "panecillo",
      "fr": "petit pain",
      "it": "panino",
      "pt": "pãozinho",
      "ja": "ロールパン",
      "zh": "小面包",
      "ru": "булочка"
    },
    "examples": [
      "Ich möchte drei Brötchen."
    ],
    "meta": {},
    "gender": "das",
    "plural": "Brötchen"
  },
  {
    "id": "bruder_nm_1",
    "lemma": "Bruder",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "family"
    ],
    "meanings": {
      "de": "Bruder",
      "ko": "남자 형제",
      "en": "brother",
      "es": "hermano",
      "fr": "frère",
      "it": "fratello",
      "pt": "irmão",
      "ja": "兄弟",
      "zh": "兄弟",
      "ru": "брат"
    },
    "examples": [
      "Mein Bruder arbeitet in Köln."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Brüder"
  },
  {
    "id": "buch_nn_1",
    "lemma": "Buch",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "school",
      "leisure"
    ],
    "meanings": {
      "de": "Buch",
      "ko": "책",
      "en": "book",
      "es": "libro",
      "fr": "livre",
      "it": "libro",
      "pt": "livro",
      "ja": "本",
      "zh": "书",
      "ru": "книга"
    },
    "examples": [
      "Gute Bücher sind oft teuer."
    ],
    "meta": {},
    "gender": "das",
    "plural": "Bücher"
  },
  {
    "id": "buchstabe_nm_1",
    "lemma": "Buchstabe",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "school",
      "basic"
    ],
    "meanings": {
      "de": "Buchstabe",
      "ko": "글자",
      "en": "letter",
      "es": "letra",
      "fr": "lettre",
      "it": "lettera",
      "pt": "letra",
      "ja": "文字",
      "zh": "字母",
      "ru": "буква"
    },
    "examples": [
      "Diesen Buchstaben gibt es in meiner Sprache nicht."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Buchstaben"
  },
  {
    "id": "buchstabieren_v_1",
    "lemma": "buchstabieren",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "communication",
      "basic"
    ],
    "meanings": {
      "de": "buchstabieren",
      "ko": "철자를 말하다",
      "en": "spell",
      "es": "deletrear",
      "fr": "épeler",
      "it": "compitare",
      "pt": "soletrar",
      "ja": "つづる",
      "zh": "拼写",
      "ru": "произносить по буквам"
    },
    "examples": [
      "Bitte buchstabieren Sie Ihren Namen."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich buchstabiere",
      "pres_du": "du buchstabierst",
      "pres_er": "er/sie/es buchstabiert",
      "praet": "buchstabierte",
      "part2": "buchstabiert",
      "aux": "haben"
    }
  },
  {
    "id": "bus_nm_1",
    "lemma": "Bus",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel"
    ],
    "meanings": {
      "de": "Bus",
      "ko": "버스",
      "en": "bus",
      "es": "autobús",
      "fr": "bus",
      "it": "autobus",
      "pt": "ônibus",
      "ja": "バス",
      "zh": "公共汽车",
      "ru": "автобус"
    },
    "examples": [
      "Wann kommt der nächste Bus?"
    ],
    "meta": {},
    "gender": "der",
    "plural": "Busse"
  },
  {
    "id": "butter_nf_1",
    "lemma": "Butter",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "food"
    ],
    "meanings": {
      "de": "Butter",
      "ko": "버터",
      "en": "butter",
      "es": "mantequilla",
      "fr": "beurre",
      "it": "burro",
      "pt": "manteiga",
      "ja": "バター",
      "zh": "黄油",
      "ru": "сливочное масло"
    },
    "examples": [
      "Ich möchte Butter aufs Brot."
    ],
    "meta": {},
    "gender": "die",
    "plural": ""
  },
  {
    "id": "café_nn_1",
    "lemma": "Café",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "food",
      "city"
    ],
    "meanings": {
      "de": "Café",
      "ko": "카페",
      "en": "café",
      "es": "cafetería",
      "fr": "café",
      "it": "caffetteria",
      "pt": "cafeteria",
      "ja": "カフェ",
      "zh": "咖啡馆",
      "ru": "кафе"
    },
    "examples": [
      "Treffen wir uns im Café?"
    ],
    "meta": {},
    "gender": "das",
    "plural": "Cafés"
  },
  {
    "id": "cd_nf_1",
    "lemma": "CD",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "leisure",
      "technology"
    ],
    "meanings": {
      "de": "CD",
      "ko": "CD",
      "en": "CD",
      "es": "CD",
      "fr": "CD",
      "it": "CD",
      "pt": "CD",
      "ja": "CD",
      "zh": "光盘",
      "ru": "CD"
    },
    "examples": [
      "Bring bitte deine Lieblings-CD mit."
    ],
    "meta": {},
    "gender": "die",
    "plural": "CDs"
  },
  {
    "id": "chef_nm_1",
    "lemma": "Chef",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "work"
    ],
    "meanings": {
      "de": "Chef",
      "ko": "상사",
      "en": "boss",
      "es": "jefe",
      "fr": "chef",
      "it": "capo",
      "pt": "chefe",
      "ja": "上司",
      "zh": "老板",
      "ru": "начальник"
    },
    "examples": [
      "Wir haben einen neuen Chef."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Chefs"
  },
  {
    "id": "computer_nm_1",
    "lemma": "Computer",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "work",
      "technology"
    ],
    "meanings": {
      "de": "Computer",
      "ko": "컴퓨터",
      "en": "computer",
      "es": "ordenador",
      "fr": "ordinateur",
      "it": "computer",
      "pt": "computador",
      "ja": "コンピューター",
      "zh": "电脑",
      "ru": "компьютер"
    },
    "examples": [
      "Wann bekommst du deinen neuen Computer?"
    ],
    "meta": {},
    "gender": "der",
    "plural": "Computer"
  },
  {
    "id": "da_adv_1",
    "lemma": "da",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic",
      "location"
    ],
    "meanings": {
      "de": "da",
      "ko": "여기에",
      "en": "here",
      "es": "ahí",
      "fr": "là",
      "it": "lì",
      "pt": "aí",
      "ja": "そこに",
      "zh": "那里",
      "ru": "тут"
    },
    "examples": [
      "Ist Herr Klein schon da?"
    ],
    "meta": {}
  },
  {
    "id": "dame_nf_1",
    "lemma": "Dame",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "communication",
      "formal"
    ],
    "meanings": {
      "de": "Dame",
      "ko": "숙녀",
      "en": "lady",
      "es": "dama",
      "fr": "dame",
      "it": "signora",
      "pt": "senhora",
      "ja": "婦人",
      "zh": "女士",
      "ru": "дама"
    },
    "examples": [
      "Sehr geehrte Damen und Herren!"
    ],
    "meta": {},
    "gender": "die",
    "plural": "Damen"
  },
  {
    "id": "daneben_adv_1",
    "lemma": "daneben",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": [
      "exam",
      "location"
    ],
    "meanings": {
      "de": "daneben",
      "ko": "그 옆에",
      "en": "next to it",
      "es": "al lado",
      "fr": "à côté",
      "it": "accanto",
      "pt": "ao lado",
      "ja": "その隣に",
      "zh": "在旁边",
      "ru": "рядом"
    },
    "examples": [
      "Du wohnst in München? Ich wohne daneben, in Augsburg."
    ],
    "meta": {}
  },
  {
    "id": "dank_nm_1",
    "lemma": "Dank",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "communication",
      "basic"
    ],
    "meanings": {
      "de": "Dank",
      "ko": "감사",
      "en": "gratitude",
      "es": "agradecimiento",
      "fr": "remerciement",
      "it": "ringraziamento",
      "pt": "agradecimento",
      "ja": "感謝",
      "zh": "感谢",
      "ru": "благодарность"
    },
    "examples": [
      "Vielen Dank!"
    ],
    "meta": {},
    "gender": "der",
    "plural": ""
  },
  {
    "id": "danke_int_1",
    "lemma": "danke",
    "pos": "Interjektion",
    "cefr": "A1",
    "tags": [
      "exam",
      "communication",
      "basic"
    ],
    "meanings": {
      "de": "danke",
      "ko": "고마워",
      "en": "thanks",
      "es": "gracias",
      "fr": "merci",
      "it": "grazie",
      "pt": "obrigado",
      "ja": "ありがとう",
      "zh": "谢谢",
      "ru": "спасибо"
    },
    "examples": [
      "Soll ich dir helfen? - Nein, danke!"
    ],
    "meta": {}
  },
  {
    "id": "danken_v_1",
    "lemma": "danken",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "communication"
    ],
    "meanings": {
      "de": "danken",
      "ko": "감사하다",
      "en": "thank",
      "es": "agradecer",
      "fr": "remercier",
      "it": "ringraziare",
      "pt": "agradecer",
      "ja": "感謝する",
      "zh": "感谢",
      "ru": "благодарить"
    },
    "examples": [
      "Ich danke Ihnen."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich danke",
      "pres_du": "du dankst",
      "pres_er": "er/sie/es dankt",
      "praet": "dankte",
      "part2": "gedankt",
      "aux": "haben"
    }
  },
  {
    "id": "dann_adv_1",
    "lemma": "dann",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": [
      "exam",
      "time",
      "basic"
    ],
    "meanings": {
      "de": "dann",
      "ko": "그 다음에",
      "en": "then",
      "es": "entonces",
      "fr": "ensuite",
      "it": "poi",
      "pt": "então",
      "ja": "それから",
      "zh": "然后",
      "ru": "потом"
    },
    "examples": [
      "Ich arbeite bis 12 Uhr, dann habe ich frei."
    ],
    "meta": {}
  },
  {
    "id": "datum_nn_1",
    "lemma": "Datum",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "time",
      "basic"
    ],
    "meanings": {
      "de": "Datum",
      "ko": "날짜",
      "en": "date",
      "es": "fecha",
      "fr": "date",
      "it": "data",
      "pt": "data",
      "ja": "日付",
      "zh": "日期",
      "ru": "дата"
    },
    "examples": [
      "Welches Datum haben wir heute?"
    ],
    "meta": {},
    "gender": "das",
    "plural": "Daten"
  },
  {
    "id": "dauern_v_1",
    "lemma": "dauern",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "time"
    ],
    "meanings": {
      "de": "dauern",
      "ko": "지속되다",
      "en": "last",
      "es": "durar",
      "fr": "durer",
      "it": "durare",
      "pt": "durar",
      "ja": "かかる",
      "zh": "持续",
      "ru": "длиться"
    },
    "examples": [
      "Wie lange dauert der Film?"
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich dauere",
      "pres_du": "du dauerst",
      "pres_er": "er/sie/es dauert",
      "praet": "dauerte",
      "part2": "gedauert",
      "aux": "haben"
    }
  },
  {
    "id": "dein_pron_1",
    "lemma": "dein",
    "pos": "Pronomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic"
    ],
    "meanings": {
      "de": "dein",
      "ko": "너의",
      "en": "your",
      "es": "tu",
      "fr": "ton",
      "it": "tuo",
      "pt": "teu",
      "ja": "君の",
      "zh": "你的",
      "ru": "твой"
    },
    "examples": [
      "Ist das dein Auto?"
    ],
    "meta": {}
  },
  {
    "id": "denn_konj_1",
    "lemma": "denn",
    "pos": "Konjunktion",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic",
      "communication"
    ],
    "meanings": {
      "de": "denn",
      "ko": "왜냐하면",
      "en": "because",
      "es": "pues",
      "fr": "car",
      "it": "perché",
      "pt": "pois",
      "ja": "～だから",
      "zh": "因为",
      "ru": "так как"
    },
    "examples": [
      "Ich kann nicht kommen, denn ich bin krank."
    ],
    "meta": {}
  },
  {
    "id": "der_art_1",
    "lemma": "der",
    "pos": "Artikel",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic"
    ],
    "meanings": {
      "de": "der",
      "ko": "그",
      "en": "the",
      "es": "el",
      "fr": "le",
      "it": "il",
      "pt": "o",
      "ja": "その",
      "zh": "这",
      "ru": "этот"
    },
    "examples": [
      "Der Mann da drüben ist mein Vater."
    ],
    "meta": {}
  },
  {
    "id": "disko_nf_1",
    "lemma": "Disko",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "leisure"
    ],
    "meanings": {
      "de": "Disko",
      "ko": "디스코",
      "en": "disco",
      "es": "discoteca",
      "fr": "discothèque",
      "it": "discoteca",
      "pt": "discoteca",
      "ja": "ディスコ",
      "zh": "迪斯科",
      "ru": "дискотека"
    },
    "examples": [
      "Heute Abend gehen wir in die Disko."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Diskos"
  },
  {
    "id": "doktor_nm_1",
    "lemma": "Doktor",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "health",
      "work"
    ],
    "meanings": {
      "de": "Doktor",
      "ko": "의사",
      "en": "doctor",
      "es": "doctor",
      "fr": "docteur",
      "it": "dottore",
      "pt": "doutor",
      "ja": "医者",
      "zh": "医生",
      "ru": "доктор"
    },
    "examples": [
      "Meine Tochter ist krank. Wir gehen zum Doktor."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Doktoren"
  },
  {
    "id": "doppelzimmer_nn_1",
    "lemma": "Doppelzimmer",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel",
      "housing"
    ],
    "meanings": {
      "de": "Doppelzimmer",
      "ko": "더블룸",
      "en": "double room",
      "es": "habitación doble",
      "fr": "chambre double",
      "it": "camera doppia",
      "pt": "quarto duplo",
      "ja": "ダブルルーム",
      "zh": "双人房",
      "ru": "двухместный номер"
    },
    "examples": [
      "Wollen Sie ein Doppelzimmer oder ein Einzelzimmer?"
    ],
    "meta": {},
    "gender": "das",
    "plural": "Doppelzimmer"
  },
  {
    "id": "dorf_nn_1",
    "lemma": "Dorf",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "society",
      "location"
    ],
    "meanings": {
      "de": "Dorf",
      "ko": "마을",
      "en": "village",
      "es": "pueblo",
      "fr": "village",
      "it": "villaggio",
      "pt": "aldeia",
      "ja": "村",
      "zh": "村庄",
      "ru": "деревня"
    },
    "examples": [
      "Meine Familie lebt in einem Dorf."
    ],
    "meta": {},
    "gender": "das",
    "plural": "Dörfer"
  },
  {
    "id": "dort_adv_1",
    "lemma": "dort",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": [
      "exam",
      "location",
      "basic"
    ],
    "meanings": {
      "de": "dort",
      "ko": "거기에",
      "en": "there",
      "es": "allí",
      "fr": "là-bas",
      "it": "lì",
      "pt": "lá",
      "ja": "あそこに",
      "zh": "那里",
      "ru": "там"
    },
    "examples": [
      "Dort ist unser Haus."
    ],
    "meta": {}
  },
  {
    "id": "draussen_adv_1",
    "lemma": "draußen",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": [
      "exam",
      "location"
    ],
    "meanings": {
      "de": "draußen",
      "ko": "밖에",
      "en": "outside",
      "es": "fuera",
      "fr": "dehors",
      "it": "fuori",
      "pt": "fora",
      "ja": "外で",
      "zh": "外面",
      "ru": "снаружи"
    },
    "examples": [
      "Wollen wir draußen sitzen?"
    ],
    "meta": {}
  },
  {
    "id": "drucken_v_1",
    "lemma": "drucken",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "work",
      "technology"
    ],
    "meanings": {
      "de": "drucken",
      "ko": "인쇄하다",
      "en": "print",
      "es": "imprimir",
      "fr": "imprimer",
      "it": "stampare",
      "pt": "imprimir",
      "ja": "印刷する",
      "zh": "打印",
      "ru": "печатать"
    },
    "examples": [
      "Bitte drucke das Formular für mich."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich drucke",
      "pres_du": "du druckst",
      "pres_er": "er/sie/es druckt",
      "praet": "druckte",
      "part2": "gedruckt",
      "aux": "haben"
    }
  },
  {
    "id": "drucker_nm_1",
    "lemma": "Drucker",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "work",
      "technology"
    ],
    "meanings": {
      "de": "Drucker",
      "ko": "프린터",
      "en": "printer",
      "es": "impresora",
      "fr": "imprimante",
      "it": "stampante",
      "pt": "impressora",
      "ja": "プリンター",
      "zh": "打印机",
      "ru": "принтер"
    },
    "examples": [
      "Mein Drucker ist kaputt."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Drucker"
  },
  {
    "id": "druecken_v_1",
    "lemma": "drücken",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "technology",
      "daily"
    ],
    "meanings": {
      "de": "drücken",
      "ko": "누르다",
      "en": "press",
      "es": "pulsar",
      "fr": "appuyer",
      "it": "premere",
      "pt": "pressionar",
      "ja": "押す",
      "zh": "按",
      "ru": "нажимать"
    },
    "examples": [
      "Drück hier. Dann geht der Computer an."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich drücke",
      "pres_du": "du drückst",
      "pres_er": "er/sie/es drückt",
      "praet": "drückte",
      "part2": "gedrückt",
      "aux": "haben"
    }
  },
  {
    "id": "durch_prep_1",
    "lemma": "durch",
    "pos": "Präposition",
    "cefr": "A1",
    "tags": [
      "exam",
      "location",
      "basic"
    ],
    "meanings": {
      "de": "durch",
      "ko": "통해서",
      "en": "through",
      "es": "a través de",
      "fr": "à travers",
      "it": "attraverso",
      "pt": "através de",
      "ja": "～を通って",
      "zh": "穿过",
      "ru": "через"
    },
    "examples": [
      "Wir gehen durch den Park."
    ],
    "meta": {}
  },
  {
    "id": "durchsage_nf_1",
    "lemma": "Durchsage",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel",
      "communication"
    ],
    "meanings": {
      "de": "Durchsage",
      "ko": "안내 방송",
      "en": "announcement",
      "es": "anuncio",
      "fr": "annonce",
      "it": "annuncio",
      "pt": "anúncio",
      "ja": "アナウンス",
      "zh": "广播通告",
      "ru": "объявление"
    },
    "examples": [
      "Ich habe die Durchsage nicht verstanden."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Durchsagen"
  },
  {
    "id": "duerfen_v_1",
    "lemma": "dürfen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic",
      "rules"
    ],
    "meanings": {
      "de": "dürfen",
      "ko": "해도 된다",
      "en": "be allowed to",
      "es": "poder",
      "fr": "pouvoir",
      "it": "potere",
      "pt": "poder",
      "ja": "してもよい",
      "zh": "可以",
      "ru": "мочь"
    },
    "examples": [
      "Sie dürfen hier nicht rauchen."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich darf",
      "pres_du": "du darfst",
      "pres_er": "er/sie/es darf",
      "praet": "durfte",
      "part2": "gedurft",
      "aux": "haben"
    }
  },
  {
    "id": "durst_nm_1",
    "lemma": "Durst",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "food",
      "feeling"
    ],
    "meanings": {
      "de": "Durst",
      "ko": "갈증",
      "en": "thirst",
      "es": "sed",
      "fr": "soif",
      "it": "sete",
      "pt": "sede",
      "ja": "渇き",
      "zh": "渴",
      "ru": "жажда"
    },
    "examples": [
      "Hast du etwas zu trinken? Ich habe großen Durst."
    ],
    "meta": {},
    "gender": "der",
    "plural": ""
  },
  {
    "id": "duschen_v_1",
    "lemma": "duschen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "hygiene"
    ],
    "meanings": {
      "de": "duschen",
      "ko": "샤워하다",
      "en": "shower",
      "es": "ducharse",
      "fr": "se doucher",
      "it": "fare la doccia",
      "pt": "tomar duche",
      "ja": "シャワーを浴びる",
      "zh": "淋浴",
      "ru": "принимать душ"
    },
    "examples": [
      "Ich bade nicht so gern, ich dusche lieber."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich dusche",
      "pres_du": "du duschst",
      "pres_er": "er/sie/es duscht",
      "praet": "duschte",
      "part2": "geduscht",
      "aux": "haben"
    }
  },
  {
    "id": "dusche_nf_1",
    "lemma": "Dusche",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "housing",
      "daily"
    ],
    "meanings": {
      "de": "Dusche",
      "ko": "샤워",
      "en": "shower",
      "es": "ducha",
      "fr": "douche",
      "it": "doccia",
      "pt": "duche",
      "ja": "シャワー",
      "zh": "淋浴",
      "ru": "душ"
    },
    "examples": [
      "Unsere Wohnung hat nur eine Dusche."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Duschen"
  },
  {
    "id": "ecke_nf_1",
    "lemma": "Ecke",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "location",
      "city"
    ],
    "meanings": {
      "de": "Ecke",
      "ko": "모퉁이",
      "en": "corner",
      "es": "esquina",
      "fr": "coin",
      "it": "angolo",
      "pt": "esquina",
      "ja": "角",
      "zh": "角落",
      "ru": "угол"
    },
    "examples": [
      "An der nächsten Ecke links."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Ecken"
  },
  {
    "id": "ehefrau_nf_1",
    "lemma": "Ehefrau",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "family"
    ],
    "meanings": {
      "de": "Ehefrau",
      "ko": "아내",
      "en": "wife",
      "es": "esposa",
      "fr": "épouse",
      "it": "moglie",
      "pt": "esposa",
      "ja": "妻",
      "zh": "妻子",
      "ru": "жена"
    },
    "examples": [
      "Das ist meine Ehefrau."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Ehefrauen"
  },
  {
    "id": "ehemann_nm_1",
    "lemma": "Ehemann",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "family"
    ],
    "meanings": {
      "de": "Ehemann",
      "ko": "남편",
      "en": "husband",
      "es": "marido",
      "fr": "mari",
      "it": "marito",
      "pt": "marido",
      "ja": "夫",
      "zh": "丈夫",
      "ru": "муж"
    },
    "examples": [
      "Das ist mein Ehemann."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Ehemänner"
  },
  {
    "id": "ei_nn_1",
    "lemma": "Ei",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "food"
    ],
    "meanings": {
      "de": "Ei",
      "ko": "달걀",
      "en": "egg",
      "es": "huevo",
      "fr": "œuf",
      "it": "uovo",
      "pt": "ovo",
      "ja": "卵",
      "zh": "鸡蛋",
      "ru": "яйцо"
    },
    "examples": [
      "Möchtest du ein Ei zum Frühstück?"
    ],
    "meta": {},
    "gender": "das",
    "plural": "Eier"
  },
  {
    "id": "eilig_adj_1",
    "lemma": "eilig",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "time"
    ],
    "meanings": {
      "de": "eilig",
      "ko": "급한",
      "en": "urgent",
      "es": "urgente",
      "fr": "pressé",
      "it": "frettoloso",
      "pt": "apressado",
      "ja": "急ぎの",
      "zh": "匆忙",
      "ru": "спешный"
    },
    "examples": [
      "Hast du es eilig?"
    ],
    "meta": {}
  },
  {
    "id": "ein_art_1",
    "lemma": "ein",
    "pos": "Artikel",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic"
    ],
    "meanings": {
      "de": "ein",
      "ko": "하나의",
      "en": "a",
      "es": "un",
      "fr": "un",
      "it": "un",
      "pt": "um",
      "ja": "一つの",
      "zh": "一个",
      "ru": "один"
    },
    "examples": [
      "Ich nehme ein Bier."
    ],
    "meta": {}
  },
  {
    "id": "einfach_adj_1",
    "lemma": "einfach",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic"
    ],
    "meanings": {
      "de": "einfach",
      "ko": "쉬운",
      "en": "simple",
      "es": "fácil",
      "fr": "facile",
      "it": "semplice",
      "pt": "simples",
      "ja": "簡単な",
      "zh": "简单",
      "ru": "простой"
    },
    "examples": [
      "Die Prüfung ist ganz einfach."
    ],
    "meta": {}
  },
  {
    "id": "eingang_nm_1",
    "lemma": "Eingang",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "location",
      "building"
    ],
    "meanings": {
      "de": "Eingang",
      "ko": "입구",
      "en": "entrance",
      "es": "entrada",
      "fr": "entrée",
      "it": "entrata",
      "pt": "entrada",
      "ja": "入り口",
      "zh": "入口",
      "ru": "вход"
    },
    "examples": [
      "Der Eingang ist um die Ecke."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Eingänge"
  },
  {
    "id": "einkaufen_v_1",
    "lemma": "einkaufen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "shopping",
      "daily"
    ],
    "meanings": {
      "de": "einkaufen",
      "ko": "장보다",
      "en": "shop",
      "es": "ir de compras",
      "fr": "faire les courses",
      "it": "fare la spesa",
      "pt": "fazer compras",
      "ja": "買い物する",
      "zh": "购物",
      "ru": "делать покупки"
    },
    "examples": [
      "Ich muss noch für morgen einkaufen."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich kaufe ein",
      "pres_du": "du kaufst ein",
      "pres_er": "er/sie/es kauft ein",
      "praet": "kaufte ein",
      "part2": "eingekauft",
      "aux": "haben"
    }
  },
  {
    "id": "einladen_v_1",
    "lemma": "einladen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "social",
      "communication"
    ],
    "meanings": {
      "de": "einladen",
      "ko": "초대하다",
      "en": "invite",
      "es": "invitar",
      "fr": "inviter",
      "it": "invitare",
      "pt": "convidar",
      "ja": "招待する",
      "zh": "邀请",
      "ru": "приглашать"
    },
    "examples": [
      "Darf ich Sie zu einem Kaffee einladen?"
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich lade ein",
      "pres_du": "du lädst ein",
      "pres_er": "er/sie/es lädt ein",
      "praet": "lud ein",
      "part2": "eingeladen",
      "aux": "haben"
    }
  },
  {
    "id": "einladung_nf_1",
    "lemma": "Einladung",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "social",
      "communication"
    ],
    "meanings": {
      "de": "Einladung",
      "ko": "초대",
      "en": "invitation",
      "es": "invitación",
      "fr": "invitation",
      "it": "invito",
      "pt": "convite",
      "ja": "招待",
      "zh": "邀请",
      "ru": "приглашение"
    },
    "examples": [
      "Danke für die Einladung!"
    ],
    "meta": {},
    "gender": "die",
    "plural": "Einladungen"
  },
  {
    "id": "einmal_adv_1",
    "lemma": "einmal",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic",
      "time"
    ],
    "meanings": {
      "de": "einmal",
      "ko": "한 번",
      "en": "once",
      "es": "una vez",
      "fr": "une fois",
      "it": "una volta",
      "pt": "uma vez",
      "ja": "一度",
      "zh": "一次",
      "ru": "однажды"
    },
    "examples": [
      "Diese Prüfung mache ich nicht noch einmal."
    ],
    "meta": {}
  },
  {
    "id": "einsteigen_v_1",
    "lemma": "einsteigen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel"
    ],
    "meanings": {
      "de": "einsteigen",
      "ko": "승차하다",
      "en": "get in",
      "es": "subir",
      "fr": "monter",
      "it": "salire",
      "pt": "entrar",
      "ja": "乗る",
      "zh": "上车",
      "ru": "входить"
    },
    "examples": [
      "Schnell, steig ein, der Zug fährt gleich."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich steige ein",
      "pres_du": "du steigst ein",
      "pres_er": "er/sie/es steigt ein",
      "praet": "stieg ein",
      "part2": "eingestiegen",
      "aux": "sein"
    }
  },
  {
    "id": "eintritt_nm_1",
    "lemma": "Eintritt",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "leisure",
      "shopping"
    ],
    "meanings": {
      "de": "Eintritt",
      "ko": "입장료",
      "en": "admission",
      "es": "entrada",
      "fr": "entrée",
      "it": "ingresso",
      "pt": "entrada",
      "ja": "入場料",
      "zh": "入场费",
      "ru": "вход"
    },
    "examples": [
      "Der Preis für den Eintritt ist 5 Euro."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Eintritte"
  },
  {
    "id": "einzelzimmer_nn_1",
    "lemma": "Einzelzimmer",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel",
      "housing"
    ],
    "meanings": {
      "de": "Einzelzimmer",
      "ko": "싱글룸",
      "en": "single room",
      "es": "habitación individual",
      "fr": "chambre simple",
      "it": "camera singola",
      "pt": "quarto individual",
      "ja": "シングルルーム",
      "zh": "单人间",
      "ru": "одноместный номер"
    },
    "examples": [
      "Haben Sie noch ein Einzelzimmer?"
    ],
    "meta": {},
    "gender": "das",
    "plural": "Einzelzimmer"
  },
  {
    "id": "eltern_n_1",
    "lemma": "Eltern",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "family"
    ],
    "meanings": {
      "de": "Eltern",
      "ko": "부모",
      "en": "parents",
      "es": "padres",
      "fr": "parents",
      "it": "genitori",
      "pt": "pais",
      "ja": "両親",
      "zh": "父母",
      "ru": "родители"
    },
    "examples": [
      "Meine Eltern leben in Spanien."
    ],
    "meta": {},
    "gender": "",
    "plural": "Eltern"
  },
  {
    "id": "e_mail_nf_1",
    "lemma": "E-Mail",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "communication",
      "technology"
    ],
    "meanings": {
      "de": "E-Mail",
      "ko": "이메일",
      "en": "email",
      "es": "correo electrónico",
      "fr": "e-mail",
      "it": "e-mail",
      "pt": "e-mail",
      "ja": "電子メール",
      "zh": "电子邮件",
      "ru": "электронная почта"
    },
    "examples": [
      "Ich habe Ihre E-Mail nicht bekommen."
    ],
    "meta": {},
    "gender": "die",
    "plural": "E-Mails"
  },
  {
    "id": "empfaenger_nm_1",
    "lemma": "Empfänger",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "communication",
      "work"
    ],
    "meanings": {
      "de": "Empfänger",
      "ko": "수신인",
      "en": "recipient",
      "es": "destinatario",
      "fr": "destinataire",
      "it": "destinatario",
      "pt": "destinatário",
      "ja": "受取人",
      "zh": "收件人",
      "ru": "получатель"
    },
    "examples": [
      "Auf dem Brief steht dein Name, also bist du der Empfänger."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Empfänger"
  },
  {
    "id": "empfehlen_v_1",
    "lemma": "empfehlen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "shopping"
    ],
    "meanings": {
      "de": "empfehlen",
      "ko": "추천하다",
      "en": "recommend",
      "es": "recomendar",
      "fr": "recommander",
      "it": "raccomandare",
      "pt": "recomendar",
      "ja": "勧める",
      "zh": "推荐",
      "ru": "рекомендовать"
    },
    "examples": [
      "Welchen Wein können Sie mir empfehlen?"
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich empfehle",
      "pres_du": "du empfiehlst",
      "pres_er": "er/sie/es empfiehlt",
      "praet": "empfahl",
      "part2": "empfohlen",
      "aux": "haben"
    }
  },
  {
    "id": "enden_v_1",
    "lemma": "enden",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "location",
      "time"
    ],
    "meanings": {
      "de": "enden",
      "ko": "끝나다",
      "en": "end",
      "es": "terminar",
      "fr": "se terminer",
      "it": "finire",
      "pt": "acabar",
      "ja": "終わる",
      "zh": "结束",
      "ru": "заканчиваться"
    },
    "examples": [
      "Die Straße endet hier."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich ende",
      "pres_du": "du endest",
      "pres_er": "er/sie/es endet",
      "praet": "endete",
      "part2": "geendet",
      "aux": "haben"
    }
  },
  {
    "id": "ende_nn_1",
    "lemma": "Ende",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "location",
      "time"
    ],
    "meanings": {
      "de": "Ende",
      "ko": "끝",
      "en": "end",
      "es": "fin",
      "fr": "fin",
      "it": "fine",
      "pt": "fim",
      "ja": "終わり",
      "zh": "末尾",
      "ru": "конец"
    },
    "examples": [
      "Sie wohnt am Ende der Straße."
    ],
    "meta": {},
    "gender": "das",
    "plural": "Enden"
  },
  {
    "id": "entschuldigen_v_1",
    "lemma": "entschuldigen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "communication",
      "social"
    ],
    "meanings": {
      "de": "entschuldigen",
      "ko": "사과하다",
      "en": "apologize",
      "es": "disculpar",
      "fr": "excuser",
      "it": "scusare",
      "pt": "desculpar",
      "ja": "謝る",
      "zh": "道歉",
      "ru": "извинять"
    },
    "examples": [
      "Entschuldigen Sie bitte!"
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich entschuldige",
      "pres_du": "du entschuldigst",
      "pres_er": "er/sie/es entschuldigt",
      "praet": "entschuldigte",
      "part2": "entschuldigt",
      "aux": "haben"
    }
  },
  {
    "id": "entschuldigung_nf_1",
    "lemma": "Entschuldigung",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "communication",
      "social"
    ],
    "meanings": {
      "de": "Entschuldigung",
      "ko": "실례합니다",
      "en": "excuse me",
      "es": "perdón",
      "fr": "pardon",
      "it": "scusa",
      "pt": "desculpa",
      "ja": "すみません",
      "zh": "抱歉",
      "ru": "извинение"
    },
    "examples": [
      "Entschuldigung! - Bitte."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Entschuldigungen"
  },
  {
    "id": "er_pron_1",
    "lemma": "er",
    "pos": "Pronomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic"
    ],
    "meanings": {
      "de": "er",
      "ko": "그",
      "en": "he",
      "es": "él",
      "fr": "il",
      "it": "lui",
      "pt": "ele",
      "ja": "彼",
      "zh": "他",
      "ru": "он"
    },
    "examples": [
      "Er heißt Ali."
    ],
    "meta": {}
  },
  {
    "id": "ergebnis_nn_1",
    "lemma": "Ergebnis",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "school",
      "work"
    ],
    "meanings": {
      "de": "Ergebnis",
      "ko": "결과",
      "en": "result",
      "es": "resultado",
      "fr": "résultat",
      "it": "risultato",
      "pt": "resultado",
      "ja": "結果",
      "zh": "结果",
      "ru": "результат"
    },
    "examples": [
      "Das Ergebnis des Tests bekommen Sie in zwei Wochen."
    ],
    "meta": {},
    "gender": "das",
    "plural": "Ergebnisse"
  },
  {
    "id": "erklaeren_v_1",
    "lemma": "erklären",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "communication",
      "school"
    ],
    "meanings": {
      "de": "erklären",
      "ko": "설명하다",
      "en": "explain",
      "es": "explicar",
      "fr": "expliquer",
      "it": "spiegare",
      "pt": "explicar",
      "ja": "説明する",
      "zh": "解释",
      "ru": "объяснять"
    },
    "examples": [
      "Kannst du mir das erklären?"
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich erkläre",
      "pres_du": "du erklärst",
      "pres_er": "er/sie/es erklärt",
      "praet": "erklärte",
      "part2": "erklärt",
      "aux": "haben"
    }
  },
  {
    "id": "erlauben_v_1",
    "lemma": "erlauben",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "rules",
      "basic"
    ],
    "meanings": {
      "de": "erlauben",
      "ko": "허락하다",
      "en": "allow",
      "es": "permitir",
      "fr": "permettre",
      "it": "permettere",
      "pt": "permitir",
      "ja": "許可する",
      "zh": "允许",
      "ru": "разрешать"
    },
    "examples": [
      "Rauchen ist hier nicht erlaubt."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich erlaube",
      "pres_du": "du erlaubst",
      "pres_er": "er/sie/es erlaubt",
      "praet": "erlaubte",
      "part2": "erlaubt",
      "aux": "haben"
    }
  },
  {
    "id": "erwachsene_nm_1",
    "lemma": "Erwachsene",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "society"
    ],
    "meanings": {
      "de": "Erwachsene",
      "ko": "성인",
      "en": "adult",
      "es": "adulto",
      "fr": "adulte",
      "it": "adulto",
      "pt": "adulto",
      "ja": "大人",
      "zh": "成年人",
      "ru": "взрослый"
    },
    "examples": [
      "Dieser Film ist nur für Erwachsene."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Erwachsene"
  },
  {
    "id": "erzaehlen_v_1",
    "lemma": "erzählen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "communication",
      "social"
    ],
    "meanings": {
      "de": "erzählen",
      "ko": "이야기하다",
      "en": "tell",
      "es": "contar",
      "fr": "raconter",
      "it": "raccontare",
      "pt": "contar",
      "ja": "話す",
      "zh": "讲述",
      "ru": "рассказывать"
    },
    "examples": [
      "Wir müssen euch etwas erzählen!"
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich erzähle",
      "pres_du": "du erzählst",
      "pres_er": "er/sie/es erzählt",
      "praet": "erzählte",
      "part2": "erzählt",
      "aux": "haben"
    }
  },
  {
    "id": "es_pron_1",
    "lemma": "es",
    "pos": "Pronomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic"
    ],
    "meanings": {
      "de": "es",
      "ko": "그것",
      "en": "it",
      "es": "ello",
      "fr": "il",
      "it": "esso",
      "pt": "isso",
      "ja": "それ",
      "zh": "它",
      "ru": "оно"
    },
    "examples": [
      "Es regnet."
    ],
    "meta": {}
  },
  {
    "id": "essen_v_1",
    "lemma": "essen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "food",
      "daily"
    ],
    "meanings": {
      "de": "essen",
      "ko": "먹다",
      "en": "eat",
      "es": "comer",
      "fr": "manger",
      "it": "mangiare",
      "pt": "comer",
      "ja": "食べる",
      "zh": "吃",
      "ru": "есть"
    },
    "examples": [
      "Was gibt es zu essen?"
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich esse",
      "pres_du": "du isst",
      "pres_er": "er/sie/es isst",
      "praet": "aß",
      "part2": "gegessen",
      "aux": "haben"
    }
  },
  {
    "id": "essen_nn_1",
    "lemma": "Essen",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "food",
      "daily"
    ],
    "meanings": {
      "de": "Essen",
      "ko": "음식",
      "en": "food",
      "es": "comida",
      "fr": "repas",
      "it": "cibo",
      "pt": "comida",
      "ja": "食事",
      "zh": "饭菜",
      "ru": "еда"
    },
    "examples": [
      "Das Essen ist heute sehr gut."
    ],
    "meta": {},
    "gender": "das",
    "plural": ""
  },
  {
    "id": "euer_pron_1",
    "lemma": "euer",
    "pos": "Pronomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic"
    ],
    "meanings": {
      "de": "euer",
      "ko": "너희들의",
      "en": "your",
      "es": "vuestro",
      "fr": "votre",
      "it": "vostro",
      "pt": "vosso",
      "ja": "君たちの",
      "zh": "你们的",
      "ru": "ваш"
    },
    "examples": [
      "Euer Kurs beginnt heute."
    ],
    "meta": {}
  },
  {
    "id": "fahren_v_1",
    "lemma": "fahren",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel",
      "daily"
    ],
    "meanings": {
      "de": "fahren",
      "ko": "운전하다",
      "en": "drive",
      "es": "conducir",
      "fr": "conduire",
      "it": "guidare",
      "pt": "conduzir",
      "ja": "運転する",
      "zh": "驾驶",
      "ru": "ехать"
    },
    "examples": [
      "Ich fahre mit dem Auto zur Arbeit."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich fahre",
      "pres_du": "du fährst",
      "pres_er": "er/sie/es fährt",
      "praet": "fuhr",
      "part2": "gefahren",
      "aux": "sein"
    }
  },
  {
    "id": "fahrer_nm_1",
    "lemma": "Fahrer",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel",
      "work"
    ],
    "meanings": {
      "de": "Fahrer",
      "ko": "운전사",
      "en": "driver",
      "es": "conductor",
      "fr": "conducteur",
      "it": "autista",
      "pt": "motorista",
      "ja": "運転手",
      "zh": "司机",
      "ru": "водитель"
    },
    "examples": [
      "Bitte nicht mit dem Fahrer sprechen!"
    ],
    "meta": {},
    "gender": "der",
    "plural": "Fahrer"
  },
  {
    "id": "fahrkarte_nf_1",
    "lemma": "Fahrkarte",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel"
    ],
    "meanings": {
      "de": "Fahrkarte",
      "ko": "차표",
      "en": "ticket",
      "es": "billete",
      "fr": "billet",
      "it": "biglietto",
      "pt": "bilhete",
      "ja": "乗車券",
      "zh": "车票",
      "ru": "билет"
    },
    "examples": [
      "Hast du schon eine Fahrkarte?"
    ],
    "meta": {},
    "gender": "die",
    "plural": "Fahrkarten"
  },
  {
    "id": "fahrrad_nn_1",
    "lemma": "Fahrrad",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel",
      "leisure"
    ],
    "meanings": {
      "de": "Fahrrad",
      "ko": "자전거",
      "en": "bicycle",
      "es": "bicicleta",
      "fr": "vélo",
      "it": "bicicletta",
      "pt": "bicicleta",
      "ja": "自転車",
      "zh": "自行车",
      "ru": "велосипед"
    },
    "examples": [
      "Fährst du mit dem Fahrrad oder mit dem Auto?"
    ],
    "meta": {},
    "gender": "das",
    "plural": "Fahrräder"
  },
  {
    "id": "falsch_adj_1",
    "lemma": "falsch",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic",
      "communication"
    ],
    "meanings": {
      "de": "falsch",
      "ko": "틀린",
      "en": "wrong",
      "es": "falso",
      "fr": "faux",
      "it": "sbagliato",
      "pt": "errado",
      "ja": "間違った",
      "zh": "错",
      "ru": "неправильный"
    },
    "examples": [
      "Das ist falsch."
    ],
    "meta": {}
  },
  {
    "id": "familie_nf_1",
    "lemma": "Familie",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "family"
    ],
    "meanings": {
      "de": "Familie",
      "ko": "가족",
      "en": "family",
      "es": "familia",
      "fr": "famille",
      "it": "famiglia",
      "pt": "família",
      "ja": "家族",
      "zh": "家庭",
      "ru": "семья"
    },
    "examples": [
      "Meine Familie lebt in Spanien."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Familien"
  },
  {
    "id": "familienname_nm_1",
    "lemma": "Familienname",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "personal_info"
    ],
    "meanings": {
      "de": "Familienname",
      "ko": "성",
      "en": "surname",
      "es": "apellido",
      "fr": "nom de famille",
      "it": "cognome",
      "pt": "sobrenome",
      "ja": "名字",
      "zh": "姓",
      "ru": "фамилия"
    },
    "examples": [
      "Mein Familienname ist Müller."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Familiennamen"
  },
  {
    "id": "familienstand_nm_1",
    "lemma": "Familienstand",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "personal_info"
    ],
    "meanings": {
      "de": "Familienstand",
      "ko": "혼인 상태",
      "en": "marital status",
      "es": "estado civil",
      "fr": "état civil",
      "it": "stato civile",
      "pt": "estado civil",
      "ja": "家族状況",
      "zh": "婚姻状况",
      "ru": "семейное положение"
    },
    "examples": [
      "Bei „Familienstand“ musst du „ledig“ ankreuzen."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Familienstände"
  },
  {
    "id": "farbe_nf_1",
    "lemma": "Farbe",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic",
      "description"
    ],
    "meanings": {
      "de": "Farbe",
      "ko": "색깔",
      "en": "color",
      "es": "color",
      "fr": "couleur",
      "it": "colore",
      "pt": "cor",
      "ja": "色",
      "zh": "颜色",
      "ru": "цвет"
    },
    "examples": [
      "Die Farbe gefällt mir gut."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Farben"
  },
  {
    "id": "fax_nn_1",
    "lemma": "Fax",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "communication",
      "work"
    ],
    "meanings": {
      "de": "Fax",
      "ko": "팩스",
      "en": "fax",
      "es": "fax",
      "fr": "fax",
      "it": "fax",
      "pt": "fax",
      "ja": "ファックス",
      "zh": "传真",
      "ru": "факс"
    },
    "examples": [
      "Schicken Sie uns einfach ein Fax!"
    ],
    "meta": {},
    "gender": "das",
    "plural": "Faxe"
  },
  {
    "id": "feierabend_nm_1",
    "lemma": "Feierabend",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "work",
      "time"
    ],
    "meanings": {
      "de": "Feierabend",
      "ko": "퇴근",
      "en": "end of work",
      "es": "hora de salida",
      "fr": "fin de la journée de travail",
      "it": "fine del lavoro",
      "pt": "fim do expediente",
      "ja": "仕事終わり",
      "zh": "下班",
      "ru": "конец рабочего дня"
    },
    "examples": [
      "Ich habe um 17 Uhr Feierabend."
    ],
    "meta": {},
    "gender": "der",
    "plural": ""
  },
  {
    "id": "feiertag_nm_1",
    "lemma": "Feiertag",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "time",
      "culture"
    ],
    "meanings": {
      "de": "Feiertag",
      "ko": "휴일",
      "en": "public holiday",
      "es": "dia festivo",
      "fr": "jour férié",
      "it": "giorno festivo",
      "pt": "feriado",
      "ja": "祝日",
      "zh": "节日",
      "ru": "праздник"
    },
    "examples": [
      "Am Montag ist Feiertag."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Feiertage"
  },
  {
    "id": "feiern_v_1",
    "lemma": "feiern",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "leisure",
      "social"
    ],
    "meanings": {
      "de": "feiern",
      "ko": "축하하다",
      "en": "celebrate",
      "es": "celebrar",
      "fr": "fêter",
      "it": "festeggiare",
      "pt": "comemorar",
      "ja": "祝う",
      "zh": "庆祝",
      "ru": "праздновать"
    },
    "examples": [
      "Wir feiern heute meinen Geburtstag."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich feiere",
      "pres_du": "du feierst",
      "pres_er": "er/sie/es feiert",
      "praet": "feierte",
      "part2": "gefeiert",
      "aux": "haben"
    }
  },
  {
    "id": "fehlen_v_1",
    "lemma": "fehlen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "health",
      "daily"
    ],
    "meanings": {
      "de": "fehlen",
      "ko": "없다",
      "en": "be missing",
      "es": "faltar",
      "fr": "manquer",
      "it": "mancare",
      "pt": "faltar",
      "ja": "欠けている",
      "zh": "缺少",
      "ru": "отсутствовать"
    },
    "examples": [
      "Herr Müller ist nicht da, er fehlt schon seit drei Tagen."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich fehle",
      "pres_du": "du fehlst",
      "pres_er": "er/sie/es fehlt",
      "praet": "fehlte",
      "part2": "gefehlt",
      "aux": "haben"
    }
  },
  {
    "id": "fehler_nm_1",
    "lemma": "Fehler",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "school",
      "work"
    ],
    "meanings": {
      "de": "Fehler",
      "ko": "실수",
      "en": "mistake",
      "es": "error",
      "fr": "faute",
      "it": "errore",
      "pt": "erro",
      "ja": "間違い",
      "zh": "错误",
      "ru": "ошибка"
    },
    "examples": [
      "Diesen Fehler mache ich immer."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Fehler"
  },
  {
    "id": "fernsehen_v_1",
    "lemma": "fernsehen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "leisure"
    ],
    "meanings": {
      "de": "fernsehen",
      "ko": "TV를 보다",
      "en": "watch TV",
      "es": "ver la televisión",
      "fr": "regarder la télé",
      "it": "guardare la TV",
      "pt": "ver televisão",
      "ja": "テレビを見る",
      "zh": "看电视",
      "ru": "смотреть телевизор"
    },
    "examples": [
      "Wollen wir heute Abend mal fernsehen?"
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich sehe fern",
      "pres_du": "du siehst fern",
      "pres_er": "er/sie/es sieht fern",
      "praet": "sah fern",
      "part2": "ferngesehen",
      "aux": "haben"
    }
  },
  {
    "id": "fertig_adj_1",
    "lemma": "fertig",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily"
    ],
    "meanings": {
      "de": "fertig",
      "ko": "준비된",
      "en": "ready",
      "es": "listo",
      "fr": "prêt",
      "it": "pronto",
      "pt": "pronto",
      "ja": "準備ができた",
      "zh": "完成",
      "ru": "готовый"
    },
    "examples": [
      "Bist du fertig?"
    ],
    "meta": {}
  },
  {
    "id": "feuer_nn_1",
    "lemma": "Feuer",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily"
    ],
    "meanings": {
      "de": "Feuer",
      "ko": "불",
      "en": "fire",
      "es": "fuego",
      "fr": "feu",
      "it": "fuoco",
      "pt": "fogo",
      "ja": "火",
      "zh": "火",
      "ru": "огонь"
    },
    "examples": [
      "Haben Sie Feuer?"
    ],
    "meta": {},
    "gender": "das"
  },
  {
    "id": "fieber_nn_1",
    "lemma": "Fieber",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "health"
    ],
    "meanings": {
      "de": "Fieber",
      "ko": "열",
      "en": "fever",
      "es": "fiebre",
      "fr": "fièvre",
      "it": "febbre",
      "pt": "febre",
      "ja": "熱",
      "zh": "发烧",
      "ru": "температура"
    },
    "examples": [
      "Mein Mann hat noch immer Fieber."
    ],
    "meta": {},
    "gender": "das"
  },
  {
    "id": "film_nm_1",
    "lemma": "Film",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "leisure",
      "media"
    ],
    "meanings": {
      "de": "Film",
      "ko": "영화",
      "en": "film",
      "es": "película",
      "fr": "film",
      "it": "film",
      "pt": "filme",
      "ja": "映画",
      "zh": "电影",
      "ru": "фильм"
    },
    "examples": [
      "Ich möchte gern diesen Film sehen."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Filme"
  },
  {
    "id": "finden_v_1",
    "lemma": "finden",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily"
    ],
    "meanings": {
      "de": "finden",
      "ko": "찾다",
      "en": "find",
      "es": "encontrar",
      "fr": "trouver",
      "it": "trovare",
      "pt": "encontrar",
      "ja": "見つける",
      "zh": "找到",
      "ru": "находить"
    },
    "examples": [
      "Wir müssen den Schlüssel finden."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich finde",
      "pres_du": "du findest",
      "pres_er": "er/sie/es findet",
      "praet": "fand",
      "part2": "gefunden",
      "aux": "haben"
    }
  },
  {
    "id": "firma_nf_1",
    "lemma": "Firma",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "work"
    ],
    "meanings": {
      "de": "Firma",
      "ko": "회사",
      "en": "company",
      "es": "empresa",
      "fr": "entreprise",
      "it": "ditta",
      "pt": "empresa",
      "ja": "会社",
      "zh": "公司",
      "ru": "фирма"
    },
    "examples": [
      "Er arbeitet jetzt bei einer anderen Firma."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Firmen"
  },
  {
    "id": "fisch_nm_1",
    "lemma": "Fisch",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "food"
    ],
    "meanings": {
      "de": "Fisch",
      "ko": "생선",
      "en": "fish",
      "es": "pescado",
      "fr": "poisson",
      "it": "pesce",
      "pt": "peixe",
      "ja": "魚",
      "zh": "鱼",
      "ru": "рыба"
    },
    "examples": [
      "Ich esse gern Fisch."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Fische"
  },
  {
    "id": "flasche_nf_1",
    "lemma": "Flasche",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "food",
      "shopping"
    ],
    "meanings": {
      "de": "Flasche",
      "ko": "병",
      "en": "bottle",
      "es": "botella",
      "fr": "bouteille",
      "it": "bottiglia",
      "pt": "garrafa",
      "ja": "瓶",
      "zh": "瓶子",
      "ru": "бутылка"
    },
    "examples": [
      "Eine Flasche Bier, bitte."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Flaschen"
  },
  {
    "id": "fleisch_nn_1",
    "lemma": "Fleisch",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "food"
    ],
    "meanings": {
      "de": "Fleisch",
      "ko": "고기",
      "en": "meat",
      "es": "carne",
      "fr": "viande",
      "it": "carne",
      "pt": "carne",
      "ja": "肉",
      "zh": "肉",
      "ru": "мясо"
    },
    "examples": [
      "Fleisch mag ich nicht."
    ],
    "meta": {},
    "gender": "das"
  },
  {
    "id": "fliegen_v_1",
    "lemma": "fliegen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel"
    ],
    "meanings": {
      "de": "fliegen",
      "ko": "날다",
      "en": "fly",
      "es": "volar",
      "fr": "voler",
      "it": "volare",
      "pt": "voar",
      "ja": "飛ぶ",
      "zh": "飞",
      "ru": "летать"
    },
    "examples": [
      "Ich fliege nicht gern."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich fliege",
      "pres_du": "du fliegst",
      "pres_er": "er/sie/es fliegt",
      "praet": "flog",
      "part2": "geflogen",
      "aux": "sein"
    }
  },
  {
    "id": "abfliegen_v_1",
    "lemma": "abfliegen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel"
    ],
    "meanings": {
      "de": "abfliegen",
      "ko": "이륙하다",
      "en": "depart",
      "es": "despegar",
      "fr": "décoller",
      "it": "decollare",
      "pt": "descolar",
      "ja": "離陸する",
      "zh": "起飞",
      "ru": "вылетать"
    },
    "examples": [
      "Wann fliegst du ab?"
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich fliege ab",
      "pres_du": "du fliegst ab",
      "pres_er": "er/sie/es fliegt ab",
      "praet": "flog ab",
      "part2": "abgeflogen",
      "aux": "sein"
    }
  },
  {
    "id": "abflug_nm_1",
    "lemma": "Abflug",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel"
    ],
    "meanings": {
      "de": "Abflug",
      "ko": "출발",
      "en": "departure",
      "es": "salida",
      "fr": "décollage",
      "it": "partenza",
      "pt": "partida",
      "ja": "離陸",
      "zh": "起飞",
      "ru": "вылет"
    },
    "examples": [
      "Der Abflug ist um 11.20 Uhr."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Abflüge"
  },
  {
    "id": "flughafen_nm_1",
    "lemma": "Flughafen",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel"
    ],
    "meanings": {
      "de": "Flughafen",
      "ko": "공항",
      "en": "airport",
      "es": "aeropuerto",
      "fr": "aéroport",
      "it": "aeroporto",
      "pt": "aeroporto",
      "ja": "空港",
      "zh": "机场",
      "ru": "аэропорт"
    },
    "examples": [
      "Kannst du mich zum Flughafen bringen?"
    ],
    "meta": {},
    "gender": "der",
    "plural": "Flughäfen"
  },
  {
    "id": "flugzeug_nn_1",
    "lemma": "Flugzeug",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "travel"
    ],
    "meanings": {
      "de": "Flugzeug",
      "ko": "비행기",
      "en": "airplane",
      "es": "avión",
      "fr": "avion",
      "it": "aereo",
      "pt": "avião",
      "ja": "飛行機",
      "zh": "飞机",
      "ru": "самолет"
    },
    "examples": [
      "Das Flugzeug aus Berlin kommt heute später an."
    ],
    "meta": {},
    "gender": "das",
    "plural": "Flugzeuge"
  },
  {
    "id": "formular_nn_1",
    "lemma": "Formular",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "bureaucracy"
    ],
    "meanings": {
      "de": "Formular",
      "ko": "신청서",
      "en": "form",
      "es": "formulario",
      "fr": "formulaire",
      "it": "modulo",
      "pt": "formulário",
      "ja": "用紙",
      "zh": "表格",
      "ru": "бланк"
    },
    "examples": [
      "Sie müssen dieses Formular ausfüllen."
    ],
    "meta": {},
    "gender": "das",
    "plural": "Formulare"
  },
  {
    "id": "foto_nn_1",
    "lemma": "Foto",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "leisure",
      "media"
    ],
    "meanings": {
      "de": "Foto",
      "ko": "사진",
      "en": "photo",
      "es": "foto",
      "fr": "photo",
      "it": "foto",
      "pt": "foto",
      "ja": "写真",
      "zh": "照片",
      "ru": "фото"
    },
    "examples": [
      "Darf ich ein Foto machen?"
    ],
    "meta": {},
    "gender": "das",
    "plural": "Fotos"
  },
  {
    "id": "fragen_v_1",
    "lemma": "fragen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "communication",
      "daily"
    ],
    "meanings": {
      "de": "fragen",
      "ko": "질문하다",
      "en": "ask",
      "es": "preguntar",
      "fr": "demander",
      "it": "domandare",
      "pt": "perguntar",
      "ja": "質問する",
      "zh": "问",
      "ru": "спрашивать"
    },
    "examples": [
      "Er möchte Sie etwas fragen."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich frage",
      "pres_du": "du fragst",
      "pres_er": "er/sie/es fragt",
      "praet": "fragte",
      "part2": "gefragt",
      "aux": "haben"
    }
  },
  {
    "id": "frage_nf_1",
    "lemma": "Frage",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "communication",
      "school"
    ],
    "meanings": {
      "de": "Frage",
      "ko": "질문",
      "en": "question",
      "es": "pregunta",
      "fr": "question",
      "it": "domanda",
      "pt": "pergunta",
      "ja": "質問",
      "zh": "问题",
      "ru": "вопрос"
    },
    "examples": [
      "Ich habe eine Frage."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Fragen"
  },
  {
    "id": "frau_nf_1",
    "lemma": "Frau",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "people",
      "basic"
    ],
    "meanings": {
      "de": "Frau",
      "ko": "여자",
      "en": "woman",
      "es": "mujer",
      "fr": "femme",
      "it": "donna",
      "pt": "mulher",
      "ja": "女性",
      "zh": "女士",
      "ru": "женщина"
    },
    "examples": [
      "Das ist Frau Becker."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Frauen"
  },
  {
    "id": "frei_adj_1",
    "lemma": "frei",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily"
    ],
    "meanings": {
      "de": "frei",
      "ko": "자유로운",
      "en": "free",
      "es": "libre",
      "fr": "libre",
      "it": "libero",
      "pt": "livre",
      "ja": "自由な",
      "zh": "空闲",
      "ru": "свободный"
    },
    "examples": [
      "Ist der Platz noch frei?"
    ],
    "meta": {}
  },
  {
    "id": "freizeit_nf_1",
    "lemma": "Freizeit",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "leisure"
    ],
    "meanings": {
      "de": "Freizeit",
      "ko": "여가 시간",
      "en": "free time",
      "es": "tiempo libre",
      "fr": "loisirs",
      "it": "tempo libero",
      "pt": "tempo livre",
      "ja": "余暇",
      "zh": "业余时间",
      "ru": "свободное время"
    },
    "examples": [
      "In meiner Freizeit spiele ich oft Fußball."
    ],
    "meta": {},
    "gender": "die"
  },
  {
    "id": "fremd_adj_1",
    "lemma": "fremd",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": [
      "exam",
      "daily",
      "travel"
    ],
    "meanings": {
      "de": "fremd",
      "ko": "낯선",
      "en": "foreign",
      "es": "extraño",
      "fr": "étranger",
      "it": "estraneo",
      "pt": "estranho",
      "ja": "見知らぬ",
      "zh": "陌生的",
      "ru": "чужой"
    },
    "examples": [
      "Das weiß ich nicht; ich bin fremd hier."
    ],
    "meta": {}
  },
  {
    "id": "freuen_v_1",
    "lemma": "freuen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "feeling",
      "daily"
    ],
    "meanings": {
      "de": "freuen",
      "ko": "기뻐하다",
      "en": "be glad",
      "es": "alegrarse",
      "fr": "se réjouir",
      "it": "rallegrarsi",
      "pt": "alegrar-se",
      "ja": "喜ぶ",
      "zh": "高兴",
      "ru": "радоваться"
    },
    "examples": [
      "Ich freue mich auf den Urlaub."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich freue mich",
      "pres_du": "du freust dich",
      "pres_er": "er/sie/es freut sich",
      "praet": "freute",
      "part2": "gefreut",
      "aux": "haben"
    }
  },
  {
    "id": "freund_nm_1",
    "lemma": "Freund",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "social"
    ],
    "meanings": {
      "de": "Freund",
      "ko": "친구",
      "en": "friend",
      "es": "amigo",
      "fr": "ami",
      "it": "amico",
      "pt": "amigo",
      "ja": "男友達",
      "zh": "朋友",
      "ru": "друг"
    },
    "examples": [
      "Das ist ein Freund von mir."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Freunde"
  },
  {
    "id": "freundin_nf_1",
    "lemma": "Freundin",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "social"
    ],
    "meanings": {
      "de": "Freundin",
      "ko": "여자 친구",
      "en": "friend",
      "es": "amiga",
      "fr": "amie",
      "it": "amica",
      "pt": "amiga",
      "ja": "女友達",
      "zh": "女朋友",
      "ru": "подруга"
    },
    "examples": [
      "Das ist meine Freundin."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Freundinnen"
  },
  {
    "id": "frueher_adv_1",
    "lemma": "früher",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": [
      "exam",
      "time",
      "history"
    ],
    "meanings": {
      "de": "früher",
      "ko": "이전에",
      "en": "earlier",
      "es": "antes",
      "fr": "autrefois",
      "it": "prima",
      "pt": "antigamente",
      "ja": "以前",
      "zh": "以前",
      "ru": "раньше"
    },
    "examples": [
      "Früher waren wir oft zusammen im Kino."
    ],
    "meta": {}
  },
  {
    "id": "fruehstuecken_v_1",
    "lemma": "frühstücken",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "food",
      "daily"
    ],
    "meanings": {
      "de": "frühstücken",
      "ko": "아침 식사하다",
      "en": "have breakfast",
      "es": "desayunar",
      "fr": "prendre le petit déjeuner",
      "it": "fare colazione",
      "pt": "tomar café da manhã",
      "ja": "朝食をとる",
      "zh": "吃早餐",
      "ru": "завтракать"
    },
    "examples": [
      "Am Sonntag frühstücke ich gern im Bett."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich frühstücke",
      "pres_du": "du frühstückst",
      "pres_er": "er/sie/es frühstückt",
      "praet": "frühstückte",
      "part2": "gefrühstückt",
      "aux": "haben"
    }
  },
  {
    "id": "fruehstueck_nn_1",
    "lemma": "Frühstück",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "food",
      "daily"
    ],
    "meanings": {
      "de": "Frühstück",
      "ko": "아침 식사",
      "en": "breakfast",
      "es": "desayuno",
      "fr": "petit déjeuner",
      "it": "colazione",
      "pt": "café da manhã",
      "ja": "朝食",
      "zh": "早餐",
      "ru": "завтрак"
    },
    "examples": [
      "Möchtest du ein Ei zum Frühstück?"
    ],
    "meta": {},
    "gender": "das"
  },
  {
    "id": "fuehrung_nf_1",
    "lemma": "Führung",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "culture",
      "travel"
    ],
    "meanings": {
      "de": "Führung",
      "ko": "가이드 투어",
      "en": "guided tour",
      "es": "visita guiada",
      "fr": "visite guidée",
      "it": "visita guidata",
      "pt": "visita guiada",
      "ja": "ガイドツアー",
      "zh": "导览",
      "ru": "экскурсия"
    },
    "examples": [
      "Die Führung durch das Haus beginnt in 3 Minuten."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Führungen"
  },
  {
    "id": "fuer_prep_1",
    "lemma": "für",
    "pos": "Präposition",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic"
    ],
    "meanings": {
      "de": "für",
      "ko": "위해",
      "en": "for",
      "es": "para",
      "fr": "pour",
      "it": "per",
      "pt": "para",
      "ja": "～のために",
      "zh": "为了",
      "ru": "для"
    },
    "examples": [
      "Das ist für Sie."
    ],
    "meta": {}
  },
  {
    "id": "fuss_nm_1",
    "lemma": "Fuß",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "body"
    ],
    "meanings": {
      "de": "Fuß",
      "ko": "발",
      "en": "foot",
      "es": "pie",
      "fr": "pied",
      "it": "piede",
      "pt": "pé",
      "ja": "足",
      "zh": "脚",
      "ru": "ступня"
    },
    "examples": [
      "Der linke Fuß tut mir weh."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Füße"
  },
  {
    "id": "fussball_nm_1",
    "lemma": "Fußball",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "leisure",
      "sport"
    ],
    "meanings": {
      "de": "Fußball",
      "ko": "축구",
      "en": "soccer",
      "es": "fútbol",
      "fr": "football",
      "it": "calcio",
      "pt": "futebol",
      "ja": "サッカー",
      "zh": "足球",
      "ru": "футбол"
    },
    "examples": [
      "Spielt ihr gerne Fußball?"
    ],
    "meta": {},
    "gender": "der"
  },
  {
    "id": "garten_nm_1",
    "lemma": "Garten",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "housing",
      "leisure"
    ],
    "meanings": {
      "de": "Garten",
      "ko": "정원",
      "en": "garden",
      "es": "jardín",
      "fr": "jardin",
      "it": "giardino",
      "pt": "jardim",
      "ja": "庭",
      "zh": "花园",
      "ru": "сад"
    },
    "examples": [
      "Wir haben leider keinen Garten."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Gärten"
  },
  {
    "id": "gast_nm_1",
    "lemma": "Gast",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "social",
      "travel"
    ],
    "meanings": {
      "de": "Gast",
      "ko": "손님",
      "en": "guest",
      "es": "invitado",
      "fr": "invité",
      "it": "ospite",
      "pt": "hóspede",
      "ja": "客",
      "zh": "客人",
      "ru": "гость"
    },
    "examples": [
      "Am Wochenende haben wir mehrere Gäste."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Gäste"
  },
  {
    "id": "geben_v_1",
    "lemma": "geben",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic",
      "daily"
    ],
    "meanings": {
      "de": "geben",
      "ko": "주다",
      "en": "give",
      "es": "dar",
      "fr": "donner",
      "it": "dare",
      "pt": "dar",
      "ja": "与える",
      "zh": "给",
      "ru": "давать"
    },
    "examples": [
      "Kannst du mir bitte deinen Kugelschreiber geben?"
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich gebe",
      "pres_du": "du gibst",
      "pres_er": "er/sie/es gibt",
      "praet": "gab",
      "part2": "gegeben",
      "aux": "haben"
    }
  },
  {
    "id": "geboren_adj_1",
    "lemma": "geboren",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": [
      "exam",
      "personal_info"
    ],
    "meanings": {
      "de": "geboren",
      "ko": "태어난",
      "en": "born",
      "es": "nacido",
      "fr": "né",
      "it": "nato",
      "pt": "nascido",
      "ja": "生まれた",
      "zh": "出生",
      "ru": "рожденный"
    },
    "examples": [
      "Ich bin in Zagreb geboren."
    ],
    "meta": {}
  },
  {
    "id": "geburtsjahr_nn_1",
    "lemma": "Geburtsjahr",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "personal_info"
    ],
    "meanings": {
      "de": "Geburtsjahr",
      "ko": "출생년도",
      "en": "year of birth",
      "es": "año de nacimiento",
      "fr": "année de naissance",
      "it": "anno di nascita",
      "pt": "ano de nascimento",
      "ja": "生年",
      "zh": "出生年份",
      "ru": "год рождения"
    },
    "examples": [
      "Das Geburtsjahr Ihres Sohnes, bitte?"
    ],
    "meta": {},
    "gender": "das",
    "plural": "Geburtsjahre"
  },
  {
    "id": "geburtsort_nm_1",
    "lemma": "Geburtsort",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "personal_info"
    ],
    "meanings": {
      "de": "Geburtsort",
      "ko": "출생지",
      "en": "place of birth",
      "es": "lugar de nacimiento",
      "fr": "lieu de naissance",
      "it": "luogo di nascita",
      "pt": "local de nascimento",
      "ja": "出生地",
      "zh": "出生地",
      "ru": "место рождения"
    },
    "examples": [
      "Bitte schreiben Sie Ihren Geburtsort auf das Formular."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Geburtsorte"
  },
  {
    "id": "geburtstag_nm_1",
    "lemma": "Geburtstag",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "celebration",
      "personal_info"
    ],
    "meanings": {
      "de": "Geburtstag",
      "ko": "생일",
      "en": "birthday",
      "es": "cumpleaños",
      "fr": "anniversaire",
      "it": "compleanno",
      "pt": "aniversário",
      "ja": "誕生日",
      "zh": "生日",
      "ru": "день рождения"
    },
    "examples": [
      "Herzlichen Glückwunsch zum Geburtstag!"
    ],
    "meta": {},
    "gender": "der",
    "plural": "Geburtstage"
  },
  {
    "id": "gefallen_v_1",
    "lemma": "gefallen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "opinion",
      "feeling"
    ],
    "meanings": {
      "de": "gefallen",
      "ko": "마음에 들다",
      "en": "like",
      "es": "gustar",
      "fr": "plaire",
      "it": "piacere",
      "pt": "agradar",
      "ja": "気に入る",
      "zh": "喜欢",
      "ru": "нравиться"
    },
    "examples": [
      "Das gefällt mir."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich gefalle",
      "pres_du": "du gefällst",
      "pres_er": "er/sie/es gefällt",
      "praet": "gefiel",
      "part2": "gefallen",
      "aux": "haben"
    }
  },
  {
    "id": "gegen_prep_1",
    "lemma": "gegen",
    "pos": "Präposition",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic",
      "sport"
    ],
    "meanings": {
      "de": "gegen",
      "ko": "~에 대항하여",
      "en": "against",
      "es": "contra",
      "fr": "contre",
      "it": "contro",
      "pt": "contra",
      "ja": "～に対して",
      "zh": "反对",
      "ru": "против"
    },
    "examples": [
      "Fahr nicht gegen den Baum!"
    ],
    "meta": {}
  },
  {
    "id": "gehen_v_1",
    "lemma": "gehen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "daily", "basic"],
    "meanings": {
      "de": "gehen",
      "ko": "가다",
      "en": "go",
      "es": "ir",
      "fr": "aller",
      "it": "andare",
      "pt": "ir",
      "ja": "行く",
      "zh": "去",
      "ru": "идти"
    },
    "examples": ["Ich gehe zu Fuß zur Arbeit."],
    "meta": {},
    "conj": {
      "pres_ich": "ich gehe",
      "pres_du": "du gehst",
      "pres_er": "er/sie/es geht",
      "praet": "ging",
      "part2": "gegangen",
      "aux": "sein"
    }
  },
  {
    "id": "gehen_v_2",
    "lemma": "gehen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "daily", "basic"],
    "meanings": {
      "de": "gehen",
      "ko": "지내다",
      "en": "be",
      "es": "estar",
      "fr": "aller",
      "it": "stare",
      "pt": "estar",
      "ja": "元気だ",
      "zh": "过得",
      "ru": "поживать"
    },
    "examples": ["Wie geht es Ihnen?"],
    "meta": {},
    "conj": {
      "pres_ich": "es geht mir",
      "pres_du": "es geht dir",
      "pres_er": "es geht ihm/ihr",
      "praet": "ging",
      "part2": "gegangen",
      "aux": "sein"
    }
  },
  {
    "id": "gehoeren_v_1",
    "lemma": "gehören",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "gehören",
      "ko": "속하다",
      "en": "belong",
      "es": "pertenecer",
      "fr": "appartenir",
      "it": "appartenere",
      "pt": "pertencer",
      "ja": "属する",
      "zh": "属于",
      "ru": "принадлежать"
    },
    "examples": ["Wem gehört das Buch?"],
    "meta": {},
    "conj": {
      "pres_ich": "ich gehöre",
      "pres_du": "du gehörst",
      "pres_er": "er/sie/es gehört",
      "praet": "gehörte",
      "part2": "gehört",
      "aux": "haben"
    }
  },
  {
    "id": "geld_nn_1",
    "lemma": "Geld",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "shopping", "finance"],
    "meanings": {
      "de": "Geld",
      "ko": "돈",
      "en": "money",
      "es": "dinero",
      "fr": "argent",
      "it": "soldi",
      "pt": "dinheiro",
      "ja": "お金",
      "zh": "钱",
      "ru": "деньги"
    },
    "examples": ["Ich habe kein Geld dabei."],
    "meta": {},
    "gender": "das",
    "plural": ""
  },
  {
    "id": "gemuese_nn_1",
    "lemma": "Gemüse",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "food"],
    "meanings": {
      "de": "Gemüse",
      "ko": "채소",
      "en": "vegetables",
      "es": "verdura",
      "fr": "légumes",
      "it": "verdura",
      "pt": "legumes",
      "ja": "野菜",
      "zh": "蔬菜",
      "ru": "овощи"
    },
    "examples": ["Wir kaufen unser Gemüse auf dem Markt."],
    "meta": {},
    "gender": "das",
    "plural": ""
  },
  {
    "id": "gepaeck_nn_1",
    "lemma": "Gepäck",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "travel"],
    "meanings": {
      "de": "Gepäck",
      "ko": "짐",
      "en": "luggage",
      "es": "equipaje",
      "fr": "bagages",
      "it": "bagaglio",
      "pt": "bagagem",
      "ja": "荷物",
      "zh": "行李",
      "ru": "багаж"
    },
    "examples": ["Sie können Ihr Gepäck hier lassen."],
    "meta": {},
    "gender": "das",
    "plural": ""
  },
  {
    "id": "geradeaus_adv_1",
    "lemma": "geradeaus",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "location", "travel"],
    "meanings": {
      "de": "geradeaus",
      "ko": "똑바로",
      "en": "straight on",
      "es": "todo recto",
      "fr": "tout droit",
      "it": "dritto",
      "pt": "sempre em frente",
      "ja": "まっすぐ",
      "zh": "直行",
      "ru": "прямо"
    },
    "examples": ["Gehen Sie immer geradeaus!"],
    "meta": {}
  },
  {
    "id": "gern_adv_1",
    "lemma": "gern",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "basic", "preference"],
    "meanings": {
      "de": "gern",
      "ko": "기꺼이",
      "en": "gladly",
      "es": "con gusto",
      "fr": "volontiers",
      "it": "volentieri",
      "pt": "com prazer",
      "ja": "好んで",
      "zh": "乐意",
      "ru": "охотно"
    },
    "examples": ["Ich helfe Ihnen gern."],
    "meta": {}
  },
  {
    "id": "geschaeft_nn_1",
    "lemma": "Geschäft",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "shopping", "city"],
    "meanings": {
      "de": "Geschäft",
      "ko": "가게",
      "en": "shop",
      "es": "tienda",
      "fr": "magasin",
      "it": "negozio",
      "pt": "loja",
      "ja": "店",
      "zh": "商店",
      "ru": "магазин"
    },
    "examples": ["Die Geschäfte schließen um 18.30 Uhr."],
    "meta": {},
    "gender": "das",
    "plural": "Geschäfte"
  },
  {
    "id": "geschenk_nn_1",
    "lemma": "Geschenk",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "celebration", "shopping"],
    "meanings": {
      "de": "Geschenk",
      "ko": "선물",
      "en": "gift",
      "es": "regalo",
      "fr": "cadeau",
      "it": "regalo",
      "pt": "presente",
      "ja": "贈り物",
      "zh": "礼物",
      "ru": "подарок"
    },
    "examples": ["Das ist ein schönes Geschenk."],
    "meta": {},
    "gender": "das",
    "plural": "Geschenke"
  },
  {
    "id": "geschwister_nx_1",
    "lemma": "Geschwister",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "family"],
    "meanings": {
      "de": "Geschwister",
      "ko": "형제자매",
      "en": "siblings",
      "es": "hermanos",
      "fr": "frères et sœurs",
      "it": "fratelli e sorelle",
      "pt": "irmãos",
      "ja": "兄弟姉妹",
      "zh": "兄弟姐妹",
      "ru": "братья и сестры"
    },
    "examples": ["Ich habe keine Geschwister."],
    "meta": {},
    "gender": "",
    "plural": "Geschwister"
  },
  {
    "id": "gespraech_nn_1",
    "lemma": "Gespräch",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "communication"],
    "meanings": {
      "de": "Gespräch",
      "ko": "대화",
      "en": "conversation",
      "es": "conversación",
      "fr": "conversation",
      "it": "conversazione",
      "pt": "conversa",
      "ja": "会話",
      "zh": "谈话",
      "ru": "разговор"
    },
    "examples": ["Das war ein interessantes Gespräch."],
    "meta": {},
    "gender": "das",
    "plural": "Gespräche"
  },
  {
    "id": "gestern_adv_1",
    "lemma": "gestern",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "time"],
    "meanings": {
      "de": "gestern",
      "ko": "어제",
      "en": "yesterday",
      "es": "ayer",
      "fr": "hier",
      "it": "ieri",
      "pt": "ontem",
      "ja": "昨日",
      "zh": "昨天",
      "ru": "вчера"
    },
    "examples": ["Gestern war ich krank."],
    "meta": {}
  },
  {
    "id": "gesund_adj_1",
    "lemma": "gesund",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "health"],
    "meanings": {
      "de": "gesund",
      "ko": "건강한",
      "en": "healthy",
      "es": "sano",
      "fr": "sain",
      "it": "sano",
      "pt": "saudável",
      "ja": "健康な",
      "zh": "健康",
      "ru": "здоровый"
    },
    "examples": ["Ich hoffe, Sie sind bald wieder gesund."],
    "meta": {}
  },
  {
    "id": "getraenk_nn_1",
    "lemma": "Getränk",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "food"],
    "meanings": {
      "de": "Getränk",
      "ko": "음료",
      "en": "drink",
      "es": "bebida",
      "fr": "boisson",
      "it": "bevanda",
      "pt": "bebida",
      "ja": "飲み物",
      "zh": "饮料",
      "ru": "напиток"
    },
    "examples": ["Die Getränke kosten extra."],
    "meta": {},
    "gender": "das",
    "plural": "Getränke"
  },
  {
    "id": "gewicht_nn_1",
    "lemma": "Gewicht",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "health", "measurement"],
    "meanings": {
      "de": "Gewicht",
      "ko": "몸무게",
      "en": "weight",
      "es": "peso",
      "fr": "poids",
      "it": "peso",
      "pt": "peso",
      "ja": "重さ",
      "zh": "重量",
      "ru": "вес"
    },
    "examples": ["Bei „Gewicht“ schreibst du 62 Kilo."],
    "meta": {},
    "gender": "das",
    "plural": "Gewichte"
  },
  {
    "id": "gewinnen_v_1",
    "lemma": "gewinnen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "leisure", "sport"],
    "meanings": {
      "de": "gewinnen",
      "ko": "이기다",
      "en": "win",
      "es": "ganar",
      "fr": "gagner",
      "it": "vincere",
      "pt": "ganhar",
      "ja": "勝つ",
      "zh": "赢",
      "ru": "выигрывать"
    },
    "examples": ["Unsere Mannschaft hat gewonnen."],
    "meta": {},
    "conj": {
      "pres_ich": "ich gewinne",
      "pres_du": "du gewinnst",
      "pres_er": "er/sie/es gewinnt",
      "praet": "gewann",
      "part2": "gewonnen",
      "aux": "haben"
    }
  },
  {
    "id": "gitarre_nf_1",
    "lemma": "Gitarre",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "leisure", "music"],
    "meanings": {
      "de": "Gitarre",
      "ko": "기타",
      "en": "guitar",
      "es": "guitarra",
      "fr": "guitare",
      "it": "chitarra",
      "pt": "guitarra",
      "ja": "ギター",
      "zh": "吉他",
      "ru": "гитара"
    },
    "examples": ["Er spielt gut Gitarre."],
    "meta": {},
    "gender": "die",
    "plural": "Gitarren"
  },
  {
    "id": "glas_nn_1",
    "lemma": "Glas",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "food", "kitchen"],
    "meanings": {
      "de": "Glas",
      "ko": "유리잔",
      "en": "glass",
      "es": "vaso",
      "fr": "verre",
      "it": "bicchiere",
      "pt": "copo",
      "ja": "コップ",
      "zh": "玻璃杯",
      "ru": "стакан"
    },
    "examples": ["Bitte noch ein Glas Wein!"],
    "meta": {},
    "gender": "das",
    "plural": "Gläser"
  },
  {
    "id": "glauben_v_1",
    "lemma": "glauben",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "opinion", "basic"],
    "meanings": {
      "de": "glauben",
      "ko": "믿다",
      "en": "believe",
      "es": "creer",
      "fr": "croire",
      "it": "credere",
      "pt": "acreditar",
      "ja": "信じる",
      "zh": "相信",
      "ru": "верить"
    },
    "examples": ["Ich glaube, er kommt gleich."],
    "meta": {},
    "conj": {
      "pres_ich": "ich glaube",
      "pres_du": "du glaubst",
      "pres_er": "er/sie/es glaubt",
      "praet": "glaubte",
      "part2": "geglaubt",
      "aux": "haben"
    }
  },
  {
    "id": "gleich_adv_1",
    "lemma": "gleich",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "time", "basic"],
    "meanings": {
      "de": "gleich",
      "ko": "곧",
      "en": "soon",
      "es": "ahora mismo",
      "fr": "tout de suite",
      "it": "subito",
      "pt": "já",
      "ja": "すぐに",
      "zh": "马上",
      "ru": "сейчас"
    },
    "examples": ["Ich komme gleich."],
    "meta": {}
  },
  {
    "id": "gleis_nn_1",
    "lemma": "Gleis",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "travel", "train"],
    "meanings": {
      "de": "Gleis",
      "ko": "선로",
      "en": "track",
      "es": "vía",
      "fr": "voie",
      "it": "binario",
      "pt": "linha",
      "ja": "線路",
      "zh": "站台",
      "ru": "путь"
    },
    "examples": ["Der Zug fährt auf Gleis 7 ab."],
    "meta": {},
    "gender": "das",
    "plural": "Gleise"
  },
  {
    "id": "glueck_nn_1",
    "lemma": "Glück",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "feeling", "basic"],
    "meanings": {
      "de": "Glück",
      "ko": "행운",
      "en": "luck",
      "es": "suerte",
      "fr": "chance",
      "it": "fortuna",
      "pt": "sorte",
      "ja": "幸運",
      "zh": "幸运",
      "ru": "счастье"
    },
    "examples": ["Viel Glück!"],
    "meta": {},
    "gender": "das",
    "plural": ""
  },
  {
    "id": "gluecklich_adj_1",
    "lemma": "glücklich",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "feeling"],
    "meanings": {
      "de": "glücklich",
      "ko": "행복한",
      "en": "happy",
      "es": "feliz",
      "fr": "heureux",
      "it": "felice",
      "pt": "feliz",
      "ja": "幸せな",
      "zh": "幸福",
      "ru": "счастливый"
    },
    "examples": ["Meine Kinder sind glücklich."],
    "meta": {}
  },
  {
    "id": "glueckwunsch_nm_1",
    "lemma": "Glückwunsch",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "celebration", "communication"],
    "meanings": {
      "de": "Glückwunsch",
      "ko": "축하",
      "en": "congratulation",
      "es": "felicitación",
      "fr": "félicitation",
      "it": "congratulazione",
      "pt": "parabéns",
      "ja": "お祝い",
      "zh": "祝贺",
      "ru": "поздравление"
    },
    "examples": ["Herzlichen Glückwunsch!"],
    "meta": {},
    "gender": "der",
    "plural": "Glückwünsche"
  },
  {
    "id": "grad_nm_1",
    "lemma": "Grad",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "weather", "measurement"],
    "meanings": {
      "de": "Grad",
      "ko": "도",
      "en": "degree",
      "es": "grado",
      "fr": "degré",
      "it": "grado",
      "pt": "grau",
      "ja": "度",
      "zh": "度",
      "ru": "градус"
    },
    "examples": ["Heute sind es 30 Grad."],
    "meta": {},
    "gender": "der",
    "plural": "Grad"
  },
  {
    "id": "gratulieren_v_1",
    "lemma": "gratulieren",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "celebration", "communication"],
    "meanings": {
      "de": "gratulieren",
      "ko": "축하하다",
      "en": "congratulate",
      "es": "felicitar",
      "fr": "féliciter",
      "it": "congratularsi",
      "pt": "felicitar",
      "ja": "祝う",
      "zh": "祝贺",
      "ru": "поздравлять"
    },
    "examples": ["Ich gratuliere dir!"],
    "meta": {},
    "conj": {
      "pres_ich": "ich gratuliere",
      "pres_du": "du gratulierst",
      "pres_er": "er/sie/es gratuliert",
      "praet": "gratulierte",
      "part2": "gratuliert",
      "aux": "haben"
    }
  },
  {
    "id": "grillen_v_1",
    "lemma": "grillen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "leisure", "food"],
    "meanings": {
      "de": "grillen",
      "ko": "고기를 굽다",
      "en": "grill",
      "es": "hacer una barbacoa",
      "fr": "faire un barbecue",
      "it": "grigliare",
      "pt": "grelhar",
      "ja": "バーベキューをする",
      "zh": "烧烤",
      "ru": "жарить на гриле"
    },
    "examples": ["Heute grillen wir im Garten."],
    "meta": {},
    "conj": {
      "pres_ich": "ich grille",
      "pres_du": "du grillst",
      "pres_er": "er/sie/es grillt",
      "praet": "grillte",
      "part2": "gegrillt",
      "aux": "haben"
    }
  },
  {
    "id": "gross_adj_1",
    "lemma": "groß",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "basic", "description"],
    "meanings": {
      "de": "groß",
      "ko": "큰",
      "en": "big",
      "es": "grande",
      "fr": "grand",
      "it": "grande",
      "pt": "grande",
      "ja": "大きい",
      "zh": "大",
      "ru": "большой"
    },
    "examples": ["Mein Bruder ist sehr groß."],
    "meta": {}
  },
  {
    "id": "groesse_nf_1",
    "lemma": "Größe",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "shopping", "clothing"],
    "meanings": {
      "de": "Größe",
      "ko": "사이즈",
      "en": "size",
      "es": "talla",
      "fr": "taille",
      "it": "taglia",
      "pt": "tamanho",
      "ja": "サイズ",
      "zh": "大小",
      "ru": "размер"
    },
    "examples": ["Haben Sie das auch in Größe 40?"],
    "meta": {},
    "gender": "die",
    "plural": "Größen"
  },
  {
    "id": "gruppe_nf_1",
    "lemma": "Gruppe",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "society"],
    "meanings": {
      "de": "Gruppe",
      "ko": "그룹",
      "en": "group",
      "es": "grupo",
      "fr": "groupe",
      "it": "gruppo",
      "pt": "grupo",
      "ja": "グループ",
      "zh": "组",
      "ru": "группа"
    },
    "examples": ["Die erste Gruppe beginnt um 9 Uhr."],
    "meta": {},
    "gender": "die",
    "plural": "Gruppen"
  },
  {
    "id": "gruss_nm_1",
    "lemma": "Gruß",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "communication"],
    "meanings": {
      "de": "Gruß",
      "ko": "인사",
      "en": "greeting",
      "es": "saludo",
      "fr": "salutation",
      "it": "saluto",
      "pt": "saudação",
      "ja": "挨拶",
      "zh": "问候",
      "ru": "приветствие"
    },
    "examples": ["Viele Grüße an Ihre Frau."],
    "meta": {},
    "gender": "der",
    "plural": "Grüße"
  },
  {
    "id": "gueltig_adj_1",
    "lemma": "gültig",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "travel", "rules"],
    "meanings": {
      "de": "gültig",
      "ko": "유효한",
      "en": "valid",
      "es": "válido",
      "fr": "valable",
      "it": "valido",
      "pt": "válido",
      "ja": "有効な",
      "zh": "有效",
      "ru": "действительный"
    },
    "examples": ["Der Pass ist nicht mehr gültig."],
    "meta": {}
  },
  {
    "id": "guenstig_adj_1",
    "lemma": "günstig",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "shopping"],
    "meanings": {
      "de": "günstig",
      "ko": "저렴한",
      "en": "cheap",
      "es": "barato",
      "fr": "bon marché",
      "it": "economico",
      "pt": "barato",
      "ja": "安い",
      "zh": "便宜",
      "ru": "выгодный"
    },
    "examples": ["Dort gibt es günstige Angebote."],
    "meta": {}
  },
  {
    "id": "gut_adj_1",
    "lemma": "gut",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "basic", "opinion"],
    "meanings": {
      "de": "gut",
      "ko": "좋은",
      "en": "good",
      "es": "bueno",
      "fr": "bon",
      "it": "buono",
      "pt": "bom",
      "ja": "良い",
      "zh": "好",
      "ru": "хороший"
    },
    "examples": ["Das Essen schmeckt gut."],
    "meta": {}
  },
  {
    "id": "haar_nn_1",
    "lemma": "Haar",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "body"],
    "meanings": {
      "de": "Haar",
      "ko": "머리카락",
      "en": "hair",
      "es": "pelo",
      "fr": "cheveu",
      "it": "capello",
      "pt": "cabelo",
      "ja": "髪",
      "zh": "头发",
      "ru": "волосы"
    },
    "examples": ["Sie hat lange Haare."],
    "meta": {},
    "gender": "das",
    "plural": "Haare"
  },
  {
    "id": "haben_v_1",
    "lemma": "haben",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "haben",
      "ko": "가지고 있다",
      "en": "have",
      "es": "tener",
      "fr": "avoir",
      "it": "avere",
      "pt": "ter",
      "ja": "持っている",
      "zh": "有",
      "ru": "иметь"
    },
    "examples": ["Ich habe ein neues Auto."],
    "meta": {},
    "conj": {
      "pres_ich": "ich habe",
      "pres_du": "du hast",
      "pres_er": "er/sie/es hat",
      "praet": "hatte",
      "part2": "gehabt",
      "aux": "haben"
    }
  },
  {
    "id": "haehnchen_nn_1",
    "lemma": "Hähnchen",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "food"],
    "meanings": {
      "de": "Hähnchen",
      "ko": "닭고기",
      "en": "chicken",
      "es": "pollo",
      "fr": "poulet",
      "it": "pollo",
      "pt": "frango",
      "ja": "鶏肉",
      "zh": "鸡肉",
      "ru": "курица"
    },
    "examples": ["Ein Hähnchen mit Pommes, bitte."],
    "meta": {},
    "gender": "das",
    "plural": "Hähnchen"
  },
  {
    "id": "hallo_int_1",
    "lemma": "Hallo",
    "pos": "Interjektion",
    "cefr": "A1",
    "tags": ["exam", "communication", "basic"],
    "meanings": {
      "de": "Hallo",
      "ko": "안녕",
      "en": "hello",
      "es": "hola",
      "fr": "salut",
      "it": "ciao",
      "pt": "olá",
      "ja": "こんにちは",
      "zh": "你好",
      "ru": "привет"
    },
    "examples": ["Hallo, wie geht's?"],
    "meta": {}
  },
  {
    "id": "halb_adj_1",
    "lemma": "halb",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "time", "basic"],
    "meanings": {
      "de": "halb",
      "ko": "절반의",
      "en": "half",
      "es": "medio",
      "fr": "demi",
      "it": "mezzo",
      "pt": "meio",
      "ja": "半分の",
      "zh": "半",
      "ru": "половина"
    },
    "examples": ["Es ist halb acht."],
    "meta": {}
  },
  {
    "id": "halbpension_nf_1",
    "lemma": "Halbpension",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "travel", "housing"],
    "meanings": {
      "de": "Halbpension",
      "ko": "1일 2식",
      "en": "half board",
      "es": "media pensión",
      "fr": "demi-pension",
      "it": "mezza pensione",
      "pt": "meia pensão",
      "ja": "一泊二食付き",
      "zh": "半食宿",
      "ru": "полупансион"
    },
    "examples": ["Möchten Sie Vollpension oder Halbpension?"],
    "meta": {},
    "gender": "die",
    "plural": ""
  },
  {
    "id": "halt_nm_1",
    "lemma": "Halt",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "travel"],
    "meanings": {
      "de": "Halt",
      "ko": "정거장",
      "en": "stop",
      "es": "parada",
      "fr": "arrêt",
      "it": "fermata",
      "pt": "paragem",
      "ja": "停止",
      "zh": "停止",
      "ru": "остановка"
    },
    "examples": ["Nächster Halt: Hauptbahnhof."],
    "meta": {},
    "gender": "der",
    "plural": "Halte"
  },
  {
    "id": "halten_v_1",
    "lemma": "halten",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "travel", "daily"],
    "meanings": {
      "de": "halten",
      "ko": "멈추다",
      "en": "stop",
      "es": "parar",
      "fr": "s'arrêter",
      "it": "fermare",
      "pt": "parar",
      "ja": "止まる",
      "zh": "停",
      "ru": "останавливаться"
    },
    "examples": ["Der Zug hält nicht in Rüdesheim."],
    "meta": {},
    "conj": {
      "pres_ich": "ich halte",
      "pres_du": "du hältst",
      "pres_er": "er/sie/es hält",
      "praet": "hielt",
      "part2": "gehalten",
      "aux": "haben"
    }
  },
  {
    "id": "haltestelle_nf_1",
    "lemma": "Haltestelle",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "travel", "city"],
    "meanings": {
      "de": "Haltestelle",
      "ko": "정류장",
      "en": "stop",
      "es": "parada",
      "fr": "arrêt",
      "it": "fermata",
      "pt": "paragem",
      "ja": "停留所",
      "zh": "车站",
      "ru": "остановка"
    },
    "examples": ["An der nächsten Haltestelle müssen Sie aussteigen."],
    "meta": {},
    "gender": "die",
    "plural": "Haltestellen"
  },
  {
    "id": "hand_nf_1",
    "lemma": "Hand",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "body"],
    "meanings": {
      "de": "Hand",
      "ko": "손",
      "en": "hand",
      "es": "mano",
      "fr": "main",
      "it": "mano",
      "pt": "mão",
      "ja": "手",
      "zh": "手",
      "ru": "рука"
    },
    "examples": ["Was hast du in der Hand?"],
    "meta": {},
    "gender": "die",
    "plural": "Hände"
  },
  {
    "id": "handy_nn_1",
    "lemma": "Handy",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "technology", "communication"],
    "meanings": {
      "de": "Handy",
      "ko": "휴대전화",
      "en": "mobile phone",
      "es": "móvil",
      "fr": "portable",
      "it": "cellulare",
      "pt": "telemóvel",
      "ja": "携帯電話",
      "zh": "手机",
      "ru": "мобильный телефон"
    },
    "examples": ["In der Schule sind Handys verboten."],
    "meta": {},
    "gender": "das",
    "plural": "Handys"
  },
  {
    "id": "haus_nn_1",
    "lemma": "Haus",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "housing", "basic"],
    "meanings": {
      "de": "Haus",
      "ko": "집",
      "en": "house",
      "es": "casa",
      "fr": "maison",
      "it": "casa",
      "pt": "casa",
      "ja": "家",
      "zh": "房子",
      "ru": "дом"
    },
    "examples": ["Ich gehe jetzt nach Hause."],
    "meta": {},
    "gender": "das",
    "plural": "Häuser"
  },
  {
    "id": "hausaufgabe_nf_1",
    "lemma": "Hausaufgabe",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "school"],
    "meanings": {
      "de": "Hausaufgabe",
      "ko": "숙제",
      "en": "homework",
      "es": "deberes",
      "fr": "devoirs",
      "it": "compiti",
      "pt": "trabalho de casa",
      "ja": "宿題",
      "zh": "家庭作业",
      "ru": "домашнее задание"
    },
    "examples": ["Kannst du mir bei den Hausaufgaben helfen?"],
    "meta": {},
    "gender": "die",
    "plural": "Hausaufgaben"
  },
  {
    "id": "hausfrau_nf_1",
    "lemma": "Hausfrau",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "work", "society"],
    "meanings": {
      "de": "Hausfrau",
      "ko": "주부",
      "en": "housewife",
      "es": "ama de casa",
      "fr": "ménagère",
      "it": "casalinga",
      "pt": "dona de casa",
      "ja": "主婦",
      "zh": "家庭主妇",
      "ru": "домохозяйка"
    },
    "examples": ["Sie arbeitet nicht, sie ist Hausfrau."],
    "meta": {},
    "gender": "die",
    "plural": "Hausfrauen"
  },
  {
    "id": "haushalt_nm_1",
    "lemma": "Haushalt",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "housing", "daily"],
    "meanings": {
      "de": "Haushalt",
      "ko": "살림",
      "en": "household",
      "es": "hogar",
      "fr": "ménage",
      "it": "faccende domestiche",
      "pt": "lida da casa",
      "ja": "家事",
      "zh": "家务",
      "ru": "домашнее хозяйство"
    },
    "examples": ["Ich mache den Haushalt allein."],
    "meta": {},
    "gender": "der",
    "plural": "Haushalte"
  },
  {
    "id": "hausmann_nm_1",
    "lemma": "Hausmann",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "work", "society"],
    "meanings": {
      "de": "Hausmann",
      "ko": "남자 주부",
      "en": "househusband",
      "es": "amo de casa",
      "fr": "homme au foyer",
      "it": "casalingo",
      "pt": "dono de casa",
      "ja": "主夫",
      "zh": "家庭主夫",
      "ru": "домохозяин"
    },
    "examples": ["Er ist Hausmann."],
    "meta": {},
    "gender": "der",
    "plural": "Hausmänner"
  },
  {
    "id": "heimat_nf_1",
    "lemma": "Heimat",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "society"],
    "meanings": {
      "de": "Heimat",
      "ko": "고향",
      "en": "homeland",
      "es": "patria",
      "fr": "patrie",
      "it": "patria",
      "pt": "pátria",
      "ja": "故郷",
      "zh": "家乡",
      "ru": "родина"
    },
    "examples": ["Das ist meine Heimat."],
    "meta": {},
    "gender": "die",
    "plural": "Heimaten"
  },
  {
    "id": "heiraten_v_1",
    "lemma": "heiraten",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "family", "social"],
    "meanings": {
      "de": "heiraten",
      "ko": "결혼하다",
      "en": "marry",
      "es": "casarse",
      "fr": "se marier",
      "it": "sposarsi",
      "pt": "casar-se",
      "ja": "結婚する",
      "zh": "结婚",
      "ru": "жениться"
    },
    "examples": ["Sie heiratet einen Japaner."],
    "meta": {},
    "conj": {
      "pres_ich": "ich heirate",
      "pres_du": "du heiratest",
      "pres_er": "er heiratet",
      "praet": "heiratete",
      "part2": "geheiratet",
      "aux": "haben"
    }
  },
  {
    "id": "heissen_v_1",
    "lemma": "heißen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "basic", "personal_info"],
    "meanings": {
      "de": "heißen",
      "ko": "불리다",
      "en": "be called",
      "es": "llamarse",
      "fr": "s'appeler",
      "it": "chiamarsi",
      "pt": "chamar-se",
      "ja": "という名前だ",
      "zh": "名叫",
      "ru": "называться"
    },
    "examples": ["Ich heiße Anna."],
    "meta": {},
    "conj": {
      "pres_ich": "ich heiße",
      "pres_du": "du heißt",
      "pres_er": "er heißt",
      "praet": "hieß",
      "part2": "geheißen",
      "aux": "haben"
    }
  },
  {
    "id": "helfen_v_1",
    "lemma": "helfen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "social", "basic"],
    "meanings": {
      "de": "helfen",
      "ko": "돕다",
      "en": "help",
      "es": "ayudar",
      "fr": "aider",
      "it": "aiutare",
      "pt": "ajudar",
      "ja": "助ける",
      "zh": "帮助",
      "ru": "помогать"
    },
    "examples": ["Können Sie mir helfen?"],
    "meta": {},
    "conj": {
      "pres_ich": "ich helfe",
      "pres_du": "du hilfst",
      "pres_er": "er hilft",
      "praet": "half",
      "part2": "geholfen",
      "aux": "haben"
    }
  },
  {
    "id": "hell_adj_1",
    "lemma": "hell",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "description"],
    "meanings": {
      "de": "hell",
      "ko": "밝은",
      "en": "bright",
      "es": "claro",
      "fr": "clair",
      "it": "chiaro",
      "pt": "claro",
      "ja": "明るい",
      "zh": "明亮",
      "ru": "светлый"
    },
    "examples": ["Es ist noch hell."],
    "meta": {}
  },
  {
    "id": "herd_nm_1",
    "lemma": "Herd",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "housing", "kitchen"],
    "meanings": {
      "de": "Herd",
      "ko": "조리기",
      "en": "stove",
      "es": "cocina",
      "fr": "cuisinière",
      "it": "fornello",
      "pt": "fogão",
      "ja": "コンロ",
      "zh": "炉灶",
      "ru": "плита"
    },
    "examples": ["Der Herd ist neu."],
    "meta": {},
    "gender": "der",
    "plural": "Herde"
  },
  {
    "id": "herr_nm_1",
    "lemma": "Herr",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "communication", "title"],
    "meanings": {
      "de": "Herr",
      "ko": "씨",
      "en": "Mr.",
      "es": "señor",
      "fr": "monsieur",
      "it": "signore",
      "pt": "senhor",
      "ja": "氏",
      "zh": "先生",
      "ru": "господин"
    },
    "examples": ["Guten Tag, Herr Müller."],
    "meta": {},
    "gender": "der",
    "plural": "Herren"
  },
  {
    "id": "herzlich_adj_1",
    "lemma": "herzlich",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "communication", "celebration"],
    "meanings": {
      "de": "herzlich",
      "ko": "진심으로",
      "en": "sincere",
      "es": "cordial",
      "fr": "cordial",
      "it": "cordiale",
      "pt": "cordial",
      "ja": "心からの",
      "zh": "衷心",
      "ru": "сердечный"
    },
    "examples": ["Herzlichen Glückwunsch!"],
    "meta": {}
  },
  {
    "id": "heute_adv_1",
    "lemma": "heute",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "time", "basic"],
    "meanings": {
      "de": "heute",
      "ko": "오늘",
      "en": "today",
      "es": "hoy",
      "fr": "aujourd'hui",
      "it": "oggi",
      "pt": "hoje",
      "ja": "今日",
      "zh": "今天",
      "ru": "сегодня"
    },
    "examples": ["Heute ist Montag."],
    "meta": {}
  },
  {
    "id": "hier_adv_1",
    "lemma": "hier",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "location", "basic"],
    "meanings": {
      "de": "hier",
      "ko": "여기",
      "en": "here",
      "es": "aquí",
      "fr": "ici",
      "it": "qui",
      "pt": "aqui",
      "ja": "ここ",
      "zh": "这里",
      "ru": "здесь"
    },
    "examples": ["Hier wohne ich."],
    "meta": {}
  },
  {
    "id": "hilfe_nf_1",
    "lemma": "Hilfe",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "basic", "social"],
    "meanings": {
      "de": "Hilfe",
      "ko": "도움",
      "en": "help",
      "es": "ayuda",
      "fr": "aide",
      "it": "aiuto",
      "pt": "ajuda",
      "ja": "助け",
      "zh": "帮助",
      "ru": "помощь"
    },
    "examples": ["Ich brauche Hilfe."],
    "meta": {},
    "gender": "die",
    "plural": "Hilfen"
  },
  {
    "id": "hinten_adv_1",
    "lemma": "hinten",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "location"],
    "meanings": {
      "de": "hinten",
      "ko": "뒤에",
      "en": "behind",
      "es": "atrás",
      "fr": "derrière",
      "it": "dietro",
      "pt": "atrás",
      "ja": "後ろ",
      "zh": "后面",
      "ru": "сзади"
    },
    "examples": ["Die Toilette ist hinten."],
    "meta": {}
  },
  {
    "id": "hobby_nn_1",
    "lemma": "Hobby",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "leisure"],
    "meanings": {
      "de": "Hobby",
      "ko": "취미",
      "en": "hobby",
      "es": "afición",
      "fr": "hobby",
      "it": "hobby",
      "pt": "passatempo",
      "ja": "趣味",
      "zh": "爱好",
      "ru": "хобби"
    },
    "examples": ["Mein Hobby ist Lesen."],
    "meta": {},
    "gender": "das",
    "plural": "Hobbys"
  },
  {
    "id": "hoch_adj_1",
    "lemma": "hoch",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "measurement", "description"],
    "meanings": {
      "de": "hoch",
      "ko": "높은",
      "en": "high",
      "es": "alto",
      "fr": "haut",
      "it": "alto",
      "pt": "alto",
      "ja": "高い",
      "zh": "高",
      "ru": "высокий"
    },
    "examples": ["Der Berg ist hoch."],
    "meta": {}
  },
  {
    "id": "hochzeit_nf_1",
    "lemma": "Hochzeit",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "family", "celebration"],
    "meanings": {
      "de": "Hochzeit",
      "ko": "결혼식",
      "en": "wedding",
      "es": "boda",
      "fr": "mariage",
      "it": "matrimonio",
      "pt": "casamento",
      "ja": "結婚式",
      "zh": "婚礼",
      "ru": "свадьба"
    },
    "examples": ["Wir feiern Hochzeit."],
    "meta": {},
    "gender": "die",
    "plural": "Hochzeiten"
  },
  {
    "id": "holen_v_1",
    "lemma": "holen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "daily"],
    "meanings": {
      "de": "holen",
      "ko": "가져오다",
      "en": "fetch",
      "es": "traer",
      "fr": "apporter",
      "it": "prendere",
      "pt": "buscar",
      "ja": "取ってくる",
      "zh": "拿",
      "ru": "приносить"
    },
    "examples": ["Ich hole das Auto."],
    "meta": {},
    "conj": {
      "pres_ich": "ich hole",
      "pres_du": "du holst",
      "pres_er": "er holt",
      "praet": "holte",
      "part2": "geholt",
      "aux": "haben"
    }
  },
  {
    "id": "hoeren_v_1",
    "lemma": "hören",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "basic", "perception"],
    "meanings": {
      "de": "hören",
      "ko": "듣다",
      "en": "hear",
      "es": "oír",
      "fr": "entendre",
      "it": "sentire",
      "pt": "ouvir",
      "ja": "聞く",
      "zh": "听",
      "ru": "слышать"
    },
    "examples": ["Ich höre Musik."],
    "meta": {},
    "conj": {
      "pres_ich": "ich höre",
      "pres_du": "du hörst",
      "pres_er": "er hört",
      "praet": "hörte",
      "part2": "gehört",
      "aux": "haben"
    }
  },
  {
    "id": "hotel_nn_1",
    "lemma": "Hotel",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "travel", "housing"],
    "meanings": {
      "de": "Hotel",
      "ko": "호텔",
      "en": "hotel",
      "es": "hotel",
      "fr": "hôtel",
      "it": "hotel",
      "pt": "hotel",
      "ja": "ホテル",
      "zh": "饭店",
      "ru": "отель"
    },
    "examples": ["Wir wohnen im Hotel."],
    "meta": {},
    "gender": "das",
    "plural": "Hotels"
  },
  {
    "id": "hund_nm_1",
    "lemma": "Hund",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "animal", "daily"],
    "meanings": {
      "de": "Hund",
      "ko": "개",
      "en": "dog",
      "es": "perro",
      "fr": "chien",
      "it": "cane",
      "pt": "cão",
      "ja": "犬",
      "zh": "狗",
      "ru": "собака"
    },
    "examples": ["Der Hund bellt."],
    "meta": {},
    "gender": "der",
    "plural": "Hunde"
  },
  {
    "id": "hunger_nm_1",
    "lemma": "Hunger",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "food", "feeling"],
    "meanings": {
      "de": "Hunger",
      "ko": "배고픔",
      "en": "hunger",
      "es": "hambre",
      "fr": "faim",
      "it": "fame",
      "pt": "fome",
      "ja": "空腹",
      "zh": "饿",
      "ru": "голод"
    },
    "examples": ["Ich habe Hunger."],
    "meta": {},
    "gender": "der",
    "plural": ""
  },
  {
    "id": "ich_pron_1",
    "lemma": "ich",
    "pos": "Pronomen",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "ich",
      "ko": "나",
      "en": "I",
      "es": "yo",
      "fr": "je",
      "it": "io",
      "pt": "eu",
      "ja": "私",
      "zh": "我",
      "ru": "я"
    },
    "examples": ["Ich bin Student."],
    "meta": {}
  },
  {
    "id": "ihr_pron_1",
    "lemma": "ihr",
    "pos": "Pronomen",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "ihr",
      "ko": "그녀에게",
      "en": "her",
      "es": "le",
      "fr": "lui",
      "it": "le",
      "pt": "lhe",
      "ja": "彼女に",
      "zh": "她",
      "ru": "ей"
    },
    "examples": ["Gib ihr das Buch."],
    "meta": {}
  },
  {
    "id": "ihm_pron_1",
    "lemma": "ihm",
    "pos": "Pronomen",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "ihm",
      "ko": "그에게",
      "en": "him",
      "es": "le",
      "fr": "lui",
      "it": "gli",
      "pt": "lhe",
      "ja": "彼に",
      "zh": "他",
      "ru": "ему"
    },
    "examples": ["Ich helfe ihm."],
    "meta": {}
  },
  {
    "id": "ihn_pron_1",
    "lemma": "ihn",
    "pos": "Pronomen",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "ihn",
      "ko": "그를",
      "en": "him",
      "es": "lo",
      "fr": "le",
      "it": "lo",
      "pt": "o",
      "ja": "彼を",
      "zh": "他",
      "ru": "его"
    },
    "examples": ["Ich sehe ihn."],
    "meta": {}
  },
  {
    "id": "immer_adv_1",
    "lemma": "immer",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "time", "basic"],
    "meanings": {
      "de": "immer",
      "ko": "항상",
      "en": "always",
      "es": "siempre",
      "fr": "toujours",
      "it": "sempre",
      "pt": "sempre",
      "ja": "いつも",
      "zh": "总是",
      "ru": "всегда"
    },
    "examples": [
      "Er kommt immer zu spät."],
    "meta": {}
  },
  {
    "id": "in_prep_1",
    "lemma": "in",
    "pos": "Präposition",
    "cefr": "A1",
    "tags": ["exam", "location", "time", "basic"],
    "meanings": {
      "de": "in",
      "ko": "안에",
      "en": "in",
      "es": "en",
      "fr": "dans",
      "it": "in",
      "pt": "em",
      "ja": "～に",
      "zh": "在里面",
      "ru": "в"
    },
    "examples": ["Ich bin in der Schule."],
    "meta": {}
  },
  {
    "id": "information_nf_1",
    "lemma": "Information",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "daily", "communication"],
    "meanings": {
      "de": "Information",
      "ko": "안내소",
      "en": "information",
      "es": "información",
      "fr": "information",
      "it": "informazione",
      "pt": "informação",
      "ja": "情報",
      "zh": "信息",
      "ru": "информация"
    },
    "examples": ["Gehen Sie zur Information."],
    "meta": {},
    "gender": "die",
    "plural": "Informationen"
  },
  {
    "id": "international_adj_1",
    "lemma": "international",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "society"],
    "meanings": {
      "de": "international",
      "ko": "국제적인",
      "en": "international",
      "es": "internacional",
      "fr": "international",
      "it": "internazionale",
      "pt": "internacional",
      "ja": "国際的",
      "zh": "国际的",
      "ru": "международный"
    },
    "examples": ["Der Kurs ist international."],
    "meta": {}
  },
  {
    "id": "internet_nn_1",
    "lemma": "Internet",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "technology", "media"],
    "meanings": {
      "de": "Internet",
      "ko": "인터넷",
      "en": "internet",
      "es": "internet",
      "fr": "internet",
      "it": "internet",
      "pt": "internet",
      "ja": "インターネット",
      "zh": "互联网",
      "ru": "интернет"
    },
    "examples": ["Das steht im Internet."],
    "meta": {},
    "gender": "das",
    "plural": ""
  },
  {
    "id": "ja_int_1",
    "lemma": "ja",
    "pos": "Interjektion",
    "cefr": "A1",
    "tags": ["exam", "basic", "communication"],
    "meanings": {
      "de": "ja",
      "ko": "네",
      "en": "yes",
      "es": "sí",
      "fr": "oui",
      "it": "sì",
      "pt": "sim",
      "ja": "はい",
      "zh": "是",
      "ru": "да"
    },
    "examples": ["Ja, bitte."],
    "meta": {}
  },
  {
    "id": "jacke_nf_1",
    "lemma": "Jacke",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "clothing"],
    "meanings": {
      "de": "Jacke",
      "ko": "재킷",
      "en": "jacket",
      "es": "chaqueta",
      "fr": "veste",
      "it": "giacca",
      "pt": "casaco",
      "ja": "ジャケット",
      "zh": "夹克",
      "ru": "куртка"
    },
    "examples": ["Die Jacke ist warm."],
    "meta": {},
    "gender": "die",
    "plural": "Jacken"
  },
  {
    "id": "jeder_pron_1",
    "lemma": "jeder",
    "pos": "Pronomen",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "jeder",
      "ko": "모든",
      "en": "every",
      "es": "cada",
      "fr": "chaque",
      "it": "ogni",
      "pt": "cada",
      "ja": "各々",
      "zh": "每个",
      "ru": "каждый"
    },
    "examples": ["Jeder Tag ist schön."],
    "meta": {}
  },
  {
    "id": "jetzt_adv_1",
    "lemma": "jetzt",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "time", "basic"],
    "meanings": {
      "de": "jetzt",
      "ko": "지금",
      "en": "now",
      "es": "ahora",
      "fr": "maintenant",
      "it": "adesso",
      "pt": "agora",
      "ja": "今",
      "zh": "现在",
      "ru": "сейчас"
    },
    "examples": ["Ich muss jetzt gehen."],
    "meta": {}
  },
  {
    "id": "job_nm_1",
    "lemma": "Job",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "work"],
    "meanings": {
      "de": "Job",
      "ko": "일",
      "en": "job",
      "es": "trabajo",
      "fr": "job",
      "it": "lavoro",
      "pt": "emprego",
      "ja": "仕事",
      "zh": "工作",
      "ru": "работа"
    },
    "examples": ["Ich suche einen Job."],
    "meta": {},
    "gender": "der",
    "plural": "Jobs"
  },
  {
    "id": "jugendliche_nm_1",
    "lemma": "Jugendliche",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "society"],
    "meanings": {
      "de": "Jugendliche",
      "ko": "청소년",
      "en": "youth",
      "es": "joven",
      "fr": "jeune",
      "it": "giovane",
      "pt": "jovem",
      "ja": "若者",
      "zh": "青少年",
      "ru": "подросток"
    },
    "examples": ["Viele Jugendliche sind hier."],
    "meta": {},
    "gender": "der",
    "plural": "Jugendliche"
  },
  {
    "id": "jung_adj_1",
    "lemma": "jung",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "description"],
    "meanings": {
      "de": "jung",
      "ko": "젊은",
      "en": "young",
      "es": "joven",
      "fr": "jeune",
      "it": "giovane",
      "pt": "jovem",
      "ja": "若い",
      "zh": "年轻",
      "ru": "молодой"
    },
    "examples": ["Er ist noch jung."],
    "meta": {}
  },
  {
    "id": "junge_nm_1",
    "lemma": "Junge",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "people", "family"],
    "meanings": {
      "de": "Junge",
      "ko": "소년",
      "en": "boy",
      "es": "chico",
      "fr": "garçon",
      "it": "ragazzo",
      "pt": "menino",
      "ja": "男の子",
      "zh": "男孩",
      "ru": "мальчик"
    },
    "examples": ["Der Junge spielt."],
    "meta": {},
    "gender": "der",
    "plural": "Jungen"
  },
  {
    "id": "kaffee_nm_1",
    "lemma": "Kaffee",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "food", "drink"],
    "meanings": {
      "de": "Kaffee",
      "ko": "커피",
      "en": "coffee",
      "es": "café",
      "fr": "café",
      "it": "caffè",
      "pt": "café",
      "ja": "コーヒー",
      "zh": "咖啡",
      "ru": "кофе"
    },
    "examples": ["Ich trinke Kaffee."],
    "meta": {},
    "gender": "der",
    "plural": ""
  },
  {
    "id": "kaputt_adj_1",
    "lemma": "kaputt",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "kaputt",
      "ko": "고장난",
      "en": "broken",
      "es": "roto",
      "fr": "cassé",
      "it": "rotto",
      "pt": "estragado",
      "ja": "壊れた",
      "zh": "坏",
      "ru": "сломанный"
    },
    "examples": ["Das Auto ist kaputt."],
    "meta": {}
  },
  {
    "id": "karte_nf_1",
    "lemma": "Karte",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "Karte",
      "ko": "카드",
      "en": "card",
      "es": "tarjeta",
      "fr": "carte",
      "it": "carta",
      "pt": "cartão",
      "ja": "カード",
      "zh": "卡片",
      "ru": "карта"
    },
    "examples": ["Ich schreibe eine Karte."],
    "meta": {},
    "gender": "die",
    "plural": "Karten"
  },
  {
    "id": "kreditkarte_nf_1",
    "lemma": "Kreditkarte",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "Kreditkarte",
      "ko": "신용카드",
      "en": "credit card",
      "es": "tarjeta de crédito",
      "fr": "carte de crédit",
      "it": "carta di credito",
      "pt": "cartão de crédito",
      "ja": "クレジットカード",
      "zh": "信用卡",
      "ru": "кредитная карта"
    },
    "examples": ["Zahlen Sie mit Kreditkarte?"],
    "meta": {},
    "gender": "die",
    "plural": "Kreditkarten"
  },
  {
    "id": "kartoffel_nf_1",
    "lemma": "Kartoffel",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "Kartoffel",
      "ko": "감자",
      "en": "potato",
      "es": "patata",
      "fr": "pomme de terre",
      "it": "patata",
      "pt": "batata",
      "ja": "ジャガイモ",
      "zh": "土豆",
      "ru": "картофель"
    },
    "examples": ["Ich esse gern Kartoffeln."],
    "meta": {},
    "gender": "die",
    "plural": "Kartoffeln"
  },
  {
    "id": "kasse_nf_1",
    "lemma": "Kasse",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "Kasse",
      "ko": "계산대",
      "en": "checkout",
      "es": "caja",
      "fr": "caisse",
      "it": "cassa",
      "pt": "caixa",
      "ja": "レジ",
      "zh": "收银台",
      "ru": "касса"
    },
    "examples": [
      "Zahlen Sie an der Kasse."],
    "meta": {},
    "gender": "die",
    "plural": "Kassen"
  },
  {
    "id": "kaufen_v_1",
    "lemma": "kaufen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "kaufen",
      "ko": "사다",
      "en": "buy",
      "es": "comprar",
      "fr": "acheter",
      "it": "comprare",
      "pt": "comprar",
      "ja": "買う",
      "zh": "买",
      "ru": "покупать"
    },
    "examples": [
      "Ich kaufe ein Brot."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich kaufe",
      "pres_du": "du kaufst",
      "pres_er": "er kauft",
      "praet": "kaufte",
      "part2": "gekauft",
      "aux": "haben"
    }
  },
  {
    "id": "kein_art_1",
    "lemma": "kein",
    "pos": "Artikel",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "kein",
      "ko": "없는",
      "en": "no",
      "es": "ningún",
      "fr": "aucun",
      "it": "nessuno",
      "pt": "nenhum",
      "ja": "～ない",
      "zh": "没有",
      "ru": "никакой"
    },
    "examples": [
      "Ich habe keine Zeit."
    ],
    "meta": {}
  },
  {
    "id": "kennen_v_1",
    "lemma": "kennen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "kennen",
      "ko": "알다",
      "en": "know",
      "es": "conocer",
      "fr": "connaître",
      "it": "conoscere",
      "pt": "conhecer",
      "ja": "知る",
      "zh": "认识",
      "ru": "знать"
    },
    "examples": [
      "Ich kenne ihn nicht."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich kenne",
      "pres_du": "du kennst",
      "pres_er": "er kennt",
      "praet": "kannte",
      "part2": "gekannt",
      "aux": "haben"
    }
  },
  {
    "id": "kennenlernen_v_1",
    "lemma": "kennenlernen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "kennenlernen",
      "ko": "알게되다",
      "en": "meet",
      "es": "conocer",
      "fr": "faire la connaissance",
      "it": "fare la conoscenza",
      "pt": "conhecer",
      "ja": "知り合う",
      "zh": "结识",
      "ru": "знакомиться"
    },
    "examples": [
      "Ich möchte dich kennenlernen."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich lerne kennen",
      "pres_du": "du lernst kennen",
      "pres_er": "er lernt kennen",
      "praet": "lernte kennen",
      "part2": "kennen gelernt",
      "aux": "haben"
    }
  },
  {
    "id": "kind_nn_1",
    "lemma": "Kind",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "Kind",
      "ko": "아이",
      "en": "child",
      "es": "niño",
      "fr": "enfant",
      "it": "bambino",
      "pt": "criança",
      "ja": "子供",
      "zh": "孩子",
      "ru": "ребенок"
    },
    "examples": [
      "Das Kind spielt."
    ],
    "meta": {},
    "gender": "das",
    "plural": "Kinder"
  },
  {
    "id": "kindergarten_nm_1",
    "lemma": "Kindergarten",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "education", "family"],
    "meanings": {
      "de": "Kindergarten",
      "ko": "유치원",
      "en": "kindergarten",
      "es": "jardín de infancia",
      "fr": "jardin d'enfants",
      "it": "asilo",
      "pt": "jardim de infância",
      "ja": "幼稚園",
      "zh": "幼儿园",
      "ru": "детский сад"
    },
    "examples": [
      "Er geht in den Kindergarten."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Kindergärten"
  },
  {
    "id": "kino_nn_1",
    "lemma": "Kino",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "leisure", "city"],
    "meanings": {
      "de": "Kino",
      "ko": "영화관",
      "en": "cinema",
      "es": "cine",
      "fr": "cinéma",
      "it": "cinema",
      "pt": "cinema",
      "ja": "映画館",
      "zh": "电影院",
      "ru": "кинотеатр"
    },
    "examples": [
      "Wir gehen ins Kino."
    ],
    "meta": {},
    "gender": "das",
    "plural": "Kinos"
  },
  {
    "id": "kiosk_nm_1",
    "lemma": "Kiosk",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "shopping", "city"],
    "meanings": {
      "de": "Kiosk",
      "ko": "매점",
      "en": "kiosk",
      "es": "quiosco",
      "fr": "kiosque",
      "it": "chiosco",
      "pt": "quiosque",
      "ja": "キオスク",
      "zh": "报亭",
      "ru": "киоск"
    },
    "examples": ["Ich kaufe Zeitung am Kiosk."],
    "meta": {},
    "gender": "der",
    "plural": "Kioske"
  },
  {
    "id": "klar_adj_1",
    "lemma": "klar",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "communication", "basic"],
    "meanings": {
      "de": "klar",
      "ko": "물론이죠",
      "en": "clear",
      "es": "claro",
      "fr": "clair",
      "it": "chiaro",
      "pt": "claro",
      "ja": "もちろん",
      "zh": "清楚",
      "ru": "ясно"
    },
    "examples": ["Kommst du mit? - Klar!"],
    "meta": {}
  },
  {
    "id": "klasse_nf_1",
    "lemma": "Klasse",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "school", "travel"],
    "meanings": {
      "de": "Klasse",
      "ko": "반",
      "en": "class",
      "es": "clase",
      "fr": "classe",
      "it": "classe",
      "pt": "classe",
      "ja": "クラス",
      "zh": "班级",
      "ru": "класс"
    },
    "examples": ["In unserer Klasse sind fünfundzwanzig Schüler."],
    "meta": {},
    "gender": "die",
    "plural": "Klassen"
  },
  {
    "id": "kleidung_nf_1",
    "lemma": "Kleidung",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "clothing", "shopping"],
    "meanings": {
      "de": "Kleidung",
      "ko": "의복",
      "en": "clothing",
      "es": "ropa",
      "fr": "vêtements",
      "it": "abbigliamento",
      "pt": "roupa",
      "ja": "衣類",
      "zh": "衣服",
      "ru": "одежда"
    },
    "examples": ["Wo finde ich Kleidung?"],
    "meta": {},
    "gender": "die",
    "plural": "Kleidungen"
  },
  {
    "id": "klein_adj_1",
    "lemma": "klein",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "basic", "description"],
    "meanings": {
      "de": "klein",
      "ko": "작은",
      "en": "small",
      "es": "pequeño",
      "fr": "petit",
      "it": "piccolo",
      "pt": "pequeno",
      "ja": "小さい",
      "zh": "小",
      "ru": "маленький"
    },
    "examples": ["Eltville ist eine kleine Stadt am Rhein."],
    "meta": {}
  },
  {
    "id": "kochen_v_1",
    "lemma": "kochen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "food", "daily"],
    "meanings": {
      "de": "kochen",
      "ko": "요리하다",
      "en": "cook",
      "es": "cocinar",
      "fr": "cuisiner",
      "it": "cucinare",
      "pt": "cozinhar",
      "ja": "料理する",
      "zh": "做饭",
      "ru": "готовить"
    },
    "examples": ["Herr Georgi kann gut kochen."],
    "meta": {},
    "conj": {
      "pres_ich": "ich koche",
      "pres_du": "du kochst",
      "pres_er": "er kocht",
      "praet": "kochte",
      "part2": "gekocht",
      "aux": "haben"
    }
  },
  {
    "id": "koffer_nm_1",
    "lemma": "Koffer",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "travel"],
    "meanings": {
      "de": "Koffer",
      "ko": "여행 가방",
      "en": "suitcase",
      "es": "maleta",
      "fr": "valise",
      "it": "valigia",
      "pt": "mala",
      "ja": "スーツケース",
      "zh": "手提箱",
      "ru": "чемодан"
    },
    "examples": ["Ist das Ihr Koffer?"],
    "meta": {},
    "gender": "der",
    "plural": "Koffer"
  },
  {
    "id": "kollege_nm_1",
    "lemma": "Kollege",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "work", "social"],
    "meanings": {
      "de": "Kollege",
      "ko": "동료",
      "en": "colleague",
      "es": "colega",
      "fr": "collègue",
      "it": "collega",
      "pt": "colega",
      "ja": "同僚",
      "zh": "同事",
      "ru": "коллега"
    },
    "examples": ["Wie heißt die neue Kollegin?"],
    "meta": {},
    "gender": "der",
    "plural": "Kollegen"
  },
  {
    "id": "kommen_v_1",
    "lemma": "kommen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "basic", "movement"],
    "meanings": {
      "de": "kommen",
      "ko": "오다",
      "en": "come",
      "es": "venir",
      "fr": "venir",
      "it": "venire",
      "pt": "vir",
      "ja": "来る",
      "zh": "来",
      "ru": "приходить"
    },
    "examples": ["Woher kommen Sie? - Aus Frankreich."],
    "meta": {},
    "conj": {
      "pres_ich": "ich komme",
      "pres_du": "du kommst",
      "pres_er": "er kommt",
      "praet": "kam",
      "part2": "gekommen",
      "aux": "sein"
    }
  },
  {
    "id": "koennen_v_1",
    "lemma": "können",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "basic", "grammar"],
    "meanings": {
      "de": "können",
      "ko": "할 수 있다",
      "en": "can",
      "es": "poder",
      "fr": "pouvoir",
      "it": "potere",
      "pt": "poder",
      "ja": "できる",
      "zh": "能",
      "ru": "мочь"
    },
    "examples": ["Ich kann Deutsch und Russisch."],
    "meta": {},
    "conj": {
      "pres_ich": "ich kann",
      "pres_du": "du kannst",
      "pres_er": "er kann",
      "praet": "konnte",
      "part2": "gekonnt",
      "aux": "haben"
    }
  },
  {
    "id": "konto_nn_1",
    "lemma": "Konto",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "finance", "daily"],
    "meanings": {
      "de": "Konto",
      "ko": "계좌",
      "en": "account",
      "es": "cuenta",
      "fr": "compte",
      "it": "conto",
      "pt": "conta",
      "ja": "口座",
      "zh": "账户",
      "ru": "счет"
    },
    "examples": ["Das Geld überweisen wir am ersten März auf Ihr Konto."],
    "meta": {},
    "gender": "das",
    "plural": "Konten"
  },
  {
    "id": "kopf_nm_1",
    "lemma": "Kopf",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "body", "health"],
    "meanings": {
      "de": "Kopf",
      "ko": "머리",
      "en": "head",
      "es": "cabeza",
      "fr": "tête",
      "it": "testa",
      "pt": "cabeça",
      "ja": "頭",
      "zh": "头",
      "ru": "голова"
    },
    "examples": ["Mein Kopf tut weh!"],
    "meta": {},
    "gender": "der",
    "plural": "Köpfe"
  },
  {
    "id": "kosten_v_1",
    "lemma": "kosten",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "shopping", "daily"],
    "meanings": {
      "de": "kosten",
      "ko": "값이 나가다",
      "en": "cost",
      "es": "costar",
      "fr": "coûter",
      "it": "costare",
      "pt": "custar",
      "ja": "費用がかかる",
      "zh": "花费",
      "ru": "стоить"
    },
    "examples": ["Wie viel kostet das? 10 Euro."],
    "meta": {},
    "conj": {
      "pres_ich": "ich koste",
      "pres_du": "du kostest",
      "pres_er": "er kostet",
      "praet": "kostete",
      "part2": "gekostet",
      "aux": "haben"
    }
  },
  {
    "id": "krank_adj_1",
    "lemma": "krank",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "health", "daily"],
    "meanings": {
      "de": "krank",
      "ko": "아픈",
      "en": "sick",
      "es": "enfermo",
      "fr": "malade",
      "it": "malato",
      "pt": "doente",
      "ja": "病気の",
      "zh": "生病",
      "ru": "больной"
    },
    "examples": ["Ich kann heute nicht zur Arbeit kommen, ich bin krank."],
    "meta": {}
  },
  {
    "id": "kriegen_v_1",
    "lemma": "kriegen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "daily", "work"],
    "meanings": {
      "de": "kriegen",
      "ko": "얻다",
      "en": "get",
      "es": "conseguir",
      "fr": "recevoir",
      "it": "ricevere",
      "pt": "receber",
      "ja": "もらう",
      "zh": "得到",
      "ru": "получать"
    },
    "examples": ["Ich kriege 15 Euro in der Stunde für meine Arbeit."],
    "meta": {},
    "conj": {
      "pres_ich": "ich kriege",
      "pres_du": "du kriegst",
      "pres_er": "er kriegt",
      "praet": "kriegte",
      "part2": "gekriegt",
      "aux": "haben"
    }
  },
  {
    "id": "kueche_nf_1",
    "lemma": "Küche",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "housing", "food"],
    "meanings": {
      "de": "Küche",
      "ko": "부엌",
      "en": "kitchen",
      "es": "cocina",
      "fr": "cuisine",
      "it": "cucina",
      "pt": "cozinha",
      "ja": "台所",
      "zh": "厨房",
      "ru": "кухня"
    },
    "examples": ["Der neue Herd kommt in die Küche."],
    "meta": {},
    "gender": "die",
    "plural": "Küchen"
  },
  {
    "id": "kuchen_nm_1",
    "lemma": "Kuchen",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "food", "daily"],
    "meanings": {
      "de": "Kuchen",
      "ko": "케이크",
      "en": "cake",
      "es": "pastel",
      "fr": "gâteau",
      "it": "torta",
      "pt": "bolo",
      "ja": "ケーキ",
      "zh": "蛋糕",
      "ru": "пирог"
    },
    "examples": ["Ich nehme ein Stück Kuchen."],
    "meta": {},
    "gender": "der",
    "plural": "Kuchen"
  },
  {
    "id": "kugelschreiber_nm_1",
    "lemma": "Kugelschreiber",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "school", "work"],
    "meanings": {
      "de": "Kugelschreiber",
      "ko": "볼펜",
      "en": "ballpoint pen",
      "es": "bolígrafo",
      "fr": "stylo",
      "it": "penna a sfera",
      "pt": "caneta",
      "ja": "ボールペン",
      "zh": "圆珠笔",
      "ru": "шариковая ручка"
    },
    "examples": ["Hast du einen Kugelschreiber für mich?"],
    "meta": {},
    "gender": "der",
    "plural": "Kugelschreiber"
  },
  {
    "id": "kuehlschrank_nm_1",
    "lemma": "Kühlschrank",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "housing", "kitchen"],
    "meanings": {
      "de": "Kühlschrank",
      "ko": "냉장고",
      "en": "refrigerator",
      "es": "frigorífico",
      "fr": "réfrigérateur",
      "it": "frigorifero",
      "pt": "frigorífico",
      "ja": "冷蔵庫",
      "zh": "冰箱",
      "ru": "холодильник"
    },
    "examples": ["Die Milch steht im Kühlschrank."],
    "meta": {},
    "gender": "der",
    "plural": "Kühlschränke"
  },
  {
    "id": "kulturell_adj_1",
    "lemma": "kulturell",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "culture", "leisure"],
    "meanings": {
      "de": "kulturell",
      "ko": "문화적인",
      "en": "cultural",
      "es": "cultural",
      "fr": "culturel",
      "it": "culturale",
      "pt": "cultural",
      "ja": "文化的な",
      "zh": "文化的",
      "ru": "культурный"
    },
    "examples": ["Ich bin kulturell interessiert. Ich gehe oft ins Museum."],
    "meta": {}
  },
  {
    "id": "kuemmern_v_1",
    "lemma": "kümmern",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "family", "social"],
    "meanings": {
      "de": "kümmern",
      "ko": "돌보다",
      "en": "take care of",
      "es": "cuidar",
      "fr": "s'occuper de",
      "it": "occuparsi",
      "pt": "cuidar",
      "ja": "世話をする",
      "zh": "照顾",
      "ru": "заботиться"
    },
    "examples": ["Jede Mutter kümmert sich um ihre kleinen Kinder."],
    "meta": {},
    "conj": {
      "pres_ich": "ich kümmere mich",
      "pres_du": "du kümmerst dich",
      "pres_er": "er kümmert sich",
      "praet": "kümmerte",
      "part2": "gekümmert",
      "aux": "haben"
    }
  },
  {
    "id": "kunde_nm_1",
    "lemma": "Kunde",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "work", "business"],
    "meanings": {
      "de": "Kunde",
      "ko": "고객",
      "en": "customer",
      "es": "cliente",
      "fr": "client",
      "it": "cliente",
      "pt": "cliente",
      "ja": "客",
      "zh": "顾客",
      "ru": "клиент"
    },
    "examples": ["Einen Moment, bitte. Ich habe eine Kundin."],
    "meta": {},
    "gender": "der",
    "plural": "Kunden"
  },
  {
    "id": "kurs_nm_1",
    "lemma": "Kurs",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "education"],
    "meanings": {
      "de": "Kurs",
      "ko": "강좌",
      "en": "course",
      "es": "curso",
      "fr": "cours",
      "it": "corso",
      "pt": "curso",
      "ja": "コース",
      "zh": "课程",
      "ru": "курс"
    },
    "examples": ["Der Deutschkurs geht bis zum Sommer."],
    "meta": {},
    "gender": "der",
    "plural": "Kurse"
  },
  {
    "id": "kurz_adj_1",
    "lemma": "kurz",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "description"],
    "meanings": {
      "de": "kurz",
      "ko": "짧은",
      "en": "short",
      "es": "corto",
      "fr": "court",
      "it": "corto",
      "pt": "curto",
      "ja": "短い",
      "zh": "短",
      "ru": "короткий"
    },
    "examples": ["Ricardo hat kurzes Haar."],
    "meta": {}
  },
  {
    "id": "lachen_v_1",
    "lemma": "lachen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "feeling", "daily"],
    "meanings": {
      "de": "lachen",
      "ko": "웃다",
      "en": "laugh",
      "es": "reír",
      "fr": "rire",
      "it": "ridere",
      "pt": "rir",
      "ja": "笑う",
      "zh": "笑",
      "ru": "смеяться"
    },
    "examples": ["Die Kinder lachen viel."],
    "meta": {},
    "conj": {
      "pres_ich": "ich lache",
      "pres_du": "du lachst",
      "pres_er": "er lacht",
      "praet": "lachte",
      "part2": "gelacht",
      "aux": "haben"
    }
  },
  {
    "id": "laden_nm_1",
    "lemma": "Laden",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "shopping", "city"],
    "meanings": {
      "de": "Laden",
      "ko": "가게",
      "en": "shop",
      "es": "tienda",
      "fr": "magasin",
      "it": "negozio",
      "pt": "loja",
      "ja": "店",
      "zh": "商店",
      "ru": "магазин"
    },
    "examples": ["Im Buchladen können Sie Bücher kaufen."],
    "meta": {},
    "gender": "der",
    "plural": "Läden"
  },
  {
    "id": "land_nn_1",
    "lemma": "Land",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "geography", "society"],
    "meanings": {
      "de": "Land",
      "ko": "나라",
      "en": "country",
      "es": "país",
      "fr": "pays",
      "it": "paese",
      "pt": "país",
      "ja": "国",
      "zh": "国家",
      "ru": "страна"
    },
    "examples": ["Italien ist ein schönes Land."],
    "meta": {},
    "gender": "das",
    "plural": "Länder"
  },
  {
    "id": "lang_adj_1",
    "lemma": "lang",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "description"],
    "meanings": {
      "de": "lang",
      "ko": "긴",
      "en": "long",
      "es": "largo",
      "fr": "long",
      "it": "lungo",
      "pt": "comprido",
      "ja": "長い",
      "zh": "长",
      "ru": "длинный"
    },
    "examples": ["Die Jeans ist zu lang."],
    "meta": {}
  },
  {
    "id": "lange_adv_1",
    "lemma": "lange",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "time"],
    "meanings": {
      "de": "lange",
      "ko": "오랫동안",
      "en": "for a long time",
      "es": "mucho tiempo",
      "fr": "longtemps",
      "it": "lungo",
      "pt": "muito tempo",
      "ja": "長く",
      "zh": "很久",
      "ru": "долго"
    },
    "examples": ["Wie lange fährt der Zug von Hamburg nach Berlin?"],
    "meta": {}
  },
  {
    "id": "langsam_adj_1",
    "lemma": "langsam",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "description"],
    "meanings": {
      "de": "langsam",
      "ko": "느린",
      "en": "slow",
      "es": "lento",
      "fr": "lent",
      "it": "lento",
      "pt": "lento",
      "ja": "遅い",
      "zh": "慢",
      "ru": "медленный"
    },
    "examples": ["Könnten Sie bitte etwas langsamer sprechen?"],
    "meta": {}
  },
  {
    "id": "laufen_v_1",
    "lemma": "laufen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "movement", "basic"],
    "meanings": {
      "de": "laufen",
      "ko": "걷다",
      "en": "walk",
      "es": "caminar",
      "fr": "marcher",
      "it": "camminare",
      "pt": "andar",
      "ja": "歩く",
      "zh": "走",
      "ru": "ходить"
    },
    "examples": ["Ich möchte nicht Auto fahren, ich möchte laufen."],
    "meta": {},
    "conj": {
      "pres_ich": "ich laufe",
      "pres_du": "du läufst",
      "pres_er": "er läuft",
      "praet": "lief",
      "part2": "gelaufen",
      "aux": "sein"
    }
  },
  {
    "id": "laut_adj_1",
    "lemma": "laut",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "description", "sound"],
    "meanings": {
      "de": "laut",
      "ko": "시끄러운",
      "en": "loud",
      "es": "ruidoso",
      "fr": "bruyant",
      "it": "rumoroso",
      "pt": "barulhento",
      "ja": "うるさい",
      "zh": "大声",
      "ru": "громкий"
    },
    "examples": ["Nicht so laut! Das Baby schläft."],
    "meta": {}
  },
  {
    "id": "leben_v_1",
    "lemma": "leben",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "basic", "society"],
    "meanings": {
      "de": "leben",
      "ko": "살다",
      "en": "live",
      "es": "vivir",
      "fr": "vivre",
      "it": "vivere",
      "pt": "viver",
      "ja": "生きる",
      "zh": "生活",
      "ru": "жить"
    },
    "examples": ["Sie lebt bei ihrer Schwester."],
    "meta": {},
    "conj": {
      "pres_ich": "ich lebe",
      "pres_du": "du lebst",
      "pres_er": "er lebt",
      "praet": "lebte",
      "part2": "gelebt",
      "aux": "haben"
    }
  },
  {
    "id": "leben_nn_1",
    "lemma": "Leben",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "society"],
    "meanings": {
      "de": "Leben",
      "ko": "삶",
      "en": "life",
      "es": "vida",
      "fr": "vie",
      "it": "vita",
      "pt": "vida",
      "ja": "人生",
      "zh": "生活",
      "ru": "жизнь"
    },
    "examples": ["Das Leben in diesem Land ist teuer."],
    "meta": {},
    "gender": "das",
    "plural": "Leben"
  },
  {
    "id": "lebensmittel_nn_1",
    "lemma": "Lebensmittel",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "food", "shopping"],
    "meanings": {
      "de": "Lebensmittel",
      "ko": "식료품",
      "en": "groceries",
      "es": "alimentos",
      "fr": "denrées alimentaires",
      "it": "generi alimentari",
      "pt": "alimentos",
      "ja": "食料品",
      "zh": "食品",
      "ru": "продукты питания"
    },
    "examples": ["Lebensmittel bekommen Sie im Supermarkt."],
    "meta": {},
    "gender": "das",
    "plural": "Lebensmittel"
  },
  {
    "id": "ledig_adj_1",
    "lemma": "ledig",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "personal_info"],
    "meanings": {
      "de": "ledig",
      "ko": "미혼의",
      "en": "single",
      "es": "soltero",
      "fr": "célibataire",
      "it": "celibe",
      "pt": "solteiro",
      "ja": "独身の",
      "zh": "单身",
      "ru": "холостой"
    },
    "examples": ["Sind Sie verheiratet? Nein. Ledig."],
    "meta": {}
  },
  {
    "id": "legen_v_1",
    "lemma": "legen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "action", "daily"],
    "meanings": {
      "de": "legen",
      "ko": "놓다",
      "en": "lay",
      "es": "poner",
      "fr": "poser",
      "it": "mettere",
      "pt": "pôr",
      "ja": "置く",
      "zh": "放",
      "ru": "класть"
    },
    "examples": ["Legen Sie das Buch auf den Tisch."],
    "meta": {},
    "conj": {
      "pres_ich": "ich lege",
      "pres_du": "du legst",
      "pres_er": "er legt",
      "praet": "legte",
      "part2": "gelegt",
      "aux": "haben"
    }
  },
  {
    "id": "lehrer_nm_1",
    "lemma": "Lehrer",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "education", "work"],
    "meanings": {
      "de": "Lehrer",
      "ko": "교사",
      "en": "teacher",
      "es": "maestro",
      "fr": "professeur",
      "it": "insegnante",
      "pt": "professor",
      "ja": "教師",
      "zh": "教师",
      "ru": "учитель"
    },
    "examples": ["Unsere Deutschlehrerin heißt Frau Müller."],
    "meta": {},
    "gender": "der",
    "plural": "Lehrer"
  },
  {
    "id": "leicht_adj_1",
    "lemma": "leicht",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "description"],
    "meanings": {
      "de": "leicht",
      "ko": "쉬운",
      "en": "easy",
      "es": "fácil",
      "fr": "facile",
      "it": "facile",
      "pt": "fácil",
      "ja": "簡単な",
      "zh": "容易",
      "ru": "легкий"
    },
    "examples": ["Deutsch ist nicht leicht."],
    "meta": {}
  },
  {
    "id": "leider_adv_1",
    "lemma": "leider",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "basic", "communication"],
    "meanings": {
      "de": "leider",
      "ko": "유감스럽게도",
      "en": "unfortunately",
      "es": "desgraciadamente",
      "fr": "malheureusement",
      "it": "purtroppo",
      "pt": "infelizmente",
      "ja": "残念ながら",
      "zh": "可惜",
      "ru": "к сожалению"
    },
    "examples": ["Leider kann ich nicht kommen."],
    "meta": {}
  },
  {
    "id": "leise_adj_1",
    "lemma": "leise",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "description", "sound"],
    "meanings": {
      "de": "leise",
      "ko": "조용한",
      "en": "quiet",
      "es": "silencioso",
      "fr": "silencieux",
      "it": "silenzioso",
      "pt": "silencioso",
      "ja": "静かな",
      "zh": "轻声",
      "ru": "тихий"
    },
    "examples": ["Seid leise. Die anderen schlafen schon."],
    "meta": {}
  },
  {
    "id": "lernen_v_1",
    "lemma": "lernen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "education", "basic"],
    "meanings": {
      "de": "lernen",
      "ko": "배우다",
      "en": "learn",
      "es": "aprender",
      "fr": "apprendre",
      "it": "imparare",
      "pt": "aprender",
      "ja": "学ぶ",
      "zh": "学习",
      "ru": "учить"
    },
    "examples": ["Wie lange lernen Sie schon Deutsch?"],
    "meta": {},
    "conj": {
      "pres_ich": "ich lerne",
      "pres_du": "du lernst",
      "pres_er": "er lernt",
      "praet": "lernte",
      "part2": "gelernt",
      "aux": "haben"
    }
  },
  {
    "id": "lesen_v_1",
    "lemma": "lesen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "education", "leisure"],
    "meanings": {
      "de": "lesen",
      "ko": "읽다",
      "en": "read",
      "es": "leer",
      "fr": "lire",
      "it": "leggere",
      "pt": "ler",
      "ja": "読む",
      "zh": "读",
      "ru": "читать"
    },
    "examples": ["Ich lese ein Buch von García Márquez."],
    "meta": {},
    "conj": {
      "pres_ich": "ich lese",
      "pres_du": "du liest",
      "pres_er": "er liest",
      "praet": "las",
      "part2": "gelesen",
      "aux": "haben"
    }
  },
  {
    "id": "letzte_adj_1",
    "lemma": "letzte",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "time", "basic"],
    "meanings": {
      "de": "letzte",
      "ko": "마지막의",
      "en": "last",
      "es": "último",
      "fr": "dernier",
      "it": "ultimo",
      "pt": "último",
      "ja": "最後の",
      "zh": "最后",
      "ru": "последний"
    },
    "examples": ["Morgen ist der letzte Kurstag."],
    "meta": {}
  },
  {
    "id": "leute_nn_1",
    "lemma": "Leute",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "people", "society"],
    "meanings": {
      "de": "Leute",
      "ko": "사람들",
      "en": "people",
      "es": "gente",
      "fr": "gens",
      "it": "gente",
      "pt": "gente",
      "ja": "人々",
      "zh": "人们",
      "ru": "люди"
    },
    "examples": ["In der Disko sind viele Leute."],
    "meta": {},
    "gender": "",
    "plural": "Leute"
  },
  {
    "id": "licht_nn_1",
    "lemma": "Licht",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "daily", "housing"],
    "meanings": {
      "de": "Licht",
      "ko": "불",
      "en": "light",
      "es": "luz",
      "fr": "lumière",
      "it": "luce",
      "pt": "luz",
      "ja": "光",
      "zh": "光",
      "ru": "свет"
    },
    "examples": ["Wo macht man hier das Licht an?"],
    "meta": {},
    "gender": "das",
    "plural": "Lichter"
  },
  {
    "id": "lieb_adj_1",
    "lemma": "lieb",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "communication", "feeling"],
    "meanings": {
      "de": "lieb",
      "ko": "친애하는",
      "en": "dear",
      "es": "querido",
      "fr": "cher",
      "it": "caro",
      "pt": "querido",
      "ja": "親愛なる",
      "zh": "亲爱的",
      "ru": "дорогой"
    },
    "examples": ["Liebe Susanne, lieber Hans,"],
    "meta": {}
  },
  {
    "id": "lieben_v_1",
    "lemma": "lieben",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "feeling", "social"],
    "meanings": {
      "de": "lieben",
      "ko": "사랑하다",
      "en": "love",
      "es": "amar",
      "fr": "aimer",
      "it": "amare",
      "pt": "amar",
      "ja": "愛する",
      "zh": "爱",
      "ru": "любить"
    },
    "examples": ["Ich liebe dich!"],
    "meta": {},
    "conj": {
      "pres_ich": "ich liebe",
      "pres_du": "du liebst",
      "pres_er": "er liebt",
      "praet": "liebte",
      "part2": "geliebt",
      "aux": "haben"
    }
  },
  {
    "id": "lieber_adv_1",
    "lemma": "lieber",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "preference", "basic"],
    "meanings": {
      "de": "lieber",
      "ko": "차라리",
      "en": "preferably",
      "es": "mejor",
      "fr": "de préférence",
      "it": "piuttosto",
      "pt": "de preferência",
      "ja": "むしろ",
      "zh": "宁愿",
      "ru": "лучше"
    },
    "examples": ["Sie fährt lieber mit der Bahn."],
    "meta": {}
  },
  {
    "id": "lieblingsfilm_nm_1",
    "lemma": "Lieblingsfilm",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "leisure", "preference"],
    "meanings": {
      "de": "Lieblingsfilm",
      "ko": "가장 좋아하는 영화",
      "en": "favorite movie",
      "es": "película favorita",
      "fr": "film préféré",
      "it": "film preferito",
      "pt": "filme favorito",
      "ja": "お気に入りの映画",
      "zh": "最喜欢的电影",
      "ru": "любимый фильм"
    },
    "examples": ["Mein Lieblingsfilm ist „Schwarze Augen“."],
    "meta": {},
    "gender": "der",
    "plural": "Lieblingsfilme"
  },
  {
    "id": "lied_nn_1",
    "lemma": "Lied",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "music", "leisure"],
    "meanings": {
      "de": "Lied",
      "ko": "노래",
      "en": "song",
      "es": "canción",
      "fr": "chanson",
      "it": "canzone",
      "pt": "canção",
      "ja": "歌",
      "zh": "歌曲",
      "ru": "песня"
    },
    "examples": ["Welches ist dein Lieblingslied?"],
    "meta": {},
    "gender": "das",
    "plural": "Lieder"
  },
  {
    "id": "liegen_v_1",
    "lemma": "liegen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "location", "basic"],
    "meanings": {
      "de": "liegen",
      "ko": "놓여 있다",
      "en": "lie",
      "es": "estar tumbado",
      "fr": "être couché",
      "it": "stare sdraiato",
      "pt": "estar deitado",
      "ja": "横たわる",
      "zh": "位于",
      "ru": "лежать"
    },
    "examples": ["Das Buch liegt auf dem Tisch."],
    "meta": {},
    "conj": {
      "pres_ich": "ich liege",
      "pres_du": "du liegst",
      "pres_er": "er liegt",
      "praet": "lag",
      "part2": "gelegen",
      "aux": "haben"
    }
  },
  {
    "id": "links_adv_1",
    "lemma": "links",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "location", "direction"],
    "meanings": {
      "de": "links",
      "ko": "왼쪽으로",
      "en": "left",
      "es": "a la izquierda",
      "fr": "à gauche",
      "it": "a sinistra",
      "pt": "à esquerda",
      "ja": "左に",
      "zh": "向左",
      "ru": "слева"
    },
    "examples": ["Gehen Sie bitte nach links."],
    "meta": {}
  },
  {
    "id": "lkw_nm_1",
    "lemma": "Lkw",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "transport"],
    "meanings": {
      "de": "Lkw",
      "ko": "트럭",
      "en": "truck",
      "es": "camión",
      "fr": "camion",
      "it": "camion",
      "pt": "camião",
      "ja": "トラック",
      "zh": "卡车",
      "ru": "грузовик"
    },
    "examples": ["Der Lkw ist sehr groß."],
    "meta": {},
    "gender": "der",
    "plural": "Lkws"
  },
  {
    "id": "loesung_nf_1",
    "lemma": "Lösung",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "school", "problem_solving"],
    "meanings": {
      "de": "Lösung",
      "ko": "해답",
      "en": "solution",
      "es": "solución",
      "fr": "solution",
      "it": "soluzione",
      "pt": "solução",
      "ja": "解決",
      "zh": "答案",
      "ru": "решение"
    },
    "examples": ["Die Lösung ist ganz einfach."],
    "meta": {},
    "gender": "die",
    "plural": "Lösungen"
  },
  {
    "id": "lustig_adj_1",
    "lemma": "lustig",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "feeling", "description"],
    "meanings": {
      "de": "lustig",
      "ko": "재미있는",
      "en": "funny",
      "es": "divertido",
      "fr": "drôle",
      "it": "divertente",
      "pt": "engraçado",
      "ja": "面白い",
      "zh": "有趣",
      "ru": "смешной"
    },
    "examples": ["Der Film war sehr lustig."],
    "meta": {}
  },
  {
    "id": "machen_v_1",
    "lemma": "machen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "basic", "activity"],
    "meanings": {
      "de": "machen",
      "ko": "하다",
      "en": "do",
      "es": "hacer",
      "fr": "faire",
      "it": "fare",
      "pt": "fazer",
      "ja": "する",
      "zh": "做",
      "ru": "делать"
    },
    "examples": ["Was machst du heute?"],
    "meta": {},
    "conj": {
      "pres_ich": "ich mache",
      "pres_du": "du machst",
      "pres_er": "er macht",
      "praet": "machte",
      "part2": "gemacht",
      "aux": "haben"
    }
  },
  {
    "id": "maedchen_nn_1",
    "lemma": "Mädchen",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "people", "family"],
    "meanings": {
      "de": "Mädchen",
      "ko": "소녀",
      "en": "girl",
      "es": "chica",
      "fr": "fille",
      "it": "ragazza",
      "pt": "rapariga",
      "ja": "少女",
      "zh": "女孩",
      "ru": "девочка"
    },
    "examples": ["Das Mädchen spielt im Garten."],
    "meta": {},
    "gender": "das",
    "plural": "Mädchen"
  },
  {
    "id": "man_pron_1",
    "lemma": "man",
    "pos": "Pronomen",
    "cefr": "A1",
    "tags": ["exam", "basic", "grammar"],
    "meanings": {
      "de": "man",
      "ko": "사람들",
      "en": "one",
      "es": "se",
      "fr": "on",
      "it": "si",
      "pt": "se",
      "ja": "人々",
      "zh": "人们",
      "ru": "человек"
    },
    "examples": ["Hier darf man nicht rauchen."],
    "meta": {}
  },
  {
    "id": "mann_nm_1",
    "lemma": "Mann",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "people", "family"],
    "meanings": {
      "de": "Mann",
      "ko": "남자",
      "en": "man",
      "es": "hombre",
      "fr": "homme",
      "it": "uomo",
      "pt": "homem",
      "ja": "男",
      "zh": "男人",
      "ru": "мужчина"
    },
    "examples": ["Das ist mein Mann."],
    "meta": {},
    "gender": "der",
    "plural": "Männer"
  },
  {
    "id": "maennlich_adj_1",
    "lemma": "männlich",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "personal_info"],
    "meanings": {
      "de": "männlich",
      "ko": "남성의",
      "en": "male",
      "es": "masculino",
      "fr": "masculin",
      "it": "maschile",
      "pt": "masculino",
      "ja": "男性の",
      "zh": "男性",
      "ru": "мужской"
    },
    "examples": ["Kreuzen Sie bitte an: weiblich oder männlich."],
    "meta": {}
  },
  {
    "id": "markt_nm_1",
    "lemma": "Markt",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "shopping", "city"],
    "meanings": {
      "de": "Markt",
      "ko": "시장",
      "en": "market",
      "es": "mercado",
      "fr": "marché",
      "it": "mercato",
      "pt": "mercado",
      "ja": "市場",
      "zh": "市场",
      "ru": "рынок"
    },
    "examples": ["Ich gehe heute auf den Markt."],
    "meta": {},
    "gender": "der",
    "plural": "Märkte"
  },
  {
    "id": "maschine_nf_1",
    "lemma": "Maschine",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "technology", "household"],
    "meanings": {
      "de": "Maschine",
      "ko": "기계",
      "en": "machine",
      "es": "máquina",
      "fr": "machine",
      "it": "macchina",
      "pt": "máquina",
      "ja": "機械",
      "zh": "机器",
      "ru": "машина"
    },
    "examples": ["Die Waschmaschine funktioniert nicht."],
    "meta": {},
    "gender": "die",
    "plural": "Maschinen"
  },
  {
    "id": "meer_nn_1",
    "lemma": "Meer",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "Meer",
      "ko": "바다",
      "en": "sea",
      "es": "mar",
      "fr": "mer",
      "it": "mare",
      "pt": "mar",
      "ja": "海",
      "zh": "海",
      "ru": "море"
    },
    "examples": ["Wir machen Urlaub am Meer."],
    "meta": {},
    "gender": "das",
    "plural": "Meere"
  },
  {
    "id": "mehr_adv_1",
    "lemma": "mehr",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "quantity", "basic"],
    "meanings": {
      "de": "mehr",
      "ko": "더",
      "en": "more",
      "es": "más",
      "fr": "plus",
      "it": "più",
      "pt": "mais",
      "ja": "もっと",
      "zh": "更多",
      "ru": "больше"
    },
    "examples": ["Ich möchte nicht mehr essen."],
    "meta": {}
  },
  {
    "id": "mein_pron_1",
    "lemma": "mein",
    "pos": "Pronomen",
    "cefr": "A1",
    "tags": ["exam", "basic", "family"],
    "meanings": {
      "de": "mein",
      "ko": "나의",
      "en": "my",
      "es": "mi",
      "fr": "mon",
      "it": "mio",
      "pt": "meu",
      "ja": "私の",
      "zh": "我的",
      "ru": "мой"
    },
    "examples": ["Das ist mein Buch."],
    "meta": {}
  },
  {
    "id": "meistens_adv_1",
    "lemma": "meistens",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "time", "frequency"],
    "meanings": {
      "de": "meistens",
      "ko": "대개",
      "en": "mostly",
      "es": "generalmente",
      "fr": "généralement",
      "it": "di solito",
      "pt": "geralmente",
      "ja": "たいてい",
      "zh": "通常",
      "ru": "чаще всего"
    },
    "examples": ["Ich trinke meistens Tee."],
    "meta": {}
  },
  {
    "id": "mensch_nm_1",
    "lemma": "Mensch",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "people", "society"],
    "meanings": {
      "de": "Mensch",
      "ko": "사람",
      "en": "human",
      "es": "ser humano",
      "fr": "humain",
      "it": "essere umano",
      "pt": "ser humano",
      "ja": "人間",
      "zh": "人",
      "ru": "человек"
    },
    "examples": ["Die Menschen hier sind freundlich."],
    "meta": {},
    "gender": "der",
    "plural": "Menschen"
  },
  {
    "id": "mieten_v_1",
    "lemma": "mieten",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "housing", "travel"],
    "meanings": {
      "de": "mieten",
      "ko": "빌리다",
      "en": "rent",
      "es": "alquilar",
      "fr": "louer",
      "it": "affittare",
      "pt": "alugar",
      "ja": "借りる",
      "zh": "租",
      "ru": "арендовать"
    },
    "examples": ["Wir mieten eine Wohnung."],
    "meta": {},
    "conj": {
      "pres_ich": "ich miete",
      "pres_du": "du mietest",
      "pres_er": "er mietet",
      "praet": "mietete",
      "part2": "gemietet",
      "aux": "haben"
    }
  },
  {
    "id": "milch_nf_1",
    "lemma": "Milch",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "food", "drink"],
    "meanings": {
      "de": "Milch",
      "ko": "우유",
      "en": "milk",
      "es": "leche",
      "fr": "lait",
      "it": "latte",
      "pt": "leite",
      "ja": "牛乳",
      "zh": "牛奶",
      "ru": "молоко"
    },
    "examples": ["Trinken Sie Milch?"],
    "meta": {},
    "gender": "die",
    "plural": ""
  },
  {
    "id": "mit_prep_1",
    "lemma": "mit",
    "pos": "Präposition",
    "cefr": "A1",
    "tags": ["exam", "basic", "social"],
    "meanings": {
      "de": "mit",
      "ko": "함께",
      "en": "with",
      "es": "con",
      "fr": "avec",
      "it": "con",
      "pt": "com",
      "ja": "～と一緒に",
      "zh": "和",
      "ru": "с"
    },
    "examples": ["Ich gehe mit meiner Freundin ins Kino."],
    "meta": {}
  },
  {
    "id": "mitbringen_v_1",
    "lemma": "mitbringen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "social", "daily"],
    "meanings": {
      "de": "mitbringen",
      "ko": "가져오다",
      "en": "bring along",
      "es": "traer",
      "fr": "apporter",
      "it": "portare con sé",
      "pt": "trazer",
      "ja": "持ってくる",
      "zh": "带来",
      "ru": "приносить с собой"
    },
    "examples": ["Bringen Sie bitte ein Foto mit."],
    "meta": {},
    "conj": {
      "pres_ich": "ich bringe mit",
      "pres_du": "du bringst mit",
      "pres_er": "er bringt mit",
      "praet": "brachte mit",
      "part2": "mitgebracht",
      "aux": "haben"
    }
  },
  {
    "id": "mitkommen_v_1",
    "lemma": "mitkommen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "social", "movement"],
    "meanings": {
      "de": "mitkommen",
      "ko": "함께 가다",
      "en": "come along",
      "es": "acompañar",
      "fr": "accompagner",
      "it": "venire con",
      "pt": "ir junto",
      "ja": "一緒に行く",
      "zh": "一起来",
      "ru": "идти вместе"
    },
    "examples": ["Kommst du mit?"],
    "meta": {},
    "conj": {
      "pres_ich": "ich komme mit",
      "pres_du": "du kommst mit",
      "pres_er": "er kommt mit",
      "praet": "kam mit",
      "part2": "mitgekommen",
      "aux": "sein"
    }
  },
  {
    "id": "mitmachen_v_1",
    "lemma": "mitmachen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "activity", "social"],
    "meanings": {
      "de": "mitmachen",
      "ko": "참여하다",
      "en": "participate",
      "es": "participar",
      "fr": "participer",
      "it": "partecipare",
      "pt": "participar",
      "ja": "参加する",
      "zh": "参加",
      "ru": "участвовать"
    },
    "examples": [
      "Wir machen ein Spiel. Machst du mit?"],
    "meta": {},
    "conj": {
      "pres_ich": "ich mache mit",
      "pres_du": "du machst mit",
      "pres_er": "er macht mit",
      "praet": "machte mit",
      "part2": "mitgemacht",
      "aux": "haben"
    }
  },
  {
    "id": "mitnehmen_v_1",
    "lemma": "mitnehmen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "daily", "travel"],
    "meanings": {
      "de": "mitnehmen",
      "ko": "가지고 가다",
      "en": "take along",
      "es": "llevar",
      "fr": "emporter",
      "it": "portare via",
      "pt": "levar",
      "ja": "持って行く",
      "zh": "带走",
      "ru": "брать с собой"
    },
    "examples": [
      "Nehmen Sie Ihre Tasche mit."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich nehme mit",
      "pres_du": "du nimmst mit",
      "pres_er": "er nimmt mit",
      "praet": "nahm mit",
      "part2": "mitgenommen",
      "aux": "haben"
    }
  },
  {
    "id": "mittag_nm_1",
    "lemma": "Mittag",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "Mittag",
      "ko": "정오",
      "en": "noon",
      "es": "mediodía",
      "fr": "midi",
      "it": "mezzogiorno",
      "pt": "meio-dia",
      "ja": "正午",
      "zh": "中午",
      "ru": "полдень"
    },
    "examples": [
      "Am Mittag esse ich in der Kantine."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Mittage"
  },
  {
    "id": "mitte_nf_1",
    "lemma": "Mitte",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "Mitte",
      "ko": "중간",
      "en": "middle",
      "es": "centro",
      "fr": "milieu",
      "it": "centro",
      "pt": "centro",
      "ja": "真ん中",
      "zh": "中间",
      "ru": "середина"
    },
    "examples": [
      "Ich wohne in der Mitte von Berlin."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Mitten"
  },
  {
    "id": "moebel_nn_1",
    "lemma": "Möbel",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "Möbel",
      "ko": "가구",
      "en": "furniture",
      "es": "muebles",
      "fr": "meubles",
      "it": "mobili",
      "pt": "móveis",
      "ja": "家具",
      "zh": "家具",
      "ru": "мебель"
    },
    "examples": [
      "Die Möbel sind neu."
    ],
    "meta": {},
    "gender": "das",
    "plural": "Möbel"
  },
  {
    "id": "moechten_v_1",
    "lemma": "möchten",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "basic", "wish"],
    "meanings": {
      "de": "möchten",
      "ko": "하고 싶다",
      "en": "would like",
      "es": "querer",
      "fr": "voudrais",
      "it": "vorrei",
      "pt": "gostaria",
      "ja": "したい",
      "zh": "想要",
      "ru": "хотеть бы"
    },
    "examples": [
      "Ich möchte einen Kaffee."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich möchte",
      "pres_du": "du möchtest",
      "pres_er": "er möchte",
      "praet": "mochte",
      "part2": "gemocht",
      "aux": "haben"
    }
  },
  {
    "id": "moegen_v_1",
    "lemma": "mögen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "basic", "feeling"],
    "meanings": {
      "de": "mögen",
      "ko": "좋아하다",
      "en": "like",
      "es": "gustar",
      "fr": "aimer",
      "it": "piacere",
      "pt": "gostar",
      "ja": "好きだ",
      "zh": "喜欢",
      "ru": "нравиться"
    },
    "examples": [
      "Ich mag Pizza."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich mag",
      "pres_du": "du magst",
      "pres_er": "er mag",
      "praet": "mochte",
      "part2": "gemocht",
      "aux": "haben"
    }
  },
  {
    "id": "moeglich_adj_1",
    "lemma": "möglich",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "möglich",
      "ko": "가능한",
      "en": "possible",
      "es": "posible",
      "fr": "possible",
      "it": "possibile",
      "pt": "possível",
      "ja": "可能な",
      "zh": "可能",
      "ru": "возможный"
    },
    "examples": [
      "Ist das möglich?"
    ],
    "meta": {}
  },
  {
    "id": "moment_nm_1",
    "lemma": "Moment",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "Moment",
      "ko": "순간",
      "en": "moment",
      "es": "momento",
      "fr": "moment",
      "it": "momento",
      "pt": "momento",
      "ja": "瞬間",
      "zh": "时刻",
      "ru": "момент"
    },
    "examples": [
      "Einen Moment bitte."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Momente"
  },
  {
    "id": "monat_nm_1",
    "lemma": "Monat",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "Monat",
      "ko": "달",
      "en": "month",
      "es": "mes",
      "fr": "mois",
      "it": "mese",
      "pt": "mês",
      "ja": "月",
      "zh": "月",
      "ru": "месяц"
    },
    "examples": [
      "Der Monat hat 30 Tage."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Monate"
  },
  {
    "id": "morgen_adv_1",
    "lemma": "morgen",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "morgen",
      "ko": "내일",
      "en": "tomorrow",
      "es": "mañana",
      "fr": "demain",
      "it": "domani",
      "pt": "amanhã",
      "ja": "明日",
      "zh": "明天",
      "ru": "завтра"
    },
    "examples": [
      "Morgen habe ich frei."
    ],
    "meta": {}
  },
  {
    "id": "morgen_nm_1",
    "lemma": "Morgen",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "Morgen",
      "ko": "아침",
      "en": "morning",
      "es": "mañana",
      "fr": "matin",
      "it": "mattina",
      "pt": "manhã",
      "ja": "朝",
      "zh": "早晨",
      "ru": "утро"
    },
    "examples": [
      "Guten Morgen!"
    ],
    "meta": {},
    "gender": "der",
    "plural": "Morgen"
  },
  {
    "id": "morgens_adv_1",
    "lemma": "morgens",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "morgens",
      "ko": "아침마다",
      "en": "in the morning",
      "es": "por la mañana",
      "fr": "le matin",
      "it": "di mattina",
      "pt": "de manhã",
      "ja": "毎朝",
      "zh": "每天早上",
      "ru": "по утрам"
    },
    "examples": [
      "Morgens trinke ich Tee."
    ],
    "meta": {}
  },
  {
    "id": "motorrad_nn_1",
    "lemma": "Motorrad",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "Motorrad",
      "ko": "오토바이",
      "en": "motorcycle",
      "es": "moto",
      "fr": "moto",
      "it": "moto",
      "pt": "moto",
      "ja": "オートバイ",
      "zh": "摩托车",
      "ru": "мотоцикл"
    },
    "examples": [
      "Er fährt Motorrad."
    ],
    "meta": {},
    "gender": "das",
    "plural": "Motorräder"
  },
  {
    "id": "muede_adj_1",
    "lemma": "müde",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "müde",
      "ko": "피곤한",
      "en": "tired",
      "es": "cansado",
      "fr": "fatigué",
      "it": "stanco",
      "pt": "cansado",
      "ja": "疲れた",
      "zh": "累",
      "ru": "усталый"
    },
    "examples": [
      "Ich bin müde."
    ],
    "meta": {}
  },
  {
    "id": "mund_nm_1",
    "lemma": "Mund",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "Mund",
      "ko": "입",
      "en": "mouth",
      "es": "boca",
      "fr": "bouche",
      "it": "bocca",
      "pt": "boca",
      "ja": "口",
      "zh": "嘴",
      "ru": "рот"
    },
    "examples": [
      "Mach bitte den Mund auf."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Münder"
  },
  {
    "id": "muessen_v_1",
    "lemma": "müssen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "müssen",
      "ko": "해야 하다",
      "en": "must",
      "es": "tener que",
      "fr": "devoir",
      "it": "dovere",
      "pt": "ter de",
      "ja": "しなければならない",
      "zh": "必须",
      "ru": "быть должным"
    },
    "examples": [
      "Ich muss arbeiten."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich muss",
      "pres_du": "du musst",
      "pres_er": "er muss",
      "praet": "musste",
      "part2": "gemusst",
      "aux": "haben"
    }
  },
  {
    "id": "mutter_nf_1",
    "lemma": "Mutter",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "Mutter",
      "ko": "어머니",
      "en": "mother",
      "es": "madre",
      "fr": "mère",
      "it": "madre",
      "pt": "mãe",
      "ja": "母",
      "zh": "母亲",
      "ru": "мать"
    },
    "examples": [
      "Meine Mutter heißt Eva."
    ],
    "meta": {},
    "gender": "die",
    "plural": "Mütter"
  },
  {
    "id": "nach_prep_1",
    "lemma": "nach",
    "pos": "Präposition",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "nach",
      "ko": "로",
      "en": "to",
      "es": "a",
      "fr": "à",
      "it": "a",
      "pt": "a",
      "ja": "～へ",
      "zh": "往",
      "ru": "в"
    },
    "examples": [
      "Ich fahre nach Berlin."
    ],
    "meta": {}
  },
  {
    "id": "naechste_adj_1",
    "lemma": "nächste",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic"
    ],
    "meanings": {
      "de": "nächste",
      "ko": "다음의",
      "en": "next",
      "es": "próximo",
      "fr": "prochain",
      "it": "prossimo",
      "pt": "próximo",
      "ja": "次の",
      "zh": "下一个",
      "ru": "следующий"
    },
    "examples": [
      "Nächste Woche habe ich Urlaub."
    ],
    "meta": {}
  },
  {
    "id": "name_nm_1",
    "lemma": "Name",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic"
    ],
    "meanings": {
      "de": "Name",
      "ko": "이름",
      "en": "name",
      "es": "nombre",
      "fr": "nom",
      "it": "nome",
      "pt": "nome",
      "ja": "名前",
      "zh": "名字",
      "ru": "имя"
    },
    "examples": [
      "Mein Name ist Bond."
    ],
    "meta": {},
    "gender": "der",
    "plural": "Namen"
  },
  {
    "id": "nehmen_v_1",
    "lemma": "nehmen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic"
    ],
    "meanings": {
      "de": "nehmen",
      "ko": "가져가다",
      "en": "take",
      "es": "tomar",
      "fr": "prendre",
      "it": "prendere",
      "pt": "tomar",
      "ja": "取る",
      "zh": "拿",
      "ru": "брать"
    },
    "examples": [
      "Ich nehme den Bus."
    ],
    "meta": {},
    "conj": {
      "pres_ich": "ich nehme",
      "pres_du": "du nimmst",
      "pres_er": "er nimmt",
      "praet": "nahm",
      "part2": "genommen",
      "aux": "haben"
    }
  },
  {
    "id": "nein_int_1",
    "lemma": "nein",
    "pos": "Interjektion",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic"
    ],
    "meanings": {
      "de": "nein",
      "ko": "아니요",
      "en": "no",
      "es": "no",
      "fr": "non",
      "it": "no",
      "pt": "não",
      "ja": "いいえ",
      "zh": "不",
      "ru": "нет"
    },
    "examples": [
      "Nein, danke."
    ],
    "meta": {}
  },
  {
    "id": "neu_adj_1",
    "lemma": "neu",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic"
    ],
    "meanings": {
      "de": "neu",
      "ko": "새로운",
      "en": "new",
      "es": "nuevo",
      "fr": "nouveau",
      "it": "nuovo",
      "pt": "novo",
      "ja": "新しい",
      "zh": "新",
      "ru": "новый"
    },
    "examples": [
      "Ich habe ein neues Auto."
    ],
    "meta": {}
  },
  {
    "id": "nicht_adv_1",
    "lemma": "nicht",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic"
    ],
    "meanings": {
      "de": "nicht",
      "ko": "안",
      "en": "not",
      "es": "no",
      "fr": "ne ... pas",
      "it": "non",
      "pt": "não",
      "ja": "～ない",
      "zh": "不",
      "ru": "не"
    },
    "examples": [
      "Das stimmt nicht."
    ],
    "meta": {}
  },
  {
    "id": "nichts_pron_1",
    "lemma": "nichts",
    "pos": "Pronomen",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic"
    ],
    "meanings": {
      "de": "nichts",
      "ko": "아무것도 아님",
      "en": "nothing",
      "es": "nada",
      "fr": "rien",
      "it": "niente",
      "pt": "nada",
      "ja": "何も～ない",
      "zh": "什么也没有",
      "ru": "ничего"
    },
    "examples": [
      "Ich habe nichts gehört."
    ],
    "meta": {}
  },
  {
    "id": "nie_adv_1",
    "lemma": "nie",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic"
    ],
    "meanings": {
      "de": "nie",
      "ko": "결코",
      "en": "never",
      "es": "nunca",
      "fr": "jamais",
      "it": "mai",
      "pt": "nunca",
      "ja": "決して～ない",
      "zh": "从不",
      "ru": "никогда"
    },
    "examples": [
      "Er kommt nie pünktlich."
    ],
    "meta": {}
  },
  {
    "id": "noch_adv_1",
    "lemma": "noch",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": [
      "exam",
      "basic"
    ],
    "meanings": {
      "de": "noch",
      "ko": "아직",
      "en": "still",
      "es": "todavía",
      "fr": "encore",
      "it": "ancora",
      "pt": "ainda",
      "ja": "まだ",
      "zh": "还",
      "ru": "еще"
    },
    "examples": [
      "Ist das Essen noch warm?"
    ],
    "meta": {}
  },
  {
    "id": "normal_adj_1",
    "lemma": "normal",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "normal",
      "ko": "보통의",
      "en": "normal",
      "es": "normal",
      "fr": "normal",
      "it": "normale",
      "pt": "normal",
      "ja": "普通の",
      "zh": "正常",
      "ru": "нормальный"
    },
    "examples": ["Das ist ganz normal."],
    "meta": {}
  },
  {
    "id": "nummer_nf_1",
    "lemma": "Nummer",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "personal_info", "communication"],
    "meanings": {
      "de": "Nummer",
      "ko": "번호",
      "en": "number",
      "es": "número",
      "fr": "numéro",
      "it": "numero",
      "pt": "número",
      "ja": "番号",
      "zh": "号码",
      "ru": "номер"
    },
    "examples": ["Haben Sie die falsche Nummer gewählt?"],
    "meta": {},
    "gender": "die",
    "plural": "Nummern"
  },
  {
    "id": "nur_adv_1",
    "lemma": "nur",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "nur",
      "ko": "오직",
      "en": "only",
      "es": "solo",
      "fr": "seulement",
      "it": "solo",
      "pt": "só",
      "ja": "ただ",
      "zh": "只",
      "ru": "только"
    },
    "examples": ["Ich habe nur fünf Euro."],
    "meta": {}
  },
  {
    "id": "oben_adv_1",
    "lemma": "oben",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "location"],
    "meanings": {
      "de": "oben",
      "ko": "위쪽에",
      "en": "above",
      "es": "arriba",
      "fr": "en haut",
      "it": "sopra",
      "pt": "em cima",
      "ja": "上に",
      "zh": "上面",
      "ru": "наверху"
    },
    "examples": ["Ich wohne oben."],
    "meta": {}
  },
  {
    "id": "obst_nn_1",
    "lemma": "Obst",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "food"],
    "meanings": {
      "de": "Obst",
      "ko": "과일",
      "en": "fruit",
      "es": "fruta",
      "fr": "fruit",
      "it": "frutta",
      "pt": "fruta",
      "ja": "果物",
      "zh": "水果",
      "ru": "фрукты"
    },
    "examples": ["Obst ist gesund."],
    "meta": {},
    "gender": "das",
    "plural": ""
  },
  {
    "id": "oder_konj_1",
    "lemma": "oder",
    "pos": "Konjunktion",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "oder",
      "ko": "또는",
      "en": "or",
      "es": "o",
      "fr": "ou",
      "it": "o",
      "pt": "ou",
      "ja": "または",
      "zh": "或者",
      "ru": "или"
    },
    "examples": ["Kaffee oder Tee?"],
    "meta": {}
  },
  {
    "id": "oeffnen_v_1",
    "lemma": "öffnen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "action", "daily"],
    "meanings": {
      "de": "öffnen",
      "ko": "열다",
      "en": "open",
      "es": "abrir",
      "fr": "ouvrir",
      "it": "aprire",
      "pt": "abrir",
      "ja": "開ける",
      "zh": "打开",
      "ru": "открывать"
    },
    "examples": ["Können Sie bitte das Fenster öffnen?"],
    "meta": {},
    "conj": {
      "pres_ich": "ich öffne",
      "pres_du": "du öffnest",
      "pres_er": "er öffnet",
      "praet": "öffnete",
      "part2": "geöffnet",
      "aux": "haben"
    }
  },
  {
    "id": "geoeffnet_adj_1",
    "lemma": "geöffnet",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "daily", "status"],
    "meanings": {
      "de": "geöffnet",
      "ko": "열린",
      "en": "open",
      "es": "abierto",
      "fr": "ouvert",
      "it": "aperto",
      "pt": "aberto",
      "ja": "開いている",
      "zh": "开着的",
      "ru": "открытый"
    },
    "examples": ["Der Laden ist bis 20 Uhr geöffnet."],
    "meta": {}
  },
  {
    "id": "oft_adv_1",
    "lemma": "oft",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "frequency", "time"],
    "meanings": {
      "de": "oft",
      "ko": "자주",
      "en": "often",
      "es": "a menudo",
      "fr": "souvent",
      "it": "spesso",
      "pt": "frequentemente",
      "ja": "しばしば",
      "zh": "经常",
      "ru": "часто"
    },
    "examples": ["Ich gehe oft ins Kino."],
    "meta": {}
  },
  {
    "id": "ohne_prep_1",
    "lemma": "ohne",
    "pos": "Präposition",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "ohne",
      "ko": "없이",
      "en": "without",
      "es": "sin",
      "fr": "sans",
      "it": "senza",
      "pt": "sem",
      "ja": "～なしで",
      "zh": "没有",
      "ru": "без"
    },
    "examples": ["Bitte einen Kaffee ohne Zucker."],
    "meta": {}
  },
  {
    "id": "oel_nn_1",
    "lemma": "Öl",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "food"],
    "meanings": {
      "de": "Öl",
      "ko": "기름",
      "en": "oil",
      "es": "aceite",
      "fr": "huile",
      "it": "olio",
      "pt": "óleo",
      "ja": "油",
      "zh": "油",
      "ru": "масло"
    },
    "examples": ["Wir brauchen Öl für den Salat."],
    "meta": {},
    "gender": "das",
    "plural": "Öle"
  },
  {
    "id": "oma_nf_1",
    "lemma": "Oma",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "family"],
    "meanings": {
      "de": "Oma",
      "ko": "할머니",
      "en": "grandma",
      "es": "abuela",
      "fr": "grand-mère",
      "it": "nonna",
      "pt": "avó",
      "ja": "おばあちゃん",
      "zh": "奶奶",
      "ru": "бабушка"
    },
    "examples": ["Meine Oma wohnt in München."],
    "meta": {},
    "gender": "die",
    "plural": "Omas"
  },
  {
    "id": "opa_nm_1",
    "lemma": "Opa",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "family"],
    "meanings": {
      "de": "Opa",
      "ko": "할아버지",
      "en": "grandpa",
      "es": "abuelo",
      "fr": "grand-père",
      "it": "nonno",
      "pt": "avô",
      "ja": "おじいちゃん",
      "zh": "爷爷",
      "ru": "дедушка"
    },
    "examples": ["Mein Opa ist 80 Jahre alt."],
    "meta": {},
    "gender": "der",
    "plural": "Opas"
  },
  {
    "id": "ordnung_nf_1",
    "lemma": "Ordnung",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "Ordnung",
      "ko": "질서",
      "en": "order",
      "es": "orden",
      "fr": "ordre",
      "it": "ordine",
      "pt": "ordem",
      "ja": "秩序",
      "zh": "秩序",
      "ru": "порядок"
    },
    "examples": ["Das ist in Ordnung."],
    "meta": {},
    "gender": "die",
    "plural": ""
  },
  {
    "id": "ort_nm_1",
    "lemma": "Ort",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "location", "personal_info"],
    "meanings": {
      "de": "Ort",
      "ko": "장소",
      "en": "place",
      "es": "lugar",
      "fr": "lieu",
      "it": "luogo",
      "pt": "lugar",
      "ja": "場所",
      "zh": "地点",
      "ru": "место"
    },
    "examples": ["Der Ort liegt am See."],
    "meta": {},
    "gender": "der",
    "plural": "Orte"
  },
  {
    "id": "papier_nn_1",
    "lemma": "Papier",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "office", "material"],
    "meanings": {
      "de": "Papier",
      "ko": "종이",
      "en": "paper",
      "es": "papel",
      "fr": "papier",
      "it": "carta",
      "pt": "papel",
      "ja": "紙",
      "zh": "纸",
      "ru": "бумага"
    },
    "examples": ["Haben Sie Papier für den Drucker?"],
    "meta": {},
    "gender": "das",
    "plural": "Papiere"
  },
  {
    "id": "papiere_nx_1",
    "lemma": "Papiere",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "official", "travel"],
    "meanings": {
      "de": "Papiere",
      "ko": "서류",
      "en": "documents",
      "es": "papeles",
      "fr": "papiers",
      "it": "documenti",
      "pt": "documentos",
      "ja": "書類",
      "zh": "文件",
      "ru": "документы"
    },
    "examples": ["Haben Sie Ihre Papiere dabei?"],
    "meta": {},
    "gender": "",
    "plural": "Papiere"
  },
  {
    "id": "partner_nm_1",
    "lemma": "Partner",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "social", "family"],
    "meanings": {
      "de": "Partner",
      "ko": "파트너",
      "en": "partner",
      "es": "compañero",
      "fr": "partenaire",
      "it": "partner",
      "pt": "parceiro",
      "ja": "パートナー",
      "zh": "伙伴",
      "ru": "партнер"
    },
    "examples": ["Mein Partner kommt später."],
    "meta": {},
    "gender": "der",
    "plural": "Partner"
  },
  {
    "id": "partnerin_nf_1",
    "lemma": "Partnerin",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "social", "family"],
    "meanings": {
      "de": "Partnerin",
      "ko": "여자 파트너",
      "en": "partner",
      "es": "compañera",
      "fr": "partenaire",
      "it": "partner",
      "pt": "parceira",
      "ja": "女性パートナー",
      "zh": "女伙伴",
      "ru": "партнерша"
    },
    "examples": ["Das ist meine Partnerin."],
    "meta": {},
    "gender": "die",
    "plural": "Partnerinnen"
  },
  {
    "id": "party_nf_1",
    "lemma": "Party",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "leisure"],
    "meanings": {
      "de": "Party",
      "ko": "파티",
      "en": "party",
      "es": "fiesta",
      "fr": "fête",
      "it": "festa",
      "pt": "festa",
      "ja": "パーティー",
      "zh": "派对",
      "ru": "вечеринка"
    },
    "examples": ["Heute Abend ist eine Party."],
    "meta": {},
    "gender": "die",
    "plural": "Partys"
  },
  {
    "id": "pass_nm_1",
    "lemma": "Pass",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "travel", "official"],
    "meanings": {
      "de": "Pass",
      "ko": "여권",
      "en": "passport",
      "es": "pasaporte",
      "fr": "passeport",
      "it": "passaporto",
      "pt": "passaporte",
      "ja": "パスポート",
      "zh": "护照",
      "ru": "паспорт"
    },
    "examples": ["Zeigen Sie mir bitte Ihren Pass."],
    "meta": {},
    "gender": "der",
    "plural": "Pässe"
  },
  {
    "id": "pause_nf_1",
    "lemma": "Pause",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "time", "work"],
    "meanings": {
      "de": "Pause",
      "ko": "휴식",
      "en": "break",
      "es": "pausa",
      "fr": "pause",
      "it": "pausa",
      "pt": "pausa",
      "ja": "休憩",
      "zh": "休息",
      "ru": "пауза"
    },
    "examples": ["Wir machen zehn Minuten Pause."],
    "meta": {},
    "gender": "die",
    "plural": "Pausen"
  },
  {
    "id": "plan_nm_1",
    "lemma": "Plan",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "daily", "travel"],
    "meanings": {
      "de": "Plan",
      "ko": "계획, 지도",
      "en": "plan, map",
      "es": "plano",
      "fr": "plan",
      "it": "pianta",
      "pt": "plano",
      "ja": "計画",
      "zh": "计划",
      "ru": "план"
    },
    "examples": ["Haben Sie einen Plan von der Stadt?"],
    "meta": {},
    "gender": "der",
    "plural": "Pläne"
  },
  {
    "id": "platz_nm_1",
    "lemma": "Platz",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "location", "city"],
    "meanings": {
      "de": "Platz",
      "ko": "광장",
      "en": "square",
      "es": "plaza",
      "fr": "place",
      "it": "piazza",
      "pt": "praça",
      "ja": "広場",
      "zh": "广场",
      "ru": "площадь"
    },
    "examples": ["Der Platz ist sehr groß."],
    "meta": {},
    "gender": "der",
    "plural": "Plätze"
  },
  {
    "id": "platz_nm_2",
    "lemma": "Platz",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "location"],
    "meanings": {
      "de": "Platz",
      "ko": "자리",
      "en": "seat",
      "es": "asiento",
      "fr": "place",
      "it": "posto",
      "pt": "lugar",
      "ja": "席",
      "zh": "座位",
      "ru": "место"
    },
    "examples": ["Ist dieser Platz noch frei?"],
    "meta": {},
    "gender": "der",
    "plural": "Plätze"
  },
  {
    "id": "polizei_nf_1",
    "lemma": "Polizei",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "society", "emergency"],
    "meanings": {
      "de": "Polizei",
      "ko": "경찰",
      "en": "police",
      "es": "policía",
      "fr": "police",
      "it": "polizia",
      "pt": "polícia",
      "ja": "警察",
      "zh": "警察",
      "ru": "полиция"
    },
    "examples": ["Rufen Sie die Polizei!"],
    "meta": {},
    "gender": "die",
    "plural": ""
  },
  {
    "id": "pommes_frites_nx_1",
    "lemma": "Pommes frites",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "food"],
    "meanings": {
      "de": "Pommes frites",
      "ko": "감자튀김",
      "en": "french fries",
      "es": "patatas fritas",
      "fr": "frites",
      "it": "patatine fritte",
      "pt": "batatas fritas",
      "ja": "フライドポテト",
      "zh": "薯条",
      "ru": "картофель фри"
    },
    "examples": ["Ich esse gern Pommes frites."],
    "meta": {},
    "gender": "",
    "plural": "Pommes frites"
  },
  {
    "id": "portion_nf_1",
    "lemma": "Portion",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "food"],
    "meanings": {
      "de": "Portion",
      "ko": "인분",
      "en": "portion",
      "es": "ración",
      "fr": "portion",
      "it": "porzione",
      "pt": "porção",
      "ja": "一人前",
      "zh": "份",
      "ru": "порция"
    },
    "examples": ["Eine Portion Pommes mit Ketchup, bitte."],
    "meta": {},
    "gender": "die",
    "plural": "Portionen"
  },
  {
    "id": "post_nf_1",
    "lemma": "Post",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "communication", "city"],
    "meanings": {
      "de": "Post",
      "ko": "우체국, 우편",
      "en": "post office, mail",
      "es": "correos",
      "fr": "poste",
      "it": "posta",
      "pt": "correio",
      "ja": "郵便局",
      "zh": "邮局",
      "ru": "почта"
    },
    "examples": ["Wo ist die Post?"],
    "meta": {},
    "gender": "die",
    "plural": ""
  },
  {
    "id": "postleitzahl_nf_1",
    "lemma": "Postleitzahl",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "personal_info"],
    "meanings": {
      "de": "Postleitzahl",
      "ko": "우편번호",
      "en": "zip code",
      "es": "código postal",
      "fr": "code postal",
      "it": "codice postale",
      "pt": "código postal",
      "ja": "郵便番号",
      "zh": "邮政编码",
      "ru": "почтовый индекс"
    },
    "examples": ["Wie ist Ihre Postleitzahl?"],
    "meta": {},
    "gender": "die",
    "plural": "Postleitzahlen"
  },
  {
    "id": "praktikum_nn_1",
    "lemma": "Praktikum",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "work", "education"],
    "meanings": {
      "de": "Praktikum",
      "ko": "실습",
      "en": "internship",
      "es": "prácticas",
      "fr": "stage",
      "it": "stage",
      "pt": "estágio",
      "ja": "実習",
      "zh": "实习",
      "ru": "практика"
    },
    "examples": ["Ich mache ein Praktikum bei Siemens."],
    "meta": {},
    "gender": "das",
    "plural": "Praktika"
  },
  {
    "id": "praxis_nf_1",
    "lemma": "Praxis",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "health", "work"],
    "meanings": {
      "de": "Praxis",
      "ko": "진료소, 병원",
      "en": "practice",
      "es": "consultorio",
      "fr": "cabinet",
      "it": "studio medico",
      "pt": "consultório",
      "ja": "診療所",
      "zh": "诊所",
      "ru": "практика"
    },
    "examples": ["Die Praxis ist ab 8 Uhr geöffnet."],
    "meta": {},
    "gender": "die",
    "plural": "Praxen"
  },
  {
    "id": "preis_nm_1",
    "lemma": "Preis",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "shopping"],
    "meanings": {
      "de": "Preis",
      "ko": "가격",
      "en": "price",
      "es": "precio",
      "fr": "prix",
      "it": "prezzo",
      "pt": "preço",
      "ja": "価格",
      "zh": "价格",
      "ru": "цена"
    },
    "examples": ["Der Preis ist hoch."],
    "meta": {},
    "gender": "der",
    "plural": "Preise"
  },
  {
    "id": "problem_nn_1",
    "lemma": "Problem",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "Problem",
      "ko": "문제",
      "en": "problem",
      "es": "problema",
      "fr": "problème",
      "it": "problema",
      "pt": "problema",
      "ja": "問題",
      "zh": "问题",
      "ru": "проблема"
    },
    "examples": ["Ich habe ein Problem."],
    "meta": {},
    "gender": "das",
    "plural": "Probleme"
  },
  {
    "id": "prospekt_nm_1",
    "lemma": "Prospekt",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "media", "travel"],
    "meanings": {
      "de": "Prospekt",
      "ko": "안내 책자",
      "en": "brochure",
      "es": "folleto",
      "fr": "prospectus",
      "it": "opuscolo",
      "pt": "prospeto",
      "ja": "パンフレット",
      "zh": "宣传册",
      "ru": "проспект"
    },
    "examples": ["Bitte schicken Sie mir einen Prospekt."],
    "meta": {},
    "gender": "der",
    "plural": "Prospekte"
  },
  {
    "id": "puenktlich_adj_1",
    "lemma": "pünktlich",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "time"],
    "meanings": {
      "de": "pünktlich",
      "ko": "시간을 엄수하는",
      "en": "punctual",
      "es": "puntual",
      "fr": "à l'heure",
      "it": "puntuale",
      "pt": "pontual",
      "ja": "時間厳守の",
      "zh": "准时",
      "ru": "пунктуальный"
    },
    "examples": ["Bitte seien Sie pünktlich."],
    "meta": {}
  },
  {
    "id": "rad_nn_1",
    "lemma": "Rad",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "transport"],
    "meanings": {
      "de": "Rad",
      "ko": "자전거",
      "en": "bicycle",
      "es": "bicicleta",
      "fr": "vélo",
      "it": "bici",
      "pt": "bicicleta",
      "ja": "自転車",
      "zh": "自行车",
      "ru": "велосипед"
    },
    "examples": ["Ich fahre gern Rad."],
    "meta": {},
    "gender": "das",
    "plural": "Räder"
  },
  {
    "id": "rauchen_v_1",
    "lemma": "rauchen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "daily", "health"],
    "meanings": {
      "de": "rauchen",
      "ko": "담배를 피우다",
      "en": "smoke",
      "es": "fumar",
      "fr": "fumer",
      "it": "fumare",
      "pt": "fumar",
      "ja": "喫煙する",
      "zh": "吸烟",
      "ru": "курить"
    },
    "examples": ["Hier dürfen Sie nicht rauchen."],
    "meta": {},
    "conj": {
      "pres_ich": "ich rauche",
      "pres_du": "du rauchst",
      "pres_er": "er raucht",
      "praet": "rauchte",
      "part2": "geraucht",
      "aux": "haben"
    }
  },
  {
    "id": "raum_nm_1",
    "lemma": "Raum",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "location", "housing"],
    "meanings": {
      "de": "Raum",
      "ko": "방",
      "en": "room",
      "es": "habitación",
      "fr": "salle",
      "it": "stanza",
      "pt": "sala",
      "ja": "部屋",
      "zh": "房间",
      "ru": "помещение"
    },
    "examples": ["Der Unterricht ist in Raum 12."],
    "meta": {},
    "gender": "der",
    "plural": "Räume"
  },
  {
    "id": "rechnung_nf_1",
    "lemma": "Rechnung",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "shopping", "restaurant"],
    "meanings": {
      "de": "Rechnung",
      "ko": "계산서",
      "en": "bill",
      "es": "cuenta",
      "fr": "addition",
      "it": "conto",
      "pt": "conta",
      "ja": "請求書",
      "zh": "账单",
      "ru": "счет"
    },
    "examples": ["Die Rechnung, bitte."],
    "meta": {},
    "gender": "die",
    "plural": "Rechnungen"
  },
  {
    "id": "rechts_adv_1",
    "lemma": "rechts",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "location", "direction"],
    "meanings": {
      "de": "rechts",
      "ko": "오른쪽으로",
      "en": "right",
      "es": "a la derecha",
      "fr": "à droite",
      "it": "a destra",
      "pt": "à direita",
      "ja": "右に",
      "zh": "向右",
      "ru": "справа"
    },
    "examples": ["Da müssen Sie nach rechts fahren."],
    "meta": {}
  },
  {
    "id": "regnen_v_1",
    "lemma": "regnen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "weather"],
    "meanings": {
      "de": "regnen",
      "ko": "비가 오다",
      "en": "rain",
      "es": "llover",
      "fr": "pleuvoir",
      "it": "piovere",
      "pt": "chover",
      "ja": "雨が降る",
      "zh": "下雨",
      "ru": "идти (о дожде)"
    },
    "examples": ["Es regnet heute."],
    "meta": {},
    "conj": {
      "pres_ich": "es regnet",
      "pres_du": "es regnet",
      "pres_er": "es regnet",
      "praet": "regnete",
      "part2": "geregnet",
      "aux": "haben"
    }
  },
  {
    "id": "regen_nm_1",
    "lemma": "Regen",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "weather"],
    "meanings": {
      "de": "Regen",
      "ko": "비",
      "en": "rain",
      "es": "lluvia",
      "fr": "pluie",
      "it": "pioggia",
      "pt": "chuva",
      "ja": "雨",
      "zh": "雨",
      "ru": "дождь"
    },
    "examples": ["Bei Regen gehe ich nicht spazieren."],
    "meta": {},
    "gender": "der",
    "plural": ""
  },
  {
    "id": "reis_nm_1",
    "lemma": "Reis",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "food"],
    "meanings": {
      "de": "Reis",
      "ko": "쌀",
      "en": "rice",
      "es": "arroz",
      "fr": "riz",
      "it": "riso",
      "pt": "arroz",
      "ja": "米",
      "zh": "米饭",
      "ru": "рис"
    },
    "examples": ["Ich esse gern Reis."],
    "meta": {},
    "gender": "der",
    "plural": ""
  },
  {
    "id": "reisen_v_1",
    "lemma": "reisen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "travel"],
    "meanings": {
      "de": "reisen",
      "ko": "여행하다",
      "en": "travel",
      "es": "viajar",
      "fr": "voyager",
      "it": "viaggiare",
      "pt": "viajar",
      "ja": "旅行する",
      "zh": "旅行",
      "ru": "путешествовать"
    },
    "examples": ["Ich reise gern nach Italien."],
    "meta": {},
    "conj": {
      "pres_ich": "ich reise",
      "pres_du": "du reist",
      "pres_er": "er reist",
      "praet": "reiste",
      "part2": "gereist",
      "aux": "sein"
    }
  },
  {
    "id": "reise_nf_1",
    "lemma": "Reise",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "travel"],
    "meanings": {
      "de": "Reise",
      "ko": "여행",
      "en": "trip",
      "es": "viaje",
      "fr": "voyage",
      "it": "viaggio",
      "pt": "viagem",
      "ja": "旅行",
      "zh": "旅行",
      "ru": "путешествие"
    },
    "examples": ["Gute Reise!"],
    "meta": {},
    "gender": "die",
    "plural": "Reisen"
  },
  {
    "id": "reisebuero_nn_1",
    "lemma": "Reisebüro",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "travel", "city"],
    "meanings": {
      "de": "Reisebüro",
      "ko": "여행사",
      "en": "travel agency",
      "es": "agencia de viajes",
      "fr": "agence de voyages",
      "it": "agenzia di viaggi",
      "pt": "agência de viagens",
      "ja": "旅行代理店",
      "zh": "旅行社",
      "ru": "турагентство"
    },
    "examples": ["Wir buchen die Reise im Reisebüro."],
    "meta": {},
    "gender": "das",
    "plural": "Reisebüros"
  },
  {
    "id": "reisefuehrer_nm_1",
    "lemma": "Reiseführer",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "travel", "media"],
    "meanings": {
      "de": "Reiseführer",
      "ko": "여행 가이드북",
      "en": "travel guide",
      "es": "guía de viaje",
      "fr": "guide de voyage",
      "it": "guida turistica",
      "pt": "guia de viagem",
      "ja": "旅行ガイド",
      "zh": "旅游指南",
      "ru": "путеводитель"
    },
    "examples": ["Ich kaufe einen Reiseführer von Berlin."],
    "meta": {},
    "gender": "der",
    "plural": "Reiseführer"
  },
  {
    "id": "reparieren_v_1",
    "lemma": "reparieren",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "daily", "work"],
    "meanings": {
      "de": "reparieren",
      "ko": "수리하다",
      "en": "repair",
      "es": "reparar",
      "fr": "réparer",
      "it": "riparare",
      "pt": "reparar",
      "ja": "修理する",
      "zh": "修理",
      "ru": "ремонтировать"
    },
    "examples": ["Können Sie das Fahrrad reparieren?"],
    "meta": {},
    "conj": {
      "pres_ich": "ich repariere",
      "pres_du": "du reparierst",
      "pres_er": "er repariert",
      "praet": "reparierte",
      "part2": "repariert",
      "aux": "haben"
    }
  },
  {
    "id": "reparatur_nf_1",
    "lemma": "Reparatur",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "daily", "service"],
    "meanings": {
      "de": "Reparatur",
      "ko": "수리",
      "en": "repair",
      "es": "reparación",
      "fr": "réparation",
      "it": "riparazione",
      "pt": "reparação",
      "ja": "修理",
      "zh": "修理",
      "ru": "ремонт"
    },
    "examples": ["Die Reparatur ist sehr teuer."],
    "meta": {},
    "gender": "die",
    "plural": "Reparaturen"
  },
  {
    "id": "restaurant_nn_1",
    "lemma": "Restaurant",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "food", "city"],
    "meanings": {
      "de": "Restaurant",
      "ko": "식당",
      "en": "restaurant",
      "es": "restaurante",
      "fr": "restaurant",
      "it": "ristorante",
      "pt": "restaurante",
      "ja": "レストラン",
      "zh": "餐厅",
      "ru": "ресторан"
    },
    "examples": ["Wir essen heute im Restaurant."],
    "meta": {},
    "gender": "das",
    "plural": "Restaurants"
  },
  {
    "id": "rezept_nn_1",
    "lemma": "Rezept",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "health", "food"],
    "meanings": {
      "de": "Rezept",
      "ko": "처방전, 조리법",
      "en": "prescription, recipe",
      "es": "receta",
      "fr": "ordonnance, recette",
      "it": "ricetta",
      "pt": "receita",
      "ja": "処方箋, レシピ",
      "zh": "处方, 食谱",
      "ru": "рецепт"
    },
    "examples": ["Dieses Medikament bekommen Sie nur mit Rezept."],
    "meta": {},
    "gender": "das",
    "plural": "Rezepte"
  },
  {
    "id": "rezeption_nf_1",
    "lemma": "Rezeption",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "travel", "hotel"],
    "meanings": {
      "de": "Rezeption",
      "ko": "프런트",
      "en": "reception",
      "es": "recepción",
      "fr": "réception",
      "it": "reception",
      "pt": "receção",
      "ja": "フロント",
      "zh": "接待处",
      "ru": "ресепшн"
    },
    "examples": ["Geben Sie bitte den Schlüssel an der Rezeption ab."],
    "meta": {},
    "gender": "die",
    "plural": "Rezeptionen"
  },
  {
    "id": "richtig_adj_1",
    "lemma": "richtig",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "basic", "opinion"],
    "meanings": {
      "de": "richtig",
      "ko": "맞는",
      "en": "correct, right",
      "es": "correcto",
      "fr": "juste",
      "it": "giusto",
      "pt": "correto",
      "ja": "正しい",
      "zh": "正确",
      "ru": "правильный"
    },
    "examples": ["Das ist richtig."],
    "meta": {}
  },
  {
    "id": "riechen_v_1",
    "lemma": "riechen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "perception"],
    "meanings": {
      "de": "riechen",
      "ko": "냄새가 나다",
      "en": "smell",
      "es": "oler",
      "fr": "sentir",
      "it": "odorare",
      "pt": "cheirar",
      "ja": "におう",
      "zh": "闻",
      "ru": "пахнуть"
    },
    "examples": ["Das Essen riecht gut."],
    "meta": {},
    "conj": {
      "pres_ich": "ich rieche",
      "pres_du": "du riechst",
      "pres_er": "er riecht",
      "praet": "roch",
      "part2": "gerochen",
      "aux": "haben"
    }
  },
  {
    "id": "ruhig_adj_1",
    "lemma": "ruhig",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "description"],
    "meanings": {
      "de": "ruhig",
      "ko": "조용한",
      "en": "quiet",
      "es": "tranquilo",
      "fr": "calme",
      "it": "tranquillo",
      "pt": "calmo",
      "ja": "静かな",
      "zh": "安静",
      "ru": "спокойный"
    },
    "examples": ["Ich möchte ein ruhiges Zimmer."],
    "meta": {}
  },
  {
    "id": "saft_nm_1",
    "lemma": "Saft",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "food", "drink"],
    "meanings": {
      "de": "Saft",
      "ko": "주스",
      "en": "juice",
      "es": "zumo",
      "fr": "jus",
      "it": "succo",
      "pt": "sumo",
      "ja": "ジュース",
      "zh": "果汁",
      "ru": "сок"
    },
    "examples": ["Ich trinke gern Orangensaft."],
    "meta": {},
    "gender": "der",
    "plural": "Säfte"
  },
  {
    "id": "sagen_v_1",
    "lemma": "sagen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "communication", "basic"],
    "meanings": {
      "de": "sagen",
      "ko": "말하다",
      "en": "say",
      "es": "decir",
      "fr": "dire",
      "it": "dire",
      "pt": "dizer",
      "ja": "言う",
      "zh": "说",
      "ru": "сказать"
    },
    "examples": ["Sag mal, wie heißt du?"],
    "meta": {},
    "conj": {
      "pres_ich": "ich sage",
      "pres_du": "du sagst",
      "pres_er": "er sagt",
      "praet": "sagte",
      "part2": "gesagt",
      "aux": "haben"
    }
  },
  {
    "id": "salat_nm_1",
    "lemma": "Salat",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "food"],
    "meanings": {
      "de": "Salat",
      "ko": "샐러드",
      "en": "salad",
      "es": "ensalada",
      "fr": "salade",
      "it": "insalata",
      "pt": "salada",
      "ja": "サラダ",
      "zh": "沙拉",
      "ru": "салат"
    },
    "examples": ["Ich möchte gern einen Salat."],
    "meta": {},
    "gender": "der",
    "plural": "Salate"
  },
  {
    "id": "salz_nn_1",
    "lemma": "Salz",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "food"],
    "meanings": {
      "de": "Salz",
      "ko": "소금",
      "en": "salt",
      "es": "sal",
      "fr": "sel",
      "it": "sale",
      "pt": "sal",
      "ja": "塩",
      "zh": "盐",
      "ru": "соль"
    },
    "examples": ["Herr Ober, kann ich bitte Salz haben?"],
    "meta": {},
    "gender": "das",
    "plural": ""
  },
  {
    "id": "satz_nm_1",
    "lemma": "Satz",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "school", "communication"],
    "meanings": {
      "de": "Satz",
      "ko": "문장",
      "en": "sentence",
      "es": "frase",
      "fr": "phrase",
      "it": "frase",
      "pt": "frase",
      "ja": "文",
      "zh": "句子",
      "ru": "предложение"
    },
    "examples": ["Den letzten Satz verstehe ich nicht."],
    "meta": {},
    "gender": "der",
    "plural": "Sätze"
  },
  {
    "id": "s_bahn_nf_1",
    "lemma": "S-Bahn",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "transport", "city"],
    "meanings": {
      "de": "S-Bahn",
      "ko": "도시 고속 철도",
      "en": "suburban train",
      "es": "tren de cercanías",
      "fr": "RER",
      "it": "ferrovia suburbana",
      "pt": "comboio suburbano",
      "ja": "Sバーン",
      "zh": "城市快铁",
      "ru": "городская электричка"
    },
    "examples": ["Ich nehme die S-Bahn."],
    "meta": {},
    "gender": "die",
    "plural": "S-Bahnen"
  },
  {
    "id": "schalter_nm_1",
    "lemma": "Schalter",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "travel", "public_service"],
    "meanings": {
      "de": "Schalter",
      "ko": "창구",
      "en": "counter",
      "es": "taquilla",
      "fr": "guichet",
      "it": "sportello",
      "pt": "guichê",
      "ja": "窓口",
      "zh": "柜台",
      "ru": "окошко"
    },
    "examples": ["Gehen Sie bitte zum Schalter 3."],
    "meta": {},
    "gender": "der",
    "plural": "Schalter"
  },
  {
    "id": "scheinen_v_1",
    "lemma": "scheinen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "weather"],
    "meanings": {
      "de": "scheinen",
      "ko": "빛나다",
      "en": "shine",
      "es": "brillar",
      "fr": "briller",
      "it": "splendere",
      "pt": "brilhar",
      "ja": "輝く",
      "zh": "照耀",
      "ru": "светить"
    },
    "examples": ["Die Sonne scheint."],
    "meta": {},
    "conj": {
      "pres_ich": "ich scheine",
      "pres_du": "du scheinst",
      "pres_er": "er scheint",
      "praet": "schien",
      "part2": "geschienen",
      "aux": "haben"
    }
  },
  {
    "id": "schicken_v_1",
    "lemma": "schicken",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "communication", "post"],
    "meanings": {
      "de": "schicken",
      "ko": "보내다",
      "en": "send",
      "es": "enviar",
      "fr": "envoyer",
      "it": "mandare",
      "pt": "enviar",
      "ja": "送る",
      "zh": "寄",
      "ru": "посылать"
    },
    "examples": ["Bitte schicken Sie mir eine E-Mail."],
    "meta": {},
    "conj": {
      "pres_ich": "ich schicke",
      "pres_du": "du schickst",
      "pres_er": "er schickt",
      "praet": "schickte",
      "part2": "geschickt",
      "aux": "haben"
    }
  },
  {
    "id": "schild_nn_1",
    "lemma": "Schild",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "traffic", "city"],
    "meanings": {
      "de": "Schild",
      "ko": "표지판",
      "en": "sign",
      "es": "letrero",
      "fr": "panneau",
      "it": "cartello",
      "pt": "placa",
      "ja": "標識",
      "zh": "牌子",
      "ru": "вывеска"
    },
    "examples": ["Haben Sie das Schild nicht gesehen?"],
    "meta": {},
    "gender": "das",
    "plural": "Schilder"
  },
  {
    "id": "schinken_nm_1",
    "lemma": "Schinken",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "food"],
    "meanings": {
      "de": "Schinken",
      "ko": "햄",
      "en": "ham",
      "es": "jamón",
      "fr": "jambon",
      "it": "prosciutto",
      "pt": "fiambre",
      "ja": "ハム",
      "zh": "火腿",
      "ru": "ветчина"
    },
    "examples": ["Ich möchte ein Brötchen mit Schinken."],
    "meta": {},
    "gender": "der",
    "plural": "Schinken"
  },
  {
    "id": "schlafen_v_1",
    "lemma": "schlafen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "daily", "basic"],
    "meanings": {
      "de": "schlafen",
      "ko": "자다",
      "en": "sleep",
      "es": "dormir",
      "fr": "dormir",
      "it": "dormire",
      "pt": "dormir",
      "ja": "眠る",
      "zh": "睡觉",
      "ru": "спать"
    },
    "examples": ["Ich schlafe meistens acht Stunden."],
    "meta": {},
    "conj": {
      "pres_ich": "ich schlafe",
      "pres_du": "du schläfst",
      "pres_er": "er schläft",
      "praet": "schlief",
      "part2": "geschlafen",
      "aux": "haben"
    }
  },
  {
    "id": "schlecht_adj_1",
    "lemma": "schlecht",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "basic", "opinion"],
    "meanings": {
      "de": "schlecht",
      "ko": "나쁜",
      "en": "bad",
      "es": "malo",
      "fr": "mauvais",
      "it": "cattivo",
      "pt": "mau",
      "ja": "悪い",
      "zh": "坏",
      "ru": "плохой"
    },
    "examples": ["Das Wetter ist schlecht."],
    "meta": {}
  },
  {
    "id": "schliessen_v_1",
    "lemma": "schließen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "action", "daily"],
    "meanings": {
      "de": "schließen",
      "ko": "닫다",
      "en": "close",
      "es": "cerrar",
      "fr": "fermer",
      "it": "chiudere",
      "pt": "fechar",
      "ja": "閉める",
      "zh": "关闭",
      "ru": "закрывать"
    },
    "examples": ["Bitte schließen Sie die Tür."],
    "meta": {},
    "conj": {
      "pres_ich": "ich schließe",
      "pres_du": "du schließt",
      "pres_er": "er schließt",
      "praet": "schloss",
      "part2": "geschlossen",
      "aux": "haben"
    }
  },
  {
    "id": "geschlossen_adj_1",
    "lemma": "geschlossen",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "daily", "status"],
    "meanings": {
      "de": "geschlossen",
      "ko": "닫힌",
      "en": "closed",
      "es": "cerrado",
      "fr": "fermé",
      "it": "chiuso",
      "pt": "fechado",
      "ja": "閉まっている",
      "zh": "关闭的",
      "ru": "закрытый"
    },
    "examples": ["Die Bank ist am Samstag geschlossen."],
    "meta": {}
  },
  {
    "id": "schluss_nm_1",
    "lemma": "Schluss",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "time", "basic"],
    "meanings": {
      "de": "Schluss",
      "ko": "끝",
      "en": "end",
      "es": "fin",
      "fr": "fin",
      "it": "fine",
      "pt": "fim",
      "ja": "終わり",
      "zh": "结束",
      "ru": "конец"
    },
    "examples": ["Ich muss jetzt Schluss machen."],
    "meta": {},
    "gender": "der",
    "plural": "Schlüsse"
  },
  {
    "id": "schluessel_nm_1",
    "lemma": "Schlüssel",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "housing", "daily"],
    "meanings": {
      "de": "Schlüssel",
      "ko": "열쇠",
      "en": "key",
      "es": "llave",
      "fr": "clé",
      "it": "chiave",
      "pt": "chave",
      "ja": "鍵",
      "zh": "钥匙",
      "ru": "ключ"
    },
    "examples": ["Ich gebe Ihnen den Schlüssel."],
    "meta": {},
    "gender": "der",
    "plural": "Schlüssel"
  },
  {
    "id": "schmecken_v_1",
    "lemma": "schmecken",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "food", "feeling"],
    "meanings": {
      "de": "schmecken",
      "ko": "맛이 나다",
      "en": "taste",
      "es": "saber",
      "fr": "avoir du goût",
      "it": "piacere",
      "pt": "saber",
      "ja": "味がする",
      "zh": "有味道",
      "ru": "быть вкусным"
    },
    "examples": ["Das schmeckt gut."],
    "meta": {},
    "conj": {
      "pres_ich": "ich schmecke",
      "pres_du": "du schmeckst",
      "pres_er": "er schmeckt",
      "praet": "schmeckte",
      "part2": "geschmeckt",
      "aux": "haben"
    }
  },
  {
    "id": "schnell_adj_1",
    "lemma": "schnell",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "description"],
    "meanings": {
      "de": "schnell",
      "ko": "빠른",
      "en": "fast",
      "es": "rápido",
      "fr": "rapide",
      "it": "veloce",
      "pt": "rápido",
      "ja": "速い",
      "zh": "快",
      "ru": "быстрый"
    },
    "examples": ["Er fährt zu schnell."],
    "meta": {}
  },
  {
    "id": "schon_adv_1",
    "lemma": "schon",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "time", "basic"],
    "meanings": {
      "de": "schon",
      "ko": "이미, 벌써",
      "en": "already",
      "es": "ya",
      "fr": "déjà",
      "it": "già",
      "pt": "já",
      "ja": "もう",
      "zh": "已经",
      "ru": "уже"
    },
    "examples": ["Ist das Essen schon fertig?"],
    "meta": {}
  },
  {
    "id": "schoen_adj_1",
    "lemma": "schön",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "description", "feeling"],
    "meanings": {
      "de": "schön",
      "ko": "아름다운",
      "en": "beautiful",
      "es": "bonito",
      "fr": "beau",
      "it": "bello",
      "pt": "bonito",
      "ja": "美しい",
      "zh": "美丽",
      "ru": "красивый"
    },
    "examples": ["Schöne Ferien!"],
    "meta": {}
  },
  {
    "id": "schrank_nm_1",
    "lemma": "Schrank",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "housing", "furniture"],
    "meanings": {
      "de": "Schrank",
      "ko": "장, 옷장",
      "en": "cupboard, wardrobe",
      "es": "armario",
      "fr": "armoire",
      "it": "armadio",
      "pt": "armário",
      "ja": "戸棚",
      "zh": "柜子",
      "ru": "шкаф"
    },
    "examples": ["Die Gläser stehen im Schrank."],
    "meta": {},
    "gender": "der",
    "plural": "Schränke"
  },
  {
    "id": "schreiben_v_1",
    "lemma": "schreiben",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "communication", "school"],
    "meanings": {
      "de": "schreiben",
      "ko": "쓰다",
      "en": "write",
      "es": "escribir",
      "fr": "écrire",
      "it": "scrivere",
      "pt": "escrever",
      "ja": "書く",
      "zh": "写",
      "ru": "писать"
    },
    "examples": ["Er schreibt einen Brief."],
    "meta": {},
    "conj": {
      "pres_ich": "ich schreibe",
      "pres_du": "du schreibst",
      "pres_er": "er schreibt",
      "praet": "schrieb",
      "part2": "geschrieben",
      "aux": "haben"
    }
  },
  {
    "id": "schuh_nm_1",
    "lemma": "Schuh",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "clothing"],
    "meanings": {
      "de": "Schuh",
      "ko": "신발",
      "en": "shoe",
      "es": "zapato",
      "fr": "chaussure",
      "it": "scarpa",
      "pt": "sapato",
      "ja": "靴",
      "zh": "鞋",
      "ru": "ботинок"
    },
    "examples": ["Zieh die Schuhe aus!"],
    "meta": {},
    "gender": "der",
    "plural": "Schuhe"
  },
  {
    "id": "schule_nf_1",
    "lemma": "Schule",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "education"],
    "meanings": {
      "de": "Schule",
      "ko": "학교",
      "en": "school",
      "es": "escuela",
      "fr": "école",
      "it": "scuola",
      "pt": "escola",
      "ja": "学校",
      "zh": "学校",
      "ru": "школа"
    },
    "examples": ["Meine Tochter geht schon in die Schule."],
    "meta": {},
    "gender": "die",
    "plural": "Schulen"
  },
  {
    "id": "schueler_nm_1",
    "lemma": "Schüler",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "education", "people"],
    "meanings": {
      "de": "Schüler",
      "ko": "남학생",
      "en": "pupil, student",
      "es": "alumno",
      "fr": "élève",
      "it": "alunno",
      "pt": "aluno",
      "ja": "生徒",
      "zh": "学生",
      "ru": "ученик"
    },
    "examples": ["In meinem Kurs sind 15 Schüler."],
    "meta": {},
    "gender": "der",
    "plural": "Schüler"
  },
  {
    "id": "schwer_adj_1",
    "lemma": "schwer",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "description"],
    "meanings": {
      "de": "schwer",
      "ko": "무거운, 어려운",
      "en": "heavy, difficult",
      "es": "pesado, difícil",
      "fr": "lourd, difficile",
      "it": "pesante, difficile",
      "pt": "pesado, difícil",
      "ja": "重い, 難しい",
      "zh": "重, 难",
      "ru": "тяжелый"
    },
    "examples": ["Ist der Koffer schwer?"],
    "meta": {}
  },
  {
    "id": "schwester_nf_1",
    "lemma": "Schwester",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "family"],
    "meanings": {
      "de": "Schwester",
      "ko": "여자 형제",
      "en": "sister",
      "es": "hermana",
      "fr": "sœur",
      "it": "sorella",
      "pt": "irmã",
      "ja": "姉妹",
      "zh": "姐妹",
      "ru": "сестра"
    },
    "examples": ["Ich habe keine Schwester."],
    "meta": {},
    "gender": "die",
    "plural": "Schwestern"
  },
  {
    "id": "schwimmen_v_1",
    "lemma": "schwimmen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "sport", "leisure"],
    "meanings": {
      "de": "schwimmen",
      "ko": "수영하다",
      "en": "swim",
      "es": "nadar",
      "fr": "nager",
      "it": "nuotare",
      "pt": "nadar",
      "ja": "泳ぐ",
      "zh": "游泳",
      "ru": "плавать"
    },
    "examples": ["Ich schwimme jeden Tag einen Kilometer."],
    "meta": {},
    "conj": {
      "pres_ich": "ich schwimme",
      "pres_du": "du schwimmst",
      "pres_er": "er schwimmt",
      "praet": "schwamm",
      "part2": "geschwommen",
      "aux": "sein"
    }
  },
  {
    "id": "schwimmbad_nn_1",
    "lemma": "Schwimmbad",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "sport", "city"],
    "meanings": {
      "de": "Schwimmbad",
      "ko": "수영장",
      "en": "swimming pool",
      "es": "piscina",
      "fr": "piscine",
      "it": "piscina",
      "pt": "piscina",
      "ja": "プール",
      "zh": "游泳池",
      "ru": "бассейн"
    },
    "examples": ["Kommst du mit ins Schwimmbad?"],
    "meta": {},
    "gender": "das",
    "plural": "Schwimmbäder"
  },
  {
    "id": "see_nm_1",
    "lemma": "See",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "nature", "geography"],
    "meanings": {
      "de": "See",
      "ko": "호수",
      "en": "lake",
      "es": "lago",
      "fr": "lac",
      "it": "lago",
      "pt": "lago",
      "ja": "湖",
      "zh": "湖",
      "ru": "озеро"
    },
    "examples": ["Komm, wir fahren zum See."],
    "meta": {},
    "gender": "der",
    "plural": "Seen"
  },
  {
    "id": "sehen_v_1",
    "lemma": "sehen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "perception", "basic"],
    "meanings": {
      "de": "sehen",
      "ko": "보다",
      "en": "see",
      "es": "ver",
      "fr": "voir",
      "it": "vedere",
      "pt": "ver",
      "ja": "見る",
      "zh": "看",
      "ru": "видеть"
    },
    "examples": ["Ich sehe dich."],
    "meta": {},
    "conj": {
      "pres_ich": "ich sehe",
      "pres_du": "du siehst",
      "pres_er": "er sieht",
      "praet": "sah",
      "part2": "gesehen",
      "aux": "haben"
    }
  },
  {
    "id": "sehenswuerdigkeit_nf_1",
    "lemma": "Sehenswürdigkeit",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "travel", "culture"],
    "meanings": {
      "de": "Sehenswürdigkeit",
      "ko": "명소",
      "en": "sight",
      "es": "atracción turística",
      "fr": "curiosité",
      "it": "attrazione",
      "pt": "ponto turístico",
      "ja": "名所",
      "zh": "名胜",
      "ru": "достопримечательность"
    },
    "examples": ["Welche Sehenswürdigkeiten gibt es in Berlin?"],
    "meta": {},
    "gender": "die",
    "plural": "Sehenswürdigkeiten"
  },
  {
    "id": "sehr_adv_1",
    "lemma": "sehr",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "basic", "degree"],
    "meanings": {
      "de": "sehr",
      "ko": "매우",
      "en": "very",
      "es": "muy",
      "fr": "très",
      "it": "molto",
      "pt": "muito",
      "ja": "とても",
      "zh": "很",
      "ru": "очень"
    },
    "examples": ["Danke sehr!"],
    "meta": {}
  },
  {
    "id": "sein_v_1",
    "lemma": "sein",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "basic", "grammar"],
    "meanings": {
      "de": "sein",
      "ko": "이다, 있다",
      "en": "be",
      "es": "ser, estar",
      "fr": "être",
      "it": "essere",
      "pt": "ser, estar",
      "ja": "である",
      "zh": "是",
      "ru": "быть"
    },
    "examples": ["Ich bin Kellner."],
    "meta": {},
    "conj": {
      "pres_ich": "ich bin",
      "pres_du": "du bist",
      "pres_er": "er ist",
      "praet": "war",
      "part2": "gewesen",
      "aux": "sein"
    }
  },
  {
    "id": "sein_art_1",
    "lemma": "sein",
    "pos": "Artikel",
    "cefr": "A1",
    "tags": ["exam", "basic", "family"],
    "meanings": {
      "de": "sein",
      "ko": "그의",
      "en": "his",
      "es": "su",
      "fr": "son",
      "it": "suo",
      "pt": "seu",
      "ja": "彼の",
      "zh": "他的",
      "ru": "его"
    },
    "examples": ["Das ist sein Auto."],
    "meta": {}
  },
  {
    "id": "seit_prep_1",
    "lemma": "seit",
    "pos": "Präposition",
    "cefr": "A1",
    "tags": ["exam", "time", "basic"],
    "meanings": {
      "de": "seit",
      "ko": "~부터, ~이래로",
      "en": "since, for",
      "es": "desde",
      "fr": "depuis",
      "it": "da",
      "pt": "desde",
      "ja": "～以来",
      "zh": "自从",
      "ru": "с"
    },
    "examples": ["Ich wohne seit drei Jahren in Köln."],
    "meta": {}
  },
  {
    "id": "seite_nf_1",
    "lemma": "Seite",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "education", "book"],
    "meanings": {
      "de": "Seite",
      "ko": "페이지, 쪽",
      "en": "page, side",
      "es": "página, lado",
      "fr": "page, côté",
      "it": "pagina, lato",
      "pt": "página, lado",
      "ja": "ページ",
      "zh": "页",
      "ru": "страница"
    },
    "examples": ["Öffnen Sie das Buch auf Seite 12."],
    "meta": {},
    "gender": "die",
    "plural": "Seiten"
  },
  {
    "id": "selbst_pron_1",
    "lemma": "selbst",
    "pos": "Pronomen",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "selbst",
      "ko": "자신, 스스로",
      "en": "self, even",
      "es": "mismo",
      "fr": "soi-même",
      "it": "stesso",
      "pt": "mesmo",
      "ja": "自分",
      "zh": "自己",
      "ru": "сам"
    },
    "examples": ["Du musst das selbst machen."],
    "meta": {}
  },
  {
    "id": "service_nm_1",
    "lemma": "Service",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "service", "restaurant"],
    "meanings": {
      "de": "Service",
      "ko": "서비스",
      "en": "service",
      "es": "servicio",
      "fr": "service",
      "it": "servizio",
      "pt": "serviço",
      "ja": "サービス",
      "zh": "服务",
      "ru": "обслуживание"
    },
    "examples": ["Der Service war gut."],
    "meta": {},
    "gender": "der",
    "plural": "Services"
  },
  {
    "id": "setzen_v_1",
    "lemma": "setzen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "action", "daily"],
    "meanings": {
      "de": "setzen",
      "ko": "앉히다, 놓다",
      "en": "set, put, sit down",
      "es": "sentar, poner",
      "fr": "mettre, s'asseoir",
      "it": "mettere, sedersi",
      "pt": "pôr, sentar-se",
      "ja": "置く, 座る",
      "zh": "放, 坐",
      "ru": "сажать"
    },
    "examples": ["Setzen Sie sich doch!"],
    "meta": {},
    "conj": {
      "pres_ich": "ich setze",
      "pres_du": "du setzt",
      "pres_er": "er setzt",
      "praet": "setzte",
      "part2": "gesetzt",
      "aux": "haben"
    }
  },
  {
    "id": "sicher_adj_1",
    "lemma": "sicher",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "opinion", "basic"],
    "meanings": {
      "de": "sicher",
      "ko": "확실한, 안전한",
      "en": "sure, safe",
      "es": "seguro",
      "fr": "sûr",
      "it": "sicuro",
      "pt": "seguro",
      "ja": "確かな, 安全な",
      "zh": "确定, 安全",
      "ru": "уверенный, безопасный"
    },
    "examples": ["Ich bin ganz sicher."],
    "meta": {}
  },
  {
    "id": "sie_pron_1",
    "lemma": "sie",
    "pos": "Pronomen",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "sie",
      "ko": "그녀",
      "en": "she",
      "es": "ella",
      "fr": "elle",
      "it": "lei",
      "pt": "ela",
      "ja": "彼女",
      "zh": "她",
      "ru": "она"
    },
    "examples": ["Das ist Laura. Sie kommt aus Italien."],
    "meta": {}
  },
  {
    "id": "sie_pron_2",
    "lemma": "sie",
    "pos": "Pronomen",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "sie",
      "ko": "그들",
      "en": "they",
      "es": "ellos/ellas",
      "fr": "ils/elles",
      "it": "loro",
      "pt": "eles/elas",
      "ja": "彼ら",
      "zh": "他们",
      "ru": "они"
    },
    "examples": ["Die Kinder spielen. Sie sind laut."],
    "meta": {}
  },
  {
    "id": "sie_pron_3",
    "lemma": "Sie",
    "pos": "Pronomen",
    "cefr": "A1",
    "tags": ["exam", "basic", "formal"],
    "meanings": {
      "de": "Sie",
      "ko": "당신",
      "en": "you",
      "es": "usted/ustedes",
      "fr": "vous",
      "it": "Lei",
      "pt": "o senhor/a senhora",
      "ja": "あなた",
      "zh": "您",
      "ru": "Вы"
    },
    "examples": ["Wie heißen Sie, bitte?"],
    "meta": {}
  },
  {
    "id": "singen_v_1",
    "lemma": "singen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "leisure", "music"],
    "meanings": {
      "de": "singen",
      "ko": "노래하다",
      "en": "sing",
      "es": "cantar",
      "fr": "chanter",
      "it": "cantare",
      "pt": "cantar",
      "ja": "歌う",
      "zh": "唱歌",
      "ru": "петь"
    },
    "examples": ["Wir singen ein Lied."],
    "meta": {},
    "conj": {
      "pres_ich": "ich singe",
      "pres_du": "du singst",
      "pres_er": "er singt",
      "praet": "sang",
      "part2": "gesungen",
      "aux": "haben"
    }
  },
  {
    "id": "situation_nf_1",
    "lemma": "Situation",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "Situation",
      "ko": "상황",
      "en": "situation",
      "es": "situación",
      "fr": "situation",
      "it": "situazione",
      "pt": "situação",
      "ja": "状況",
      "zh": "情况",
      "ru": "ситуация"
    },
    "examples": ["Das ist eine schwierige Situation."],
    "meta": {},
    "gender": "die",
    "plural": "Situationen"
  },
  {
    "id": "sitzen_v_1",
    "lemma": "sitzen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "basic", "body"],
    "meanings": {
      "de": "sitzen",
      "ko": "앉아 있다",
      "en": "sit",
      "es": "estar sentado",
      "fr": "être assis",
      "it": "sedere",
      "pt": "estar sentado",
      "ja": "座っている",
      "zh": "坐",
      "ru": "сидеть"
    },
    "examples": ["Wo sitzen Sie?"],
    "meta": {},
    "conj": {
      "pres_ich": "ich sitze",
      "pres_du": "du sitzt",
      "pres_er": "er sitzt",
      "praet": "saß",
      "part2": "gesessen",
      "aux": "haben"
    }
  },
  {
    "id": "so_adv_1",
    "lemma": "so",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "so",
      "ko": "그렇게",
      "en": "so",
      "es": "así",
      "fr": "ainsi",
      "it": "così",
      "pt": "assim",
      "ja": "そのように",
      "zh": "这样",
      "ru": "так"
    },
    "examples": ["Fahren Sie bitte nicht so schnell!"],
    "meta": {}
  },
  {
    "id": "sofa_nn_1",
    "lemma": "Sofa",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "housing", "furniture"],
    "meanings": {
      "de": "Sofa",
      "ko": "소파",
      "en": "sofa",
      "es": "sofá",
      "fr": "canapé",
      "it": "divano",
      "pt": "sofá",
      "ja": "ソファー",
      "zh": "沙发",
      "ru": "диван"
    },
    "examples": ["Das Sofa ist neu."],
    "meta": {},
    "gender": "das",
    "plural": "Sofas"
  },
  {
    "id": "sofort_adv_1",
    "lemma": "sofort",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "time", "basic"],
    "meanings": {
      "de": "sofort",
      "ko": "즉시",
      "en": "immediately",
      "es": "inmediatamente",
      "fr": "tout de suite",
      "it": "subito",
      "pt": "imediatamente",
      "ja": "すぐに",
      "zh": "立即",
      "ru": "немедленно"
    },
    "examples": ["Bitte kommen Sie sofort."],
    "meta": {}
  },
  {
    "id": "sohn_nm_1",
    "lemma": "Sohn",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "family"],
    "meanings": {
      "de": "Sohn",
      "ko": "아들",
      "en": "son",
      "es": "hijo",
      "fr": "fils",
      "it": "figlio",
      "pt": "filho",
      "ja": "息子",
      "zh": "儿子",
      "ru": "сын"
    },
    "examples": ["Das ist mein Sohn."],
    "meta": {},
    "gender": "der",
    "plural": "Söhne"
  },
  {
    "id": "sollen_v_1",
    "lemma": "sollen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "basic", "obligation"],
    "meanings": {
      "de": "sollen",
      "ko": "해야 하다",
      "en": "should",
      "es": "deber",
      "fr": "devoir",
      "it": "dovere",
      "pt": "dever",
      "ja": "すべきだ",
      "zh": "应该",
      "ru": "быть должным"
    },
    "examples": ["Soll ich das Fenster öffnen?"],
    "meta": {},
    "conj": {
      "pres_ich": "ich soll",
      "pres_du": "du sollst",
      "pres_er": "er soll",
      "praet": "sollte",
      "part2": "gesollt",
      "aux": "haben"
    }
  },
  {
    "id": "sonne_nf_1",
    "lemma": "Sonne",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "weather", "nature"],
    "meanings": {
      "de": "Sonne",
      "ko": "태양",
      "en": "sun",
      "es": "sol",
      "fr": "soleil",
      "it": "sole",
      "pt": "sol",
      "ja": "太陽",
      "zh": "太阳",
      "ru": "солнце"
    },
    "examples": ["Die Sonne scheint."],
    "meta": {},
    "gender": "die",
    "plural": ""
  },
  {
    "id": "spaet_adj_1",
    "lemma": "spät",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "time"],
    "meanings": {
      "de": "spät",
      "ko": "늦은",
      "en": "late",
      "es": "tarde",
      "fr": "tard",
      "it": "tardi",
      "pt": "tarde",
      "ja": "遅い",
      "zh": "晚",
      "ru": "поздно"
    },
    "examples": ["Es ist schon spät."],
    "meta": {}
  },
  {
    "id": "spaeter_adv_1",
    "lemma": "später",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "time"],
    "meanings": {
      "de": "später",
      "ko": "나중에",
      "en": "later",
      "es": "más tarde",
      "fr": "plus tard",
      "it": "più tardi",
      "pt": "mais tarde",
      "ja": "後で",
      "zh": "以后",
      "ru": "позже"
    },
    "examples": ["Das machen wir später."],
    "meta": {}
  },
  {
    "id": "spass_nm_1",
    "lemma": "Spaß",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "feeling", "leisure"],
    "meanings": {
      "de": "Spaß",
      "ko": "재미",
      "en": "fun",
      "es": "diversión",
      "fr": "plaisir",
      "it": "divertimento",
      "pt": "diversão",
      "ja": "楽しみ",
      "zh": "乐趣",
      "ru": "удовольствие"
    },
    "examples": ["Das macht Spaß."],
    "meta": {},
    "gender": "der",
    "plural": ""
  },
  {
    "id": "spazieren_gehen_v_1",
    "lemma": "spazieren gehen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "leisure", "movement"],
    "meanings": {
      "de": "spazieren gehen",
      "ko": "산책하다",
      "en": "go for a walk",
      "es": "pasear",
      "fr": "se promener",
      "it": "passeggiare",
      "pt": "passear",
      "ja": "散歩する",
      "zh": "散步",
      "ru": "гулять"
    },
    "examples": ["Wir gehen sonntags oft spazieren."],
    "meta": {},
    "conj": {
      "pres_ich": "ich gehe spazieren",
      "pres_du": "du gehst spazieren",
      "pres_er": "er geht spazieren",
      "praet": "ging spazieren",
      "part2": "spazieren gegangen",
      "aux": "sein"
    }
  },
  {
    "id": "speisekarte_nf_1",
    "lemma": "Speisekarte",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "restaurant", "food"],
    "meanings": {
      "de": "Speisekarte",
      "ko": "메뉴판",
      "en": "menu",
      "es": "carta",
      "fr": "carte",
      "it": "menu",
      "pt": "ementa",
      "ja": "メニュー",
      "zh": "菜单",
      "ru": "меню"
    },
    "examples": ["Bringen Sie mir bitte die Speisekarte."],
    "meta": {},
    "gender": "die",
    "plural": "Speisekarten"
  },
  {
    "id": "spielen_v_1",
    "lemma": "spielen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "leisure", "sport"],
    "meanings": {
      "de": "spielen",
      "ko": "놀다, 경기하다",
      "en": "play",
      "es": "jugar",
      "fr": "jouer",
      "it": "giocare",
      "pt": "brincar",
      "ja": "遊ぶ",
      "zh": "玩",
      "ru": "играть"
    },
    "examples": ["Die Kinder spielen draußen."],
    "meta": {},
    "conj": {
      "pres_ich": "ich spiele",
      "pres_du": "du spielst",
      "pres_er": "er spielt",
      "praet": "spielte",
      "part2": "gespielt",
      "aux": "haben"
    }
  },
  {
    "id": "sport_nm_1",
    "lemma": "Sport",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "leisure", "sport"],
    "meanings": {
      "de": "Sport",
      "ko": "스포츠",
      "en": "sport",
      "es": "deporte",
      "fr": "sport",
      "it": "sport",
      "pt": "desporto",
      "ja": "スポーツ",
      "zh": "运动",
      "ru": "спорт"
    },
    "examples": ["Ich mache viel Sport."],
    "meta": {},
    "gender": "der",
    "plural": ""
  },
  {
    "id": "sprache_nf_1",
    "lemma": "Sprache",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "education", "communication"],
    "meanings": {
      "de": "Sprache",
      "ko": "언어",
      "en": "language",
      "es": "idioma",
      "fr": "langue",
      "it": "lingua",
      "pt": "língua",
      "ja": "言語",
      "zh": "语言",
      "ru": "язык"
    },
    "examples": ["Welche Sprachen sprechen Sie?"],
    "meta": {},
    "gender": "die",
    "plural": "Sprachen"
  },
  {
    "id": "sprechen_v_1",
    "lemma": "sprechen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "communication"],
    "meanings": {
      "de": "sprechen",
      "ko": "말하다",
      "en": "speak",
      "es": "hablar",
      "fr": "parler",
      "it": "parlare",
      "pt": "falar",
      "ja": "話す",
      "zh": "说",
      "ru": "говорить"
    },
    "examples": ["Kann ich Herrn Klein sprechen?"],
    "meta": {},
    "conj": {
      "pres_ich": "ich spreche",
      "pres_du": "du sprichst",
      "pres_er": "er spricht",
      "praet": "sprach",
      "part2": "gesprochen",
      "aux": "haben"
    }
  },
  {
    "id": "stadt_nf_1",
    "lemma": "Stadt",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "location", "city"],
    "meanings": {
      "de": "Stadt",
      "ko": "도시",
      "en": "city",
      "es": "ciudad",
      "fr": "ville",
      "it": "città",
      "pt": "cidade",
      "ja": "都市",
      "zh": "城市",
      "ru": "город"
    },
    "examples": ["Heidelberg ist eine alte Stadt."],
    "meta": {},
    "gender": "die",
    "plural": "Städte"
  },
  {
    "id": "stadtplan_nm_1",
    "lemma": "Stadtplan",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "travel", "city"],
    "meanings": {
      "de": "Stadtplan",
      "ko": "시내 지도",
      "en": "city map",
      "es": "plano de la ciudad",
      "fr": "plan de la ville",
      "it": "pianta della città",
      "pt": "mapa da cidade",
      "ja": "市街図",
      "zh": "城市地图",
      "ru": "план города"
    },
    "examples": ["Haben Sie einen Stadtplan von München?"],
    "meta": {},
    "gender": "der",
    "plural": "Stadtpläne"
  },
  {
    "id": "standesamt_nn_1",
    "lemma": "Standesamt",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "official", "family"],
    "meanings": {
      "de": "Standesamt",
      "ko": "호적 등기소",
      "en": "registry office",
      "es": "registro civil",
      "fr": "bureau de l'état civil",
      "it": "ufficio di stato civile",
      "pt": "conservatória do registo civil",
      "ja": "戸籍役場",
      "zh": "户籍登记处",
      "ru": "ЗАГС"
    },
    "examples": ["Wir heiraten auf dem Standesamt."],
    "meta": {},
    "gender": "das",
    "plural": "Standesämter"
  },
  {
    "id": "stark_adj_1",
    "lemma": "stark",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "description"],
    "meanings": {
      "de": "stark",
      "ko": "강한",
      "en": "strong",
      "es": "fuerte",
      "fr": "fort",
      "it": "forte",
      "pt": "forte",
      "ja": "強い",
      "zh": "强",
      "ru": "сильный"
    },
    "examples": ["Der Kaffee ist sehr stark."],
    "meta": {}
  },
  {
    "id": "stehen_v_1",
    "lemma": "stehen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "location", "position"],
    "meanings": {
      "de": "stehen",
      "ko": "서 있다",
      "en": "stand",
      "es": "estar de pie",
      "fr": "être debout",
      "it": "stare in piedi",
      "pt": "estar de pé",
      "ja": "立っている",
      "zh": "站立",
      "ru": "стоять"
    },
    "examples": ["Der Bus steht an der Haltestelle."],
    "meta": {},
    "conj": {
      "pres_ich": "ich stehe",
      "pres_du": "du stehst",
      "pres_er": "er steht",
      "praet": "stand",
      "part2": "gestanden",
      "aux": "haben"
    }
  },
  {
    "id": "stelle_nf_1",
    "lemma": "Stelle",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "work", "location"],
    "meanings": {
      "de": "Stelle",
      "ko": "일자리, 장소",
      "en": "job, place",
      "es": "puesto, lugar",
      "fr": "place, endroit",
      "it": "posto, luogo",
      "pt": "lugar, emprego",
      "ja": "場所, 職",
      "zh": "职位",
      "ru": "место"
    },
    "examples": ["Ich habe eine neue Stelle."],
    "meta": {},
    "gender": "die",
    "plural": "Stellen"
  },
  {
    "id": "stellen_v_1",
    "lemma": "stellen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "action", "position"],
    "meanings": {
      "de": "stellen",
      "ko": "세워 놓다",
      "en": "put, place",
      "es": "poner",
      "fr": "mettre, poser",
      "it": "mettere",
      "pt": "pôr, colocar",
      "ja": "置く",
      "zh": "放置",
      "ru": "ставить"
    },
    "examples": ["Stell die Tasche bitte dorthin."],
    "meta": {},
    "conj": {
      "pres_ich": "ich stelle",
      "pres_du": "du stellst",
      "pres_er": "er stellt",
      "praet": "stellte",
      "part2": "gestellt",
      "aux": "haben"
    }
  },
  {
    "id": "stimmen_v_1",
    "lemma": "stimmen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "stimmen",
      "ko": "맞다",
      "en": "be correct",
      "es": "ser correcto",
      "fr": "être juste",
      "it": "essere giusto",
      "pt": "estar certo",
      "ja": "正しい",
      "zh": "对",
      "ru": "быть верным"
    },
    "examples": ["Das stimmt."],
    "meta": {},
    "conj": {
      "pres_ich": "ich stimme",
      "pres_du": "du stimmst",
      "pres_er": "er stimmt",
      "praet": "stimmte",
      "part2": "gestimmt",
      "aux": "haben"
    }
  },
  {
    "id": "stock_nm_1",
    "lemma": "Stock",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "housing", "location"],
    "meanings": {
      "de": "Stock",
      "ko": "층",
      "en": "floor",
      "es": "piso",
      "fr": "étage",
      "it": "piano",
      "pt": "andar",
      "ja": "階",
      "zh": "楼层",
      "ru": "этаж"
    },
    "examples": ["Unsere Wohnung liegt im ersten Stock."],
    "meta": {},
    "gender": "der",
    "plural": "Stockwerke"
  },
  {
    "id": "stoeren_v_1",
    "lemma": "stören",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "communication", "social"],
    "meanings": {
      "de": "stören",
      "ko": "방해하다",
      "en": "disturb",
      "es": "molestar",
      "fr": "déranger",
      "it": "disturbare",
      "pt": "incomodar",
      "ja": "邪魔する",
      "zh": "打扰",
      "ru": "мешать"
    },
    "examples": ["Störe ich?"],
    "meta": {},
    "conj": {
      "pres_ich": "ich störe",
      "pres_du": "du störst",
      "pres_er": "er stört",
      "praet": "störte",
      "part2": "gestört",
      "aux": "haben"
    }
  },
  {
    "id": "strasse_nf_1",
    "lemma": "Straße",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "city", "location"],
    "meanings": {
      "de": "Straße",
      "ko": "거리",
      "en": "street",
      "es": "calle",
      "fr": "rue",
      "it": "strada",
      "pt": "rua",
      "ja": "通り",
      "zh": "街道",
      "ru": "улица"
    },
    "examples": ["In welcher Straße wohnen Sie?"],
    "meta": {},
    "gender": "die",
    "plural": "Straßen"
  },
  {
    "id": "strassenbahn_nf_1",
    "lemma": "Straßenbahn",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "transport", "city"],
    "meanings": {
      "de": "Straßenbahn",
      "ko": "전차",
      "en": "tram",
      "es": "tranvía",
      "fr": "tramway",
      "it": "tram",
      "pt": "elétrico",
      "ja": "路面電車",
      "zh": "有轨电车",
      "ru": "трамвай"
    },
    "examples": ["Wir fahren mit der Straßenbahn."],
    "meta": {},
    "gender": "die",
    "plural": "Straßenbahnen"
  },
  {
    "id": "stueck_nn_1",
    "lemma": "Stück",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "quantity", "food"],
    "meanings": {
      "de": "Stück",
      "ko": "조각",
      "en": "piece",
      "es": "pedazo",
      "fr": "morceau",
      "it": "pezzo",
      "pt": "pedaço",
      "ja": "個",
      "zh": "块",
      "ru": "кусок"
    },
    "examples": ["Möchten Sie noch ein Stück Kuchen?"],
    "meta": {},
    "gender": "das",
    "plural": "Stücke"
  },
  {
    "id": "student_nm_1",
    "lemma": "Student",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "education", "people"],
    "meanings": {
      "de": "Student",
      "ko": "대학생 (남)",
      "en": "student (male)",
      "es": "estudiante",
      "fr": "étudiant",
      "it": "studente",
      "pt": "estudante",
      "ja": "大学生",
      "zh": "大学生",
      "ru": "студент"
    },
    "examples": ["Ich bin Student."],
    "meta": {},
    "gender": "der",
    "plural": "Studenten"
  },
  {
    "id": "studentin_nf_1",
    "lemma": "Studentin",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "education", "people"],
    "meanings": {
      "de": "Studentin",
      "ko": "대학생 (여)",
      "en": "student (female)",
      "es": "estudiante",
      "fr": "étudiante",
      "it": "studentessa",
      "pt": "estudante",
      "ja": "女子学生",
      "zh": "女大学生",
      "ru": "студентка"
    },
    "examples": ["Sie ist Studentin."],
    "meta": {},
    "gender": "die",
    "plural": "Studentinnen"
  },
  {
    "id": "studieren_v_1",
    "lemma": "studieren",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "education"],
    "meanings": {
      "de": "studieren",
      "ko": "대학에 다니다, 전공하다",
      "en": "study",
      "es": "estudiar",
      "fr": "étudier",
      "it": "studiare",
      "pt": "estudar",
      "ja": "専攻する",
      "zh": "上大学",
      "ru": "учиться (в вузе)"
    },
    "examples": ["Ich studiere in Mainz."],
    "meta": {},
    "conj": {
      "pres_ich": "ich studiere",
      "pres_du": "du studierst",
      "pres_er": "er studiert",
      "praet": "studierte",
      "part2": "studiert",
      "aux": "haben"
    }
  },
  {
    "id": "studium_nn_1",
    "lemma": "Studium",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "education"],
    "meanings": {
      "de": "Studium",
      "ko": "대학 학업",
      "en": "studies",
      "es": "estudios",
      "fr": "études",
      "it": "studi",
      "pt": "estudos",
      "ja": "大学での勉強",
      "zh": "学业",
      "ru": "учеба"
    },
    "examples": ["Das Studium dauert drei Jahre."],
    "meta": {},
    "gender": "das",
    "plural": "Studien"
  },
  {
    "id": "stuhl_nm_1",
    "lemma": "Stuhl",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "furniture"],
    "meanings": {
      "de": "Stuhl",
      "ko": "의자",
      "en": "chair",
      "es": "silla",
      "fr": "chaise",
      "it": "sedia",
      "pt": "cadeira",
      "ja": "椅子",
      "zh": "椅子",
      "ru": "стул"
    },
    "examples": ["Ist der Stuhl frei?"],
    "meta": {},
    "gender": "der",
    "plural": "Stühle"
  },
  {
    "id": "suchen_v_1",
    "lemma": "suchen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "daily", "basic"],
    "meanings": {
      "de": "suchen",
      "ko": "찾다",
      "en": "search, look for",
      "es": "buscar",
      "fr": "chercher",
      "it": "cercare",
      "pt": "procurar",
      "ja": "探す",
      "zh": "寻找",
      "ru": "искать"
    },
    "examples": ["Ich suche meine Brille."],
    "meta": {},
    "conj": {
      "pres_ich": "ich suche",
      "pres_du": "du suchst",
      "pres_er": "er sucht",
      "praet": "suchte",
      "part2": "gesucht",
      "aux": "haben"
    }
  },
  {
    "id": "supermarkt_nm_1",
    "lemma": "Supermarkt",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "shopping", "city"],
    "meanings": {
      "de": "Supermarkt",
      "ko": "슈퍼마켓",
      "en": "supermarket",
      "es": "supermercado",
      "fr": "supermarché",
      "it": "supermercato",
      "pt": "supermercado",
      "ja": "スーパー",
      "zh": "超市",
      "ru": "супермаркет"
    },
    "examples": ["Im Supermarkt ist alles billiger."],
    "meta": {},
    "gender": "der",
    "plural": "Supermärkte"
  },
  {
    "id": "suppe_nf_1",
    "lemma": "Suppe",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "food"],
    "meanings": {
      "de": "Suppe",
      "ko": "수프",
      "en": "soup",
      "es": "sopa",
      "fr": "soupe",
      "it": "zuppa",
      "pt": "sopa",
      "ja": "スープ",
      "zh": "汤",
      "ru": "суп"
    },
    "examples": ["Schmeckt dir die Suppe?"],
    "meta": {},
    "gender": "die",
    "plural": "Suppen"
  },
  {
    "id": "tag_nm_1",
    "lemma": "Tag",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "time", "basic"],
    "meanings": {
      "de": "Tag",
      "ko": "날, 낮",
      "en": "day",
      "es": "día",
      "fr": "jour",
      "it": "giorno",
      "pt": "dia",
      "ja": "日",
      "zh": "天",
      "ru": "день"
    },
    "examples": ["Guten Tag!"],
    "meta": {},
    "gender": "der",
    "plural": "Tage"
  },
  {
    "id": "tanken_v_1",
    "lemma": "tanken",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "transport", "travel"],
    "meanings": {
      "de": "tanken",
      "ko": "주유하다",
      "en": "refuel",
      "es": "repostar",
      "fr": "faire le plein",
      "it": "fare benzina",
      "pt": "abastecer",
      "ja": "給油する",
      "zh": "加油",
      "ru": "заправляться"
    },
    "examples": ["Ich muss tanken."],
    "meta": {},
    "conj": {
      "pres_ich": "ich tanke",
      "pres_du": "du tankst",
      "pres_er": "er tankt",
      "praet": "tankte",
      "part2": "getankt",
      "aux": "haben"
    }
  },
  {
    "id": "tante_nf_1",
    "lemma": "Tante",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "family"],
    "meanings": {
      "de": "Tante",
      "ko": "이모, 고모",
      "en": "aunt",
      "es": "tía",
      "fr": "tante",
      "it": "zia",
      "pt": "tia",
      "ja": "おば",
      "zh": "阿姨",
      "ru": "тетя"
    },
    "examples": ["Meine Tante wohnt in Berlin."],
    "meta": {},
    "gender": "die",
    "plural": "Tanten"
  },
  {
    "id": "tanzen_v_1",
    "lemma": "tanzen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "leisure", "hobby"],
    "meanings": {
      "de": "tanzen",
      "ko": "춤추다",
      "en": "dance",
      "es": "bailar",
      "fr": "danser",
      "it": "ballare",
      "pt": "dançar",
      "ja": "踊る",
      "zh": "跳舞",
      "ru": "танцевать"
    },
    "examples": ["Tanzen Sie gern?"],
    "meta": {},
    "conj": {
      "pres_ich": "ich tanze",
      "pres_du": "du tanzt",
      "pres_er": "er tanzt",
      "praet": "tanzte",
      "part2": "getanzt",
      "aux": "haben"
    }
  },
  {
    "id": "tasche_nf_1",
    "lemma": "Tasche",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "daily", "accessories"],
    "meanings": {
      "de": "Tasche",
      "ko": "가방, 주머니",
      "en": "bag, pocket",
      "es": "bolsa, bolsillo",
      "fr": "sac, poche",
      "it": "borsa, tasca",
      "pt": "mala, bolso",
      "ja": "鞄, ポケット",
      "zh": "包",
      "ru": "сумка, карман"
    },
    "examples": ["Ich habe die Schlüssel in der Tasche."],
    "meta": {},
    "gender": "die",
    "plural": "Taschen"
  },
  {
    "id": "taxi_nn_1",
    "lemma": "Taxi",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "transport", "city"],
    "meanings": {
      "de": "Taxi",
      "ko": "택시",
      "en": "taxi",
      "es": "taxi",
      "fr": "taxi",
      "it": "taxi",
      "pt": "táxi",
      "ja": "タクシー",
      "zh": "出租车",
      "ru": "такси"
    },
    "examples": ["Bitte rufen Sie mir ein Taxi."],
    "meta": {},
    "gender": "das",
    "plural": "Taxis"
  },
  {
    "id": "tee_nm_1",
    "lemma": "Tee",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "drink"],
    "meanings": {
      "de": "Tee",
      "ko": "차",
      "en": "tea",
      "es": "té",
      "fr": "thé",
      "it": "tè",
      "pt": "chá",
      "ja": "お茶",
      "zh": "茶",
      "ru": "чай"
    },
    "examples": ["Ich trinke morgens immer Tee."],
    "meta": {},
    "gender": "der",
    "plural": "Tees"
  },
  {
    "id": "teil_nm_1",
    "lemma": "Teil",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "Teil",
      "ko": "부분",
      "en": "part",
      "es": "parte",
      "fr": "partie",
      "it": "parte",
      "pt": "parte",
      "ja": "部分",
      "zh": "部分",
      "ru": "часть"
    },
    "examples": ["Lies bitte auch den zweiten Teil."],
    "meta": {},
    "gender": "der",
    "plural": "Teile"
  },
  {
    "id": "telefonieren_v_1",
    "lemma": "telefonieren",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "communication"],
    "meanings": {
      "de": "telefonieren",
      "ko": "전화하다",
      "en": "call",
      "es": "hablar por teléfono",
      "fr": "téléphoner",
      "it": "telefonare",
      "pt": "telefonar",
      "ja": "電話する",
      "zh": "打电话",
      "ru": "звонить по телефону"
    },
    "examples": ["Darf ich mal telefonieren?"],
    "meta": {},
    "conj": {
      "pres_ich": "ich telefoniere",
      "pres_du": "du telefonierst",
      "pres_er": "er telefoniert",
      "praet": "telefonierte",
      "part2": "telefoniert",
      "aux": "haben"
    }
  },
  {
    "id": "telefon_nn_1",
    "lemma": "Telefon",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "communication", "technology"],
    "meanings": {
      "de": "Telefon",
      "ko": "전화기",
      "en": "telephone",
      "es": "teléfono",
      "fr": "téléphone",
      "it": "telefono",
      "pt": "telefone",
      "ja": "電話",
      "zh": "电话",
      "ru": "телефон"
    },
    "examples": ["Haben Sie Telefon?"],
    "meta": {},
    "gender": "das",
    "plural": "Telefone"
  },
  {
    "id": "termin_nm_1",
    "lemma": "Termin",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "time", "work"],
    "meanings": {
      "de": "Termin",
      "ko": "약속, 일정",
      "en": "appointment",
      "es": "cita",
      "fr": "rendez-vous",
      "it": "appuntamento",
      "pt": "marcação",
      "ja": "予約",
      "zh": "预约",
      "ru": "встреча"
    },
    "examples": ["Ich habe heute einen Termin bei meiner Ärztin."],
    "meta": {},
    "gender": "der",
    "plural": "Termine"
  },
  {
    "id": "teuer_adj_1",
    "lemma": "teuer",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "shopping", "money"],
    "meanings": {
      "de": "teuer",
      "ko": "비싼",
      "en": "expensive",
      "es": "caro",
      "fr": "cher",
      "it": "caro",
      "pt": "caro",
      "ja": "高い",
      "zh": "贵",
      "ru": "дорогой"
    },
    "examples": ["Das ist mir zu teuer."],
    "meta": {}
  },
  {
    "id": "text_nm_1",
    "lemma": "Text",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "education", "media"],
    "meanings": {
      "de": "Text",
      "ko": "텍스트",
      "en": "text",
      "es": "texto",
      "fr": "texte",
      "it": "testo",
      "pt": "texto",
      "ja": "テキスト",
      "zh": "课文",
      "ru": "текст"
    },
    "examples": ["Lesen Sie den Text."],
    "meta": {},
    "gender": "der",
    "plural": "Texte"
  },
  {
    "id": "thema_nn_1",
    "lemma": "Thema",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "education", "communication"],
    "meanings": {
      "de": "Thema",
      "ko": "주제",
      "en": "topic",
      "es": "tema",
      "fr": "thème",
      "it": "tema",
      "pt": "tema",
      "ja": "テーマ",
      "zh": "题目",
      "ru": "тема"
    },
    "examples": ["Wir sprechen heute über das Thema Essen."],
    "meta": {},
    "gender": "das",
    "plural": "Themen"
  },
  {
    "id": "ticket_nn_1",
    "lemma": "Ticket",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "travel", "transport"],
    "meanings": {
      "de": "Ticket",
      "ko": "표",
      "en": "ticket",
      "es": "billete",
      "fr": "billet",
      "it": "biglietto",
      "pt": "bilhete",
      "ja": "切符",
      "zh": "票",
      "ru": "билет"
    },
    "examples": ["Wie viel kostet das Ticket?"],
    "meta": {},
    "gender": "das",
    "plural": "Tickets"
  },
  {
    "id": "tisch_nm_1",
    "lemma": "Tisch",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "furniture", "housing"],
    "meanings": {
      "de": "Tisch",
      "ko": "책상",
      "en": "table",
      "es": "mesa",
      "fr": "table",
      "it": "tavolo",
      "pt": "mesa",
      "ja": "机",
      "zh": "桌子",
      "ru": "стол"
    },
    "examples": ["Das Essen steht auf dem Tisch."],
    "meta": {},
    "gender": "der",
    "plural": "Tische"
  },
  {
    "id": "tochter_nf_1",
    "lemma": "Tochter",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "family"],
    "meanings": {
      "de": "Tochter",
      "ko": "딸",
      "en": "daughter",
      "es": "hija",
      "fr": "fille",
      "it": "figlia",
      "pt": "filha",
      "ja": "娘",
      "zh": "女儿",
      "ru": "дочь"
    },
    "examples": ["Das ist meine Tochter."],
    "meta": {},
    "gender": "die",
    "plural": "Töchter"
  },
  {
    "id": "toilette_nf_1",
    "lemma": "Toilette",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "housing", "public_place"],
    "meanings": {
      "de": "Toilette",
      "ko": "화장실",
      "en": "toilet",
      "es": "servicio",
      "fr": "toilettes",
      "it": "gabinetto",
      "pt": "casa de banho",
      "ja": "トイレ",
      "zh": "厕所",
      "ru": "туалет"
    },
    "examples": ["Wo ist die Toilette?"],
    "meta": {},
    "gender": "die",
    "plural": "Toiletten"
  },
  {
    "id": "tomate_nf_1",
    "lemma": "Tomate",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "food"],
    "meanings": {
      "de": "Tomate",
      "ko": "토마토",
      "en": "tomato",
      "es": "tomate",
      "fr": "tomate",
      "it": "pomodoro",
      "pt": "tomate",
      "ja": "トマト",
      "zh": "西红柿",
      "ru": "помидор"
    },
    "examples": ["Die Tomate ist rot."],
    "meta": {},
    "gender": "die",
    "plural": "Tomaten"
  },
  {
    "id": "tot_adj_1",
    "lemma": "tot",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "life", "status"],
    "meanings": {
      "de": "tot",
      "ko": "죽은",
      "en": "dead",
      "es": "muerto",
      "fr": "mort",
      "it": "morto",
      "pt": "morto",
      "ja": "死んだ",
      "zh": "死",
      "ru": "мертвый"
    },
    "examples": ["Sein Großvater ist schon lange tot."],
    "meta": {}
  },
  {
    "id": "total_adj_1",
    "lemma": "total",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "degree", "basic"],
    "meanings": {
      "de": "total",
      "ko": "완전히",
      "en": "total",
      "es": "total",
      "fr": "total",
      "it": "totale",
      "pt": "total",
      "ja": "全く",
      "zh": "完全",
      "ru": "полный"
    },
    "examples": ["Das ist total falsch."],
    "meta": {}
  },
  {
    "id": "treppe_nf_1",
    "lemma": "Treppe",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "housing", "building"],
    "meanings": {
      "de": "Treppe",
      "ko": "계단",
      "en": "stairs",
      "es": "escalera",
      "fr": "escalier",
      "it": "scala",
      "pt": "escada",
      "ja": "階段",
      "zh": "楼梯",
      "ru": "лестница"
    },
    "examples": ["Die Treppe ist steil."],
    "meta": {},
    "gender": "die",
    "plural": "Treppen"
  },
  {
    "id": "trinken_v_1",
    "lemma": "trinken",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "drink", "daily"],
    "meanings": {
      "de": "trinken",
      "ko": "마시다",
      "en": "drink",
      "es": "beber",
      "fr": "boire",
      "it": "bere",
      "pt": "beber",
      "ja": "飲む",
      "zh": "喝",
      "ru": "пить"
    },
    "examples": ["Möchtest du etwas trinken?"],
    "meta": {},
    "conj": {
      "pres_ich": "ich trinke",
      "pres_du": "du trinkst",
      "pres_er": "er trinkt",
      "praet": "trank",
      "part2": "getrunken",
      "aux": "haben"
    }
  },
  {
    "id": "tschuess_int_1",
    "lemma": "Tschüss",
    "pos": "Interjektion",
    "cefr": "A1",
    "tags": ["exam", "communication", "greeting"],
    "meanings": {
      "de": "Tschüss",
      "ko": "안녕히 가세요",
      "en": "bye",
      "es": "adiós",
      "fr": "salut",
      "it": "ciao",
      "pt": "tchau",
      "ja": "バイバイ",
      "zh": "再见",
      "ru": "пока"
    },
    "examples": ["Tschüss, bis morgen!"],
    "meta": {}
  },
  {
    "id": "tun_v_1",
    "lemma": "tun",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "basic", "activity"],
    "meanings": {
      "de": "tun",
      "ko": "하다",
      "en": "do",
      "es": "hacer",
      "fr": "faire",
      "it": "fare",
      "pt": "fazer",
      "ja": "する",
      "zh": "做",
      "ru": "делать"
    },
    "examples": ["Ich habe heute viel zu tun."],
    "meta": {},
    "conj": {
      "pres_ich": "ich tue",
      "pres_du": "du tust",
      "pres_er": "er tut",
      "praet": "tat",
      "part2": "getan",
      "aux": "haben"
    }
  },
  {
    "id": "ueber_prep_1",
    "lemma": "über",
    "pos": "Präposition",
    "cefr": "A1",
    "tags": ["exam", "location", "topic"],
    "meanings": {
      "de": "über",
      "ko": "위에",
      "en": "over, about",
      "es": "sobre",
      "fr": "sur, au-dessus de",
      "it": "sopra",
      "pt": "sobre",
      "ja": "～の上に",
      "zh": "在上方",
      "ru": "над"
    },
    "examples": ["Die Lampe hängt über dem Tisch.", "Wir sprechen über das Wetter."],
    "meta": {}
  },
  {
    "id": "ueberall_adv_1",
    "lemma": "überall",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "location"],
    "meanings": {
      "de": "überall",
      "ko": "어디에나",
      "en": "everywhere",
      "es": "en todas partes",
      "fr": "partout",
      "it": "dappertutto",
      "pt": "em toda a parte",
      "ja": "至る所に",
      "zh": "到处",
      "ru": "везде"
    },
    "examples": ["Ich habe überall gesucht."],
    "meta": {}
  },
  {
    "id": "uebermorgen_adv_1",
    "lemma": "übermorgen",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "time"],
    "meanings": {
      "de": "übermorgen",
      "ko": "모레",
      "en": "day after tomorrow",
      "es": "pasado mañana",
      "fr": "après-demain",
      "it": "dopodomani",
      "pt": "depois de amanhã",
      "ja": "明後日",
      "zh": "后天",
      "ru": "послезавтра"
    },
    "examples": ["Ich komme übermorgen."],
    "meta": {}
  },
  {
    "id": "uebernachten_v_1",
    "lemma": "übernachten",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "travel", "housing"],
    "meanings": {
      "de": "übernachten",
      "ko": "숙박하다",
      "en": "stay overnight",
      "es": "pernoctar",
      "fr": "passer la nuit",
      "it": "pernottare",
      "pt": "pernoitar",
      "ja": "泊まる",
      "zh": "过夜",
      "ru": "ночевать"
    },
    "examples": ["Wir haben im Hotel übernachtet."],
    "meta": {},
    "conj": {
      "pres_ich": "ich übernachte",
      "pres_du": "du übernachtest",
      "pres_er": "er übernachtet",
      "praet": "übernachtete",
      "part2": "übernachtet",
      "aux": "haben"
    }
  },
  {
    "id": "ueberweisung_nf_1",
    "lemma": "Überweisung",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "finance", "business"],
    "meanings": {
      "de": "Überweisung",
      "ko": "이체",
      "en": "transfer",
      "es": "transferencia",
      "fr": "virement",
      "it": "bonifico",
      "pt": "transferência",
      "ja": "振込",
      "zh": "转账",
      "ru": "перевод"
    },
    "examples": ["Sie können per Überweisung bezahlen."],
    "meta": {},
    "gender": "die",
    "plural": "Überweisungen"
  },
  {
    "id": "uhr_nf_1",
    "lemma": "Uhr",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "time", "object"],
    "meanings": {
      "de": "Uhr",
      "ko": "시계",
      "en": "clock",
      "es": "reloj",
      "fr": "montre",
      "it": "orologio",
      "pt": "relógio",
      "ja": "時計",
      "zh": "钟",
      "ru": "часы"
    },
    "examples": ["Meine Uhr ist kaputt.", "Es ist vier Uhr."],
    "meta": {},
    "gender": "die",
    "plural": "Uhren"
  },
  {
    "id": "um_prep_1",
    "lemma": "um",
    "pos": "Präposition",
    "cefr": "A1",
    "tags": ["exam", "time", "location"],
    "meanings": {
      "de": "um",
      "ko": "에, 주위에",
      "en": "at, around",
      "es": "a, alrededor de",
      "fr": "à, autour de",
      "it": "alle, intorno a",
      "pt": "às, à volta de",
      "ja": "～時に, ～の周りに",
      "zh": "在, 围绕",
      "ru": "в, вокруг"
    },
    "examples": ["Der Zug kommt um 10 Uhr.", "Wir gehen um das Haus."],
    "meta": {}
  },
  {
    "id": "umsteigen_v_1",
    "lemma": "umsteigen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "transport", "travel"],
    "meanings": {
      "de": "umsteigen",
      "ko": "갈아타다",
      "en": "change trains",
      "es": "hacer trasbordo",
      "fr": "changer",
      "it": "cambiare",
      "pt": "mudar de",
      "ja": "乗り換える",
      "zh": "换乘",
      "ru": "делать пересадку"
    },
    "examples": ["Sie müssen in München umsteigen."],
    "meta": {},
    "conj": {
      "pres_ich": "ich steige um",
      "pres_du": "du steigst um",
      "pres_er": "er steigt um",
      "praet": "stieg um",
      "part2": "umgestiegen",
      "aux": "sein"
    }
  },
  {
    "id": "umziehen_v_1",
    "lemma": "umziehen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "housing", "life"],
    "meanings": {
      "de": "umziehen",
      "ko": "이사하다",
      "en": "move",
      "es": "mudarse",
      "fr": "déménager",
      "it": "traslocare",
      "pt": "mudar-se",
      "ja": "引っ越す",
      "zh": "搬家",
      "ru": "переезжать"
    },
    "examples": ["Wir sind letzten Monat umgezogen."],
    "meta": {},
    "conj": {
      "pres_ich": "ich ziehe um",
      "pres_du": "du ziehst um",
      "pres_er": "er zieht um",
      "praet": "zog um",
      "part2": "umgezogen",
      "aux": "sein"
    }
  },
  {
    "id": "und_konj_1",
    "lemma": "und",
    "pos": "Konjunktion",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "und",
      "ko": "그리고",
      "en": "and",
      "es": "y",
      "fr": "et",
      "it": "e",
      "pt": "e",
      "ja": "そして",
      "zh": "和",
      "ru": "и"
    },
    "examples": ["Ich habe einen Bruder und eine Schwester."],
    "meta": {}
  },
  {
    "id": "unterricht_nm_1",
    "lemma": "Unterricht",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "education", "school"],
    "meanings": {
      "de": "Unterricht",
      "ko": "수업",
      "en": "lesson",
      "es": "clase",
      "fr": "cours",
      "it": "lezione",
      "pt": "aula",
      "ja": "授業",
      "zh": "课",
      "ru": "занятие"
    },
    "examples": ["Der Unterricht beginnt um 8 Uhr."],
    "meta": {},
    "gender": "der",
    "plural": ""
  },
  {
    "id": "unterschreiben_v_1",
    "lemma": "unterschreiben",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "official", "work"],
    "meanings": {
      "de": "unterschreiben",
      "ko": "서명하다",
      "en": "sign",
      "es": "firmar",
      "fr": "signer",
      "it": "firmare",
      "pt": "assinar",
      "ja": "署名する",
      "zh": "签名",
      "ru": "подписывать"
    },
    "examples": ["Bitte unterschreiben Sie hier."],
    "meta": {},
    "conj": {
      "pres_ich": "ich unterschreibe",
      "pres_du": "du unterschreibst",
      "pres_er": "er unterschreibt",
      "praet": "unterschrieb",
      "part2": "unterschrieben",
      "aux": "haben"
    }
  },
  {
    "id": "unterschrift_nf_1",
    "lemma": "Unterschrift",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "official", "work"],
    "meanings": {
      "de": "Unterschrift",
      "ko": "서명",
      "en": "signature",
      "es": "firma",
      "fr": "signature",
      "it": "firma",
      "pt": "assinatura",
      "ja": "署名",
      "zh": "签名",
      "ru": "подпись"
    },
    "examples": ["Hier fehlt noch Ihre Unterschrift."],
    "meta": {},
    "gender": "die",
    "plural": "Unterschriften"
  },
  {
    "id": "untersuchung_nf_1",
    "lemma": "Untersuchung",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "health", "medical"],
    "meanings": {
      "de": "Untersuchung",
      "ko": "검사",
      "en": "examination",
      "es": "examen",
      "fr": "examen",
      "it": "visita",
      "pt": "exame",
      "ja": "診察",
      "zh": "检查",
      "ru": "обследование"
    },
    "examples": ["Die Untersuchung dauert nur zehn Minuten."],
    "meta": {},
    "gender": "die",
    "plural": "Untersuchungen"
  },
  {
    "id": "urlaub_nm_1",
    "lemma": "Urlaub",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "leisure", "travel"],
    "meanings": {
      "de": "Urlaub",
      "ko": "휴가",
      "en": "vacation",
      "es": "vacaciones",
      "fr": "vacances",
      "it": "vacanza",
      "pt": "férias",
      "ja": "休暇",
      "zh": "休假",
      "ru": "отпуск"
    },
    "examples": ["Ich habe drei Wochen Urlaub."],
    "meta": {},
    "gender": "der",
    "plural": "Urlaube"
  },
  {
    "id": "vater_nm_1",
    "lemma": "Vater",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "family"],
    "meanings": {
      "de": "Vater",
      "ko": "아버지",
      "en": "father",
      "es": "padre",
      "fr": "père",
      "it": "padre",
      "pt": "pai",
      "ja": "父",
      "zh": "父亲",
      "ru": "отец"
    },
    "examples": ["Mein Vater ist Arzt."],
    "meta": {},
    "gender": "der",
    "plural": "Väter"
  },
  {
    "id": "verboten_adj_1",
    "lemma": "verboten",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "rules", "society"],
    "meanings": {
      "de": "verboten",
      "ko": "금지된",
      "en": "forbidden",
      "es": "prohibido",
      "fr": "interdit",
      "it": "vietato",
      "pt": "proibido",
      "ja": "禁止されている",
      "zh": "禁止",
      "ru": "запрещено"
    },
    "examples": ["Rauchen ist hier verboten."],
    "meta": {}
  },
  {
    "id": "verdienen_v_1",
    "lemma": "verdienen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "work", "money"],
    "meanings": {
      "de": "verdienen",
      "ko": "벌다",
      "en": "earn",
      "es": "ganar",
      "fr": "gagner",
      "it": "guadagnare",
      "pt": "ganhar",
      "ja": "稼ぐ",
      "zh": "挣",
      "ru": "зарабатывать"
    },
    "examples": ["Er verdient viel Geld."],
    "meta": {},
    "conj": {
      "pres_ich": "ich verdiene",
      "pres_du": "du verdienst",
      "pres_er": "er verdient",
      "praet": "verdiente",
      "part2": "verdient",
      "aux": "haben"
    }
  },
  {
    "id": "verein_nm_1",
    "lemma": "Verein",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "society", "leisure"],
    "meanings": {
      "de": "Verein",
      "ko": "클럽, 동호회",
      "en": "club",
      "es": "club",
      "fr": "association",
      "it": "associazione",
      "pt": "clube",
      "ja": "クラブ",
      "zh": "协会",
      "ru": "клуб"
    },
    "examples": ["Ich bin im Sportverein."],
    "meta": {},
    "gender": "der",
    "plural": "Vereine"
  },
  {
    "id": "verheiratet_adj_1",
    "lemma": "verheiratet",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "family", "personal_info"],
    "meanings": {
      "de": "verheiratet",
      "ko": "기혼의",
      "en": "married",
      "es": "casado",
      "fr": "marié",
      "it": "sposato",
      "pt": "casado",
      "ja": "既婚の",
      "zh": "已婚",
      "ru": "женатый"
    },
    "examples": ["Ich bin verheiratet."],
    "meta": {}
  },
  {
    "id": "verkaufen_v_1",
    "lemma": "verkaufen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "shopping", "business"],
    "meanings": {
      "de": "verkaufen",
      "ko": "팔다",
      "en": "sell",
      "es": "vender",
      "fr": "vendre",
      "it": "vendere",
      "pt": "vender",
      "ja": "売る",
      "zh": "卖",
      "ru": "продавать"
    },
    "examples": ["Ich verkaufe mein Auto."],
    "meta": {},
    "conj": {
      "pres_ich": "ich verkaufe",
      "pres_du": "du verkaufst",
      "pres_er": "er verkauft",
      "praet": "verkaufte",
      "part2": "verkauft",
      "aux": "haben"
    }
  },
  {
    "id": "verkaeufer_nm_1",
    "lemma": "Verkäufer",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "work", "shopping"],
    "meanings": {
      "de": "Verkäufer",
      "ko": "판매원",
      "en": "salesperson",
      "es": "vendedor",
      "fr": "vendeur",
      "it": "commesso",
      "pt": "vendedor",
      "ja": "店員",
      "zh": "售货员",
      "ru": "продавец"
    },
    "examples": ["Der Verkäufer ist sehr nett."],
    "meta": {},
    "gender": "der",
    "plural": "Verkäufer"
  },
  {
    "id": "vermieten_v_1",
    "lemma": "vermieten",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "housing", "business"],
    "meanings": {
      "de": "vermieten",
      "ko": "임대하다",
      "en": "rent out",
      "es": "alquilar",
      "fr": "louer",
      "it": "affittare",
      "pt": "alugar",
      "ja": "貸す",
      "zh": "出租",
      "ru": "сдавать в аренду"
    },
    "examples": ["Wir vermieten ein Zimmer."],
    "meta": {},
    "conj": {
      "pres_ich": "ich vermiete",
      "pres_du": "du vermietest",
      "pres_er": "er vermietet",
      "praet": "vermietete",
      "part2": "vermietet",
      "aux": "haben"
    }
  },
  {
    "id": "vermieter_nm_1",
    "lemma": "Vermieter",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "housing"],
    "meanings": {
      "de": "Vermieter",
      "ko": "집주인",
      "en": "landlord",
      "es": "casero",
      "fr": "propriétaire",
      "it": "padrone di casa",
      "pt": "senhorio",
      "ja": "大家",
      "zh": "房东",
      "ru": "арендодатель"
    },
    "examples": ["Unser Vermieter ist sehr freundlich."],
    "meta": {},
    "gender": "der",
    "plural": "Vermieter"
  },
  {
    "id": "verstehen_v_1",
    "lemma": "verstehen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "communication", "basic"],
    "meanings": {
      "de": "verstehen",
      "ko": "이해하다",
      "en": "understand",
      "es": "entender",
      "fr": "comprendre",
      "it": "capire",
      "pt": "compreender",
      "ja": "理解する",
      "zh": "懂",
      "ru": "понимать"
    },
    "examples": ["Ich verstehe dich nicht."],
    "meta": {},
    "conj": {
      "pres_ich": "ich verstehe",
      "pres_du": "du verstehst",
      "pres_er": "er versteht",
      "praet": "verstand",
      "part2": "verstanden",
      "aux": "haben"
    }
  },
  {
    "id": "verwandte_nx_1",
    "lemma": "Verwandte",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "family"],
    "meanings": {
      "de": "Verwandte",
      "ko": "친척",
      "en": "relative",
      "es": "pariente",
      "fr": "parent",
      "it": "parente",
      "pt": "parente",
      "ja": "親戚",
      "zh": "亲戚",
      "ru": "родственник"
    },
    "examples": ["Wir besuchen unsere Verwandten."],
    "meta": {},
    "gender": "",
    "plural": "Verwandte"
  },
  {
    "id": "viel_pron_1",
    "lemma": "viel",
    "pos": "Pronomen",
    "cefr": "A1",
    "tags": ["exam", "quantity", "basic"],
    "meanings": {
      "de": "viel",
      "ko": "많은",
      "en": "much, a lot",
      "es": "mucho",
      "fr": "beaucoup",
      "it": "molto",
      "pt": "muito",
      "ja": "たくさんの",
      "zh": "多",
      "ru": "много"
    },
    "examples": ["Ich habe viel Arbeit."],
    "meta": {}
  },
  {
    "id": "vielleicht_adv_1",
    "lemma": "vielleicht",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "basic", "probability"],
    "meanings": {
      "de": "vielleicht",
      "ko": "아마도",
      "en": "maybe",
      "es": "quizás",
      "fr": "peut-être",
      "it": "forse",
      "pt": "talvez",
      "ja": "たぶん",
      "zh": "也许",
      "ru": "может быть"
    },
    "examples": ["Vielleicht komme ich morgen."],
    "meta": {}
  },
  {
    "id": "von_prep_1",
    "lemma": "von",
    "pos": "Präposition",
    "cefr": "A1",
    "tags": ["exam", "basic", "origin"],
    "meanings": {
      "de": "von",
      "ko": "의, 로부터",
      "en": "of, from",
      "es": "de",
      "fr": "de",
      "it": "di, da",
      "pt": "de",
      "ja": "～の, ～から",
      "zh": "从",
      "ru": "от, из"
    },
    "examples": ["Das Auto von meinem Bruder."],
    "meta": {}
  },
  {
    "id": "vor_prep_1",
    "lemma": "vor",
    "pos": "Präposition",
    "cefr": "A1",
    "tags": ["exam", "location", "time"],
    "meanings": {
      "de": "vor",
      "ko": "앞에, 전에",
      "en": "in front of, before",
      "es": "delante de, antes de",
      "fr": "devant, avant",
      "it": "davanti a, prima di",
      "pt": "em frente de, antes de",
      "ja": "～の前に",
      "zh": "在前面, 在之前",
      "ru": "перед, до"
    },
    "examples": ["Wir treffen uns vor dem Kino."],
    "meta": {}
  },
  {
    "id": "vorname_nm_1",
    "lemma": "Vorname",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "personal_info"],
    "meanings": {
      "de": "Vorname",
      "ko": "이름",
      "en": "first name",
      "es": "nombre",
      "fr": "prénom",
      "it": "nome",
      "pt": "nome próprio",
      "ja": "下の名前",
      "zh": "名字",
      "ru": "имя"
    },
    "examples": ["Mein Vorname ist Thomas."],
    "meta": {},
    "gender": "der",
    "plural": "Vornamen"
  },
  {
    "id": "vorsicht_nf_1",
    "lemma": "Vorsicht",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "warning", "safety"],
    "meanings": {
      "de": "Vorsicht",
      "ko": "주의",
      "en": "caution",
      "es": "cuidado",
      "fr": "attention",
      "it": "attenzione",
      "pt": "cuidado",
      "ja": "注意",
      "zh": "小心",
      "ru": "осторожно"
    },
    "examples": ["Vorsicht! Der Hund beißt."],
    "meta": {},
    "gender": "die",
    "plural": ""
  },
  {
    "id": "vorstellen_v_1",
    "lemma": "vorstellen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "social", "communication"],
    "meanings": {
      "de": "vorstellen",
      "ko": "소개하다",
      "en": "introduce",
      "es": "presentar",
      "fr": "présenter",
      "it": "presentare",
      "pt": "apresentar",
      "ja": "紹介する",
      "zh": "介绍",
      "ru": "представлять"
    },
    "examples": ["Darf ich Ihnen meine Frau vorstellen?"],
    "meta": {},
    "conj": {
      "pres_ich": "ich stelle vor",
      "pres_du": "du stellst vor",
      "pres_er": "er stellt vor",
      "praet": "stellte vor",
      "part2": "vorgestellt",
      "aux": "haben"
    }
  },
  {
    "id": "wann_adv_1",
    "lemma": "wann",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "time", "question"],
    "meanings": {
      "de": "wann",
      "ko": "언제",
      "en": "when",
      "es": "cuándo",
      "fr": "quand",
      "it": "quando",
      "pt": "quando",
      "ja": "いつ",
      "zh": "什么时候",
      "ru": "когда"
    },
    "examples": ["Wann kommst du?"],
    "meta": {}
  },
  {
    "id": "warten_v_1",
    "lemma": "warten",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "basic", "activity"],
    "meanings": {
      "de": "warten",
      "ko": "기다리다",
      "en": "wait",
      "es": "esperar",
      "fr": "attendre",
      "it": "aspettare",
      "pt": "esperar",
      "ja": "待つ",
      "zh": "等",
      "ru": "ждать"
    },
    "examples": ["Ich warte auf den Bus."],
    "meta": {},
    "conj": {
      "pres_ich": "ich warte",
      "pres_du": "du wartest",
      "pres_er": "er wartet",
      "praet": "wartete",
      "part2": "gewartet",
      "aux": "haben"
    }
  },
  {
    "id": "warum_adv_1",
    "lemma": "warum",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "basic", "question"],
    "meanings": {
      "de": "warum",
      "ko": "왜",
      "en": "why",
      "es": "por qué",
      "fr": "pourquoi",
      "it": "perché",
      "pt": "porquê",
      "ja": "なぜ",
      "zh": "为什么",
      "ru": "почему"
    },
    "examples": ["Warum kommst du nicht?"],
    "meta": {}
  },
  {
    "id": "was_pron_1",
    "lemma": "was",
    "pos": "Pronomen",
    "cefr": "A1",
    "tags": ["exam", "basic", "question"],
    "meanings": {
      "de": "was",
      "ko": "무엇",
      "en": "what",
      "es": "qué",
      "fr": "quoi",
      "it": "che cosa",
      "pt": "o que",
      "ja": "何",
      "zh": "什么",
      "ru": "что"
    },
    "examples": ["Was ist das?"],
    "meta": {}
  },
  {
    "id": "waschen_v_1",
    "lemma": "waschen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "daily", "hygiene"],
    "meanings": {
      "de": "waschen",
      "ko": "씻다",
      "en": "wash",
      "es": "lavar",
      "fr": "laver",
      "it": "lavare",
      "pt": "lavar",
      "ja": "洗う",
      "zh": "洗",
      "ru": "мыть"
    },
    "examples": ["Ich muss meine Hände waschen."],
    "meta": {},
    "conj": {
      "pres_ich": "ich wasche",
      "pres_du": "du wäschst",
      "pres_er": "er wäscht",
      "praet": "wusch",
      "part2": "gewaschen",
      "aux": "haben"
    }
  },
  {
    "id": "wasser_nn_1",
    "lemma": "Wasser",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "drink", "nature"],
    "meanings": {
      "de": "Wasser",
      "ko": "물",
      "en": "water",
      "es": "agua",
      "fr": "eau",
      "it": "acqua",
      "pt": "água",
      "ja": "水",
      "zh": "水",
      "ru": "вода"
    },
    "examples": ["Ein Glas Wasser, bitte."],
    "meta": {},
    "gender": "das",
    "plural": ""
  },
  {
    "id": "weg_adv_1",
    "lemma": "weg",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "basic", "location"],
    "meanings": {
      "de": "weg",
      "ko": "없어진, 멀리",
      "en": "away, gone",
      "es": "fuera",
      "fr": "parti",
      "it": "via",
      "pt": "embora",
      "ja": "いない",
      "zh": "离开",
      "ru": "прочь"
    },
    "examples": ["Meine Tasche ist weg."],
    "meta": {}
  },
  {
    "id": "weg_nm_1",
    "lemma": "Weg",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "location", "traffic"],
    "meanings": {
      "de": "Weg",
      "ko": "길",
      "en": "way, path",
      "es": "camino",
      "fr": "chemin",
      "it": "strada",
      "pt": "caminho",
      "ja": "道",
      "zh": "路",
      "ru": "путь"
    },
    "examples": ["Können Sie mir den Weg zeigen?"],
    "meta": {},
    "gender": "der",
    "plural": "Wege"
  },
  {
    "id": "weh_tun_v_1",
    "lemma": "weh tun",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "health", "feeling"],
    "meanings": {
      "de": "weh tun",
      "ko": "아프다",
      "en": "hurt",
      "es": "doler",
      "fr": "faire mal",
      "it": "fare male",
      "pt": "doer",
      "ja": "痛い",
      "zh": "痛",
      "ru": "болеть"
    },
    "examples": ["Mein Kopf tut weh."],
    "meta": {},
    "conj": {
      "pres_ich": "es tut weh",
      "pres_du": "es tut weh",
      "pres_er": "es tut weh",
      "praet": "tat weh",
      "part2": "wehgetan",
      "aux": "haben"
    }
  },
  {
    "id": "weiblich_adj_1",
    "lemma": "weiblich",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "personal_info"],
    "meanings": {
      "de": "weiblich",
      "ko": "여성의",
      "en": "female",
      "es": "femenino",
      "fr": "féminin",
      "it": "femminile",
      "pt": "feminino",
      "ja": "女性の",
      "zh": "女性",
      "ru": "женский"
    },
    "examples": ["Kreuzen Sie bitte an: weiblich oder männlich."],
    "meta": {}
  },
  {
    "id": "wein_nm_1",
    "lemma": "Wein",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "drink", "alcohol"],
    "meanings": {
      "de": "Wein",
      "ko": "와인",
      "en": "wine",
      "es": "vino",
      "fr": "vin",
      "it": "vino",
      "pt": "vinho",
      "ja": "ワイン",
      "zh": "葡萄酒",
      "ru": "вино"
    },
    "examples": ["Ich trinke gern Rotwein."],
    "meta": {},
    "gender": "der",
    "plural": "Weine"
  },
  {
    "id": "weit_adj_1",
    "lemma": "weit",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "location", "distance"],
    "meanings": {
      "de": "weit",
      "ko": "먼",
      "en": "far",
      "es": "lejos",
      "fr": "loin",
      "it": "lontano",
      "pt": "longe",
      "ja": "遠い",
      "zh": "远",
      "ru": "далекий"
    },
    "examples": ["Der Bahnhof ist nicht weit."],
    "meta": {}
  },
  {
    "id": "weiter_adv_1",
    "lemma": "weiter",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "basic", "action"],
    "meanings": {
      "de": "weiter",
      "ko": "계속",
      "en": "further, go on",
      "es": "más",
      "fr": "continuer",
      "it": "avanti",
      "pt": "mais",
      "ja": "さらに",
      "zh": "继续",
      "ru": "дальше"
    },
    "examples": ["Lesen Sie bitte weiter."],
    "meta": {}
  },
  {
    "id": "welt_nf_1",
    "lemma": "Welt",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "nature", "society"],
    "meanings": {
      "de": "Welt",
      "ko": "세계",
      "en": "world",
      "es": "mundo",
      "fr": "monde",
      "it": "mondo",
      "pt": "mundo",
      "ja": "世界",
      "zh": "世界",
      "ru": "мир"
    },
    "examples": ["Er reist um die Welt."],
    "meta": {},
    "gender": "die",
    "plural": "Welten"
  },
  {
    "id": "wenig_pron_1",
    "lemma": "wenig",
    "pos": "Pronomen",
    "cefr": "A1",
    "tags": ["exam", "quantity", "basic"],
    "meanings": {
      "de": "wenig",
      "ko": "적은",
      "en": "little, few",
      "es": "poco",
      "fr": "peu",
      "it": "poco",
      "pt": "pouco",
      "ja": "少し",
      "zh": "少",
      "ru": "мало"
    },
    "examples": ["Ich habe nur wenig Zeit."],
    "meta": {}
  },
  {
    "id": "wer_pron_1",
    "lemma": "wer",
    "pos": "Pronomen",
    "cefr": "A1",
    "tags": ["exam", "basic", "question"],
    "meanings": {
      "de": "wer",
      "ko": "누구",
      "en": "who",
      "es": "quién",
      "fr": "qui",
      "it": "chi",
      "pt": "quem",
      "ja": "誰",
      "zh": "谁",
      "ru": "кто"
    },
    "examples": ["Wer ist das?"],
    "meta": {}
  },
  {
    "id": "werden_v_1",
    "lemma": "werden",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "basic", "grammar"],
    "meanings": {
      "de": "werden",
      "ko": "되다",
      "en": "become",
      "es": "llegar a ser",
      "fr": "devenir",
      "it": "diventare",
      "pt": "tornar-se",
      "ja": "になる",
      "zh": "变得",
      "ru": "становиться"
    },
    "examples": ["Mein Sohn will Arzt werden."],
    "meta": {},
    "conj": {
      "pres_ich": "ich werde",
      "pres_du": "du wirst",
      "pres_er": "er wird",
      "praet": "wurde",
      "part2": "geworden",
      "aux": "sein"
    }
  },
  {
    "id": "wetter_nn_1",
    "lemma": "Wetter",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "weather", "nature"],
    "meanings": {
      "de": "Wetter",
      "ko": "날씨",
      "en": "weather",
      "es": "tiempo",
      "fr": "temps",
      "it": "tempo",
      "pt": "tempo",
      "ja": "天気",
      "zh": "天气",
      "ru": "погода"
    },
    "examples": ["Das Wetter ist heute gut."],
    "meta": {},
    "gender": "das",
    "plural": ""
  },
  {
    "id": "wichtig_adj_1",
    "lemma": "wichtig",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "basic", "opinion"],
    "meanings": {
      "de": "wichtig",
      "ko": "중요한",
      "en": "important",
      "es": "importante",
      "fr": "important",
      "it": "importante",
      "pt": "importante",
      "ja": "重要な",
      "zh": "重要",
      "ru": "важный"
    },
    "examples": ["Das ist sehr wichtig."],
    "meta": {}
  },
  {
    "id": "wie_adv_1",
    "lemma": "wie",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "basic", "question"],
    "meanings": {
      "de": "wie",
      "ko": "어떻게",
      "en": "how",
      "es": "cómo",
      "fr": "comment",
      "it": "come",
      "pt": "como",
      "ja": "どのように",
      "zh": "怎样",
      "ru": "как"
    },
    "examples": ["Wie heißt du?"],
    "meta": {}
  },
  {
    "id": "wieder_adv_1",
    "lemma": "wieder",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "time", "basic"],
    "meanings": {
      "de": "wieder",
      "ko": "다시",
      "en": "again",
      "es": "otra vez",
      "fr": "encore",
      "it": "di nuovo",
      "pt": "de novo",
      "ja": "再び",
      "zh": "再",
      "ru": "снова"
    },
    "examples": ["Er ist schon wieder krank."],
    "meta": {}
  },
  {
    "id": "wiederholen_v_1",
    "lemma": "wiederholen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "communication", "education"],
    "meanings": {
      "de": "wiederholen",
      "ko": "반복하다",
      "en": "repeat",
      "es": "repetir",
      "fr": "répéter",
      "it": "ripetere",
      "pt": "repetir",
      "ja": "繰り返す",
      "zh": "重复",
      "ru": "повторять"
    },
    "examples": ["Können Sie das bitte wiederholen?"],
    "meta": {},
    "conj": {
      "pres_ich": "ich wiederhole",
      "pres_du": "du wiederholst",
      "pres_er": "er wiederholt",
      "praet": "wiederholte",
      "part2": "wiederholt",
      "aux": "haben"
    }
  },
  {
    "id": "willkommen_adj_1",
    "lemma": "willkommen",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "greeting", "basic"],
    "meanings": {
      "de": "willkommen",
      "ko": "환영하는",
      "en": "welcome",
      "es": "bienvenido",
      "fr": "bienvenu",
      "it": "benvenuto",
      "pt": "bem-vindo",
      "ja": "ようこそ",
      "zh": "欢迎",
      "ru": "добро пожаловать"
    },
    "examples": ["Herzlich willkommen in Berlin!"],
    "meta": {}
  },
  {
    "id": "wind_nm_1",
    "lemma": "Wind",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "weather"],
    "meanings": {
      "de": "Wind",
      "ko": "바람",
      "en": "wind",
      "es": "viento",
      "fr": "vent",
      "it": "vento",
      "pt": "vento",
      "ja": "風",
      "zh": "风",
      "ru": "ветер"
    },
    "examples": ["Der Wind ist heute sehr stark."],
    "meta": {},
    "gender": "der",
    "plural": "Winde"
  },
  {
    "id": "wir_pron_1",
    "lemma": "wir",
    "pos": "Pronomen",
    "cefr": "A1",
    "tags": ["exam", "basic"],
    "meanings": {
      "de": "wir",
      "ko": "우리",
      "en": "we",
      "es": "nosotros",
      "fr": "nous",
      "it": "noi",
      "pt": "nós",
      "ja": "私たち",
      "zh": "我们",
      "ru": "мы"
    },
    "examples": ["Wir lernen Deutsch."],
    "meta": {}
  },
  {
    "id": "wissen_v_1",
    "lemma": "wissen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "basic", "mind"],
    "meanings": {
      "de": "wissen",
      "ko": "알다",
      "en": "know",
      "es": "saber",
      "fr": "savoir",
      "it": "sapere",
      "pt": "saber",
      "ja": "知っている",
      "zh": "知道",
      "ru": "знать"
    },
    "examples": ["Ich weiß es nicht."],
    "meta": {},
    "conj": {
      "pres_ich": "ich weiß",
      "pres_du": "du weißt",
      "pres_er": "er weiß",
      "praet": "wusste",
      "part2": "gewusst",
      "aux": "haben"
    }
  },
  {
    "id": "wo_adv_1",
    "lemma": "wo",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "basic", "location", "question"],
    "meanings": {
      "de": "wo",
      "ko": "어디에",
      "en": "where",
      "es": "dónde",
      "fr": "où",
      "it": "dove",
      "pt": "onde",
      "ja": "どこ",
      "zh": "哪里",
      "ru": "где"
    },
    "examples": ["Wo wohnen Sie?"],
    "meta": {}
  },
  {
    "id": "woche_nf_1",
    "lemma": "Woche",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "time", "basic"],
    "meanings": {
      "de": "Woche",
      "ko": "주",
      "en": "week",
      "es": "semana",
      "fr": "semaine",
      "it": "settimana",
      "pt": "semana",
      "ja": "週",
      "zh": "周",
      "ru": "неделя"
    },
    "examples": ["Ich habe eine Woche Urlaub."],
    "meta": {},
    "gender": "die",
    "plural": "Wochen"
  },
  {
    "id": "wochenende_nn_1",
    "lemma": "Wochenende",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "time", "leisure"],
    "meanings": {
      "de": "Wochenende",
      "ko": "주말",
      "en": "weekend",
      "es": "fin de semana",
      "fr": "week-end",
      "it": "fine settimana",
      "pt": "fim de semana",
      "ja": "週末",
      "zh": "周末",
      "ru": "выходные"
    },
    "examples": ["Schönes Wochenende!"],
    "meta": {},
    "gender": "das",
    "plural": "Wochenenden"
  },
  {
    "id": "woher_adv_1",
    "lemma": "woher",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "basic", "origin", "question"],
    "meanings": {
      "de": "woher",
      "ko": "어디서",
      "en": "where from",
      "es": "de dónde",
      "fr": "d'où",
      "it": "da dove",
      "pt": "de onde",
      "ja": "どこから",
      "zh": "从哪里",
      "ru": "откуда"
    },
    "examples": ["Woher kommen Sie?"],
    "meta": {}
  },
  {
    "id": "wohin_adv_1",
    "lemma": "wohin",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "basic", "direction", "question"],
    "meanings": {
      "de": "wohin",
      "ko": "어디로",
      "en": "where to",
      "es": "adónde",
      "fr": "où",
      "it": "dove",
      "pt": "aonde",
      "ja": "どこへ",
      "zh": "去哪里",
      "ru": "куда"
    },
    "examples": ["Wohin gehst du?"],
    "meta": {}
  },
  {
    "id": "wohnen_v_1",
    "lemma": "wohnen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "housing", "basic"],
    "meanings": {
      "de": "wohnen",
      "ko": "살다",
      "en": "live",
      "es": "vivir",
      "fr": "habiter",
      "it": "abitare",
      "pt": "morar",
      "ja": "住む",
      "zh": "居住",
      "ru": "жить"
    },
    "examples": ["Ich wohne in München."],
    "meta": {},
    "conj": {
      "pres_ich": "ich wohne",
      "pres_du": "du wohnst",
      "pres_er": "er wohnt",
      "praet": "wohnte",
      "part2": "gewohnt",
      "aux": "haben"
    }
  },
  {
    "id": "wohnung_nf_1",
    "lemma": "Wohnung",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "housing"],
    "meanings": {
      "de": "Wohnung",
      "ko": "아파트",
      "en": "apartment",
      "es": "piso",
      "fr": "appartement",
      "it": "appartamento",
      "pt": "apartamento",
      "ja": "アパート",
      "zh": "公寓",
      "ru": "квартира"
    },
    "examples": ["Meine Wohnung ist sehr groß."],
    "meta": {},
    "gender": "die",
    "plural": "Wohnungen"
  },
  {
    "id": "wollen_v_1",
    "lemma": "wollen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "basic", "wish"],
    "meanings": {
      "de": "wollen",
      "ko": "원하다",
      "en": "want",
      "es": "querer",
      "fr": "vouloir",
      "it": "volere",
      "pt": "querer",
      "ja": "欲しい",
      "zh": "想",
      "ru": "хотеть"
    },
    "examples": ["Ich will Deutsch lernen."],
    "meta": {},
    "conj": {
      "pres_ich": "ich will",
      "pres_du": "du willst",
      "pres_er": "er will",
      "praet": "wollte",
      "part2": "gewollt",
      "aux": "haben"
    }
  },
  {
    "id": "wort_nn_1",
    "lemma": "Wort",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "language", "communication"],
    "meanings": {
      "de": "Wort",
      "ko": "단어",
      "en": "word",
      "es": "palabra",
      "fr": "mot",
      "it": "parola",
      "pt": "palavra",
      "ja": "単語",
      "zh": "词",
      "ru": "слово"
    },
    "examples": ["Ich kenne das Wort nicht."],
    "meta": {},
    "gender": "das",
    "plural": "Wörter"
  },
  {
    "id": "wunderbar_adj_1",
    "lemma": "wunderbar",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "description", "feeling"],
    "meanings": {
      "de": "wunderbar",
      "ko": "아주 멋진",
      "en": "wonderful",
      "es": "maravilloso",
      "fr": "merveilleux",
      "it": "meraviglioso",
      "pt": "maravilhoso",
      "ja": "素晴らしい",
      "zh": "极好的",
      "ru": "чудесный"
    },
    "examples": ["Das Essen war wunderbar."],
    "meta": {}
  },
  {
    "id": "zahlen_v_1",
    "lemma": "zahlen",
    "pos": "Verb",
    "cefr": "A1",
    "tags": ["exam", "shopping", "money"],
    "meanings": {
      "de": "zahlen",
      "ko": "지불하다",
      "en": "pay",
      "es": "pagar",
      "fr": "payer",
      "it": "pagare",
      "pt": "pagar",
      "ja": "支払う",
      "zh": "付款",
      "ru": "платить"
    },
    "examples": ["Zahlen, bitte!"],
    "meta": {},
    "conj": {
      "pres_ich": "ich zahle",
      "pres_du": "du zahlst",
      "pres_er": "er zahlt",
      "praet": "zahlte",
      "part2": "gezahlt",
      "aux": "haben"
    }
  },
  {
    "id": "zeit_nf_1",
    "lemma": "Zeit",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "time", "basic"],
    "meanings": {
      "de": "Zeit",
      "ko": "시간",
      "en": "time",
      "es": "tiempo",
      "fr": "temps",
      "it": "tempo",
      "pt": "tempo",
      "ja": "時間",
      "zh": "时间",
      "ru": "время"
    },
    "examples": ["Ich habe heute keine Zeit."],
    "meta": {},
    "gender": "die",
    "plural": "Zeiten"
  },
  {
    "id": "zeitung_nf_1",
    "lemma": "Zeitung",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "media", "daily"],
    "meanings": {
      "de": "Zeitung",
      "ko": "신문",
      "en": "newspaper",
      "es": "periódico",
      "fr": "journal",
      "it": "giornale",
      "pt": "jornal",
      "ja": "新聞",
      "zh": "报纸",
      "ru": "газета"
    },
    "examples": ["Ich lese die Zeitung."],
    "meta": {},
    "gender": "die",
    "plural": "Zeitungen"
  },
  {
    "id": "zigarette_nf_1",
    "lemma": "Zigarette",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "daily", "shopping"],
    "meanings": {
      "de": "Zigarette",
      "ko": "담배",
      "en": "cigarette",
      "es": "cigarrillo",
      "fr": "cigarette",
      "it": "sigaretta",
      "pt": "cigarro",
      "ja": "タバコ",
      "zh": "香烟",
      "ru": "сигарета"
    },
    "examples": ["Haben Sie Zigaretten?"],
    "meta": {},
    "gender": "die",
    "plural": "Zigaretten"
  },
  {
    "id": "zimmer_nn_1",
    "lemma": "Zimmer",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "housing", "hotel"],
    "meanings": {
      "de": "Zimmer",
      "ko": "방",
      "en": "room",
      "es": "habitación",
      "fr": "chambre",
      "it": "camera",
      "pt": "quarto",
      "ja": "部屋",
      "zh": "房间",
      "ru": "комната"
    },
    "examples": ["Ich möchte ein Zimmer reservieren."],
    "meta": {},
    "gender": "das",
    "plural": "Zimmer"
  },
  {
    "id": "zoll_nm_1",
    "lemma": "Zoll",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "travel", "official"],
    "meanings": {
      "de": "Zoll",
      "ko": "세관",
      "en": "customs",
      "es": "aduana",
      "fr": "douane",
      "it": "dogana",
      "pt": "alfândega",
      "ja": "税関",
      "zh": "海关",
      "ru": "таможня"
    },
    "examples": ["Wir müssen durch den Zoll."],
    "meta": {},
    "gender": "der",
    "plural": "Zölle"
  },
  {
    "id": "zu_prep_1",
    "lemma": "zu",
    "pos": "Präposition",
    "cefr": "A1",
    "tags": ["exam", "location", "basic"],
    "meanings": {
      "de": "zu",
      "ko": "로",
      "en": "to",
      "es": "a",
      "fr": "à, chez",
      "it": "a, da",
      "pt": "a",
      "ja": "～へ",
      "zh": "去",
      "ru": "к"
    },
    "examples": ["Ich gehe zu Fuß."],
    "meta": {}
  },
  {
    "id": "zufrieden_adj_1",
    "lemma": "zufrieden",
    "pos": "Adjektiv",
    "cefr": "A1",
    "tags": ["exam", "feeling", "opinion"],
    "meanings": {
      "de": "zufrieden",
      "ko": "만족한",
      "en": "satisfied",
      "es": "satisfecho",
      "fr": "content",
      "it": "soddisfatto",
      "pt": "satisfeito",
      "ja": "満足した",
      "zh": "满意",
      "ru": "довольный"
    },
    "examples": ["Ich bin mit der Wohnung zufrieden."],
    "meta": {}
  },
  {
    "id": "zug_nm_1",
    "lemma": "Zug",
    "pos": "Nomen",
    "cefr": "A1",
    "tags": ["exam", "transport", "travel"],
    "meanings": {
      "de": "Zug",
      "ko": "기차",
      "en": "train",
      "es": "tren",
      "fr": "train",
      "it": "treno",
      "pt": "comboio",
      "ja": "列車",
      "zh": "火车",
      "ru": "поезд"
    },
    "examples": ["Ich fahre gern mit dem Zug."],
    "meta": {},
    "gender": "der",
    "plural": "Züge"
  },
  {
    "id": "zurueck_adv_1",
    "lemma": "zurück",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "location", "direction"],
    "meanings": {
      "de": "zurück",
      "ko": "뒤로, 되돌아",
      "en": "back",
      "es": "atrás",
      "fr": "en arrière",
      "it": "indietro",
      "pt": "para trás",
      "ja": "戻って",
      "zh": "回",
      "ru": "назад"
    },
    "examples": ["Eine Fahrkarte nach Frankfurt und zurück, bitte."],
    "meta": {}
  },
  {
    "id": "zusammen_adv_1",
    "lemma": "zusammen",
    "pos": "Adverb",
    "cefr": "A1",
    "tags": ["exam", "basic", "social"],
    "meanings": {
      "de": "zusammen",
      "ko": "함께",
      "en": "together",
      "es": "juntos",
      "fr": "ensemble",
      "it": "insieme",
      "pt": "juntos",
      "ja": "一緒に",
      "zh": "一起",
      "ru": "вместе"
    },
    "examples": ["Zahlen bitte! Zusammen oder getrennt?"],
    "meta": {}
  },
  {
    "id": "zwischen_prep_1",
    "lemma": "zwischen",
    "pos": "Präposition",
    "cefr": "A1",
    "tags": ["exam", "location", "time"],
    "meanings": {
      "de": "zwischen",
      "ko": "사이에",
      "en": "between",
      "es": "entre",
      "fr": "entre",
      "it": "tra",
      "pt": "entre",
      "ja": "～の間に",
      "zh": "在之间",
      "ru": "между"
    },
    "examples": ["Heidelberg liegt zwischen Frankfurt und Stuttgart."],
    "meta": {}
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports.WORDS_DE_A1 = WORDS_DE_A1;
}