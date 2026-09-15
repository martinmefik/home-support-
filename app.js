/* ============================================================
   УМНЫЙ ХОЛОДИЛЬНИК — логика приложения
   ============================================================ */

// ---------- БАЗА РЕЦЕПТОВ ----------
// Структура: id, name, category, time (мин), servings,
// ingredients: [{ name, qty, unit }], steps: [ "..." ]
const RECIPES = [
  {
    id: 1,
    name: "Паста с томатами и базиликом",
    category: "Основное",
    time: 25,
    servings: 2,
    ingredients: [
      { name: "Спагетти", qty: 200, unit: "г" },
      { name: "Помидоры", qty: 3, unit: "шт" },
      { name: "Чеснок", qty: 2, unit: "зуб" },
      { name: "Базилик", qty: 10, unit: "г" },
      { name: "Оливковое масло", qty: 2, unit: "ст.л." },
      { name: "Соль", qty: 1, unit: "щеп" },
      { name: "Перец чёрный", qty: 1, unit: "щеп" }
    ],
    steps: [
      "Отварите спагетти в подсоленной воде до готовности.",
      "Помидоры нарежьте кубиками, чеснок измельчите.",
      "Разогрейте оливковое масло, обжарьте чеснок 1 минуту.",
      "Добавьте помидоры, тушите 5–7 минут.",
      "Добавьте базилик, соль и перец.",
      "Смешайте пасту с соусом и подавайте."
    ]
  },
  {
    id: 2,
    name: "Омлет с сыром и помидорами",
    category: "Завтрак",
    time: 15,
    servings: 2,
    ingredients: [
      { name: "Яйца", qty: 4, unit: "шт" },
      { name: "Молоко", qty: 50, unit: "мл" },
      { name: "Сыр", qty: 80, unit: "г" },
      { name: "Помидоры", qty: 1, unit: "шт" },
      { name: "Масло сливочное", qty: 10, unit: "г" },
      { name: "Соль", qty: 1, unit: "щеп" }
    ],
    steps: [
      "Взбейте яйца с молоком и солью.",
      "Помидоры нарежьте тонкими ломтиками, сыр натрите.",
      "Растопите масло на сковороде.",
      "Вылейте яичную смесь, готовьте на среднем огне.",
      "Когда низ схватится, выложите помидоры и сыр.",
      "Накройте крышкой и готовьте ещё 3–4 минуты."
    ]
  },
  {
    id: 3,
    name: "Куриный суп с овощами",
    category: "Суп",
    time: 50,
    servings: 4,
    ingredients: [
      { name: "Курица", qty: 400, unit: "г" },
      { name: "Картофель", qty: 3, unit: "шт" },
      { name: "Морковь", qty: 1, unit: "шт" },
      { name: "Лук", qty: 1, unit: "шт" },
      { name: "Лавровый лист", qty: 1, unit: "шт" },
      { name: "Соль", qty: 1, unit: "щеп" },
      { name: "Зелень", qty: 10, unit: "г" }
    ],
    steps: [
      "Курицу залейте холодной водой, доведите до кипения, снимите пену.",
      "Варите бульон 30 минут на слабом огне.",
      "Достаньте курицу, отделите мясо от костей.",
      "В бульон добавьте нарезанный картофель, морковь, лук.",
      "Варите 15 минут, добавьте лавровый лист и соль.",
      "Верните мясо, варите ещё 5 минут, добавьте зелень."
    ]
  },
  {
    id: 4,
    name: "Греческий салат",
    category: "Салат",
    time: 15,
    servings: 2,
    ingredients: [
      { name: "Огурец", qty: 1, unit: "шт" },
      { name: "Помидоры", qty: 2, unit: "шт" },
      { name: "Перец болгарский", qty: 1, unit: "шт" },
      { name: "Сыр фета", qty: 100, unit: "г" },
      { name: "Маслины", qty: 50, unit: "г" },
      { name: "Оливковое масло", qty: 2, unit: "ст.л." },
      { name: "Лимон", qty: 0.5, unit: "шт" }
    ],
    steps: [
      "Нарежьте огурец, помидоры и перец крупными кубиками.",
      "Добавьте маслины и фету, нарезанную кубиками.",
      "Заправьте оливковым маслом и соком лимона.",
      "Аккуратно перемешайте и подавайте."
    ]
  },
  {
    id: 5,
    name: "Рис с овощами и курицей",
    category: "Основное",
    time: 35,
    servings: 3,
    ingredients: [
      { name: "Рис", qty: 300, unit: "г" },
      { name: "Курица", qty: 300, unit: "г" },
      { name: "Морковь", qty: 1, unit: "шт" },
      { name: "Лук", qty: 1, unit: "шт" },
      { name: "Перец болгарский", qty: 1, unit: "шт" },
      { name: "Соевый соус", qty: 3, unit: "ст.л." },
      { name: "Масло растительное", qty: 2, unit: "ст.л." }
    ],
    steps: [
      "Курицу нарежьте кусочками и обжарьте до золотистой корочки.",
      "Добавьте лук, морковь и перец, обжаривайте 5 минут.",
      "Добавьте промытый рис и соевый соус, перемешайте.",
      "Залейте водой (2:1 от риса), доведите до кипения.",
      "Накройте крышкой и готовьте на слабом огне 20 минут.",
      "Дайте настояться 5 минут перед подачей."
    ]
  },
  {
    id: 6,
    name: "Сырники",
    category: "Завтрак",
    time: 25,
    servings: 3,
    ingredients: [
      { name: "Творог", qty: 400, unit: "г" },
      { name: "Яйца", qty: 2, unit: "шт" },
      { name: "Мука", qty: 100, unit: "г" },
      { name: "Сахар", qty: 2, unit: "ст.л." },
      { name: "Соль", qty: 1, unit: "щеп" },
      { name: "Масло растительное", qty: 2, unit: "ст.л." }
    ],
    steps: [
      "Смешайте творог, яйца, сахар и соль.",
      "Добавьте муку и замесите мягкое тесто.",
      "Сформируйте небольшие лепёшки.",
      "Обжарьте на разогретом масле по 3–4 минуты с каждой стороны.",
      "Подавайте со сметаной или вареньем."
    ]
  },
  {
    id: 7,
    name: "Борщ",
    category: "Суп",
    time: 90,
    servings: 6,
    ingredients: [
      { name: "Свёкла", qty: 2, unit: "шт" },
      { name: "Капуста", qty: 300, unit: "г" },
      { name: "Картофель", qty: 4, unit: "шт" },
      { name: "Морковь", qty: 1, unit: "шт" },
      { name: "Лук", qty: 1, unit: "шт" },
      { name: "Мясо", qty: 500, unit: "г" },
      { name: "Томатная паста", qty: 2, unit: "ст.л." }
    ],
    steps: [
      "Сварите бульон из мяса (60 минут).",
      "Натрите свёклу и морковь, нарежьте лук, обжарьте с томатной пастой.",
      "Добавьте в бульон нарезанный картофель, варите 10 минут.",
      "Добавьте капусту и зажарку, варите 15 минут.",
      "Добавьте специи и зелень, дайте настояться 20 минут."
    ]
  },
  {
    id: 8,
    name: "Панкейки",
    category: "Завтрак",
    time: 20,
    servings: 4,
    ingredients: [
      { name: "Мука", qty: 200, unit: "г" },
      { name: "Молоко", qty: 300, unit: "мл" },
      { name: "Яйца", qty: 2, unit: "шт" },
      { name: "Сахар", qty: 2, unit: "ст.л." },
      { name: "Разрыхлитель", qty: 1, unit: "ч.л." },
      { name: "Соль", qty: 1, unit: "щеп" }
    ],
    steps: [
      "Смешайте сухие ингредиенты.",
      "Добавьте яйца и молоко, взбейте до однородности.",
      "Разогрейте сковороду на среднем огне.",
      "Вылейте небольшие порции теста.",
      "Готовьте по 2 минуты с каждой стороны до золотистого цвета."
    ]
  },
  {
    id: 9,
    name: "Салат Цезарь с курицей",
    category: "Салат",
    time: 30,
    servings: 2,
    ingredients: [
      { name: "Курица", qty: 250, unit: "г" },
      { name: "Салат романо", qty: 200, unit: "г" },
      { name: "Сухарики", qty: 100, unit: "г" },
      { name: "Сыр пармезан", qty: 50, unit: "г" },
      { name: "Соус Цезарь", qty: 100, unit: "г" },
      { name: "Яйца", qty: 1, unit: "шт" }
    ],
    steps: [
      "Курицу нарежьте и обжарьте до готовности.",
      "Салат порвите руками, добавьте сухарики.",
      "Сверху выложите курицу и натёртый сыр.",
      "Заправьте соусом и подавайте."
    ]
  },
  {
    id: 10,
    name: "Картофельное пюре с котлетами",
    category: "Основное",
    time: 45,
    servings: 4,
    ingredients: [
      { name: "Картофель", qty: 800, unit: "г" },
      { name: "Молоко", qty: 150, unit: "мл" },
      { name: "Масло сливочное", qty: 50, unit: "г" },
      { name: "Фарш", qty: 500, unit: "г" },
      { name: "Лук", qty: 1, unit: "шт" },
      { name: "Яйца", qty: 1, unit: "шт" },
      { name: "Хлеб", qty: 2, unit: "лом" }
    ],
    steps: [
      "Картофель отварите в подсоленной воде до мягкости.",
      "Слейте воду, добавьте молоко и масло, разомните в пюре.",
      "В фарш добавьте лук, яйцо, размоченный хлеб, соль и перец.",
      "Сформируйте котлеты и обжарьте по 4–5 минут с каждой стороны.",
      "Подавайте пюре с котлетами и зеленью."
    ]
  },
  {
    id: 11,
    name: "Творожная запеканка",
    category: "Десерт",
    time: 50,
    servings: 4,
    ingredients: [
      { name: "Творог", qty: 500, unit: "г" },
      { name: "Яйца", qty: 3, unit: "шт" },
      { name: "Сахар", qty: 3, unit: "ст.л." },
      { name: "Манка", qty: 3, unit: "ст.л." },
      { name: "Молоко", qty: 100, unit: "мл" },
      { name: "Изюм", qty: 50, unit: "г" }
    ],
    steps: [
      "Смешайте творог, яйца, сахар, манку и молоко.",
      "Добавьте изюм и перемешайте.",
      "Выложите в форму, смазанную маслом.",
      "Выпекайте при 180°C 35–40 минут.",
      "Дайте остыть и подавайте со сметаной."
    ]
  },
  {
    id: 12,
    name: "Плов",
    category: "Основное",
    time: 60,
    servings: 5,
    ingredients: [
      { name: "Рис", qty: 500, unit: "г" },
      { name: "Мясо", qty: 500, unit: "г" },
      { name: "Морковь", qty: 3, unit: "шт" },
      { name: "Лук", qty: 2, unit: "шт" },
      { name: "Чеснок", qty: 1, unit: "головка" },
      { name: "Масло растительное", qty: 50, unit: "мл" },
      { name: "Специи для плова", qty: 1, unit: "ст.л." }
    ],
    steps: [
      "Мясо нарежьте кубиками и обжарьте в казане.",
      "Добавьте лук и морковь, обжаривайте 5 минут.",
      "Добавьте специи и чеснок.",
      "Залейте водой, чтобы покрыла мясо, тушите 20 минут.",
      "Добавьте рис, разровняйте, воткните чеснок.",
      "Залейте водой на 2 см выше риса, готовьте на слабом огне 25 минут.",
      "Накройте и дайте настояться 10 минут."
    ]
  },
  {
    id: 13,
    name: "Яичница с беконом",
    category: "Завтрак",
    time: 10,
    servings: 1,
    ingredients: [
      { name: "Яйца", qty: 2, unit: "шт" },
      { name: "Бекон", qty: 50, unit: "г" },
      { name: "Масло сливочное", qty: 5, unit: "г" },
      { name: "Соль", qty: 1, unit: "щеп" },
      { name: "Перец чёрный", qty: 1, unit: "щеп" }
    ],
    steps: [
      "Обжарьте бекон на сухой сковороде до хруста.",
      "Добавьте масло, разбейте яйца.",
      "Готовьте 3–4 минуты на среднем огне.",
      "Посолите, поперчите и подавайте."
    ]
  },
  {
    id: 14,
    name: "Куриные котлеты на пару",
    category: "Основное",
    time: 40,
    servings: 4,
    ingredients: [
      { name: "Курица", qty: 500, unit: "г" },
      { name: "Лук", qty: 1, unit: "шт" },
      { name: "Яйца", qty: 1, unit: "шт" },
      { name: "Хлеб", qty: 1, unit: "лом" },
      { name: "Молоко", qty: 50, unit: "мл" },
      { name: "Соль", qty: 1, unit: "щеп" }
    ],
    steps: [
      "Курицу пропустите через мясорубку.",
      "Добавьте лук, яйцо, хлеб, размоченный в молоке.",
      "Посолите и перемешайте фарш.",
      "Сформируйте котлеты и готовьте на пару 25 минут."
    ]
  },
  {
    id: 15,
    name: "Овощное рагу",
    category: "Основное",
    time: 40,
    servings: 4,
    ingredients: [
      { name: "Картофель", qty: 4, unit: "шт" },
      { name: "Морковь", qty: 1, unit: "шт" },
      { name: "Лук", qty: 1, unit: "шт" },
      { name: "Перец болгарский", qty: 1, unit: "шт" },
      { name: "Кабачок", qty: 1, unit: "шт" },
      { name: "Томатная паста", qty: 2, unit: "ст.л." },
      { name: "Масло растительное", qty: 2, unit: "ст.л." }
    ],
    steps: [
      "Нарежьте все овощи кубиками.",
      "Обжарьте лук и морковь в масле.",
      "Добавьте картофель, кабачок и перец.",
      "Добавьте томатную пасту и воду (200 мл).",
      "Тушите под крышкой 25 минут на слабом огне."
    ]
  },
  {
    id: 16,
    name: "Гречка с грибами",
    category: "Основное",
    time: 30,
    servings: 3,
    ingredients: [
      { name: "Гречка", qty: 300, unit: "г" },
      { name: "Грибы", qty: 300, unit: "г" },
      { name: "Лук", qty: 1, unit: "шт" },
      { name: "Масло растительное", qty: 2, unit: "ст.л." },
      { name: "Соль", qty: 1, unit: "щеп" }
    ],
    steps: [
      "Гречку промойте и отварите в подсоленной воде (1:2).",
      "Грибы нарежьте и обжарьте с луком до золотистого цвета.",
      "Смешайте гречку с грибами, прогрейте 2 минуты.",
      "Подавайте с зеленью."
    ]
  },
  {
    id: 17,
    name: "Банан с творогом и мёдом",
    category: "Десерт",
    time: 5,
    servings: 1,
    ingredients: [
      { name: "Банан", qty: 1, unit: "шт" },
      { name: "Творог", qty: 150, unit: "г" },
      { name: "Мёд", qty: 1, unit: "ст.л." },
      { name: "Орехи", qty: 20, unit: "г" }
    ],
    steps: [
      "Банан нарежьте кружочками.",
      "Смешайте творог с мёдом.",
      "Выложите банан, сверху творожную массу.",
      "Посыпьте измельчёнными орехами."
    ]
  },
  {
    id: 18,
    name: "Рыбные котлеты",
    category: "Основное",
    time: 35,
    servings: 4,
    ingredients: [
      { name: "Рыба", qty: 500, unit: "г" },
      { name: "Яйца", qty: 1, unit: "шт" },
      { name: "Лук", qty: 1, unit: "шт" },
      { name: "Хлеб", qty: 1, unit: "лом" },
      { name: "Молоко", qty: 50, unit: "мл" },
      { name: "Соль", qty: 1, unit: "щеп" }
    ],
    steps: [
      "Рыбу пропустите через мясорубку.",
      "Добавьте лук, яйцо, размоченный хлеб, соль.",
      "Сформируйте котлеты.",
      "Обжарьте по 4 минуты с каждой стороны."
    ]
  },
  {
    id: 19,
    name: "Пицца Маргарита",
    category: "Основное",
    time: 50,
    servings: 4,
    ingredients: [
      { name: "Мука", qty: 300, unit: "г" },
      { name: "Дрожжи", qty: 7, unit: "г" },
      { name: "Вода", qty: 200, unit: "мл" },
      { name: "Томатный соус", qty: 150, unit: "г" },
      { name: "Моцарелла", qty: 200, unit: "г" },
      { name: "Базилик", qty: 10, unit: "г" },
      { name: "Оливковое масло", qty: 2, unit: "ст.л." }
    ],
    steps: [
      "Замесите тесто из муки, дрожжей, воды и масла.",
      "Дайте тесту подойти 30 минут.",
      "Раскатайте тонкий круг.",
      "Смажьте томатным соусом, выложите моцареллу.",
      "Выпекайте при 220°C 12–15 минут.",
      "Посыпьте базиликом перед подачей."
    ]
  },
  {
    id: 20,
    name: "Смузи из ягод и банана",
    category: "Напиток",
    time: 5,
    servings: 2,
    ingredients: [
      { name: "Ягоды", qty: 200, unit: "г" },
      { name: "Банан", qty: 1, unit: "шт" },
      { name: "Йогурт", qty: 200, unit: "мл" },
      { name: "Мёд", qty: 1, unit: "ст.л." }
    ],
    steps: [
      "Все ингредиенты поместите в блендер.",
      "Взбейте до однородной массы.",
      "Разлейте по стаканам и подавайте."
    ]
  }
];

// ---------- СОСТОЯНИЕ ----------
let currentUser = null;
let fridge = [];       // [{ id, name, qty, unit, category, expiry }]
let shoppingList = []; // [{ id, name, qty, unit, recipe, bought }]
let activeRecipeId = null;

// ---------- УТИЛИТЫ ----------
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function showToast(msg) {
  const toast = $('#toast');
  toast.textContent = msg;
  toast.classList.remove('hidden');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.add('hidden'), 2500);
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' });
}

function daysUntil(dateStr) {
  if (!dateStr) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(dateStr);
  target.setHours(0, 0, 0, 0);
  return Math.round((target - today) / (1000 * 60 * 60 * 24));
}

function normalize(str) {
  return str.toLowerCase().trim()
    .replace(/ё/g, 'е')
    .replace(/[^a-zа-я0-9\s]/g, '');
}

function ingredientMatches(recipeIng, fridgeItems) {
  const target = normalize(recipeIng.name);
  return fridgeItems.find(item => {
    const itemName = normalize(item.name);
    return itemName === target ||
      itemName.includes(target) ||
      target.includes(itemName);
  });
}

// ---------- АВТОРИЗАЦИЯ ----------
function saveUsers(users) {
  localStorage.setItem('sf_users', JSON.stringify(users));
}

function getUsers() {
  return JSON.parse(localStorage.getItem('sf_users') || '[]');
}

function saveSession(email) {
  localStorage.setItem('sf_session', email);
}

function clearSession() {
  localStorage.removeItem('sf_session');
}

function loadUserData(email) {
  const key = 'sf_data_' + email;
  const data = JSON.parse(localStorage.getItem(key) || '{}');
  fridge = data.fridge || [];
  shoppingList = data.shoppingList || [];
}

function persistUserData() {
  if (!currentUser) return;
  const key = 'sf_data_' + currentUser.email;
  localStorage.setItem(key, JSON.stringify({ fridge, shoppingList }));
}

function initAuth() {
  const session = localStorage.getItem('sf_session');
  if (!session) return;

  const users = getUsers();
  const user = users.find(u => u.email === session);
  if (user) {
    currentUser = user;
    loadUserData(user.email);
    enterApp();
  }
}

// ---------- ВХОД В ПРИЛОЖЕНИЕ ----------
function enterApp() {
  $('#auth-screen').classList.add('hidden');
  $('#app').classList.remove('hidden');
  $('#header-user-name').textContent = currentUser.name;
  renderFridge();
  renderRecipes();
  renderShopping();
}

function logout() {
  currentUser = null;
  clearSession();
  $('#app').classList.add('hidden');
  $('#auth-screen').classList.remove('hidden');
  $('#login-form').reset();
  $('#register-form').reset();
}

// ---------- РЕНДЕР: ХОЛОДИЛЬНИК ----------
function renderFridge() {
  const list = $('#fridge-list');
  const empty = $('#fridge-empty');
  const search = $('#fridge-search').value.toLowerCase();
  const catFilter = $('#fridge-category-filter').value;

  let items = fridge.filter(item => {
    const matchSearch = item.name.toLowerCase().includes(search);
    const matchCat = !catFilter || item.category === catFilter;
    return matchSearch && matchCat;
  });

  items.sort((a, b) => {
    const da = a.expiry ? daysUntil(a.expiry) : 9999;
    const db = b.expiry ? daysUntil(b.expiry) : 9999;
    return da - db;
  });

  // Статистика
  const now = new Date(); now.setHours(0,0,0,0);
  let expiring = 0, expired = 0;
  fridge.forEach(item => {
    if (!item.expiry) return;
    const d = daysUntil(item.expiry);
    if (d < 0) expired++;
    else if (d <= 3) expiring++;
  });
  $('#stat-total').textContent = fridge.length;
  $('#stat-expiring').textContent = expiring;
  $('#stat-expired').textContent = expired;

  if (items.length === 0) {
    list.innerHTML = '';
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');

  list.innerHTML = items.map(item => {
    let expiryClass = '';
    let expiryText = '';
    if (item.expiry) {
      const d = daysUntil(item.expiry);
      if (d < 0) { expiryClass = 'expired'; expiryText = 'Просрочено'; }
      else if (d <= 3) { expiryClass = 'expiring-soon'; expiryText = d === 0 ? 'Сегодня' : `Осталось ${d} дн.`; }
      else { expiryText = `До ${formatDate(item.expiry)}`; }
    }
    return `
      <div class="product-card ${expiryClass}">
        <div class="product-info">
          <div class="product-name">${item.name}</div>
          <div class="product-details">${item.qty} ${item.unit} · ${item.category}</div>
          ${expiryText ? `<div class="product-expiry ${expiryClass}">${expiryText}</div>` : ''}
        </div>
        <div class="product-actions">
          <button onclick="removeProduct('${item.id}')" title="Удалить">✕</button>
        </div>
      </div>
    `;
  }).join('');
}

window.removeProduct = function(id) {
  fridge = fridge.filter(p => p.id !== id);
  persistUserData();
  renderFridge();
  renderRecipes();
  showToast('Продукт удалён');
};

// ---------- РЕНДЕР: РЕЦЕПТЫ ----------
function getRecipeMatch(recipe) {
  const have = [];
  const missing = [];
  recipe.ingredients.forEach(ing => {
    const found = ingredientMatches(ing, fridge);
    if (found) have.push(ing);
    else missing.push(ing);
  });
  return { have, missing, percent: Math.round(have.length / recipe.ingredients.length * 100) };
}

function renderRecipes() {
  const list = $('#recipes-list');
  const empty = $('#recipes-empty');
  const search = $('#recipe-search').value.toLowerCase();
  const sort = $('#recipe-sort').value;
  const onlyAvailable = $('#only-available').checked;

  let items = RECIPES.map(r => ({ ...r, _match: getRecipeMatch(r) }));

  if (search) {
    items = items.filter(r =>
      r.name.toLowerCase().includes(search) ||
      r.ingredients.some(i => i.name.toLowerCase().includes(search))
    );
  }

  if (onlyAvailable) {
    items = items.filter(r => r._match.missing.length === 0);
  }

  if (sort === 'match') items.sort((a, b) => b._match.percent - a._match.percent);
  else if (sort === 'time') items.sort((a, b) => a.time - b.time);
  else if (sort === 'name') items.sort((a, b) => a.name.localeCompare(b.name));

  if (items.length === 0) {
    list.innerHTML = '';
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');

  list.innerHTML = items.map(r => {
    const m = r._match;
    const haveNames = m.have.map(i => i.name).join(', ');
    const missingNames = m.missing.map(i => i.name).join(', ');
    return `
      <div class="recipe-card" onclick="openRecipe(${r.id})">
        <div class="recipe-card-header">
          <div class="recipe-card-title">${r.name}</div>
          <div class="recipe-card-meta">
            <span>⏱ ${r.time} мин</span>
            <span>🍽 ${r.servings} порц.</span>
            <span>${r.category}</span>
          </div>
          <div class="recipe-match-bar">
            <div class="recipe-match-fill" style="width:${m.percent}%"></div>
          </div>
        </div>
        <div class="recipe-card-ingredients">
          ${haveNames ? `<div><span class="have">Есть:</span> ${haveNames}</div>` : ''}
          ${missingNames ? `<div><span class="missing">Нужно:</span> ${missingNames}</div>` : ''}
        </div>
        <div class="recipe-card-footer">
          ${m.missing.length === 0 ? '✅ Всё есть — можно готовить!' : `🛒 Не хватает: ${m.missing.length} ингр.`}
        </div>
      </div>
    `;
  }).join('');
}

window.openRecipe = function(id) {
  const recipe = RECIPES.find(r => r.id === id);
  if (!recipe) return;
  activeRecipeId = id;
  const m = getRecipeMatch(recipe);

  $('#recipe-modal-title').textContent = recipe.name;
  $('#recipe-modal-meta').innerHTML = `
    <span>⏱ ${recipe.time} мин</span>
    <span>🍽 ${recipe.servings} порций</span>
    <span>${recipe.category}</span>
  `;

  $('#recipe-modal-ingredients').innerHTML = recipe.ingredients.map(ing => {
    const has = m.have.includes(ing);
    return `
      <li class="${has ? 'have' : 'missing'}">
        <span>${ing.name} — ${ing.qty} ${ing.unit}</span>
        <span class="mark">${has ? 'Есть' : 'Нужно'}</span>
      </li>
    `;
  }).join('');

  $('#recipe-modal-steps').innerHTML = recipe.steps.map(s => `<li>${s}</li>`).join('');

  $('#modal-recipe').classList.remove('hidden');
};

// ---------- СПИСОК ПОКУПОК ----------
function renderShopping() {
  const list = $('#shopping-list');
  const empty = $('#shopping-empty');
  const badge = $('#shopping-badge');

  const active = shoppingList.filter(i => !i.bought);
  if (active.length > 0) {
    badge.textContent = active.length;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }

  if (shoppingList.length === 0) {
    list.innerHTML = '';
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');

  list.innerHTML = shoppingList.map(item => `
    <div class="shopping-item ${item.bought ? 'bought' : ''}">
      <input type="checkbox" ${item.bought ? 'checked' : ''} onchange="toggleBought('${item.id}')">
      <div class="shopping-item-info">
        <div class="shopping-item-name">${item.name}</div>
        ${item.recipe ? `<div class="shopping-item-recipe">Для: ${item.recipe}</div>` : ''}
      </div>
      <div class="shopping-item-qty">${item.qty} ${item.unit}</div>
      <button class="remove-btn" onclick="removeShoppingItem('${item.id}')">✕</button>
    </div>
  `).join('');
}

window.toggleBought = function(id) {
  const item = shoppingList.find(i => i.id === id);
  if (item) {
    item.bought = !item.bought;
    persistUserData();
    renderShopping();
  }
};

window.removeShoppingItem = function(id) {
  shoppingList = shoppingList.filter(i => i.id !== id);
  persistUserData();
  renderShopping();
};

// ---------- ДОБАВЛЕНИЕ НЕДОСТАЮЩЕГО В СПИСОК ----------
$('#add-missing-to-shopping').addEventListener('click', () => {
  const recipe = RECIPES.find(r => r.id === activeRecipeId);
  if (!recipe) return;
  const m = getRecipeMatch(recipe);
  let added = 0;
  m.missing.forEach(ing => {
    const exists = shoppingList.find(i =>
      normalize(i.name) === normalize(ing.name) && !i.bought
    );
    if (!exists) {
      shoppingList.push({
        id: generateId(),
        name: ing.name,
        qty: ing.qty,
        unit: ing.unit,
        recipe: recipe.name,
        bought: false
      });
      added++;
    }
  });
  persistUserData();
  renderShopping();
  $('#modal-recipe').classList.add('hidden');
  showToast(added > 0 ? `Добавлено ${added} ингредиентов в список` : 'Всё уже в списке');
});

// ---------- МОДАЛКИ ----------
function setupModals() {
  // Закрытие по крестику и фону
  $$('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = document.getElementById(btn.dataset.modal);
      if (modal) modal.classList.add('hidden');
    });
  });
  $$('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  });

  // Открытие добавления продукта
  $('#open-add-product').addEventListener('click', () => {
    $('#product-form').reset();
    $('#product-qty').value = 1;
    $('#modal-product').classList.remove('hidden');
  });

  // Форма продукта
  $('#product-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#product-name').value.trim();
    if (!name) return;
    fridge.push({
      id: generateId(),
      name,
      qty: parseFloat($('#product-qty').value) || 1,
      unit: $('#product-unit').value,
      category: $('#product-category').value,
      expiry: $('#product-expiry').value || null
    });
    persistUserData();
    renderFridge();
    renderRecipes();
    $('#modal-product').classList.add('hidden');
    showToast('Продукт добавлен');
  });
}

// ---------- НАВИГАЦИЯ ----------
function setupNav() {
  $$('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      $$('.app-section').forEach(s => s.classList.remove('active'));
      const section = document.getElementById('section-' + btn.dataset.section);
      if (section) section.classList.add('active');
    });
  });
}

// ---------- АВТОРИЗАЦИЯ: ОБРАБОТЧИКИ ----------
function setupAuth() {
  // Переключение табов
  $$('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.auth-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      $$('.auth-form').forEach(f => f.classList.remove('active'));
      const form = document.getElementById(tab.dataset.tab + '-form');
      if (form) form.classList.add('active');
    });
  });

  // Вход
  $('#login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = $('#login-email').value.trim().toLowerCase();
    const pass = $('#login-password').value;
    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === pass);
    if (!user) {
      $('#login-error').textContent = 'Неверный email или пароль';
      return;
    }
    $('#login-error').textContent = '';
    currentUser = user;
    saveSession(email);
    loadUserData(email);
    enterApp();
  });

  // Регистрация
  $('#register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#register-name').value.trim();
    const email = $('#register-email').value.trim().toLowerCase();
    const pass = $('#register-password').value;
    if (pass.length < 4) {
      $('#register-error').textContent = 'Пароль должен быть не менее 4 символов';
      return;
    }
    const users = getUsers();
    if (users.find(u => u.email === email)) {
      $('#register-error').textContent = 'Пользователь с таким email уже существует';
      return;
    }
    const newUser = { name, email, password: pass };
    users.push(newUser);
    saveUsers(users);
    $('#register-error').textContent = '';
    currentUser = newUser;
    saveSession(email);
    fridge = [];
    shoppingList = [];
    persistUserData();
    enterApp();
  });

  // Выход
  $('#logout-btn').addEventListener('click', logout);
}

// ---------- ФИЛЬТРЫ ----------
function setupFilters() {
  $('#fridge-search').addEventListener('input', renderFridge);
  $('#fridge-category-filter').addEventListener('change', renderFridge);
  $('#recipe-search').addEventListener('input', renderRecipes);
  $('#recipe-sort').addEventListener('change', renderRecipes);
  $('#only-available').addEventListener('change', renderRecipes);

  $('#clear-bought').addEventListener('click', () => {
    shoppingList = shoppingList.filter(i => !i.bought);
    persistUserData();
    renderShopping();
    showToast('Купленное убрано');
  });
}

// ---------- ИНИЦИАЛИЗАЦИЯ ----------
document.addEventListener('DOMContentLoaded', () => {
  setupAuth();
  setupNav();
  setupModals();
  setupFilters();
  initAuth();
});