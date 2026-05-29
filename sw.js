/* ==========================================================================
   sw.js — Service worker for offline (PWA) support.
   Strategy: cache-first for app shell + data, network fallback. Bump CACHE
   when files change to invalidate old caches.
   ========================================================================== */
const CACHE = 'netschool-v1';
const ASSETS = [
  './', './index.html', './manifest.webmanifest',
  './assets/css/themes.css', './assets/css/main.css', './assets/css/components.css',
  './assets/js/icons.js', './assets/js/i18n.js', './assets/js/store.js',
  './assets/js/netcalc.js', './assets/js/ui.js', './assets/js/data.js',
  './assets/js/pages.home.js', './assets/js/pages.learn.js', './assets/js/pages.tools.js',
  './assets/js/pages.resources.js', './assets/js/pages.quiz.js', './assets/js/pages.progress.js',
  './assets/js/router.js', './assets/js/app.js',
  './assets/data/ccna.fundamentals.js', './assets/data/ccna.network-access.js',
  './assets/data/ccna.ip-connectivity.js', './assets/data/ccna.services-security.js',
  './assets/data/ccna.automation.js', './assets/data/networkplus.js',
  './assets/data/quizbank.js', './assets/data/labs.js', './assets/data/cheatsheets.js',
  './assets/data/ports.js', './assets/data/commands.js', './assets/data/interview.js',
  './assets/icons/favicon.svg', './assets/icons/icon-192.svg', './assets/icons/icon-512.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).catch(() => {})).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(res => {
      // runtime-cache same-origin GETs (fonts, etc.)
      if (res && res.status === 200 && req.url.startsWith(self.location.origin)) {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(req, clone));
      }
      return res;
    }).catch(() => caches.match('./index.html')))
  );
});
