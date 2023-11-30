/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}"
],
  theme: {

    fontFamily: {
      'ubuntu': ['Ubuntu', 'sans-serif'],
      'metropolis': ['Metropolis', 'sans-serif'],
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'offwhite': '#dedede',
      'lightwhite': '#eae6de',
      'white': '#ffffff',
      'stonegray': '#C0C1B9',
      'sage': '#9fa287',
    },

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {},
  },
  plugins: [ 
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

