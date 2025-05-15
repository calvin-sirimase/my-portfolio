// Mobile-specific fixes for the home/hero section
document.addEventListener('DOMContentLoaded', function() {
  // Fix for hero section on mobile
  function adjustHeroForMobile() {
    const isMobile = window.innerWidth <= 767;
    const hero = document.querySelector('.hero');
    
    if (isMobile && hero) {
      // Force proper height and alignment
      hero.style.height = 'auto';
      hero.style.minHeight = '100vh';
      hero.style.display = 'flex';
      hero.style.alignItems = 'center';
      hero.style.paddingTop = '120px';
      hero.style.paddingBottom = '40px';
      
      // Fix hero content
      const heroContent = document.querySelector('.hero-content');
      if (heroContent) {
        heroContent.style.width = '100%';
        heroContent.style.textAlign = 'center';
        heroContent.style.marginTop = '20px';
      }
      
      // Ensure h1 is visible
      const heroH1 = document.querySelector('.hero h1');
      if (heroH1) {
        heroH1.style.display = 'block';
        heroH1.style.visibility = 'visible';
        heroH1.style.opacity = '1';
        heroH1.style.marginTop = '30px';
      }
      
      // Fix buttons
      const heroButtons = document.querySelector('.hero-buttons');
      if (heroButtons) {
        heroButtons.style.flexDirection = 'column';
        heroButtons.style.width = '100%';
        
        const buttons = heroButtons.querySelectorAll('.btn');
        buttons.forEach(btn => {
          btn.style.width = '100%';
          btn.style.margin = '5px 0';
        });
      }
    }
  }
  
  // Run on load and resize
  adjustHeroForMobile();
  window.addEventListener('resize', adjustHeroForMobile);
  
  // Additional fix for navbar height
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.style.height = 'auto';
  }
});