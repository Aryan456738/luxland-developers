'use client';

import { useEffect } from 'react';
import markup from './ptlMarkup';
import appData from '@/lib/appData';

/**
 * Full "Plot The Link" website (navbar, hero filters, plot cards, detail modal,
 * testimonials, about, contact form and footer.
 * Markup lives in ./ptlMarkup.js, state/actions in @/lib/appData.js.
 * Alpine.js + Lucide icons are started here on the client.
 */
export default function PlotTheLinkSite() {
  useEffect(() => {
    let cancelled = false;
    let observer;
    let raf;
    const cleanups = [];

    (async () => {
      const [{ default: Alpine }, lucide] = await Promise.all([
        import('alpinejs'),
        import('lucide'),
      ]);
      if (cancelled) return;

      const renderIcons = () => lucide.createIcons({ icons: lucide.icons });
      window.lucide = { createIcons: renderIcons };
      window.appData = appData;

      if (!window.Alpine) {
        window.Alpine = Alpine;
        Alpine.start();
      }
      renderIcons();

      const root = document.getElementById('ptl-root');
      if (!root) return;

      /* ---- scroll animations ---- */
      const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const bar = document.createElement('div');
      bar.id = 'ptl-progress';
      document.body.appendChild(bar);
      cleanups.push(() => bar.remove());

      const glows = [...root.querySelectorAll('#home > div.absolute')];
      glows.forEach((g) => g.classList.add('ptl-float'));

      const onScroll = () => {
        const y = window.scrollY;
        const h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
        if (!calm) glows.forEach((g, i) => (g.style.translate = `0 ${y * 0.18 * (i ? -1 : 1)}px`));
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener('scroll', onScroll));
      onScroll();

      const reveal = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            const el = e.target;
            if (e.isIntersecting) {
              el.style.transitionDelay = (el.dataset.d || 0) + 'ms';
              el.classList.add('in');
            } else {
              el.classList.remove('in');
              el.style.transitionDelay = '';
            }
          }),
        { rootMargin: '0px 0px -6% 0px', threshold: 0.05 }
      );
      const countFrames = new Map();
      const counted = new IntersectionObserver((entries) =>
        entries.forEach((e) => {
          const el = e.target;
          const m = el.dataset.t.match(/^(\d+)(.*)$/);
          if (!m) return;

          const currentFrame = countFrames.get(el);
          if (currentFrame) cancelAnimationFrame(currentFrame);

          if (!e.isIntersecting) {
            countFrames.delete(el);
            el.textContent = `0${m[2]}`;
            return;
          }

          const n = Number(m[1]);
          const t0 = performance.now();
          const step = (t) => {
            const k = Math.min(1, (t - t0) / 1400);
            el.textContent = Math.round(n * (1 - Math.pow(1 - k, 3))) + m[2];
            if (k < 1) {
              countFrames.set(el, requestAnimationFrame(step));
            } else {
              countFrames.delete(el);
            }
          };
          countFrames.set(el, requestAnimationFrame(step));
        })
      );
      cleanups.push(() => {
        reveal.disconnect();
        counted.disconnect();
        countFrames.forEach((frame) => cancelAnimationFrame(frame));
        countFrames.clear();
      });

      const prepare = () => {
        if (calm) return;
        root.querySelectorAll('section .glass-card, section h2, #about img, #contact form').forEach((el, i) => {
          if (el.dataset.r) return;
          el.dataset.r = '1';
          el.dataset.d = String((i % 3) * 120);
          el.classList.add('reveal');
          reveal.observe(el);
        });
        root.querySelectorAll('#home h3.font-serif').forEach((el) => {
          if (el.dataset.t) return;
          el.dataset.t = el.textContent.trim();
          counted.observe(el);
        });
      };
      prepare();

      // Icons + new cards inside Alpine templates appear later, so re-run when the DOM changes.
      observer = new MutationObserver(() => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => { renderIcons(); prepare(); });
      });
      observer.observe(root, { childList: true, subtree: true });
    })();

    return () => {
      cancelled = true;
      if (observer) observer.disconnect();
      cancelAnimationFrame(raf);
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: markup }} />;
}
