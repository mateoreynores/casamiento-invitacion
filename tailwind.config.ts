import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--bg-cream)",
        beige: "var(--bg-beige)",
        brown: "var(--brown)",
        "brown-dark": "var(--brown-dark)",
        ink: "var(--ink)",
        gold: "var(--gold)",
      },
      fontFamily: {
        serif: ['"Libertinus Serif"', "Georgia", "serif"],
        display: ["var(--font-bellefair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
