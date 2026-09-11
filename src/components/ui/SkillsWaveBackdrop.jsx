import React, { useEffect, useRef } from 'react';

export default function SkillsWaveBackdrop({ theme }) {
  const isDark = theme === 'dark';
  const containerRef = useRef(null);
  const waveFrontRef = useRef(null);
  const waveBackRef = useRef(null);
  const waveTopRef = useRef(null);

  useEffect(() => {
    let rafId = null;
    let targetProgress = 0.5;
    let currentProgress = 0.5;

    function onScroll() {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = vh + rect.height;
      const current = vh - rect.top;
      // Scroll progress from 0 (entering bottom of screen) to 1 (leaving top of screen)
      targetProgress = Math.min(Math.max(current / total, 0), 1);

      if (!rafId) {
        rafId = requestAnimationFrame(update);
      }
    }

    function update() {
      rafId = null;
      // Organic smooth spring interpolation (0.10) matching ProjectBlobBackdrop
      currentProgress += (targetProgress - currentProgress) * 0.10;

      const p = currentProgress;
      const offset = p - 0.5; // range: -0.5 to +0.5

      // Front Wave: shifts horizontally with scroll, vertical parallax lift, gentle swell scale
      const x1 = offset * 65;
      const y1 = offset * 38;
      const s1 = 0.98 + Math.sin(p * Math.PI) * 0.08;

      // Back Wave: counter-parallax drift, vertical shift, counter swell
      const x2 = offset * -75;
      const y2 = offset * -28;
      const s2 = 0.96 + Math.sin(p * Math.PI) * 0.10;

      // Top Wave Accent: subtle complementary drift
      const x3 = offset * -40;
      const y3 = offset * 20;

      if (waveFrontRef.current) {
        waveFrontRef.current.style.transform = `translate3d(${x1.toFixed(2)}px, ${y1.toFixed(2)}px, 0) scaleY(${s1.toFixed(3)})`;
      }
      if (waveBackRef.current) {
        waveBackRef.current.style.transform = `translate3d(${x2.toFixed(2)}px, ${y2.toFixed(2)}px, 0) scaleY(${s2.toFixed(3)})`;
      }
      if (waveTopRef.current) {
        waveTopRef.current.style.transform = `translate3d(${x3.toFixed(2)}px, ${y3.toFixed(2)}px, 0) rotate(180deg)`;
      }

      // Continue animating until settled
      if (Math.abs(targetProgress - currentProgress) > 0.0008) {
        rafId = requestAnimationFrame(update);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  /* Path data exactly from wave-haikei.svg */
  const wavePath = "M0 505L21.5 490C43 475 86 445 128.8 446.8C171.7 448.7 214.3 482.3 257.2 481.8C300 481.3 343 446.7 385.8 437.7C428.7 428.7 471.3 445.3 514.2 453.5C557 461.7 600 461.3 642.8 452C685.7 442.7 728.3 424.3 771.2 423.2C814 422 857 438 878.5 446L900 454L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z";

  return (
    <div ref={containerRef} className="skills-wave-backdrop" aria-hidden="true">
      {/* Background Ambient Tint replacing flat #002233 rect with website colorway */}
      <div
        className="skills-wave-ambient-tint"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse at 50% 100%, rgba(237, 192, 106, 0.08) 0%, rgba(237, 192, 106, 0.02) 60%, transparent 85%)'
            : 'radial-gradient(ellipse at 50% 100%, rgba(181, 141, 61, 0.07) 0%, rgba(181, 141, 61, 0.015) 60%, transparent 85%)'
        }}
      />

      {/* SVG Defs (Gradients & Soft Glow Filters) */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          {/* Front Wave Gradient - Harmonized Gold/Amber */}
          <linearGradient id="skillsWaveGradFront" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="10%"
              stopColor={isDark ? '#EDC06A' : '#B58D3D'}
              stopOpacity={isDark ? 0.32 : 0.26}
            />
            <stop
              offset="55%"
              stopColor={isDark ? '#ECC06C' : '#A88030'}
              stopOpacity={isDark ? 0.18 : 0.13}
            />
            <stop
              offset="100%"
              stopColor={isDark ? '#D4A045' : '#8C6720'}
              stopOpacity="0.03"
            />
          </linearGradient>

          {/* Back Wave Gradient - Slightly deeper tone for depth */}
          <linearGradient id="skillsWaveGradBack" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop
              offset="15%"
              stopColor={isDark ? '#ECC06C' : '#A88030'}
              stopOpacity={isDark ? 0.22 : 0.17}
            />
            <stop
              offset="70%"
              stopColor={isDark ? '#D4A045' : '#8C6720'}
              stopOpacity={isDark ? 0.10 : 0.07}
            />
            <stop
              offset="100%"
              stopColor={isDark ? '#EDC06A' : '#B58D3D'}
              stopOpacity="0.01"
            />
          </linearGradient>

          {/* Top Wave Accent Gradient */}
          <linearGradient id="skillsWaveGradTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              stopColor={isDark ? '#EDC06A' : '#B58D3D'}
              stopOpacity={isDark ? 0.16 : 0.12}
            />
            <stop
              offset="100%"
              stopColor={isDark ? '#ECC06C' : '#A88030'}
              stopOpacity="0.01"
            />
          </linearGradient>

          {/* Subtle Glow Filter */}
          <filter id="skillsWaveGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
      </svg>

      {/* Top Accent Inverted Wave */}
      <div ref={waveTopRef} className="skills-wave-layer skills-wave-layer-top">
        <svg
          viewBox="0 380 900 225"
          preserveAspectRatio="none"
          className="skills-wave-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={wavePath}
            fill="url(#skillsWaveGradTop)"
          />
        </svg>
      </div>

      {/* Back Parallax Depth Wave Layer */}
      <div ref={waveBackRef} className="skills-wave-layer skills-wave-layer-back">
        <svg
          viewBox="0 360 900 245"
          preserveAspectRatio="none"
          className="skills-wave-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={wavePath}
            fill="url(#skillsWaveGradBack)"
          />
        </svg>
      </div>

      {/* Front Hero Wave Layer (exact wave-haikei.svg path with glowing edge) */}
      <div ref={waveFrontRef} className="skills-wave-layer skills-wave-layer-front">
        <svg
          viewBox="0 375 900 230"
          preserveAspectRatio="none"
          className="skills-wave-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#skillsWaveGlow)">
            <path
              d={wavePath}
              fill="url(#skillsWaveGradFront)"
              stroke={isDark ? 'rgba(237, 192, 106, 0.45)' : 'rgba(181, 141, 61, 0.38)'}
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="miter"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
