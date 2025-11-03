# Personal Website

A modern, responsive personal website built for GitHub Pages. This website showcases your professional experience, published articles, and provides a downloadable resume.

## Features

- ✨ Modern, clean design with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Professional color scheme with gradient accents
- ⚡ Fast loading and optimized
- 🔍 SEO-friendly structure
- 📄 Easy-to-update content placeholders

## Sections

1. **Hero Section** - Introduction with call-to-action buttons
2. **About** - Personal background and introduction
3. **Experience** - Timeline of your professional experience (Google, Amazon, RobustWealth, EY)
4. **Articles** - Grid showcasing your published online articles
5. **Resume** - Downloadable resume section
6. **Contact** - Social links and contact information

## Getting Started

### 1. Update Your Content

#### Personal Information

Open `index.html` and search for the following placeholders:

- **Hero Section** (around line 29):
  - Replace "Your Name" in the navigation logo and footer
  - Update "Product Manager at Google" title if needed
  - Customize the subtitle text

#### About Section (around line 42-58):

Replace the Lorem ipsum text with:
- Your personal introduction
- Background and interests
- Professional philosophy
- Replace the image placeholder with your photo:
  ```html
  <!-- Replace this placeholder -->
  <div class="image-placeholder">
      <p>Your Photo Here</p>
  </div>
  <!-- With your actual image -->
  <img src="your-photo.jpg" alt="Your Name" style="width: 100%; max-width: 400px; border-radius: 12px;">
  ```

#### Experience Section (around line 69-170):

For each job (Google, Amazon, RobustWealth, EY):
1. Update the job title in `<h3>Product Manager</h3>`
2. Update the dates: `[Start Date] - [End Date]` or `[Start Date] - Present`
3. Replace the description with your actual role description
4. Replace the bullet points with your key achievements:
   ```html
   <li>Your actual achievement #1</li>
   <li>Your actual achievement #2</li>
   <li>Your actual achievement #3</li>
   ```

#### Articles Section (around line 174-231):

For each article card:
1. Update the date: `[Date]` (e.g., "January 2024")
2. Update the platform: `[Platform Name]` (e.g., "Medium", "LinkedIn")
3. Replace the article title
4. Update the article link: `href="#"` → `href="https://your-article-url.com"`
5. Replace the excerpt with a brief description
6. Add more article cards by copying the structure if needed

#### Resume Section (around line 236-250):

1. Upload your resume PDF to the root directory of this repository
2. Update the filename if different from "resume.pdf":
   ```html
   <a href="your-resume.pdf" class="btn btn-primary btn-large" download>
   ```
3. Remove or update the note about the filename

#### Contact Section (around line 256-289):

Update the contact links:
- Email: Replace `your.email@example.com`
- LinkedIn: Replace `https://linkedin.com/in/yourprofile`
- Twitter: Replace `https://twitter.com/yourhandle`
- Remove any social links you don't want to include

#### Footer (around line 295):

Replace "Your Name" with your actual name if not already done.

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
├── index.html          # Main HTML file
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

