/*
 * DESIGN: Cinematic Noir
 * Minimal footer with brand wordmark, copyright, and social links.
 * Amber accent line at top. Film grain texture continues.
 */

export default function Footer() {
  return (
    <footer className="relative py-12 md:py-16">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663343684150/kJoupaxDnARjakkM.png"
              alt="MIH Productions Logo"
              className="h-8 w-auto object-contain"
            />
            <span className="w-px h-4 bg-primary/30" />
            <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-body">
              Make It Happen Productions
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground font-body tracking-wider">
            &copy; {new Date().getFullYear()} Make It Happen Productions. All
            rights reserved.
          </p>

          {/* Social */}
          <div className="flex gap-4">
            {["Facebook", "Instagram", "Vimeo", "LinkedIn"].map((name) => (
              <a
                key={name}
                href="#"
                className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300 font-body"
                aria-label={`Visit our ${name}`}
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
