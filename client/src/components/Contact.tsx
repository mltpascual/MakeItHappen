/*
 * DESIGN: Cinematic Noir
 * Contact section with asymmetric layout. Left: info + social links.
 * Right: contact form. Section numbered "04". Amber CTA button.
 */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Parañaque City, Metro Manila, Philippines",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+63 XXX XXX XXXX",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@makeithappenproductions.com",
  },
];

export default function Contact() {
  const headerRef = useScrollReveal();
  const formRef = useScrollReveal(0.1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch soon.", {
      description: "Your message has been received.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[oklch(0.06_0.005_285)]">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="container">
        {/* Section header */}
        <div ref={headerRef} className="reveal mb-16 md:mb-20 relative">
          <span className="section-number">04</span>
          <p className="text-sm tracking-[0.3em] uppercase text-accent font-body mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide text-foreground">
            LET'S CREATE TOGETHER
          </h2>
          <div className="w-12 h-0.5 bg-accent/40 mt-4" />
        </div>

        {/* Two-column layout */}
        <div
          ref={formRef}
          className="reveal grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16"
        >
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-10">
            <p className="text-[oklch(0.75_0.005_85)] font-body leading-relaxed">
              Ready to bring your vision to life? Whether you need a full
              production or a creative consultation, we're here to make it
              happen. Reach out and let's start the conversation.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 flex items-center justify-center border border-[oklch(1_0_0/10%)] text-primary shrink-0 group-hover:border-primary/40 transition-colors duration-300 rounded-full">
                    <item.icon size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body mb-1">
                      {item.label}
                    </p>
                    <p className="text-foreground font-body text-sm">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body mb-4">
                Follow Us
              </p>
              <div className="flex gap-3">
                {[
                  { name: "Facebook", url: "#" },
                  { name: "Instagram", url: "#" },
                  { name: "Vimeo", url: "#" },
                  { name: "LinkedIn", url: "#" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="px-4 py-2 text-xs tracking-[0.15em] uppercase font-body border border-[oklch(1_0_0/10%)] text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-300 rounded-full"
                    aria-label={`Visit our ${social.name}`}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs tracking-[0.2em] uppercase text-muted-foreground font-body mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-[oklch(1_0_0/15%)] py-3 text-foreground font-body text-sm focus:border-primary focus:outline-none transition-colors duration-300 placeholder:text-[oklch(0.4_0.005_85)]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs tracking-[0.2em] uppercase text-muted-foreground font-body mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-[oklch(1_0_0/15%)] py-3 text-foreground font-body text-sm focus:border-primary focus:outline-none transition-colors duration-300 placeholder:text-[oklch(0.4_0.005_85)]"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs tracking-[0.2em] uppercase text-muted-foreground font-body mb-2"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-[oklch(1_0_0/15%)] py-3 text-foreground font-body text-sm focus:border-primary focus:outline-none transition-colors duration-300 placeholder:text-[oklch(0.4_0.005_85)]"
                  placeholder="Video Production Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs tracking-[0.2em] uppercase text-muted-foreground font-body mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-[oklch(1_0_0/15%)] py-3 text-foreground font-body text-sm focus:border-primary focus:outline-none transition-colors duration-300 resize-none placeholder:text-[oklch(0.4_0.005_85)]"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="group flex items-center gap-3 px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm tracking-[0.2em] uppercase hover:bg-amber-light transition-colors duration-300 rounded-full"
              >
                Send Message
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
