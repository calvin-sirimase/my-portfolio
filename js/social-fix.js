/**
 * Social Icons Fix Script
 * Ensures social icons in the hero section are visible
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get all social icons in the hero section
    const socialIcons = document.querySelectorAll('.hero-social-icons a');
    
    // Apply fixes to ensure visibility
    socialIcons.forEach(icon => {
        // Force visibility
        icon.style.opacity = '1';
        icon.style.visibility = 'visible';
        icon.style.display = 'flex';
        
        // Ensure proper z-index
        icon.style.position = 'relative';
        icon.style.zIndex = '10';
        
        // Add hover effect
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 15px rgba(0, 0, 128, 0.2)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 10px rgba(0, 0, 128, 0.15)';
        });
    });
    
    // Fix for the container
    const socialContainer = document.querySelector('.hero-social-icons');
    if (socialContainer) {
        socialContainer.style.opacity = '1';
        socialContainer.style.visibility = 'visible';
        socialContainer.style.display = 'flex';
        socialContainer.style.position = 'relative';
        socialContainer.style.zIndex = '10';
    }
});