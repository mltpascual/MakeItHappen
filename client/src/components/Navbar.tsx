/*
 * DESIGN: Cinematic Noir
 * Floating navbar with amber accent, translucent dark glass background.
 * Mobile: Full-screen slide-out overlay with staggered link animations.
 * Bebas Neue for the brand wordmark, Source Sans 3 for nav links.
 */
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setMobileOpen(false);
    // Small delay so the menu closes before scrolling
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[oklch(0.08_0.005_285/85%)] backdrop-blur-xl shadow-[0_1px_0_oklch(1_0_0/6%)]"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Brand */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setMobileOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 group z-50"
          >
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663343684150/kJoupaxDnARjakkM.png"
              alt="MIH Productions Logo"
              className="h-10 md:h-12 w-auto object-contain group-hover:brightness-110 transition-all duration-300"
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-display text-lg md:text-xl tracking-wider text-foreground leading-none">
                MIH
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-body leading-none mt-0.5">
                Productions
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 font-body group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="ml-2 px-5 py-2 text-sm tracking-[0.15em] uppercase font-body bg-primary text-primary-foreground hover:bg-amber-light transition-colors duration-300 rounded-full"
            >
              Let's Create
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-6 h-5">
              {/* Top bar */}
              <span
                className={`absolute left-0 w-full h-[2px] bg-foreground transition-all duration-400 ease-[cubic-bezier(0.77,0,0.175,1)] ${
                  mobileOpen
                    ? "top-1/2 -translate-y-1/2 rotate-45"
                    : "top-0 rotate-0"
                }`}
              />
              {/* Middle bar */}
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-foreground transition-all duration-300 ${
                  mobileOpen ? "w-0 opacity-0" : "w-full opacity-100"
                }`}
              />
              {/* Bottom bar */}
              <span
                className={`absolute left-0 w-full h-[2px] bg-foreground transition-all duration-400 ease-[cubic-bezier(0.77,0,0.175,1)] ${
                  mobileOpen
                    ? "top-1/2 -translate-y-1/2 -rotate-45"
                    : "bottom-0 rotate-0"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* ===== Mobile Full-Screen Overlay Menu ===== */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dark backdrop */}
        <div
          className={`absolute inset-0 bg-[oklch(0.04_0.005_285/98%)] backdrop-blur-2xl transition-opacity duration-500 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu content */}
        <div className="relative h-full flex flex-col justify-center px-8">
          {/* Decorative amber line */}
          <div
            className={`w-12 h-0.5 bg-primary mb-8 transition-all duration-700 delay-200 ${
              mobileOpen ? "opacity-100 w-12" : "opacity-0 w-0"
            }`}
          />

          {/* Nav links with staggered animation */}
          <div className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-left transition-all ease-[cubic-bezier(0.77,0,0.175,1)] group ${
                  mobileOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
                style={{
                  transitionDuration: "600ms",
                  transitionDelay: mobileOpen ? `${300 + i * 80}ms` : "0ms",
                }}
              >
                <span className="font-display text-4xl sm:text-5xl tracking-wider text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                  {link.label.toUpperCase()}
                </span>
                <span className="block w-0 h-px bg-primary/40 group-hover:w-full transition-all duration-500 mt-1" />
              </button>
            ))}
          </div>

          {/* CTA button */}
          <div
            className={`mt-10 transition-all duration-600 ease-[cubic-bezier(0.77,0,0.175,1)] ${
              mobileOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: mobileOpen ? "650ms" : "0ms",
            }}
          >
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-8 py-3.5 text-sm tracking-[0.2em] uppercase font-body bg-primary text-primary-foreground hover:bg-amber-light transition-colors duration-300 rounded-full"
            >
              Let's Create Together
            </button>
          </div>

          {/* Bottom info */}
          <div
            className={`absolute bottom-12 left-8 right-8 transition-all duration-600 ${
              mobileOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionDelay: mobileOpen ? "750ms" : "0ms",
            }}
          >
            <div className="flex items-center gap-6 text-xs tracking-[0.15em] uppercase text-muted-foreground font-body">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-300"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="https://vimeo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-300"
              >
                Vimeo
              </a>
            </div>
            <div className="mt-3 w-full h-px bg-[oklch(1_0_0/8%)]" />
            <p className="mt-3 text-[10px] tracking-[0.1em] text-muted-foreground/60 font-body">
              Parañaque City, Metro Manila, Philippines
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
