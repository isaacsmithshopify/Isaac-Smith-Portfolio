
/* =========================================
   ISAAC SMITH PORTFOLIO
   Website Interactions
========================================= */

// MOBILE NAVIGATION

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {

  menuToggle.addEventListener('click', () => {

    const isOpen = navLinks.classList.toggle('active');

    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.setAttribute(
      'aria-label',
      isOpen ? 'Close navigation' : 'Open navigation'
    );

  });

  // Close menu after clicking a link

  navLinks.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {

      navLinks.classList.remove('active');

      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');

    });

  });

  // Close menu when clicking outside

  document.addEventListener('click', event => {

    if (
      !menuToggle.contains(event.target) &&
      !navLinks.contains(event.target)
    ) {

      navLinks.classList.remove('active');

      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');

    }

  });

}

// AUTOMATIC COPYRIGHT YEAR

const yearElement = document.querySelector('#year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// SMOOTH SCROLLING

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener('click', function(event) {

    const target = document.querySelector(
      this.getAttribute('href')
    );

    if (target) {

      event.preventDefault();

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    }

  });

});
