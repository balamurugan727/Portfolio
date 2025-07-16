function sendMessage() {
  const input = document.getElementById("user-input");
  const language = document.getElementById("language-select").value;
  const word = input.value.trim().toLowerCase();
  const chatBox = document.getElementById("chat-box");

  if (word === "") return;

  chatBox.innerHTML += `<div class="user-msg fade-in">🧑 ${word}</div>`;

  // Word translations
  const translations = {
    hi: {
      en: "Hi",
      ta: "வணக்கம்",
      hi: "नमस्ते",
      fr: "Salut",
      es: "Hola",
      de: "Hi",
      ja: "やあ",
      ar: "مرحبًا"
    },
    hello: {
      en: "Hello",
      ta: "வணக்கம்",
      hi: "नमस्कार",
      fr: "Bonjour",
      es: "Hola",
      de: "Hallo",
      ja: "こんにちは",
      ar: "أهلاً"
    },
    "how are you?": {
      en: "How are you?",
      ta: "நீங்கள் எப்படி இருக்கிறீர்கள்?",
      hi: "आप कैसे हैं?",
      fr: "Comment ça va?",
      es: "¿Cómo estás?",
      de: "Wie geht's dir?",
      ja: "お元気ですか？",
      ar: "كيف حالك؟"
    },
    welcome: {
      en: "Welcome",
      ta: "வரவேற்கிறோம்",
      hi: "स्वागत है",
      fr: "Bienvenue",
      es: "Bienvenido",
      de: "Willkommen",
      ja: "ようこそ",
      ar: "أهلاً وسهلاً"
    },
    come: {
      en: "Come",
      ta: "வா",
      hi: "आओ",
      fr: "Viens",
      es: "Ven",
      de: "Komm",
      ja: "来て",
      ar: "تعال"
    },
    go: {
      en: "Go",
      ta: "போ",
      hi: "जाओ",
      fr: "Va",
      es: "Ve",
      de: "Geh",
      ja: "行って",
      ar: "اذهب"
    },
    listen: {
      en: "Listen",
      ta: "கேள்",
      hi: "सुनो",
      fr: "Écoute",
      es: "Escucha",
      de: "Hör zu",
      ja: "聞いて",
      ar: "استمع"
    },
    ride: {
      en: "Ride",
      ta: "சவாரி செய்",
      hi: "सवारी करना",
      fr: "Monter",
      es: "Montar",
      de: "Reiten",
      ja: "乗る",
      ar: "اركب"
    },
    eat: {
      en: "Eat",
      ta: "சாப்பிடு",
      hi: "खाओ",
      fr: "Mange",
      es: "Come",
      de: "Iss",
      ja: "食べて",
      ar: "كل"
    },
    walk: {
      en: "Walk",
      ta: "நட",
      hi: "चलो",
      fr: "Marche",
      es: "Camina",
      de: "Geh",
      ja: "歩いて",
      ar: "امشِ"
    },
    dance: {
      en: "Dance",
      ta: "நடனமாடு",
      hi: "नाचो",
      fr: "Danse",
      es: "Baila",
      de: "Tanze",
      ja: "踊って",
      ar: "ارقص"
    },
    read: {
      en: "Read",
      ta: "படி",
      hi: "पढ़ो",
      fr: "Lis",
      es: "Lee",
      de: "Lies",
      ja: "読んで",
      ar: "اقرأ"
    },
    write: {
      en: "Write",
      ta: "எழுது",
      hi: "लिखो",
      fr: "Écris",
      es: "Escribe",
      de: "Schreib",
      ja: "書いて",
      ar: "اكتب"
    },
    sing: {
      en: "Sing",
      ta: "பாடு",
      hi: "गाओ",
      fr: "Chante",
      es: "Canta",
      de: "Sing",
      ja: "歌って",
      ar: "غنِّ"
    },
    job: {
      en: "Job",
      ta: "வேலை",
      hi: "नौकरी",
      fr: "Emploi",
      es: "Trabajo",
      de: "Job",
      ja: "仕事",
      ar: "وظيفة"
    },
    language: {
      en: "Language",
      ta: "மொழி",
      hi: "भाषा",
      fr: "Langue",
      es: "Idioma",
      de: "Sprache",
      ja: "言語",
      ar: "لغة"
    },
    "thank you": {
      en: "Thank you",
      ta: "நன்றி",
      hi: "धन्यवाद",
      fr: "Merci",
      es: "Gracias",
      de: "Danke",
      ja: "ありがとう",
      ar: "شكراً"
    },
    sorry: {
      en: "Sorry",
      ta: "மன்னிக்கவும்",
      hi: "माफ कीजिए",
      fr: "Désolé",
      es: "Lo siento",
      de: "Entschuldigung",
      ja: "ごめんなさい",
      ar: "آسف"
    }
  };

  const phrase = translations[word];
  const translated = phrase ? phrase[language] : "Translation not available.";

  setTimeout(() => {
    chatBox.innerHTML += `<div class="bot-msg fade-in">🤖 ${translated}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 600);

  input.value = "";
}
