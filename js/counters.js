/**
 * SmartStock.AI - Counter Animation System
 * Animates numbers counting up when elements come into view
 */

class CounterAnimation {
  constructor() {
    this.counters = [];
    this.observer = null;
    this.init();
  }

  init() {
    // Find all counter elements
    this.counters = document.querySelectorAll('.counter');
    
    if (this.counters.length === 0) return;
    
    // Set up intersection observer
    this.setupObserver();
    
    // Observe all counter elements
    this.counters.forEach(counter => {
      this.observer.observe(counter);
    });
  }

  setupObserver() {
    const options = {
      threshold: 0.5,
      rootMargin: '0px 0px -100px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          entry.target.classList.add('counted');
          this.animateCounter(entry.target);
        }
      });
    }, options);
  }

  animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const format = element.dataset.format || 'number';
    const duration = 2000; // 2 seconds
    const startTime = performance.now();
    
    // Add animating class for visual feedback
    element.classList.add('animating');
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(target * easeOut);
      
      // Format the number based on type
      const formattedValue = this.formatNumber(currentValue, format);
      element.textContent = formattedValue;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Animation complete
        element.classList.remove('animating');
        element.textContent = this.formatNumber(target, format);
      }
    };
    
    requestAnimationFrame(animate);
  }

  formatNumber(value, format) {
    switch (format) {
      case 'currency':
        return '₹' + value.toLocaleString('en-IN');
      case 'percentage':
        return value + '%';
      case 'number':
        return value.toLocaleString('en-IN');
      default:
        return value.toString();
    }
  }

  // Method to manually trigger counter animation
  triggerCounter(element) {
    if (element && element.classList.contains('counter')) {
      this.animateCounter(element);
    }
  }

  // Method to reset all counters
  resetCounters() {
    this.counters.forEach(counter => {
      counter.classList.remove('counted', 'animating');
      counter.textContent = '0';
    });
  }

  // Method to destroy observer
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// Progress bar animation
class ProgressBarAnimation {
  constructor() {
    this.progressBars = [];
    this.observer = null;
    this.init();
  }

  init() {
    // Find all progress bars
    this.progressBars = document.querySelectorAll('.progress-fill');
    
    if (this.progressBars.length === 0) return;
    
    // Set up intersection observer
    this.setupObserver();
    
    // Observe all progress bars
    this.progressBars.forEach(bar => {
      this.observer.observe(bar);
    });
  }

  setupObserver() {
    const options = {
      threshold: 0.5,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          entry.target.classList.add('animated');
          this.animateProgressBar(entry.target);
        }
      });
    }, options);
  }

  animateProgressBar(element) {
    const progress = element.dataset.progress || '0';
    const targetWidth = parseInt(progress);
    
    // Animate the width
    element.style.width = targetWidth + '%';
    
    // Update progress text if it exists
    const progressText = element.parentElement.querySelector('.progress-text');
    if (progressText) {
      this.animateProgressText(progressText, targetWidth);
    }
  }

  animateProgressText(element, targetValue) {
    const duration = 2000;
    const startTime = performance.now();
    const startValue = 0;
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOut);
      
      element.textContent = currentValue + '% Complete';
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.textContent = targetValue + '% Complete';
      }
    };
    
    requestAnimationFrame(animate);
  }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize counter animations
  new CounterAnimation();
  
  // Initialize progress bar animations
  new ProgressBarAnimation();
});

// Utility functions for external use
window.CounterUtils = {
  // Manually trigger a counter animation
  triggerCounter: (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      const counter = new CounterAnimation();
      counter.triggerCounter(element);
    }
  },
  
  // Reset all counters
  resetCounters: () => {
    const counter = new CounterAnimation();
    counter.resetCounters();
  },
  
  // Animate a specific number
  animateNumber: (element, target, format = 'number', duration = 2000) => {
    const startTime = performance.now();
    const startValue = 0;
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (target - startValue) * easeOut);
      
      let formattedValue;
      switch (format) {
        case 'currency':
          formattedValue = '₹' + currentValue.toLocaleString('en-IN');
          break;
        case 'percentage':
          formattedValue = currentValue + '%';
          break;
        case 'number':
          formattedValue = currentValue.toLocaleString('en-IN');
          break;
        default:
          formattedValue = currentValue.toString();
      }
      
      element.textContent = formattedValue;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        let finalValue;
        switch (format) {
          case 'currency':
            finalValue = '₹' + target.toLocaleString('en-IN');
            break;
          case 'percentage':
            finalValue = target + '%';
            break;
          case 'number':
            finalValue = target.toLocaleString('en-IN');
            break;
          default:
            finalValue = target.toString();
        }
        element.textContent = finalValue;
      }
    };
    
    requestAnimationFrame(animate);
  }
};

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CounterAnimation, ProgressBarAnimation };
}
