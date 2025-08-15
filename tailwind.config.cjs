/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  // DaisyUI theme configuration for a modern dark, minimal palette
  daisyui: {
    themes: [
      {
        cydark: {
          // Primary accent (cyan/teal)
          primary: '#06b6d4', // cyan-500
          'primary-content': '#001015',
          // Secondary accent (teal)
          secondary: '#0ea5a1', // teal-500-ish
          accent: '#22d3ee', // cyan-400
          neutral: '#0b1220', // deep navy/ink
          'base-100': '#0f172a', // slate-900
          'base-200': '#0b1220',
          'base-300': '#111827', // gray-900
          info: '#38bdf8',
          success: '#34d399',
          warning: '#fbbf24',
          error: '#f87171'
        }
      },
      'dark'
    ]
  }
};
