import React, { useEffect, useRef, memo } from 'react';
import './DotField.css';

const TWO_PI = Math.PI * 2;

const DotField = memo(({
  dotRadius = 1.5,
  dotSpacing = 16,
  cursorRadius = 380,
  cursorForce = 0.1,
  bulgeOnly = true,
  bulgeStrength = 65,
  sparkle = false,
  waveAmplitude = 0,
  gradientFrom = 'rgba(237, 192, 106, 0.40)',
  gradientTo = 'rgba(237, 192, 106, 0.10)',
  className = '',
  ...rest
}) => {
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999, prevX: -9999, prevY: -9999, speed: 0 });
  const lastClientPos = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef(null);
  const isLoopingRef = useRef(false);
  const sizeRef = useRef({ w: 0, h: 0 });
  const engagement = useRef(0);
  const renderStaticRef = useRef(null);

  const propsRef = useRef({});
  propsRef.current = {
    dotRadius,
    dotSpacing,
    cursorRadius,
    cursorForce,
    bulgeOnly,
    bulgeStrength,
    sparkle,
    waveAmplitude,
    gradientFrom,
    gradientTo,
  };

  // Repaint static canvas immediately when visual props (like theme gradient) update
  useEffect(() => {
    propsRef.current = {
      dotRadius,
      dotSpacing,
      cursorRadius,
      cursorForce,
      bulgeOnly,
      bulgeStrength,
      sparkle,
      waveAmplitude,
      gradientFrom,
      gradientTo,
    };
    if (!isLoopingRef.current && canvasRef.current && renderStaticRef.current) {
      renderStaticRef.current();
    }
  }, [
    dotRadius,
    dotSpacing,
    cursorRadius,
    cursorForce,
    bulgeOnly,
    bulgeStrength,
    sparkle,
    waveAmplitude,
    gradientFrom,
    gradientTo,
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let resizeTimer;

    function resize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(doResize, 60);
    }

    function doResize() {
      if (!canvas) return;
      const parent = canvas.parentElement;
      const rect = parent ? parent.getBoundingClientRect() : { width: 800, height: 600 };
      const w = Math.max(10, Math.floor(rect.width));
      const h = Math.max(10, Math.floor(rect.height));

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      sizeRef.current = { w, h };
      buildDots(w, h);
      renderStatic();
    }

    function buildDots(w, h) {
      const p = propsRef.current;
      const step = p.dotRadius + p.dotSpacing;
      const cols = Math.floor(w / step);
      const rows = Math.floor(h / step);
      const padX = (w % step) / 2;
      const padY = (h % step) / 2;
      const dots = new Array(rows * cols);
      let idx = 0;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const ax = padX + col * step + step / 2;
          const ay = padY + row * step + step / 2;
          dots[idx++] = { ax, ay, sx: ax, sy: ay, vx: 0, vy: 0, x: ax, y: ay };
        }
      }
      dotsRef.current = dots;
    }

    function renderStatic() {
      const { w, h } = sizeRef.current;
      if (w <= 0 || h <= 0) return;
      const dots = dotsRef.current;
      const p = propsRef.current;
      const len = dots.length;
      const rad = p.dotRadius / 2;

      ctx.clearRect(0, 0, w, h);
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, p.gradientFrom);
      grad.addColorStop(1, p.gradientTo);
      ctx.fillStyle = grad;

      ctx.beginPath();
      for (let i = 0; i < len; i++) {
        const d = dots[i];
        d.sx = d.ax;
        d.sy = d.ay;
        ctx.moveTo(d.ax + rad, d.ay);
        ctx.arc(d.ax, d.ay, rad, 0, TWO_PI);
      }
      ctx.fill();
    }
    renderStaticRef.current = renderStatic;

    function startLoop() {
      if (!isLoopingRef.current) {
        isLoopingRef.current = true;
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    function handlePointer(clientX, clientY) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const isInside = (
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom
      );

      if (isInside) {
        mouseRef.current.x = clientX - rect.left;
        mouseRef.current.y = clientY - rect.top;
        startLoop();
      } else if (mouseRef.current.x !== -9999) {
        mouseRef.current.x = -9999;
        mouseRef.current.y = -9999;
      }
    }

    function onMouseMove(e) {
      lastClientPos.current.x = e.clientX;
      lastClientPos.current.y = e.clientY;
      handlePointer(e.clientX, e.clientY);
    }

    function onMouseLeaveDoc() {
      lastClientPos.current.x = -9999;
      lastClientPos.current.y = -9999;
      if (mouseRef.current.x !== -9999) {
        mouseRef.current.x = -9999;
        mouseRef.current.y = -9999;
      }
    }

    function onScroll() {
      if (lastClientPos.current.x !== -9999) {
        handlePointer(lastClientPos.current.x, lastClientPos.current.y);
      }
    }

    function updateMouseSpeed() {
      const m = mouseRef.current;
      const dx = m.prevX - m.x;
      const dy = m.prevY - m.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      m.speed += (dist - m.speed) * 0.5;
      if (m.speed < 0.001) m.speed = 0;
      m.prevX = m.x;
      m.prevY = m.y;
    }

    const speedInterval = setInterval(updateMouseSpeed, 20);
    let frameCount = 0;

    function tick() {
      frameCount++;
      const dots = dotsRef.current;
      const m = mouseRef.current;
      const { w, h } = sizeRef.current;
      const p = propsRef.current;
      const len = dots.length;
      const t = frameCount * 0.02;

      const isMouseActive = m.x !== -9999;
      const targetEngagement = isMouseActive ? Math.min(Math.max(m.speed / 4, 0.45), 1) : 0;
      engagement.current += (targetEngagement - engagement.current) * 0.09;
      if (engagement.current < 0.001) engagement.current = 0;
      const eng = engagement.current;

      ctx.clearRect(0, 0, w, h);

      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, p.gradientFrom);
      grad.addColorStop(1, p.gradientTo);
      ctx.fillStyle = grad;

      const cr = p.cursorRadius;
      const crSq = cr * cr;
      const rad = p.dotRadius / 2;
      const isBulge = p.bulgeOnly;

      ctx.beginPath();

      for (let i = 0; i < len; i++) {
        const d = dots[i];
        const dx = m.x - d.ax;
        const dy = m.y - d.ay;
        const distSq = dx * dx + dy * dy;

        if (distSq < crSq && eng > 0.01) {
          const dist = Math.sqrt(distSq);
          if (isBulge) {
            const factor = 1 - dist / cr;
            const push = factor * factor * p.bulgeStrength * eng;
            const angle = Math.atan2(dy, dx);
            d.sx += (d.ax - Math.cos(angle) * push - d.sx) * 0.15;
            d.sy += (d.ay - Math.sin(angle) * push - d.sy) * 0.15;
          } else {
            const angle = Math.atan2(dy, dx);
            const move = (500 / dist) * (m.speed * p.cursorForce);
            d.vx += Math.cos(angle) * -move;
            d.vy += Math.sin(angle) * -move;
          }
        } else if (isBulge) {
          d.sx += (d.ax - d.sx) * 0.1;
          d.sy += (d.ay - d.sy) * 0.1;
        }

        if (!isBulge) {
          d.vx *= 0.9;
          d.vy *= 0.9;
          d.x = d.ax + d.vx;
          d.y = d.ay + d.vy;
          d.sx += (d.x - d.sx) * 0.1;
          d.sy += (d.y - d.sy) * 0.1;
        }

        let drawX = d.sx;
        let drawY = d.sy;
        if (p.waveAmplitude > 0) {
          drawY += Math.sin(d.ax * 0.03 + t) * p.waveAmplitude;
          drawX += Math.cos(d.ay * 0.03 + t * 0.7) * p.waveAmplitude * 0.5;
        }

        if (p.sparkle) {
          const hash = ((i * 2654435761) ^ (frameCount >> 3)) >>> 0;
          if ((hash % 100) < 3) {
            ctx.moveTo(drawX + rad * 1.8, drawY);
            ctx.arc(drawX, drawY, rad * 1.8, 0, TWO_PI);
          } else {
            ctx.moveTo(drawX + rad, drawY);
            ctx.arc(drawX, drawY, rad * 0.8, 0, TWO_PI);
          }
        } else {
          ctx.moveTo(drawX + rad, drawY);
          ctx.arc(drawX, drawY, rad, 0, TWO_PI);
        }
      }

      ctx.fill();

      // If idle and returned to rest, pause loop to conserve resources
      if (!isMouseActive && eng < 0.002) {
        isLoopingRef.current = false;
        renderStatic();
        return;
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    doResize();

    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined' && canvas.parentElement) {
      resizeObserver = new ResizeObserver(() => {
        doResize();
      });
      resizeObserver.observe(canvas.parentElement);
    }

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('mouseleave', onMouseLeaveDoc);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearInterval(speedInterval);
      clearTimeout(resizeTimer);
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mouseleave', onMouseLeaveDoc);
    };
  }, []);

  return (
    <div className={`dot-field-container ${className}`.trim()} aria-hidden="true" {...rest}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
});

DotField.displayName = 'DotField';

export default DotField;
