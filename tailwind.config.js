module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: { min: "100px", max: "601px" },
      md: { min: "600px" },
      lg: { min: "1024px" },
    },

    extend: {
      colors: {
        "mellow-yellow": "#FFE77AFF",
        "verdant-green": "#2C5F2DFF",
        "indigo-dark": "#202e78",
      }
    },
  },
  variants: {
    extend: {
      textColor: ['active'],
    },
  },
  plugins: [],
};
