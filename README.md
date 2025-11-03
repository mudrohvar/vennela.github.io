# Modern Portfolio Website

A sophisticated, dark-themed personal portfolio website built for GitHub Pages. This website features a modern design with a fixed sidebar, smooth animations, and all the content sections you need to showcase your experience as a Product Manager.

## Design Inspiration

This website draws inspiration from modern portfolio sites including:
- **mitchcanter.me** - Fixed sidebar profile layout
- **omareletr.com** - Live time display and scrolling job titles
- **sherlaine.com** - Clean UI elements and generous spacing
- **samdickie.me** - Modern animations and interactions
- **rezarezaeipour.com** - Portfolio presentation style

## Features

### Design & UI
- **Dark Modern Theme** - Sophisticated color palette with indigo, purple, and cyan accents
- **Fixed Sidebar Profile** - Left sidebar with your profile, navigation, and social links
- **Gradient Orbs Background** - Animated floating gradient orbs in hero section
- **Smooth Animations** - Scroll-triggered animations using AOS library
- **Responsive Design** - Works beautifully on all devices (desktop, tablet, mobile)
- **Google Fonts Integration** - Inter, Space Grotesk, and JetBrains Mono
- **Font Awesome Icons** - Professional icon system throughout
- **Real Images** - Unsplash images for article thumbnails (easily replaceable)

### Interactive Features
- **Live Time Display** - Shows current time that updates every second
- **Rotating Job Titles** - Animated rotating titles under your name
- **Time Counter** - Displays how long you've been building products
- **Active Navigation** - Highlights current section in sidebar navigation
- **Smooth Scrolling** - Seamless navigation between sections
- **Mobile Menu** - Touch-friendly hamburger menu for mobile devices
- **Hover Effects** - Subtle animations on cards, buttons, and links
- **Parallax Hero** - Parallax scrolling effect on hero section
- **Keyboard Shortcuts** - Press 'H' for home, 'C' for contact

### Content Sections
1. **Hero Section** - Eye-catching introduction with animated background
2. **About Me** - Personal introduction and background
3. **Core Competencies** - Your key skills with icons (Product Sense, Customer-Centric Design, etc.)
4. **Experience Timeline** - Professional experience with achievements and tags
5. **Philosophy** - Your work and life philosophy in gradient cards
6. **PM Thoughts** - Showcase your thought leadership articles
7. **Written Work** - Published articles with images and metadata
8. **Contact** - Multiple ways to connect (Email, LinkedIn, Twitter, Calendly)

## Quick Start

### 1. Customize Your Content

**Update Personal Information:**
- Line 32: Change profile image API name
- Line 36: Update your name
- Lines 40-43: Customize rotating job titles
- Line 50: Update your location
- Lines 85-96: Update social media links

**Update Time Settings:**

Edit `script.js`:
```javascript
// Line 35: Set your timezone
timeZone: 'America/New_York',  // Change to your timezone

// Line 59: Set your career start date
const startDate = new Date('2018-01-01');
```

Common timezones:
- `'America/New_York'` (EST)
- `'America/Los_Angeles'` (PST)
- `'Europe/London'` (GMT)
- `'Asia/Tokyo'` (JST)
- `'Asia/Kolkata'` (IST)

**Replace Content:**
- Update all sections with your actual information
- Replace placeholder images in Written Work section (Lines 424, 448, 472)
- Add your resume to `assets/resume.pdf`

### 2. Customize Colors (Optional)

Edit `styles.css` (lines 8-20) to change the color scheme:

```css
:root {
    --bg-primary: #0a0a0a;           /* Dark background */
    --bg-secondary: #151515;          /* Sidebar/card background */
    --accent-primary: #6366f1;        /* Primary accent (indigo) */
    --accent-secondary: #8b5cf6;      /* Secondary accent (purple) */
    --accent-tertiary: #ec4899;       /* Tertiary accent (pink) */
    --accent-cyan: #06b6d4;           /* Cyan accent */
}
```

### 3. Deploy to GitHub Pages

**Option A: GitHub Web Interface**

1. Create a new repository: `your-username.github.io`
2. Upload all files via "Add file" > "Upload files"
3. Go to Settings > Pages
4. Set Source to "main" branch, "/ (root)" folder
5. Click Save
6. Your site will be live at `https://your-username.github.io`

**Option B: Git Command Line**

```bash
git init
git add .
git commit -m "Initial commit: Modern portfolio website"
git remote add origin https://github.com/your-username/your-username.github.io.git
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in repository Settings > Pages.

## File Structure

```
PersonalWebsite/
├── index.html                 # Main HTML file
├── styles.css                 # All styles (1200+ lines)
├── script.js                  # Interactive features
├── README.md                  # This file
├── CUSTOMIZATION.md           # Detailed customization guide
├── GITHUB_PAGES_SETUP.md      # Deployment instructions
├── .nojekyll                  # GitHub Pages config
└── assets/
    └── resume.pdf             # Your resume (add this)
```

## Browser Support

- Chrome (latest) ✅
- Firefox (latest) ✅
- Safari (latest) ✅
- Edge (latest) ✅
- Mobile browsers ✅

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables, Grid, and Flexbox
- **JavaScript (ES6+)** - Interactive features
- **Google Fonts** - Typography (Inter, Space Grotesk, JetBrains Mono)
- **Font Awesome 6** - Icon system
- **AOS Library** - Scroll animations
- **Unsplash** - Placeholder images

## Customization Guide

For detailed customization instructions, see [CUSTOMIZATION.md](CUSTOMIZATION.md).

Quick checklist:
- [ ] Update your name everywhere
- [ ] Set your timezone and career start date
- [ ] Update location in sidebar
- [ ] Replace all placeholder content
- [ ] Update social media links
- [ ] Add your resume PDF
- [ ] Replace article images
- [ ] Update contact information
- [ ] Test on mobile devices

## Deployment Guide

For detailed deployment instructions, see [GITHUB_PAGES_SETUP.md](GITHUB_PAGES_SETUP.md).

## Performance

This website is optimized for performance:
- Minimal dependencies (only AOS and Font Awesome from CDN)
- No heavy frameworks (React, Vue, etc.)
- Optimized CSS with efficient selectors
- Debounced scroll event handlers
- Lazy loading support for images

## Accessibility

- Semantic HTML5 elements
- Keyboard navigation support ('H' for home, 'C' for contact)
- ARIA labels where appropriate
- High contrast dark theme
- Smooth scroll with `prefers-reduced-motion` respect

## Need Help?

1. Check [CUSTOMIZATION.md](CUSTOMIZATION.md) for detailed customization steps
2. Check [GITHUB_PAGES_SETUP.md](GITHUB_PAGES_SETUP.md) for deployment help
3. Review the code comments in all files
4. Test in browser DevTools console (F12) for any errors

## License

Feel free to use this template for your personal portfolio. Just update the content with your own information!

---

**Built with HTML, CSS, and JavaScript. No frameworks, just modern web standards.**

Made with ❤️ for Product Managers who code.
