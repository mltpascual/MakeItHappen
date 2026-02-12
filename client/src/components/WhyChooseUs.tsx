/*
 * DESIGN: Cinematic Noir
 * Why Choose Us — differentiators with icons and descriptions.
 * Asymmetric grid layout with amber/teal accent highlights.
 * Hover effects reveal additional depth.
 */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Award,
  Film,
  Users,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react";

const differentiators = [
  {
    icon: Film,
    title: "Cinema-Grade Equipment",
    description:
      "We shoot with industry-standard cameras, lenses, and lighting rigs — the same tools used in feature films and major broadcast productions.",
    accent: "amber" as const,
  },
  {
    icon: Users,
    title: "Experienced Creative Team",
    description:
      "Our directors, cinematographers, and editors bring decades of combined experience across TV, film, and digital media.",
    accent: "teal" as const,
  },
  {
    icon: Award,
    title: "Award-Winning Quality",
    description:
      "Recognized across the industry for excellence in storytelling, production value, and creative innovation.",
    accent: "amber" as const,
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "Efficient workflows and dedicated project management ensure your content is delivered on time, every time — without compromising quality.",
    accent: "teal" as const,
  },
  {
    icon: Shield,
    title: "Brand-Safe Process",
    description:
      "Global brands trust our process to safeguard their image. Every detail is reviewed to ensure alignment with your brand standards.",
    accent: "amber" as const,
  },
  {
    icon: TrendingUp,
    title: "Results-Driven Approach",
    description:
      "We don't just create beautiful content — we create content that drives measurable business results and audience engagement.",
    accent: "teal" as const,
  },
];

export default function WhyChooseUs() {
  const headerRef = useScrollReveal();

  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Subtle grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 10%) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 10%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative">
        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-16 md:mb-20">
          <p className="text-xs tracking-[0.4em] uppercase text-primary/70 font-body mb-3">
            The MIH Difference
          </p>
          <h2 className="font-display text-4xl md:text-6xl tracking-wide">
            WHY CHOOSE US
          </h2>
          <div className="w-16 h-0.5 bg-primary mt-4 mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {differentiators.map((item, i) => (
            <DifferentiatorCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DifferentiatorCard({
  item,
  index,
}: {
  item: (typeof differentiators)[0];
  index: number;
}) {
  const ref = useScrollReveal(0.05 + index * 0.06);
  const isAmber = item.accent === "amber";

  return (
    <div ref={ref} className="reveal group">
      <div className="relative h-full p-8 bg-[oklch(0.1_0.005_285)] border border-[oklch(1_0_0/5%)] rounded-sm overflow-hidden hover:border-primary/20 transition-all duration-500">
        {/* Corner accent */}
        <div
          className={`absolute top-0 right-0 w-16 h-16 ${
            isAmber ? "bg-primary/[0.04]" : "bg-accent/[0.04]"
          } group-hover:${
            isAmber ? "bg-primary/[0.08]" : "bg-accent/[0.08]"
          } transition-colors duration-500`}
          style={{
            clipPath: "polygon(100% 0, 0 0, 100% 100%)",
          }}
        />

        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 border ${
            isAmber
              ? "border-primary/20 group-hover:border-primary/40"
              : "border-accent/20 group-hover:border-accent/40"
          } transition-colors duration-500`}
        >
          <item.icon
            className={`w-5 h-5 ${
              isAmber
                ? "text-primary/60 group-hover:text-primary"
                : "text-accent/60 group-hover:text-accent"
            } transition-colors duration-500`}
          />
        </div>

        {/* Title */}
        <h3 className="font-display text-xl tracking-wider mb-3 group-hover:text-primary transition-colors duration-500">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-muted-foreground font-body">
          {item.description}
        </p>

        {/* Bottom accent line */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-[2px] ${
            isAmber ? "bg-primary/0 group-hover:bg-primary/30" : "bg-accent/0 group-hover:bg-accent/30"
          } transition-colors duration-500`}
        />
      </div>
    </div>
  );
}
