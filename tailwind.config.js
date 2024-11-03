/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
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
      },
      screens: {
        "wide": "1440px",
      }
    },
  },
  plugins: [],
}
