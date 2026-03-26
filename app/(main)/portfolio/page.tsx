import type { Metadata } from "next";
import PortfolioGrid from "@/components/PortfolioGrid";
import { portfolioImages } from "@/lib/portfolioData";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse our graduation photography portfolio — portraits, ceremonies, group shots, and candid moments.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-0 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page header */}
        <div className="text-center mb-12">
          <p className="text-brand-blue text-xs font-body font-medium tracking-widest uppercase mb-2">
            Our Work
          </p>
          <h1 className="text-4xl sm:text-5xl font-heading italic text-brand-deep mb-4">
            Portfolio
          </h1>
          <p className="text-brand-slate font-body max-w-2xl mx-auto">
            A curated collection of graduation moments we've had the privilege
            of capturing. Click any image to view it in full.
          </p>
        </div>

        {/* Full portfolio grid — click to open lightbox */}
        <PortfolioGrid images={portfolioImages} />
      </div>
    </div>
  );
}
