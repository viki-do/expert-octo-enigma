/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    fontSize: {
      xs: ['10px', '14px'],
      sm: ['13px', '18px'],
      base: ['16px', '19.5px'],
      md: ['18px', '24px'],
      lg: ['20px', '24.38px'],
      xl: ['24px', '29.26px'],
      '2xl': ['28px', '34.5px'],
      '3xl': ['37px', '44px'],
      '4xl': ['48px', '58px'],
      '5xl': ['56px', '68px'],
      '6xl': ['64px', '70px'],
      '7xl': ['72px', '84px'],
      '8xl': ['96px', '106px'],
    },
    extend: {
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "pale-blue": "#F5F6FF",
        "white": "rgba(255, 255, 255)",
        "black": "#000000",
        "purple": "#8200FF",
        "dark-gray": "#666666",
        "purple": "#511881" ,
        "baby-pink": "#BEA8D1",
      },
      screens: {
        "wide": "1440px",
      },
      animation: {
        scroll: 'scroll 15s linear infinite',
      },
      keyframes: {
        scroll: {
          '100%': { transform: 'translateX(0)' },
          '0%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
