# GitHub Pages Deployment Guide

Quick guide to get your personal website live on GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer (optional, for command line method)

## Method 1: GitHub Web Interface (Easiest)

### Step 1: Create Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right
3. Select **New repository**
4. Name your repository:
   - For personal site: `your-username.github.io` (e.g., `rohit.github.io`)
   - For project site: any name (e.g., `personal-website`)
5. Set to **Public**
6. **Do NOT** initialize with README
7. Click **Create repository**

### Step 2: Upload Files

1. On the new repository page, click **uploading an existing file**
2. Drag and drop these files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `.nojekyll`
   - `CUSTOMIZATION.md`
   - `GITHUB_PAGES_SETUP.md`
3. Also upload the `assets` folder with your resume
4. Add commit message: "Initial commit: Personal portfolio website"
5. Click **Commit changes**

### Step 3: Enable GitHub Pages

1. Go to repository **Settings**
2. Click **Pages** in the left sidebar
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes for deployment

### Step 4: Access Your Site

Your website will be live at:
- **Personal site**: `https://your-username.github.io`
- **Project site**: `https://your-username.github.io/repository-name`

## Method 2: Git Command Line

### Step 1: Initialize Git

Open terminal in your project folder:

```bash
# Navigate to project directory
cd "C:\Users\Rohit\Downloads\Development\PersonalWebsite"

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Personal portfolio website"
```

### Step 2: Create GitHub Repository

1. Go to GitHub and create a new repository (as described in Method 1)
2. Copy the repository URL (e.g., `https://github.com/your-username/your-username.github.io.git`)

### Step 3: Push to GitHub

```bash
# Add remote repository
git remote add origin https://github.com/your-username/your-username.github.io.git

# Push to GitHub
git push -u origin main
```

If you get an error about 'master' branch, rename it:

```bash
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

Follow Step 3 from Method 1 above.

## Updating Your Website

### Using Web Interface:

1. Go to your repository on GitHub
2. Click on the file you want to edit
3. Click the pencil icon (Edit)
4. Make changes
5. Commit changes
6. Wait 1-2 minutes for changes to go live

### Using Git Command Line:

```bash
# Make your changes to files locally

# Add changed files
git add .

# Commit changes
git commit -m "Update: description of changes"

# Push to GitHub
git push
```

Changes will be live in 1-2 minutes.

## Troubleshooting

### Site Not Loading

1. Check GitHub Pages status in repository Settings > Pages
2. Ensure files are in root directory (not in a subfolder)
3. Verify `index.html` exists and is spelled correctly
4. Check for any red X marks on commits (indicates build failure)
5. Make sure repository is Public

### 404 Error

1. Verify you're using the correct URL
2. For personal site: `https://username.github.io` (not `username.github.com`)
3. For project site: `https://username.github.io/repo-name`
4. Wait a few minutes - first deployment can take 5-10 minutes

### CSS/JS Not Loading

1. Check file paths in `index.html`:
   ```html
   <link rel="stylesheet" href="styles.css">    <!-- Correct -->
   <script src="script.js"></script>             <!-- Correct -->
   ```
2. Ensure files are in the same directory as `index.html`
3. Check browser console (F12) for errors

### Resume Download Not Working

1. Make sure `resume.pdf` exists in `assets/` folder
2. Verify the path in `index.html`:
   ```html
   <a href="assets/resume.pdf" download>Resume</a>
   ```
3. Upload the assets folder to GitHub

## Custom Domain (Optional)

### To use your own domain:

1. Buy a domain from a registrar (Namecheap, GoDaddy, etc.)
2. In repository Settings > Pages, add your custom domain
3. Update DNS records at your registrar:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153

   Type: A
   Name: @
   Value: 185.199.109.153

   Type: A
   Name: @
   Value: 185.199.110.153

   Type: A
   Name: @
   Value: 185.199.111.153

   Type: CNAME
   Name: www
   Value: your-username.github.io
   ```
4. Wait 24-48 hours for DNS propagation
5. Enable "Enforce HTTPS" in GitHub Pages settings

## Checking Build Status

1. Go to your repository
2. Click **Actions** tab
3. See deployment status and any errors
4. Green checkmark = successful deployment
5. Red X = failed deployment (click to see details)

## Need Help?

- GitHub Pages Documentation: https://docs.github.com/en/pages
- GitHub Pages Status: https://www.githubstatus.com
- GitHub Community: https://github.community

---

**Your website URL will be:**
`https://your-username.github.io`

Replace `your-username` with your actual GitHub username!
