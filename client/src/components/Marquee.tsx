/*
 * DESIGN: Cinematic Noir
 * Horizontal scrolling marquee with production-related keywords.
 * Creates visual rhythm between major sections.
 * Uses inline-flex with proper width to prevent overlapping.
 */

interface MarqueeProps {
  words: string[];
  direction?: "left" | "right";
  accent?: "amber" | "teal";
}

export default function Marquee({
  words,
  direction = "left",
  accent = "amber",
}: MarqueeProps) {
  const accentColor =
    accent === "amber" ? "text-primary" : "text-accent";
  const dotColor =
    accent === "amber"
      ? "bg-primary/40"
      : "bg-accent/40";

  // Render a single set of words as one "track"
  const WordSet = ({ keyPrefix }: { keyPrefix: string }) => (
    <>
      {words.map((word, i) => (
        <span
          key={`${keyPrefix}-${i}`}
          className="inline-flex items-center gap-6 md:gap-8 shrink-0"
        >
          <span
            className={`font-display text-lg md:text-xl tracking-[0.2em] uppercase ${accentColor} opacity-60 whitespace-nowrap`}
          >
            {word}
          </span>
          <span
            className={`w-1.5 h-1.5 rounded-full ${dotColor} shrink-0`}
          />
        </span>
      ))}
    </>
  );

  return (
    <div className="relative overflow-hidden py-5 md:py-6 border-y border-[oklch(1_0_0/5%)]">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      <div
        className={`inline-flex gap-6 md:gap-8 ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
      >
        <WordSet keyPrefix="a" />
        <WordSet keyPrefix="b" />
        <WordSet keyPrefix="c" />
      </div>
    </div>
  );
}
