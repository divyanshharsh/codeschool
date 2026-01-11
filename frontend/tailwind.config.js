/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e6f7ff',
          200: '#cfeeff',
          300: '#95e1ff',
          400: '#57c7ff',
          500: '#1fb6ff',
          600: '#0091e6',
          700: '#0077b3',
          800: '#005f8a',
          900: '#004466',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

