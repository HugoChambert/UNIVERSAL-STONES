export function initPremiumEffects() {
  initCustomCursor();
  initMagneticElements();
  initSmoothScrollAnimations();
  initParallaxLayers();
  initTextRevealAnimations();
  initScrollProgressBar();
  initElementReveal();
}

function initCustomCursor() {
  if (window.innerWidth < 768) return;

  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  const cursorDot = document.createElement('div');
  cursorDot.className = 'cursor-dot';
  const cursorRing = document.createElement('div');
  cursorRing.className = 'cursor-ring';
  const cursorTrail = document.createElement('div');
  cursorTrail.className = 'cursor-trail';

  cursor.appendChild(cursorDot);
  cursor.appendChild(cursorRing);
  cursor.appendChild(cursorTrail);
  document.body.appendChild(cursor);

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  let trailX = 0, trailY = 0;
  let isHovering = false;
  let isClicking = false;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  document.addEventListener('mousedown', () => {
    isClicking = true;
    cursor.classList.add('clicking');
  });

  document.addEventListener('mouseup', () => {
    isClicking = false;
    cursor.classList.remove('clicking');
  });

  const interactiveElements = 'a, button, .stone-item, .sink-item, .category-btn, .nav-link, .career-card, .faq-item, .info-card, .member-logo-item, input, textarea';

  document.querySelectorAll(interactiveElements).forEach(el => {
    el.addEventListener('mouseenter', () => {
      isHovering = true;
      cursor.classList.add('hovering');
    });
    el.addEventListener('mouseleave', () => {
      isHovering = false;
      cursor.classList.remove('hovering');
    });
  });

  function animateCursor() {
    const ringSpeed = 0.15;
    const trailSpeed = 0.08;

    ringX += (mouseX - ringX) * ringSpeed;
    ringY += (mouseY - ringY) * ringSpeed;
    trailX += (mouseX - trailX) * trailSpeed;
    trailY += (mouseY - trailY) * trailSpeed;

    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    cursorRing.style.transform = `translate(${ringX}px, ${ringY}px)`;
    cursorTrail.style.transform = `translate(${trailX}px, ${trailY}px)`;

    requestAnimationFrame(animateCursor);
  }

  animateCursor();
}

function initMagneticElements() {
  if (window.innerWidth < 768) return;

  const magneticElements = document.querySelectorAll('.cta-button, .category-btn, .nav-link, .career-link, .form-submit-btn');

  magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
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
