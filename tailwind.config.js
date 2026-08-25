/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-deep': '#0B1E3D',
        'navy-mid': '#132B4D',
        'navy-light': '#1E3A63',
        'gold': '#E8A93B',
        'gold-soft': '#F4E4C1',
        'paper': '#F7F4EC',
        'ink': '#1C1F26',
        'ink-soft': '#5B6472',
      },
      fontFamily: {
        'display': ['Fraunces', 'serif'],
        'sans': ['Work Sans', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
