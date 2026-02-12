/*
 * DESIGN: Cinematic Noir
 * Testimonials carousel — social proof from past clients.
 * Auto-rotating cards with quote marks and star ratings.
 * Uses amber accent for active states and teal for subtle highlights.
 */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useEffect, useCallback } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Make It Happen Productions transformed our brand story into a cinematic experience. Their attention to detail and creative vision exceeded all expectations.",
    name: "Maria Santos",
    title: "Marketing Director",
    company: "Global Foods Corp.",
    rating: 5,
  },
  {
    quote:
      "From concept to delivery, the MIH team was professional, creative, and incredibly efficient. Our TV commercial drove a 40% increase in brand awareness.",
    name: "Carlos Reyes",
    title: "CEO",
    company: "Reyes Automotive Group",
    rating: 5,
  },
  {
    quote:
      "Their social media content strategy completely revitalized our online presence. Engagement rates tripled within the first month of launching the campaign.",
    name: "Angela Cruz",
    title: "Brand Manager",
    company: "Metro Lifestyle Co.",
    rating: 5,
  },
  {
    quote:
      "Working with MIH felt like a true partnership. They understood our vision and elevated it beyond what we imagined. The production quality is world-class.",
    name: "David Tan",
    title: "Creative Director",
    company: "Pinnacle Advertising",
    rating: 5,
  },
  {
    quote:
      "The team delivered our corporate video ahead of schedule and under budget. The final product was stunning — our stakeholders were thoroughly impressed.",
    name: "Patricia Lim",
    title: "VP of Communications",
    company: "Pacific Holdings Inc.",
    rating: 5,
  },
];

export default function Testimonials() {
  const headerRef = useScrollReveal();
  const carouselRef = useScrollReveal(0.1);
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-accent/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-primary/70 font-body mb-3">
            Client Stories
          </p>
          <h2 className="font-display text-4xl md:text-6xl tracking-wide">
            WHAT THEY SAY
          </h2>
          <div className="w-16 h-0.5 bg-primary mt-4 mx-auto" />
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="reveal relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Quote icon */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <Quote className="w-10 h-10 text-primary/20" />
          </div>

          {/* Card */}
          <div className="relative bg-[oklch(0.1_0.005_285)] border border-[oklch(1_0_0/6%)] rounded-sm px-8 md:px-16 py-12 md:py-16 min-h-[320px] flex flex-col items-center justify-center">
            {/* Letterbox bars */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            {/* Content with fade transition */}
            <div
              key={current}
              className="flex flex-col items-center text-center animate-in fade-in duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  )
                )}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl leading-relaxed text-foreground/90 font-body italic mb-8 max-w-2xl">
                "{testimonials[current].quote}"
              </blockquote>

              {/* Attribution */}
              <div>
                <p className="font-display text-lg tracking-wider text-primary">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-muted-foreground font-body mt-1">
                  {testimonials[current].title},{" "}
                  {testimonials[current].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[oklch(1_0_0/10%)] flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 text-foreground/60" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === current
                      ? "w-8 bg-primary"
                      : "w-1.5 bg-[oklch(1_0_0/15%)] hover:bg-[oklch(1_0_0/30%)]"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[oklch(1_0_0/10%)] flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 text-foreground/60" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
