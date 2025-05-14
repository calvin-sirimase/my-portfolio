/**
 * Favicon Update Script
 * Ensures the dev.png image is properly set as the favicon
 */

document.addEventListener('DOMContentLoaded', function() {
    // Force favicon refresh (helpful for some browsers that cache favicons)
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
        // Add a timestamp query parameter to force refresh
        const timestamp = new Date().getTime();
        const href = favicon.href.split('?')[0];
        favicon.href = `${href}?v=${timestamp}`;
    }
});