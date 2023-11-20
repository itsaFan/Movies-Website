import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      width: {
        "86": "21.5rem",
        "92": "23rem",
        "128": "32rem",
        "150": "37.5rem",
        "200": "50rem",
        "232": "58rem",
        "248": "62rem",
      },
      colors: {
        "main-dark": "#16161a",
        "sub-dark": "#242629",
        "custom-purple": "#7f5af0",
      },
      textColor: {
        "dark-text": "#fffffe",
        "dark-subtext": "#94a1b2",
      },
      backgroundColor: {
        "main-dark": "#16161a",
        "sub-dark": "#242629",
        "custom-purple": "#7f5af0",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
