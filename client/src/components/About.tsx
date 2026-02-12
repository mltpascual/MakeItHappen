/*
 * DESIGN: Cinematic Noir
 * About section with asymmetric two-column layout.
 * Background image on one side with parallax, text content on the other.
 * Section numbered "03". Stats bar with amber accents.
 */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useParallax } from "@/hooks/useParallax";

const ABOUT_BG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663343684150/khLjfAMzVXtVySJW.jpg";

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Brand Partners" },
  { value: "15+", label: "Industry Awards" },
];

export default function About() {
  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal(0.1);
  const statsRef = useScrollReveal(0.1);
  const { ref: parallaxImgRef, offset } = useParallax(0.1);

  return (
    <section id="about" className="relative py-24 md:py-32">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container">
        {/* Section header */}
        <div ref={headerRef} className="reveal mb-16 md:mb-20 relative">
          <span className="section-number">03</span>
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-3">
            Who We Are
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide text-foreground">
            ABOUT MIH
          </h2>
          <div className="w-12 h-0.5 bg-primary/40 mt-4" />
        </div>

        {/* Two-column layout */}
        <div
          ref={contentRef}
          className="reveal grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* Image side with parallax */}
          <div ref={parallaxImgRef} className="relative overflow-hidden aspect-[4/3] lg:aspect-[3/4]">
            <img
              src={ABOUT_BG}
              alt="MIH creative team collaborating in studio"
              className="w-full h-full object-cover"
              loading="lazy"
              style={{
                transform: `translateY(${offset * 0.5}px) scale(1.08)`,
                willChange: "transform",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.05_0.005_285/60%)] via-transparent to-transparent" />
            {/* Decorative frame */}
            <div className="absolute top-4 left-4 right-4 bottom-4 border border-primary/15 pointer-events-none" />
          </div>

          {/* Text side */}
          <div>
            <h3 className="font-display text-3xl md:text-4xl tracking-wide text-foreground mb-6">
              MEDIA INVESTED IN
              <br />
              <span className="text-primary">HUMANITY & PURPOSE</span>
            </h3>

            <div className="space-y-5 text-[oklch(0.75_0.005_85)] font-body leading-relaxed">
              <p>
                Make It Happen Productions is a multi-award-winning creative
                service company based in Parañaque City, Philippines. We create
                visual media solutions that translate brands and tell innovative
                stories that provoke positive response.
              </p>
              <p>
                For years, global brands, TV networks, and studios have trusted
                our process to safeguard their image. We invest in the lives and
                dreams of our creative staff to optimize the client experience.
              </p>
              <p>
                Our team combines strategic thinking with artistic execution —
                delivering video production, branding, social media content, and
                TV commercials that move audiences and drive results.
              </p>
            </div>

            {/* Amber accent line */}
            <div className="w-16 h-0.5 bg-primary/40 my-8" />

            {/* Process keywords */}
            <div className="flex flex-wrap gap-3">
              {[
                "Strategic",
                "Innovative",
                "Storytelling",
                "Results-Driven",
              ].map((word) => (
                <span
                  key={word}
                  className="px-4 py-1.5 text-xs tracking-[0.2em] uppercase font-body border border-[oklch(1_0_0/10%)] text-muted-foreground rounded-full"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          ref={statsRef}
          className="reveal mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[oklch(1_0_0/6%)]"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-background p-6 md:p-8 text-center group hover:bg-[oklch(0.1_0.005_285)] transition-colors duration-300"
            >
              <span className="font-display text-3xl md:text-4xl text-primary block mb-2">
                {stat.value}
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
