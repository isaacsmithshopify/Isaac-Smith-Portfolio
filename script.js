/* =========================================
   ISAAC SMITH PORTFOLIO
   JavaScript Interactions
========================================= */

// MOBILE NAVIGATION

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    const isOpen = navLinks.classList.contains('active');

    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.innerHTML = isOpen ? '&times;' : '&#9776;';
  });

  // Close menu after clicking a navigation link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.innerHTML = '&#9776;';
    });
  });
}

// SMOOTH SCROLLING

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (event) {
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// SCROLL REVEAL ANIMATIONS

const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  revealElements.forEach(element => {
    observer.observe(element);
  });
} else {
  revealElements.forEach(element => {
    element.classList.add('visible');
  });
}
