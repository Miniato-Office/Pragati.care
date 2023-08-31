import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "nt-somic": ["NT Somic", "sans-serif"],
      },
      colors: {
        primary: "#57C192",
        "primary-active": "#2DC071",
        "primary-text": "#2b2b2b",
        'landing-background' : "#E9EBFF"
      },
    },
  },
  plugins: [],
};
export default config;
