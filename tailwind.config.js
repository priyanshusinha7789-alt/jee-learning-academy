/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#101C35',
          light: '#172A4A',
          surface: '#1E355B'
        },
        deepBlue: {
          DEFAULT: '#172A4A',
          dark: '#101C35',
          light: '#203A66'
        },
        royalBlue: {
          DEFAULT: '#2855A6',
          hover: '#1E4387',
          light: '#3C6EC4',
          subtle: '#EEF3FB'
        },
        gold: {
          DEFAULT: '#D9AD55',
          hover: '#C79A40',
          light: '#E6C47D',
          subtle: '#FAF6ED'
        },
        softBg: '#F5F7FB',
        lightBlueGrey: '#E7EDF5',
        // Semantic aliases for existing components
        navy: {
          DEFAULT: '#101C35',
          dark: '#0A1224',
          light: '#172A4A',
          surface: '#1F3459'
        },
        electric: {
          DEFAULT: '#2855A6',
          hover: '#1E4387',
          light: '#3C6EC4',
          subtle: '#EEF3FB'
        },
        orange: {
          DEFAULT: '#D9AD55',
          hover: '#C79A40',
          light: '#E6C47D',
          subtle: '#FAF6ED'
        },
        teal: {
          DEFAULT: '#2855A6',
          hover: '#1E4387',
          subtle: '#E7EDF5'
        },
        cream: {
          DEFAULT: '#F5F7FB',
          dark: '#E7EDF5',
          subtle: '#FFFFFF'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(16, 28, 53, 0.06)',
        'card-hover': '0 14px 34px -4px rgba(16, 28, 53, 0.12)',
        'glow-gold': '0 4px 20px 0 rgba(217, 173, 85, 0.3)',
        'glow-blue': '0 4px 20px 0 rgba(40, 85, 166, 0.3)'
      }
    },
  },
  plugins: [],
}
