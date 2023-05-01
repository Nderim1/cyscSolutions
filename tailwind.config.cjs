/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'first-step': "url('$lib/image/pain_point.png')"
      }
    }
  },
  plugins: [require('daisyui')],
}
