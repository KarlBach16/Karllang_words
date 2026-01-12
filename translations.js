// translations.js

const TRANSLATIONS = {
/* —————————————————–
한국어 (ko)
—————————————————– */
ko: {
app_title: "KarlLang",
start_tagline: "",
start_ui_label: "UI 언어",
start_study_label: "학습 언어",
start: "시작",
start_prompt: "시작 버튼을 누르세요",
type_answer: "정답 입력",


    /* 메뉴 */
    menu_user: "홈",
    menu_study: "학습",
    menu_training: "훈련소",
    menu_mistakes: "틀린 단어",
    menu_bookmark: "북마크",
    menu_search: "단어 검색",
    menu_settings: "설정",

            /* 훈련소 */
    training_title: "훈련소",
    training_desc: "틀린 단어 · 어려운 단어 · 북마크 단어를 한 곳에 모아서 집중 훈련합니다.",
    training_target_label: "훈련 대상",
    training_source_mistakes: "틀린 단어",
    training_source_hard: "어려운 단어",
    training_source_bookmark: "북마크",
    training_mode_label: "훈련 모드",
    training_mode_cram: "크램",
    training_count_label: "훈련 단어 수",
    training_count_unit: "개",
    training_start_button: "훈련 세션 시작",
    training_summary_hint: "최근 30일 기준으로 선택한 단어들을 집중 훈련합니다.",
    training_done_simple: "훈련 세션이 종료되었습니다.",
    training_done: "훈련이 완료되었습니다. 수고했습니다!",
    training_select_target_warning: "훈련할 대상을 하나 이상 선택해 주세요.",
    training_no_match: "선택한 조건에 해당하는 단어가 없습니다.",
    cram_retry_hint: "한 번 더 시도해 보세요.",

    /* 사용자 뷰 */
    user_title: "홈",
    user_cefr_title: "CEFR 단어 진척도",
    user_level_title_cjk: "단어 진척도",
    user_settings_title: "학습 설정",

    /* 학습 설정 */
    mode: "모드",
    goal_typing: "학습 단어 수",
    goal_card: "카드 목표",
    new_word_cefr: "레벨",
    new_word_cefr_all: "전체 레벨",
    category_label: "카테고리",
    category_all: "전체",
    category_exam: "Goethe",
    category_smalltalk: "스몰토크",
    category_daily: "일상",
    category_basic: "기초",
    category_travel: "여행",
    category_work: "직장",
    study_lang_en: "영어",
    study_lang_ko: "한국어",
    study_lang_de: "독일어",

    /* 설정 뷰 라벨 */
    settings_title: "설정",
    settings_ui_lang_label: "UI 언어",
    settings_study_lang_label: "학습 언어",
    sound_label: "사운드",
    sound_on: "켜짐",
    sound_off: "꺼짐",

    /* 모드 라벨 */
    typing_mode: "타이핑",
    card_mode: "카드",
    copy_mode: "따라쓰기",

    /* 카드/입력 */
    confirm: "확인",
    show_answer: "정답 보기",
    answer: "정답",
    correct: "정답입니다!",
    incorrect: "아쉽네요.",
    correct_answer: "정답",
    need_article: "관사와 명사를 함께 입력해 주세요.",
    article_incorrect: "관사를 다시 확인해 주세요.",
    noun_capitalization: "명사는 첫 글자를 대문자로 써 주세요.",
    noun_spelling: "단어 철자를 다시 확인해 주세요.",
    verb_lowercase: "동사·형용사·부사 등은 소문자로 써 주세요.",
    article_lowercase: "관사는 항상 소문자로 써 주세요 (der/die/das).",
    article_hint: "관사를 다시 확인해 주세요.",
    proper_capitalization: "명사는 첫 글자를 대문자로 써 주세요.",
    copy_ok: "정확합니다",
    copy_check_spelling: "철자를 다시 확인해 주세요.",
    card_view_count: "{n}번째 봄",
    /* 진행도 */
    left_label: "개 남음",
    progress_template: "{done}/{total} ({left}개 남음) [Lv.{level}]",

    /* 세션 요약 */
    summary_title: "오늘 학습 요약",
    summary_total: "총 학습 카드",
    summary_new: "새로 배운 단어",
    summary_review: "복습 단어",
    restart: "다시 시작",
    no_words_today: "오늘은 학습할 단어가 없습니다.",

    /* 난이도 평가 */
    difficulty_prompt: "난이도를 평가해 주세요:",
    hard: "어려움",
    normal: "보통",
    easy: "쉬움",

    /* 틀린 단어(어려운 단어) */
    mistakes_title: "틀린 단어",
    mistakes_desc: "자주 ‘어려움’으로 평가했거나 여러 번 틀린 단어들이 여기 모입니다.",
    mistakes_empty: "틀린 단어가 아직 없습니다.",
    mistakes_hard_ko: "어려움 {n}회",
    mistakes_wrong_ko: "오답 {n}회",
    common_list_more: "...외 {n}개",

    /* 북마크 뷰 */
    bookmark_title: "북마크",
    bookmark_desc: "북마크한 단어들이 여기 모입니다.",
    bookmark_empty: "북마크한 단어가 아직 없습니다.",

    /* 검색 */
    search_title: "단어 검색",
    search_desc: "단어를 검색해서 의미와 CEFR 레벨을 확인할 수 있습니다.",
    search_mode_label: "검색 기준",
    search_mode_de: "독일어",
    search_mode_ko: "한국어",
    search_placeholder: "단어를 입력하세요",
    search_empty: "검색어를 입력해 주세요.",
    search_no_result: "검색 결과가 없습니다."
},

/* -----------------------------------------------------
   영어 (en)
----------------------------------------------------- */
en: {
    app_title: "KarlLang",
    start_tagline: "",
    start_ui_label: "UI language",
    start_study_label: "Study language",
    start: "Start",
    start_prompt: "Press the start button.",
    type_answer: "Type your answer",

        /* 메뉴 */
menu_user: "Home",
menu_study: "Study",
menu_training: "Drill",
menu_mistakes: "Difficult words",
menu_bookmark: "Bookmarks",
menu_search: "Word search",
menu_settings: "Settings",

        /* Training */
    training_title: "Drill",
    training_desc: "Drill only your wrong, hard, and bookmarked words in one focused mode.",
    training_source_mistakes: "Wrong answers",
    training_source_hard: "Hard words",
    training_source_bookmark: "Bookmarks",
    training_mode_label: "Drill mode",
    training_mode_cram: "Cram",
    training_count_label: "Number of words",
    training_count_unit: " words",
    training_start_button: "Start drill session", 
    training_summary_hint: "Based on the last 30 days, you drill only the selected words.",
    training_done_simple: "Drill session finished.",
    training_done: "Drill complete. Nice work!",
    training_select_target_warning: "Please select at least one drill source.",
    training_no_match: "No words match the selected conditions.",
    cram_retry_hint: "Try once more.",

    /* 사용자 뷰 */
    user_title: "Home",
    user_cefr_title: "CEFR vocabulary progress",
    user_level_title_cjk: "Word Level Progress",
    user_settings_title: "Study settings",

    /* 학습 설정 */
    mode: "Mode",
    goal_typing: "Study target",
    goal_card: "Card goal",
    new_word_cefr: "Level",
    new_word_cefr_all: "All levels",
    category_label: "Category",
    category_all: "All",
    category_exam: "Goethe",
    category_smalltalk: "Small talk",
    category_daily: "Daily",
    category_basic: "Basic",
    category_travel: "Travel",
    category_work: "Work",
    study_lang_en: "English",
    study_lang_ko: "Korean",
    study_lang_de: "German",

    /* 설정 */
    settings_title: "Settings",
    settings_ui_lang_label: "UI language",
    settings_study_lang_label: "Study language",
    sound_label: "Sound",
    sound_on: "ON",
    sound_off: "OFF",

    /* 모드 */
    typing_mode: "Typing",
    card_mode: "Card",
    copy_mode: "Copy",

    /* 카드/입력 */
    confirm: "Confirm",
    show_answer: "Show answer",
    answer: "Answer",
    correct: "Correct!",
    incorrect: "Not quite.",
    correct_answer: "Correct answer",
    need_article: "Please enter article and noun.",
    article_incorrect: "Check the article.",
    noun_capitalization: "Capitalize the noun.",
    noun_spelling: "Please check the spelling.",
    verb_lowercase: "Verbs, adjectives, and adverbs should be lowercase.",
    article_lowercase: "Articles should always be lowercase (der/die/das).",
    article_hint: "Please check the article.",
    proper_capitalization: "Capitalize the noun.",
    copy_ok: "Looks good",
    copy_check_spelling: "Please double-check the spelling.",
    card_view_count: "Seen {n} times",

    /* 진행도 */
    left_label: "left",
    progress_template: "{done}/{total} ({left} left) [Lv.{level}]",

    /* 요약 */
    summary_title: "Study summary",
    summary_total: "Total cards studied",
    summary_new: "New words",
    summary_review: "Reviewed words",
    restart: "Restart",
    no_words_today: "No cards to study today.",

    /* 난이도 */
    difficulty_prompt: "Rate the difficulty:",
    hard: "Hard",
    normal: "Normal",
    easy: "Easy",

    /* 틀린 단어 */
    mistakes_title: "Difficult words",
    mistakes_desc: "Words you often marked as 'hard' or answered incorrectly multiple times are collected here.",
    mistakes_empty: "No difficult words yet.",
    mistakes_hard_en: "hard {n} times",
    mistakes_wrong_en: "wrong {n} times",
    common_list_more: "...and {n} more",

    /* 북마크 */
    bookmark_title: "Bookmarks",
    bookmark_desc: "Words you marked with a star will appear here.",
    bookmark_empty: "You haven’t bookmarked any words yet.",

    /* 검색 */
    search_title: "Word search",
    search_desc: "Search a word to see its meaning and CEFR level.",
    search_mode_label: "Search by",
    search_mode_de: "German",
    search_mode_ko: "Korean",
    search_placeholder: "Enter a word",
    search_empty: "Please enter a search term.",
    search_no_result: "No results found."
},

/* -----------------------------------------------------
   독일어 (de)
----------------------------------------------------- */
de: {
    app_title: "KarlLang",
    start_tagline: "",
    start_ui_label: "UI-Sprache",
    start_study_label: "Lernsprache",
    start: "Start",
    start_prompt: "Drücke den Startknopf.",
    type_answer: "Antwort eingeben",

    /* 메뉴 */
    menu_user: "Startseite",
    menu_study: "Üben",
    menu_training: "Wiederholen",
    menu_mistakes: "Schwierige Wörter",
    menu_bookmark: "Lesezeichen",
    menu_search: "Wörtersuche",
    menu_settings: "Einstellungen",

            /* Training */
    training_title: "Wiederholen",
    training_desc: "Trainiere falsch beantwortete, schwierige und gemerkte Wörter gezielt an einem Ort.",
    training_target_label: "Trainingsziel",
    training_source_mistakes: "Falsche Antworten",
    training_source_hard: "Schwierige Wörter",
    training_source_bookmark: "Lesezeichen",
    training_mode_label: "Trainingsmodus",
    training_mode_cram: "Cram",
    training_count_label: "Wörteranzahl",
    training_count_unit: " Wörter",
    training_start_button: "Training starten",
    training_summary_hint: "Auf Basis der letzten 30 Tage trainierst du nur die ausgewählten Wörter.",
    training_done_simple: "Die Trainingseinheit ist beendet.",
    training_done: "Training abgeschlossen. Gut gemacht!",
    training_select_target_warning: "Bitte wähle mindestens ein Trainingsziel aus.",
    training_no_match: "Keine Wörter entsprechen den Kriterien.",
    cram_retry_hint: "Versuch es noch einmal.",

    /* 사용자 뷰 */
    user_title: "Startseite",
    user_cefr_title: "CEFR-Wortschatzfortschritt",
    user_level_title_cjk: "Wortschatzfortschritt",
    user_settings_title: "Lerneinstellungen",

    /* 학습 설정 */
    mode: "Modus",
    goal_typing: "Lernziel",
    goal_card: "Kartenziel",
    new_word_cefr: "Niveau",
    new_word_cefr_all: "Alle Niveaus",
    category_label: "Kategorie",
    category_all: "Alle",
    category_exam: "Goethe",
    category_smalltalk: "Smalltalk",
    category_daily: "Alltag",
    category_basic: "Grundwortschatz",
    category_travel: "Reise",
    category_work: "Arbeit",
    study_lang_en: "Englisch",
    study_lang_ko: "Koreanisch",
    study_lang_de: "Deutsch",

    /* 설정 */
    settings_title: "Einstellungen",
    settings_ui_lang_label: "UI-Sprache",
    settings_study_lang_label: "Lernsprache",
    sound_label: "Ton",
    sound_on: "AN",
    sound_off: "AUS",

    /* 모드 */
    typing_mode: "Tippen",
    card_mode: "Karten",
    copy_mode: "Abschreiben",

    /* 카드/입력 */
    confirm: "Bestätigen",
    show_answer: "Antwort anzeigen",
    answer: "Antwort",
    correct: "Richtig!",
    incorrect: "Nicht ganz.",
    correct_answer: "Richtige Antwort",
    need_article: "Artikel und Nomen eingeben.",
    article_incorrect: "Artikel überprüfen.",
    noun_capitalization: "Nomen großschreiben.",
    noun_spelling: "Bitte überprüfe die Rechtschreibung.",
    verb_lowercase: "Verben, Adjektive und Adverbien klein schreiben.",
    article_lowercase: "Artikel immer klein schreiben (der/die/das).",
    article_hint: "Bitte überprüfe den Artikel.",
    proper_capitalization: "Nomen großschreiben.",
    copy_ok: "Sieht gut aus",
    copy_check_spelling: "Bitte überprüfe die Rechtschreibung.",
    card_view_count: "{n}x gesehen",

    /* 진행도 */
    left_label: "übrig",
    progress_template: "{done}/{total} ({left} übrig) [Lv.{level}]",

    /* 요약 */
    summary_title: "Lernzusammenfassung",
    summary_total: "Insgesamt gelernt",
    summary_new: "Neue Wörter",
    summary_review: "Wiederholte Wörter",
    restart: "Neu starten",
    no_words_today: "Heute gibt es keine Karten zum Lernen.",

    /* 난이도 */
    difficulty_prompt: "Bewerte die Schwierigkeit:",
    hard: "Schwierig",
    normal: "Mittel",
    easy: "Leicht",

    /* 틀린 단어 */
    mistakes_title: "Schwierige Wörter",
    mistakes_desc:
        "Hier werden Wörter gesammelt, die du häufig als „schwierig“ bewertet oder mehrmals falsch beantwortet hast.",
    mistakes_empty: "Es gibt noch keine schwierigen Wörter.",
    mistakes_hard_de: "schwierig {n}-mal",
    mistakes_wrong_de: "Fehler {n}-mal",
    common_list_more: "...und {n} weitere",

    /* 북마크 */
    bookmark_title: "Lesezeichen",
    bookmark_desc: "Wörter, die du mit einem Stern markiert hast, erscheinen hier.",
    bookmark_empty: "Du hast noch keine Wörter markiert.",

    /* 검색 */
    search_title: "Wörtersuche",
    search_desc: "Suche ein Wort, um Bedeutung und CEFR-Niveau zu sehen.",
    search_mode_label: "Suchkriterium",
    search_mode_de: "Deutsch",
    search_mode_ko: "Koreanisch",
    search_placeholder: "Wort eingeben",
    search_empty: "Bitte ein Suchwort eingeben.",
    search_no_result: "Keine Suchergebnisse."
},

/* -----------------------------------------------------
   스페인어 (es)
----------------------------------------------------- */
es: {
    app_title: "KarlLang",
    start_tagline: "",
    start_ui_label: "Idioma de la interfaz",
    start_study_label: "Idioma de estudio",
    start: "Iniciar",
    start_prompt: "Pulsa el botón de iniciar.",
    type_answer: "Escribe tu respuesta",

    /* 메뉴 */
    menu_user: "Inicio",
    menu_study: "Estudio",
    menu_training: "Entrenamiento",
    menu_mistakes: "Palabras difíciles",
    menu_bookmark: "Marcadores",
    menu_search: "Búsqueda de palabras",
    menu_settings: "Ajustes",
    
            /* Entrenamiento */
    training_title: "Entrenamiento",
    training_desc: "Entrena en un solo modo tus palabras falladas, difíciles y marcadas.",
    training_target_label: "Objetivos de entrenamiento",
    training_source_mistakes: "Respuestas incorrectas",
    training_source_hard: "Palabras difíciles",
    training_source_bookmark: "Marcadores",
    training_mode_label: "Modo de entrenamiento",
    training_mode_cram: "Cram",
    training_count_label: "Número de palabras",
    training_count_unit: " palabras",
    training_start_button: "Iniciar sesión de entrenamiento",
    training_summary_hint: "Basado en los últimos 30 días, entrenas solo las palabras seleccionadas.",
    training_done_simple: "La sesión de entrenamiento ha terminado.",
    training_done: "Entrenamiento completado. ¡Buen trabajo!",
    training_select_target_warning: "Por favor, selecciona al menos un objetivo de entrenamiento.",
    training_no_match: "No hay palabras que coincidan con las condiciones.",
    cram_retry_hint: "Inténtalo otra vez.",

    /* 사용자 뷰 */
    user_title: "Inicio",
    user_cefr_title: "Progreso de vocabulario CEFR",
    user_level_title_cjk: "Progreso de vocabulario",
    user_settings_title: "Ajustes de estudio",

    /* 학습 설정 */
    mode: "Modo",
    goal_typing: "Meta de estudio",
    goal_card: "Meta de tarjetas",
    new_word_cefr: "Nivel",
    new_word_cefr_all: "Todos los niveles",
    category_label: "Categoría",
    category_all: "Todas",
    category_exam: "Goethe",
    category_smalltalk: "Small talk",
    category_daily: "Diario",
    category_basic: "Básico",
    category_travel: "Viaje",
    category_work: "Trabajo",
    study_lang_en: "Inglés",
    study_lang_ko: "Coreano",
    study_lang_de: "Alemán",

    /* 설정 */
    settings_title: "Ajustes",
    settings_ui_lang_label: "Idioma de la interfaz",
    settings_study_lang_label: "Idioma de estudio",
    sound_label: "Sonido",
    sound_on: "Activado",
    sound_off: "Desactivado",

    /* 모드 */
    typing_mode: "Escribir",
    card_mode: "Tarjetas",
    copy_mode: "Copiar",

    /* 카드/입력 */
    confirm: "Confirmar",
    show_answer: "Mostrar respuesta",
    answer: "Respuesta",
    correct: "¡Correcto!",
    incorrect: "No del todo.",
    correct_answer: "Respuesta correcta",
    need_article: "Escribe artículo y sustantivo.",
    article_incorrect: "Revisa el artículo.",
    noun_capitalization: "Escribe el sustantivo con mayúscula inicial.",
    noun_spelling: "Revisa la ortografía de la palabra.",
    verb_lowercase: "Verbos, adjetivos y adverbios van en minúscula.",
    article_lowercase: "Los artículos siempre van en minúscula (der/die/das).",
    article_hint: "Revisa el artículo.",
    proper_capitalization: "Escribe el sustantivo con mayúscula inicial.",
    copy_ok: "Perfecto",
    copy_check_spelling: "Revisa la ortografía.",
    card_view_count: "Visto {n} veces",

    /* 진행도 */
    left_label: "restantes",
    progress_template: "{done}/{total} ({left} restantes) [Lv.{level}]",

    /* 요약 */
    summary_title: "Resumen del estudio de hoy",
    summary_total: "Tarjetas estudiadas en total",
    summary_new: "Palabras nuevas",
    summary_review: "Palabras repasadas",
    restart: "Reiniciar",
    no_words_today: "Hoy no hay tarjetas para estudiar.",

    /* 난이도 */
    difficulty_prompt: "Valora la dificultad:",
    hard: "Difícil",
    normal: "Normal",
    easy: "Fácil",

    /* 틀린 단어 */
    mistakes_title: "Palabras difíciles",
    mistakes_desc:
        "Aquí se reúnen las palabras que marcaste a menudo como \"difíciles\" o en las que fallaste varias veces.",
    mistakes_empty: "Todavía no hay palabras difíciles.",
    mistakes_hard_es: "difícil {n} veces",
    mistakes_wrong_es: "error {n} veces",
    common_list_more: "...y {n} más",

    /* 북마크 */
    bookmark_title: "Marcadores",
    bookmark_desc: "Las palabras que marcas con una estrella aparecen aquí.",
    bookmark_empty: "Todavía no has marcado ninguna palabra.",

    /* 검색 */
    search_title: "Búsqueda de palabras",
    search_desc:
        "Busca una palabra para ver su significado y su nivel CEFR.",
    search_mode_label: "Buscar por",
    search_mode_de: "Alemán",
    search_mode_ko: "Coreano",
    search_placeholder: "Escribe una palabra",
    search_empty: "Escribe un término de búsqueda.",
    search_no_result: "No se encontraron resultados."
},

        /* -----------------------------------------------------
   프랑스어 (fr)
----------------------------------------------------- */
fr: {
    app_title: "KarlLang",
    start_tagline: "",
    start_ui_label: "Langue de l’interface",
    start_study_label: "Langue d’étude",
    start: "Commencer",
    start_prompt: "Appuie sur le bouton Commencer.",
    type_answer: "Écris ta réponse",

    /* 메뉴 */
    menu_user: "Accueil",
    menu_study: "Étude",
    menu_training: "Entraînement",
    menu_mistakes: "Mots difficiles",
    menu_bookmark: "Favoris",
    menu_search: "Recherche de mots",
    menu_settings: "Paramètres",
    
            /* Entraînement */
    training_title: "Entraînement",
    training_desc: "Entraîne au même endroit tes mots faux, difficiles et favoris.",
    training_target_label: "Cible d’entraînement",
    training_source_mistakes: "Réponses fausses",
    training_source_hard: "Mots difficiles",
    training_source_bookmark: "Favoris",
    training_mode_label: "Mode d’entraînement",
    training_mode_cram: "Cram",
    training_count_label: "Nombre de mots",
    training_count_unit: " mots",
    training_start_button: "Lancer la session d’entraînement",
    training_summary_hint: "Sur la base des 30 derniers jours, tu t’entraînes uniquement avec les mots sélectionnés.",
    training_done_simple: "La session d’entraînement est terminée.",
    training_done: "Entraînement terminé. Bon travail !",
    training_select_target_warning: "Veuillez sélectionner au moins une cible d'entraînement.",
    training_no_match: "Aucun mot ne correspond aux conditions.",
    cram_retry_hint: "Essaie encore une fois.",

    /* 사용자 뷰 */
    user_title: "Accueil",
    user_cefr_title: "Progression du vocabulaire CECR",
    user_level_title_cjk: "Progression du vocabulaire",
    user_settings_title: "Paramètres d’étude",

    /* 학습 설정 */
    mode: "Mode",
    goal_typing: "Objectif d’étude",
    goal_card: "Objectif de cartes",
    new_word_cefr: "Niveau",
    new_word_cefr_all: "Tous les niveaux",
    category_label: "Catégorie",
    category_all: "Tous",
    category_exam: "Goethe",
    category_smalltalk: "Small talk",
    category_daily: "Quotidien",
    category_basic: "De base",
    category_travel: "Voyage",
    category_work: "Travail",
    study_lang_en: "Anglais",
    study_lang_ko: "Coréen",
    study_lang_de: "Allemand",

    /* 설정 */
    settings_title: "Paramètres",
    settings_ui_lang_label: "Langue de l’interface",
    settings_study_lang_label: "Langue d’étude",
    sound_label: "Son",
    sound_on: "Activé",
    sound_off: "Désactivé",

    /* 모드 */
    typing_mode: "Saisie",
    card_mode: "Cartes",
    copy_mode: "Copie",

    /* 카드/입력 */
    confirm: "Valider",
    show_answer: "Afficher la réponse",
    answer: "Réponse",
    correct: "Juste !",
    incorrect: "Pas tout à fait.",
    correct_answer: "Bonne réponse",
    need_article: "Entre l’article et le nom.",
    article_incorrect: "Vérifie l’article.",
    noun_capitalization: "Écris le nom avec une majuscule.",
    noun_spelling: "Vérifie l'orthographe du mot.",
    verb_lowercase: "Verbes, adjectifs et adverbes s'écrivent en minuscule.",
    article_lowercase: "Les articles s'écrivent toujours en minuscule (der/die/das).",
    article_hint: "Vérifie l'article.",
    proper_capitalization: "Écris le nom avec une majuscule.",
    copy_ok: "Parfait",
    copy_check_spelling: "Vérifie l’orthographe.",
    card_view_count: "Vu {n} fois",

    /* 진행도 */
    left_label: "restant(s)",
    progress_template: "{done}/{total} ({left} restant(s)) [Nv.{level}]",

    /* 요약 */
    summary_title: "Résumé de l’étude",
    summary_total: "Cartes étudiées au total",
    summary_new: "Nouveaux mots",
    summary_review: "Mots révisés",
    restart: "Recommencer",
    no_words_today: "Aucune carte à étudier aujourd’hui.",

    /* 난이도 */
    difficulty_prompt: "Évalue la difficulté :",
    hard: "Difficile",
    normal: "Moyen",
    easy: "Facile",

    /* 틀린 단어 */
    mistakes_title: "Mots difficiles",
    mistakes_desc: "Ici sont rassemblés les mots que tu as souvent marqués comme « difficiles » ou que tu as ratés plusieurs fois.",
    mistakes_empty: "Il n’y a pas encore de mots difficiles.",
    common_list_more: "...et {n} de plus",

    /* 북마크 */
    bookmark_title: "Favoris",
    bookmark_desc: "Les mots que tu marques avec une étoile apparaissent ici.",
    bookmark_empty: "Tu n’as encore ajouté aucun mot en favori.",

    /* 검색 */
    search_title: "Recherche de mots",
    search_desc: "Cherche un mot pour voir sa signification et son niveau CECR.",
    search_mode_label: "Chercher par",
    search_mode_de: "Allemand",
    search_mode_ko: "Coréen",
    search_placeholder: "Entre un mot",
    search_empty: "Entre un terme de recherche.",
    search_no_result: "Aucun résultat trouvé."
},

    /* -----------------------------------------------------
   이탈리아어 (it)
----------------------------------------------------- */
it: {
    app_title: "KarlLang",
    start_tagline: "",
    start_ui_label: "Lingua dell’interfaccia",
    start_study_label: "Lingua di studio",
    start: "Inizia",
    start_prompt: "Premi il pulsante Inizia.",
    type_answer: "Scrivi la tua risposta",

    /* 메뉴 */
    menu_user: "Home",
    menu_study: "Studio",
    menu_training: "Allenamento",
    menu_mistakes: "Parole difficili",
    menu_bookmark: "Preferiti",
    menu_search: "Ricerca parole",
    menu_settings: "Impostazioni",

            /* Allenamento */
    training_title: "Allenamento",
    training_desc: "Allena in un’unica modalità le parole sbagliate, difficili e preferite.",
    training_target_label: "Obiettivi di allenamento",
    training_source_mistakes: "Risposte sbagliate",
    training_source_hard: "Parole difficili",
    training_source_bookmark: "Preferiti",
    training_mode_label: "Modalità di allenamento",
    training_mode_cram: "Cram",
    training_count_label: "Numero di parole",
    training_count_unit: " parole",
    training_start_button: "Avvia sessione di allenamento",
    training_summary_hint: "Sulla base degli ultimi 30 giorni, ti alleni solo con le parole selezionate.",
    training_done_simple: "La sessione di allenamento è terminata.",
    training_done: "Allenamento completato. Ottimo lavoro!",
    training_select_target_warning: "Seleziona almeno un obiettivo di allenamento.",
    training_no_match: "Nessuna parola corrisponde alle condizioni.",
    cram_retry_hint: "Prova ancora una volta.",

    /* 사용자 뷰 */
    user_title: "Home",
    user_cefr_title: "Progressi del vocabolario QCER",
    user_level_title_cjk: "Progressi del vocabolario",
    user_settings_title: "Impostazioni di studio",

    /* 학습 설정 */
    mode: "Modalità",
    goal_typing: "Obiettivo di studio",
    goal_card: "Obiettivo carte",
    new_word_cefr: "Livello",
    new_word_cefr_all: "Tutti i livelli",
    category_label: "Categoria",
    category_all: "Tutte",
    category_exam: "Goethe",
    category_smalltalk: "Small talk",
    category_daily: "Quotidiano",
    category_basic: "Base",
    category_travel: "Viaggio",
    category_work: "Lavoro",
    study_lang_en: "Inglese",
    study_lang_ko: "Coreano",
    study_lang_de: "Tedesco",

    /* 설정 */
    settings_title: "Impostazioni",
    settings_ui_lang_label: "Lingua dell’interfaccia",
    settings_study_lang_label: "Lingua di studio",
    sound_label: "Suono",
    sound_on: "Attivo",
    sound_off: "Disattivo",

    /* 모드 */
    typing_mode: "Scrittura",
    card_mode: "Carte",
    copy_mode: "Copia",

    /* 카드/입력 */
    confirm: "Conferma",
    show_answer: "Mostra risposta",
    answer: "Risposta",
    correct: "Corretto!",
    incorrect: "Non proprio.",
    correct_answer: "Risposta corretta",
    need_article: "Inserisci articolo e nome.",
    article_incorrect: "Controlla l’articolo.",
    noun_capitalization: "Scrivi il sostantivo con la maiuscola.",
    noun_spelling: "Controlla l'ortografia della parola.",
    verb_lowercase: "Verbi, aggettivi e avverbi vanno in minuscolo.",
    article_lowercase: "Gli articoli vanno sempre in minuscolo (der/die/das).",
    article_hint: "Controlla l'articolo.",
    proper_capitalization: "Scrivi il sostantivo con la maiuscola.",
    copy_ok: "Perfetto",
    copy_check_spelling: "Controlla l’ortografia.",
    card_view_count: "Visto {n} volte",

    /* 진행도 */
    left_label: "rimanenti",
    progress_template: "{done}/{total} ({left} rimanenti) [Lv.{level}]",

    /* 요약 */
    summary_title: "Riepilogo dello studio",
    summary_total: "Carte studiate in totale",
    summary_new: "Nuove parole",
    summary_review: "Parole ripassate",
    restart: "Ricomincia",
    no_words_today: "Oggi non ci sono carte da studiare.",

    /* 난이도 */
    difficulty_prompt: "Valuta la difficoltà:",
    hard: "Difficile",
    normal: "Normale",
    easy: "Facile",

    /* 틀린 단어 */
    mistakes_title: "Parole difficili",
    mistakes_desc: "Qui si raccolgono le parole che hai spesso segnato come \"difficili\" o che hai sbagliato più volte.",
    mistakes_empty: "Non ci sono ancora parole difficili.",
    common_list_more: "...e altri {n}",

    /* 북마크 */
    bookmark_title: "Preferiti",
    bookmark_desc: "Le parole che contrassegni con una stella compaiono qui.",
    bookmark_empty: "Non hai ancora aggiunto parole ai preferiti.",

    /* 검색 */
    search_title: "Ricerca parole",
    search_desc: "Cerca una parola per vedere significato e livello QCER.",
    search_mode_label: "Cerca per",
    search_mode_de: "Tedesco",
    search_mode_ko: "Coreano",
    search_placeholder: "Inserisci una parola",
    search_empty: "Inserisci un termine di ricerca.",
    search_no_result: "Nessun risultato trovato."
},

    /* -----------------------------------------------------
   포르투갈어 (pt)
----------------------------------------------------- */
pt: {
    app_title: "KarlLang",
    start_tagline: "",
    start_ui_label: "Idioma da interface",
    start_study_label: "Idioma de estudo",
    start: "Iniciar",
    start_prompt: "Toque no botão Iniciar.",
    type_answer: "Digite sua resposta",

    /* 메뉴 */
    menu_user: "Início",
    menu_study: "Estudo",
    menu_training: "Treino",
    menu_mistakes: "Palavras difíceis",
    menu_bookmark: "Favoritos",
    menu_search: "Busca de palavras",
    menu_settings: "Configurações",

            /* Treino */
    training_title: "Treino",
    training_desc: "Treine em um só modo as palavras erradas, difíceis e favoritas.",
    training_target_label: "Alvos de treino",
    training_source_mistakes: "Respostas erradas",
    training_source_hard: "Palavras difíceis",
    training_source_bookmark: "Favoritos",
    training_mode_label: "Modo de treino",
    training_mode_cram: "Cram",
    training_count_label: "Quantidade de palavras",
    training_count_unit: " palavras",
    training_start_button: "Iniciar sessão de treino",
    training_summary_hint: "Com base nos últimos 30 dias, você treina apenas as palavras selecionadas.",
    training_done_simple: "A sessão de treino foi concluída.",
    training_done: "Treino concluído. Bom trabalho!",
    training_select_target_warning: "Por favor, selecione pelo menos um alvo de treinamento.",
    training_no_match: "Nenhuma palavra corresponde às condições.",
    cram_retry_hint: "Tente mais uma vez.",

    /* 사용자 뷰 */
    user_title: "Início",
    user_cefr_title: "Progresso de vocabulário CEFR",
    user_level_title_cjk: "Progresso de vocabulário",
    user_settings_title: "Configurações de estudo",

    /* 학습 설정 */
    mode: "Modo",
    goal_typing: "Meta de estudo",
    goal_card: "Meta de cartões",
    new_word_cefr: "Nível",
    new_word_cefr_all: "Todos os níveis",
    category_label: "Categoria",
    category_all: "Todas",
    category_exam: "Goethe",
    category_smalltalk: "Small talk",
    category_daily: "Diário",
    category_basic: "Básico",
    category_travel: "Viagem",
    category_work: "Trabalho",
    study_lang_en: "Inglês",
    study_lang_ko: "Coreano",
    study_lang_de: "Alemão",

    /* 설정 */
    settings_title: "Configurações",
    settings_ui_lang_label: "Idioma da interface",
    settings_study_lang_label: "Idioma de estudo",
    sound_label: "Som",
    sound_on: "Ativado",
    sound_off: "Desativado",

    /* 모드 */
    typing_mode: "Digitação",
    card_mode: "Cartões",
    copy_mode: "Cópia",

    /* 카드/입력 */
    confirm: "Confirmar",
    show_answer: "Mostrar resposta",
    answer: "Resposta",
    correct: "Correto!",
    incorrect: "Quase.",
    correct_answer: "Resposta correta",
    need_article: "Digite o artigo e o substantivo.",
    article_incorrect: "Verifique o artigo.",
    noun_capitalization: "Escreva o substantivo com maiúscula inicial.",
    noun_spelling: "Verifique a ortografia da palavra.",
    verb_lowercase: "Verbos, adjetivos e advérbios devem ser minúsculos.",
    article_lowercase: "Artigos devem ser sempre minúsculos (der/die/das).",
    article_hint: "Verifique o artigo.",
    proper_capitalization: "Escreva o substantivo com maiúscula inicial.",
    copy_ok: "Perfeito",
    copy_check_spelling: "Verifique a ortografia.",
    card_view_count: "Visto {n} vezes",

    /* 진행도 */
    left_label: "restantes",
    progress_template: "{done}/{total} ({left} restantes) [Nv.{level}]",

    /* 요약 */
    summary_title: "Resumo do estudo",
    summary_total: "Cartas estudadas no total",
    summary_new: "Novas palavras",
    summary_review: "Palavras revisadas",
    restart: "Reiniciar",
    no_words_today: "Hoje não há cartas para estudar.",

    /* 난이도 */
    difficulty_prompt: "Avalie a dificuldade:",
    hard: "Difícil",
    normal: "Normal",
    easy: "Fácil",

    /* 틀린 단어 */
    mistakes_title: "Palavras difíceis",
    mistakes_desc: "Aqui ficam as palavras que você marcou com frequência como \"difíceis\" ou errou várias vezes.",
    mistakes_empty: "Ainda não há palavras difíceis.",
    common_list_more: "...e mais {n}",

    /* 북마크 */
    bookmark_title: "Favoritos",
    bookmark_desc: "As palavras que você marca com uma estrela aparecem aqui.",
    bookmark_empty: "Você ainda não adicionou palavras aos favoritos.",

    /* 검색 */
    search_title: "Busca de palavras",
    search_desc: "Busque uma palavra para ver o significado e o nível CEFR.",
    search_mode_label: "Buscar por",
    search_mode_de: "Alemão",
    search_mode_ko: "Coreano",
    search_placeholder: "Digite uma palavra",
    search_empty: "Digite um termo de busca.",
    search_no_result: "Nenhum resultado encontrado."
},

    /* -----------------------------------------------------
   일본어 (ja)
----------------------------------------------------- */
ja: {
    app_title: "KarlLang",
    start_tagline: "",
    start_ui_label: "UI 言語",
    start_study_label: "学習言語",
    start: "スタート",
    start_prompt: "「スタート」ボタンを押してください。",
    type_answer: "答えを入力してください",

    /* 메뉴 */
    menu_user: "ホーム",
    menu_study: "学習",
    menu_training: "トレーニング",
    menu_mistakes: "難しい単語",
    menu_bookmark: "ブックマーク",
    menu_search: "単語検索",
    menu_settings: "設定",

            /* トレーニング */
    training_title: "トレーニング",
    training_desc: "間違えた単語・難しい単語・ブックマークした単語をまとめて集中的に練習します。",
    training_target_label: "トレーニング対象",
    training_source_mistakes: "間違えた単語",
    training_source_hard: "難しい単語",
    training_source_bookmark: "ブックマーク",
    training_mode_label: "トレーニングモード",
    training_mode_cram: "クラム",
    training_count_label: "単語数",
    training_count_unit: "語",
    training_start_button: "トレーニング開始",
    training_summary_hint: "直近30日分のデータをもとに、選択した単語だけを集中的にトレーニングします。",
    training_done_simple: "トレーニングセッションが終了しました。",
    training_done: "トレーニングが完了しました。お疲れさまでした。",
    training_select_target_warning: "トレーニング対象を1つ以上選択してください。",
    training_no_match: "選択した条件に該当する単語がありません。",
    cram_retry_hint: "もう一度試してみてください。",

    /* 사용자 뷰 */
    user_title: "ホーム",
    user_cefr_title: "CEFR 語彙の進捗",
    user_level_title_cjk: "語彙の進捗",
    user_settings_title: "学習設定",

    /* 학습 설정 */
    mode: "モード",
    goal_typing: "学習目標",
    goal_card: "カード目標",
    new_word_cefr: "レベル",
    new_word_cefr_all: "全レベル",
    category_label: "カテゴリー",
    category_all: "すべて",
    category_exam: "Goethe",
    category_smalltalk: "スモールトーク",
    category_daily: "日常",
    category_basic: "基礎",
    category_travel: "旅行",
    category_work: "仕事",
    study_lang_en: "英語",
    study_lang_ko: "韓国語",
    study_lang_de: "ドイツ語",

    /* 설정 */
    settings_title: "設定",
    settings_ui_lang_label: "UI 言語",
    settings_study_lang_label: "学習言語",
    sound_label: "サウンド",
    sound_on: "オン",
    sound_off: "オフ",

    /* 모드 */
    typing_mode: "タイピング",
    card_mode: "カード",
    copy_mode: "書き写し",

    /* 카드/입력 */
    confirm: "確認",
    show_answer: "答えを表示",
    answer: "答え",
    correct: "正解！",
    incorrect: "残念。",
    correct_answer: "正しい答え",
    need_article: "冠詞と名詞を入力してください。",
    article_incorrect: "冠詞を確認してください。",
    noun_capitalization: "名詞の最初の文字を大文字にしてください。",
    noun_spelling: "スペルを確認してください。",
    verb_lowercase: "動詞・形容詞・副詞は小文字で書いてください。",
    article_lowercase: "冠詞は常に小文字で書いてください (der/die/das)。",
    article_hint: "冠詞を確認してください。",
    proper_capitalization: "名詞の最初の文字を大文字にしてください。",
    copy_ok: "完璧です",
    copy_check_spelling: "スペルを確認してください。",
    card_view_count: "{n}回目",

    /* 진행도 */
    left_label: "残り",
    progress_template: "{done}/{total} (残り {left}) [Lv.{level}]",

    /* 요약 */
    summary_title: "今日の学習まとめ",
    summary_total: "学習したカードの合計",
    summary_new: "新しく覚えた単語",
    summary_review: "復習した単語",
    restart: "もう一度",
    no_words_today: "今日は学習するカードがありません。",

    /* 난이도 */
    difficulty_prompt: "難易度を評価してください：",
    hard: "難しい",
    normal: "普通",
    easy: "簡単",

    /* 틀린 단어 */
    mistakes_title: "難しい単語",
    mistakes_desc: "ここには、よく「難しい」と評価した単語や、何度も間違えた単語が集まります。",
    mistakes_empty: "まだ難しい単語はありません。",
    common_list_more: "...他 {n}件",

    /* 북마크 */
    bookmark_title: "ブックマーク",
    bookmark_desc: "スターを付けた単語がここに表示されます。",
    bookmark_empty: "まだブックマークした単語はありません。",

    /* 검색 */
    search_title: "単語検索",
    search_desc: "単語を検索して意味と CEFR レベルを確認できます。",
    search_mode_label: "検索基準",
    search_mode_de: "ドイツ語",
    search_mode_ko: "韓国語",
    search_placeholder: "単語を入力してください",
    search_empty: "検索語を入力してください。",
    search_no_result: "検索結果がありません。"
},

    /* -----------------------------------------------------
   중국어 (zh)
----------------------------------------------------- */
zh: {
    app_title: "KarlLang",
    start_tagline: "",
    start_ui_label: "界面语言",
    start_study_label: "学习语言",
    start: "开始",
    start_prompt: "请点击“开始”按钮。",
    type_answer: "请输入答案",

    /* 메뉴 */
    menu_user: "首页",
    menu_study: "学习",
    menu_training: "训练",
    menu_mistakes: "难词",
    menu_bookmark: "收藏",
    menu_search: "单词搜索",
    menu_settings: "设置",

            /* 训练 */
    training_title: "训练",
    training_desc: "把做错的单词、困难单词和收藏单词集中在一起进行训练。",
    training_target_label: "训练对象",
    training_source_mistakes: "做错的单词",
    training_source_hard: "难词",
    training_source_bookmark: "收藏",
    training_mode_label: "训练模式",
    training_mode_cram: "突击训练",
    training_count_label: "训练单词数量",
    training_count_unit: "个",
    training_start_button: "开始训练",
    training_summary_hint: "基于最近30天的数据，只针对你选择的单词进行训练。",
    training_done_simple: "训练已结束。",
    training_done: "训练完成。辛苦了。",
    training_select_target_warning: "请至少选择一个训练目标。",
    training_no_match: "没有符合选定条件的单词。",
    cram_retry_hint: "再试一次。",

    /* 사용자 뷰 */
    user_title: "首页",
    user_cefr_title: "CEFR 词汇进度",
    user_level_title_cjk: "词汇进度",
    user_settings_title: "学习设置",

    /* 학습 설정 */
    mode: "模式",
    goal_typing: "学习目标",
    goal_card: "卡片目标",
    new_word_cefr: "等级",
    new_word_cefr_all: "全部等级",
    category_label: "类别",
    category_all: "全部",
    category_exam: "Goethe",
    category_smalltalk: "闲聊",
    category_daily: "日常",
    category_basic: "基础",
    category_travel: "旅行",
    category_work: "工作",
    study_lang_en: "英语",
    study_lang_ko: "韩语",
    study_lang_de: "德语",

    /* 설정 */
    settings_title: "设置",
    settings_ui_lang_label: "界面语言",
    settings_study_lang_label: "学习语言",
    sound_label: "声音",
    sound_on: "开启",
    sound_off: "关闭",

    /* 모드 */
    typing_mode: "输入",
    card_mode: "卡片",
    copy_mode: "抄写",

    /* 카드/입력 */
    confirm: "确认",
    show_answer: "显示答案",
    answer: "答案",
    correct: "正确！",
    incorrect: "不太对。",
    correct_answer: "正确答案",
    need_article: "请输入冠词和名词。",
    article_incorrect: "请检查冠词。",
    noun_capitalization: "名词首字母需大写。",
    noun_spelling: "请检查单词拼写。",
    verb_lowercase: "动词、形容词和副词需小写。",
    article_lowercase: "冠词必须小写 (der/die/das)。",
    article_hint: "请检查冠词。",
    proper_capitalization: "名词首字母需大写。",
    copy_ok: "很好",
    copy_check_spelling: "请检查拼写。",
    card_view_count: "第 {n} 次",

    /* 진행도 */
    left_label: "剩余",
    progress_template: "{done}/{total} (剩余 {left}) [Lv.{level}]",

    /* 요약 */
    summary_title: "学习总结",
    summary_total: "总共学习的卡片",
    summary_new: "新学的单词",
    summary_review: "复习的单词",
    restart: "重新开始",
    no_words_today: "今天没有要学习的卡片。",

    /* 난이도 */
    difficulty_prompt: "请评价难度：",
    hard: "难",
    normal: "一般",
    easy: "容易",

    /* 틀린 단어 */
    mistakes_title: "难词",
    mistakes_desc: "在这里会汇总你经常标记为“困难”或多次答错的单词。",
    mistakes_empty: "目前还没有难词。",
    common_list_more: "...还有 {n} 个",

    /* 북마크 */
    bookmark_title: "收藏",
    bookmark_desc: "你加了星标的单词会显示在这里。",
    bookmark_empty: "你还没有收藏任何单词。",

    /* 검색 */
    search_title: "单词搜索",
    search_desc: "搜索单词以查看释义和 CEFR 等级。",
    search_mode_label: "搜索依据",
    search_mode_de: "德语",
    search_mode_ko: "韩语",
    search_placeholder: "请输入单词",
    search_empty: "请输入搜索词。",
    search_no_result: "没有找到结果。"
},

    /* -----------------------------------------------------
   러시아어 (ru)
----------------------------------------------------- */
ru: {
    app_title: "KarlLang",
    start_tagline: "",
    start_ui_label: "Язык интерфейса",
    start_study_label: "Язык обучения",
    start: "Начать",
    start_prompt: "Нажмите кнопку «Начать».",
    type_answer: "Введите ответ",

    /* 메뉴 */
    menu_user: "Главная",
    menu_study: "Обучение",
    menu_training: "Тренировка",
    menu_mistakes: "Сложные слова",
    menu_bookmark: "Избранное",
    menu_search: "Поиск слов",
    menu_settings: "Настройки",

            /* Тренировка */
    training_title: "Тренировка",
    training_desc: "Здесь ты целенаправленно тренируешь сложные, ошибочные и избранные слова.",
    training_target_label: "Цель тренировки",
    training_source_mistakes: "Неправильные ответы",
    training_source_hard: "Сложные слова",
    training_source_bookmark: "Избранное",
    training_mode_label: "Режим тренировки",
    training_mode_cram: "Cram",
    training_count_label: "Количество слов",
    training_count_unit: " слов",
    training_start_button: "Начать тренировку",
    training_summary_hint: "На основе данных за последние 30 дней тренируются только выбранные слова.",
    training_done_simple: "Тренировочная сессия завершена.",
    training_done: "Тренировка завершена. Отличная работа!",
    training_select_target_warning: "Пожалуйста, выберите хотя бы одну цель тренировки.",
    training_no_match: "Нет слов, соответствующих условиям.",
    cram_retry_hint: "Попробуйте ещё раз.",
    
    /* 사용자 뷰 */
    user_title: "Главная",
    user_cefr_title: "Прогресс по словарю CEFR",
    user_level_title_cjk: "Прогресс словарного запаса",
    user_settings_title: "Настройки обучения",

    /* 학습 설정 */
    mode: "Режим",
    goal_typing: "Цель обучения",
    goal_card: "Цель по карточкам",
    new_word_cefr: "Уровень",
    new_word_cefr_all: "Все уровни",
    category_label: "Категория",
    category_all: "Все",
    category_exam: "Goethe",
    category_smalltalk: "Смолток",
    category_daily: "Повседневное",
    category_basic: "Базовое",
    category_travel: "Путешествия",
    category_work: "Работа",
    study_lang_en: "Английский",
    study_lang_ko: "Корейский",
    study_lang_de: "Немецкий",

    /* 설정 */
    settings_title: "Настройки",
    settings_ui_lang_label: "Язык интерфейса",
    settings_study_lang_label: "Язык обучения",
    sound_label: "Звук",
    sound_on: "Вкл.",
    sound_off: "Выкл.",

    /* 모드 */
    typing_mode: "Ввод",
    card_mode: "Карточки",
    copy_mode: "Переписывание",

    /* 카드/입력 */
    confirm: "Подтвердить",
    show_answer: "Показать ответ",
    answer: "Ответ",
    correct: "Верно!",
    incorrect: "Не совсем.",
    correct_answer: "Правильный ответ",
    need_article: "Введите артикль и существительное.",
    article_incorrect: "Проверьте артикль.",
    noun_capitalization: "Первая буква существительного должна быть заглавной.",
    noun_spelling: "Проверьте написание слова.",
    verb_lowercase: "Глаголы, прилагательные и наречия пишутся строчными буквами.",
    article_lowercase: "Артикли всегда пишутся строчными (der/die/das).",
    article_hint: "Проверьте артикль.",
    proper_capitalization: "Первая буква существительного должна быть заглавной.",
    copy_ok: "Отлично",
    copy_check_spelling: "Проверьте орфографию.",
    card_view_count: "Видел {n} раз",
    
    /* 진행도 */
    left_label: "осталось",
    progress_template: "{done}/{total} (осталось {left}) [Lv.{level}]",

    /* 요약 */
    summary_title: "Итоги обучения",
    summary_total: "Всего изучено карточек",
    summary_new: "Новые слова",
    summary_review: "Повторённые слова",
    restart: "Начать заново",
    no_words_today: "Сегодня нет карточек для изучения.",

    /* 난이도 */
    difficulty_prompt: "Оцените сложность:",
    hard: "Сложно",
    normal: "Нормально",
    easy: "Легко",

    /* 틀린 단어 */
    mistakes_title: "Сложные слова",
    mistakes_desc: "Здесь собираются слова, которые ты часто отмечал как «сложные» или несколько раз вводил неправильно.",
    mistakes_empty: "Пока нет сложных слов.",
    common_list_more: "...и еще {n}",

    /* 북마크 */
    bookmark_title: "Избранное",
    bookmark_desc: "Слова со звёздочкой будут показаны здесь.",
    bookmark_empty: "Вы ещё не добавили слова в избранное.",

    /* 검색 */
    search_title: "Поиск слов",
    search_desc: "Ищите слова, чтобы увидеть значение и уровень CEFR.",
    search_mode_label: "Искать по",
    search_mode_de: "Немецкий",
    search_mode_ko: "Корейский",
    search_placeholder: "Введите слово",
    search_empty: "Введите поисковый запрос.",
    search_no_result: "Ничего не найдено."
}

};