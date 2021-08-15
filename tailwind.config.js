module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        monoton: "Monoton",
        cabin: "Cabin",
        montserrat: "Montserrat",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
