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

// ---- FORMS — Netlify Forms submission via fetch ----
function submitToNetlify(form, successId) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString()
    })
      .then((res) => {
        if (res.ok) {
          const success = document.getElementById(successId);
          if (success) {
            success.style.display = 'block';
            form.reset();
            setTimeout(() => { success.style.display = 'none'; }, 5000);
          }
        } else {
          alert('Sorry, something went wrong. Please try again.');
        }
      })
      .catch(() => {
        alert('Sorry, something went wrong. Please try again.');
      });
  });
}

const commissionForm = document.getElementById('commission-form');
if (commissionForm) submitToNetlify(commissionForm, 'commission-success');

const contactForm = document.getElementById('contact-form');
if (contactForm) submitToNetlify(contactForm, 'contact-success');

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
