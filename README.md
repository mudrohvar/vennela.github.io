# Personal Portfolio Website

A modern, animated personal portfolio website built for GitHub Pages. This website showcases your experience, skills, work, and philosophy as a Product Manager.

## Features

- **Modern UI Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Live Time Display**: Shows current time at the top of the page
- **Scrolling Titles**: Animated titles that rotate beneath your name
- **Time Counter**: Displays how long you've been building products
- **Interactive Sections**:
  - About Me
  - Core Competencies (Skills)
  - Philosophy (Work & Life Ideology)
  - Experience Timeline
  - PM Thoughts
  - Written Work
  - Contact Information
- **Smooth Animations**: Fade-in effects, hover animations, and scroll effects
- **Resume Download**: Direct download button for your resume

## Setup Instructions

### 1. Customize Your Content

Edit `index.html` to update:

- **Line 8**: Update the page title
- **Lines 14-15**: Update your initials in the logo
- **Line 40**: Update your name
- **Lines 41-46**: Customize the scrolling titles
- **All sections**: Replace placeholder content with your actual information
- **Contact section**: Update email, LinkedIn, Twitter links

### 2. Update JavaScript Settings

Edit `script.js` to configure:

- **Line 5**: Change timezone to your location (e.g., 'America/New_York', 'Europe/London', 'Asia/Tokyo')
- **Line 24**: Set your career start date for the time counter

```javascript
const startDate = new Date('2018-01-01'); // Change this to when you started building products
```

### 3. Add Your Resume

1. Create an `assets` folder in the project root
2. Place your resume PDF as `resume.pdf` in the assets folder
3. The download button in the navigation will automatically work

### 4. Customize Colors

Edit `styles.css` (lines 2-12) to change the color scheme:

```css
:root {
    --primary-color: #2563eb;  /* Main brand color */
    --secondary-color: #0f172a; /* Secondary color */
    --accent: #3b82f6; /* Accent color */
    /* ... other variables ... */
}
```

## Deploying to GitHub Pages

### Option 1: Using GitHub Web Interface

1. Create a new repository on GitHub (e.g., `your-username.github.io`)
2. Upload all files:
   - index.html
   - styles.css
   - script.js
   - README.md
   - assets/resume.pdf
3. Go to repository Settings > Pages
4. Select "Deploy from a branch" under Source
5. Choose "main" branch and "/ (root)" folder
6. Click Save

Your site will be available at: `https://your-username.github.io`

### Option 2: Using Git Command Line

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Personal portfolio website"

# Add remote repository
git remote add origin https://github.com/your-username/your-username.github.io.git

# Push to GitHub
git push -u origin main
```

Then configure GitHub Pages in repository settings as described in Option 1.

## Customization Tips

### Adding Real Images

Replace placeholder emoji images in the Written Work section:

1. Add images to an `assets/images/` folder
2. Update the HTML:

```html
<div class="work-image">
    <img src="assets/images/article-1.jpg" alt="Article preview">
</div>
```

### Linking Your Articles

Update the links in the Written Work and PM Thoughts sections:

```html
<a href="https://medium.com/@yourhandle/article-slug" class="work-link">Read Article →</a>
```

### Changing Fonts

To use a custom font (e.g., Google Fonts):

1. Add to `<head>` in index.html:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

2. Update `styles.css`:
```css
body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Structure

```
PersonalWebsite/
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # Interactive features
├── README.md           # This file
└── assets/
    └── resume.pdf      # Your resume (add this)
```

## Features Inspired By

- **sherlaine.com**: Modern UI elements
- **mitchcanter.me**: Profile layout structure
- **omareletr.com**: Scrolling titles and time display
- **rezarezaeipour.com**: Portfolio dive-in page design
- **samdickie.me**: UI design, animations, and navigation

## Need Help?

If you encounter any issues:

1. Check browser console for errors (F12)
2. Verify all file paths are correct
3. Ensure all files are uploaded to GitHub
4. Check GitHub Pages deployment status in repository settings

## License

Feel free to use this template for your personal website. Just update the content with your own information!

---

Built with HTML, CSS, and JavaScript. No frameworks required!
