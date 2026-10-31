/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#06070a',
          900: '#0b0d13',
          850: '#111420',
          800: '#171b2c',
          750: '#1e2338',
          700: '#262d47',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        'violet-glow': '0 0 25px -5px rgba(139, 92, 246, 0.25)',
        'violet-glow-lg': '0 0 40px -10px rgba(139, 92, 246, 0.35)',
      },
    },
  },
  plugins: [],
}
