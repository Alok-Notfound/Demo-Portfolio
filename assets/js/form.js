/* ==========================================================================
   FORM CONTROLLER & EMAIL CLIPBOARD
   assets/js/form.js
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 1. Email Clipboard Copy
  const copyBtn = document.getElementById('copy-email-btn');
  const emailTextEl = document.getElementById('contact-email');
  const ariaStatus = document.getElementById('aria-status');

  if (copyBtn && emailTextEl) {
    copyBtn.addEventListener('click', async () => {
      const email = emailTextEl.textContent.trim();
      const copyTextSpan = copyBtn.querySelector('.copy-text');

      try {
        await navigator.clipboard.writeText(email);
        if (copyTextSpan) copyTextSpan.textContent = 'Copied!';
        if (ariaStatus) ariaStatus.textContent = 'Email address copied to clipboard';

        setTimeout(() => {
          if (copyTextSpan) copyTextSpan.textContent = 'Copy Email';
        }, 2500);
      } catch (err) {
        if (copyTextSpan) copyTextSpan.textContent = 'Failed';
      }
    });
  }

  // 2. Form Inline Validation (RULES.md Guideline 3.3.1)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const messageInput = document.getElementById('form-message');

      const nameError = document.getElementById('name-error');
      const emailError = document.getElementById('email-error');
      const messageError = document.getElementById('message-error');

      // Clear previous error messages
      if (nameError) nameError.textContent = '';
      if (emailError) emailError.textContent = '';
      if (messageError) messageError.textContent = '';

      if (nameInput && !nameInput.value.trim()) {
        if (nameError) nameError.textContent = 'Please enter your name.';
        nameInput.setAttribute('aria-invalid', 'true');
        isValid = false;
      } else if (nameInput) {
        nameInput.removeAttribute('aria-invalid');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailInput && !emailRegex.test(emailInput.value.trim())) {
        if (emailError) emailError.textContent = 'Please enter a valid email address.';
        emailInput.setAttribute('aria-invalid', 'true');
        isValid = false;
      } else if (emailInput) {
        emailInput.removeAttribute('aria-invalid');
      }

      if (messageInput && messageInput.value.trim().length < 10) {
        if (messageError) messageError.textContent = 'Message must be at least 10 characters.';
        messageInput.setAttribute('aria-invalid', 'true');
        isValid = false;
      } else if (messageInput) {
        messageInput.removeAttribute('aria-invalid');
      }

      if (isValid) {
        const submitBtn = contactForm.querySelector('.form-submit-btn span');
        if (submitBtn) submitBtn.textContent = 'Message Received!';
        if (ariaStatus) ariaStatus.textContent = 'Message submitted successfully.';
        contactForm.reset();

        setTimeout(() => {
          if (submitBtn) submitBtn.textContent = 'Send Message';
        }, 3000);
      }
    });
  }
});
