import { useEffect, useRef, useState, useCallback } from "react";

/**
 * use3DParallax — tracks scroll position within a container and returns
 * a normalized scroll progress (0 at top, 1 when fully scrolled past).
 * Each layer can use this progress with different multipliers for depth.
 */
export function use3DParallax() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    // progress: 0 when element top is at viewport bottom, 1 when element bottom is at viewport top
    const total = windowHeight + rect.height;
    const current = windowHeight - rect.top;
    const p = Math.max(0, Math.min(1, current / total));
    setProgress(p);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  return { ref, progress };
}
