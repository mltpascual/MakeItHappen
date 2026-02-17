/*
 * DESIGN: Cinematic Noir
 * Premium splash/loading screen with MIH logo reveal animation.
 * Sequence: fade in logo → amber accent line sweeps → text reveals → screen lifts up.
 */
import { useState, useEffect } from "react";

const LOGO_URL = "/images/mih-logo.png";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<
    "logo-in" | "text-in" | "hold" | "exit"
  >("logo-in");

  useEffect(() => {
    // Lock body scroll during splash
    document.body.style.overflow = "hidden";

    const timers = [
      setTimeout(() => setPhase("text-in"), 600),
      setTimeout(() => setPhase("hold"), 1400),
      setTimeout(() => setPhase("exit"), 2200),
      setTimeout(() => {
        document.body.style.overflow = "";
        onComplete();
      }, 3000),
    ];

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  const isLogoVisible = phase !== "logo-in" || true; // logo starts fading in immediately
  const isTextVisible =
    phase === "text-in" || phase === "hold" || phase === "exit";
  const isExiting = phase === "exit";

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isExiting
          ? "opacity-0 -translate-y-full"
          : "opacity-100 translate-y-0"
      }`}
      style={{
        background:
          "radial-gradient(ellipse at center, oklch(0.1 0.005 285) 0%, oklch(0.04 0.005 285) 100%)",
      }}
    >
      {/* Subtle ambient glow behind logo */}
      <div
        className={`absolute w-64 h-64 rounded-full transition-all duration-1000 ${
          isTextVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
        style={{
          background:
            "radial-gradient(circle, oklch(0.82 0.16 75 / 8%) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <div
          className={`transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            phase === "logo-in"
              ? "opacity-0 scale-90"
              : "opacity-100 scale-100"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <img
            src={LOGO_URL}
            alt="MIH Productions"
            className="w-20 h-20 md:w-24 md:h-24 object-contain"
          />
        </div>

        {/* Amber accent line */}
        <div
          className={`h-[1px] bg-primary mt-6 mb-5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isTextVisible ? "w-16 opacity-100" : "w-0 opacity-0"
          }`}
          style={{ transitionDelay: "100ms" }}
        />

        {/* Brand name */}
        <div className="overflow-hidden">
          <h1
            className={`font-display text-3xl md:text-4xl tracking-[0.4em] text-foreground transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isTextVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-full"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            MIH
          </h1>
        </div>

        {/* Subtitle */}
        <div className="overflow-hidden">
          <p
            className={`text-[10px] md:text-xs tracking-[0.35em] uppercase text-muted-foreground font-body mt-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isTextVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-full"
            }`}
            style={{ transitionDelay: "350ms" }}
          >
            Productions
          </p>
        </div>
      </div>

      {/* Bottom tagline */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center">
        <p
          className={`text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-muted-foreground/40 font-body transition-all duration-600 ${
            isTextVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          Make It Happen
        </p>
      </div>
    </div>
  );
}
