import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-deep border-t border-brand-blue/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand blurb */}
          <div>
            <h3 className="font-heading italic text-white text-lg font-semibold mb-3">
              CaptureMoments
              <span className="text-brand-soft" aria-hidden="true">.</span>
            </h3>
            <p className="font-body font-light text-white/60 text-sm leading-relaxed">
              Professional graduation photography that captures your milestone
              beautifully — portraits, ceremonies, and everything in between.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-body font-medium text-white/40 mb-4 text-xs uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/book", label: "Book a Session" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body font-light text-white/60 hover:text-brand-soft transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-body font-medium text-white/40 mb-4 text-xs uppercase tracking-widest">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a
                  href="mailto:hello@capturemoments.com"
                  className="font-body font-light hover:text-brand-soft transition-colors"
                >
                  hello@capturemoments.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="font-body font-light hover:text-brand-soft transition-colors"
                >
                  (555) 123-4567
                </a>
              </li>
              <li className="font-body font-light">Mon – Sat, 9 am – 6 pm</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-blue/30 pt-6 text-center font-body text-xs text-white/40">
          © {new Date().getFullYear()} CaptureMoments Photography. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
