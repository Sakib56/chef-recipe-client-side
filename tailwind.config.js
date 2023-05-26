/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '35rem',
        '140':'40rem'
      },
      width: {
        '128': '30rem'
      }
    },
  },
  plugins: [require("daisyui")],
}

