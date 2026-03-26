// Mock portfolio data used across the site.
// Replace these picsum.photos URLs with your real Cloudinary or CDN image URLs
// when going to production.

export interface PortfolioImage {
  id: number;
  src: string;
  title: string;
  alt: string;
  category: string;
}

export const portfolioImages: PortfolioImage[] = [
  {
    id: 1,
    src: "https://picsum.photos/seed/grad01/800/600",
    title: "Cap & Gown Portrait",
    alt: "Graduate in cap and gown smiling outdoors on a sunny day",
    category: "Portraits",
  },
  {
    id: 2,
    src: "https://picsum.photos/seed/grad02/800/600",
    title: "Campus Landmark",
    alt: "Graduate posing at an iconic campus building",
    category: "Portraits",
  },
  {
    id: 3,
    src: "https://picsum.photos/seed/grad03/800/600",
    title: "Family Celebration",
    alt: "Graduate celebrating with family after the ceremony",
    category: "Family",
  },
  {
    id: 4,
    src: "https://picsum.photos/seed/grad04/800/600",
    title: "Diploma Moment",
    alt: "Graduate proudly holding their diploma",
    category: "Ceremony",
  },
  {
    id: 5,
    src: "https://picsum.photos/seed/grad05/800/600",
    title: "Golden Hour Glow",
    alt: "Graduate bathed in warm golden hour light during outdoor portrait session",
    category: "Portraits",
  },
  {
    id: 6,
    src: "https://picsum.photos/seed/grad06/800/600",
    title: "Friends Forever",
    alt: "Group of graduates laughing and celebrating together",
    category: "Groups",
  },
  {
    id: 7,
    src: "https://picsum.photos/seed/grad07/800/600",
    title: "Cap Toss",
    alt: "Graduate tossing their graduation cap into a clear blue sky",
    category: "Ceremony",
  },
  {
    id: 8,
    src: "https://picsum.photos/seed/grad08/800/600",
    title: "Studio Portrait",
    alt: "Clean professional studio portrait of a graduate",
    category: "Portraits",
  },
  {
    id: 9,
    src: "https://picsum.photos/seed/grad09/800/600",
    title: "Candid Laugh",
    alt: "Candid outdoor shot of a graduate laughing with friends",
    category: "Candid",
  },
  {
    id: 10,
    src: "https://picsum.photos/seed/grad10/800/600",
    title: "Class of 2026",
    alt: "Large group of graduates posing together on graduation day",
    category: "Groups",
  },
  {
    id: 11,
    src: "https://picsum.photos/seed/grad11/800/600",
    title: "Architectural Frame",
    alt: "Graduate framed by striking campus architecture",
    category: "Artistic",
  },
  {
    id: 12,
    src: "https://picsum.photos/seed/grad12/800/600",
    title: "Sunset Silhouette",
    alt: "Artistic silhouette of a graduate against a dramatic sunset sky",
    category: "Artistic",
  },
];
