// Profile Photo to Favicon Converter
document.addEventListener('DOMContentLoaded', function() {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size for favicon (32x32 is a good standard size)
    canvas.width = 32;
    canvas.height = 32;
    
    // Load the profile image
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = 'img/profile.jpg';
    
    img.onload = function() {
        // Draw the image to the canvas, cropping to a square if needed
        const size = Math.min(img.width, img.height);
        const offsetX = (img.width - size) / 2;
        const offsetY = (img.height - size) / 2;
        
        // Create circular clipping path
        ctx.beginPath();
        ctx.arc(16, 16, 16, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();
        
        // Draw the image
        ctx.drawImage(img, offsetX, offsetY, size, size, 0, 0, 32, 32);
        
        // Convert canvas to data URL
        const faviconUrl = canvas.toDataURL('image/png');
        
        // Create a link element for the favicon
        const link = document.createElement('link');
        link.type = 'image/png';
        link.rel = 'icon';
        link.href = faviconUrl;
        
        // Add it to the document head
        document.head.appendChild(link);
        
        console.log('Profile photo successfully converted to favicon');
    };
    
    img.onerror = function() {
        console.error('Error loading profile image');
    };
});