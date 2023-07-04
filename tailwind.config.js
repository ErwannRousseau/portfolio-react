/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    function addClassName({ addUtilities }) {
      const rotateY180 = {
        '.rotateY-180': {
          transform: 'rotateY(180deg)',
        },
      };

      addUtilities(rotateY180);
    },
  ],
};
