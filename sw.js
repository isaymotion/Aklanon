/* Offline support. Bump VERSION whenever any file changes so phones pick up the update.
   All isaymotion apps share one origin (isaymotion.github.io), so this worker only ever deletes caches that
   start with its own PREFIX. 'magistorya-audio' will hold recorded clips (future pack) and is kept across versions. */
const PREFIX = 'magistorya-';
const VERSION = PREFIX + '0.1.1';
const KEEP = ['magistorya-audio'];
const FILES = [
  './', 'index.html', 'manifest.webmanifest', 'css/style.css',
  'data/app-meta.js', 'data/changelog.js', 'data/strings.js',
  'js/data/dict-core.js', 'js/data/lessons.js', 'js/data/psych-phrases.js', 'js/data/psych-answers.js',
  'js/audio-key.js', 'js/lang.js', 'js/core.js', 'js/views.js', 'js/psych-views.js', 'js/point-listen.js', 'js/review.js', 'js/app.js',
  'icons/favicon-32.png', 'icons/favicon-64.png', 'icons/logo-96.png', 'icons/apple-touch-icon.png',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/maskable-192.png', 'icons/maskable-512.png'
];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(
    keys.filter((k) => k.startsWith(PREFIX) && k !== VERSION && !KEEP.includes(k)).map((k) => caches.delete(k))
  )).then(() => self.clients.claim()));
});
// Network first for app files (so updates arrive), falling back to cache when offline.
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin && /\/audio\/[0-9a-f]{16}\.mp3$/.test(url.pathname)) {
    // Recorded clips (future pack) never change for a given name: serve from cache, store on first play.
    e.respondWith(caches.open(KEEP[0]).then((c) => c.match(req).then((r) => r || fetch(req).then((res) => { if (res.ok) c.put(req, res.clone()); return res; }))));
  } else if (url.origin === location.origin) {
    e.respondWith(fetch(req).then((res) => { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); return res; })
      .catch(() => caches.match(req, { ignoreSearch: true }).then((r) => r || caches.match('index.html'))));
  } else if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(caches.match(req).then((r) => r || fetch(req).then((res) => { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); return res; })));
  }
});
