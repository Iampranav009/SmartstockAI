/**
 * SmartStock.AI - Main JavaScript
 * Handles scroll animations, mobile menu, and general interactions
 */

class SmartStockApp {
  constructor() {
    this.mobileMenuOpen = false;
    this.scrollObserver = null;
    this.navbar = null;
    this.mobileMenuBtn = null;
    this.mobileMenu = null;
    
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    // Initialize components
    this.setupScrollAnimations();
    this.setupMobileMenu();
    this.setupSmoothScrolling();
    this.setupNavbarScroll();
    this.setupPageLoader();
    this.setupHoverEffects();
    this.setupAccessibility();
    
    // Set initial states
    this.updateNavbarState();
  }

  setupScrollAnimations() {
    // Find all elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements.length === 0) return;
    
    // Create intersection observer
    const options = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    this.scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add stagger delay for multiple elements
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, index * 100);
          
          // Stop observing this element
          this.scrollObserver.unobserve(entry.target);
        }
      });
    }, options);

    // Observe all animated elements
    animatedElements.forEach(element => {
      this.scrollObserver.observe(element);
    });
  }

  setupMobileMenu() {
    this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    this.mobileMenu = document.querySelector('.mobile-menu');
    
    if (!this.mobileMenuBtn || !this.mobileMenu) return;
    
    // Toggle mobile menu
    this.mobileMenuBtn.addEventListener('click', () => {
      this.toggleMobileMenu();
    });
    
    // Close menu when clicking on links
    const menuLinks = this.mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.closeMobileMenu();
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (this.mobileMenuOpen && 
          !this.mobileMenu.contains(event.target) && 
          !this.mobileMenuBtn.contains(event.target)) {
        this.closeMobileMenu();
      }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && this.mobileMenuOpen) {
        this.closeMobileMenu();
      }
    });
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    
    if (this.mobileMenuOpen) {
      this.openMobileMenu();
    } else {
      this.closeMobileMenu();
    }
  }

  openMobileMenu() {
    this.mobileMenu.classList.add('active');
    this.mobileMenuBtn.classList.add('active');
    document.body.classList.add('menu-open');
    this.mobileMenuOpen = true;
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
  }

  closeMobileMenu() {
    this.mobileMenu.classList.remove('active');
    this.mobileMenuBtn.classList.remove('active');
    document.body.classList.remove('menu-open');
    this.mobileMenuOpen = false;
    
    // Restore body scroll
    document.body.style.overflow = '';
  }

  setupSmoothScrolling() {
    // Handle all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (event) => {
        event.preventDefault();
        
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  setupNavbarScroll() {
    this.navbar = document.querySelector('.navbar');
    
    if (!this.navbar) return;
    
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    const updateNavbar = () => {
      const scrollY = window.scrollY;
      
      if (scrollY > 100) {
        this.navbar.classList.add('scrolled');
      } else {
        this.navbar.classList.remove('scrolled');
      }
      
      // Hide navbar on scroll down, show on scroll up
      if (scrollY > lastScrollY && scrollY > 200) {
        this.navbar.style.transform = 'translateY(-100%)';
      } else {
        this.navbar.style.transform = 'translateY(0)';
      }
      
      lastScrollY = scrollY;
      ticking = false;
    };
    
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', requestTick);
  }

  updateNavbarState() {
    if (this.navbar) {
      if (window.scrollY > 100) {
        this.navbar.classList.add('scrolled');
      } else {
        this.navbar.classList.remove('scrolled');
      }
    }
  }

  setupPageLoader() {
    const loader = document.querySelector('.page-loader');
    
    if (!loader) return;
    
    // Hide loader when page is fully loaded
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('hidden');
        
        // Remove loader from DOM after animation
        setTimeout(() => {
          loader.remove();
        }, 500);
      }, 500);
    });
  }

  setupHoverEffects() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.glass-card, .stat-card, .feature-card, .benefit-card');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
      });
    });
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
      });
      
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
      });
    });
  }

  setupAccessibility() {
    // Skip to main content link
    this.createSkipLink();
    
    // Focus management for mobile menu
    this.setupFocusManagement();
    
    // Keyboard navigation
    this.setupKeyboardNavigation();
  }

  createSkipLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: var(--color-purple);
      color: white;
      padding: 8px;
      text-decoration: none;
      border-radius: 4px;
      z-index: 10000;
      transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  setupFocusManagement() {
    // Trap focus in mobile menu when open
    document.addEventListener('keydown', (event) => {
      if (this.mobileMenuOpen && event.key === 'Tab') {
        const focusableElements = this.mobileMenu.querySelectorAll(
          'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    });
  }

  setupKeyboardNavigation() {
    // Handle Enter key on buttons
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && event.target.classList.contains('btn-primary')) {
        event.target.click();
      }
    });
  }

  // Utility methods
  debounce(func, wait) {
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

  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  // Public methods
  scrollToSection(sectionId) {
    const element = document.querySelector(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }

  refreshAnimations() {
    // Re-observe all animated elements
    if (this.scrollObserver) {
      this.scrollObserver.disconnect();
      this.setupScrollAnimations();
    }
  }

  // Cleanup method
  destroy() {
    if (this.scrollObserver) {
      this.scrollObserver.disconnect();
    }
    
    // Remove event listeners
    document.removeEventListener('click', this.handleDocumentClick);
    document.removeEventListener('keydown', this.handleKeydown);
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('load', this.handleLoad);
  }
}

// Initialize app
const app = new SmartStockApp();

// Expose app globally for debugging
window.SmartStockApp = app;

// Handle window resize
window.addEventListener('resize', app.debounce(() => {
  app.refreshAnimations();
}, 250));

// Handle page visibility change
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Pause animations when tab is not visible
    document.body.classList.add('paused');
  } else {
    // Resume animations when tab becomes visible
    document.body.classList.remove('paused');
  }
});

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SmartStockApp;
}
