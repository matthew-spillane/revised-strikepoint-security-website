/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        card: '#111111',
        'card-light': '#1a1a1a',
        border: '#2a2a2a',
        accent: '#e8412a',
        'accent-dark': '#b83220',
        heading: '#ffffff',
        body: '#a0a0a0',
        'body-dim': '#6b6b6b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

