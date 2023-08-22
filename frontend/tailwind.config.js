import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'garamond': ['Garamond']
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light", "dark", "cupcake"
    ]
  }
  
}

