// by Pawan Kumar Sharma
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode using a CSS class
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
  ],
  theme: {
    extend: {
      animation: {
        'gradient-move': 'gradient-move 15s ease infinite',
      },
      keyframes: {
        'gradient-move': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
};
