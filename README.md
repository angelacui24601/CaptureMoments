# CaptureMoments — Graduation Photography Website

A clean, minimal graduation photography service website built with **Next.js 14** (App Router) and **Tailwind CSS**.

## Features

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, portfolio preview, pricing tiers, how-it-works, CTA |
| Portfolio | `/portfolio` | Responsive grid + lightbox for all 12 mock images |
| Booking | `/book` | Form that POSTs to `/api/contact` |
| Admin | `/admin` | Cloudinary image upload interface |

---

## Getting Started

### Prerequisites

- **Node.js** 18.17+ or 20+
- **npm**, **yarn**, or **pnpm**

### 1 — Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2 — Configure environment variables

Copy the example file and fill in your Cloudinary credentials:

```bash
cp .env.local.example .env.local
```

Open `.env.local` and set your values (see the Cloudinary section below).

### 3 — Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

---

## Cloudinary Setup (Admin Image Upload)

1. Create a free account at [cloudinary.com](https://cloudinary.com).
2. Open your **Cloudinary Dashboard** and copy your credentials.
3. Paste them into `.env.local`:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

> **Security note:** `.env.local` is excluded from version control by default in Next.js. Never commit real credentials to a public repository.

---

## Project Structure

```
/
├── app/
│   ├── (main)/              # Public pages — wrapped with Navbar + Footer
│   │   ├── layout.tsx       # Injects Navbar + Footer
│   │   ├── page.tsx         # Home  /
│   │   ├── portfolio/
│   │   │   └── page.tsx     # Portfolio  /portfolio
│   │   └── book/
│   │       └── page.tsx     # Booking  /book
│   ├── admin/
│   │   └── page.tsx         # Admin  /admin  (basic, unstyled)
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts     # POST /api/contact
│   │   └── upload/
│   │       └── route.ts     # POST /api/upload (Cloudinary)
│   ├── layout.tsx            # Root layout (html + body)
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── PortfolioGrid.tsx
│   └── BookingForm.tsx
├── lib/
│   └── portfolioData.ts      # Mock portfolio images array
├── .env.local.example
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## Customisation

| What | Where |
|------|-------|
| Brand colours | `tailwind.config.ts` → `theme.extend.colors` |
| Portfolio images | `lib/portfolioData.ts` — replace `src` URLs with real images |
| Pricing tiers | `app/(main)/page.tsx` → `pricingTiers` array |
| Contact email | `app/api/contact/route.ts` — swap `console.log` for Resend / SendGrid |
| Hero background video | `app/(main)/page.tsx` — follow the inline comment in the Hero section |

---

## Production Build

```bash
npm run build
npm start
```

---

## Tech Stack

- [Next.js 14](https://nextjs.org) — App Router, Server Components, API Routes
- [Tailwind CSS 3](https://tailwindcss.com) — utility-first styling
- [Cloudinary SDK v2](https://cloudinary.com/documentation/node_integration) — image hosting & upload
- [next/image](https://nextjs.org/docs/app/api-reference/components/image) — optimised images
