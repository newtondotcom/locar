/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      screens: {  
        'mlg': {'max': '1023px'},
        'mmd': {'max': '767px'},
        'msm': {'max': '639px'},
      }
    },
  },
  plugins: [],
};
