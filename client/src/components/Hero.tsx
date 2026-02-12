/*
 * DESIGN: Cinematic Noir
 * Full-bleed hero with scroll-driven parallax effect.
 * Background image shifts on scroll for cinematic depth.
 * Amber accent CTA. Fade-from-black entrance.
 */
import { useEffect, useState, useRef, useCallback } from "react";
import { ChevronDown } from "lucide-react";

const HERO_BG =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663343684150/NruhefkPRyjHbRrx.jpg";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
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
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[600px] overflow-hidden"
    >
      {/* ===== Background with scroll parallax ===== */}
      <div
        className={`absolute inset-0 transition-opacity duration-[2000ms] ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translateY(${scrollY * 0.3}px) scale(1.15)`,
          willChange: "transform",
        }}
      >
        <img
          src={HERO_BG}
          alt="Cinematic film production set with dramatic lighting"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ===== Gradient overlays for text readability ===== */}
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.05_0.005_285/92%)] via-[oklch(0.05_0.005_285/65%)] to-[oklch(0.05_0.005_285/30%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.05_0.005_285/95%)] via-transparent to-[oklch(0.05_0.005_285/40%)]" />

      {/* ===== Text content ===== */}
      <div
        className="relative h-full container flex flex-col justify-center"
        style={{
          transform: `translateY(${scrollY * 0.12}px)`,
          willChange: "transform",
        }}
      >
        <div className="max-w-2xl">
          {/* Amber accent line */}
          <div
            className={`w-16 h-0.5 bg-primary mb-8 transition-all duration-1000 delay-500 ${
              loaded ? "opacity-100 w-16" : "opacity-0 w-0"
            }`}
          />

          {/* Tagline */}
          <p
            className={`text-sm md:text-base tracking-[0.3em] uppercase text-primary font-body font-light mb-4 transition-all duration-1000 delay-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Multimedia Production Company
          </p>

          {/* Main heading */}
          <h1
            className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-wide text-white mb-6 transition-all duration-1000 delay-900 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            MAKE IT
            <br />
            <span className="text-primary">HAPPEN</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-base md:text-lg text-[oklch(0.75_0.005_85)] font-body font-light leading-relaxed max-w-lg mb-10 transition-all duration-1000 delay-[1100ms] ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            We create visual media solutions that translate brands and tell
            innovative stories that provoke positive response.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-1000 delay-[1300ms] ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm tracking-[0.2em] uppercase hover:bg-amber-light transition-colors duration-300 rounded-full"
            >
              Let's Create Together
            </button>
            <button
              onClick={() =>
                document
                  .querySelector("#work")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3.5 border border-[oklch(1_0_0/20%)] text-foreground font-body text-sm tracking-[0.2em] uppercase hover:border-primary hover:text-primary transition-colors duration-300 rounded-full"
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>

      {/* ===== Scroll indicator ===== */}
      <button
        onClick={scrollToServices}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-500 delay-[1800ms] z-10 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Scroll to services"
      >
        <span className="text-xs tracking-[0.3em] uppercase font-body">
          Scroll
        </span>
        <ChevronDown size={18} className="animate-bounce" />
      </button>

      {/* Letterbox top bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary/30 to-transparent z-10" />

      {/* Vignette overlay for cinematic depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 200px 60px oklch(0.05 0.005 285 / 70%)",
        }}
      />
    </section>
  );
}
