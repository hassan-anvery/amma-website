// ---- NAV SCROLL ----
const nav = document.querySelector('.nav');
const hasHero = !!document.querySelector('.hero');
if (!hasHero) nav.classList.add('scrolled');
window.addEventListener('scroll', () => {
  if (hasHero) nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ---- MOBILE NAV ----
const toggle = document.querySelector('.nav-toggle');
const mobileNav = document.querySelector('.nav-mobile');
if (toggle && mobileNav) {
  toggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
  mobileNav.querySelectorAll('.nav-mobile-group-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const sub = document.getElementById(btn.getAttribute('aria-controls'));
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
      sub.classList.toggle('open', !expanded);
    });
  });
}

// ---- LIGHTBOX ----
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.querySelectorAll('[data-lightbox]').forEach(el => {
  el.addEventListener('click', () => {
    lightboxImg.src = el.dataset.lightbox;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

// ---- SMOOTH SCROLL for nav links ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ---- QUILT ARCHIVE REVEAL ----
const quiltGrid = document.querySelector('[data-quilt-grid]');
const loadMoreBtn = document.querySelector('[data-load-more-quilts]');
const backToTopBtn = document.querySelector('[data-quilt-back-to-top]');

if (quiltGrid && loadMoreBtn && backToTopBtn) {
  const cards = Array.from(quiltGrid.querySelectorAll('.quilt-card'));
  const batchSize = 4;
  let visible = 0;

  function showNext() {
    cards.slice(visible, visible + batchSize).forEach(c => c.classList.remove('is-hidden'));
    visible = Math.min(visible + batchSize, cards.length);
    if (visible >= cards.length) {
      loadMoreBtn.classList.add('is-hidden');
      backToTopBtn.classList.remove('is-hidden');
    }
  }

  cards.forEach(c => c.classList.add('is-hidden')); // hide all on load
  showNext();                                         // reveal first batch

  loadMoreBtn.addEventListener('click', showNext);

  backToTopBtn.addEventListener('click', () => {
    const target = document.getElementById('quilts-top');
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  });
}
