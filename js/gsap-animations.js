// GSAP Animations with improved visibility
document.addEventListener('DOMContentLoaded', function() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animations with enhanced visibility
    gsap.from('#home h1', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        onComplete: () => {
            document.querySelector('#home h1').style.visibility = 'visible';
            document.querySelector('#home h1').style.opacity = 1;
        }
    });
    
    gsap.from('#home h2', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
        onComplete: () => {
            document.querySelector('#home h2').style.visibility = 'visible';
            document.querySelector('#home h2').style.opacity = 1;
        }
    });
    
    gsap.from('#home p', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
        onComplete: () => {
            document.querySelector('#home p').style.visibility = 'visible';
            document.querySelector('#home p').style.opacity = 1;
        }
    });
    
    gsap.from('#home .hero-buttons', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.7,
        ease: 'power3.out'
    });
    
    gsap.from('#home .social-icons a', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        delay: 1,
        ease: 'back.out(1.7)'
    });
    
    // Floating animation for profile photo
    const profilePhoto = document.querySelector('.about-image');
    if (profilePhoto) {
        // Gentle floating animation
        gsap.to(profilePhoto, {
            y: '-10px',
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });
        
        // Mouse movement effect
        document.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) / 50;
            const moveY = (e.clientY - window.innerHeight / 2) / 50;
            
            gsap.to(profilePhoto, {
                x: moveX,
                y: moveY - 5, // Combine with floating animation
                duration: 1
            });
        });
    }
    
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
    
    // Skills section animations with enhanced visibility
    gsap.from('.skills .section-header', {
        scrollTrigger: {
            trigger: '#skills',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        onComplete: () => {
            document.querySelector('.skills .section-header').style.visibility = 'visible';
            document.querySelector('.skills .section-header').style.opacity = 1;
        }
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
        ease: 'power3.out',
        onComplete: () => {
            document.querySelectorAll('.skill-category').forEach(el => {
                el.style.visibility = 'visible';
                el.style.opacity = 1;
            });
        }
    });
    
    gsap.from('.skill-item', {
        scrollTrigger: {
            trigger: '#skills',
            start: 'top 70%'
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.05,
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
    
    gsap.from('.social-links a', {
        scrollTrigger: {
            trigger: '.social-links',
            start: 'top 90%'
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)'
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