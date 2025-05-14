document.addEventListener('DOMContentLoaded', function() {
    // Job titles to rotate through
    const titles = [
        "IT Infrastructure",
        "System Administrator",
        "DevOps Engineer",
        "Cloud Engineer",
        "Fontend Web Developer"
    ];
    
    const titleElement = document.getElementById('job-title');
    if (!titleElement) return;
    
    let currentIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const currentTitle = titles[currentIndex];
        
        if (isDeleting) {
            // Deleting text
            titleElement.textContent = currentTitle.substring(0, currentCharIndex);
            currentCharIndex--;
            
            if (currentCharIndex === 0) {
                isDeleting = false;
                currentIndex = (currentIndex + 1) % titles.length;
                setTimeout(typeEffect, 500); // Pause before typing next title
                return;
            }
        } else {
            // Typing text
            titleElement.textContent = currentTitle.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            
            if (currentCharIndex === currentTitle.length) {
                isDeleting = true;
                setTimeout(typeEffect, 2000); // Pause before deleting
                return;
            }
        }
        
        // Speed: faster when deleting, slower when typing
        const typingSpeed = isDeleting ? 50 : 100;
        setTimeout(typeEffect, typingSpeed);
    }
    
    // Start the typing effect with a slight delay to ensure animation is visible
    setTimeout(typeEffect, 1000);
});