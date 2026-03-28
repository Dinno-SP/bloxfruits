self.addEventListener('install', (e) => {
    console.log('[Service Worker] Terinstal');
});

self.addEventListener('fetch', (e) => {
    // Memenuhi syarat Google Chrome agar bisa diinstall
});