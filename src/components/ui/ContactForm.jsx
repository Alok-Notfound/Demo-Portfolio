import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import { profileData } from '@/data/profile';

const TARGET_EMAIL = 'alokp0039@gmail.com';

// Common disposable / burner / temporary email service domains
const DISPOSABLE_DOMAINS = new Set([
  'tempmail.com', 'temp-mail.org', 'tempmail.net', '10minutemail.com', '10minutemail.net',
  'guerrillamail.com', 'guerrillamail.net', 'guerrillamail.org', 'guerrillamailblock.com',
  'sharklasers.com', 'grr.la', 'pokemail.net', 'spam4.me',
  'mailinator.com', 'mailinator.net', 'mailinator2.com', 'mailin8r.com',
  'throwawaymail.com', 'yopmail.com', 'yopmail.fr', 'yopmail.net',
  'dispostable.com', 'trashmail.com', 'trashmail.net', 'trashmail.me',
  'getairmail.com', 'mohmal.com', 'fakeinbox.com', 'burnermail.io',
  'crazymailing.com', 'nada.ltd', 'inboxkitten.com', 'fakemailgenerator.com',
  'emailondeck.com', 'generator.email', 'dropmail.me', 'getnada.com',
  'mytemp.email', 'tempail.com', 'disposablemail.com', 'tmail.ws',
  'harakirimail.com', 'maildrop.cc', 'mintemail.com', 'discard.email',
  'spamgourmet.com', 'luxusmail.org', 'tmpmail.net', 'tmpmail.org'
]);

// Known placeholder / fake / mock domains
const FAKE_DOMAINS = new Set([
  'test.com', 'example.com', 'example.org', 'example.net',
  'fake.com', 'asdf.com', 'abc.com', 'foo.com', 'bar.com',
  'sample.com', 'invalid.com', 'aaa.com', 'email.com', 'none.com',
  '123.com', 'noemail.com', 'nomail.com', 'xyz.com', 'qwerty.com'
]);

// Common fake test usernames
const FAKE_USERNAMES = new Set([
  'test', 'fake', 'asdf', 'qwerty', '123', '12345', 'nobody', 'noone',
  'null', 'undefined', 'anonymous', 'admin', 'user', 'sample'
]);

// Common provider typos
const DOMAIN_TYPOS = {
  'gmail.co': 'gmail.com',
  'gamil.com': 'gmail.com',
  'gmai.com': 'gmail.com',
  'gmial.com': 'gmail.com',
  'gmaill.com': 'gmail.com',
  'yaho.com': 'yahoo.com',
  'yahoo.co': 'yahoo.com',
  'hotmial.com': 'hotmail.com',
  'outlok.com': 'outlook.com',
  'icluod.com': 'icloud.com'
};

function validateEmail(email) {
  const clean = email.trim().toLowerCase();
  if (!clean) {
    return { valid: false, error: 'Email address is required.' };
  }

  // Strict RFC-compliant email pattern check
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (!emailRegex.test(clean)) {
    return { valid: false, error: 'Please enter a valid email address (e.g., name@domain.com).' };
  }

  const parts = clean.split('@');
  if (parts.length !== 2) {
    return { valid: false, error: 'Please enter a valid email address.' };
  }

  const [username, domain] = parts;

  // Domain structure & extension check
  const domainParts = domain.split('.');
  const tld = domainParts[domainParts.length - 1];
  if (!tld || tld.length < 2 || !/^[a-z]+$/.test(tld)) {
    return { valid: false, error: 'Please enter an email with a valid domain extension (e.g., .com, .org, .in).' };
  }

  // Disposable / temporary burner email check
  if (DISPOSABLE_DOMAINS.has(domain)) {
    return { valid: false, error: 'Temporary and disposable email addresses are not accepted. Please use a real, active email.' };
  }

  // Fake / mock placeholder domain check
  if (FAKE_DOMAINS.has(domain)) {
    return { valid: false, error: 'Please enter an active email address, not a placeholder domain.' };
  }

  // Common provider typo suggestions
  if (DOMAIN_TYPOS[domain]) {
    return { valid: false, error: `Did you mean @${DOMAIN_TYPOS[domain]}? Please double check your email.` };
  }

  // Fake username / placeholder / gibberish checks
  if (FAKE_USERNAMES.has(username) || /^([a-z0-9])\1{3,}$/.test(username)) {
    return { valid: false, error: 'Please enter a genuine email address, not a test username.' };
  }

  return { valid: true, error: null };
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    _honey: '' // Honeypot field for bot spam protection
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);

  // Party Popper celebration burst
  const triggerPartyPopper = () => {
    const colors = [
      '#EDC06A',
      '#ECC06C',
      '#D4A045',
      '#FFFFFF',
      '#60A5FA',
      '#34D399',
      '#F472B6',
      '#F59E0B'
    ];

    // Primary central upward party popper blast
    confetti({
      particleCount: 130,
      spread: 80,
      startVelocity: 50,
      origin: { y: 0.65 },
      colors
    });

    // Left cannon pop
    setTimeout(() => {
      confetti({
        particleCount: 65,
        angle: 60,
        spread: 60,
        origin: { x: 0.15, y: 0.75 },
        colors
      });
    }, 180);

    // Right cannon pop
    setTimeout(() => {
      confetti({
        particleCount: 65,
        angle: 120,
        spread: 60,
        origin: { x: 0.85, y: 0.75 },
        colors
      });
    }, 320);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errorMessage) setErrorMessage('');

    if (name === 'email') {
      if (emailTouched) {
        const result = validateEmail(value);
        setEmailError(result.valid ? '' : result.error);
      }
    }
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    if (formData.email) {
      const result = validateEmail(formData.email);
      setEmailError(result.valid ? '' : result.error);
    } else {
      setEmailError('Email address is required.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Check all required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    // 2. Comprehensive Email Validation (Anti-Fake Check)
    setEmailTouched(true);
    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.valid) {
      setEmailError(emailValidation.error);
      setErrorMessage(emailValidation.error);
      const emailInput = document.getElementById('contact-email');
      if (emailInput) emailInput.focus();
      return;
    }

    // 3. Bot detection check
    if (formData._honey) {
      setSubmitted(true);
      triggerPartyPopper();
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');
    setEmailError('');
    setSubmitted(false);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          _subject: `Portfolio Inquiry from ${formData.name.trim()}`,
          _replyto: formData.email.trim(),
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true || data.message)) {
        setSubmitted(true);
        triggerPartyPopper();
        setFormData({
          name: '',
          email: '',
          message: '',
          _honey: ''
        });
        setEmailTouched(false);
      } else {
        throw new Error(data.message || 'Failed to deliver message.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      // Helpful fallback in case of strict network blockers
      setErrorMessage(
        'Unable to send automatically. You can click here to send directly via your email client.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleManualEmailFallback = () => {
    const subject = encodeURIComponent(`Portfolio Message from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${TARGET_EMAIL}?subject=${subject}&body=${body}`, '_blank');
  };

  const isEmailValid = emailTouched && formData.email && !emailError;

  return (
    <div className="contact-form-card">
      {/* Success Notification with Party Popper Icon */}
      {submitted && (
        <div className="contact-form-success" role="alert">
          <span style={{ fontSize: '1.5rem', lineHeight: 1 }} aria-hidden="true">
            🎉
          </span>
          <div>
            <strong>Message Sent Successfully!</strong>
            <p style={{ margin: '0.2rem 0 0', fontSize: '0.85rem', opacity: 0.9 }}>
              Your message has been sent directly to {TARGET_EMAIL}. I will get back to you soon.
            </p>
          </div>
        </div>
      )}

      {/* Error / Fallback Notification */}
      {errorMessage && (
        <div className="contact-form-error" role="alert">
          <AlertCircle size={18} aria-hidden="true" style={{ flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <span>{errorMessage}</span>
            {errorMessage.includes('email client') && (
              <button
                type="button"
                onClick={handleManualEmailFallback}
                className="contact-fallback-btn"
              >
                Open Email App &rarr;
              </button>
            )}
          </div>
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
        {/* Hidden Honeypot field for bot suppression */}
        <input
          type="text"
          name="_honey"
          value={formData._honey}
          onChange={handleChange}
          style={{ display: 'none' }}
          tabIndex="-1"
          autoComplete="off"
        />

        {/* Name Field */}
        <div className="contact-form-group">
          <label className="contact-form-label" htmlFor="contact-name">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            className="contact-form-input"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
          />
        </div>

        {/* Email Field with Anti-Fake Validation */}
        <div className="contact-form-group">
          <label className="contact-form-label" htmlFor="contact-email">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            className={`contact-form-input ${emailError ? 'input-error' : isEmailValid ? 'input-valid' : ''}`}
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleEmailBlur}
            required
            autoComplete="email"
            aria-invalid={!!emailError}
            aria-describedby={emailError ? 'email-validation-error' : undefined}
          />
          {emailError && (
            <div id="email-validation-error" className="contact-field-error" role="alert">
              <AlertCircle size={13} aria-hidden="true" />
              <span>{emailError}</span>
            </div>
          )}
          {isEmailValid && (
            <div className="contact-field-valid">
              <CheckCircle2 size={13} aria-hidden="true" />
              <span>Verified email address format</span>
            </div>
          )}
        </div>

        {/* Message Field */}
        <div className="contact-form-group">
          <label className="contact-form-label" htmlFor="contact-message">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            className="contact-form-textarea"
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button with FlowButton Effect */}
        <button
          type="submit"
          className="contact-form-submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="btn-inner-loading" style={{ position: 'relative', zIndex: 3 }}>
              <span className="spinner-dot" /> Delivering to {TARGET_EMAIL}...
            </span>
          ) : submitted ? (
            <span style={{ position: 'relative', zIndex: 3 }}>
              Message Sent Successfully! 🎉
            </span>
          ) : (
            <>
              {/* Left arrow (slides in on hover) */}
              <ArrowRight className="flow-btn-arr-left" aria-hidden="true" />

              {/* Text shifts on hover */}
              <span className="flow-btn-text">
                Send Message
              </span>

              {/* Expanding circle floods background on hover */}
              <span className="flow-btn-circle" aria-hidden="true" />

              {/* Right arrow (slides out on hover) */}
              <ArrowRight className="flow-btn-arr-right" aria-hidden="true" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
