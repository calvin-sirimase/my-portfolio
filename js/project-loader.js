// Project Loader Script
document.addEventListener('DOMContentLoaded', function() {
    // Project filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Make sure filter buttons are visible
    filterButtons.forEach(btn => {
        btn.style.visibility = 'visible';
        btn.style.opacity = '1';
    });
    
    // Add click event to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.classList.remove('hide');
                } else {
                    if (card.getAttribute('data-category').includes(filterValue)) {
                        card.classList.remove('hide');
                    } else {
                        card.classList.add('hide');
                    }
                }
            });
        });
    });
    
    // Auto-load projects from image files
    function loadProjectsFromImages() {
        const projectsGrid = document.querySelector('.projects-grid');
        const existingProjects = Array.from(projectsGrid.querySelectorAll('.project-card')).length;
        
        // Check for image files in the img folder
        const checkImage = (index) => {
            const img = new Image();
            const projectNumber = existingProjects + index;
            img.src = `img/project${projectNumber}.jpg`;
            
            img.onload = function() {
                // Image exists, create a new project card
                const projectCard = createProjectCard(projectNumber, img.src);
                projectsGrid.appendChild(projectCard);
                
                // Check for next image
                checkImage(index + 1);
                
                // Initialize lightbox for the new project image
                initializeLightboxForNewProject(projectCard);
            };
            
            img.onerror = function() {
                // No more images found
                console.log(`Finished loading projects. Total: ${projectNumber - 1}`);
            };
        };
        
        // Start checking from the next project number
        checkImage(1);
    }
    
    // Function to create a new project card
    function createProjectCard(projectNumber, imageSrc) {
        const categories = ['infrastructure', 'cicd', 'kubernetes', 'frontend'];
        const randomCategories = [];
        
        // Randomly select 1-2 categories
        const numCategories = Math.floor(Math.random() * 2) + 1;
        for (let i = 0; i < numCategories; i++) {
            const randomIndex = Math.floor(Math.random() * categories.length);
            const category = categories[randomIndex];
            if (!randomCategories.includes(category)) {
                randomCategories.push(category);
            }
        }
        
        const categoryString = randomCategories.join(' ');
        
        // Create project card element
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-category', categoryString);
        
        // Project titles and descriptions
        const titles = [
            'Cloud Infrastructure Setup',
            'DevOps Automation Pipeline',
            'Kubernetes Deployment',
            'Frontend Portfolio Project',
            'CI/CD Implementation',
            'Network Security Solution',
            'Serverless Application',
            'Microservices Architecture'
        ];
        
        const descriptions = [
            'Designed and implemented a scalable cloud infrastructure with high availability and disaster recovery capabilities.',
            'Created an automated CI/CD pipeline that reduced deployment time by 70% and improved code quality.',
            'Deployed a containerized application on Kubernetes with auto-scaling and self-healing capabilities.',
            'Developed a responsive frontend application with modern UI/UX principles and optimized performance.',
            'Implemented a comprehensive CI/CD solution with automated testing and deployment strategies.',
            'Designed a robust network security solution with intrusion detection and prevention systems.',
            'Built a serverless application using AWS Lambda and API Gateway for cost-effective scaling.',
            'Architected a microservices-based system that improved modularity and team productivity.'
        ];
        
        // Randomly select title and description
        const titleIndex = Math.floor(Math.random() * titles.length);
        const title = titles[titleIndex];
        const description = descriptions[titleIndex];
        
        // Technologies based on categories
        const techStacks = {
            'infrastructure': ['AWS', 'Azure', 'Terraform', 'Ansible', 'CloudFormation', 'Pulumi'],
            'cicd': ['Jenkins', 'GitHub Actions', 'CircleCI', 'Travis CI', 'ArgoCD', 'SonarQube'],
            'kubernetes': ['Kubernetes', 'Helm', 'Istio', 'Prometheus', 'Grafana', 'Docker'],
            'frontend': ['React', 'Vue.js', 'Angular', 'HTML/CSS', 'JavaScript', 'Bootstrap']
        };
        
        // Select technologies based on categories
        const technologies = [];
        randomCategories.forEach(category => {
            const categoryTechs = techStacks[category];
            // Select 2-3 technologies from each category
            const numTechs = Math.floor(Math.random() * 2) + 2;
            for (let i = 0; i < numTechs; i++) {
                const randomIndex = Math.floor(Math.random() * categoryTechs.length);
                const tech = categoryTechs[randomIndex];
                if (!technologies.includes(tech)) {
                    technologies.push(tech);
                }
            }
        });
        
        // Create HTML structure
        card.innerHTML = `
            <div class="project-img">
                <img src="${imageSrc}" alt="Project ${projectNumber}">
            </div>
            <div class="project-info">
                <h3>${title}</h3>
                <p>${description}</p>
                <div class="project-tech">
                    ${technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="#" class="btn btn-sm">View Details</a>
                    <a href="#" target="_blank"><i class="fab fa-github"></i></a>
                </div>
            </div>
        `;
        
        return card;
    }
    
    // Function to initialize lightbox for new project images
    function initializeLightboxForNewProject(projectCard) {
        const projectImg = projectCard.querySelector('.project-img');
        if (projectImg) {
            projectImg.style.cursor = 'pointer';
            
            // Add click event to open lightbox
            projectImg.addEventListener('click', function() {
                // If lightbox.js is loaded, it will handle the click event
                // This is just a fallback in case lightbox.js is not loaded yet
                if (typeof openLightbox !== 'function') {
                    const img = projectImg.querySelector('img');
                    if (img) {
                        const lightboxOverlay = document.querySelector('.lightbox-overlay');
                        const lightboxImage = document.querySelector('.lightbox-image');
                        
                        if (lightboxOverlay && lightboxImage) {
                            lightboxImage.src = img.src;
                            lightboxImage.alt = img.alt;
                            lightboxOverlay.classList.add('active');
                            document.body.classList.add('lightbox-open');
                        }
                    }
                }
            });
        }
    }
    
    // Initialize lightbox for existing project images
    function initializeLightboxForExistingProjects() {
        const projectImgs = document.querySelectorAll('.project-img');
        projectImgs.forEach(projectImg => {
            projectImg.style.cursor = 'pointer';
        });
    }
    
    // Call the functions
    loadProjectsFromImages();
    initializeLightboxForExistingProjects();
});