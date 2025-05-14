// Hero Section Animation
document.addEventListener('DOMContentLoaded', function() {
    // Animate floating circles
    const circles = document.querySelectorAll('.floating-circle');
    
    circles.forEach((circle, index) => {
        // Create different animation for each circle
        gsap.to(circle, {
            y: index % 2 === 0 ? '20px' : '-20px',
            x: index % 3 === 0 ? '10px' : '-10px',
            duration: 3 + index,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.5
        });
    });
    
    // Enhanced hero content animations
    gsap.from('.hero-content h1', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-content h2', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-content p', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-buttons', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.9,
        ease: 'power3.out'
    });
    
    // Staggered animation for social icons
    gsap.from('.hero-social-icons a', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        delay: 1.2,
        ease: 'back.out(1.7)'
    });
    
    // Scroll down indicator animation
    gsap.from('.scroll-down', {
        opacity: 0,
        y: -20,
        duration: 1,
        delay: 1.5,
        ease: 'power3.out'
    });
    
    // Continuous bounce animation for scroll indicator
    gsap.to('.scroll-down', {
        y: '10px',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
});