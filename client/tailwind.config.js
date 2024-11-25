/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'b1': '840px',
        'b2': '620px',
        'form-b1': '1024px',
        'form-b2': '765px'
      },
      borderColor: {
        'input-border': "rgb(226, 232, 240)",
      }
    },
  },
  plugins: [],
}

