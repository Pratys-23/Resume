# Quick Deployment Guide

## Option 1: GitHub Pages (Easiest & Free)

### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Click "+" in top right, select "New repository"
3. Name it `interactive-resume` (or your name)
4. Make it "Public"
5. Click "Create repository"

### Step 2: Upload Files
1. Click "uploading an existing file" link
2. Drag and drop all files from your `interactive-resume` folder
3. Click "Commit changes"

### Step 3: Enable GitHub Pages
1. Go to repository Settings
2. Scroll down to "Pages" section
3. Under "Build and deployment", select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"

### Step 4: Get Your URL
Your resume will be live at:
`https://yourusername.github.io/interactive-resume`

---

## Option 2: Netlify (Drag & Drop)

### Step 1: Prepare Files
1. Create a ZIP file of your `interactive-resume` folder
2. Make sure `index.html` is in the root of the ZIP

### Step 2: Deploy
1. Go to [netlify.com](https://netlify.com) and sign up
2. Click "Drag and drop your site output here"
3. Drop your ZIP file
4. Wait for deployment (usually < 1 minute)

### Step 3: Customize URL (Optional)
1. Click "Site settings" in Netlify dashboard
2. Go to "Domain management"
3. Click "Add custom domain" or use the random URL provided

---

## Option 3: Vercel (GitHub Integration)

### Step 1: Connect GitHub
1. Go to [vercel.com](https://vercel.com) and sign up
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"

### Step 2: Get URL
Your site will be deployed with a URL like:
`https://interactive-resume-yourusername.vercel.app`

---

## Add to LinkedIn

### Method 1: Featured Section
1. Go to your LinkedIn profile
2. Click "Edit profile"
3. Scroll to "Featured" section
4. Click "Add"
5. Select "Link"
6. Enter your resume URL
7. Add title: "Interactive Resume"
8. Click "Save"

### Method 2: Contact Info
1. Edit profile
2. In contact section, click "Edit"
3. Add your resume URL under "Website"
4. Save changes

---

## Customization Checklist

Before deploying, update these in `index.html`:

- [ ] Your name in hero section
- [ ] Professional title
- [ ] Email address
- [ ] Phone number
- [ ] LinkedIn profile URL
- [ ] GitHub profile URL
- [ ] About section text
- [ ] Work experience details
- [ ] Education information
- [ ] Skills list
- [ ] Project descriptions
- [ ] Replace placeholder profile image

---

## Testing Your Resume

After deployment, test:
1. [ ] All navigation links work
2. [ ] Contact form shows success message
3. [ ] Download resume button works
4. [ ] Dark/light theme toggle works
5. [ ] Mobile responsiveness
6. [ ] All external links open correctly

---

## Pro Tips

1. **Custom Domain**: Get a free domain from Freenom (.tk, .ml, .ga) or buy a .com
2. **Analytics**: Add Google Analytics for visitor tracking
3. **SEO**: Update meta description and title tags
4. **Backup**: Keep a copy of your files on your computer
5. **Updates**: Make changes, commit to GitHub, and they'll auto-deploy

---

## Need Help?

- GitHub Pages: [GitHub Pages documentation](https://docs.github.com/en/pages)
- Netlify: [Netlify docs](https://docs.netlify.com/)
- Vercel: [Vercel docs](https://vercel.com/docs)
- LinkedIn: [LinkedIn Help Center](https://www.linkedin.com/help/linkedin)
