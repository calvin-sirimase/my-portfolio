// GSAP Animations for Other Sections
document.addEventListener('DOMContentLoaded', function() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // About section animations
    gsap.from('.about-content .about-image', {
        scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%'
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.about-content .about-text', {
        scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%'
        },
        opacity: 0,
        x: 50,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.about-details .detail', {
        scrollTrigger: {
            trigger: '.about-details',
            start: 'top 85%'
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
    });
    
    // Skills section animations
    gsap.from('.skills .section-header', {
        scrollTrigger: {
            trigger: '#skills',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    gsap.from('.skill-category', {
        scrollTrigger: {
            trigger: '#skills',
            start: 'top 75%'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // Experience section animations
    gsap.from('.timeline-item', {
        scrollTrigger: {
            trigger: '.timeline',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power3.out'
    });
    
    // Projects section animations
    gsap.from('.projects .section-header', {
        scrollTrigger: {
            trigger: '#projects',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    gsap.from('.projects-filter button', {
        scrollTrigger: {
            trigger: '.projects-filter',
            start: 'top 85%'
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out'
    });
    
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.2)'
    });
    
    // Contact section animations
    gsap.from('.contact .section-header', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    gsap.from('.contact-item', {
        scrollTrigger: {
            trigger: '.contact-content',
            start: 'top 80%'
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact-content',
            start: 'top 80%'
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Footer animations
    gsap.from('.footer-content', {
        scrollTrigger: {
            trigger: 'footer',
            start: 'top 95%'
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Back to top button animation
    gsap.from('.back-to-top', {
        scrollTrigger: {
            trigger: 'body',
            start: 'top -100%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        ease: 'back.out(1.7)'
    });
});