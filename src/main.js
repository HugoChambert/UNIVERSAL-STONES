// Removed CSS import - CSS is loaded via <link> tag in HTML

const graniteStones = [
  { name: 'Baltic Brown', image: './pic/Granite/Baltic-Brown.jpg', description: 'Rich brown granite with black and gold flecks. Durable and heat-resistant. Perfect for busy kitchens.' },
  { name: 'Black Forest', image: './pic/Granite/Black-Forest.jpg', description: 'Deep black base with gold and burgundy veining. Exotic and dramatic appearance. Low maintenance.' },
  { name: 'Black Galaxy', image: './pic/Granite/Black-Galaxy.jpg', description: 'Pure black with golden sparkles. Timeless elegance. Highly resistant to scratches.' },
  { name: 'Black Pearl', image: './pic/Granite/Black-Pearl.webp', description: 'Dark charcoal with silver flecks. Sophisticated and modern. Excellent for contemporary designs.' },
  { name: 'Blanco Taupe', image: './pic/Granite/Blanco-Taupe.jpg', description: 'Soft taupe with cream undertones. Warm and inviting. Complements neutral palettes.' },
  { name: 'Blue Eyes', image: './pic/Granite/Blue-Eyes.jpg', description: 'Unique blue patterns on gray base. Striking visual interest. Rare and exotic.' },
  { name: 'Blue Luise', image: './pic/Granite/Blue-Luise.jpg', description: 'Light blue with white patterns. Serene and calming. Perfect for spa-like bathrooms.' },
  { name: 'Blue Pearl', image: './pic/Granite/Blue-Pearl.jpg', description: 'Blue-gray with iridescent crystals. Shimmers in light. Elegant and distinctive.' },
  { name: 'Butterfly Gold', image: './pic/Granite/Butterfly-Gold.jpg', description: 'Warm gold tones with brown accents. Rich and luxurious. Adds warmth to any space.' },
  { name: 'Capolavoro', image: './pic/Granite/Capolavoro.jpg', description: 'Cream base with gold and gray veining. Classic beauty. Versatile for any design.' },
  { name: 'Copper Canyon', image: './pic/Granite/Copper-Canyon.jpg', description: 'Rustic copper and brown tones. Earthy and warm. Brings natural elegance.' },
  { name: 'Crazy Horse', image: './pic/Granite/Crazy-Horse.jpg', description: 'Bold swirls of brown and cream. Dramatic movement. Statement-making surface.' },
  { name: 'Crema Bordeaux', image: './pic/Granite/Crema-Bordeaux.jpg', description: 'Cream with burgundy veining. Elegant and warm. Perfect for traditional kitchens.' },
  { name: 'Crema Royale', image: './pic/Granite/Crema-Royale.jpg', description: 'Soft cream with subtle patterns. Refined elegance. Complements light cabinetry.' },
  { name: 'Desert Gold', image: './pic/Granite/Desert-Gold.jpg', description: 'Golden beige with brown specks. Warm and inviting. Hides minor stains well.' },
  { name: 'Emerald Green', image: './pic/Granite/Emerald-Green.jpg', description: 'Rich green with darker veining. Bold and unique. Makes a strong statement.' },
  { name: 'Emerald Pearl', image: './pic/Granite/Emerald-Pearl.jpg', description: 'Dark green with metallic shimmer. Luxurious appearance. Eye-catching and elegant.' },
  { name: 'Gardena White', image: './pic/Granite/Gardena-White.jpg', description: 'Creamy white with gray veining. Clean and bright. Perfect for small spaces.' },
  { name: 'Giallo Fiorito', image: './pic/Granite/Giallo-Fiorito.jpg', description: 'Yellow-gold with red accents. Vibrant and cheerful. Adds energy to kitchens.' },
  { name: 'Giallo Napoleone', image: './pic/Granite/Giallo-Napoleone.jpg', description: 'Golden yellow with burgundy veining. Bold and beautiful. Classic Italian granite.' },
  { name: 'Giallo Ornamental', image: './pic/Granite/Giallo-Ornamental.jpg', description: 'Beige base with brown and black specks. Versatile and popular. Easy to coordinate.' },
  { name: 'Giblee', image: './pic/Granite/Giblee.jpg', description: 'White with gray and gold veining. Sophisticated elegance. Timeless appeal.' },
  { name: 'Golden Fantasy', image: './pic/Granite/Golden-Fantasy.jpg', description: 'Dramatic gold and black patterns. Exotic and luxurious. Unique character in every slab.' },
  { name: 'Golden Leaf', image: './pic/Granite/Golden-Leaf.webp', description: 'Gold with brown leaf-like patterns. Natural beauty. Warm and inviting.' },
  { name: 'Golden Persa', image: './pic/Granite/Golden-Persa.jpg', description: 'Cream with gold and brown veining. Rich texture. Classic and elegant.' },
  { name: 'Ice White', image: './pic/Granite/Ice-White.jpg', description: 'Pure white with gray veining. Clean and crisp. Opens up any space.' },
  { name: 'Imperial Coffee', image: './pic/Granite/Imperial-Coffee.jpeg', description: 'Deep brown with lighter veining. Rich and sophisticated. Perfect for elegant spaces.' },
  { name: 'Indian Mahogany', image: './pic/Granite/Indian-Mahogany.jpg', description: 'Burgundy-brown with black patterns. Warm and luxurious. Traditional elegance.' },
  { name: 'Juparana Bordeaux', image: './pic/Granite/Juparana-Bordeaux.jpg', description: 'Burgundy with cream and gray swirls. Flowing movement. Dramatic and unique.' },
  { name: 'Lady Dream', image: './pic/Granite/Lady-Dream.jpg', description: 'White with purple and gold veining. Feminine and elegant. Soft and romantic.' },
  { name: 'Madura Gold', image: './pic/Granite/Madura-Gold.jpg', description: 'Golden yellow with brown patterns. Warm and cheerful. Classic choice.' },
  { name: 'Minsk Green', image: './pic/Granite/Minsk-Green.jpg', description: 'Dark green with lighter veining. Bold and natural. Unique color palette.' },
  { name: 'Moon White', image: './pic/Granite/Moon-White.jpg', description: 'Soft white with gray accents. Gentle and bright. Versatile and timeless.' },
  { name: 'Netuno Bordeaux', image: './pic/Granite/Netuno-Bordeaux.jpg', description: 'Burgundy with cream swirls. Dramatic movement. Rich and elegant.' },
  { name: 'New Venetian Gold', image: './pic/Granite/New-Venetian-Gold.webp', description: 'Gold with brown and cream patterns. Popular and versatile. Works with many styles.' },
  { name: 'River White', image: './pic/Granite/River-White.jpg', description: 'White with gray and burgundy veining. Clean and elegant. Classic beauty.' },
  { name: 'Rosso Fiorentino', image: './pic/Granite/Rosso-Fiorentino.webp', description: 'Red-brown with lighter veining. Rich and warm. Mediterranean elegance.' },
  { name: 'Santa Cecilia Gold', image: './pic/Granite/Santa-Cecilia-Gold.jpg', description: 'Gold with brown and black flecks. Popular and practical. Hides wear well.' },
  { name: 'Saphire Blue', image: './pic/Granite/Saphire-Blue.jpeg', description: 'Deep blue with lighter patterns. Rare and stunning. Jewel-like quality.' },
  { name: 'Shivakashi', image: './pic/Granite/Shivakashi.webp', description: 'Pink and gray with black accents. Soft and distinctive. Traditional Indian granite.' },
  { name: 'Silver Stratus', image: './pic/Granite/Silver-Stratus.jpg', description: 'Gray with white and black veining. Modern and sleek. Contemporary elegance.' },
  { name: 'Solarius', image: './pic/Granite/Solarius.jpg', description: 'Cream with gold veining. Luxurious and warm. Brazilian beauty.' },
  { name: 'Splendor', image: './pic/Granite/Splendor.webp', description: 'White with gold and burgundy veining. Elegant and refined. Classic sophistication.' },
  { name: 'Steel Gray', image: './pic/Granite/Steel-Gray.jpg', description: 'Medium gray with darker patterns. Modern and industrial. Contemporary appeal.' },
  { name: 'Super White', image: './pic/Granite/Super-White.jpg', description: 'Bright white with gray veining. Clean and fresh. Marble-like appearance.' },
  { name: 'Tan Brown', image: './pic/Granite/Tan-Brown.jpg', description: 'Brown with black and gray flecks. Popular and durable. Hides dirt well.' },
  { name: 'Tiger Skin Yellow', image: './pic/Granite/Tiger-Skin-Yellow.jpg', description: 'Yellow with brown striations. Bold and exotic. Makes a statement.' },
  { name: 'Tiger Yellow Exotic', image: './pic/Granite/Tiger-Yellow-Exotic.jpg', description: 'Golden yellow with dramatic veining. Exotic and unique. Eye-catching beauty.' },
  { name: 'Tropical Brown', image: './pic/Granite/Tropical-Brown.jpg', description: 'Brown with copper and black patterns. Rich and complex. Hides imperfections.' },
  { name: 'Typhoon Bordeaux', image: './pic/Granite/Typhoon-Bordeaux.jpg', description: 'Burgundy with cream swirls. Dramatic movement. Flowing patterns.' },
  { name: 'Uba Tuba', image: './pic/Granite/Uba-Tuba.jpg', description: 'Dark green-black with gold flecks. Classic and elegant. Very durable.' },
  { name: 'Verde Butterfly', image: './pic/Granite/Verde-Butterfly.jpg', description: 'Green with gold and burgundy veining. Exotic and luxurious. Dramatic beauty.' },
  { name: 'Victoria Regia', image: './pic/Granite/Victoria-Regia.jpg', description: 'Cream with gold and burgundy patterns. Rich and elegant. Brazilian treasure.' },
  { name: 'Vintage Gold', image: './pic/Granite/Vintage-Gold.webp', description: 'Golden with brown veining. Warm and inviting. Classic appeal.' },
  { name: 'Volga Blue', image: './pic/Granite/Volga-Blue.jpg', description: 'Deep blue with lighter patterns. Rare and stunning. Unique character.' },
  { name: 'White Galaxy Brazil', image: './pic/Granite/White-Galaxy-Brazil.jpg', description: 'White with brown and burgundy veining. Bold patterns. Brazilian elegance.' },
  { name: 'White Galaxy India', image: './pic/Granite/White-Galaxy-India.webp', description: 'White with gray and black patterns. Clean and modern. Versatile choice.' },
  { name: 'Yellow River Classic', image: './pic/Granite/Yellow-River-Classic.webp', description: 'Yellow-gold with brown veining. Warm and cheerful. Traditional beauty.' }
];

const marbleStones = [
  { name: 'Arabescato', image: './pic/Marble/Arabescato.jpg', description: 'White marble with bold gray veining. Italian luxury. Classic and timeless elegance.' },
  { name: 'Arco Iris Onyx', image: './pic/Marble/Arco-Iris-Onyx.jpg', description: 'Rainbow-colored translucent onyx. Dramatic and unique. Backlit beauty.' },
  { name: 'Aurora Blue', image: './pic/Marble/Aurora-Blue.webp', description: 'Blue and white flowing patterns. Serene and calming. Rare natural beauty.' },
  { name: 'Botticino', image: './pic/Marble/Botticino.jpg', description: 'Beige marble with subtle veining. Warm and classic. Italian tradition.' },
  { name: 'Calacutta Gold', image: './pic/Marble/Calacutta-Gold.jpg', description: 'White with gold and gray veining. Luxurious and refined. Prestigious marble.' },
  { name: 'Crema Marfil', image: './pic/Marble/Crema-Marfil.webp', description: 'Creamy beige with light veining. Soft and elegant. Spanish quality.' },
  { name: 'Emperador Dark', image: './pic/Marble/Emperador-Dark.webp', description: 'Deep brown with white veining. Rich and dramatic. Spanish marble.' },
  { name: 'Emperador', image: './pic/Marble/Emperador.jpg', description: 'Medium brown with white patterns. Warm and sophisticated. Classic choice.' },
  { name: 'Grigio Carnico', image: './pic/Marble/Grigio-Carnico.jpg', description: 'Gray marble with white veining. Modern elegance. Italian heritage.' },
  { name: 'Mystery White', image: './pic/Marble/Mystery-White.jpg', description: 'White with gray and gold veining. Mysterious beauty. Unique patterns.' },
  { name: 'Rojo Alicante', image: './pic/Marble/Rojo-Alicante.webp', description: 'Rich red with white veining. Bold and striking. Spanish passion.' },
  { name: 'White Carrara', image: './pic/Marble/White-Carrara.jpg', description: 'Classic white with gray veining. Iconic Italian marble. Timeless beauty.' }
];

const stainlessSteelSinks = [
  { name: 'US 103', image: './Sink/Stainless-Steel/US-103.jpg', pdf: './Sink/Stainless-Steel/US 103.pdf' },
  { name: 'US 105', image: './Sink/Stainless-Steel/US-105.jpg', pdf: './Sink/Stainless-Steel/US 105.pdf' },
  { name: 'US 204', image: './Sink/Stainless-Steel/US-204.jpg', pdf: './Sink/Stainless-Steel/US 204.pdf' },
  { name: 'US 206', image: './Sink/Stainless-Steel/US-206.jpg', pdf: './Sink/Stainless-Steel/US 206.pdf' },
  { name: 'US 2318', image: './Sink/Stainless-Steel/US-2318.jpg', pdf: './Sink/Stainless-Steel/US 2318.pdf' },
  { name: 'US 301', image: './Sink/Stainless-Steel/US-301.jpg', pdf: './Sink/Stainless-Steel/US 301.pdf' },
  { name: 'US 307', image: './Sink/Stainless-Steel/US-307.jpg', pdf: './Sink/Stainless-Steel/US 307.pdf' },
  { name: 'US 309', image: './Sink/Stainless-Steel/US-309.jpg', pdf: './Sink/Stainless-Steel/US 309.pdf' },
  { name: 'US 3219', image: './Sink/Stainless-Steel/US-3219.jpg', pdf: './Sink/Stainless-Steel/US 3219.pdf' },
  { name: 'US 905', image: './Sink/Stainless-Steel/US-905.jpg', pdf: './Sink/Stainless-Steel/US 905.pdf' },
  { name: 'US 905R', image: './Sink/Stainless-Steel/US-905R.jpg', pdf: './Sink/Stainless-Steel/US 905R.pdf' },
  { name: 'US 907', image: './Sink/Stainless-Steel/US-907.jpg', pdf: './Sink/Stainless-Steel/US 907.pdf' },
  { name: 'US 907 R', image: './Sink/Stainless-Steel/US-907R.jpg', pdf: './Sink/Stainless-Steel/US 907 R.pdf' },
  { name: 'US 3018', image: './Sink/Stainless-Steel/US-3018.jpg', pdf: './Sink/Stainless-Steel/US-3018.pdf' },
  { name: 'US 3021 Apron', image: './Sink/Stainless-Steel/US-3021-APRON.jpg', pdf: './Sink/Stainless-Steel/US-3021 APRON.pdf' },
  { name: 'US 3219 Equal', image: './Sink/Stainless-Steel/US-3219-EQUAL.jpg', pdf: './Sink/Stainless-Steel/US-3219 EQUAL.pdf' }
];

const ceramicSinks = [
  { name: 'US 1714W', image: './Sink/Ceramic/US-1714W.jpg', pdf: './Sink/Ceramic/US-1714W.pdf' },
  { name: 'US 1812', image: './Sink/Ceramic/US-1812.jpg', pdf: './Sink/Ceramic/US-1812.pdf' },
  { name: 'Ceramic White', image: './Sink/Ceramic/US-Ceramic-White.jpg', pdf: './Sink/Ceramic/US-Ceramic-White.pdf' }
];

function loadStones(category) {
  const grid = document.getElementById('stones-grid');
  if (!grid) return;

  grid.innerHTML = '';
  const stones = category === 'granite' ? graniteStones : marbleStones;

  stones.forEach(stone => {
    const item = document.createElement('div');
    item.className = 'stone-item';
    item.innerHTML = `
      <div class="stone-image-container">
        <img src="${stone.image}" alt="${stone.name}" loading="lazy" onerror="this.style.opacity=0.5">
      </div>
      <div class="stone-info-overlay">
        <div class="stone-info-content">
          <h3 class="stone-info-title">${stone.name}</h3>
          <p class="stone-info-description">${stone.description}</p>
        </div>
      </div>
      <div class="stone-name">${stone.name}</div>
    `;
    grid.appendChild(item);
  });
}

function loadSinks(category) {
  const grid = document.getElementById('sinks-grid');
  if (!grid) return;

  grid.innerHTML = '';
  const sinks = category === 'stainless' ? stainlessSteelSinks : ceramicSinks;

  sinks.forEach(sink => {
    const item = document.createElement('div');
    item.className = 'sink-item';
    item.innerHTML = `
      <a href="${sink.pdf}" target="_blank" rel="noopener noreferrer" class="sink-link" aria-label="View ${sink.name} specifications">
        <div class="sink-name">${sink.name}</div>
      </a>
    `;
    grid.appendChild(item);
  });
}

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = parseFloat(entry.target.dataset.delay || 0);
        setTimeout(() => {
          entry.target.classList.add('animate-in');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section, .feature-card, .stat-item, .project-card, .stone-item, .sink-item, .member-logo, .category-btn, .section-title, .hero-title, .hero-subtitle, .cta-button').forEach((el, index) => {
    el.classList.add('scroll-animate');
    el.dataset.delay = index * 40;
    observer.observe(el);
  });
}

function initParallaxEffects() {
  const parallaxElements = document.querySelectorAll('.hero-content, .section-title');

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    parallaxElements.forEach(el => {
      const speed = el.classList.contains('hero-content') ? 0.5 : 0.3;
      const yPos = -(scrolled * speed);
      el.style.transform = `translateY(${yPos}px)`;
    });
  }, { passive: true });
}

function initRevealOnScroll() {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'revealScale 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.stones-grid, .sinks-grid, .stone-categories, .sink-categories').forEach(el => {
    revealObserver.observe(el);
  });
}

function updateNavbarOnScroll() {
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

    lastScroll = currentScroll;
  }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
  loadStones('granite');
  loadSinks('stainless');
  initScrollAnimations();
  initParallaxEffects();
  initRevealOnScroll();
  updateNavbarOnScroll();

  const stoneCategoryButtons = document.querySelectorAll('[data-category]');
  stoneCategoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      stoneCategoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      loadStones(button.dataset.category);
      setTimeout(initScrollAnimations, 100);
    });
  });

  const sinkCategoryButtons = document.querySelectorAll('[data-sink-category]');
  sinkCategoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      sinkCategoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      loadSinks(button.dataset.sinkCategory);
      setTimeout(initScrollAnimations, 100);
    });
  });

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

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  document.addEventListener('mousemove', (e) => {
    const target = e.target.closest('.stone-item, .sink-item');
    if (target) {
      const rect = target.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      target.style.setProperty('--mouse-x', `${x}%`);
      target.style.setProperty('--mouse-y', `${y}%`);
    }
  });

  window.addEventListener('scroll', () => {
    const stonesSection = document.querySelector('.stones-section');
    if (!stonesSection) return;

    const scrolled = window.pageYOffset;
    const sectionTop = stonesSection.offsetTop;
    const parallaxSpeed = 0.3;

    if (scrolled > sectionTop - window.innerHeight && scrolled < sectionTop + stonesSection.offsetHeight) {
      const offset = (scrolled - sectionTop) * parallaxSpeed;
      stonesSection.style.setProperty('--parallax-offset', `${offset}px`);
    }
  }, { passive: true });

  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    const canvas = document.createElement('canvas');
    canvas.className = 'hero-particles-canvas';
    heroSection.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    let mouse = { x: null, y: null, radius: 150 };

    function resizeCanvas() {
      canvas.width = heroSection.offsetWidth;
      canvas.height = heroSection.offsetHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    heroSection.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle {
      constructor() {
        this.reset();
        this.baseSpeedX = Math.random() * 0.5 - 0.25;
        this.baseSpeedY = Math.random() * -0.5 - 0.2;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.baseSpeedX = Math.random() * 0.5 - 0.25;
        this.baseSpeedY = Math.random() * -0.5 - 0.2;
        this.speedX = this.baseSpeedX;
        this.speedY = this.baseSpeedY;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.life = Math.random() * 200 + 100;
        this.maxLife = this.life;
      }

      update() {
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const angle = Math.atan2(dy, dx);

            this.speedX = this.baseSpeedX - Math.cos(angle) * force * 3;
            this.speedY = this.baseSpeedY - Math.sin(angle) * force * 3;
          } else {
            this.speedX += (this.baseSpeedX - this.speedX) * 0.1;
            this.speedY += (this.baseSpeedY - this.speedY) * 0.1;
          }
        } else {
          this.speedX = this.baseSpeedX;
          this.speedY = this.baseSpeedY;
        }

        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;

        if (this.life < this.maxLife * 0.3) {
          this.opacity = (this.life / (this.maxLife * 0.3)) * 0.5;
        }

        if (this.life <= 0 || this.y < -10 || this.x < -10 || this.x > canvas.width + 10) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = '#d4af37';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#d4af37';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    function createParticles() {
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationId = requestAnimationFrame(animate);
    }

    createParticles();
    animate();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!animationId) animate();
        } else {
          cancelAnimationFrame(animationId);
          animationId = null;
        }
      });
    });

    observer.observe(heroSection);
  }

});
