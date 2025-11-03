# Personal Portfolio Website

A vibrant, modern personal website for showcasing your work as a Product Manager at Google. Built with clean HTML, CSS, and JavaScript - optimized for GitHub Pages deployment.

## 🎨 Design Features

- **Vibrant Color Scheme**: Bold, energetic colors with smooth gradients
- **Illustration-Based**: Custom SVG illustrations throughout the site
- **Fully Responsive**: Looks great on desktop, tablet, and mobile
- **Smooth Animations**: Fade-in effects, parallax scrolling, and interactive elements
- **Modern UI**: Card-based layouts, floating shapes, and polished design

## 📁 File Structure

```
PersonalWebsite/
├── index.html          # Homepage with hero, featured work, philosophy preview
├── about.html          # About page with career journey and skills
├── work.html           # Case studies and portfolio projects
├── writing.html        # Articles and blog posts
├── philosophy.html     # PM ideology and principles
├── styles.css          # All styling with vibrant colors and animations
├── script.js           # Interactive features and smooth animations
└── README.md          # This file
```

## 🚀 Quick Start

### 1. Customize Your Content

Replace placeholder content with your own information:

#### In ALL HTML files:
- Replace "Your Name" with your actual name
- Update `your.email@gmail.com` with your email
- Update social media links (LinkedIn, Twitter, GitHub)

#### In `index.html`:
- Update hero title and description
- Customize featured work cards (3 projects)
- Adjust philosophy principles

#### In `about.html`:
- Edit "My Story" section with your journey
- Update career timeline (Google, Amazon, EY, Robustwealth)
- Modify skills and competencies
- Change "Beyond Product Management" hobbies

#### In `work.html`:
- Replace case studies with your actual projects
- Update metrics and impact numbers
- Modify company names and dates
- Add your own project details

#### In `writing.html`:
- Replace article titles and content
- Update publication dates
- Modify article categories
- Add your own articles

#### In `philosophy.html`:
- Edit core beliefs to match your philosophy
- Update decision-making framework
- Modify team values
- Change real-world examples

### 2. Customize Colors (Optional)

Edit `styles.css` at the top to change the color scheme:

```css
:root {
    --color-primary: #6366F1;      /* Main purple/blue */
    --color-secondary: #EC4899;     /* Pink */
    --color-accent-1: #10B981;      /* Green */
    --color-accent-2: #F59E0B;      /* Orange */
    --color-accent-3: #8B5CF6;      /* Purple */
}
```

### 3. Add Your Own Images (Optional)

To add profile photos or project screenshots:

1. Create an `images/` folder
2. Add your images there
3. Update the SVG illustrations with `<image>` tags:

```html
<img src="images/your-photo.jpg" alt="Your Name">
```

### 4. Test Locally

Simply open `index.html` in your web browser to preview the site locally.

## 🌐 Deploy to GitHub Pages

### Method 1: Using GitHub Web Interface

1. Create a new repository on GitHub named `username.github.io` (replace `username` with your GitHub username)
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "main" branch as source
5. Your site will be live at `https://username.github.io`

### Method 2: Using Git Command Line

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Personal portfolio website"

# Add remote repository
git remote add origin https://github.com/username/username.github.io.git

# Push to GitHub
git push -u origin main
```

Wait a few minutes, and your site will be live at `https://username.github.io`

## ✨ Features Included

### Navigation
- Fixed navbar with smooth scrolling
- Mobile-responsive hamburger menu
- Active page highlighting
- Smooth transitions

### Animations
- Fade-in effects for cards and sections
- Parallax background shapes
- Floating SVG animations
- Smooth scroll behavior
- Button ripple effects

### Interactive Elements
- Newsletter subscription form
- Mobile menu toggle
- Social media links
- Smooth anchor scrolling
- Hover effects on all cards

### Performance
- Lazy loading for images
- Optimized CSS and JavaScript
- Debounced scroll events
- Fast page load times

## 🎯 Customization Tips

### Changing the Logo
The logo "PM" in the navigation can be changed in all HTML files:

```html
<a href="index.html" class="logo">PM</a>
<!-- Change to: -->
<a href="index.html" class="logo">YourInitials</a>
```

### Adding New Pages
1. Copy an existing HTML file
2. Update the content
3. Add a link in the navigation menu
4. Update the footer links

### Modifying Layout
All layouts are CSS Grid and Flexbox based. Edit `styles.css` to adjust:
- Grid columns: `grid-template-columns`
- Spacing: `gap` properties
- Padding: `--spacing-*` variables

### Adding Analytics
Add Google Analytics or other tracking by inserting the tracking code before `</head>` in all HTML files.

## 📱 Mobile Responsive

The site is fully responsive with breakpoints at:
- **968px**: Tablet layout
- **768px**: Mobile menu activation
- **480px**: Small mobile optimizations

## 🎨 Design System

### Colors
- Primary: Purple/Blue (#6366F1)
- Secondary: Pink (#EC4899)
- Accent 1: Green (#10B981)
- Accent 2: Orange (#F59E0B)
- Accent 3: Purple (#8B5CF6)

### Typography
- Display Font: Space Grotesk
- Body Font: Inter
- Both loaded from Google Fonts

### Spacing Scale
- XS: 0.5rem (8px)
- SM: 1rem (16px)
- MD: 1.5rem (24px)
- LG: 2rem (32px)
- XL: 3rem (48px)
- 2XL: 4rem (64px)
- 3XL: 6rem (96px)

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This is a personal portfolio template. Feel free to use and customize for your own website.

## 💡 Tips for Success

1. **Keep It Updated**: Regularly add new projects and articles
2. **Be Authentic**: Use your real work and experiences
3. **Optimize Images**: Compress images before uploading
4. **Test on Mobile**: Always check mobile responsiveness
5. **Get Feedback**: Share with friends and colleagues for feedback

## 🚀 Next Steps

1. Replace all placeholder content with your information
2. Customize colors to match your personal brand
3. Add real project case studies and metrics
4. Write authentic articles that showcase your thinking
5. Deploy to GitHub Pages
6. Share your website on LinkedIn and other platforms

## 📞 Support

If you need help customizing this website, feel free to reach out or refer to:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)

---

**Built with ❤️ for Product Managers who want to showcase their work in style.**
