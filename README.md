# Maker Portfolio Website

A modern, recruiter-friendly portfolio website showcasing mechanical engineering, robotics, and biomechatronics projects. Built with plain HTML, CSS, and JavaScript for easy maintenance and fast loading.

## Features

- **Clean, Modern Design** - Professional appearance optimized for recruiters
- **Responsive Layout** - Works beautifully on mobile, tablet, and desktop
- **Fast Loading** - No frameworks, minimal dependencies, optimized for performance
- **Easy to Maintain** - Simple HTML/CSS structure, easy to update
- **Accessible** - Keyboard navigation, proper semantic HTML, alt text support
- **GitHub Pages Ready** - Configured for easy deployment

## Project Structure

```
makerportfolio/
├── index.html              # Home page (hero + about + featured projects)
├── project-1.html         # Project case study pages
├── project-2.html
├── project-3.html
├── project-4.html
├── resume.html            # Resume and contact page
├── assets/
│   ├── css/
│   │   ├── main.css       # Global styles and layout
│   │   ├── components.css # Reusable components
│   │   ├── home.css       # Home page specific styles
│   │   └── project.css    # Project page styles
│   ├── js/
│   │   ├── main.js        # Navigation and interactions
│   │   └── utils.js       # Utility functions
│   └── images/
│       ├── projects/      # Project images (organize by project folder)
│       └── profile/        # Profile photos
└── README.md
```

## Setup Instructions

### 1. Add Your Content

- **Personal Information**: Update name, email, bio, and contact info in:
  - `index.html` (hero section, about section)
  - `resume.html` (contact section, resume content)

- **Profile Photo**: Add your headshot to `assets/images/profile/headshot.jpg`

- **Project Images**: Add images for each project in their respective folders:
  - `assets/images/projects/project-1/` (hero.jpg, card-thumb.jpg, cad-1.jpg, etc.)
  - `assets/images/projects/project-2/`
  - `assets/images/projects/project-3/`
  - `assets/images/projects/project-4/`

- **Project Content**: Update project case studies in:
  - `project-1.html` through `project-4.html`
  - Update project cards on `index.html`

- **Resume PDF**: Add your resume PDF to `assets/resume.pdf` (or update the link in `resume.html`)

### 2. Customize Design (Optional)

- **Colors**: Edit CSS variables in `assets/css/main.css` (look for `:root` section)
- **Typography**: Update font families in `assets/css/main.css`
- **Layout**: Modify grid systems and spacing in CSS files

### 3. Deploy to GitHub Pages

1. Create a new GitHub repository
2. Push your code to the repository
3. Go to repository Settings → Pages
4. Select source branch (usually `main` or `master`)
5. Your site will be live at `https://[username].github.io/makerportfolio/`

### 4. Custom Domain (Optional)

1. Add a `CNAME` file to the root with your domain name
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings with your custom domain

## Image Optimization Tips

Before adding images:

1. **Optimize Images**: Use tools like [Squoosh](https://squoosh.app/) or ImageOptim
2. **Recommended Sizes**:
   - Hero images: 1920px width
   - Card thumbnails: 800px width
   - Gallery images: 1200px width
   - Profile photo: 400x400px (square)
3. **Format**: Use JPG for photos, PNG for graphics with transparency
4. **Lazy Loading**: Images already have `loading="lazy"` attribute for performance

## Adding New Projects

1. Create a new HTML file (e.g., `project-5.html`)
2. Copy structure from an existing project page
3. Update content and image paths
4. Add project card to `index.html` in the featured projects section
5. Add images to `assets/images/projects/project-5/`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## Accessibility Features

- Semantic HTML structure
- Keyboard navigation support
- Skip to main content link
- Alt text for all images
- Proper heading hierarchy
- ARIA labels where needed
- High contrast ratios

## Performance

- No JavaScript frameworks (vanilla JS only)
- Minimal CSS (no heavy libraries)
- Lazy loading images
- Optimized file structure
- Fast page loads

## Maintenance

To update content:
1. Edit HTML files directly
2. Update CSS for styling changes
3. Add/remove project pages as needed
4. Push changes to GitHub for automatic deployment

## License

This portfolio template is free to use and modify for personal use.

## Support

For questions or issues, please open an issue on GitHub or contact via email.

