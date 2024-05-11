/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0c0c0c",
        boxbg: "#121212",
        error: "#CF6679",
        white: "#F1F1F1",
        gray: "#B5C0D0",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      primary: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
