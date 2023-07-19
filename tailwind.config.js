/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF7733",
        lightPrimary: "#fff1eb",
        secondary: "#f3dfa2",

        black: "#151515",
        blackLightBg: "#222",
        bgWhole: "#f0f4f5",
        svgBg: "#fdf5f2",
        gray: "#818181",
        lightGray: "#cfcfcf",
        mediumGray: "#979797",
        bgColorLoad: "#e2e2e2c4",
        bgModal: "#54545488",
        shadowDark: "#080707",
      },
    },
  },
  plugins: [],
};
