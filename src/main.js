import { initPremiumEffects, initMobileMenu, initNavbarScroll } from './effects.js';

const graniteStones = [
  { name: 'Baltic Brown', image: './pic/Granite/Baltic-Brown.jpg', description: 'Origin: Finland. A stunning composition of rich chocolate brown with black and golden-bronze flecks. Renowned for exceptional durability and heat resistance.' },
  { name: 'Black Forest', image: './pic/Granite/Black-Forest.jpg', description: 'Origin: Brazil. Deep obsidian base interlaced with gold and burgundy veining. Creates an exotic, dramatic focal point in any space.' },
  { name: 'Black Galaxy', image: './pic/Granite/Black-Galaxy.jpg', description: 'Origin: India. Pure midnight black embedded with golden sparkles resembling stars. The ultimate expression of timeless elegance.' },
  { name: 'Black Pearl', image: './pic/Granite/Black-Pearl.webp', description: 'Origin: India. Sophisticated charcoal foundation with luminous silver flecks. Perfect for sleek, contemporary architectural designs.' },
  { name: 'Blanco Taupe', image: './pic/Granite/Blanco-Taupe.jpg', description: 'Origin: Brazil. Soft taupe with warm cream undertones and subtle movement. Creates an inviting atmosphere while complementing neutral palettes.' },
  { name: 'Blue Eyes', image: './pic/Granite/Blue-Eyes.jpg', description: 'Origin: Brazil. Rare and exotic with striking blue labradorite crystals on a gray base. A truly unique geological specimen.' },
  { name: 'Blue Luise', image: './pic/Granite/Blue-Luise.jpg', description: 'Origin: Brazil. Serene light blue with white crystalline patterns. Evokes the tranquility of clear skies, ideal for spa-inspired spaces.' },
  { name: 'Blue Pearl', image: './pic/Granite/Blue-Pearl.jpg', description: 'Origin: Norway. Blue-gray with iridescent labradorite crystals that shimmer with reflected light. Distinctively elegant and prestigious.' },
  { name: 'Butterfly Gold', image: './pic/Granite/Butterfly-Gold.jpg', description: 'Origin: Brazil. Warm gold tones with brown accents and flowing patterns. Adds natural warmth and Brazilian luxury to any surface.' },
  { name: 'Capolavoro', image: './pic/Granite/Capolavoro.jpg', description: 'Origin: Brazil. Cream base adorned with gold and gray veining. A masterpiece of natural artistry, versatile for any design aesthetic.' },
  { name: 'Copper Canyon', image: './pic/Granite/Copper-Canyon.jpg', description: 'Origin: Brazil. Rustic copper and brown tones with earthy movement. Brings the natural elegance of weathered canyon walls indoors.' },
  { name: 'Crazy Horse', image: './pic/Granite/Crazy-Horse.jpg', description: 'Origin: Brazil. Bold, sweeping swirls of brown and cream. A statement piece with dramatic movement and wild natural beauty.' },
  { name: 'Crema Bordeaux', image: './pic/Granite/Crema-Bordeaux.jpg', description: 'Origin: Brazil. Cream foundation with rich burgundy veining and warm gold accents. Perfect for traditional, refined kitchen designs.' },
  { name: 'Crema Royale', image: './pic/Granite/Crema-Royale.jpg', description: 'Origin: Brazil. Soft cream with subtle patterns and refined elegance. Complements light cabinetry with understated sophistication.' },
  { name: 'Desert Gold', image: './pic/Granite/Desert-Gold.jpg', description: 'Origin: Namibia. Golden beige with brown and black specks. Warm, inviting, and practical for high-traffic areas.' },
  { name: 'Emerald Green', image: './pic/Granite/Emerald-Green.jpg', description: 'Origin: Brazil. Rich emerald green with darker veining. A bold statement piece that brings natural luxury to any space.' },
  { name: 'Emerald Pearl', image: './pic/Granite/Emerald-Pearl.jpg', description: 'Origin: Norway. Dark green with metallic shimmer and labradorite crystals. Luxurious appearance with captivating depth.' },
  { name: 'Gardena White', image: './pic/Granite/Gardena-White.jpg', description: 'Origin: Brazil. Creamy white with delicate gray veining. Clean, bright aesthetic that maximizes light in any space.' },
  { name: 'Giallo Fiorito', image: './pic/Granite/Giallo-Fiorito.jpg', description: 'Origin: Brazil. Vibrant yellow-gold with red and cream accents. Brings cheerful energy and Brazilian warmth to kitchens.' },
  { name: 'Giallo Napoleone', image: './pic/Granite/Giallo-Napoleone.jpg', description: 'Origin: Brazil. Golden yellow with rich burgundy veining. Bold, beautiful, and named for its imperial grandeur.' },
  { name: 'Giallo Ornamental', image: './pic/Granite/Giallo-Ornamental.jpg', description: 'Origin: Brazil. Beige base with brown and black specks. One of the most versatile and popular granites worldwide.' },
  { name: 'Giblee', image: './pic/Granite/Giblee.jpg', description: 'Origin: Saudi Arabia. White with gray and gold veining. Sophisticated elegance with timeless Middle Eastern heritage.' },
  { name: 'Golden Fantasy', image: './pic/Granite/Golden-Fantasy.jpg', description: 'Origin: Brazil. Dramatic gold and black patterns in sweeping movements. Each slab is a unique exotic masterpiece.' },
  { name: 'Golden Leaf', image: './pic/Granite/Golden-Leaf.webp', description: 'Origin: Brazil. Gold with brown leaf-like patterns resembling autumn foliage. Natural beauty with organic warmth.' },
  { name: 'Golden Persa', image: './pic/Granite/Golden-Persa.jpg', description: 'Origin: Brazil. Cream with gold and brown veining in rich, flowing patterns. Classic elegance with depth and character.' },
  { name: 'Ice White', image: './pic/Granite/Ice-White.jpg', description: 'Origin: Brazil. Pure white with subtle gray veining. Clean, crisp, and perfect for opening up contemporary spaces.' },
  { name: 'Imperial Coffee', image: './pic/Granite/Imperial-Coffee.jpeg', description: 'Origin: Brazil. Deep espresso brown with lighter veining. Rich, sophisticated, perfect for executive and elegant spaces.' },
  { name: 'Indian Mahogany', image: './pic/Granite/Indian-Mahogany.jpg', description: 'Origin: India. Burgundy-brown with black patterns. Traditional elegance with warm, luxurious character.' },
  { name: 'Juparana Bordeaux', image: './pic/Granite/Juparana-Bordeaux.jpg', description: 'Origin: Brazil. Burgundy with cream and gray swirls in flowing movement. Dramatic and uniquely beautiful.' },
  { name: 'Lady Dream', image: './pic/Granite/Lady-Dream.jpg', description: 'Origin: Brazil. White with lavender, purple, and gold veining. Feminine, elegant, with romantic natural beauty.' },
  { name: 'Madura Gold', image: './pic/Granite/Madura-Gold.jpg', description: 'Origin: India. Golden yellow with brown patterns and natural movement. A classic choice with warm, cheerful character.' },
  { name: 'Minsk Green', image: './pic/Granite/Minsk-Green.jpg', description: 'Origin: Ukraine. Dark forest green with lighter veining. Bold, natural, with a unique Eastern European color palette.' },
  { name: 'Moon White', image: './pic/Granite/Moon-White.jpg', description: 'Origin: India. Soft white with gray accents and gentle movement. Versatile, timeless, and universally appealing.' },
  { name: 'Netuno Bordeaux', image: './pic/Granite/Netuno-Bordeaux.jpg', description: 'Origin: Brazil. Burgundy with cream swirls in oceanic patterns. Dramatic movement with rich, elegant coloring.' },
  { name: 'New Venetian Gold', image: './pic/Granite/New-Venetian-Gold.webp', description: 'Origin: Brazil. Gold with brown and cream patterns. One of the most popular granites for its versatility and beauty.' },
  { name: 'River White', image: './pic/Granite/River-White.jpg', description: 'Origin: India. White with gray and burgundy veining flowing like river currents. Clean, elegant, classic beauty.' },
  { name: 'Rosso Fiorentino', image: './pic/Granite/Rosso-Fiorentino.webp', description: 'Origin: Italy. Red-brown with lighter veining. Mediterranean elegance named for the Florentine masters.' },
  { name: 'Santa Cecilia Gold', image: './pic/Granite/Santa-Cecilia-Gold.jpg', description: 'Origin: Brazil. Gold with brown and black flecks. Practical, popular, and excellent at concealing everyday wear.' },
  { name: 'Saphire Blue', image: './pic/Granite/Saphire-Blue.jpeg', description: 'Origin: Brazil. Deep sapphire blue with lighter patterns. Rare, stunning, with precious jewel-like quality.' },
  { name: 'Shivakashi', image: './pic/Granite/Shivakashi.webp', description: 'Origin: India. Pink and gray with black accents. Traditional Indian granite with soft, distinctive coloring.' },
  { name: 'Silver Stratus', image: './pic/Granite/Silver-Stratus.jpg', description: 'Origin: Brazil. Gray with white and black veining like cloud formations. Modern, sleek, contemporary elegance.' },
  { name: 'Solarius', image: './pic/Granite/Solarius.jpg', description: 'Origin: Brazil. Cream with gold veining radiating outward. Luxurious, warm, a true Brazilian treasure.' },
  { name: 'Splendor', image: './pic/Granite/Splendor.webp', description: 'Origin: Brazil. White with gold and burgundy veining. Elegant, refined, classic sophistication at its finest.' },
  { name: 'Steel Gray', image: './pic/Granite/Steel-Gray.jpg', description: 'Origin: India. Medium gray with darker patterns. Modern, industrial aesthetic with contemporary architectural appeal.' },
  { name: 'Super White', image: './pic/Granite/Super-White.jpg', description: 'Origin: Brazil. Bright white with gray veining resembling fine marble. Clean, fresh, with marble-like sophistication.' },
  { name: 'Tan Brown', image: './pic/Granite/Tan-Brown.jpg', description: 'Origin: India. Brown with black and gray flecks. One of the most popular and durable granites worldwide.' },
  { name: 'Tiger Skin Yellow', image: './pic/Granite/Tiger-Skin-Yellow.jpg', description: 'Origin: China. Yellow with brown striations like tiger stripes. Bold, exotic, a true statement maker.' },
  { name: 'Tiger Yellow Exotic', image: './pic/Granite/Tiger-Yellow-Exotic.jpg', description: 'Origin: Brazil. Golden yellow with dramatic veining. Exotic, unique, with eye-catching natural beauty.' },
  { name: 'Tropical Brown', image: './pic/Granite/Tropical-Brown.jpg', description: 'Origin: Saudi Arabia. Brown with copper and black patterns. Rich, complex, excellent at concealing imperfections.' },
  { name: 'Typhoon Bordeaux', image: './pic/Granite/Typhoon-Bordeaux.jpg', description: 'Origin: Brazil. Burgundy with cream swirls in dramatic storm-like patterns. Dynamic movement and rich coloring.' },
  { name: 'Uba Tuba', image: './pic/Granite/Uba-Tuba.jpg', description: 'Origin: Brazil. Dark green-black with gold flecks. Classic, elegant, extremely durable. A timeless favorite.' },
  { name: 'Verde Butterfly', image: './pic/Granite/Verde-Butterfly.jpg', description: 'Origin: Brazil. Green with gold and burgundy veining in butterfly-wing patterns. Exotic and luxurious.' },
  { name: 'Victoria Regia', image: './pic/Granite/Victoria-Regia.jpg', description: 'Origin: Brazil. Cream with gold and burgundy patterns. Named for the Amazonian water lily. A Brazilian treasure.' },
  { name: 'Vintage Gold', image: './pic/Granite/Vintage-Gold.webp', description: 'Origin: Brazil. Golden with brown veining and antique character. Warm, inviting, with classic appeal.' },
  { name: 'Volga Blue', image: './pic/Granite/Volga-Blue.jpg', description: 'Origin: Ukraine. Deep blue with lighter patterns. Rare and stunning, named for the great Russian river.' },
  { name: 'White Galaxy Brazil', image: './pic/Granite/White-Galaxy-Brazil.jpg', description: 'Origin: Brazil. White with brown and burgundy veining in bold patterns. Brazilian elegance with dramatic character.' },
  { name: 'White Galaxy India', image: './pic/Granite/White-Galaxy-India.webp', description: 'Origin: India. White with gray and black patterns. Clean, modern, versatile for contemporary designs.' },
  { name: 'Yellow River Classic', image: './pic/Granite/Yellow-River-Classic.webp', description: 'Origin: China. Yellow-gold with brown veining. Traditional beauty named for the legendary Yellow River.' }
];

const marbleStones = [
  { name: 'Arabescato', image: './pic/Marble/Arabescato.jpg', description: 'Origin: Italy. White marble with bold gray veining in artistic patterns. Italian quarried luxury. Classic, timeless elegance.' },
  { name: 'Arco Iris Onyx', image: './pic/Marble/Arco-Iris-Onyx.jpg', description: 'Origin: Mexico. Rainbow-colored translucent onyx. Dramatic, unique, breathtaking when backlit. A true natural wonder.' },
  { name: 'Aurora Blue', image: './pic/Marble/Aurora-Blue.webp', description: 'Origin: Brazil. Blue and white flowing patterns like northern lights. Rare, serene, exceptionally beautiful.' },
  { name: 'Botticino', image: './pic/Marble/Botticino.jpg', description: 'Origin: Italy. Beige marble with subtle cream veining. Named for the Italian town. Classic, warm, traditional.' },
  { name: 'Calacutta Gold', image: './pic/Marble/Calacutta-Gold.jpg', description: 'Origin: Italy. White with gold and gray veining. Among the most prestigious marbles. Luxurious and refined.' },
  { name: 'Crema Marfil', image: './pic/Marble/Crema-Marfil.webp', description: 'Origin: Spain. Creamy beige with light veining. The most popular Spanish marble. Soft, elegant, versatile.' },
  { name: 'Emperador Dark', image: './pic/Marble/Emperador-Dark.webp', description: 'Origin: Spain. Deep brown with white veining. Rich, dramatic, sophisticated. Premium Spanish marble.' },
  { name: 'Emperador', image: './pic/Marble/Emperador.jpg', description: 'Origin: Spain. Medium brown with white patterns. Warm, sophisticated, a classic Spanish favorite.' },
  { name: 'Grigio Carnico', image: './pic/Marble/Grigio-Carnico.jpg', description: 'Origin: Italy. Gray marble with white veining. Modern elegance with Italian heritage. Architectural sophistication.' },
  { name: 'Mystery White', image: './pic/Marble/Mystery-White.jpg', description: 'Origin: China. White with gray and gold veining in mysterious patterns. Unique, intriguing, captivating.' },
  { name: 'Rojo Alicante', image: './pic/Marble/Rojo-Alicante.webp', description: 'Origin: Spain. Rich red with white veining. Bold, striking, passionate. The spirit of Spain in stone.' },
  { name: 'White Carrara', image: './pic/Marble/White-Carrara.jpg', description: 'Origin: Italy. Classic white with gray veining. The most iconic marble in history. Timeless, legendary beauty.' }
];

const stainlessSteelSinks = [
  { name: 'US 103', pdf: './Sink/Stainless-Steel/US 103.pdf' },
  { name: 'US 105', pdf: './Sink/Stainless-Steel/US 105.pdf' },
  { name: 'US 204', pdf: './Sink/Stainless-Steel/US 204.pdf' },
  { name: 'US 206', pdf: './Sink/Stainless-Steel/US 206.pdf' },
  { name: 'US 2318', pdf: './Sink/Stainless-Steel/US 2318.pdf' },
  { name: 'US 301', pdf: './Sink/Stainless-Steel/US 301.pdf' },
  { name: 'US 307', pdf: './Sink/Stainless-Steel/US 307.pdf' },
  { name: 'US 309', pdf: './Sink/Stainless-Steel/US 309.pdf' },
  { name: 'US 3219', pdf: './Sink/Stainless-Steel/US 3219.pdf' },
  { name: 'US 905', pdf: './Sink/Stainless-Steel/US 905.pdf' },
  { name: 'US 905R', pdf: './Sink/Stainless-Steel/US 905R.pdf' },
  { name: 'US 907', pdf: './Sink/Stainless-Steel/US 907.pdf' },
  { name: 'US 907 R', pdf: './Sink/Stainless-Steel/US 907 R.pdf' },
  { name: 'US 3018', pdf: './Sink/Stainless-Steel/US-3018.pdf' },
  { name: 'US 3021 Apron', pdf: './Sink/Stainless-Steel/US-3021 APRON.pdf' },
  { name: 'US 3219 Equal', pdf: './Sink/Stainless-Steel/US-3219 EQUAL.pdf' }
];

const ceramicSinks = [
  { name: 'US 1714W', pdf: './Sink/Ceramic/US-1714W.pdf' },
  { name: 'US 1812', pdf: './Sink/Ceramic/US-1812.pdf' },
  { name: 'Ceramic White', pdf: './Sink/Ceramic/US-Ceramic-White.pdf' }
];

function loadStones(category) {
  const grid = document.getElementById('stones-grid');
  if (!grid) return;

  grid.innerHTML = '';
  const stones = category === 'granite' ? graniteStones : marbleStones;

  stones.forEach((stone, index) => {
    const item = document.createElement('div');
    item.className = 'stone-item stagger-item';
    item.style.transitionDelay = `${index * 0.05}s`;
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

    setTimeout(() => item.classList.add('stagger-revealed'), index * 50 + 100);
  });
}

function loadSinks(category) {
  const grid = document.getElementById('sinks-grid');
  if (!grid) return;

  grid.innerHTML = '';
  const sinks = category === 'stainless' ? stainlessSteelSinks : ceramicSinks;

  sinks.forEach((sink, index) => {
    const item = document.createElement('div');
    item.className = 'sink-item stagger-item';
    item.style.transitionDelay = `${index * 0.05}s`;
    item.innerHTML = `
      <a href="${sink.pdf}" target="_blank" rel="noopener noreferrer" class="sink-link" aria-label="View ${sink.name} specifications">
        <div class="sink-name">${sink.name}</div>
      </a>
    `;
    grid.appendChild(item);

    setTimeout(() => item.classList.add('stagger-revealed'), index * 50 + 100);
  });
}

function initHeroParticles() {
  const heroSection = document.querySelector('.hero');
  if (!heroSection) return;

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

  const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });
    animationId = requestAnimationFrame(animate);
  }

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

function initGlowEffect() {
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
}

function initSectionParallax() {
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
}

document.addEventListener('DOMContentLoaded', () => {
  initPremiumEffects();
  initMobileMenu();
  initNavbarScroll();

  if (document.getElementById('stones-grid')) {
    loadStones('granite');
    loadSinks('stainless');
  }

  initHeroParticles();
  initGlowEffect();
  initSectionParallax();

  const stoneCategoryButtons = document.querySelectorAll('[data-category]');
  stoneCategoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      stoneCategoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      loadStones(button.dataset.category);
    });
  });

  const sinkCategoryButtons = document.querySelectorAll('[data-sink-category]');
  sinkCategoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      sinkCategoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      loadSinks(button.dataset.sinkCategory);
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
