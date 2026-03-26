"use client";

// Navbar — fixed at top-4, liquid-glass pill centred between logo and spacer.
// Active link highlighted in amber. Mobile menu stays in the glass pill.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      className="fixed top-4 left-0 right-0 z-50 px-4"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* ── Logo ──────────────────────────────────────────────────── */}
        <Link
          href="/"
          className="flex-shrink-0 w-11 h-11 rounded-full bg-brand-deep flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/60"
          aria-label="CaptureMoments — go to home"
        >
          <span className="font-heading italic text-white text-xl leading-none select-none">
            C
          </span>
        </Link>

        {/* ── Desktop: centred glass pill ───────────────────────────── */}
        <div
          className="hidden md:flex liquid-glass rounded-full px-2 py-2 items-center gap-1"
          role="menubar"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium font-body transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue hover:bg-brand-soft/30 ${
                isActive(link.href) ? "text-brand-deep font-semibold" : "text-brand-slate"
              }`}
              role="menuitem"
            >
              {link.label}
            </Link>
          ))}

          {/* Deep-blue CTA inside the pill */}
          <Link
            href="/book"
            className="ml-2 bg-brand-deep text-white rounded-full px-4 py-2 text-sm font-medium font-body flex items-center gap-1.5 hover:bg-brand-blue transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-deep/40"
          >
            Book Now
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>

        {/* ── Mobile: hamburger button ───────────────────────────────── */}
        <button
          className="md:hidden liquid-glass rounded-full w-11 h-11 flex items-center justify-center text-brand-slate focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* ── Mobile dropdown — glass pill below the bar ──────────────── */}
      {menuOpen && (
        <div className="md:hidden mt-2 liquid-glass rounded-2xl mx-4 px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-colors hover:bg-brand-soft/30 ${
                isActive(link.href) ? "text-brand-deep font-semibold" : "text-brand-slate"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="mt-1 bg-brand-deep text-white rounded-full px-4 py-2 text-sm font-body font-medium flex items-center gap-1.5 hover:bg-brand-blue justify-center transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      )}
    </nav>
  );
}
