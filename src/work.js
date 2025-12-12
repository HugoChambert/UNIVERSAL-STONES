// Removed CSS import - CSS is loaded via <link> tag in HTML

const interiorImages = [
  './pic/Interior/1.jpg',
  './pic/Interior/2.jpg',
  './pic/Interior/3.jpg',
  './pic/Interior/4.jpg',
  './pic/Interior/5.webp',
  './pic/Interior/6.jpg',
  './pic/Interior/7.jpg',
  './pic/Interior/8.jpg',
  './pic/Interior/9.jpg',
  './pic/Interior/10.webp'
];

const notableProjects = [
  {
    name: 'Annex',
    image: './pic/Exterior/Annex Exterior.jpeg',
    description: 'A stunning modern mixed-use development in Washington D.C. featuring premium granite facades and contemporary design.',
    details: 'The Annex represents the perfect blend of functionality and aesthetic excellence. Our team installed over 15,000 square feet of premium granite cladding, creating a sophisticated exterior that stands as a landmark in the neighborhood.',
    awards: ['ABC Excellence in Construction Award 2019', 'NVBIA Best Commercial Project 2019'],
    facts: ['Completed in 18 months', '15,000+ sq ft of granite installed', 'LEED Gold Certified']
  },
  {
    name: 'Boro',
    image: './pic/Exterior/Boro.jpg',
    description: 'The Boro is a transformative mixed-use development in Tysons, Virginia, showcasing exceptional stonework throughout its expansive complex.',
    details: 'This landmark project required precision installation of diverse stone materials across multiple buildings. Our team delivered flawless execution on one of the region\'s most ambitious developments, contributing to the revitalization of Tysons Corner.',
    awards: ['HBAV Building Excellence Award 2020', 'Urban Land Institute Award of Excellence'],
    facts: ['4 million sq ft development', 'Multiple building facades completed', 'Featured in Architectural Digest']
  },
  {
    name: 'Millcreek',
    image: './pic/Exterior/Millcreek Exterior 2.jpg',
    description: 'An upscale residential community featuring elegant stone exteriors and high-end interior stonework throughout.',
    details: 'Millcreek exemplifies luxury residential stonework. Each home features custom granite and marble installations, from stunning kitchen countertops to sophisticated bathroom vanities. The exterior stonework creates a cohesive, premium aesthetic throughout the community.',
    awards: ['Best Residential Community Design 2021'],
    facts: ['120+ luxury homes completed', 'Custom stonework in every residence', 'Award-winning community design']
  },
  {
    name: 'Old Georgetown',
    image: './pic/Exterior/Old Georgetown Exterior.jpeg',
    description: 'A prestigious commercial development in historic Georgetown, blending traditional elegance with modern luxury.',
    details: 'Old Georgetown required meticulous attention to historic preservation guidelines while delivering contemporary functionality. Our stone installations honor the area\'s heritage while providing modern durability and aesthetic appeal.',
    awards: ['Historic Preservation Award 2020', 'Georgetown Design Excellence Award'],
    facts: ['Historic district compliance maintained', 'Traditional masonry techniques utilized', 'Featured in Washington Post']
  },
  {
    name: 'Parcel 8',
    image: './pic/Exterior/PARCEL8.jpg',
    description: 'A cutting-edge urban development featuring striking modern architecture and innovative stone applications.',
    details: 'Parcel 8 pushed the boundaries of contemporary stone installation techniques. The project showcases large-format stone panels and creative applications that create a dramatic urban presence while maintaining the highest standards of craftsmanship.',
    awards: ['NVBIA Innovation Award 2022', 'Modern Architecture Prize 2022'],
    facts: ['Over 20,000 sq ft of stone facade', 'Innovative large-format panel installation', 'Zero safety incidents during construction']
  },
  {
    name: 'The Wharf',
    image: './pic/Exterior/warf.jpg',
    description: 'An iconic waterfront destination along the Potomac River, featuring world-class stonework in a spectacular setting.',
    details: 'The Wharf represents one of Washington D.C.\'s most significant waterfront transformations. Our contribution includes extensive stone installations across multiple buildings, combining durability with aesthetic excellence in a demanding marine environment.',
    awards: ['National Capital Excellence Award 2018', 'Waterfront Development of the Year 2018', 'ABC National Excellence Award'],
    facts: ['3+ million visitors annually', 'Marine-grade stone installation', 'Multi-phase, multi-year project', 'Featured in National Geographic']
  }
];

let currentInteriorSlide = 0;
let currentNotableSlide = 0;

function loadInteriorGallery() {
  const gallery = document.getElementById('interior-gallery');
  if (!gallery) return;

  gallery.innerHTML = `
    <div class="slideshow-container">
      <div class="slides-wrapper" id="interior-slides"></div>
      <button class="slide-nav prev" onclick="changeInteriorSlide(-1)" aria-label="Previous slide">‹</button>
      <button class="slide-nav next" onclick="changeInteriorSlide(1)" aria-label="Next slide">›</button>
      <div class="slide-dots" id="interior-dots"></div>
    </div>
  `;

  const slidesWrapper = document.getElementById('interior-slides');
  const dotsContainer = document.getElementById('interior-dots');

  interiorImages.forEach((image, index) => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    if (index === 0) slide.classList.add('active');
    slide.innerHTML = `<img src="${image}" alt="Interior work ${index + 1}" loading="lazy">`;
    slidesWrapper.appendChild(slide);

    const dot = document.createElement('span');
    dot.className = 'dot';
    if (index === 0) dot.classList.add('active');
    dot.onclick = () => goToInteriorSlide(index);
    dotsContainer.appendChild(dot);
  });
}

function changeInteriorSlide(direction) {
  const slides = document.querySelectorAll('#interior-slides .slide');
  const dots = document.querySelectorAll('#interior-dots .dot');

  slides[currentInteriorSlide].classList.remove('active');
  dots[currentInteriorSlide].classList.remove('active');

  currentInteriorSlide += direction;
  if (currentInteriorSlide >= slides.length) currentInteriorSlide = 0;
  if (currentInteriorSlide < 0) currentInteriorSlide = slides.length - 1;

  slides[currentInteriorSlide].classList.add('active');
  dots[currentInteriorSlide].classList.add('active');
}

function goToInteriorSlide(index) {
  const slides = document.querySelectorAll('#interior-slides .slide');
  const dots = document.querySelectorAll('#interior-dots .dot');

  slides[currentInteriorSlide].classList.remove('active');
  dots[currentInteriorSlide].classList.remove('active');

  currentInteriorSlide = index;

  slides[currentInteriorSlide].classList.add('active');
  dots[currentInteriorSlide].classList.add('active');
}

window.changeInteriorSlide = changeInteriorSlide;
window.goToInteriorSlide = goToInteriorSlide;

function loadNotableProjects() {
  const gallery = document.getElementById('notable-gallery');
  if (!gallery) return;

  gallery.innerHTML = `
    <div class="slideshow-container notable-slideshow">
      <div class="slides-wrapper" id="notable-slides"></div>
      <button class="slide-nav prev" onclick="changeNotableSlide(-1)" aria-label="Previous project">‹</button>
      <button class="slide-nav next" onclick="changeNotableSlide(1)" aria-label="Next project">›</button>
      <div class="slide-dots" id="notable-dots"></div>
    </div>
  `;

  const slidesWrapper = document.getElementById('notable-slides');
  const dotsContainer = document.getElementById('notable-dots');

  notableProjects.forEach((project, index) => {
    const slide = document.createElement('div');
    slide.className = 'slide notable-slide';
    if (index === 0) slide.classList.add('active');

    const awardsHTML = project.awards.map(award => `<li>${award}</li>`).join('');
    const factsHTML = project.facts.map(fact => `<li>${fact}</li>`).join('');

    slide.innerHTML = `
      <div class="notable-slide-content">
        <div class="notable-slide-image">
          <img src="${project.image}" alt="${project.name}" loading="lazy">
        </div>
        <div class="notable-slide-info">
          <h3 class="notable-project-title">${project.name}</h3>
          <p class="notable-project-description">${project.description}</p>
          <p class="notable-project-details">${project.details}</p>

          <div class="notable-highlights">
            <div class="notable-awards">
              <h4>Awards & Recognition</h4>
              <ul>${awardsHTML}</ul>
            </div>

            <div class="notable-facts">
              <h4>Project Highlights</h4>
              <ul>${factsHTML}</ul>
            </div>
          </div>
        </div>
      </div>
    `;
    slidesWrapper.appendChild(slide);

    const dot = document.createElement('span');
    dot.className = 'dot';
    if (index === 0) dot.classList.add('active');
    dot.onclick = () => goToNotableSlide(index);
    dot.setAttribute('aria-label', project.name);
    dotsContainer.appendChild(dot);
  });
}

function changeNotableSlide(direction) {
  const slides = document.querySelectorAll('#notable-slides .slide');
  const dots = document.querySelectorAll('#notable-dots .dot');

  slides[currentNotableSlide].classList.remove('active');
  dots[currentNotableSlide].classList.remove('active');

  currentNotableSlide += direction;
  if (currentNotableSlide >= slides.length) currentNotableSlide = 0;
  if (currentNotableSlide < 0) currentNotableSlide = slides.length - 1;

  slides[currentNotableSlide].classList.add('active');
  dots[currentNotableSlide].classList.add('active');
}

function goToNotableSlide(index) {
  const slides = document.querySelectorAll('#notable-slides .slide');
  const dots = document.querySelectorAll('#notable-dots .dot');

  slides[currentNotableSlide].classList.remove('active');
  dots[currentNotableSlide].classList.remove('active');

  currentNotableSlide = index;

  slides[currentNotableSlide].classList.add('active');
  dots[currentNotableSlide].classList.add('active');
}

window.changeNotableSlide = changeNotableSlide;
window.goToNotableSlide = goToNotableSlide;

document.addEventListener('DOMContentLoaded', () => {
  loadInteriorGallery();
  loadNotableProjects();

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
});
