/*
 * DESIGN: Cinematic Noir
 * FAQ section — accordion-style frequently asked questions.
 * Clean, minimal design with amber accent on active items.
 * Uses Radix accordion for accessible expand/collapse.
 * Left column is sticky so it doesn't shift when accordion items expand.
 * Enhanced with smooth expand/collapse animations.
 */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of video production services do you offer?",
    answer:
      "We offer a comprehensive range of video production services including TV commercials, corporate videos, brand films, social media content, event coverage, documentaries, music videos, and animated explainer videos. Each project is tailored to your specific goals and audience.",
  },
  {
    question: "How much does a typical video production project cost?",
    answer:
      "Project costs vary depending on scope, complexity, and deliverables. A social media content package may start from a different range than a full TV commercial production. We provide detailed, transparent quotes after our initial discovery consultation so there are no surprises.",
  },
  {
    question: "What is the typical turnaround time for a project?",
    answer:
      "Timelines depend on the project type and complexity. A social media content package can be delivered in 1-2 weeks, while a full TV commercial may take 4-8 weeks from concept to final delivery. We always establish clear timelines during the pre-production phase.",
  },
  {
    question: "Do you handle the entire production process in-house?",
    answer:
      "Yes, we manage every stage of production — from concept development and scripting through filming, editing, color grading, sound design, and final delivery. Our in-house team includes directors, cinematographers, editors, and motion graphics artists.",
  },
  {
    question: "Can you work with our existing brand guidelines?",
    answer:
      "Absolutely. We pride ourselves on being brand-conscious. Whether you have comprehensive brand guidelines or just a logo and color palette, we ensure all content aligns perfectly with your brand identity and messaging.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "While we're based in Parañaque City, Metro Manila, we serve clients nationwide and have experience with international productions. We're equipped to travel for on-location shoots anywhere your project requires.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply reach out through our contact form or give us a call. We'll schedule a free discovery consultation to understand your vision, goals, and requirements. From there, we'll provide a detailed proposal with creative direction, timeline, and pricing.",
  },
];

export default function FAQ() {
  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal(0.1);

  return (
    <section className="relative py-24 md:py-32 bg-[oklch(0.06_0.005_285)] overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.015] rounded-full blur-3xl pointer-events-none" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left column — header (sticky so it doesn't shift on accordion expand) */}
          <div ref={headerRef} className="reveal lg:col-span-4 lg:sticky lg:top-24">
            <p className="text-xs tracking-[0.4em] uppercase text-primary/70 font-body mb-3">
              Common Questions
            </p>
            <h2 className="font-display text-4xl md:text-5xl tracking-wide mb-4">
              FAQ
            </h2>
            <div className="w-16 h-0.5 bg-primary mb-6" />
            <p className="text-muted-foreground font-body leading-relaxed">
              Everything you need to know about working with Make It Happen
              Productions. Can't find what you're looking for? Reach out to our
              team directly.
            </p>
          </div>

          {/* Right column — accordion */}
          <div ref={contentRef} className="reveal lg:col-span-8">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="group/faq border border-[oklch(1_0_0/6%)] bg-[oklch(0.08_0.005_285)] px-6 rounded-sm transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] data-[state=open]:border-primary/20 data-[state=open]:bg-[oklch(0.09_0.008_75)] data-[state=open]:shadow-[0_0_30px_oklch(0.82_0.16_75/5%)]"
                >
                  <AccordionTrigger className="font-display text-base md:text-lg tracking-wider text-left py-5 hover:text-primary transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] [&[data-state=open]]:text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-5 text-sm md:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
