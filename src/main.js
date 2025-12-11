import './style.css';

const interiorImages = [
  '/pic/Interior/1.jpg',
  '/pic/Interior/2.jpg',
  '/pic/Interior/3.jpg',
  '/pic/Interior/4.jpg',
  '/pic/Interior/5.webp',
  '/pic/Interior/6.jpg',
  '/pic/Interior/7.jpg',
  '/pic/Interior/8.jpg',
  '/pic/Interior/9.jpg',
  '/pic/Interior/10.webp'
];

const exteriorImages = [
  '/pic/Exterior/Annex Exterior.jpeg',
  '/pic/Exterior/Boro.jpg',
  '/pic/Exterior/Millcreek Exterior 2.jpg',
  '/pic/Exterior/Old Georgetown Exterior.jpeg',
  '/pic/Exterior/PARCEL8.jpg',
  '/pic/Exterior/warf.jpg'
];

const graniteStones = [
  { name: 'Baltic Brown', image: '/pic/Granite/Baltic-Brown.jpg' },
  { name: 'Black Forest', image: '/pic/Granite/Black-Forest.jpg' },
  { name: 'Black Galaxy', image: '/pic/Granite/Black-Galaxy.jpg' },
  { name: 'Black Pearl', image: '/pic/Granite/Black-Pearl.webp' },
  { name: 'Blanco Taupe', image: '/pic/Granite/Blanco-Taupe.jpg' },
  { name: 'Blue Eyes', image: '/pic/Granite/Blue-Eyes.jpg' },
  { name: 'Blue Luise', image: '/pic/Granite/Blue-Luise.jpg' },
  { name: 'Blue Pearl', image: '/pic/Granite/Blue-Pearl.jpg' },
  { name: 'Butterfly Gold', image: '/pic/Granite/Butterfly-Gold.jpg' },
  { name: 'Capolavoro', image: '/pic/Granite/Capolavoro.jpg' },
  { name: 'Copper Canyon', image: '/pic/Granite/Copper-Canyon.jpg' },
  { name: 'Crazy Horse', image: '/pic/Granite/Crazy-Horse.jpg' },
  { name: 'Crema Bordeaux', image: '/pic/Granite/Crema-Bordeaux.jpg' },
  { name: 'Crema Royale', image: '/pic/Granite/Crema-Royale.jpg' },
  { name: 'Desert Gold', image: '/pic/Granite/Desert-Gold.jpg' },
  { name: 'Emerald Green', image: '/pic/Granite/Emerald-Green.jpg' },
  { name: 'Emerald Pearl', image: '/pic/Granite/Emerald-Pearl.jpg' },
  { name: 'Gardena White', image: '/pic/Granite/Gardena-White.jpg' },
  { name: 'Giallo Fiorito', image: '/pic/Granite/Giallo-Fiorito.jpg' },
  { name: 'Giallo Napoleone', image: '/pic/Granite/Giallo-Napoleone.jpg' },
  { name: 'Giallo Ornamental', image: '/pic/Granite/Giallo-Ornamental.jpg' },
  { name: 'Giblee', image: '/pic/Granite/Giblee.jpg' },
  { name: 'Golden Fantasy', image: '/pic/Granite/Golden-Fantasy.jpg' },
  { name: 'Golden Leaf', image: '/pic/Granite/Golden-Leaf.webp' },
  { name: 'Golden Persa', image: '/pic/Granite/Golden-Persa.jpg' },
  { name: 'Ice White', image: '/pic/Granite/Ice-White.jpg' },
  { name: 'Imperial Coffee', image: '/pic/Granite/Imperial-Coffee.jpeg' },
  { name: 'Indian Mahogany', image: '/pic/Granite/Indian-Mahogany.jpg' },
  { name: 'Juparana Bordeaux', image: '/pic/Granite/Juparana-Bordeaux.jpg' },
  { name: 'Lady Dream', image: '/pic/Granite/Lady-Dream.jpg' },
  { name: 'Madura Gold', image: '/pic/Granite/Madura-Gold.jpg' },
  { name: 'Minsk Green', image: '/pic/Granite/Minsk-Green.jpg' },
  { name: 'Moon White', image: '/pic/Granite/Moon-White.jpg' },
  { name: 'Netuno Bordeaux', image: '/pic/Granite/Netuno-Bordeaux.jpg' },
  { name: 'New Venetian Gold', image: '/pic/Granite/New-Venetian-Gold.webp' },
  { name: 'River White', image: '/pic/Granite/River-White.jpg' },
  { name: 'Rosso Fiorentino', image: '/pic/Granite/Rosso-Fiorentino.webp' },
  { name: 'Santa Cecilia Gold', image: '/pic/Granite/Santa-Cecilia-Gold.jpg' },
  { name: 'Saphire Blue', image: '/pic/Granite/Saphire-Blue.jpeg' },
  { name: 'Shivakashi', image: '/pic/Granite/Shivakashi.webp' },
  { name: 'Silver Stratus', image: '/pic/Granite/Silver-Stratus.jpg' },
  { name: 'Solarius', image: '/pic/Granite/Solarius.jpg' },
  { name: 'Splendor', image: '/pic/Granite/Splendor.webp' },
  { name: 'Steel Gray', image: '/pic/Granite/Steel-Gray.jpg' },
  { name: 'Super White', image: '/pic/Granite/Super-White.jpg' },
  { name: 'Tan Brown', image: '/pic/Granite/Tan-Brown.jpg' },
  { name: 'Tiger Skin Yellow', image: '/pic/Granite/Tiger-Skin-Yellow.jpg' },
  { name: 'Tiger Yellow Exotic', image: '/pic/Granite/Tiger-Yellow-Exotic.jpg' },
  { name: 'Tropical Brown', image: '/pic/Granite/Tropical-Brown.jpg' },
  { name: 'Typhoon Bordeaux', image: '/pic/Granite/Typhoon-Bordeaux.jpg' },
  { name: 'Uba Tuba', image: '/pic/Granite/Uba-Tuba.jpg' },
  { name: 'Verde Butterfly', image: '/pic/Granite/Verde-Butterfly.jpg' },
  { name: 'Victoria Regia', image: '/pic/Granite/Victoria-Regia.jpg' },
  { name: 'Vintage Gold', image: '/pic/Granite/Vintage-Gold.webp' },
  { name: 'Volga Blue', image: '/pic/Granite/Volga-Blue.jpg' },
  { name: 'White Galaxy Brazil', image: '/pic/Granite/White-Galaxy-Brazil.jpg' },
  { name: 'White Galaxy India', image: '/pic/Granite/White-Galaxy-India.webp' },
  { name: 'Yellow River Classic', image: '/pic/Granite/Yellow-River-Classic.webp' }
];

const marbleStones = [
  { name: 'Arabescato', image: '/pic/Marble/Arabescato.jpg' },
  { name: 'Arco Iris Onyx', image: '/pic/Marble/Arco-Iris-Onyx.jpg' },
  { name: 'Aurora Blue', image: '/pic/Marble/Aurora-Blue.webp' },
  { name: 'Botticino', image: '/pic/Marble/Botticino.jpg' },
  { name: 'Calacutta Gold', image: '/pic/Marble/Calacutta-Gold.jpg' },
  { name: 'Crema Marfil', image: '/pic/Marble/Crema-Marfil.webp' },
  { name: 'Emperador Dark', image: '/pic/Marble/Emperador-Dark.webp' },
  { name: 'Emperador', image: '/pic/Marble/Emperador.jpg' },
  { name: 'Grigio Carnico', image: '/pic/Marble/Grigio-Carnico.jpg' },
  { name: 'Mystery White', image: '/pic/Marble/Mystery-White.jpg' },
  { name: 'Rojo Alicante', image: '/pic/Marble/Rojo-Alicante.webp' },
  { name: 'White Carrara', image: '/pic/Marble/White-Carrara.jpg' }
];

const stainlessSteelSinks = [
  { name: 'US 103', pdf: '/Sink/Stainless-Steel/US 103.pdf' },
  { name: 'US 105', pdf: '/Sink/Stainless-Steel/US 105.pdf' },
  { name: 'US 204', pdf: '/Sink/Stainless-Steel/US 204.pdf' },
  { name: 'US 206', pdf: '/Sink/Stainless-Steel/US 206.pdf' },
  { name: 'US 2318', pdf: '/Sink/Stainless-Steel/US 2318.pdf' },
  { name: 'US 301', pdf: '/Sink/Stainless-Steel/US 301.pdf' },
  { name: 'US 307', pdf: '/Sink/Stainless-Steel/US 307.pdf' },
  { name: 'US 309', pdf: '/Sink/Stainless-Steel/US 309.pdf' },
  { name: 'US 3219', pdf: '/Sink/Stainless-Steel/US 3219.pdf' },
  { name: 'US 905', pdf: '/Sink/Stainless-Steel/US 905.pdf' },
  { name: 'US 905R', pdf: '/Sink/Stainless-Steel/US 905R.pdf' },
  { name: 'US 907', pdf: '/Sink/Stainless-Steel/US 907.pdf' },
  { name: 'US 907 R', pdf: '/Sink/Stainless-Steel/US 907 R.pdf' },
  { name: 'US 3018', pdf: '/Sink/Stainless-Steel/US-3018.pdf' },
  { name: 'US 3021 Apron', pdf: '/Sink/Stainless-Steel/US-3021 APRON.pdf' },
  { name: 'US 3219 Equal', pdf: '/Sink/Stainless-Steel/US-3219 EQUAL.pdf' }
];

const ceramicSinks = [
  { name: 'US 1714W', pdf: '/Sink/Ceramic/US-1714W.pdf' },
  { name: 'US 1812', pdf: '/Sink/Ceramic/US-1812.pdf' },
  { name: 'Ceramic White', pdf: '/Sink/Ceramic/US-Ceramic-White.pdf' }
];

function loadInteriorGallery() {
  const gallery = document.getElementById('interior-gallery');
  interiorImages.forEach(image => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `<img src="${image}" alt="Interior work" loading="lazy">`;
    gallery.appendChild(item);
  });
}

function loadExteriorGallery() {
  const gallery = document.getElementById('exterior-gallery');
  exteriorImages.forEach(image => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `<img src="${image}" alt="Exterior work" loading="lazy">`;
    gallery.appendChild(item);
  });
}

function loadStones(category) {
  const grid = document.getElementById('stones-grid');
  grid.innerHTML = '';
  const stones = category === 'granite' ? graniteStones : marbleStones;

  stones.forEach(stone => {
    const item = document.createElement('div');
    item.className = 'stone-item';
    item.innerHTML = `
      <img src="${stone.image}" alt="${stone.name}" loading="lazy">
      <div class="stone-name">${stone.name}</div>
    `;
    grid.appendChild(item);
  });
}

function loadSinks(category) {
  const grid = document.getElementById('sinks-grid');
  grid.innerHTML = '';
  const sinks = category === 'stainless' ? stainlessSteelSinks : ceramicSinks;

  sinks.forEach(sink => {
    const item = document.createElement('div');
    item.className = 'sink-item';
    item.innerHTML = `
      <a href="${sink.pdf}" target="_blank" class="sink-link">
        <div class="sink-icon">📄</div>
        <div class="sink-name">${sink.name}</div>
      </a>
    `;
    grid.appendChild(item);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadInteriorGallery();
  loadExteriorGallery();
  loadStones('granite');
  loadSinks('stainless');

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

  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

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
