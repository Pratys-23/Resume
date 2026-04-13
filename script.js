// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Navigation smooth scrolling
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('.section');
    const options = {
        threshold: 0.7
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const navLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (navLink) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                }
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        const icon = this.querySelector('i');
        if (body.classList.contains('dark-theme')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        const icon = themeToggle.querySelector('i');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        // For now, we'll show a success message
        showNotification('Message sent successfully! I\'ll get back to you soon.');
        this.reset();
    });

    // Add animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.timeline-item, .education-card, .project-card, .skill-category');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.timeline-item, .education-card, .project-card, .skill-category');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load

    // Typing effect for hero name
    const heroName = document.querySelector('.hero-name');
    const originalText = heroName.textContent;
    heroName.textContent = '';
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < originalText.length) {
            heroName.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        }
    }

    setTimeout(typeWriter, 500);

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = hero.style.backgroundPosition;
        hero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
    });

    // Skill tag hover effect
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Project card hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotateX(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0)';
        });
    });

    // Add CSS for dark theme
    const darkThemeStyles = `
        body.dark-theme {
            --text-primary: #F9FAFB;
            --text-secondary: #D1D5DB;
            --text-light: #9CA3AF;
            --bg-primary: #111827;
            --bg-secondary: #1F2937;
            --bg-tertiary: #374151;
            --border-color: #4B5563;
        }
        
        body.dark-theme .nav {
            background: rgba(17, 24, 39, 0.95);
        }
        
        body.dark-theme .hero {
            background: linear-gradient(135deg, #1e3a8a 0%, #581c87 100%);
        }
        
        body.dark-theme .timeline-content,
        body.dark-theme .education-card,
        body.dark-theme .skill-category,
        body.dark-theme .project-card,
        body.dark-theme .contact-method,
        body.dark-theme .contact-form {
            background: var(--bg-secondary);
        }
        
        body.dark-theme .stat-item {
            background: var(--bg-secondary);
        }
        
        body.dark-theme .nav-link.active {
            color: var(--primary-color);
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = darkThemeStyles;
    document.head.appendChild(styleSheet);
});

// Notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#10B981' : '#EF4444'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Download resume function
function downloadResume() {
    // Create a simple PDF download link
    showNotification('Resume download started! Check your downloads folder.');
    
    // You would typically generate a PDF here
    // For now, we'll create a simple text file as a placeholder
    const resumeContent = `
Interactive Resume
==================

Name: Your Name
Title: Professional Title | Software Engineer

Contact:
- Email: your.email@example.com
- Phone: +1 (234) 567-890
- LinkedIn: linkedin.com/in/yourprofile
- GitHub: github.com/yourusername

About Me:
Passionate professional with X years of experience in [your field]. 
Specialized in [key skills] and committed to delivering exceptional results.

Experience:
- Senior Position at Company Name (2022 - Present)
- Previous Position at Previous Company (2020 - 2022)

Education:
- Bachelor's Degree in [Your Major] from University Name (2016 - 2020)

Skills:
- Technical: JavaScript, Python, React, Node.js, SQL, Git
- Soft: Leadership, Communication, Problem Solving, Teamwork, Time Management
- Tools: VS Code, Docker, AWS, Figma, Jira

Projects:
- Project Name 1: [Description]
- Project Name 2: [Description]
    `;
    
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Mobile menu toggle (for future enhancement)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Add mobile menu styles
const mobileMenuStyles = `
@media (max-width: 768px) {
    .nav-links {
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        background: white;
        flex-direction: column;
        padding: 2rem;
        transform: translateY(-100%);
        transition: transform 0.3s ease;
        box-shadow: var(--shadow-lg);
    }
    
    .nav-links.active {
        transform: translateY(0);
    }
    
    .mobile-menu-toggle {
        display: block;
        cursor: pointer;
        padding: 0.5rem;
    }
}

@media (min-width: 769px) {
    .mobile-menu-toggle {
        display: none;
    }
}
`;

const mobileStyleSheet = document.createElement('style');
mobileStyleSheet.textContent = mobileMenuStyles;
document.head.appendChild(mobileStyleSheet);

// Performance optimization - Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(function() {
    // Scroll-based animations and effects
}, 10));

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Analytics tracking (placeholder)
function trackEvent(eventName, properties = {}) {
    // Add your analytics tracking code here
    console.log('Event tracked:', eventName, properties);
}

// Track page views
trackEvent('page_view', {
    page: 'interactive_resume',
    timestamp: new Date().toISOString()
});

// Track button clicks
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        trackEvent('button_click', {
            button_text: this.textContent,
            button_type: this.classList.contains('btn-primary') ? 'primary' : 'secondary'
        });
    });
});

// Track project link clicks
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function() {
        trackEvent('project_link_click', {
            link_text: this.textContent.trim(),
            link_url: this.href
        });
    });
});
