/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        xavier: {
          teal: '#148078',
          'teal-dark': '#0e5f59',
          'teal-light': '#ebf5f4',
          gold: '#b38b4d',
          'gold-dark': '#8c6b39',
          'gold-light': '#fdf8f0',
          slate: '#7d8c9e',
          'slate-dark': '#5a6878',
          'slate-light': '#f2f5f8',
          maroon: '#a24857',
          'maroon-dark': '#7b3340',
          'maroon-light': '#fdf2f4',
          navy: '#0d2137',
          'navy-dark': '#081423',
        },
        category: {
          holiday: '#ef4444',
          'holiday-bg': '#fef2f2',
          'holiday-border': '#fecaca',
          classDay: '#10b981',
          'classDay-bg': '#ffffff',
          'classDay-border': '#e2e8f0',
          skillDay: '#f59e0b',
          'skillDay-bg': '#fffbeb',
          'skillDay-border': '#fef08a',
          exams: '#2563eb',
          'exams-bg': '#eff6ff',
          'exams-border': '#bfdbfe',
          classTest: '#16a34a',
          'classTest-bg': '#f0fdf4',
          'classTest-border': '#bbf7d0',
          academic: '#7c3aed',
          'academic-bg': '#f3e8ff',
          'academic-border': '#ddd6fe',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
