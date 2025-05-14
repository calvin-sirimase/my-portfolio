// Lightbox functionality for project images
document.addEventListener('DOMContentLoaded', function() {
    // Create lightbox elements
    const lightboxOverlay = document.createElement('div');
    lightboxOverlay.className = 'lightbox-overlay';
    
    const lightboxContainer = document.createElement('div');
    lightboxContainer.className = 'lightbox-container';
    
    const lightboxImage = document.createElement('img');
    lightboxImage.className = 'lightbox-image';
    
    const lightboxClose = document.createElement('div');
    lightboxClose.className = 'lightbox-close';
    lightboxClose.innerHTML = '&times;';
    
    const lightboxNav = document.createElement('div');
    lightboxNav.className = 'lightbox-nav';
    
    const lightboxPrev = document.createElement('div');
    lightboxPrev.className = 'lightbox-nav-btn lightbox-prev';
    lightboxPrev.innerHTML = '&#10094;';
    
    const lightboxNext = document.createElement('div');
    lightboxNext.className = 'lightbox-nav-btn lightbox-next';
    lightboxNext.innerHTML = '&#10095;';
    
    const lightboxCounter = document.createElement('div');
    lightboxCounter.className = 'lightbox-counter';
    
    // Append elements to DOM
    lightboxNav.appendChild(lightboxPrev);
    lightboxNav.appendChild(lightboxNext);
    
    lightboxContainer.appendChild(lightboxImage);
    lightboxContainer.appendChild(lightboxClose);
    lightboxContainer.appendChild(lightboxNav);
    lightboxContainer.appendChild(lightboxCounter);
    
    lightboxOverlay.appendChild(lightboxContainer);
    document.body.appendChild(lightboxOverlay);
    
    // Get all project images
    const projectImages = document.querySelectorAll('.project-img');
    let currentIndex = 0;
    let projectImageSources = [];
    
    // Collect all project image sources
    projectImages.forEach((projectImg, index) => {
        const img = projectImg.querySelector('img');
        if (img) {
            projectImageSources.push({
                src: img.src,
                alt: img.alt
            });
            
            // Add click event to open lightbox
            projectImg.addEventListener('click', function() {
                openLightbox(index);
            });
        }
    });
    
    // Function to open lightbox
    function openLightbox(index) {
        if (projectImageSources.length === 0) return;
        
        currentIndex = index;
        updateLightboxImage();
        
        lightboxOverlay.classList.add('active');
        document.body.classList.add('lightbox-open');
        
        // Focus on lightbox for keyboard navigation
        lightboxOverlay.setAttribute('tabindex', '0');
        lightboxOverlay.focus();
    }
    
    // Function to close lightbox
    function closeLightbox() {
        lightboxOverlay.classList.remove('active');
        document.body.classList.remove('lightbox-open');
    }
    
    // Function to navigate to previous image
    function prevImage() {
        currentIndex = (currentIndex - 1 + projectImageSources.length) % projectImageSources.length;
        updateLightboxImage();
    }
    
    // Function to navigate to next image
    function nextImage() {
        currentIndex = (currentIndex + 1) % projectImageSources.length;
        updateLightboxImage();
    }
    
    // Function to update lightbox image
    function updateLightboxImage() {
        const imageData = projectImageSources[currentIndex];
        lightboxImage.src = imageData.src;
        lightboxImage.alt = imageData.alt;
        
        // Update counter
        lightboxCounter.textContent = `${currentIndex + 1} / ${projectImageSources.length}`;
        
        // Show/hide navigation buttons based on number of images
        if (projectImageSources.length <= 1) {
            lightboxNav.style.display = 'none';
            lightboxCounter.style.display = 'none';
        } else {
            lightboxNav.style.display = 'flex';
            lightboxCounter.style.display = 'block';
        }
    }
    
    // Event listeners
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxOverlay.addEventListener('click', function(e) {
        if (e.target === lightboxOverlay) {
            closeLightbox();
        }
    });
    
    lightboxPrev.addEventListener('click', prevImage);
    lightboxNext.addEventListener('click', nextImage);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightboxOverlay.classList.contains('active')) return;
        
        switch (e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                prevImage();
                break;
            case 'ArrowRight':
                nextImage();
                break;
        }
    });
    
    // Preload images for smoother experience
    function preloadImages() {
        projectImageSources.forEach(imageData => {
            const img = new Image();
            img.src = imageData.src;
        });
    }
    
    // Call preload function
    preloadImages();
});