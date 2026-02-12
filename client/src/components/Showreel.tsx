/*
 * DESIGN: Cinematic Noir
 * Full-width showreel section with embedded YouTube video.
 * Features a cinematic "letterbox" frame and dramatic section header.
 * Main showcase: MAKE IT HAPPEN PRODUCTION showreel.
 */
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Play } from "lucide-react";

const SHOWREEL_VIDEO_ID = "pWB2v9DgOxg";
const SHOWREEL_THUMBNAIL = `https://img.youtube.com/vi/${SHOWREEL_VIDEO_ID}/maxresdefault.jpg`;

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const headerRef = useScrollReveal();
  const videoRef = useScrollReveal(0.1);

  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container">
        {/* Section header */}
        <div ref={headerRef} className="reveal mb-12 md:mb-16 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-3">
            Watch Our Reel
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide text-foreground">
            SEE US IN ACTION
          </h2>
          <div className="w-12 h-0.5 bg-primary/40 mt-4 mx-auto" />
        </div>

        {/* Video container with cinematic frame */}
        <div ref={videoRef} className="reveal max-w-5xl mx-auto">
          {/* Letterbox frame */}
          <div className="relative rounded-sm overflow-hidden border border-[oklch(1_0_0/6%)] shadow-[0_0_80px_oklch(0.3_0.05_85/10%)]">
            {/* Top letterbox bar */}
            <div className="h-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />

            {/* Video area */}
            <div className="relative aspect-video bg-[oklch(0.04_0.005_285)]">
              {!isPlaying ? (
                /* Thumbnail with play button */
                <div className="absolute inset-0 group cursor-pointer" onClick={() => setIsPlaying(true)}>
                  <img
                    src={SHOWREEL_THUMBNAIL}
                    alt="MIH Productions Showreel"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-[oklch(0.05_0.005_285/50%)] group-hover:bg-[oklch(0.05_0.005_285/30%)] transition-colors duration-500" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/90 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-500 shadow-[0_0_40px_oklch(0.6_0.15_85/30%)]">
                      <Play size={32} className="text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Video title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-[oklch(0.05_0.005_285/90%)] to-transparent">
                    <p className="text-xs tracking-[0.2em] uppercase text-primary font-body mb-1">
                      Featured Showreel
                    </p>
                    <p className="font-display text-xl md:text-2xl tracking-wide text-white">
                      MAKE IT HAPPEN PRODUCTIONS
                    </p>
                  </div>
                </div>
              ) : (
                /* YouTube embed */
                <iframe
                  src={`https://www.youtube.com/embed/${SHOWREEL_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&color=white`}
                  title="MIH Productions Showreel"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            {/* Bottom letterbox bar */}
            <div className="h-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />
          </div>
        </div>

        {/* Secondary video thumbnails */}
        <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <VideoThumb
            videoId="poseITACRhA"
            title="Ihaw On The Go"
            category="TV Commercial"
          />
          <VideoThumb
            videoId="LQccx7bRYSk"
            title="Hublot Watch Shoot"
            category="Product Film"
          />
          <VideoThumb
            videoId="pWB2v9DgOxg"
            title="Company Showreel"
            category="Brand Film"
          />
        </div>
      </div>
    </section>
  );
}

function VideoThumb({
  videoId,
  title,
  category,
}: {
  videoId: string;
  title: string;
  category: string;
}) {
  const ref = useScrollReveal<HTMLAnchorElement>(0.1);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <a
      ref={ref}
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="reveal group relative overflow-hidden aspect-video"
    >
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[oklch(0.05_0.005_285/60%)] group-hover:bg-[oklch(0.05_0.005_285/40%)] transition-colors duration-300" />

      {/* Play icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
          <Play size={16} className="text-primary-foreground ml-0.5" fill="currentColor" />
        </div>
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[oklch(0.05_0.005_285/90%)] to-transparent">
        <p className="text-[10px] tracking-[0.2em] uppercase text-primary font-body">
          {category}
        </p>
        <p className="font-display text-sm tracking-wide text-white">
          {title}
        </p>
      </div>
    </a>
  );
}
