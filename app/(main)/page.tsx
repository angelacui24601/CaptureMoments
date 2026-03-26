import type { Metadata } from "next";
import Button from "@/components/Button";
import PortfolioGrid from "@/components/PortfolioGrid";
import { portfolioImages } from "@/lib/portfolioData";

// Home page uses root layout's default title ("CaptureMoments Photography")
export const metadata: Metadata = {
  description:
    "Book your graduation photography session. Stunning portraits, fair pricing, and memories that last a lifetime.",
};

// Show only the first 6 images as a teaser on the home page
const previewImages = portfolioImages.slice(0, 6);

// --- Pricing data ---
const pricingTiers = [
  {
    name: "Essential",
    price: "$199",
    description: "Perfect for solo portraits",
    features: [
      "1-hour session",
      "30 edited photos",
      "2 outfit changes",
      "Private online gallery",
    ],
    highlight: false,
  },
  {
    name: "Signature",
    price: "$349",
    description: "Most popular package",
    features: [
      "2-hour session",
      "75 edited photos",
      "Unlimited outfit changes",
      "Private online gallery",
      "One 8×10 print",
    ],
    highlight: true,
  },
  {
    name: "Premier",
    price: "$549",
    description: "Full graduation experience",
    features: [
      "3-hour session",
      "150 edited photos",
      "Multiple locations",
      "Private online gallery",
      "Full print package",
      "Rush 5-day delivery",
    ],
    highlight: false,
  },
];

// --- How it works data ---
const steps = [
  {
    number: "01",
    title: "Book Your Session",
    description:
      "Fill out our simple booking form with your preferred date, location, and package. We'll confirm within 24 hours.",
  },
  {
    number: "02",
    title: "We Capture the Moment",
    description:
      "Your dedicated photographer guides you through every shot for natural, confident, and stunning results.",
  },
  {
    number: "03",
    title: "Receive Your Gallery",
    description:
      "Within 2 weeks, receive your beautifully edited photos in a private online gallery — ready to download and share.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section ────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-brand-deep">
        {/*
          BACKGROUND VIDEO PLACEHOLDER
          To add a background video, replace the gradient <div> below with:

          <video
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            autoPlay muted loop playsInline
            src="/videos/hero-background.mp4"
            aria-hidden="true"
          />

          Then keep the overlay <div> beneath it to maintain text contrast.
        */}
        {/* Dark background with subtle radial warmth */}
        <div
          className="absolute inset-0 bg-black"
          aria-hidden="true"
        />
        {/* Warm radial glow overlay */}
        <div
          className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_30%_60%,rgba(74,111,165,0.9),transparent_55%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="liquid-glass rounded-full inline-flex px-4 py-1.5 text-brand-soft text-xs font-body font-medium tracking-widest uppercase mb-6">
            Graduation Photography
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading italic text-white leading-tight mb-6">
            Capture Your
            <span className="block text-brand-soft">Milestone</span>
          </h1>
          <p className="text-white/70 font-body text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Professional photography that tells the story of your achievement.
            Timeless portraits you will treasure for a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/book" size="lg" variant="gold">
              Book Now
            </Button>
            <Button href="/portfolio" size="lg" variant="outline-white">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* ── Portfolio Preview ────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-blue text-xs font-body font-medium tracking-widest uppercase mb-2">
              Our Work
            </p>
            <h2 className="text-4xl font-heading italic text-brand-deep mb-4">
              Moments We’ve Captured
            </h2>
            <p className="text-brand-slate font-body max-w-xl mx-auto">
              Browse a selection of our favourite graduation portraits and
              ceremonies.
            </p>
          </div>

          <PortfolioGrid images={previewImages} />

          <div className="text-center mt-10">
            <Button href="/portfolio" variant="outline">
              See Full Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* ── Services / Pricing ──────────────────────────────────────── */}
      <section id="pricing" className="py-20 bg-brand-mist px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-blue text-xs font-body font-medium tracking-widest uppercase mb-2">
              Pricing
            </p>
            <h2 className="text-4xl font-heading italic text-brand-deep mb-4">
              Simple, Clear Pricing
            </h2>
            <p className="text-brand-slate font-body max-w-xl mx-auto">
              Choose the package that fits your vision. Every session includes a
              free pre-shoot consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  tier.highlight
                    ? "bg-brand-deep text-white md:-translate-y-2 shadow-lg"
                    : "bg-white border border-brand-soft"
                }`}
              >
                {tier.highlight && (
                  <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-xl font-heading italic mb-1 ${
                  tier.highlight ? "text-white" : "text-brand-deep"
                }`}>
                  {tier.name}
                </h3>
                <p className={`text-sm font-body font-light mb-4 ${
                  tier.highlight ? "text-white/60" : "text-brand-slate"
                }`}>
                  {tier.description}
                </p>
                <p className={`text-4xl font-body font-bold mb-6 ${
                  tier.highlight ? "text-brand-soft" : "text-brand-deep"
                }`}>
                  {tier.price}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      {/* Checkmark icon */}
                      <svg
                        className={`w-4 h-4 flex-shrink-0 ${
                          tier.highlight ? "text-brand-soft" : "text-brand-blue"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className={`font-body font-light ${
                        tier.highlight ? "text-white/70" : "text-brand-slate"
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="/book"
                  variant={tier.highlight ? "primary" : "outline"}
                >
                  Book {tier.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand-blue text-xs font-body font-medium tracking-widest uppercase mb-2">
              The Process
            </p>
            <h2 className="text-4xl font-heading italic text-brand-deep mb-4">
              How It Works
            </h2>
            <p className="text-brand-slate font-body max-w-xl mx-auto">
              From booking to your gallery — simple and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                {/* Step number circle */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-mist border-2 border-brand-soft text-brand-deep font-heading italic font-bold text-lg mb-5">
                  {step.number}
                </div>
                <h3 className="text-xl font-heading italic text-brand-deep mb-3">
                  {step.title}
                </h3>
                <p className="text-brand-slate font-body text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-deep px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-soft text-xs font-body font-medium tracking-widest uppercase mb-4">
            Limited Dates Available
          </p>
          <h2 className="text-4xl sm:text-5xl font-heading italic text-white mb-6 leading-tight">
            Ready to Capture Your Moment?
          </h2>
          <p className="text-white/70 font-body text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Graduation season books fast. Reserve your session today and let’s
            create photos you’ll love forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/book" size="lg" variant="primary">
              Book Your Session
            </Button>
            <Button href="/portfolio" size="lg" variant="outline-white">
              Browse Portfolio
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
