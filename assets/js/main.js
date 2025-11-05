/**
 * Personal Website - Main JavaScript
 * Handles animations, interactions, and smooth scrolling
 */

(function() {
  'use strict';

  // Wait for DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {

    // ========================================
    // Initialize WOW.js for scroll animations
    // ========================================
    if (typeof WOW !== 'undefined') {
      new WOW({
        boxClass: 'wow',
        animateClass: 'animate__animated',
        offset: 100,
        mobile: true,
        live: true
      }).init();
    }

    // ========================================
    // Sticky Header on Scroll
    // ========================================
    const header = document.getElementById('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Add shadow when scrolled
      if (scrollTop > 50) {
        header.classList.add('scrolled');
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      } else {
        header.classList.remove('scrolled');
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
      }

      lastScrollTop = scrollTop;
    });

    // Initialize jQuery Sticky if available
    if (typeof jQuery !== 'undefined' && jQuery.fn.sticky) {
      jQuery('.header').sticky({ topSpacing: 0 });
    }

    // ========================================
    // Smooth Scrolling for Navigation Links
    // ========================================
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Skip if it's just "#" or external link
        if (href === '#' || href.indexOf('#') === -1) {
          return;
        }

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          e.preventDefault();

          const headerHeight = header.offsetHeight;
          const targetPosition = targetElement.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Close mobile menu if open
          closeMobileMenu();
        }
      });
    });

    // ========================================
    // Mobile Navigation Toggle
    // ========================================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
      navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        document.body.classList.toggle('menu-open');
      });

      // Close menu when clicking outside
      document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
          closeMobileMenu();
        }
      });
    }

    function closeMobileMenu() {
      if (navMenu) {
        navMenu.classList.remove('active');
      }
      if (navToggle) {
        navToggle.classList.remove('active');
      }
      document.body.classList.remove('menu-open');
    }

    // ========================================
    // Parallax Effect for Background Elements
    // ========================================
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    if (parallaxElements.length > 0) {
      window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach(function(element) {
          const speed = element.getAttribute('data-parallax') || 0.5;
          const yPos = -(scrolled * speed);
          element.style.transform = `translateY(${yPos}px)`;
        });
      });
    }

    // ========================================
    // Intersection Observer for Fade-in Effects
    // ========================================
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe elements with data-observe attribute
    const observeElements = document.querySelectorAll('[data-observe]');
    observeElements.forEach(function(element) {
      observer.observe(element);
    });

    // ========================================
    // Active Navigation Link on Scroll
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

    function highlightNavigation() {
      const scrollY = window.pageYOffset;

      sections.forEach(function(section) {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + sectionId) {
              link.classList.add('active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', highlightNavigation);

    // ========================================
    // Timeline Animation on Scroll
    // ========================================
    const timelineItems = document.querySelectorAll('.timeline-item');

    const timelineObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry, index) {
        if (entry.isIntersecting) {
          setTimeout(function() {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 100);
        }
      });
    }, {
      threshold: 0.2
    });

    timelineItems.forEach(function(item) {
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
      item.style.transition = 'all 0.6s ease-out';
      timelineObserver.observe(item);
    });

    // ========================================
    // Profile Photo Placeholder Enhancement
    // ========================================
    const photoPlaceholder = document.querySelector('.photo-placeholder');

    if (photoPlaceholder) {
      // Add interactive hover effect
      photoPlaceholder.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(2deg)';
      });

      photoPlaceholder.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
      });
    }

    // ========================================
    // Smooth Reveal for Cards
    // ========================================
    const cards = document.querySelectorAll('.philosophy-card, .featured-card');

    const cardObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry, index) {
        if (entry.isIntersecting) {
          setTimeout(function() {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 150);
        }
      });
    }, {
      threshold: 0.1
    });

    cards.forEach(function(card) {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'all 0.6s ease-out';
      cardObserver.observe(card);
    });

    // ========================================
    // Button Click Effects
    // ========================================
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(function(button) {
      button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(function() {
          ripple.remove();
        }, 600);
      });
    });

    // ========================================
    // Loading Screen (Optional)
    // ========================================
    window.addEventListener('load', function() {
      document.body.classList.add('loaded');

      // Remove any loading overlay if it exists
      const loader = document.getElementById('loader');
      if (loader) {
        loader.style.opacity = '0';
        setTimeout(function() {
          loader.style.display = 'none';
        }, 300);
      }
    });

    // ========================================
    // Performance: Debounce Scroll Events
    // ========================================
    function debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = function() {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }

    // Apply debounce to scroll-heavy functions if needed
    const debouncedHighlight = debounce(highlightNavigation, 100);
    window.addEventListener('scroll', debouncedHighlight);

    // ========================================
    // Console Welcome Message
    // ========================================
    console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold; color: #2563eb;');
    console.log('%cThanks for visiting! Built with care by Vennela Subramanyam.', 'font-size: 14px; color: #64748b;');

  }); // End of DOMContentLoaded

})();
