module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: require("./src/styles/colors"),
    },
  },
  variants: {},
  plugins: [],
}
