/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        areia: { DEFAULT: '#E9DCC3', 50: '#F7F1E6', 100: '#F2E8D6', 200: '#E9DCC3', 300: '#D9C6A3', 400: '#C4AB7E' },
        terracota: { DEFAULT: '#B5532F', 600: '#9A4323', 700: '#7E3519', 300: '#D98A68' },
        terra: { DEFAULT: '#2B1D14', 800: '#3A281C', 700: '#4A3526', 600: '#5E4633', 900: '#1C130D' },
        oliva: { DEFAULT: '#5E6B3A', 700: '#48532B', 300: '#A3AE78' },
        profundo: { DEFAULT: '#1F3550', 800: '#172940', 900: '#0F1C2E', 300: '#7F9BBF' },
        ocre: { DEFAULT: '#C98B2B', 300: '#E6B866', 700: '#9C6A1C', 800: '#7A5214' },
        osso: '#F7F1E6',
      },
      fontFamily: {
        serif: ['"Fraunces Variable"', 'Georgia', 'serif'],
        sans: ['"Inter Tight Variable"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        papel: '0 1px 0 rgba(255,255,255,.5) inset, 0 18px 40px -18px rgba(43,29,20,.45), 0 4px 10px -4px rgba(43,29,20,.25)',
        carta: '0 30px 60px -25px rgba(28,19,13,.6), 0 8px 18px -8px rgba(28,19,13,.35)',
      },
      maxWidth: { site: '76rem' },
    },
  },
  plugins: [],
}
