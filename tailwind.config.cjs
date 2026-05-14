/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.1), 0 20px 60px rgba(3,7,18,0.35)',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        atlas:
          'radial-gradient(circle at top, rgba(250,204,21,0.18), transparent 36%), radial-gradient(circle at 20% 20%, rgba(59,130,246,0.16), transparent 25%), linear-gradient(180deg, #08111f 0%, #050816 100%)',
      },
      colors: {
        ink: {
          950: '#050816',
        },
      },
    },
  },
  plugins: [],
};
