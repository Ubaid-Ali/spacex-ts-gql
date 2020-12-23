const CACHE_NAME = 'SpaceX';
const urlsToCache = [
    '/index.html',
    '/static/js/bundle.js',
    '/static/js/0.chunk.js',
    '/'
];


const self = this;


// Install service worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});


// Listen for request
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Cache hit - return response
                if (response) {
                    console.log('response Cache hit -return response')
                    return response;
                }
                return fetch(event.request)
                    .catch((err) => console.log('err', err))
            })
    );
});


// Update a service worker
self.addEventListener('activate', function (event) {

    let cacheAllowlist = [...urlsToCache];

    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheAllowlist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});