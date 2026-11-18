const puzzles = [
  {
    id: 1,
    title: { en: "The Parachutist", fa: "چترباز" },
    situation: {
      en: "A man is found dead in the middle of a field. Next to him is an unopened package. How did he die?",
      fa: "مردی در وسط یک مزرعه مرده پیدا می‌شود. کنار او یک بسته باز نشده وجود دارد. او چطور مرد؟"
    },
    solution: {
      en: "He jumped from a plane but his parachute failed to open. The unopened package is his parachute.",
      fa: "او از هواپیما پرید اما چتر نجاتش باز نشد. بسته باز نشده همان چتر نجات اوست."
    },
    keywords: {
      yes: ["parachute", "jump", "plane", "sky", "fall", "package", "unopened", "چتر", "پرید", "هواپیما", "آسمان", "افتاد", "بسته"],
      no: ["murder", "shot", "poison", "car", "train", "suicide", "قتل", "شلیک", "سم", "ماشین", "قطار"]
    }
  },
  {
    id: 2,
    title: { en: "Romeo & Juliet", fa: "رومئو و ژولیت" },
    situation: {
      en: "Romeo and Juliet are lying dead on the floor in a puddle of water and broken glass. How did they die?",
      fa: "رومئو و ژولیت روی زمین در گودالی از آب و تکه‌های شیشه شکسته مرده افتاده‌اند. چطور مردند؟"
    },
    solution: {
      en: "They are goldfish. Their bowl fell and broke, and they died without water.",
      fa: "آن‌ها ماهی قرمز بودند. تنگشان افتاد و شکست و بدون آب مردند."
    },
    keywords: {
      yes: ["fish", "goldfish", "bowl", "aquarium", "glass", "water", "pet", "ماهی", "قرمز", "تنگ", "آکواریوم", "شیشه", "آب"],
      no: ["poison", "knife", "gun", "suicide", "fight", "سم", "چاقو", "اسلحه", "خودکشی"]
    }
  },
  {
    id: 3,
    title: { en: "The Cabin", fa: "کلبه" },
    situation: {
      en: "A man is found dead in a cabin in the woods. The door is locked from the inside and there are no windows. How did he die?",
      fa: "مردی در یک کلبه در جنگل مرده پیدا می‌شود. در از داخل قفل است و هیچ پنجره‌ای وجود ندارد. او چطور مرد؟"
    },
    solution: {
      en: "He was in an airplane cabin (or cockpit). The plane crashed.",
      fa: "او در کابین هواپیما (یا کابین خلبان) بود. هواپیما سقوط کرد."
    },
    keywords: {
      yes: ["plane", "airplane", "aircraft", "crash", "pilot", "cabin", "هواپیما", "سقوط", "خلبان", "کابین"],
      no: ["murder", "hung", "poison", "fire", "قتل", "آویزان", "سم", "آتش"]
    }
  },
  {
    id: 4,
    title: { en: "The Elevator", fa: "آسانسور" },
    situation: {
      en: "A man lives on the 10th floor. Every day he takes the elevator down to the ground floor. When he returns, he takes the elevator to the 7th floor and walks the rest. Why?",
      fa: "مردی در طبقه دهم زندگی می‌کند. هر روز با آسانسور به طبقه همکف می‌رود. وقتی برمی‌گردد با آسانسور تا طبقه هفتم می‌رود و بقیه را پیاده طی می‌کند. چرا؟"
    },
    solution: {
      en: "He is a dwarf / short person. He can only reach the button for the 7th floor.",
      fa: "او کوتاه‌قد است. فقط می‌تواند دکمه طبقه هفتم را فشار دهد."
    },
    keywords: {
      yes: ["short", "dwarf", "height", "button", "reach", "small", "کوتاه", "قد", "دکمه", "برسد"],
      no: ["broken", "afraid", "exercise", "friend", "خراب", "ترس", "ورزش"]
    }
  },
  {
    id: 5,
    title: { en: "The Hunter", fa: "شکارچی" },
    situation: {
      en: "A hunter leaves his camp, walks 1 km south, 1 km east, shoots a bear, then walks 1 km north and is back at camp. What color is the bear?",
      fa: "شکارچی از کمپش بیرون می‌زند، ۱ کیلومتر به جنوب، ۱ کیلومتر به شرق می‌رود، یک خرس را شکار می‌کند، سپس ۱ کیلومتر به شمال برمی‌گردد و به کمپ می‌رسد. رنگ خرس چیست؟"
    },
    solution: {
      en: "White. He is at the North Pole, so the only bears are polar bears.",
      fa: "سفید. او در قطب شمال است، بنابراین فقط خرس قطبی وجود دارد."
    },
    keywords: {
      yes: ["north", "pole", "polar", "white", "arctic", "قطب", "شمال", "سفید", "قطبی"],
      no: ["brown", "black", "zoo", "forest", "قهوه‌ای", "سیاه", "جنگل"]
    }
  }
];

let currentLang = 'en';
let currentPuzzle = null;
let questionCount = 0;

const t = {
  en: {
    title: "Raz-e Penhan",
    subtitle: "Hidden Mystery",
    intro: "Solve mysterious situations by asking yes/no questions. Think outside the box!",
    back: "Back",
    askPlaceholder: "Ask a yes/no question...",
    ask: "Ask",
    reveal: "Reveal Solution",
    guess: "I know the answer!",
    solutionTitle: "Solution",
    close: "Close",
    yes: "Yes",
    no: "No",
    irrelevant: "That doesn't seem relevant...",
    closer: "You're getting closer!",
    tryAgain: "Not quite. Keep asking questions!",
    welcome: "Ask me yes/no questions to solve the mystery."
  },
  fa: {
    title: "راز پنهان",
    subtitle: "Hidden Mystery",
    intro: "با پرسیدن سؤال‌های بله/خیر موقعیت‌های مرموز را حل کنید. خارج از چارچوب فکر کنید!",
    back: "بازگشت",
    askPlaceholder: "یک سؤال بله/خیر بپرسید...",
    ask: "بپرس",
    reveal: "نمایش پاسخ",
    guess: "جواب رو می‌دونم!",
    solutionTitle: "پاسخ",
    close: "بستن",
    yes: "بله",
    no: "خیر",
    irrelevant: "به نظر مرتبط نیست...",
    closer: "داری نزدیک می‌شی!",
    tryAgain: "هنوز نه. به پرسیدن سؤال ادامه بده!",
    welcome: "با پرسیدن سؤال‌های بله/خیر راز را کشف کن."
  }
};

function setLang(lang) {
  currentLang = lang;
  document.body.classList.toggle('fa', lang === 'fa');
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  document.getElementById('lang-fa').classList.toggle('active', lang === 'fa');

  document.getElementById('title').textContent = t[lang].title;
  document.getElementById('subtitle').textContent = t[lang].subtitle;
  document.getElementById('intro-text').textContent = t[lang].intro;
  document.getElementById('back-text').textContent = t[lang].back;
  document.getElementById('question-input').placeholder = t[lang].askPlaceholder;
  document.getElementById('ask-btn').textContent = t[lang].ask;
  document.getElementById('reveal-btn').textContent = t[lang].reveal;
  document.getElementById('guess-btn').textContent = t[lang].guess;
  document.getElementById('modal-title').textContent = t[lang].solutionTitle;
  document.getElementById('modal-close').textContent = t[lang].close;

  renderPuzzleList();
  if (currentPuzzle) {
    updatePuzzleDisplay();
  }
}

function renderPuzzleList() {
  const list = document.getElementById('puzzle-list');
  list.innerHTML = '';
  puzzles.forEach(p => {
    const item = document.createElement('div');
    item.className = 'puzzle-item';
    item.onclick = () => startPuzzle(p.id);
    item.innerHTML = `
      <div class="num">${p.id}</div>
      <div class="info">
        <h3>${p.title[currentLang]}</h3>
        <p>${p.situation[currentLang].slice(0, 60)}...</p>
      </div>
    `;
    list.appendChild(item);
  });
}

function showSelect() {
  document.getElementById('select-screen').classList.add('active');
  document.getElementById('game-screen').classList.remove('active');
  currentPuzzle = null;
}

function startPuzzle(id) {
  currentPuzzle = puzzles.find(p => p.id === id);
  questionCount = 0;
  document.getElementById('select-screen').classList.remove('active');
  document.getElementById('game-screen').classList.add('active');
  updatePuzzleDisplay();
  
  const chat = document.getElementById('chat');
  chat.innerHTML = '';
  addBotMessage(t[currentLang].welcome);
}

function updatePuzzleDisplay() {
  if (!currentPuzzle) return;
  document.getElementById('puzzle-num').textContent = `Mystery #${currentPuzzle.id}`;
  document.getElementById('puzzle-title').textContent = currentPuzzle.title[currentLang];
  document.getElementById('puzzle-situation').textContent = currentPuzzle.situation[currentLang];
}

function addBotMessage(text, type = '') {
  const chat = document.getElementById('chat');
  const msg = document.createElement('div');
  msg.className = `message bot ${type}`;
  msg.textContent = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

function addUserMessage(text) {
  const chat = document.getElementById('chat');
  const msg = document.createElement('div');
  msg.className = 'message user';
  msg.textContent = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

function askQuestion() {
  const input = document.getElementById('question-input');
  const q = input.value.trim();
  if (!q || !currentPuzzle) return;

  addUserMessage(q);
  input.value = '';
  questionCount++;

  const lower = q.toLowerCase();
  const keys = currentPuzzle.keywords;

  let answer = t[currentLang].irrelevant;
  let type = '';

  // Simple keyword matching
  const hasYes = keys.yes.some(k => lower.includes(k.toLowerCase()));
  const hasNo = keys.no.some(k => lower.includes(k.toLowerCase()));

  if (hasYes && !hasNo) {
    answer = t[currentLang].yes;
    type = 'yes';
    if (questionCount > 2) {
      setTimeout(() => addBotMessage(t[currentLang].closer), 400);
    }
  } else if (hasNo) {
    answer = t[currentLang].no;
    type = 'no';
  }

  setTimeout(() => {
    addBotMessage(answer, type);
  }, 300);
}

function revealSolution() {
  if (!currentPuzzle) return;
  document.getElementById('modal-text').textContent = currentPuzzle.solution[currentLang];
  document.getElementById('modal').classList.remove('hidden');
}

function checkGuess() {
  const guess = prompt(currentLang === 'fa' ? 'جوابت رو بنویس:' : 'Type your answer:');
  if (!guess) return;

  const sol = currentPuzzle.solution[currentLang].toLowerCase();
  const g = guess.toLowerCase();

  // Very basic check
  const keyWords = currentPuzzle.keywords.yes;
  const matches = keyWords.filter(k => g.includes(k.toLowerCase())).length;

  if (matches >= 2 || g.includes(sol.slice(0, 20))) {
    addBotMessage(currentLang === 'fa' ? 'آفرین! درست فهمیدی 🎉' : 'Correct! Well done 🎉', 'yes');
    setTimeout(revealSolution, 800);
  } else {
    addBotMessage(t[currentLang].tryAgain);
  }
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

// Enter key support
document.getElementById('question-input').addEventListener('keypress', e => {
  if (e.key === 'Enter') askQuestion();
});

// Init
setLang('en');
renderPuzzleList();