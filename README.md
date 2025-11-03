# Personal Website

A modern, advanced, multi-page personal website built for GitHub Pages. This website showcases your professional experience, published articles, skills, values, and provides a downloadable resume with enhanced visuals and smooth animations.

## Features

- ✨ Modern, advanced design with smooth animations
- 📄 Multi-page structure (Home, About, Experience, Articles, Contact)
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Professional color scheme with gradient accents
- 📊 Visual statistics, skill bars, and progress indicators
- 🎯 Interactive preview cards and hover effects
- ⚡ Fast loading and optimized
- 🔍 SEO-friendly structure
- 📝 Easy-to-update content placeholders

## Pages Structure

1. **Home (index.html)** - Landing page with hero section, quick stats, preview cards, and company showcase
2. **About (about.html)** - Detailed personal introduction, values, and skills with progress bars
3. **Experience (experience.html)** - Enhanced timeline with company icons, achievements, and detailed role descriptions
4. **Articles (articles.html)** - Beautiful article cards with images, stats, and platform badges
5. **Contact (contact.html)** - Contact information and resume download section

## Getting Started

### 1. Update Your Content

#### Personal Information (All Pages)

Replace "Your Name" throughout all HTML files:
- Navigation logo and footer on all pages
- Page titles in `<title>` tags
- Any other references to your name

#### Home Page (index.html)

Search for the following placeholders:

- **Hero Section**:
  - Update the hero badge text ("Product Manager")
  - Update the main title and subtitle
  - Update button links if needed

- **Stats Section**:
  - Update the numbers and labels (Companies, Articles, Collaborations, Years Experience)
  - Adjust stat icons if needed

- **Preview Cards**:
  - Update descriptions for About, Experience, Articles, and Contact previews

- **Companies Section**:
  - Company logos are placeholders - replace with actual logos or keep text placeholders

#### About Page (about.html):

Update the following sections:
- **About Detail**: Replace Lorem ipsum with your personal introduction, background, and professional philosophy
- **Photo**: Replace the image placeholder with your photo:
  ```html
  <!-- Replace this -->
  <div class="image-placeholder-large">...</div>
  <!-- With -->
  <img src="your-photo.jpg" alt="Your Name" style="width: 100%; border-radius: 16px;">
  ```
- **Values Section**: Update the four value cards (User-Centric, Data-Driven, Innovation, Execution) with your descriptions
- **Skills Section**: 
  - Update skill categories and names
  - Adjust skill percentages (the `width` value in `style="width: 95%"`)
  - Add or remove skills as needed

#### Experience Page (experience.html):

For each job (Google, Amazon, RobustWealth, EY):
1. Update the job title in the `<h3>` tag
2. Update the dates: `[Start Date] - [End Date]` or `[Start Date] - Present`
3. Update the location (currently shows as "Mountain View, CA" or "Location")
4. Replace the description with your actual role description
5. Update the achievement list items - replace the placeholder text with your actual achievements
6. Adjust timeline badges (currently Google has "Current", RobustWealth has "Acquired by Principal")

#### Articles Page (articles.html):

For each article card:
1. **Article Image**: Replace the placeholder div with an actual image:
   ```html
   <!-- Replace -->
   <div class="article-image-placeholder">...</div>
   <!-- With -->
   <img src="article-image.jpg" alt="Article Title" style="width: 100%; height: 200px; object-fit: cover;">
   ```
2. Update the date: `[Date]` (e.g., "January 2024")
3. Update the platform badge class: `medium`, `linkedin`, or `other` - this changes the badge color
4. Replace the article title
5. Update both article links: `href="#"` → `href="https://your-article-url.com"`
6. Replace the excerpt with a brief description
7. Update view and like counts (currently placeholder numbers)
8. Add more article cards by copying the entire `<article class="article-card-advanced">` structure

#### Contact Page (contact.html):

**Contact Methods Section:**
1. Update email address: `your.email@example.com`
2. Update LinkedIn profile URL
3. Update Twitter/X handle URL
4. Update the contact method descriptions if needed

**Resume Section:**
1. Upload your resume PDF to the root directory of this repository
2. Update the filename if different from "resume.pdf":
   ```html
   <a href="your-resume.pdf" class="btn btn-primary btn-large" download>
   ```
3. Remove or update the note about the filename if desired

### 2. Styling Customization (Optional)

If you want to customize colors, open `styles.css` and look for the `:root` variables at the top:

```css
:root {
    --primary-color: #2563eb;        /* Main brand color */
    --primary-dark: #1e40af;          /* Darker shade for accents */
    --secondary-color: #64748b;       /* Secondary text color */
    --text-dark: #1e293b;             /* Main text color */
    --text-light: #64748b;            /* Light text color */
    --bg-light: #f8fafc;              /* Light background */
    --bg-white: #ffffff;              /* White background */
    --border-color: #e2e8f0;          /* Border color */
}
```

Change these values to match your preferred color scheme.

### 3. Test Locally

Before deploying, test your website locally:

1. Open `index.html` in a web browser, or
2. Use a local server (recommended):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
3. Navigate to `http://localhost:8000` in your browser

### 4. Deploy to GitHub Pages

#### Option A: Using GitHub Repository

1. **Create a new repository** on GitHub (name it something like `yourname.github.io` or `personal-website`)

2. **Initialize and push your files**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Personal website"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on **Settings**
   - Scroll down to **Pages** section
   - Under **Source**, select `main` branch and `/ (root)` folder
   - Click **Save**
   - Your site will be available at `https://yourusername.github.io/repository-name/`
   - If you named your repo `yourusername.github.io`, it will be at `https://yourusername.github.io/`

#### Option B: Using GitHub Desktop

1. Open GitHub Desktop
2. File → Add Local Repository
3. Select this folder
4. Commit and push your changes
5. Follow step 3 from Option A to enable GitHub Pages

### 5. Custom Domain (Optional)

If you want to use a custom domain:

1. Create a file named `CNAME` in the root directory
2. Add your domain name (e.g., `yourname.com`) to the file
3. Configure your domain's DNS settings:
   - Add a CNAME record pointing to `yourusername.github.io`
4. In GitHub Pages settings, add your custom domain

## File Structure

```
PersonalWebsite/
├── index.html          # Home page
├── about.html          # About page
├── experience.html     # Experience page
├── articles.html       # Articles page
├── contact.html        # Contact & Resume page
├── styles.css          # Stylesheet with animations
├── script.js           # JavaScript for interactivity
├── README.md          # This file
└── resume.pdf          # Your resume (add this file)
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Tips for Content Updates

1. **Keep descriptions concise**: Aim for 2-3 sentences per job description
2. **Highlight achievements**: Focus on impact and results in bullet points
3. **Use action verbs**: Started, Led, Improved, Launched, etc.
4. **Add numbers**: Include metrics when possible (e.g., "Increased revenue by 25%")
5. **Article excerpts**: Keep them to 1-2 sentences that entice readers
6. **Skill percentages**: Be honest about your skill levels - adjust percentages in about.html
7. **Images**: For best results, use high-quality images (recommended: 800x600px for articles, square for profile)
8. **Company logos**: You can replace text placeholders with actual logo images for a more professional look

## Troubleshooting

### Images not loading
- Make sure image files are in the repository
- Use relative paths (e.g., `images/photo.jpg` not absolute paths)
- Check file names match exactly (case-sensitive on some systems)

### GitHub Pages not updating
- Wait a few minutes for GitHub to rebuild
- Check GitHub Pages settings in repository Settings → Pages
- Make sure you pushed to the correct branch

### Animations not working
- Check browser console for JavaScript errors
- Ensure `script.js` is loaded (check browser Network tab)
- Try a hard refresh (Ctrl+F5 or Cmd+Shift+R)

## Need Help?

- GitHub Pages documentation: https://docs.github.com/en/pages
- For questions about the code, check the HTML comments marked with `<!-- TODO: -->`

## License

This website template is free to use for personal projects.

