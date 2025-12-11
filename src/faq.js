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

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    faqItems.forEach(otherItem => {
      otherItem.classList.remove('active');
      const icon = otherItem.querySelector('.faq-icon');
      if (icon) icon.textContent = '+';
    });

    if (!isActive) {
      item.classList.add('active');
      const icon = item.querySelector('.faq-icon');
      if (icon) icon.textContent = '−';
    }
  });
});
