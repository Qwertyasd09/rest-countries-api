/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        FontProject: ["Nunito Sans", "sans-serif"]
      },
      gridTemplateColumns: {
        'autoColumn': 'repeat(auto-fit, minmax(288px, max-content))',
        // Complex site-specific column configuration
      },
      colors: {
        background: "var(--bg-clr)",
        "color-project": "var(--text-clr)",
        "input-text": "var(--clr-input-text)",
        elements: "var(--clr-elements)"
      },
      screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'xsm': {'max': '424px'},
      // => @media (max-width: 424px) { ... }
    }

    },
  },
  plugins: [],
}

