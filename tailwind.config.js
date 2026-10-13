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
          DEFAULT: '#14213D',
          dark: '#0B132B',
          light: '#1F2E52',
          surface: '#1A294A'
        },
        electric: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
          light: '#3B82F6',
          subtle: '#EFF6FF'
        },
        orange: {
          DEFAULT: '#FF7A30',
          hover: '#E8661E',
          light: '#FF9457',
          subtle: '#FFF3ED'
        },
        teal: {
          DEFAULT: '#14B8A6',
          hover: '#0D9488',
          subtle: '#F0FDFA'
        },
        cream: {
          DEFAULT: '#FFF9F0',
          dark: '#F7EEDF',
          subtle: '#FFFDF9'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(20, 33, 61, 0.08)',
        'card-hover': '0 12px 30px -4px rgba(20, 33, 61, 0.15)',
        'glow-orange': '0 4px 20px 0 rgba(255, 122, 48, 0.35)',
        'glow-blue': '0 4px 20px 0 rgba(37, 99, 235, 0.35)'
      }
    },
  },
  plugins: [],
}
