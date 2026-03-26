"use client";

// PortfolioGrid — responsive image grid with a built-in lightbox modal.
// Clicking a thumbnail opens a full-size overlay; clicking the overlay or the
// close button dismisses it.  Keyboard-accessible (Escape key closes the modal).

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { PortfolioImage } from "@/lib/portfolioData";

interface PortfolioGridProps {
  images: PortfolioImage[];
}

export default function PortfolioGrid({ images }: PortfolioGridProps) {
  const [selected, setSelected] = useState<PortfolioImage | null>(null);

  const close = useCallback(() => setSelected(null), []);

  // Close modal on Escape key
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, close]);

  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      {/* ── Image grid ─────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelected(image)}
            className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-brand-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
            aria-label={`View ${image.title}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Hover caption overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300 flex items-end">
              <div className="w-full p-4 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <p className="text-white font-medium text-sm leading-tight">
                  {image.title}
                </p>
                <p className="text-white/70 text-xs mt-0.5">{image.category}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* ── Lightbox modal ──────────────────────────────────────────── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-8"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          {/* Inner container — stops click propagation so clicking the image
              itself does not dismiss the modal */}
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={close}
              className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
              aria-label="Close image"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Enlarged image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 80vw"
                priority
              />
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <p className="text-white font-medium">{selected.title}</p>
              <p className="text-white/50 text-sm mt-0.5">{selected.category}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
