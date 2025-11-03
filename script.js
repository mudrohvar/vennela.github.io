// ==========================================
// Personal Portfolio Website - JavaScript
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: false,  // Allow animations to trigger both ways when scrolling
        offset: 100,
        delay: 100,
        mirror: true  // Animate elements out while scrolling past them
    });

    // Initialize all features
    initTimeClock();
    initTimeCounter();
    initMobileMenu();
    initSmoothScroll();
    initActiveNav();
    initPageLoad();

    console.log('Portfolio website loaded successfully! 🚀');
});

// ==========================================
// Live Time Display
// ==========================================
function initTimeClock() {
    function updateTime() {
        const now = new Date();

        // Change timezone as needed (e.g., 'America/New_York', 'Europe/London', 'Asia/Tokyo')
        const options = {
            timeZone: 'America/New_York',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        };

        const timeString = now.toLocaleTimeString('en-US', options);
        const timeElement = document.getElementById('currentTime');

        if (timeElement) {
            timeElement.textContent = timeString;
        }
    }

    updateTime();
    setInterval(updateTime, 1000); // Update every second
}

// ==========================================
// Time Counter (Years/Months building products)
// ==========================================
function initTimeCounter() {
    function updateTimeCounter() {
        // SET YOUR START DATE HERE - when you started building products
        const startDate = new Date('2018-01-01'); // Change this to your actual start date
        const now = new Date();

        const diffTime = Math.abs(now - startDate);
        const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);

        const years = Math.floor(diffYears);
        const remainingMonths = (diffYears - years) * 12;
        const months = Math.floor(remainingMonths);

        let timeString = '';
        if (years > 0) {
            timeString = `${years} year${years !== 1 ? 's' : ''}`;
            if (months > 0) {
                timeString += ` ${months} month${months !== 1 ? 's' : ''}`;
            }
        } else {
            timeString = `${months} month${months !== 1 ? 's' : ''}`;
        }

        const counterElement = document.getElementById('timeCounter');
        if (counterElement) {
            counterElement.textContent = timeString;
        }
    }

    updateTimeCounter();
}

// ==========================================
// Mobile Menu Toggle
// ==========================================
function initMobileMenu() {
    const menuToggle = document.getElementById('mobileMenuToggle');
    const sidebar = document.getElementById('sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');

            // Change icon
            const icon = this.querySelector('i');
            if (sidebar.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close sidebar when clicking on nav items (mobile)
        const navItems = sidebar.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });

        // Close sidebar when clicking outside (mobile)
        document.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {
                if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
                    sidebar.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
}

// ==========================================
// Smooth Scrolling for Navigation Links
// ==========================================
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if it's just '#' or empty
            if (href === '#' || href.length <= 1) {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                // Calculate offset (account for any fixed elements)
                const offsetTop = target.offsetTop - 20;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Update URL without jumping
                history.pushState(null, null, href);
            }
        });
    });
}

// ==========================================
// Active Navigation State
// ==========================================
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');

    function updateActiveNav() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('active');

                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }

    // Update on scroll
    window.addEventListener('scroll', updateActiveNav);

    // Update on load
    updateActiveNav();
}

// ==========================================
// Page Load Animation
// ==========================================
function initPageLoad() {
    // Fade in page on load
    document.body.style.opacity = '0';

    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);

    // Remove any hash from URL on load if needed
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                const offsetTop = target.offsetTop - 20;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }, 300);
        }
    }
}

// ==========================================
// Parallax Effect for Hero Section
// ==========================================
let ticking = false;
let lastScrollY = 0;

function updateParallax() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');

    // Hero parallax
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / 1000);
    }

    // Parallax effect for decorative blobs (simplified)
    const blobs = document.querySelectorAll('.decorative-blob');
    blobs.forEach((blob, index) => {
        const rect = blob.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight + 200 && rect.bottom > -200;

        if (isVisible) {
            const speed = 0.05 + (index * 0.02); // Reduced speeds for smoother performance
            const offset = scrolled * speed;
            // Use will-change for better performance
            blob.style.willChange = 'transform';
            blob.style.transform = `translateY(${offset}px)`;
        }
    });

    // Parallax effect for geometric decorations (simplified)
    const geometrics = document.querySelectorAll('.geometric-decoration');
    geometrics.forEach((shape, index) => {
        const rect = shape.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight + 200 && rect.bottom > -200;

        if (isVisible) {
            const speed = 0.08 + (index * 0.02);
            const offset = scrolled * speed;
            shape.style.willChange = 'transform';
            shape.style.transform = `translateY(${offset}px) rotate(${offset * 0.3}deg)`;
        }
    });

    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick, { passive: true });

// ==========================================
// Cursor Effect (Optional - Subtle)
// ==========================================
function initCursorEffect() {
    // Add this if you want a custom cursor effect
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Add hover effects on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
    });
}

// Uncomment to enable cursor effect
// initCursorEffect();

// ==========================================
// Intersection Observer for Advanced Animations
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        } else {
            // Remove class when element leaves viewport for re-animation
            entry.target.classList.remove('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.competency-item, .timeline-item, .thought-card, .writing-card, .contact-card').forEach(el => {
    observer.observe(el);
});

// ==========================================
// Keyboard Navigation Support
// ==========================================
document.addEventListener('keydown', function(e) {
    // Press 'h' to go to home
    if (e.key === 'h' || e.key === 'H') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Press 'c' to go to contact
    if (e.key === 'c' || e.key === 'C') {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// ==========================================
// Dynamic Year in Footer
// ==========================================
const footerText = document.querySelector('.footer-content p');
if (footerText) {
    const currentYear = new Date().getFullYear();
    footerText.textContent = footerText.textContent.replace('2025', currentYear);
}

// ==========================================
// Decorative Elements Enhancement
// ==========================================

// Randomize blob positions slightly for variety on load
function randomizeBlobPositions() {
    const blobs = document.querySelectorAll('.decorative-blob');
    blobs.forEach(blob => {
        const randomX = Math.random() * 30 - 15; // -15px to +15px
        const randomY = Math.random() * 30 - 15;
        // Store initial offset as data attribute
        blob.dataset.offsetX = randomX;
        blob.dataset.offsetY = randomY;
    });
}

// Initialize on page load
window.addEventListener('load', () => {
    randomizeBlobPositions();
    // Trigger initial parallax update
    requestTick();
});

// ==========================================
// Performance Optimization
// ==========================================

// Debounce function for scroll events (kept for potential future use)
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

// ==========================================
// Console Easter Egg
// ==========================================
console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cLooking at the code? I like your style!', 'font-size: 14px; color: #8b5cf6;');
console.log('%c💼 Let\'s connect!', 'font-size: 14px; color: #ec4899;');

// ==========================================
// Preload Critical Assets
// ==========================================
window.addEventListener('load', function() {
    // Preload any critical assets here
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        if (img.dataset.src) {
            img.src = img.dataset.src;
        }
    });
});

// ==========================================
// Add AOS CSS if not loaded
// ==========================================
if (typeof AOS === 'undefined') {
    const aosLink = document.createElement('link');
    aosLink.rel = 'stylesheet';
    aosLink.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
    document.head.appendChild(aosLink);
}
