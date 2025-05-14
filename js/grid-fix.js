// Grid Layout Fix Script
document.addEventListener('DOMContentLoaded', function() {
    // Fix skill items layout
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach(category => {
        const skillItems = category.querySelectorAll('.skill-item');
        const skillItemsContainer = category.querySelector('.skill-items');
        
        // Ensure the container has the right display property
        if (skillItemsContainer) {
            skillItemsContainer.style.display = 'grid';
            skillItemsContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
            skillItemsContainer.style.gap = '15px';
            
            // Apply styles to each skill item
            skillItems.forEach(item => {
                item.style.width = '100%';
                item.style.margin = '0';
                item.style.boxSizing = 'border-box';
            });
        }
    });
    
    // Adjust grid based on screen size
    function adjustGrids() {
        const width = window.innerWidth;
        const skillItemsContainers = document.querySelectorAll('.skill-items');
        
        skillItemsContainers.forEach(container => {
            if (width <= 576) {
                container.style.gridTemplateColumns = '1fr';
            } else if (width <= 992) {
                container.style.gridTemplateColumns = 'repeat(2, 1fr)';
            } else {
                container.style.gridTemplateColumns = 'repeat(3, 1fr)';
            }
        });
    }
    
    // Initial adjustment
    adjustGrids();
    
    // Adjust on window resize
    window.addEventListener('resize', adjustGrids);
});