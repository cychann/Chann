/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "rgb(0 0 0 / 24%) 0 3px 8px",
      },
    },
  },
};
