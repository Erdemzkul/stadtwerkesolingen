const header = document.querySelector('[data-header]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const revealItems = document.querySelectorAll('.reveal');
if (reduceMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  });
});

const filterButtons = document.querySelectorAll('[data-filter]');
const evidenceItems = document.querySelectorAll('[data-status]');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle('active', item === button));
    evidenceItems.forEach((item) => {
      item.classList.toggle('hidden', filter !== 'all' && item.dataset.status !== filter);
    });
  });
});

const mapButtons = document.querySelectorAll('[data-map-src]');
const mapImage = document.querySelector('[data-geo-map]');
const mapTitle = document.querySelector('[data-geo-title]');
const mapCaption = document.querySelector('[data-geo-caption]');

mapButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (!mapImage || !mapTitle || !mapCaption) return;
    mapButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
    });
    mapImage.src = button.dataset.mapSrc;
    mapImage.alt = button.dataset.mapAlt;
    mapTitle.textContent = button.dataset.mapTitle;
    mapCaption.textContent = button.dataset.mapCaption;
  });
});
