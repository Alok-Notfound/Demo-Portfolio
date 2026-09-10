/* ==========================================================================
   APPLICATION NAVIGATION & INTERACTION LIFECYCLE
   assets/js/app.js
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Mobile Menu Drawer Handling
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const primaryNav = document.getElementById('primary-nav');

  if (mobileToggle && primaryNav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('nav-open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile nav when clicking any link
    primaryNav.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        primaryNav.classList.remove('nav-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active Link Highlighting with IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
  }

  // Set current year in colophon footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
