/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#01B636",
        },
      },
    ],
  },
  theme: {
    fontFamily: {
      lexend: ['"Lexend"'],
    },
  },
};
