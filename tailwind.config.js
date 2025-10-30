/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
        surfaceAlt: "#F8F9FB",
        surface: "#FFFFFF",
        primary: "#6366F1",
        mute: "#6B7280",
        ink: "#111827",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
