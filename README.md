# Interactive Resume

A modern, responsive, and interactive resume website that you can host online and link to from your LinkedIn profile.

## Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: 
  - Smooth scrolling navigation
  - Hover effects and micro-interactions
  - Animated skill tags and project cards
  - Typing effect for name
  - Parallax scrolling effects
- **Dark/Light Theme**: Toggle between light and dark modes
- **Contact Form**: Functional contact form (backend integration required)
- **Download Resume**: One-click resume download
- **SEO Optimized**: Semantic HTML5 structure
- **Performance Optimized**: Lazy loading and debounced scroll events

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Me**: Personal introduction with statistics
3. **Experience**: Timeline-based work experience display
4. **Education**: Academic background and certifications
5. **Skills**: Categorized technical and soft skills
6. **Projects**: Featured portfolio projects with links
7. **Contact**: Multiple contact methods and contact form

## Customization

### Personal Information
Edit the following files to customize your resume:

1. **index.html**: Update your personal information, experience, education, skills, and projects
2. **style.css**: Customize colors, fonts, and layout (optional)
3. **script.js**: Modify interactions and animations (optional)

### Key Areas to Update in index.html:

```html
<!-- Hero Section -->
<h1 class="hero-name">Your Name</h1>
<p class="hero-title">Professional Title | Software Engineer</p>

<!-- Social Links -->
<a href="https://linkedin.com/in/yourprofile" target="_blank">
<a href="https://github.com/yourusername" target="_blank">
<a href="mailto:your.email@example.com">

<!-- About Section -->
<p>I am a dedicated professional with a strong background in [your field]...</p>

<!-- Experience Section -->
<h3>Your Position</h3>
<h4>Company Name | Location</h4>
<ul>
  <li>Your achievement/responsibility</li>
</ul>

<!-- Education Section -->
<h3>Your Degree</h3>
<h4>University Name</h4>

<!-- Skills Section -->
<span class="skill-tag">Your Skill</span>

<!-- Projects Section -->
<h3>Project Name</h3>
<p>Project description...</p>

<!-- Contact Section -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="tel:+1234567890">+1 (234) 567-890</a>
```

## Hosting Options

### 1. GitHub Pages (Free)
1. Create a new repository on GitHub
2. Upload these files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" and choose main branch
5. Your site will be live at `https://username.github.io/repository-name`

### 2. Netlify (Free)
1. Create a Netlify account
2. Drag and drop the folder containing these files
3. Your site will be instantly deployed with a random URL
4. You can customize the URL for free

### 3. Vercel (Free)
1. Create a Vercel account
2. Import the project from GitHub or upload files
3. Your site will be deployed automatically

### 4. Other Options
- Firebase Hosting
- AWS S3 + CloudFront
- DigitalOcean App Platform
- Any static hosting service

## LinkedIn Integration

### How to Add to LinkedIn:

1. **Host your resume** using one of the options above
2. **Get your live URL** (e.g., `https://yourname-resume.netlify.app`)
3. **Add to LinkedIn Profile**:
   - Go to your LinkedIn profile
   - Click "Edit profile"
   - In the "Featured" section, click "Add"
   - Select "Link" and enter your resume URL
   - Add a title like "Interactive Resume"
   - Save changes

4. **Alternative - Contact Info**:
   - In your profile's contact section
   - Add your resume URL under "Website"

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript ES6+**: Interactive features and animations
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Inter)

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Performance

- Lighthouse score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Optimized images and assets
- Minimal JavaScript (no heavy frameworks)
- CSS animations instead of JavaScript where possible

## Customization Tips

### Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #4F46E5;
    --secondary-color: #7C3AED;
    --accent-color: #EC4899;
}
```

### Fonts
Change the Google Fonts import in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Animations
Modify animation speeds in `script.js`:
```javascript
setTimeout(typeWriter, 500); // Typing effect delay
```

## Contact Form Backend

The contact form is frontend-only. To make it functional, you can:

1. **Formspree** (Free): Add Formspree endpoint
2. **Netlify Forms**: Enable Netlify's form handling
3. **Backend Service**: Connect to Node.js, PHP, or Python backend
4. **Email Service**: Use EmailJS or similar service

## License

MIT License - Feel free to use and modify for your personal resume.

## Support

If you need help customizing or deploying your resume:
1. Check this README for common issues
2. Search online for specific hosting platform documentation
3. Ask questions on platforms like Stack Overflow or Reddit

---

**Good luck with your job search!** This interactive resume will help you stand out and showcase your skills professionally.
