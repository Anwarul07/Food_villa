/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // ✅ OPTIMAL: Include all common JS/TS/React file types
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}