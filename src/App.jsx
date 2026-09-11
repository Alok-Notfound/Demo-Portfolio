import React, { useState, useEffect, useRef } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import { profileData } from './data/profile';
import { PressDepth } from '@/components/ui/press-depth';
import DotField from '@/components/ui/DotField';
import MoltenMetal from '@/components/ui/MoltenMetal';
import ProjectBlobBackdrop from '@/components/ui/ProjectBlobBackdrop';
import SkillsWaveBackdrop from '@/components/ui/SkillsWaveBackdrop';
import ContactForm from '@/components/ui/ContactForm';
import Lanyard from '@/components/ui/Lanyard';
import profilePhoto from '@/assets/profile.jpg';

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const session = sessionStorage.getItem('portfolio-theme');
      if (session === 'dark' || session === 'light') return session;
    } catch (e) { }
    return 'light';
  });

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      sessionStorage.setItem('portfolio-theme', theme);
      localStorage.removeItem('portfolio-theme');
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

  /* 3D Scroll Perspective Transition from Hero Tab to Cards Sections */
  const heroTransitionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroTransitionRef,
    offset: ['start start', 'end start'],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const heroRotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 0.7, 0.2]);

  const cardsScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const cardsRotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

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
        {/* 1. Hero Section inside 3D Scroll Transition Track */}
        <div ref={heroTransitionRef} className="hero-scroll-transition-container">
          <motion.section
            id="hero"
            style={{ scale: heroScale, rotate: heroRotate, opacity: heroOpacity }}
            className="section hero-section hero-sticky-motion"
          >
            <div className="hero-moltenmetal-backdrop" aria-hidden="true">
              <MoltenMetal
                color1={theme === 'dark' ? '#78350F' : '#B58D3D'}
                color2={theme === 'dark' ? '#EDC06A' : '#785412'}
                color3={theme === 'dark' ? '#FFF3D1' : '#231B15'}
                backgroundColor={theme === 'dark' ? '#131411' : '#FBF8F3'}
                lightMode={theme === 'light'}
                speed={0.28}
                scale={3.5}
                detail={3}
                glow={theme === 'dark' ? 1.3 : 1.15}
                coreSize={0.08}
                swirl={1}
                fold={-0.2}
                blackPoint={0.06}
                brightness={theme === 'dark' ? 1.05 : 0.95}
                colorMode="molten"
                grain={true}
                grainIntensity={0.04}
                mouseInteraction={true}
                mouseStrength={0.25}
                opacity={theme === 'dark' ? 0.9 : 0.78}
              />
            </div>

            <div className="container hero-grid">
              <div className="hero-content-left">
                <h1 className="hero-name-title">
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

              {/* 3D Physics Lanyard Card */}
              <div className="hero-lanyard-col" aria-label="Interactive 3D ID Badge">
                <Lanyard
                  position={[0, 0, 20]}
                  gravity={[0, -40, 0]}
                  frontImage={profilePhoto}
                  backImage={profilePhoto}
                  imageFit="cover"
                  lanyardWidth={1}
                />
              </div>
            </div>
          </motion.section>
        </div>

        {/* Cards Section Area - 3D Perspective entry to About, Projects, etc. */}
        <motion.div
          style={{ scale: cardsScale, rotate: cardsRotate }}
          className="cards-sections-wrapper"
        >
          <div className="cards-backdrop" aria-hidden="true">
            <DotField
              dotRadius={1.5}
              dotSpacing={16}
              bulgeStrength={65}
              cursorRadius={380}
              sparkle={false}
              waveAmplitude={0}
              gradientFrom={
                theme === 'dark'
                  ? 'rgba(237, 192, 106, 0.40)'
                  : 'rgba(181, 141, 61, 0.38)'
              }
              gradientTo={
                theme === 'dark'
                  ? 'rgba(237, 192, 106, 0.10)'
                  : 'rgba(181, 141, 61, 0.10)'
              }
            />
          </div>

          {/* 2. About Me Section */}
          <section id="about" className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">About Me</h2>
              </div>

              <div className="about-narrative">
                <p className="about-lead-text">
                  I’m a college student passionate about technology, with a strong interest in{' '}
                  <strong className="about-highlight-strong">UI/UX Design, AI &amp; AI Agents, and Software Development</strong>.
                  I enjoy exploring new technologies, experimenting with ideas, and turning them into practical and engaging digital experiences.
                </p>

                <ul className="about-points-list">
                  {profileData.aboutHighlights?.map((item, idx) => (
                    <li key={idx} className="about-point-item">
                      <strong className="about-point-label">
                        {item.icon} {item.label}:
                      </strong>
                      <span className="about-point-value">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Projects - Exactly Cypher and Hospital Management System from PDF */}
          <section id="projects" className="section">
            <div className="container">
              {/* Blob Scene Backdrop from blob-scene-haikei.svg */}
              <ProjectBlobBackdrop theme={theme} />

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
              {/* Wave Backdrop from wave-haikei.svg with theme colors and parallax */}
              <SkillsWaveBackdrop theme={theme} />

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

          {/* 6. Contact Section - Editorial Grid with Contact Form */}
          <section id="contact" className="section" style={{ borderBottom: 'none' }}>
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Contact</h2>
              </div>

              <div className="contact-grid">
                {/* Left Column: Direct Info & Social Links */}
                <div className="contact-info-col">
                  <p className="contact-text">
                    Have a project in mind, an opportunity, or want to collaborate? Send a message through the form or reach out directly.
                  </p>

                  <div className="contact-status-badge">
                    <span className="status-dot-pulse" />
                    <span>Available for software engineering &amp; AI roles</span>
                  </div>

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
                      <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 7 17"></path>
                      </svg>
                    </a>
                    <a
                      href={profileData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline"
                    >
                      <span>LinkedIn Profile</span>
                      <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 7 17"></path>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="contact-form-col">
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>
        </motion.div>
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

