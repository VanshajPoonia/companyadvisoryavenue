/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#0062cc',
          600: '#004e99',
          700: '#003a66',
          800: '#002233',
          900: '#001019',
        },
        secondary: {
          50: '#e6fffc',
          100: '#ccfff9',
          200: '#99fff3',
          300: '#66ffed',
          400: '#33ffe7',
          500: '#0ab5a0',
          600: '#088e80',
          700: '#066a60',
          800: '#044740',
          900: '#022320',
        },
        accent: {
          50: '#fff9e6',
          100: '#fff3cc',
          200: '#ffe799',
          300: '#ffdb66',
          400: '#ffcf33',
          500: '#ffc107',
          600: '#cc9a06',
          700: '#997304',
          800: '#664d03',
          900: '#332601',
        },
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'custom-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        counter: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};