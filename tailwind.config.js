/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./src/**/*.{ts,tsx,js,jsx,html}", 
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#2563eb', 
          dark: '#3b82f6',
        },
        background: {
          light: '#ffffff',
          dark: '#000000', 
        },
      },
      keyframes: {
        // The "Reveal" effect: slides up from nothing
        reveal: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        // Subtle fade for badges/descriptions
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // The "Shimmer" light streak for buttons
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        // Smooth, weighted reveal (Apple-style)
        reveal: 'reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        fadeIn: 'fadeIn 1.2s ease-out forwards',
        shimmer: 'shimmer 1.5s infinite',
      },
    },
  },
  plugins: [],
};