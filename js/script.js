'use strict';

/** @typedef {'ru'|'en'|'kg'|'kz'} LangCode */

const LANGS = {
  ru: {
    'nav-about': 'Об отеле', 'nav-rooms': 'Номера', 'nav-restaurant': 'Ресторан', 'nav-map': 'Карта',
    'nav-book-hotel': 'Забронировать', 'nav-book-rest': 'Стол в ресторане',
    'mob-about': 'Об отеле', 'mob-rooms': 'Номера', 'mob-restaurant': 'Ресторан', 'mob-map': 'Карта',
    'hero-title1': 'Роскошь на берегу', 'hero-title2': 'горного озера',
    'hero-sub': 'NOVEL — апарт-отель 4★ с частным пляжем, тремя пирсами и рестораном The Story Café. 70 метров от кристального Иссык-Куля.',
    'hero-btn1': 'Забронировать номер', 'hero-btn2': 'Стол в ресторане',
    'about-eye': 'Об отеле', 'about-title1': 'Ваш дом у', 'about-title2': 'горного озера',
    'about-p1': 'NOVEL — 4-звёздочный апарт-отель в деревне Корумду на северном берегу Иссык-Куля. Три деревянных пирса уходят прямо в кристальную воду, а из окон открываются виды на заснеженный Тянь-Шань.',
    'about-p2': 'Каждый из 51 апартамента оборудован полной кухней, кондиционером и Wi-Fi. Отдельные коттеджи с собственным двором — идеальный выбор для семей.',
    'rooms-eye': 'Размещение', 'rooms-title1': 'Номера и', 'rooms-title2': 'коттеджи',
    'rooms-sub': 'Выберите идеальный вариант: от апартаментов с видом на озеро до просторных коттеджей со своим двором.',
    'tab-rooms': 'Номера', 'tab-cottage': 'Коттеджи',
    'beach-eye': 'Инфраструктура', 'beach-title1': 'Пляж, пирсы', 'beach-title2': 'бассейн',
    'beach-sub': 'Три пирса прямо от отеля уходят в бирюзовую воду Иссык-Куля. Частный пляж только для гостей.',
    'rest-eye': 'Гастрономия', 'rest-title1': 'The Story', 'rest-title2': 'Café',
    'rest-sub': 'Современный ресторан с живым видом на Иссык-Куль и Тянь-Шань. Авторское меню, тёплая атмосфера, летняя терраса.',
    'map-eye': 'Расположение', 'map-title1': 'Как нас', 'map-title2': 'найти',
    'map-sub': 'Северный берег Иссык-Куля, деревня Корумду. 70 метров до воды.',
    'rev-eye': 'Отзывы', 'rev-title1': 'Что говорят', 'rev-title2': 'гости',
    'book-eyebrow': 'Бронирование', 'book-title1': 'Забронируйте', 'book-title2': 'онлайн',
    'book-sub': 'Напишите нам в WhatsApp — ответим в течение 15 минут',
    'card1-title': 'Номер в отеле',
    'card1-desc': 'Апартаменты от $295/ночь. Deluxe, Superior, Suite, Коттедж — уточним наличие и цены.',
    'card1-btn': 'Написать в WhatsApp',
    'card2-title': 'Стол в ресторане',
    'card2-desc': 'The Story Café — 120 мест в зале, 60 на террасе. Завтраки, обеды, ужины, банкеты.',
    'card2-btn': 'Написать в WhatsApp',
  },
  en: {
    'nav-about': 'About', 'nav-rooms': 'Rooms', 'nav-restaurant': 'Restaurant', 'nav-map': 'Map',
    'nav-book-hotel': 'Book Now', 'nav-book-rest': 'Book Table',
    'mob-about': 'About', 'mob-rooms': 'Rooms', 'mob-restaurant': 'Restaurant', 'mob-map': 'Map',
    'hero-title1': 'Luxury on the Shore of a', 'hero-title2': 'Mountain Lake',
    'hero-sub': 'NOVEL — 4★ apart-hotel with private beach, three piers and The Story Café. 70 meters from crystal-clear Issyk-Kul.',
    'hero-btn1': 'Book a Room', 'hero-btn2': 'Book a Table',
    'about-eye': 'About', 'about-title1': 'Your Home by a', 'about-title2': 'Mountain Lake',
    'about-p1': 'NOVEL is a 4-star apart-hotel in Korumdu village on the northern shore of Issyk-Kul. Three wooden piers extend into crystal-clear water, with views of snow-capped Tian Shan from every window.',
    'about-p2': 'Each of the 51 apartments has a full kitchen, air conditioning and Wi-Fi. Cottages with private yards are ideal for families.',
    'rooms-eye': 'Accommodation', 'rooms-title1': 'Rooms &', 'rooms-title2': 'Cottages',
    'rooms-sub': 'Choose your perfect stay: from lake-view apartments to spacious cottages with private yards.',
    'tab-rooms': 'Rooms', 'tab-cottage': 'Cottages',
    'beach-eye': 'Facilities', 'beach-title1': 'Beach, Piers &', 'beach-title2': 'Pool',
    'beach-sub': 'Three piers extend directly into the turquoise waters of Issyk-Kul. Private beach for hotel guests only.',
    'rest-eye': 'Dining', 'rest-title1': 'The Story', 'rest-title2': 'Café',
    'rest-sub': 'A modern restaurant with live views of Issyk-Kul and Tian Shan. Signature menu, warm atmosphere, summer terrace.',
    'map-eye': 'Location', 'map-title1': 'How to', 'map-title2': 'Find Us',
    'map-sub': 'North shore of Issyk-Kul, Korumdu village. 70 meters to the water.',
    'rev-eye': 'Reviews', 'rev-title1': 'What Our', 'rev-title2': 'Guests Say',
    'book-eyebrow': 'Reservations', 'book-title1': 'Book Your', 'book-title2': 'Stay Online',
    'book-sub': 'Message us on WhatsApp — we reply within 15 minutes',
    'card1-title': 'Hotel Room',
    'card1-desc': 'Apartments from $295/night. Deluxe, Superior, Suite, Cottage — we will confirm availability.',
    'card1-btn': 'Message on WhatsApp',
    'card2-title': 'Restaurant Table',
    'card2-desc': 'The Story Café — 120 indoor seats, 60 on terrace. Breakfast, lunch, dinner, banquets.',
    'card2-btn': 'Message on WhatsApp',
  },
  kg: {
    'nav-about': 'Отель жөнүндө', 'nav-rooms': 'Бөлмөлөр', 'nav-restaurant': 'Ресторан', 'nav-map': 'Карта',
    'nav-book-hotel': 'Брондоо', 'nav-book-rest': 'Стол брондоо',
    'mob-about': 'Отель жөнүндө', 'mob-rooms': 'Бөлмөлөр', 'mob-restaurant': 'Ресторан', 'mob-map': 'Карта',
    'hero-title1': 'Тоо көлүнүн', 'hero-title2': 'жээгиндеги люкс',
    'hero-sub': 'NOVEL — 4★ апарт-мейманкана, жеке пляж, үч пирс жана The Story Café ресторан. Ысык-Күлдөн 70 метр.',
    'hero-btn1': 'Бөлмө брондоо', 'hero-btn2': 'Стол брондоо',
    'about-eye': 'Отель жөнүндө', 'about-title1': 'Тоо көлүнүн', 'about-title2': 'жээгиндеги үйүңүз',
    'about-p1': 'NOVEL — Ысык-Күлдүн түндүк жээгинде Корумду айылындагы 4 жылдыздуу апарт-мейманкана. Үч жыгач пирс кристалдык суусуна чейин созулат, ар бир терезеден Тянь-Шань көрүнөт.',
    'about-p2': '51 апартаменттин баары толук ашкана, кондиционер жана Wi-Fi менен жабдылган. Жеке короолуу коттеджлер — үй-бүлөлөр үчүн.',
    'rooms-eye': 'Жайгашуу', 'rooms-title1': 'Бөлмөлөр жана', 'rooms-title2': 'коттеджлер',
    'rooms-sub': 'Идеалдуу вариантыңызды тандаңыз: көлгө карап турган апартаменттерден жеке короолуу коттеджлерге чейин.',
    'tab-rooms': 'Бөлмөлөр', 'tab-cottage': 'Коттеджлер',
    'beach-eye': 'Инфраструктура', 'beach-title1': 'Пляж, пирстер', 'beach-title2': 'жана бассейн',
    'beach-sub': 'Үч пирс Ысык-Күлдүн бирюза суусуна батат. Жеке пляж — мейманкананын конокторуна гана.',
    'rest-eye': 'Тамак-аш', 'rest-title1': 'The Story', 'rest-title2': 'Café',
    'rest-sub': 'Ысык-Күл жана Тянь-Шань көрүнгөн заманбап ресторан. Авторлук меню, жылуу атмосфера, жайкы тераса.',
    'map-eye': 'Жайгашкан жери', 'map-title1': 'Бизди кантип', 'map-title2': 'табса болот',
    'map-sub': 'Ысык-Күлдүн түндүк жээги, Корумду айылы. Сууга чейин 70 метр.',
    'rev-eye': 'Пикирлер', 'rev-title1': 'Конокторубуз', 'rev-title2': 'эмне дейт',
    'book-eyebrow': 'Брондоо', 'book-title1': 'Онлайн', 'book-title2': 'брондоңуз',
    'book-sub': 'WhatsApp аркылуу жазыңыз — 15 мүнөттө жооп беребиз',
    'card1-title': 'Мейманкана бөлмөсү',
    'card1-desc': 'Апартаменттер $295/түндөн. Deluxe, Superior, Suite, Коттедж — бош орундар жана баалар.',
    'card1-btn': 'WhatsApp жазуу',
    'card2-title': 'Ресторандагы стол',
    'card2-desc': 'The Story Café — 120 орун, тераса 60 орун. Эртең мурун, түшкү, кечки тамак, банкет.',
    'card2-btn': 'WhatsApp жазуу',
  },
  kz: {
    'nav-about': 'Қонақ үй туралы', 'nav-rooms': 'Бөлмелер', 'nav-restaurant': 'Мейрамхана', 'nav-map': 'Карта',
    'nav-book-hotel': 'Брондау', 'nav-book-rest': 'Стол брондау',
    'mob-about': 'Қонақ үй туралы', 'mob-rooms': 'Бөлмелер', 'mob-restaurant': 'Мейрамхана', 'mob-map': 'Карта',
    'hero-title1': 'Тау көлінің', 'hero-title2': 'жағасындағы люкс',
    'hero-sub': 'NOVEL — 4★ апарт-қонақ үй, жеке жағажай, үш пирс және The Story Café мейрамханасы. Ыстықкөлден 70 метр.',
    'hero-btn1': 'Бөлме брондау', 'hero-btn2': 'Стол брондау',
    'about-eye': 'Қонақ үй туралы', 'about-title1': 'Тау көлінің', 'about-title2': 'жағасындағы үйіңіз',
    'about-p1': 'NOVEL — Ыстықкөлдің солтүстік жағасындағы Корумду ауылындағы 4 жұлдызды апарт-қонақ үй. Үш ағаш пирс кристалдық суға дейін созылады, терезеден Тянь-Шань көрінеді.',
    'about-p2': '51 апартаменттің барлығы толық ас үй, кондиционер және Wi-Fi-мен жабдықталған. Жеке ауласы бар коттедждер — отбасылар үшін.',
    'rooms-eye': 'Орналасу', 'rooms-title1': 'Бөлмелер және', 'rooms-title2': 'коттедждер',
    'rooms-sub': 'Тамаша нұсқаңызды таңдаңыз: көлге қараған апартаменттерден жеке ауласы бар коттедждерге дейін.',
    'tab-rooms': 'Бөлмелер', 'tab-cottage': 'Коттедждер',
    'beach-eye': 'Инфрақұрылым', 'beach-title1': 'Жағажай, пирстер', 'beach-title2': 'және бассейн',
    'beach-sub': 'Үш пирс Ыстықкөлдің бирюза суына батады. Жеке жағажай — қонақ үй қонақтарына ғана.',
    'rest-eye': 'Тамақтану', 'rest-title1': 'The Story', 'rest-title2': 'Café',
    'rest-sub': 'Ыстықкөл мен Тянь-Шань көрінетін заманауи мейрамхана. Авторлық мәзір, жылы атмосфера, жазғы терасса.',
    'map-eye': 'Орналасқан жері', 'map-title1': 'Бізді қалай', 'map-title2': 'табуға болады',
    'map-sub': 'Ыстықкөлдің солтүстік жағасы, Корумду ауылы. Суға дейін 70 метр.',
    'rev-eye': 'Пікірлер', 'rev-title1': 'Қонақтарымыз', 'rev-title2': 'не дейді',
    'book-eyebrow': 'Брондау', 'book-title1': 'Онлайн', 'book-title2': 'брондаңыз',
    'book-sub': 'WhatsApp арқылы жазыңыз — 15 минутта жауап береміз',
    'card1-title': 'Қонақ үй бөлмесі',
    'card1-desc': 'Апартаменттер $295/түннен. Deluxe, Superior, Suite, Коттедж — қолжетімділік пен бағалар.',
    'card1-btn': 'WhatsApp жазу',
    'card2-title': 'Мейрамханадағы стол',
    'card2-desc': 'The Story Café — 120 орын, терасса 60 орын. Таңғы, түскі, кешкі ас, банкет.',
    'card2-btn': 'WhatsApp жазу',
  },
};

const HTML_LANG = { ru: 'ru', en: 'en', kg: 'ky', kz: 'kk' };

function setLang(lang) {
  const strings = LANGS[lang];
  if (!strings) return;

  Object.entries(strings).forEach(([key, value]) => {
    const byId = document.getElementById(`t-${key}`);
    if (byId) byId.textContent = value;
    document.querySelectorAll(`[data-i18n="${key}"]`).forEach((el) => {
      el.textContent = value;
    });
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const active = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  document.documentElement.lang = HTML_LANG[lang] || 'ru';
  localStorage.setItem('novel-lang', lang);
}

function initNavScroll() {
  const nav = document.getElementById('nav');
  const btt = document.getElementById('btt');

  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('up', window.scrollY > 60);
    if (btt) btt.classList.toggle('show', window.scrollY > 400);
  });

  if (btt) {
    btt.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

function initMobileMenu() {
  const mob = document.getElementById('mob');
  const burger = document.getElementById('burger');

  function openMob() {
    mob?.classList.add('open');
    burger?.setAttribute('aria-expanded', 'true');
  }

  function closeMob() {
    mob?.classList.remove('open');
    burger?.setAttribute('aria-expanded', 'false');
  }

  window.openMob = openMob;
  window.closeMob = closeMob;
}

function initHeroSlider() {
  const slides = document.querySelectorAll('.hsl');
  const dotsEl = document.getElementById('hdots');
  if (!dotsEl || !slides.length) return;

  let current = 0;

  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = `hdot${i === 0 ? ' on' : ''}`;
    dot.addEventListener('click', () => goToSlide(i));
    dotsEl.appendChild(dot);
  });

  function goToSlide(index) {
    slides[current].classList.remove('on');
    dotsEl.children[current].classList.remove('on');
    current = index;
    slides[current].classList.add('on');
    dotsEl.children[current].classList.add('on');
  }

  setInterval(() => goToSlide((current + 1) % slides.length), 6500);
}

function initGalleryDrag() {
  const track = document.getElementById('gtrack');
  if (!track) return;

  let dragging = false;
  let startX = 0;
  let scrollLeft = 0;

  track.addEventListener('mousedown', (e) => {
    dragging = true;
    track.classList.add('gr');
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  ['mouseleave', 'mouseup'].forEach((event) => {
    track.addEventListener(event, () => {
      dragging = false;
      track.classList.remove('gr');
    });
  });

  track.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    track.scrollLeft = scrollLeft - (x - startX) * 1.4;
  });
}

function initRoomTabs() {
  window.switchRoom = (tab) => {
    document.querySelectorAll('.rtab').forEach((btn, i) => {
      btn.classList.toggle('on', ['ap', 'cottage'][i] === tab);
    });
    ['ap', 'cottage'].forEach((id) => {
      document.getElementById(`rp-${id}`)?.classList.toggle('on', id === tab);
    });
  };
}

function initScrollReveal() {
  const targets = document.querySelectorAll('.rv');
  if (!targets.length) return;

  if (!window.IntersectionObserver) {
    targets.forEach((el) => el.classList.add('vs'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('vs');
      });
    },
    { threshold: 0.08 }
  );

  targets.forEach((el) => observer.observe(el));
}

function initMap() {
  window.addEventListener('load', () => {
    if (typeof L === 'undefined') return;

    try {
      const map = L.map('map', {
        center: [42.685, 77.3465],
        zoom: 14,
        scrollWheelZoom: false,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap © CARTO',
        maxZoom: 19,
      }).addTo(map);

      const icon = L.divIcon({
        html: '<div class="map-pin" aria-hidden="true"><span>★</span></div>',
        iconSize: [46, 46],
        iconAnchor: [23, 46],
        popupAnchor: [0, -50],
        className: '',
      });

      L.marker([42.685, 77.3465], { icon })
        .addTo(map)
        .bindPopup(
          '<div class="mpop"><div class="mpop-lg">NOV<b>E</b>L</div><div class="mpop-a">ул. Садатканова 1/1, Корумду</div><div class="mpop-s">★★★★</div><a class="mpop-btn" href="https://maps.google.com/?q=42.685,77.3465" target="_blank" rel="noopener noreferrer">Google Maps →</a></div>',
          { maxWidth: 220 }
        )
        .openPopup();
    } catch (err) {
      console.warn('Map init failed:', err);
    }
  });
}

window.goBook = function goBook() {
  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
};

window.setLang = setLang;

function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang) setLang(lang);
    });
  });

  const saved = localStorage.getItem('novel-lang');
  if (saved && LANGS[saved]) setLang(saved);
}

function init() {
  initNavScroll();
  initMobileMenu();
  initHeroSlider();
  initGalleryDrag();
  initRoomTabs();
  initScrollReveal();
  initMap();
  initLangSwitcher();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
