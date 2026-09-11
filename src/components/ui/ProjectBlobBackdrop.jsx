import React, { useEffect, useRef } from 'react';

export default function ProjectBlobBackdrop({ theme }) {
  const isDark = theme === 'dark';
  const containerRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);

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
      // Organic smooth spring interpolation (0.10)
      currentProgress += (targetProgress - currentProgress) * 0.10;

      if (blob1Ref.current && blob2Ref.current) {
        const p = currentProgress;
        const offset = p - 0.5; // range: -0.5 to +0.5

        // Top-Right Blob: shifts diagonally, rotates, and pulses in scale as user scrolls
        const y1 = offset * 110;
        const x1 = offset * -60;
        const r1 = offset * 22;
        const s1 = 0.96 + Math.sin(p * Math.PI) * 0.10;

        // Bottom-Left Blob: counter-parallax motion, inverse rotation
        const y2 = offset * -120;
        const x2 = offset * 70;
        const r2 = offset * -26;
        const s2 = 0.95 + Math.sin(p * Math.PI) * 0.11;

        blob1Ref.current.style.transform = `translate3d(${x1.toFixed(2)}px, ${y1.toFixed(2)}px, 0) rotate(${r1.toFixed(2)}deg) scale(${s1.toFixed(3)})`;
        blob2Ref.current.style.transform = `translate3d(${x2.toFixed(2)}px, ${y2.toFixed(2)}px, 0) rotate(${r2.toFixed(2)}deg) scale(${s2.toFixed(3)})`;
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

  return (
    <div ref={containerRef} className="projects-blob-backdrop" aria-hidden="true">
      {/* Top-Right Organic Blob - Responsive 500x500 viewBox anchored to corner */}
      <div ref={blob1Ref} className="project-blob-corner project-blob-top-right">
        <svg
          viewBox="0 0 500 500"
          className="project-blob-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="projectBlobGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="15%"
                stopColor={isDark ? '#EDC06A' : '#B58D3D'}
                stopOpacity={isDark ? 0.32 : 0.26}
              />
              <stop
                offset="65%"
                stopColor={isDark ? '#ECC06C' : '#A88030'}
                stopOpacity={isDark ? 0.16 : 0.12}
              />
              <stop
                offset="100%"
                stopColor={isDark ? '#D4A045' : '#8C6720'}
                stopOpacity="0.02"
              />
            </linearGradient>
            <filter id="blobFilter1" x="-15%" y="-15%" width="130%" height="130%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <g transform="translate(500, 0)" filter="url(#blobFilter1)">
            <path
              d="M0 486.7C-71.6 487.6 -143.2 488.4 -186.3 449.7C-229.4 411 -244 332.8 -285.7 285.7C-327.4 238.5 -396.2 222.3 -434.2 179.9C-472.3 137.4 -479.5 68.7 -486.7 0L0 0Z"
              fill="url(#projectBlobGrad1)"
            />
          </g>
        </svg>
      </div>

      {/* Bottom-Left Organic Blob - Responsive 500x500 viewBox anchored to corner */}
      <div ref={blob2Ref} className="project-blob-corner project-blob-bottom-left">
        <svg
          viewBox="0 0 500 500"
          className="project-blob-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="projectBlobGrad2" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop
                offset="15%"
                stopColor={isDark ? '#EDC06A' : '#B58D3D'}
                stopOpacity={isDark ? 0.30 : 0.24}
              />
              <stop
                offset="65%"
                stopColor={isDark ? '#ECC06C' : '#A88030'}
                stopOpacity={isDark ? 0.15 : 0.11}
              />
              <stop
                offset="100%"
                stopColor={isDark ? '#D4A045' : '#8C6720'}
                stopOpacity="0.02"
              />
            </linearGradient>
            <filter id="blobFilter2" x="-15%" y="-15%" width="130%" height="130%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <g transform="translate(0, 500)" filter="url(#blobFilter2)">
            <path
              d="M0 -486.7C72.2 -488.3 144.4 -489.8 186.3 -449.7C228.1 -409.6 239.7 -327.8 280 -280C320.3 -232.3 389.4 -218.6 428.7 -177.6C467.9 -136.6 477.3 -68.3 486.7 0L0 0Z"
              fill="url(#projectBlobGrad2)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
