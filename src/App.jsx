import React, { useState, useEffect } from 'react';
import { profileData } from './data/profile';
import { PressDepth } from '@/components/ui/press-depth';
import Antigravity from '@/components/ui/Antigravity';

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved === 'dark' || saved === 'light') return saved;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    } catch (e) { }
    return 'light';
  });

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch (e) { }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) { }
  };

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Global Header */}
      <header className="site-header" id="header">
        <div className="container header-inner">
          <a href="#hero" className="brand-wordmark" aria-label="Home">
            <span className="brand-initials">AK</span>
            <span className="brand-title">{profileData.name}</span>
          </a>

          <nav className="primary-nav" aria-label="Main Navigation">
            <ul className="nav-list" role="list">
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#projects" className="nav-link">Projects</a></li>
              <li><a href="#skills" className="nav-link">Skills</a></li>
              <li><a href="#certifications" className="nav-link">Certifications</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <button
              id="theme-toggle"
              className="btn-theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              aria-pressed={theme === 'dark'}
            >
              <svg className="icon-sun" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
              <svg className="icon-moon" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main id="main-content" tabIndex="-1">
        {/* 1. Hero Section - Antigravity floats gracefully behind Aalok Kumar, no box */}
        <section id="hero" className="section hero-section" style={{ position: 'relative' }}>
          {/* Animated hover background - Lower layer (z-index: 1) */}
          <div className="hero-particle-backdrop" aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
            <Antigravity
              count={220}
              magnetRadius={7}
              ringRadius={6.5}
              waveSpeed={0.3}
              waveAmplitude={0.65}
              particleSize={1.3}
              lerpSpeed={0.07}
              color={theme === 'dark' ? '#FCD34D' : '#D97706'}
              autoAnimate={true}
              particleVariance={0.7}
              depthFactor={1.0}
            />
          </div>

          {/* Text / Content - Higher layer (z-index: 2) */}
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="hero-content-left" style={{ position: 'relative', zIndex: 2 }}>
              <h1 className="hero-name-title" style={{ position: 'relative', zIndex: 2 }}>
                {profileData.name}
              </h1>

              <div className="hero-role-subtitle">
                {profileData.titles}
              </div>

              <p className="hero-body-text">
                {profileData.aboutMe}
              </p>

              <div className="hero-career-callout">
                <strong>Career Goal:</strong> {profileData.careerGoal}
              </div>

              <div className="hero-meta-row">
                <span>📍 {profileData.location}</span>
                <span>•</span>
                <span>✉️ {profileData.email}</span>
              </div>

              <div className="hero-ctas-left">
                <a href="#projects" className="btn btn-primary">
                  <span>View Projects</span>
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
                <a href="#contact" className="btn btn-outline">
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. About Me Section - Exact text from PDF */}
        <section id="about" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">About Me</h2>
            </div>

            <div className="about-narrative" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p className="body-lg" style={{ lineHeight: '1.8' }}>
                {profileData.aboutMe}
              </p>
              <div style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '1.25rem' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--ink-primary)', lineHeight: '1.6' }}>
                  “{profileData.careerGoal}”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Projects - Exactly Cypher and Hospital Management System from PDF */}
        <section id="projects" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Projects</h2>
            </div>

            <div className="projects-editorial-list">
              {profileData.projects.map((project) => (
                <article className="project-editorial-item" key={project.id}>
                  <div className="project-editorial-header">
                    <div className="project-title-row">
                      <h3 className="project-editorial-title">
                        {project.title}
                      </h3>
                      <span className="chip chip-accent">Role: {project.role}</span>
                    </div>
                  </div>

                  <p className="project-editorial-desc">
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <span className="body-sm" style={{ color: 'var(--ink-muted)', fontWeight: 600 }}>Technologies:</span>
                    <div className="project-stack" style={{ margin: 0 }}>
                      {project.technologies.map((tech, idx) => (
                        <span className="chip" key={idx}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Technical Skills - Exactly from PDF */}
        <section id="skills" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Technical Skills</h2>
            </div>

            <div className="spec-table">
              <div className="spec-table-row">
                <div className="spec-table-label">Programming</div>
                <div className="spec-table-content">
                  {profileData.skills.programming.map((skill, idx) => (
                    <span className="chip" key={idx}>{skill}</span>
                  ))}
                </div>
              </div>

              <div className="spec-table-row">
                <div className="spec-table-label">Frontend</div>
                <div className="spec-table-content">
                  {profileData.skills.frontend.map((skill, idx) => (
                    <span className="chip" key={idx}>{skill}</span>
                  ))}
                </div>
              </div>

              <div className="spec-table-row">
                <div className="spec-table-label">Tools &amp; Version Control</div>
                <div className="spec-table-content">
                  {profileData.skills.toolsAndVersionControl.map((skill, idx) => (
                    <span className="chip" key={idx}>{skill}</span>
                  ))}
                </div>
              </div>

              <div className="spec-table-row">
                <div className="spec-table-label">AI Tools &amp; Technologies</div>
                <div className="spec-table-content">
                  {profileData.skills.aiToolsAndTechnologies.map((skill, idx) => (
                    <span className="chip chip-accent" key={idx}>{skill}</span>
                  ))}
                </div>
              </div>

              <div className="spec-table-row">
                <div className="spec-table-label">Interests</div>
                <div className="spec-table-content">
                  {profileData.interests.map((interest, idx) => (
                    <span className="chip" key={idx}>{interest}</span>
                  ))}
                </div>
              </div>

              <div className="spec-table-row">
                <div className="spec-table-label">Languages</div>
                <div className="spec-table-content">
                  {profileData.languages.map((lang, idx) => (
                    <span className="chip" key={idx}>{lang}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Certifications & Achievements - Exactly from PDF */}
        <section id="certifications" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Certifications &amp; Activities</h2>
            </div>

            <div className="spec-table">
              <div className="spec-table-row">
                <div className="spec-table-label">Certifications</div>
                <div className="spec-table-content">
                  {profileData.certifications.map((cert, idx) => (
                    <span className="chip chip-accent" key={idx}>{cert}</span>
                  ))}
                </div>
              </div>

              <div className="spec-table-row">
                <div className="spec-table-label">Achievements &amp; Activities</div>
                <div className="spec-table-content">
                  {profileData.achievementsAndActivities.map((item, idx) => (
                    <span className="chip" key={idx}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Contact Section - Exact contact info from PDF */}
        <section id="contact" className="section" style={{ borderBottom: 'none' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Contact</h2>
            </div>

            <div className="contact-wrapper">
              <div className="contact-email-row">
                <span className="email-display">{profileData.email}</span>
                <PressDepth
                  onClick={handleCopyEmail}
                  className="bg-transparent border border-stone-300 dark:border-stone-750"
                >
                  <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                </PressDepth>
              </div>

              <div className="contact-links-row">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline"
                >
                  <span>GitHub: {profileData.githubHandle}</span>
                  <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline"
                >
                  <span>LinkedIn Profile</span>
                  <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer" id="footer">
        <div className="container footer-inner">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} {profileData.name}
          </p>

          <a href="#hero" className="back-to-top" aria-label="Return to top of page">
            <span>Back to top</span>
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m18 15-6-6-6 6"></path>
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
}

