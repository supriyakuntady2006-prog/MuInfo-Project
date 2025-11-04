// Very small service worker placeholder for caching the app shell
const CACHE = 'muinfo-shell-v1'
const FILES = [
  '/',
  '/index.html',
  '/src/main.jsx'
]

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  )
  self.skipWaiting()
})

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)))
})
