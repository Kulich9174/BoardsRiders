/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        peta: ['Peta', 'sans-serif'],
        sans: ['SBSans', 'sans-serif'],
        grotesk:["Host Grotesk"],

      },
      fontSize: {
        xs: '11px',
        sm: '12px',
        base: '14px',
        md: '14px',
        xl: '16px',
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};
