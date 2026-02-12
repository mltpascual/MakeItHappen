/*
 * DESIGN: Cinematic Noir
 * Project Gallery — filterable masonry-style grid with hover overlays and lightbox modal.
 * Categories: All, Corporate, Commercial, Branding, Social Media, Events
 * Each project card shows image, title, category, and brief description on hover.
 * Lightbox includes embedded YouTube video for each project.
 */
import { useState, useRef, useEffect } from "react";
import { X, ExternalLink, Play } from "lucide-react";

const categories = [
  "All",
  "Corporate",
  "Commercial",
  "Branding",
  "Social Media",
  "Events",
] as const;

type Category = (typeof categories)[number];

interface Project {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  client: string;
  description: string;
  image: string;
  year: string;
  tags: string[];
  youtubeId: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Executive Vision 2025",
    category: "Corporate",
    client: "Fortune 500 Corp",
    description:
      "A cinematic corporate AVP capturing the company's strategic vision through interviews, aerial footage, and motion graphics. Delivered across internal and external channels.",
    image:
      "https://private-us-east-1.manuscdn.com/sessionFile/rKrXyqvjqVkAyXFfFimhym/sandbox/0yTS1VSvi5Se9PewRI246k-img-1_1770833767000_na1fn_Z2FsbGVyeS1jb3Jwb3JhdGU.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcktyWHlxdmpxVmtBeVhGZkZpbWh5bS9zYW5kYm94LzB5VFMxVlN2aTVTZTlQZXdSSTI0NmstaW1nLTFfMTc3MDgzMzc2NzAwMF9uYTFmbl9aMkZzYkdWeWVTMWpiM0p3YjNKaGRHVS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UxTKWfElb9eFjiHM7IG5rJb11K0eCulWU~TG5regn4JZXGMPPxIYuVJezMeUMJ3vwLQQ4FeW~QIhpvHVl8WYUuwAIx7blcjaRHVcaKv0G2UuvpSBroimfqeSDuoLX2qb9QbKmmjVCEO~DFyKUJPYzyWYadOdoSv9T2ChuRmxh3teN4QOhqkVAnAMbofMHQKqbl41E5Q1m19aHiTqWWT4LTk2XmRyKIopIDEmHXYXoiJmC5-RhAAE7VoTs4576eRSpBRhT0ki3gmm3VasDkzYhomqob3f-9~bpi95GVqW4U2bgctJFwpWEX8A3QnxwbOqWAtSNK6-QJlFJ7gS7GFUDg__",
    year: "2025",
    tags: ["AVP", "Motion Graphics", "Aerial"],
    youtubeId: "pWB2v9DgOxg",
  },
  {
    id: 2,
    title: "Ihaw On The Go — Pork BBQ",
    category: "Commercial",
    client: "Ihaw On The Go",
    description:
      "A mouth-watering TV commercial for Ihaw On The Go's signature pork BBQ. Shot with cinematic food photography techniques, dramatic steam, and warm golden lighting to evoke appetite appeal.",
    image:
      "https://private-us-east-1.manuscdn.com/sessionFile/rKrXyqvjqVkAyXFfFimhym/sandbox/0yTS1VSvi5Se9PewRI246k-img-2_1770833770000_na1fn_Z2FsbGVyeS1jb21tZXJjaWFs.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcktyWHlxdmpxVmtBeVhGZkZpbWh5bS9zYW5kYm94LzB5VFMxVlN2aTVTZTlQZXdSSTI0NmstaW1nLTJfMTc3MDgzMzc3MDAwMF9uYTFmbl9aMkZzYkdWeWVTMWpiMjF0WlhKamFXRnMuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Tp7vwhjuJluokpnlTMod9GWd7K8Gw6w5hBsAvzCnIdcjlnNS5QPLHGNEKBUxdDCmW7CpXU3MR1jDg4qWmcJoVRuScIbaJ69hrcvDf8vrgGZcfM5SF2csCJOxtBgBpE8RurCY-LplUcoh-V5Gh75nVcnr-Z~IoQV3TXGrUw9xKCLTXgcAmeCg95~8BFqkGGI9XLIme1NS~nhsqbd-n0oWu~rV3wKmvyayK7rjXG6YDO1CB1Su809lEzxDokOMxugr34lHWyms4A3OGqt7zUYg0No8InN4izjwEpsyKIMKjDT5uWf-bFVAJCz8MN5DPe8lC0QdaM~h-Mg5wGhZ67~kwQ__",
    year: "2024",
    tags: ["TVC", "Food", "30s Spot"],
    youtubeId: "poseITACRhA",
  },
  {
    id: 3,
    title: "Hublot — Quarantine Series",
    category: "Branding",
    client: "Hublot",
    description:
      "A premium product film for Hublot's luxury watch collection. Shot on a reflective black surface with dramatic teal and amber gel lighting, capturing every detail of the timepiece's craftsmanship.",
    image:
      "https://private-us-east-1.manuscdn.com/sessionFile/rKrXyqvjqVkAyXFfFimhym/sandbox/0yTS1VSvi5Se9PewRI246k-img-3_1770833755000_na1fn_Z2FsbGVyeS1icmFuZGluZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcktyWHlxdmpxVmtBeVhGZkZpbWh5bS9zYW5kYm94LzB5VFMxVlN2aTVTZTlQZXdSSTI0NmstaW1nLTNfMTc3MDgzMzc1NTAwMF9uYTFmbl9aMkZzYkdWeWVTMWljbUZ1WkdsdVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=CxQT0f5dZtnta23ggDV0IkNOlm29kQXp3iUKX0CeZ9cOgPnmmG4N5dc5ENE~WVIEFIX3kx2FpaxS0QGmPjAVA3r9~CeoMXHMNZOlB-xVescaQFGYqIL2RtbLOB56vAGDN~ciTrHVvv2xkBXYI1d1QrMHUmX50k5FjBpiQC~NqDiq04N8iEE2nd7Fx7nquL2JohvY9moLcvzWE5hNO7PrCgPSLP1tpOcp5Mfw1PvsYFyJZVkSMbGu9BkQk~6QgpjKvTsIxm8glUXKQIWOvcBKzWwqLRvqbWlNjujIM5oTHHdVgD4heV1-jnW0-76MGrBnFCAtfeNjyZIC2tq3SiuuDw__",
    year: "2024",
    tags: ["Product Film", "Luxury", "Studio"],
    youtubeId: "LQccx7bRYSk",
  },
  {
    id: 4,
    title: "LILY — Short Film",
    category: "Social Media",
    client: "MIH Productions",
    description:
      "A compelling short film exploring themes of love and resilience. Beautifully shot with intimate cinematography and natural lighting, showcasing MIH's storytelling capabilities beyond commercial work.",
    image:
      "https://private-us-east-1.manuscdn.com/sessionFile/rKrXyqvjqVkAyXFfFimhym/sandbox/0yTS1VSvi5Se9PewRI246k-img-4_1770833760000_na1fn_Z2FsbGVyeS1zb2NpYWw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcktyWHlxdmpxVmtBeVhGZkZpbWh5bS9zYW5kYm94LzB5VFMxVlN2aTVTZTlQZXdSSTI0NmstaW1nLTRfMTc3MDgzMzc2MDAwMF9uYTFmbl9aMkZzYkdWeWVTMXpiMk5wWVd3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=hLYR1BLZbTR0XKMDXZt7iTGiyR2bDPmzltyZMoN7RBh2P1qbEfTCarcxWl5RKkdtbirw4iVzxbkLyiVVLIGJn6HKGaOIpiptgoljS3oifjibev9GhaeQS8fRHCOqa1uCF4yUt7mbpdUYMxhhK6pRQT-R0vu9gpk8H81h7WuIbnrCO4RefsZvkij9aRmpjSBaLlLUUqNVOkZ3-JDY1xHmo9STRapUHKMhMbT7gloeADDkh2D0YmbOd4gFXQDtjui5Yw6FhlHFRGNfEMh4GxG4iUBb03ut26NEPM1-ZH0XxLtHcLjgZIPTTLNefDg-I1v20kaTQP4K5XukeYh5iV1iUQ__",
    year: "2024",
    tags: ["Short Film", "Drama", "Narrative"],
    youtubeId: "Om4Ajpm-zh4",
  },
  {
    id: 5,
    title: "MichaelAngelo — Dalawang Ama",
    category: "Events",
    client: "MichaelAngelo",
    description:
      "A full-length drama special produced for MichaelAngelo. Multi-camera production with professional lighting, sound design, and post-production. Showcasing MIH's capability to deliver broadcast-quality content.",
    image:
      "https://private-us-east-1.manuscdn.com/sessionFile/rKrXyqvjqVkAyXFfFimhym/sandbox/0yTS1VSvi5Se9PewRI246k-img-5_1770833766000_na1fn_Z2FsbGVyeS1ldmVudA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcktyWHlxdmpxVmtBeVhGZkZpbWh5bS9zYW5kYm94LzB5VFMxVlN2aTVTZTlQZXdSSTI0NmstaW1nLTVfMTc3MDgzMzc2NjAwMF9uYTFmbl9aMkZzYkdWeWVTMWxkbVZ1ZEEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rxyRrnkxXWmUk3W-iuMb~PMn2StstuXP6fBw8Hvt9wfi-rx7onjVhbWFbt3y1l-wHvTSkAR45O6cgetIdBKOaECbhfph9Su89pTpY2iegU3A7Jm7FnaJbSgUZNnVQHH4esthyYk-jv-MDqCSCBwX7JGpIz9OMfHa-rSSvFAFWtQgt3mHAgc~yBTk5icgrAqxna4u7pR9O3SSKp6qTKHxQ8uW0Tb3Ojn5EkKrZ-sApdcDBsV4Yfa0MF-Ifnyfsw0Xr4mV~AilX8eH5kZBp7Bkt1wWgQuFOu63nH8NbO6RRHrgRO4B~uoTQi1G2qZalV-mQPsPzH3EUAReu8w8GL9QlA__",
    year: "2024",
    tags: ["Drama Special", "Multi-Cam", "Broadcast"],
    youtubeId: "pWB2v9DgOxg",
  },
];

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  // Reset video state when closing lightbox
  useEffect(() => {
    if (!selectedProject) {
      setShowVideo(false);
    }
  }, [selectedProject]);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const handleFilterChange = (cat: Category) => {
    if (cat === activeFilter) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveFilter(cat);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="gallery"
        className="relative py-24 md:py-32"
      >
        {/* Section header */}
        <div className="container mb-16">
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-primary font-body mb-3">
              Our Portfolio
            </p>
            <h2 className="font-display text-4xl md:text-6xl tracking-wider text-foreground">
              PROJECT GALLERY
            </h2>
            <div className="w-12 h-0.5 bg-primary mt-4 mb-6" />
            <p className="text-muted-foreground font-body max-w-xl text-base leading-relaxed">
              A curated selection of our finest work across corporate videos,
              commercials, branding, social media, and live events.
            </p>
          </div>

          {/* Filter tabs */}
          <div
            className={`flex flex-wrap gap-3 mt-10 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className={`px-5 py-2 text-xs tracking-[0.15em] uppercase font-body rounded-full border transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-[oklch(1_0_0/12%)] hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery grid */}
        <div className="container">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-300 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            {filteredProjects.map((project, i) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group relative aspect-[16/10] overflow-hidden rounded-sm cursor-pointer text-left transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Amber top accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Play icon center */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-5 h-5 text-primary ml-0.5" />
                  </div>
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  {/* Category badge */}
                  <span className="inline-block w-fit text-[10px] tracking-[0.2em] uppercase text-primary font-body mb-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 delay-100">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-display text-xl md:text-2xl tracking-wider text-white leading-tight translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                    {project.title}
                  </h3>

                  {/* Client + Year */}
                  <p className="text-xs text-white/60 font-body mt-1 tracking-wider opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 delay-150">
                    {project.client} — {project.year}
                  </p>

                  {/* View button */}
                  <div className="mt-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 delay-200">
                    <span className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-primary font-body">
                      Watch Project <Play className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Lightbox Modal ===== */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedProject(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />

          {/* Modal content */}
          <div
            className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-sm"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/60 rounded-full hover:bg-primary transition-colors duration-300"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Video / Image area */}
            <div className="relative aspect-video overflow-hidden bg-black">
              {showVideo ? (
                /* YouTube embed */
                <iframe
                  src={`https://www.youtube.com/embed/${selectedProject.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={selectedProject.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                /* Thumbnail with play button */
                <>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Play button overlay */}
                  <button
                    onClick={() => setShowVideo(true)}
                    className="absolute inset-0 flex items-center justify-center group/play"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary/60 flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover/play:bg-primary/30 group-hover/play:scale-110 group-hover/play:border-primary">
                      <Play className="w-8 h-8 text-primary ml-1" />
                    </div>
                    <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-[0.2em] uppercase text-white/70 font-body">
                      Click to play
                    </span>
                  </button>
                </>
              )}
            </div>

            {/* Details */}
            <div className="p-8 bg-[oklch(0.08_0.005_285)]">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-primary border border-primary/30 rounded-full font-body">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-muted-foreground font-body tracking-wider">
                  {selectedProject.year}
                </span>
              </div>

              <h3 className="font-display text-3xl md:text-4xl tracking-wider text-foreground mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-primary font-body tracking-wider mb-4">
                Client: {selectedProject.client}
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[10px] tracking-[0.15em] uppercase text-muted-foreground bg-[oklch(1_0_0/5%)] rounded-full font-body"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Watch on YouTube link */}
              <a
                href={`https://www.youtube.com/watch?v=${selectedProject.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-primary font-body hover:text-primary/80 transition-colors duration-300"
              >
                Watch on YouTube <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
