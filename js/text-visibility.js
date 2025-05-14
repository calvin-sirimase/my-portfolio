// Script to ensure text visibility
document.addEventListener('DOMContentLoaded', function() {
    // Force visibility for hero section text
    const heroElements = document.querySelectorAll('#home h1, #home h2, #home p');
    heroElements.forEach(el => {
        el.style.visibility = 'visible';
        el.style.opacity = '1';
    });
    
    // Force visibility for skills section
    const skillsElements = document.querySelectorAll('#skills .section-header, #skills .skill-category, #skills .skill-category h3');
    skillsElements.forEach(el => {
        el.style.visibility = 'visible';
        el.style.opacity = '1';
    });
    
    // Ensure skill bars are visible
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(level => {
        // Get the width from the style attribute
        const width = level.getAttribute('style').match(/width:\s*([^;]+)/)[1];
        // Force the width to be applied
        level.style.width = width;
    });
});