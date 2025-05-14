/**
 * Section Transitions - Enhances the visual transition between colored sections
 * Adds intersection observers for scroll-based effects
 */

document.addEventListener('DOMContentLoaded', function() {
    // Create section dividers
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
    
    // Insert dividers between sections
    for (let i = 0; i < sections.length - 1; i++) {
        const currentSection = document.getElementById(sections[i]);
        const nextSection = document.getElementById(sections[i+1]);
        
        if (currentSection && nextSection) {
            const divider = document.createElement('div');
            divider.className = `section-divider divider-${sections[i]}-${sections[i+1]}`;
            
            // Insert divider between sections
            if (nextSection.previousElementSibling === currentSection) {
                currentSection.parentNode.insertBefore(divider, nextSection);
            }
        }
    }
    
    // Add intersection observer for scroll effects
    if ('IntersectionObserver' in window) {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add class to highlight current section in navigation
                    const id = entry.target.getAttribute('id');
                    
                    // Update navigation links
                    document.querySelectorAll('.nav-menu a').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                    
                    // Optional: Update body class for global styling hooks
                    document.body.className = `viewing-${id}`;
                }
            });
        }, {
            rootMargin: '-20% 0px -20% 0px', // Trigger when section is 20% in viewport
            threshold: 0.1
        });
        
        // Observe all sections
        sections.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                sectionObserver.observe(section);
            }
        });
    }
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Smooth scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Update URL without page jump
                history.pushState(null, null, targetId);
            }
        });
    });
});