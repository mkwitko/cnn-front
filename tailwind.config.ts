/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        primary: {
          DEFAULT: '#CC0000',
          50: '#FF8585',
          100: '#FF7070',
          200: '#FF4747',
          300: '#FF1F1F',
          400: '#F50000',
          500: '#CC0000',
          600: '#940000',
          700: '#5C0000',
          800: '#240000',
          900: '#000000',
          950: '#000000',
        },
        primaryDark: {
          DEFAULT: '#990000',
          50: '#FF5252',
          100: '#FF3D3D',
          200: '#FF1414',
          300: '#EB0000',
          400: '#C20000',
          500: '#990000',
          600: '#610000',
          700: '#290000',
          800: '#000000',
          900: '#000000',
          950: '#000000',
        },
        borderColor: '#8C8C8C',
        textDisabled: '#BDBDBD',
        black: '#0C0C0C',
      },
      fontSize: {
        large: '1.5rem',
        normal: '1rem',
        small: '0.75rem',
        extraSmall: '0.625rem',
      },
      borderRadius: {
        small: '0.375rem',
        normal: '0.625rem',
      },
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
  },
  plugins: [require('tailwindcss-animate')],
};
