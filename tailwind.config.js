/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        B1: "#122C34",
        B2: "#224870",
        B3: "#2A4494",
        B4: "#4EA5D9",
        B5: "#44CFCB",
      }
    },
  },
  plugins: [],
}

