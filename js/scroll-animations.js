// Using Intersection Observer API for better performance with scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Apply initial animations to elements that are already in view
    setTimeout(() => {
        // Animate hero section elements immediately
        document.querySelectorAll('#home .fade-in').forEach((el, i) => {
            setTimeout(() => {
                el.classList.add('appear');
            }, i * 200);
        });
        
        // Animate social icons with stagger
        document.querySelectorAll('#home .stagger-item').forEach((el, i) => {
            setTimeout(() => {
                el.classList.add('appear');
            }, 800 + (i * 100));
        });
    }, 300);
    
    // Create Intersection Observer for scroll animations
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.15 // 15% of the element must be visible
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Handle different animation types
                if (entry.target.classList.contains('fade-in') || 
                    entry.target.classList.contains('slide-in-left') || 
                    entry.target.classList.contains('slide-in-right') || 
                    entry.target.classList.contains('scale-in')) {
                    entry.target.classList.add('appear');
                }
                
                // Handle staggered animations within the target
                const staggerItems = entry.target.querySelectorAll('.stagger-item');
                if (staggerItems.length > 0) {
                    staggerItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('appear');
                        }, index * 100);
                    });
                }
                
                // Unobserve after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements with animation classes
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .has-stagger-items').forEach(el => {
        observer.observe(el);
    });
    
    // Special animation for the profile photo
    const profilePhoto = document.querySelector('.about-image');
    if (profilePhoto) {
        // Add floating animation class
        profilePhoto.classList.add('floating');
        
        // Add mouse movement effect
        document.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) / 50;
            const moveY = (e.clientY - window.innerHeight / 2) / 50;
            
            profilePhoto.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
        });
    }
});