module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '320px',
      // => @media (min-width: 320px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1280px',
      // => @media (min-width: 1280px) { ... }

      xl: '1600px',
      // => @media (min-width: 1600px) { ... }
    },
    colors: {
      primary: '#303032',
      darker: '#202024',
      'text-secondary': '#ffffffbb',
    },
    extend: {},
  },
  plugins: [],
};
