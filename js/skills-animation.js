// Skills Animation Script
document.addEventListener('DOMContentLoaded', function() {
    // Function to animate skill bars
    function animateSkillBars() {
        const skillLevels = document.querySelectorAll('.skill-level');
        
        skillLevels.forEach(level => {
            const width = level.style.width;
            // First set width to 0
            level.style.width = '0';
            
            // Then animate to the original width
            setTimeout(() => {
                level.style.width = width;
            }, 300);
        });
    }
    
    // Function to check if skills section is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Function to handle scroll and check if skills section is visible
    function checkSkillsVisibility() {
        const skillsSection = document.getElementById('skills');
        if (skillsSection && isInViewport(skillsSection)) {
            animateSkillBars();
            // Remove scroll listener once animation is triggered
            window.removeEventListener('scroll', checkSkillsVisibility);
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', checkSkillsVisibility);
    
    // Check on initial load
    setTimeout(checkSkillsVisibility, 500);
});