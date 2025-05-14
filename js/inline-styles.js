// Apply inline styles directly to elements
document.addEventListener('DOMContentLoaded', function() {
    // Apply styles to skill items containers
    document.querySelectorAll('.skill-items').forEach(container => {
        container.setAttribute('style', 
            'display: grid !important; ' +
            'grid-template-columns: repeat(3, 1fr) !important; ' +
            'gap: 15px !important; ' +
            'width: 100% !important; ' +
            'box-sizing: border-box !important;'
        );
    });
    
    // Apply styles to individual skill items
    document.querySelectorAll('.skill-item').forEach(item => {
        item.setAttribute('style',
            'width: 100% !important; ' +
            'margin: 0 !important; ' +
            'box-sizing: border-box !important; ' +
            'display: flex !important; ' +
            'flex-direction: column !important;'
        );
    });
    
    // Apply styles to skill categories
    document.querySelectorAll('.skill-category').forEach(category => {
        category.setAttribute('style',
            'width: 100% !important; ' +
            'box-sizing: border-box !important; ' +
            'padding: 20px !important;'
        );
    });
    
    // Handle responsive layout
    function handleResponsiveLayout() {
        const width = window.innerWidth;
        const columns = width <= 576 ? '1fr' : 
                       width <= 992 ? 'repeat(2, 1fr)' : 
                       'repeat(3, 1fr)';
        
        document.querySelectorAll('.skill-items').forEach(container => {
            container.style.gridTemplateColumns = columns;
        });
    }
    
    // Initial call
    handleResponsiveLayout();
    
    // Update on resize
    window.addEventListener('resize', handleResponsiveLayout);
});