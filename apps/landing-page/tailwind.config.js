/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    // themes: ["light"],
  },
  theme: {
    extend: {},
  },
};
