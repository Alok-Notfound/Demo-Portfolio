/* ==========================================================================
   THEME CONTROLLER & FOUC-FREE MANAGER
   assets/js/theme.js
   Specification: ARCHITECTURE.md Section 5.1 & RULES.md Section 7
   ========================================================================== */

(function () {
  'use strict';

  const STORAGE_KEY = 'portfolio-theme';
  const root = document.documentElement;

  function getSystemPreference() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function getCurrentTheme() {
    return root.getAttribute('data-theme') || localStorage.getItem(STORAGE_KEY) || getSystemPreference();
  }

  function applyTheme(theme, announce = false) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      const isDark = theme === 'dark';
      toggleBtn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      toggleBtn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    }

    if (announce) {
      const ariaStatus = document.getElementById('aria-status');
      if (ariaStatus) {
        ariaStatus.textContent = `Theme changed to ${theme} mode`;
      }
    }
  }

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    const initialTheme = getCurrentTheme();
    applyTheme(initialTheme, false);

    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const nextTheme = getCurrentTheme() === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme, true);
      });
    }

    // Listen to OS system preference changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(STORAGE_KEY)) {
          applyTheme(e.matches ? 'dark' : 'light', true);
        }
      });
    }
  });
})();
