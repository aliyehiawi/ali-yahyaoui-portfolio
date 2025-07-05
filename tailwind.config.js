/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#10b981",
        accent: "#8b5cf6",
        dark: "#0f172a",
        light: "#f8fafc"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%':       { 'background-position': '100% 50%' },
        },
        'glow-pulse': {
          '0%, 100%': { 'box-shadow': '0 0 8px rgba(59,130,246,0.5)' },
          '50%':      { 'box-shadow': '0 0 20px rgba(59,130,246,0.8)' },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 4s ease infinite',
        'glow-pulse': 'glow-pulse 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
