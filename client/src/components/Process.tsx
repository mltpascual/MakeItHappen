/*
 * DESIGN: Cinematic Noir
 * Our Process — visual step-by-step breakdown of MIH's production workflow.
 * Horizontal timeline on desktop, vertical on mobile.
 * Amber accent numbering with teal connector lines.
 */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Search, Clapperboard, Video, Sparkles, Send } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your brand, goals, and audience. Through in-depth consultations, we define the creative direction and project scope.",
    icon: Search,
  },
  {
    number: "02",
    title: "Pre-Production",
    description:
      "Scripting, storyboarding, casting, location scouting, and scheduling. Every detail is planned to ensure a seamless production day.",
    icon: Clapperboard,
  },
  {
    number: "03",
    title: "Production",
    description:
      "Lights, camera, action. Our experienced crew brings the vision to life with professional-grade equipment and cinematic techniques.",
    icon: Video,
  },
  {
    number: "04",
    title: "Post-Production",
    description:
      "Editing, color grading, sound design, motion graphics, and VFX. We refine every frame until it meets our exacting standards.",
    icon: Sparkles,
  },
  {
    number: "05",
    title: "Delivery",
    description:
      "Final review, revisions, and delivery in all required formats. Your content is ready to captivate audiences across every platform.",
    icon: Send,
  },
];

export default function Process() {
  const headerRef = useScrollReveal();

  return (
    <section id="process" className="relative py-24 md:py-32 bg-[oklch(0.06_0.005_285)] overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/[0.02] to-transparent pointer-events-none" />

      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="reveal mb-16 md:mb-20">
          <p className="text-xs tracking-[0.4em] uppercase text-primary/70 font-body mb-3">
            How We Work
          </p>
          <h2 className="font-display text-4xl md:text-6xl tracking-wide">
            OUR PROCESS
          </h2>
          <div className="w-16 h-0.5 bg-primary mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line — desktop horizontal */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-px bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, i) => (
              <ProcessStep key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const ref = useScrollReveal(0.1 + index * 0.08);

  return (
    <div ref={ref} className="reveal group relative">
      {/* Step card */}
      <div className="relative flex flex-col items-center text-center lg:items-center">
        {/* Icon circle */}
        <div className="relative mb-5">
          <div className="w-[72px] h-[72px] rounded-full border border-primary/20 flex items-center justify-center bg-[oklch(0.08_0.005_285)] group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500">
            <step.icon className="w-6 h-6 text-primary/60 group-hover:text-primary transition-colors duration-500" />
          </div>
          {/* Step number badge */}
          <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-body font-bold flex items-center justify-center">
            {step.number}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl md:text-2xl tracking-wider mb-3 group-hover:text-primary transition-colors duration-500">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-muted-foreground font-body max-w-[260px]">
          {step.description}
        </p>
      </div>

      {/* Arrow connector for mobile/tablet between steps */}
      {index < steps.length - 1 && (
        <div className="flex justify-center my-4 lg:hidden">
          <div className="w-px h-8 bg-gradient-to-b from-primary/30 to-transparent" />
        </div>
      )}
    </div>
  );
}
