/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        oak:     '#0E0A07',
        'oak-2': '#1A1008',
        'oak-3': '#2C1810',
        brown:   '#8B4513',
        amber:   '#C8943A',
        'amber-light': '#E5B050',
        cream:   '#F5F0E1',
        'cream-muted': '#B8A98A',
        forest:  '#4A6741',
        sand:    '#D4C4A8',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      fontSize: {
        'giant': 'clamp(4rem, 10vw, 9rem)',
        'huge':  'clamp(2.5rem, 6vw, 5.5rem)',
        'big':   'clamp(1.8rem, 4vw, 3rem)',
      },
    },
  },
  plugins: [],
}
