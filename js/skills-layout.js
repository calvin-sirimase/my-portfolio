// Skills Layout Enhancement Script
document.addEventListener('DOMContentLoaded', function() {
    // Ensure all skill bars are properly animated
    const skillLevels = document.querySelectorAll('.skill-level');
    
    skillLevels.forEach(level => {
        // Get the width from the style attribute
        const width = level.style.width;
        
        // First set width to 0
        level.style.width = '0';
        
        // Then animate to the original width
        setTimeout(() => {
            level.style.width = width;
        }, 300);
    });
    
    // Ensure equal height for skill items in the same row
    function equalizeSkillItemHeights() {
        const skillCategories = document.querySelectorAll('.skill-category');
        
        skillCategories.forEach(category => {
            // Reset heights first
            const items = category.querySelectorAll('.skill-item');
            items.forEach(item => {
                item.style.height = 'auto';
            });
            
            // Get the skill items in this category
            const skillItems = Array.from(category.querySelectorAll('.skill-item'));
            
            // Group items by row (2 items per row)
            for (let i = 0; i < skillItems.length; i += 2) {
                const rowItems = skillItems.slice(i, i + 2);
                if (rowItems.length > 1) {
                    // Find the tallest item in this row
                    const heights = rowItems.map(item => item.offsetHeight);
                    const maxHeight = Math.max(...heights);
                    
                    // Set all items in this row to the same height
                    rowItems.forEach(item => {
                        item.style.height = `${maxHeight}px`;
                    });
                }
            }
        });
    }
    
    // Equalize heights after a short delay to ensure all content is loaded
    setTimeout(equalizeSkillItemHeights, 500);
    
    // Re-equalize on window resize
    window.addEventListener('resize', function() {
        setTimeout(equalizeSkillItemHeights, 200);
    });
    
    // Ensure skill titles are properly aligned
    const skillTitles = document.querySelectorAll('.skill-item h4');
    skillTitles.forEach(title => {
        if (title.scrollHeight > 24) {
            title.style.fontSize = '0.9rem';
        }
    });
});