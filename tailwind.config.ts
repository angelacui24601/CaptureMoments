import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Design-system fonts — loaded via next/font, referenced by CSS variable
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      colors: {
        brand: {
          deep:  "#166088", // primary CTA, headings
          blue:  "#4A6FA5", // accents, links
          slate: "#4F6D7A", // body text
          soft:  "#C0D6DF", // borders, dividers
          mist:  "#DBE9EE", // section backgrounds
        },
      },
    },
  },
  plugins: [],
};

export default config;
