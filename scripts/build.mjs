import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const legacyPath = path.join(root, 'index.legacy.html');
const srcPath = fs.existsSync(legacyPath) ? legacyPath : path.join(root, 'index.html');

const IMAGE_NAMES = [
  'hero-1.jpg', 'hero-2.jpg', 'hero-3.jpg',
  'about-main.jpg', 'about-1.jpg', 'about-2.jpg',
  'gallery-1.jpg', 'gallery-2.jpg', 'gallery-3.jpg', 'gallery-4.jpg',
  'gallery-5.jpg', 'gallery-6.jpg', 'gallery-7.jpg',
  'room-deluxe.jpg', 'room-superior.jpg', 'room-suite.jpg',
  'cottage-1.jpg', 'cottage-2.jpg', 'cottage-3.jpg',
  'beach.jpg', 'restaurant-1.jpg', 'restaurant-2.jpg',
];

const content = fs.readFileSync(srcPath, 'utf8');
fs.mkdirSync(path.join(root, 'assets'), { recursive: true });
fs.mkdirSync(path.join(root, 'css'), { recursive: true });
fs.mkdirSync(path.join(root, 'js'), { recursive: true });

let imgIndex = 0;

function nextAssetName(mime) {
  if (imgIndex < IMAGE_NAMES.length) return IMAGE_NAMES[imgIndex++];
  return `image-${imgIndex++}.${mime === 'png' ? 'png' : mime === 'webp' ? 'webp' : 'jpg'}`;
}

function extractImages(text) {
  const re = /data:image\/(jpeg|png|webp);base64,([A-Za-z0-9+/=]+)/g;
  return text.replace(re, (_, mime, b64) => {
    const name = nextAssetName(mime);
    fs.writeFileSync(path.join(root, 'assets', name), Buffer.from(b64, 'base64'));
    return `assets/${name}`;
  });
}

// CSS
const styleMatch = content.match(/<style>([\s\S]*?)<\/style>/);
if (!styleMatch) throw new Error('No <style> found');
let css = styleMatch[1].trim();
css = css.replace(
  /\.lang-sw\{display:flex;gap:2px;background:rgba\(255,255,255,\.08\)[\s\S]*?@media\(max-width:820px\)\{[\s\S]*?\}\s*\n\s*\n/,
  ''
);

// Extra utilities for refactored markup
css += `

.mob-btn-outline {
  border-radius: 8px;
  background: transparent;
  border: 1px solid rgba(255,255,255,.25);
  color: #fff;
}
.mob-btn-gold { border-radius: 8px; }
.sec-p--tight { margin-bottom: 14px; }
.eyebrow--muted { color: rgba(196,154,60,.55); }
.eyebrow--center { justify-content: center; color: rgba(196,154,60,.5); }
.sec-h--center { color: #fff; text-align: center; }
.sec-p--center { text-align: center; margin: 0 auto; color: rgba(255,255,255,.36); }
.book-grid { max-width: 720px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.book-card {
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 18px;
  padding: 36px 32px;
  text-align: center;
}
.book-card-icon {
  width: 64px; height: 64px;
  background: rgba(196,154,60,.12);
  border: 1px solid rgba(196,154,60,.25);
  border-radius: 16px;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 20px;
  color: var(--gold);
}
.book-card h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 8px;
  font-weight: 600;
}
.book-card p { font-size: .82rem; color: rgba(255,255,255,.4); line-height: 1.65; margin-bottom: 24px; font-weight: 300; }
.book-card .wa-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 10px;
  width: 100%; padding: 14px; background: var(--gold); color: #0b1018;
  border-radius: 10px; font-size: .85rem; font-weight: 700;
  letter-spacing: .05em; text-transform: uppercase; transition: all .25s;
}
.book-card .wa-btn:hover { background: var(--gold2); transform: translateY(-1px); }
.book-card .phone-hint { font-size: .72rem; color: rgba(255,255,255,.25); margin-top: 10px; }
.rest-about h3 { font-size: 1.6rem; margin-bottom: 10px; }
.rest-about .sec-p { font-size: .86rem; }
.rcard-w--full { grid-column: 1 / -1; }
.rc-desc--spaced { margin-bottom: 16px; }
.rc-feats--spaced { margin-bottom: 18px; }
.icon--gold { color: var(--gold); }
#booking .rv { display: grid; }

@media (max-width: 720px) {
  .book-grid { grid-template-columns: 1fr; }
  #booking .rv { grid-template-columns: 1fr !important; }
}
`;

// JS
const scriptMatch = content.match(/<script>\s*\(function\(\)\s*\{[\s\S]*?\}\)\(\);\s*<\/script>/);
if (!scriptMatch) throw new Error('No inline script found');
let jsBody = scriptMatch[0]
  .replace(/^<script>\s*\(function\(\)\s*\{\s*/, '')
  .replace(/\s*\}\)\(\);\s*<\/script>$/, '');

// HTML body
const bodyStart = content.indexOf('<body>');
const scriptStart = content.indexOf('<script>\n(function()');
let htmlBody = content.slice(bodyStart + 6, scriptStart).trim();

htmlBody = extractImages(htmlBody);

// Cleanup broken markup
htmlBody = htmlBody
  .replace(/<span id="t-hero-sub">[^<]*<\/span>"><span id="t-hero-sub">[^<]*<\/span><\/span>/g,
    '<span id="t-hero-sub">NOVEL — апарт-отель 4★ с частным пляжем, тремя пирсами и рестораном The Story Café. 70 метров от кристального Иссык-Куля.</span>')
  .replace(/<button class="na na-o" onclick="goBook\('rest'\)"><span><span><span id="t-nav-book-rest"><span id="t-hero-btn2"><span id="t-card2-title">Стол в ресторане<\/span><\/span><\/span><\/span><\/span><\/button>/,
    '<button type="button" class="na na-o" onclick="goBook(\'rest\')"><span id="t-nav-book-rest">Стол в ресторане</span></button>')
  .replace(/<button class="na na-g" onclick="goBook\('hotel'\)"><span><span id="t-nav-book-hotel">/,
    '<button type="button" class="na na-g" onclick="goBook(\'hotel\')"><span id="t-nav-book-hotel">')
  .replace(/<\/span><\/span><\/button>/g, '</span></button>')
  .replace(/<button class="na-g" style="border-radius:8px"/,
    '<button type="button" class="na-g mob-btn-gold"')
  .replace(/<button style="border-radius:8px;background:transparent;border:1px solid rgba\(255,255,255,.25\);color:#fff"/,
    '<button type="button" class="mob-btn-outline"')
  .replace(/onclick="goBook\('hotel'\);closeMob\(\)"><span><span id="t-hero-btn1">/,
    'onclick="goBook(\'hotel\');closeMob()"><span id="t-hero-btn1">');

// Hero slides: inline style -> data-bg
htmlBody = htmlBody.replace(
  /<div class="hsl([^"]*)" style="background-image:url\('(assets\/[^']+)'\)"[^>]*>/g,
  '<div class="hsl$1" data-bg="$2">'
);

// Move inline styles to classes (booking section)
htmlBody = htmlBody.replace(
  /<div style="max-width:720px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:20px" class="rv">/,
  '<div class="book-grid rv">'
);
htmlBody = htmlBody.replace(
  /<div style="background:rgba\(255,255,255,.04\);border:1px solid rgba\(255,255,255,.08\);border-radius:18px;padding:36px 32px;text-align:center">/g,
  '<div class="book-card">'
);
htmlBody = htmlBody.replace(
  /<div style="width:64px;height:64px;background:rgba\(196,154,60,.12\);border:1px solid rgba\(196,154,60,.25\);border-radius:16px;display:flex;align-items:center;justify-content:center;margin:0 auto 20px">/g,
  '<div class="book-card-icon" aria-hidden="true">'
);
htmlBody = htmlBody.replace(
  /<h3 style="font-family:'Cormorant Garamond',serif;font-size:1\.5rem;color:#fff;margin-bottom:8px;font-weight:600">/g,
  '<h3>'
);
htmlBody = htmlBody.replace(
  /<p style="font-size:\.82rem;color:rgba\(255,255,255,\.4\);line-height:1\.65;margin-bottom:24px;font-weight:300">/g,
  '<p>'
);
htmlBody = htmlBody.replace(
  /style="display:inline-flex;align-items:center;justify-content:center;gap:10px;width:100%;padding:14px;background:var\(--gold\);color:#0b1018;border-radius:10px;font-size:\.85rem;font-weight:700;letter-spacing:\.05em;text-transform:uppercase;text-decoration:none;transition:all \.25s"/g,
  'class="wa-btn"'
);
htmlBody = htmlBody.replace(
  /<p style="font-size:\.72rem;color:rgba\(255,255,255,\.25\);margin-top:10px">/g,
  '<p class="phone-hint">'
);
htmlBody = htmlBody.replace(/<p class="sec-p" style="margin-bottom:14px">/, '<p class="sec-p sec-p--tight">');
htmlBody = htmlBody.replace(/<div class="icon" style="color:var\(--gold\)">/g, '<div class="icon icon--gold">');
htmlBody = htmlBody.replace(/<div class="eyebrow" style="color:rgba\(196,154,60,\.55\)">/g, '<div class="eyebrow eyebrow--muted">');
htmlBody = htmlBody.replace(/id="t-beach-eye" style="color:rgba\(196,154,60,\.55\)"/, 'id="t-beach-eye" class="eyebrow eyebrow--muted"');
htmlBody = htmlBody.replace(/<div class="eyebrow" id="t-beach-eye" class="eyebrow eyebrow--muted">/, '<div class="eyebrow eyebrow--muted" id="t-beach-eye">');
htmlBody = htmlBody.replace(/<div class="eyebrow" style="justify-content:center;color:rgba\(196,154,60,\.5\)">/, '<div class="eyebrow eyebrow--center">');
htmlBody = htmlBody.replace(/<h2 class="sec-h" style="color:#fff;text-align:center">/, '<h2 class="sec-h sec-h--center">');
htmlBody = htmlBody.replace(/<p class="sec-p" style="text-align:center;margin:0 auto;color:rgba\(255,255,255,\.36\)">/, '<p class="sec-p sec-p--center">');
htmlBody = htmlBody.replace(/<div class="rcard-w rv" style="grid-column:1\/-1">/, '<div class="rcard-w rcard-w--full rv">');
htmlBody = htmlBody.replace(/<p class="rc-desc" style="margin-bottom:16px">/, '<p class="rc-desc rc-desc--spaced">');
htmlBody = htmlBody.replace(/<div class="rc-feats" style="margin-bottom:18px">/, '<div class="rc-feats rc-feats--spaced">');
htmlBody = htmlBody.replace(/<h3 class="sec-h" style="font-size:1\.6rem;margin-bottom:10px">/, '<h3 class="sec-h rest-about">');
htmlBody = htmlBody.replace(/<p class="sec-p" style="font-size:\.86rem">/, '<p class="sec-p">');

// Add loading/decoding to images
htmlBody = htmlBody.replace(/<img src="assets\//g, '<img loading="lazy" decoding="async" src="assets/');

// Accessibility: nav, main, buttons
htmlBody = '<main>\n' + htmlBody + '\n</main>';
htmlBody = htmlBody.replace('<nav class="nav"', '<header><nav class="nav" aria-label="Главная навигация"');
htmlBody = htmlBody.replace('</nav>\n\n<!-- MOB', '</nav></header>\n\n<!-- MOB');
htmlBody = htmlBody.replace('<div class="mob"', '<div class="mob" role="dialog" aria-modal="true" aria-label="Мобильное меню"');
htmlBody = htmlBody.replace('<button class="burger"', '<button type="button" class="burger" aria-label="Открыть меню" aria-expanded="false"');
htmlBody = htmlBody.replace('<button class="mob-x"', '<button type="button" class="mob-x" aria-label="Закрыть меню"');

const head = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="NOVEL — люксовый апарт-отель 4★ на Иссык-Куле, Корумду. Частный пляж, три пирса, ресторан The Story Café. Бронирование через WhatsApp.">
  <meta name="theme-color" content="#0b1018">
  <meta property="og:title" content="NOVEL Hotel & The Story Café — Иссык-Куль">
  <meta property="og:description" content="Апарт-отель 4★ с частным пляжем в 70 м от озера. Номера, коттеджи, ресторан.">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="ru_RU">
  <title>NOVEL Hotel & The Story Café — Иссык-Куль, Корумду</title>
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
`;

const foot = `
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin="" defer></script>
<script src="js/script.js" defer></script>
</body>
</html>
`;

htmlBody = htmlBody.replace(
  /<button class="btt" id="btt" onclick="[^"]*">[\s\S]*?<\/button>/,
  '<button type="button" class="btt" id="btt" aria-label="Наверх"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg></button>'
);
htmlBody = htmlBody.replace(/<script src="https:\/\/unpkg\.com\/leaflet[^<]+<\/script>\s*/g, '');

// Preserve legacy monolith (first run only)
if (!fs.existsSync(legacyPath) && srcPath.endsWith('index.html')) {
  fs.copyFileSync(path.join(root, 'index.html'), legacyPath);
}

fs.writeFileSync(path.join(root, 'css', 'style.css'), css);
// js/script.js maintained manually — not overwritten by build

const finalHtml = head + htmlBody + foot;
fs.writeFileSync(path.join(root, 'index.html'), finalHtml);

console.log('Done:', { images: imgIndex, htmlSize: finalHtml.length });
