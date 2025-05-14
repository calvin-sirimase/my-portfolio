// Favicon Generator Script
document.addEventListener('DOMContentLoaded', function() {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Load the profile image
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = 'img/profile.jpg';
    
    img.onload = function() {
        // Create different sizes of favicons
        createFavicon(img, 16);
        createFavicon(img, 32);
        createAppleTouchIcon(img, 180);
        
        console.log('Favicon images generated from profile photo');
    };
    
    // Function to create a favicon
    function createFavicon(img, size) {
        // Set canvas size
        canvas.width = size;
        canvas.height = size;
        
        // Calculate dimensions to maintain aspect ratio
        const aspectRatio = img.width / img.height;
        let drawWidth, drawHeight, startX, startY;
        
        if (aspectRatio > 1) {
            // Image is wider than tall
            drawHeight = size;
            drawWidth = size * aspectRatio;
            startX = -(drawWidth - size) / 2;
            startY = 0;
        } else {
            // Image is taller than wide
            drawWidth = size;
            drawHeight = size / aspectRatio;
            startX = 0;
            startY = -(drawHeight - size) / 2;
        }
        
        // Clear canvas
        ctx.clearRect(0, 0, size, size);
        
        // Draw circular clipping path
        ctx.beginPath();
        ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();
        
        // Draw image
        ctx.drawImage(img, startX, startY, drawWidth, drawHeight);
        
        // Convert to data URL
        const dataUrl = canvas.toDataURL('image/png');
        
        // Create link element for the favicon
        const link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/png';
        link.sizes = `${size}x${size}`;
        link.href = dataUrl;
        
        // Remove existing favicon of the same size
        const existingLinks = document.querySelectorAll(`link[sizes="${size}x${size}"]`);
        existingLinks.forEach(el => el.remove());
        
        // Add to head
        document.head.appendChild(link);
        
        // Also save the favicon for future use
        saveFavicon(dataUrl, size);
    }
    
    // Function to create Apple Touch Icon
    function createAppleTouchIcon(img, size) {
        // Set canvas size
        canvas.width = size;
        canvas.height = size;
        
        // Calculate dimensions to maintain aspect ratio
        const aspectRatio = img.width / img.height;
        let drawWidth, drawHeight, startX, startY;
        
        if (aspectRatio > 1) {
            // Image is wider than tall
            drawHeight = size;
            drawWidth = size * aspectRatio;
            startX = -(drawWidth - size) / 2;
            startY = 0;
        } else {
            // Image is taller than wide
            drawWidth = size;
            drawHeight = size / aspectRatio;
            startX = 0;
            startY = -(drawHeight - size) / 2;
        }
        
        // Clear canvas
        ctx.clearRect(0, 0, size, size);
        
        // Draw circular clipping path
        ctx.beginPath();
        ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();
        
        // Draw image
        ctx.drawImage(img, startX, startY, drawWidth, drawHeight);
        
        // Convert to data URL
        const dataUrl = canvas.toDataURL('image/png');
        
        // Create link element for the Apple Touch Icon
        const link = document.createElement('link');
        link.rel = 'apple-touch-icon';
        link.sizes = `${size}x${size}`;
        link.href = dataUrl;
        
        // Remove existing Apple Touch Icon
        const existingLinks = document.querySelectorAll('link[rel="apple-touch-icon"]');
        existingLinks.forEach(el => el.remove());
        
        // Add to head
        document.head.appendChild(link);
        
        // Also save the icon for future use
        saveAppleTouchIcon(dataUrl);
    }
    
    // Function to save favicon (in a real environment, this would save to server)
    function saveFavicon(dataUrl, size) {
        // In a browser environment, we can't directly save files to the server
        // This is just a placeholder for where you would implement server-side saving
        console.log(`Favicon ${size}x${size} generated. In a real environment, this would be saved to the server.`);
        
        // For demonstration, we'll create a download link
        const downloadLink = document.createElement('a');
        downloadLink.href = dataUrl;
        downloadLink.download = `favicon-${size}x${size}.png`;
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }
    
    // Function to save Apple Touch Icon
    function saveAppleTouchIcon(dataUrl) {
        // In a browser environment, we can't directly save files to the server
        // This is just a placeholder for where you would implement server-side saving
        console.log('Apple Touch Icon generated. In a real environment, this would be saved to the server.');
        
        // For demonstration, we'll create a download link
        const downloadLink = document.createElement('a');
        downloadLink.href = dataUrl;
        downloadLink.download = 'apple-touch-icon.png';
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }
});