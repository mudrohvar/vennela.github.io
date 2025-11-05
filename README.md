# Vennela Subramanyam - Personal Website

A modern, playful, and interactive personal website showcasing professional work and achievements.

## Overview

This is a single-page personal website homepage built for Vennela Subramanyam, a Product Manager at Google. The website features smooth animations, abstract background elements, and a responsive design that works seamlessly across all devices.

## Features

### Sections

1. **Hero/Landing Section**
   - Eye-catching introduction with name and tagline
   - Professional profile photo
   - Playful tagline: "A Product Manager sweeter than Vanilla ice cream, who listens, iterates, and ships"
   - Call-to-action button linking to About page
   - Abstract animated background patterns

2. **Philosophy Section**
   - Brief description of product management approach
   - Three core principles: Listen, Iterate, Ship
   - Interactive cards with hover effects

3. **Journey/Timeline Section**
   - Visual timeline of career progression
   - Work experience from Amazon (2015) to Google (2021-Present)
   - Scroll-triggered animations
   - Responsive timeline layout

4. **Featured In & Awards Section**
   - Recognition from Success Quarterly and Tech Bullion
   - SQ Awards Q2 2025
   - Links to external articles and awards
   - Card-based layout with hover effects

### Design Elements

- **Color Scheme**: Modern blue palette (#2563eb, #3b82f6, #1e40af)
- **Typography**: Montserrat font family from Google Fonts
- **Animations**:
  - Smooth scroll-triggered animations using WOW.js and Animate.css
  - Floating background decorations
  - Interactive hover effects on cards and buttons
  - Pulsing profile photo animation
- **Background Assets**: Custom SVG patterns (circles, triangles, waves)

## Technical Stack

### Frontend
- **HTML5**: Semantic markup for accessibility
- **CSS3**: Modern styling with CSS variables, Grid, and Flexbox
- **JavaScript**: Vanilla JS for interactions

### Libraries
- **jQuery 3.x**: DOM manipulation and plugin support
- **WOW.js**: Scroll-triggered animations
- **Animate.css**: Pre-built CSS animation classes
- **jQuery Sticky**: Sticky navigation on scroll
- **Modernizr**: Feature detection for browser compatibility

### Assets
- **Google Fonts**: Montserrat (weights: 300, 400, 500, 600, 700, 800)
- **SVG Graphics**: 7 custom background patterns and decorations
- **Profile Photo**: Professional headshot in assets/images/profile/

## File Structure

```
PersonalWebsite/
├── index.html                      # Main homepage
├── README.md                       # This file
├── requirements.md                 # Project requirements
├── ASSET-INVENTORY.md             # Complete asset documentation
├── assets/
│   ├── css/
│   │   ├── styles.css             # Main stylesheet
│   │   ├── reference-style.css    # Reference CSS (study material)
│   │   ├── reference-responsive.css
│   │   └── reference-main.css
│   ├── js/
│   │   ├── jquery.min.js          # jQuery library
│   │   ├── wow.min.js             # Scroll animations
│   │   ├── jquery.sticky.js       # Sticky header
│   │   ├── modernizr.js           # Feature detection
│   │   └── main.js                # Custom JavaScript
│   ├── images/
│   │   ├── backgrounds/           # SVG background assets (7 files)
│   │   ├── profile/               # Profile photo
│   │   └── icons/                 # (Empty - for future use)
│   ├── fonts/
│   │   └── FONT-CONFIGURATION.md  # Font setup guide
│   ├── color-palette.md           # Color scheme documentation
│   └── ASSET-RESOURCES.md         # Additional resource links
└── reference-homepage/            # Original reference website
```

## Getting Started

### Option 1: Local Development

1. **Open the website locally**
   - Simply open `index.html` in your web browser
   - No build process required!

2. **Using a local server (recommended)**
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js (http-server)
   npx http-server

   # Using VS Code Live Server extension
   # Right-click on index.html > "Open with Live Server"
   ```

3. **View in browser**
   - Navigate to `http://localhost:8000` (or your server's URL)

### Option 2: GitHub Pages Deployment

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Personal website homepage"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository Settings > Pages
   - Source: Deploy from main branch
   - Root directory: / (root)
   - Save and wait for deployment

3. **Access your website**
   - URL will be: `https://YOUR_USERNAME.github.io/REPO_NAME/`

## Customization

### Changing Colors

Edit the CSS variables in `assets/css/styles.css`:

```css
:root {
  --color-primary: #2563eb;        /* Main brand color */
  --color-primary-light: #3b82f6;  /* Hover states */
  --color-primary-dark: #1e40af;   /* Dark sections */
  /* ... more colors */
}
```

### Updating Content

1. **Hero Section**: Edit the text in `index.html` around line 50-65
2. **Philosophy**: Update the philosophy text and cards around line 90-130
3. **Journey**: Modify timeline items around line 135-195
4. **Featured**: Update cards around line 205-260

### Adding Your Photo

Replace the file at `assets/images/profile/my-photo.jpg` with your own photo:
- Recommended size: 800x800px or larger
- Square aspect ratio
- High quality JPG or PNG format

### Changing Background Patterns

The website uses SVG backgrounds located in `assets/images/backgrounds/`:
- `bg-circles-pattern-01.svg` - Repeating circles
- `bg-triangles-pattern-01.svg` - Geometric triangles
- `wave-divider-01.svg` - Bold wave divider
- `wave-divider-02.svg` - Subtle wave divider
- Plus 3 more decorative elements

To change backgrounds, edit the CSS in the relevant section.

## Browser Compatibility

### Supported Browsers
- Chrome 90+ ✓
- Firefox 88+ ✓
- Safari 14+ ✓
- Edge 90+ ✓
- Mobile Safari (iOS 13+) ✓
- Chrome Mobile (Android 8+) ✓

### Features
- ✓ Responsive design (mobile, tablet, desktop)
- ✓ Smooth scroll animations
- ✓ CSS Grid and Flexbox layouts
- ✓ Modern CSS features (variables, gradients, transforms)
- ✓ Graceful degradation for older browsers

## Performance

### Optimizations Included
- Minified JavaScript libraries
- SVG graphics (small file sizes)
- CSS variables for efficient styling
- Google Fonts with `display=swap`
- Debounced scroll event handlers

### Suggestions for Further Optimization
- Compress and optimize the profile photo
- Implement lazy loading for below-the-fold images
- Inline critical CSS
- Add service worker for offline support
- Minify custom CSS and JavaScript

## Accessibility

### Current Features
- Semantic HTML5 elements
- WCAG AA compliant color contrast
- Keyboard navigation support
- Responsive and mobile-friendly
- Alt text for images

### Recommended Improvements
- Add ARIA labels for interactive elements
- Implement skip to main content link
- Enhance focus indicators
- Screen reader testing

## Next Steps

### Planned Pages
- **About Page**: Detailed biography and background
- **Portfolio Page**: Full project showcases with case studies

### Future Enhancements
- Contact form with email integration
- Blog section for articles
- Dark mode toggle
- Custom loading animation
- More interactive elements

## Credits

**Design & Development**: Built for Vennela Subramanyam
**Inspiration**: Reference homepage provided
**Fonts**: [Google Fonts - Montserrat](https://fonts.google.com/specimen/Montserrat)
**Animation Libraries**: WOW.js, Animate.css
**Assets**: Custom SVG graphics created for this project

## License

This website is for personal use by Vennela Subramanyam.

## Support

For questions or issues:
1. Check the `ASSET-INVENTORY.md` for detailed asset documentation
2. Review `requirements.md` for project specifications
3. See the reference homepage in the `reference-homepage/` folder

---

**Built with care** | Product Manager at Google | © 2025 Vennela Subramanyam
