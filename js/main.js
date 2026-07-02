// ---- NAV SCROLL ----
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ---- MOBILE NAV ----
const toggle = document.querySelector('.nav-toggle');
const mobileNav = document.querySelector('.nav-mobile');
if (toggle && mobileNav) {
  toggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileNav.classList.remove('open'));
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

// ---- CONTACT FORM ----
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const success = document.getElementById('contact-success');
    if (success) {
      success.style.display = 'block';
      contactForm.reset();
      setTimeout(() => success.style.display = 'none', 5000);
    }
  });
}

// ---- COMMISSION FORM ----
const commissionForm = document.getElementById('commission-form');
if (commissionForm) {
  commissionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const success = document.getElementById('commission-success');
    if (success) {
      success.style.display = 'block';
      commissionForm.reset();
      setTimeout(() => success.style.display = 'none', 5000);
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
