// WORKING VERSION - No cursor effects, navbar follows scroll, button hover fixed
export function initPremiumEffects() {
  initSmoothScrollAnimations();
  initParallaxLayers();
  initTextRevealAnimations();
  initScrollProgressBar();
  initElementReveal();
  fixButtonHoverIssues(); // NEW: Fix disappearing buttons
}

function initSmoothScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = parseFloat(entry.target.dataset.delay || 0);
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(
    '.page-title, .page-subtitle, .section-title, .work-section-title, .work-section-subtitle, ' +
    '.stone-item, .sink-item, .category-btn, .career-card, .faq-item, .info-card, ' +
    '.news-item, .member-logo-item, .contact-form-panel, .work-intro, .work-divider, ' +
    '.gallery-grid, .notable-projects-grid, .warranty-card-main'
  );

  animatedElements.forEach((el, index) => {
    el.classList.add('scroll-reveal');
    el.dataset.delay = (index % 10) * 60;
    observer.observe(el);
  });
}

function initParallaxLayers() {
  const parallaxBg = document.querySelectorAll('.contact-hero, .faq-hero, .work-section, .news-section');

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    parallaxBg.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const speed = 0.2;
        const yPos = (scrolled - el.offsetTop) * speed;
        el.style.setProperty('--parallax-y', `${yPos}px`);
      }
    });

    document.querySelectorAll('.section-title, .page-title').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        el.style.setProperty('--scroll-progress', progress);
      }
    });
  }, { passive: true });
}

function initTextRevealAnimations() {
  const titles = document.querySelectorAll('.page-title, .section-title, .work-section-title');

  titles.forEach(title => {
    const text = title.textContent;
    title.innerHTML = '';
    title.classList.add('text-reveal');

    text.split('').forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.animationDelay = `${i * 0.03}s`;
      span.className = 'char';
      title.appendChild(span);
    });
  });

  const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-text');
        titleObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  titles.forEach(title => titleObserver.observe(title));
}

function initScrollProgressBar() {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress-bar';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / windowHeight) * 100;
    progressBar.style.width = `${progress}%`;
  }, { passive: true });
}

function initElementReveal() {
  const staggerContainers = document.querySelectorAll('.stones-grid, .sinks-grid, .careers-grid, .member-logos, .faq-list');

  const containerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const children = entry.target.children;
        Array.from(children).forEach((child, index) => {
          setTimeout(() => {
            child.classList.add('stagger-revealed');
          }, index * 80);
        });
        containerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  staggerContainers.forEach(container => {
    Array.from(container.children).forEach(child => {
      child.classList.add('stagger-item');
    });
    containerObserver.observe(container);
  });
}

// NEW FUNCTION: Fix button hover issues
function fixButtonHoverIssues() {
  // Select all buttons and links that might have hover issues
  const interactiveElements = document.querySelectorAll(
    '.cta-button, .category-btn, .nav-link, .career-link, .form-submit-btn, ' +
    '.warranty-link, .social-links a, .member-logo-item'
  );

  interactiveElements.forEach(el => {
    // Remove any inline transform styles that might be stuck
    el.style.transform = '';
    
    // Add proper hover handling that always resets
    el.addEventListener('mouseenter', () => {
      // Element will use CSS hover styles
    });
    
    el.addEventListener('mouseleave', () => {
      // Force reset transform to ensure button returns to normal
      el.style.transform = '';
      el.style.transition = 'all 0.3s ease';
    });
    
    // Also reset on mouse movement to catch any edge cases
    el.addEventListener('mousemove', (e) => {
      // Prevent any accumulated transforms
      if (el.style.transform && el.style.transform !== 'none' && !el.matches(':hover')) {
        el.style.transform = '';
      }
    });
  });

  // Special handling for CTA button to ensure it never disappears
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    // Ensure button is always visible
    ctaButton.style.opacity = '1';
    ctaButton.style.visibility = 'visible';
    ctaButton.style.display = 'inline-block';
    
    // Remove any problematic event listeners
    const newButton = ctaButton.cloneNode(true);
    ctaButton.parentNode.replaceChild(newButton, ctaButton);
    
    // Add clean hover behavior
    newButton.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px) scale(1.05)';
      this.style.transition = 'all 0.3s ease';
    });
    
    newButton.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.transition = 'all 0.3s ease';
    });
  }
}

export function initMobileMenu() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
      });
    });
  }
}

export function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (currentScroll > lastScroll && currentScroll > 200) {
      navbar.classList.add('nav-hidden');
    } else {
      navbar.classList.remove('nav-hidden');
    }

    lastScroll = currentScroll;
  }, { passive: true });
}
