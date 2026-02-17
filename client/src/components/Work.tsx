/*
 * DESIGN: Cinematic Noir
 * Portfolio showcase with full-bleed images and hover overlays.
 * Alternating layout — large feature + smaller grid. Section numbered "02".
 */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowUpRight } from "lucide-react";

const IMG_1 = "/images/work-1.jpg";
const IMG_2 = "/images/work-2.jpg";
const IMG_3 = "/images/work-3.jpg";

const projects = [
  {
    title: "Luxury Auto Campaign",
    category: "TV Commercial",
    image: IMG_1,
    description: "A cinematic showcase for a premium automotive brand, shot on location with a 40-person crew.",
  },
  {
    title: "Live Event Coverage",
    category: "Event Production",
    image: IMG_2,
    description: "Multi-camera broadcast production for a major corporate event with 5,000+ attendees.",
  },
  {
    title: "Culinary Series",
    category: "Branded Content",
    image: IMG_3,
    description: "A six-part digital series celebrating Filipino cuisine, produced for a national food brand.",
  },
];

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: (typeof projects)[0];
  index: number;
  featured?: boolean;
}) {
  const ref = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`reveal group relative overflow-hidden cursor-pointer ${
        featured ? "md:col-span-2 aspect-[21/9]" : "aspect-[16/10]"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />

      {/* Default overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.05_0.005_285/80%)] via-transparent to-transparent" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[oklch(0.05_0.005_285/70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
        <p className="text-xs tracking-[0.3em] uppercase text-primary font-body mb-2">
          {project.category}
        </p>
        <h3 className="font-display text-2xl md:text-3xl lg:text-4xl tracking-wide text-white mb-3">
          {project.title}
        </h3>
        <p className="text-sm text-[oklch(0.75_0.005_85)] font-body max-w-md leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Arrow indicator */}
      <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center border border-[oklch(1_0_0/20%)] text-white opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-primary group-hover:text-primary rounded-full">
        <ArrowUpRight size={18} />
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-primary transition-all duration-700" />
    </div>
  );
}

export default function Work() {
  const headerRef = useScrollReveal();

  return (
    <section id="work" className="relative py-24 md:py-32 bg-[oklch(0.06_0.005_285)]">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="container">
        {/* Section header */}
        <div ref={headerRef} className="reveal mb-16 md:mb-20 relative">
          <span className="section-number">02</span>
          <p className="text-sm tracking-[0.3em] uppercase text-accent font-body mb-3">
            Selected Projects
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide text-foreground">
            OUR WORK
          </h2>
          <div className="w-12 h-0.5 bg-accent/40 mt-4" />
        </div>

        {/* Project grid — featured first, then two smaller */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          <ProjectCard project={projects[0]} index={0} featured />
          <ProjectCard project={projects[1]} index={1} />
          <ProjectCard project={projects[2]} index={2} />
        </div>
      </div>
    </section>
  );
}
