/*
 * DESIGN: Cinematic Noir
 * Client logo bar — horizontal scrolling strip of brand partners.
 * Uses stylized SVG text logos on a dark background with subtle amber accents.
 * Infinite scroll animation for a polished, editorial feel.
 */
import { useScrollReveal } from "@/hooks/useScrollReveal";

const clients = [
  { name: "MichaelAngelo", subtitle: "The Sitcom" },
  { name: "Ihaw On The Go", subtitle: "Lava Rock Grilled" },
  { name: "Hublot", subtitle: "Swiss Watches" },
  { name: "GMA Network", subtitle: "Television" },
  { name: "Bounty Fresh", subtitle: "Poultry Products" },
  { name: "Smart", subtitle: "Communications" },
];

function LogoItem({ client }: { client: (typeof clients)[0] }) {
  return (
    <div className="flex-shrink-0 flex flex-col items-center justify-center px-8 md:px-12 py-4 group">
      <span className="font-display text-xl md:text-2xl tracking-[0.15em] uppercase text-[oklch(0.55_0.005_285)] group-hover:text-primary transition-colors duration-500 whitespace-nowrap">
        {client.name}
      </span>
      {client.subtitle && (
        <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-[oklch(0.35_0.005_285)] group-hover:text-primary/60 transition-colors duration-500 mt-0.5 font-body whitespace-nowrap">
          {client.subtitle}
        </span>
      )}
    </div>
  );
}

function Divider() {
  return (
    <div className="flex-shrink-0 flex items-center px-4">
      <div className="w-1.5 h-1.5 rotate-45 bg-primary/30" />
    </div>
  );
}

export default function ClientLogos() {
  const headerRef = useScrollReveal();
  const stripRef = useScrollReveal(0.05);

  return (
    <section className="relative py-16 md:py-20 bg-[oklch(0.04_0.005_285)] overflow-hidden">
      {/* Top divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(1_0_0/6%)] to-transparent" />

      {/* Section header */}
      <div ref={headerRef} className="reveal container mb-10 md:mb-12 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-primary/70 font-body mb-2">
          Trusted By
        </p>
        <h3 className="font-display text-2xl md:text-3xl tracking-wide text-[oklch(0.6_0.005_285)]">
          BRANDS WE'VE WORKED WITH
        </h3>
      </div>

      {/* Scrolling logo strip */}
      <div ref={stripRef} className="reveal relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[oklch(0.04_0.005_285)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[oklch(0.04_0.005_285)] to-transparent z-10 pointer-events-none" />

        {/* Animated strip */}
        <div className="flex items-center client-logo-scroll">
          {/* First set */}
          <div className="flex items-center shrink-0 client-logo-track">
            {clients.map((client, i) => (
              <div key={`a-${i}`} className="flex items-center">
                <LogoItem client={client} />
                <Divider />
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center shrink-0 client-logo-track" aria-hidden="true">
            {clients.map((client, i) => (
              <div key={`b-${i}`} className="flex items-center">
                <LogoItem client={client} />
                <Divider />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
    </section>
  );
}
