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
  { name: 'Annex', image: './pic/Exterior/Annex Exterior.jpeg' },
  { name: 'Boro', image: './pic/Exterior/Boro.jpg' },
  { name: 'Millcreek', image: './pic/Exterior/Millcreek Exterior 2.jpg' },
  { name: 'Old Georgetown', image: './pic/Exterior/Old Georgetown Exterior.jpeg' },
  { name: 'Parcel 8', image: './pic/Exterior/PARCEL8.jpg' },
  { name: 'The Wharf', image: './pic/Exterior/warf.jpg' }
];

function loadInteriorGallery() {
  const gallery = document.getElementById('interior-gallery');
  if (!gallery) return;

  interiorImages.forEach(image => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `<img src="${image}" alt="Interior work" loading="lazy">`;
    gallery.appendChild(item);
  });
}

function loadNotableProjects() {
  const gallery = document.getElementById('notable-gallery');
  if (!gallery) return;

  notableProjects.forEach(project => {
    const item = document.createElement('div');
    item.className = 'notable-project-item';
    item.innerHTML = `
      <img src="${project.image}" alt="${project.name}" loading="lazy">
      <div class="project-overlay">
        <div class="project-name">${project.name}</div>
      </div>
    `;
    gallery.appendChild(item);
  });
}

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
