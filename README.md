# DevOps Engineer Portfolio

A modern, responsive, and interactive portfolio website designed specifically for DevOps Engineers to showcase their skills, experience, and projects.

## Features

- **Responsive Design**: Looks great on all devices (desktop, tablet, mobile)
- **Interactive Elements**: Smooth animations, project filtering, and more
- **Modern UI**: Clean and professional design with a focus on user experience
- **Customizable**: Easy to modify and personalize
- **Optimized Performance**: Fast loading and smooth scrolling

## Sections

1. **Hero Section**: Introduction with a call-to-action
2. **About**: Personal information and background with caterpillar frame photo effect
3. **Skills**: Technical skills with visual representation
4. **Experience**: Work history with timeline layout
5. **Projects**: Portfolio of work with filtering capability
6. **Contact**: Contact form and information

## How to Customize

### Basic Information

1. Open `index.html` and update:
   - Name and title in the hero section
   - About me content
   - Contact information
   - Social media links

### Profile Picture

1. Add your profile picture to the `img` folder with the name `profile.jpg`
   - Recommended size: 500x500px
   - The image will automatically be displayed with a caterpillar frame effect
   - For best results, use a square image with your face centered

### Skills

1. In `index.html`, modify the skills section to reflect your expertise
2. Adjust the skill level percentages in the style attributes

### Experience

1. Update the timeline items in the experience section with your work history
2. Add or remove timeline items as needed

### Projects

1. Replace project images in the `img/` folder (project1.jpg, project2.jpg, etc.)
2. Update project descriptions, technologies, and links
3. Modify the filter categories if needed

### Colors and Styling

1. Open `css/style.css` and modify the root variables at the top:
   ```css
   :root {
       --primary-color: #2563eb;
       --secondary-color: #1e40af;
       /* other color variables */
   }
   ```

## Mobile Responsiveness

This portfolio is fully responsive and works well on:
- Desktop computers
- Tablets
- Mobile phones (both portrait and landscape orientations)

The caterpillar frame effect on the About section photo works on all devices and adds a unique visual element to your portfolio.

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── img/                # Images folder
│   ├── profile.jpg     # Your profile picture (add this)
│   ├── project1.jpg    # Project images (add these)
│   ├── project2.jpg
│   ├── project3.jpg
│   └── project4.jpg
└── README.md           # This file
```

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
- Mobile browsers

## Credits

- Font Awesome for icons
- Google Fonts for typography
- Unsplash for stock images (if used)

## License

This project is open source and available under the [MIT License](LICENSE).