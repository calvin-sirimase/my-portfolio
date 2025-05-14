/**
 * Experience Section - Compact Timeline with Tabs and Accordion
 * Handles tab switching and accordion functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabs = document.querySelectorAll('.experience-tab');
    const tabContents = document.querySelectorAll('.experience-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Accordion functionality
    const timelineItems = document.querySelectorAll('.compact-timeline-item');
    
    timelineItems.forEach(item => {
        const header = item.querySelector('.compact-timeline-header');
        const body = item.querySelector('.compact-timeline-body');
        
        header.addEventListener('click', () => {
            // Toggle active class
            const isActive = item.classList.contains('active');
            
            // Close all items first (optional - for accordion behavior)
            // Comment out the next two lines if you want multiple items to be open at once
            timelineItems.forEach(i => i.classList.remove('active'));
            
            // Toggle the clicked item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // Initialize: activate first tab and first timeline item
    if (tabs.length > 0) {
        tabs[0].classList.add('active');
        if (tabContents.length > 0) {
            tabContents[0].classList.add('active');
        }
    }
    
    // Optional: Open first timeline item in each tab by default
    tabContents.forEach(content => {
        const firstItem = content.querySelector('.compact-timeline-item');
        if (firstItem) {
            firstItem.classList.add('active');
        }
    });
    
    // Scroll tabs horizontally with mouse wheel
    const tabContainer = document.querySelector('.experience-tabs');
    if (tabContainer) {
        tabContainer.addEventListener('wheel', (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                tabContainer.scrollLeft += e.deltaY;
            }
        });
    }
});