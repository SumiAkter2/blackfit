/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f3f4f6",

          secondary: "#701a75",

          accent: "#d1d5db",

          neutral: "#22d3ee",

          "base-100": "#FFFFFF",

          info: "#6b7280",

          success: "#78716c",

          warning: "#FBBD23",

          error: "#be123c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
