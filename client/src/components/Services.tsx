/*
 * DESIGN: Cinematic Noir
 * Services section with two parts:
 * 1. Service category cards (existing style, enhanced)
 * 2. Production packages/tiers with detailed feature lists
 * Asymmetric grid layout. Section numbered "01".
 */
import { useState, useRef, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Film,
  Palette,
  Share2,
  Tv,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const IMG_VIDEO =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663343684150/VqHhclKGwOEkTtQK.jpg";
const IMG_BRANDING =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663343684150/IzfpUWxNADwZgCuU.jpg";
const IMG_SOCIAL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663343684150/EcTSzENuEkXezMde.jpg";
const IMG_COMMERCIAL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663343684150/BKPTYJkhTplVEAFC.jpg";

const services = [
  {
    icon: Film,
    title: "Video Production",
    description:
      "From concept to final cut, we produce compelling visual narratives — corporate films, documentaries, music videos, and branded content that captivates audiences.",
    image: IMG_VIDEO,
    accent: "amber",
  },
  {
    icon: Palette,
    title: "Branding",
    description:
      "Strategic brand identity development that communicates your unique story. Logo design, brand guidelines, and visual systems that leave lasting impressions.",
    image: IMG_BRANDING,
    accent: "teal",
  },
  {
    icon: Share2,
    title: "Social Media Content",
    description:
      "Scroll-stopping content engineered for engagement. We create platform-native videos, graphics, and campaigns that build communities and drive results.",
    image: IMG_SOCIAL,
    accent: "amber",
  },
  {
    icon: Tv,
    title: "TV Commercials",
    description:
      "Broadcast-quality commercials that command attention. Full-service production from scripting and casting to post-production and delivery.",
    image: IMG_COMMERCIAL,
    accent: "teal",
  },
];

interface Package {
  name: string;
  tagline: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
}

const packages: Package[] = [
  {
    name: "Starter",
    tagline: "Perfect for small businesses and startups",
    features: [
      "1 concept & script development",
      "Half-day shoot (up to 4 hours)",
      "1 camera setup",
      "Basic lighting & audio",
      "Up to 60-second final edit",
      "2 revision rounds",
      "Digital delivery (MP4/MOV)",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    tagline: "Our most popular package for growing brands",
    badge: "Most Popular",
    features: [
      "Full creative brief & storyboarding",
      "Full-day shoot (up to 8 hours)",
      "Multi-camera setup (2-3 cameras)",
      "Professional lighting, audio & grip",
      "Up to 3-minute final edit",
      "Motion graphics & lower thirds",
      "Color grading & sound design",
      "3 revision rounds",
      "Optimized for web + social formats",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    tagline: "Enterprise-level production for maximum impact",
    features: [
      "Full pre-production (concept, script, casting)",
      "Multi-day shoot (custom schedule)",
      "Cinema-grade camera & lens package",
      "Full crew (director, DP, gaffer, sound)",
      "Aerial drone footage",
      "Advanced post-production & VFX",
      "Original music / licensed soundtrack",
      "Unlimited revisions",
      "Broadcast-ready master + all formats",
      "Dedicated project manager",
    ],
    highlighted: false,
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className="reveal group relative overflow-hidden"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.05_0.005_285/95%)] via-[oklch(0.05_0.005_285/40%)] to-transparent" />

        {/* Icon badge */}
        <div
          className={`absolute top-4 left-4 w-10 h-10 flex items-center justify-center rounded-full ${
            service.accent === "amber"
              ? "bg-primary/20 text-primary"
              : "bg-accent/20 text-accent"
          }`}
        >
          <service.icon size={20} strokeWidth={1.5} />
        </div>

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
          <h3 className="font-display text-2xl md:text-3xl tracking-wide text-white mb-2">
            {service.title}
          </h3>
          <p className="text-sm text-[oklch(0.75_0.005_85)] font-body leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-sm">
            {service.description}
          </p>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className={`h-[2px] w-0 group-hover:w-full transition-all duration-500 ${
          service.accent === "amber" ? "bg-primary" : "bg-accent"
        }`}
      />
    </div>
  );
}

function PackageCard({
  pkg,
  index,
}: {
  pkg: Package;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative flex flex-col p-8 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${
        pkg.highlighted
          ? "bg-[oklch(0.1_0.01_75/60%)] border border-primary/30 shadow-[0_0_40px_oklch(0.82_0.16_75/8%)]"
          : "bg-[oklch(0.08_0.005_285/60%)] border border-[oklch(1_0_0/8%)]"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Popular badge */}
      {pkg.badge && (
        <div className="absolute -top-3 left-8 px-4 py-1 bg-primary text-primary-foreground text-[10px] tracking-[0.2em] uppercase font-body rounded-full flex items-center gap-1.5">
          <Sparkles className="w-3 h-3" />
          {pkg.badge}
        </div>
      )}

      {/* Package name */}
      <h3 className="font-display text-2xl md:text-3xl tracking-wider text-foreground mb-1">
        {pkg.name}
      </h3>
      <p className="text-sm text-muted-foreground font-body mb-6">
        {pkg.tagline}
      </p>

      {/* Divider */}
      <div
        className={`w-full h-px mb-6 ${
          pkg.highlighted ? "bg-primary/30" : "bg-[oklch(1_0_0/8%)]"
        }`}
      />

      {/* Features */}
      <ul className="flex-1 space-y-3 mb-8">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check
              className={`w-4 h-4 mt-0.5 shrink-0 ${
                pkg.highlighted ? "text-primary" : "text-muted-foreground"
              }`}
              strokeWidth={2}
            />
            <span className="text-sm text-muted-foreground font-body leading-relaxed">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={() => {
          const el = document.querySelector("#contact");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        className={`w-full py-3.5 text-xs tracking-[0.15em] uppercase font-body rounded-full flex items-center justify-center gap-2 transition-all duration-300 ${
          pkg.highlighted
            ? "bg-primary text-primary-foreground hover:bg-[oklch(0.75_0.16_75)]"
            : "bg-transparent border border-[oklch(1_0_0/15%)] text-foreground hover:border-primary hover:text-primary"
        }`}
      >
        Get Started <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

export default function Services() {
  const headerRef = useScrollReveal();
  const packagesHeaderRef = useScrollReveal();

  return (
    <section id="services" className="relative py-24 md:py-32">
      {/* Film strip divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container">
        {/* Section header */}
        <div ref={headerRef} className="reveal mb-16 md:mb-20 relative">
          <span className="section-number">01</span>
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-3">
            What We Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide text-foreground">
            OUR SERVICES
          </h2>
          <div className="w-12 h-0.5 bg-primary/40 mt-4" />
        </div>

        {/* Services grid — asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* ===== Production Packages ===== */}
        <div className="mt-24 md:mt-32">
          <div
            ref={packagesHeaderRef}
            className="reveal mb-14 md:mb-16 text-center"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-body mb-3">
              Production Packages
            </p>
            <h3 className="font-display text-3xl md:text-5xl tracking-wider text-foreground">
              CHOOSE YOUR PACKAGE
            </h3>
            <div className="w-12 h-0.5 bg-primary/40 mt-4 mx-auto" />
            <p className="text-muted-foreground font-body max-w-2xl mx-auto mt-6 text-base leading-relaxed">
              Every project is unique. Choose a package that fits your needs, or
              contact us for a custom quote tailored to your specific vision and
              budget.
            </p>
          </div>

          {/* Packages grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {packages.map((pkg, i) => (
              <PackageCard key={pkg.name} pkg={pkg} index={i} />
            ))}
          </div>

          {/* Custom note */}
          <p className="text-center text-sm text-muted-foreground font-body mt-10 tracking-wider">
            Need something different?{" "}
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-primary hover:underline underline-offset-4"
            >
              Let's talk about a custom package
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
