/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fef5e6",
          secondary: "#837162",
          // accent: "#d1c500",
          // neutral: "#002632",
          // "base-100": "#ffffff",
        },
      },
      // "light",
      // "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}

