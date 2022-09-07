module.exports = {
  mode: "jit",
  purge: ["./**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        50: "3.125rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
