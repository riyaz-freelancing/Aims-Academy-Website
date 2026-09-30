/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f5ff',
          100: '#e0ebff',
          200: '#bae6fd',
          700: '#1d4ed8',
          800: '#1e3a8a',
          900: '#0f172a',
          950: '#0b1329',
        },
        primary: {
          DEFAULT: '#0F2942',
          dark: '#0A1A2B',
          light: '#1E3A8A',
        },
        secondary: {
          DEFAULT: '#DC2626',
          dark: '#B91C1C',
          light: '#FEF2F2',
        },
        accent: {
          DEFAULT: '#F59E0B',
          dark: '#D97706',
          light: '#FEF3C7',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
