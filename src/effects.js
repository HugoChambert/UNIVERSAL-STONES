// EMERGENCY WORKING VERSION - No cursor effects, navbar follows scroll
export function initPremiumEffects() {
  initSmoothScrollAnimations();
  initParallaxLayers();
  initTextRevealAnimations();
  initScrollProgressBar();
  initElementReveal();
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
