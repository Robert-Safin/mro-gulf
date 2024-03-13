import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        phone: "375px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1440px",
      },
      colors: {
        "light-blue": "rgb(30,144,240)",
        "dark-blue": "rgb(29,113,200)",

      },
      fontFamily: {
        mulish: ["var(--font-mulish)"],
      },
    },
  },
  plugins: [],
};
export default config;
