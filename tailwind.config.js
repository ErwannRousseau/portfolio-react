/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const rotateY180 = {
        '.rotateY-180': {
          transform: 'rotateY(180deg)',
        },
      };

      addUtilities(rotateY180);
    },
  ],
};
