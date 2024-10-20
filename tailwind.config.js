/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "675px" /* Tab Screen Size*/,
      md: "935px" /* Medium Laptop Screen Size*/,
      lg: "1272px" /* Large Screen Size*/,
    },
    extend: {},
  },
  plugins: [],
};
