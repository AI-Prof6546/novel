# NOVEL Hotel & The Story Café

Одностраничный сайт люксового апарт-отеля **NOVEL** на северном берегу Иссык-Куля (Корумду, Кыргызстан) и ресторана **The Story Café**.

Статический лендинг без сборщика — готов к публикации на [GitHub Pages](https://pages.github.com/).

## Возможности

- Многоязычный интерфейс: **RU**, **EN**, **KG** (кыргызский), **KZ** (казахский)
- Hero-слайдер, горизонтальная галерея с drag-scroll
- Карточки номеров и коттеджей с переключением вкладок
- Интерактивная карта ([Leaflet](https://leafletjs.com/) + Carto Voyager)
- Блок бронирования через WhatsApp
- Адаптивная вёрстка (desktop / tablet / mobile)
- Сохранение выбранного языка в `localStorage`

## Структура проекта

```
NOVEL.KG-main/
├── index.html          # Разметка
├── css/
│   └── style.css       # Стили
├── js/
│   └── script.js       # Логика (слайдеры, i18n, карта, меню)
├── assets/             # Изображения и favicon
│   ├── favicon.svg
│   ├── hero-*.jpg
│   ├── gallery-*.jpg
│   └── ...
├── scripts/
│   └── build.mjs       # Сборка HTML из index.legacy.html (опционально)
├── index.legacy.html   # Исходник с base64 (резервная копия)
├── .nojekyll           # Для GitHub Pages
└── README.md
```

## Локальный запуск

Любой статический сервер из корня репозитория:

```bash
npx serve .
```

или

```bash
python -m http.server 8080
```

Откройте `http://localhost:8080` (или указанный порт).

## GitHub Pages

1. Репозиторий → **Settings** → **Pages**
2. **Source**: Deploy from a branch
3. **Branch**: `main` / папка **`/ (root)`**
4. Сохранить — сайт будет доступен по адресу `https://<user>.github.io/<repo>/`

Файл `.nojekyll` в корне отключает обработку Jekyll, чтобы пути к `assets/` работали корректно.

## Контакты на сайте

| Назначение | Контакт |
|------------|---------|
| Отель / ресепшен | +996 999 910 110 |
| Ресторан | +996 503 910 110 |
| WhatsApp (отель) | [wa.me/996999910110](https://wa.me/996999910110) |
| Instagram | [@novel_hotel.kg](https://instagram.com/novel_hotel.kg) |

## Пересборка из legacy-файла

Если нужно заново извлечь картинки из монолитного `index.legacy.html`:

```bash
node scripts/build.mjs
```

Скрипт обновит `index.html`, `css/style.css` и файлы в `assets/`. Файл `js/script.js` после рефакторинга правится вручную — при пересборке не перезаписывается.

## Лицензия

© NOVEL Hotel & The Story Café. Контент и фотографии принадлежат правообладателю.
