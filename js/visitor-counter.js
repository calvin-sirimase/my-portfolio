// Visitor Counter Script
document.addEventListener('DOMContentLoaded', function() {
    // Function to update visitor count
    function updateVisitorCount() {
        // Check if we can use localStorage
        if (typeof(Storage) !== "undefined") {
            // Get current count from localStorage
            let visitorCount = localStorage.getItem('visitorCount');
            
            // If first visit or count doesn't exist
            if (!visitorCount) {
                visitorCount = 1;
            } else {
                // Check if this is a new session
                const lastVisit = localStorage.getItem('lastVisit');
                const currentTime = new Date().getTime();
                
                // If last visit was more than 30 minutes ago or doesn't exist, count as new visit
                if (!lastVisit || (currentTime - lastVisit) > 30 * 60 * 1000) {
                    visitorCount = parseInt(visitorCount) + 1;
                }
            }
            
            // Update localStorage
            localStorage.setItem('visitorCount', visitorCount);
            localStorage.setItem('lastVisit', new Date().getTime());
            
            // Update the counter display
            const counterElement = document.getElementById('visitor-counter');
            if (counterElement) {
                counterElement.textContent = visitorCount;
            }
        }
    }
    
    // Call the function to update count
    updateVisitorCount();
});