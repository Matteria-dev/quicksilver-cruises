/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      transparent: {
        100: '#00000000',
        200: '#F9F9F975',
        300: '#6FDAF880',
        400: '#00A6A980',
        500: '#241E2175'
      },
      'blue': {
        100: '#6FDAF8',
        200: '#1CB7EA',
        300: '#0C86CB',
        400: '#0065B7',
        500: '#00385B',
      },
      'teal': {
        100: '#00CAD6',
        200: '#1EC2D2',
        300: '#00A6A9',
        400: '#28B0A9',
        500: '#008B93',
      },
      'grey': {
        100: '#F9F9F9',
        200: '#F2F2F2',
        300: '#D3D3D9',
        400: '#848484',
        500: '#241E21'
      },
      'dark': {
        100: '#18181b',
        200: '#2d2d2d',
        300: '#121212',
        400: '#1e293b'
      }
    },
    extend: {
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 1rem))',
          },
        },
      },
      animation: {
        scroll: 'scroll var(--duration, 40s) linear infinite',
      },
      fontFamily: {
        sans: 'Switzer, system-ui, sans-serif',
        gothamBook: 'Gotham Book, sans-serif',
        gothamBlack: 'Gotham Black, sans-serif',
        gothamMedium: 'Gotham Medium, sans-serif',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'fade': 'linear-gradient(to top, grey-200, transparent)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
