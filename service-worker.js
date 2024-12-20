

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('countries-cache').then((cache) => {
            return cache.addAll([
                './',
                './script.js',
                './ui.js',
                './index.html',
                './styles.css'
            ])
        })
    )
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request)
            })
    )
})