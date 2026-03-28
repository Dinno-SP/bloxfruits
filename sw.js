self.addEventListener('install', (e) => {
    console.log('[Service Worker] Terinstal');
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    console.log('[Service Worker] Aktif');
    return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    // Mesin jalan agar Chrome mengizinkan Install
    e.respondWith(
        fetch(e.request).catch(() => {
            console.log('Mode Offline');
        })
    );
});
