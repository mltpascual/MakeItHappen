/*
 * DESIGN: Cinematic Noir — Make It Happen Productions Landing Page
 *
 * Design Philosophy: Film Noir meets modern editorial.
 * Deep blacks, amber/teal dual-tone lighting, asymmetric compositions,
 * scroll-triggered scene transitions, Bebas Neue + Source Sans 3 typography.
 *
 * Sections: Splash → Hero → Marquee → Services → Process → Showreel → Marquee →
 *           ProjectGallery → Work → ClientLogos → WhyChooseUs → Testimonials →
 *           About → FAQ → Contact → Footer
 * Parallax scrolling on hero and about images.
 */
import { useState, useCallback } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Showreel from "@/components/Showreel";
import ProjectGallery from "@/components/ProjectGallery";
import Work from "@/components/Work";
import ClientLogos from "@/components/ClientLogos";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}
      <div
        className={`min-h-screen bg-background text-foreground transition-opacity duration-700 ${
          splashDone ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar />
        <Hero />
        <Marquee
          words={[
            "Video Production",
            "Branding",
            "TV Commercials",
            "Social Media",
            "Creative Strategy",
            "Post-Production",
            "Motion Graphics",
            "Live Events",
          ]}
          direction="left"
          accent="amber"
        />
        <Services />
        <Process />
        <Showreel />
        <Marquee
          words={[
            "Storytelling",
            "Innovation",
            "Craft",
            "Vision",
            "Impact",
            "Excellence",
            "Collaboration",
            "Purpose",
          ]}
          direction="right"
          accent="teal"
        />
        <ProjectGallery />
        <Work />
        <ClientLogos />
        <WhyChooseUs />
        <Testimonials />
        <About />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
