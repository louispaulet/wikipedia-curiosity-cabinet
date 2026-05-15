/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(68,64,60,0.12), 0 18px 45px rgba(68,64,60,0.16)',
        paper: '0 1px 0 rgba(255,255,255,0.75) inset, 0 18px 40px rgba(78,60,38,0.12)',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        article: ['Georgia', '"Times New Roman"', 'serif'],
      },
      backgroundImage: {
        atlas:
          'radial-gradient(circle at 8% 10%, rgba(157,120,57,0.12), transparent 28%), radial-gradient(circle at 90% 8%, rgba(67,104,119,0.12), transparent 24%), linear-gradient(180deg, #f7f1e4 0%, #e9ddc7 100%)',
      },
      colors: {
        ink: {
          50: '#f8fafc',
          200: '#c9c4b8',
          600: '#4b5563',
          700: '#34414d',
          800: '#24303a',
          950: '#050816',
        },
        paper: {
          50: '#fffdf6',
          100: '#fbf6e8',
          200: '#eee3c9',
          300: '#dfcda9',
        },
        sepia: {
          300: '#c8a76b',
          500: '#8d6a36',
          700: '#60471f',
        },
        moss: {
          500: '#67735d',
          700: '#3f4a3d',
        },
        atlas: {
          blue: '#315f7d',
          link: '#1f5f9c',
        },
      },
    },
  },
  plugins: [],
};
