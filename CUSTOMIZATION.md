# Customization Checklist

Use this checklist to personalize your website with your actual content.

## Essential Updates

### 1. Personal Information

**File: `index.html`**

- [ ] Line 8: Change `<title>Your Name - Product Manager</title>` to your actual name
- [ ] Line 15: Update logo `YN` with your initials
- [ ] Line 40: Replace `Your Name` with your actual name
- [ ] Lines 41-46: Customize the scrolling titles under your name
  - Current: Product Manager, Product Strategist, User Advocate, Problem Solver
  - Update to match your roles/expertise

### 2. Time Settings

**File: `script.js`**

- [ ] Line 5: Set your timezone
  ```javascript
  timeZone: 'America/New_York', // Change to your timezone
  ```
  Common options:
  - 'America/New_York' (EST)
  - 'America/Los_Angeles' (PST)
  - 'Europe/London' (GMT)
  - 'Asia/Tokyo' (JST)
  - 'Asia/Kolkata' (IST)

- [ ] Line 24: Set your career start date
  ```javascript
  const startDate = new Date('2018-01-01'); // When you started building products
  ```

### 3. About Section

**File: `index.html`** (Lines 60-75)

- [ ] Update the intro paragraph about yourself
- [ ] Customize your approach and methodology description

### 4. Skills/Competencies

**File: `index.html`** (Lines 80-120)

Current skills listed:
- [ ] Product Sense
- [ ] Customer-Centric Design
- [ ] Data-Driven Thinking
- [ ] Strategic Execution
- [ ] Cross-functional Leadership
- [ ] Innovation Mindset

Update each skill card with:
- Your actual competencies
- Relevant descriptions
- Choose appropriate emojis or replace with icons

### 5. Philosophy/Ideology

**File: `index.html`** (Lines 125-150)

- [ ] Update "In Work" philosophy quote
- [ ] Update "In Life" philosophy quote

### 6. Experience Section

**File: `index.html`** (Lines 155-220)

For each job (currently 3 placeholder positions):
- [ ] Update date range
- [ ] Update job title
- [ ] Update company name
- [ ] Update job description
- [ ] Update achievement bullets

Add or remove `timeline-item` blocks as needed for your actual experience.

### 7. PM Thoughts Section

**File: `index.html`** (Lines 225-260)

For each thought card (currently 3 placeholders):
- [ ] Update category (Strategy, User Research, Leadership, etc.)
- [ ] Update article title
- [ ] Update description
- [ ] Add link to actual article (replace `href="#"`)

### 8. Written Work Section

**File: `index.html`** (Lines 265-315)

For each work item (currently 3 placeholders):
- [ ] Update publication date
- [ ] Update article/work title
- [ ] Update description
- [ ] Add link to actual work (replace `href="#"`)
- [ ] Optional: Add actual images instead of emoji placeholders

### 9. Contact Information

**File: `index.html`** (Lines 320-360)

- [ ] Update email address (Line 328)
  ```html
  <a href="mailto:your.email@example.com" class="contact-card">
  ```
- [ ] Update LinkedIn URL (Line 334)
  ```html
  <a href="https://linkedin.com/in/yourprofile" class="contact-card" target="_blank">
  ```
- [ ] Update Twitter/X handle and URL (Line 340)
  ```html
  <a href="https://twitter.com/yourhandle" class="contact-card" target="_blank">
  ```

### 10. Resume

- [ ] Add your resume PDF to `assets/resume.pdf`
- [ ] Test the download button works

### 11. Footer

**File: `index.html`** (Line 369)

- [ ] Update footer text with your name
  ```html
  <p>&copy; 2025 Your Name. Built with passion for great products.</p>
  ```

## Optional Customizations

### Color Scheme

**File: `styles.css`** (Lines 2-12)

- [ ] Update primary color: `--primary-color: #2563eb;`
- [ ] Update secondary color: `--secondary-color: #0f172a;`
- [ ] Update accent color: `--accent: #3b82f6;`
- [ ] Update gradient colors for hero section

### Add More Sections

You can duplicate existing sections and modify them:
- Portfolio projects
- Testimonials
- Blog posts
- Case studies
- Speaking engagements

### Add Social Links

Add more social media links in the navigation or contact section:
- GitHub
- Medium
- Instagram
- YouTube

### Add Analytics

Add Google Analytics or other tracking:
1. Get your tracking code
2. Add before `</head>` in index.html

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Testing Checklist

Before deploying:

- [ ] Test all navigation links work
- [ ] Test resume download works
- [ ] Test all external links open in new tabs
- [ ] Check responsive design on mobile
- [ ] Verify all images load correctly
- [ ] Test smooth scrolling
- [ ] Check time display updates
- [ ] Verify time counter calculates correctly
- [ ] Test on different browsers
- [ ] Check for any console errors (F12)

## Quick Find & Replace

Use your code editor to quickly replace these placeholder terms:

- Find: `Your Name` → Replace with: `[Your Actual Name]`
- Find: `your.email@example.com` → Replace with: `[Your Email]`
- Find: `yourprofile` → Replace with: `[Your LinkedIn Username]`
- Find: `yourhandle` → Replace with: `[Your Twitter Handle]`
- Find: `Company Name` → Replace with: `[Actual Company Names]`

---

Once you've completed these customizations, your personal website will be ready to deploy to GitHub Pages!
