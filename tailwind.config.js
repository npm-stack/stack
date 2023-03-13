const colors = require('tailwindcss/colors')
const fontFamily = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.fontFamily.sans],
      },
      animation: {
        fade: 'fade 1s ease-out',
        'fade-slow': 'fadeSlow 1.5s ease-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: () => ({
        fade: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeSlow: {
          '0%': { opacity: 0 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }),
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
  },
  plugins: [],
}
