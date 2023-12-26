module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brandblue: {
          DEFAULT: '#0695C9',
        },
        brandyellow: {
          DEFAULT: '#FFFF00',
        },
        brandgreen: {
          DEFAULT: '#16A75C',
        },
        brandred: {
          DEFAULT: '#FB0102',
        },
      },
    },
  },
  plugins: [],
  plugins: [require('@tailwindcss/typography')],
}
