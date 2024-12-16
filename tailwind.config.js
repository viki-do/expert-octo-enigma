/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    fontSize: {
      xs: ['12px', '15px'],
      sm: ['13px', '18px'],
      base: ['16px', '19.5px'],
      md: ['18px', '24px'],
      lg: ['20px', '24.38px'],
      xl: ['24px', '29.26px'],
      '2xl': ['28px', '34.5px'],
      '3xl': ['37px', '44px'],
      '4xl': ['50px', '55px'],
      '5xl': ['56px', '68px'],
      '6xl': ['64px', '70px'],
      '7xl': ['72px', '84px'],
      '8xl': ['96px', '106px'],
      '3xl2': ['47px', '47px'],
    },
    extend: {
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "pale-blue": "#F5F6FF",
        "white": "#FFFFFF",
        "black": "#000000",
        "dark-gray": "#666666",
        "purple": "#511881",
        "baby-pink": "#BEA8D1",
        "baby-pink2": "#E7CCFF",
        "purple3": "#1C0430",
        "dropdown-purple": "#28113B",
        "purple-text": "#7C6E88",
        "right-side-color": "#A49BAC",
        "dark-blue": "#000E2D",
        "light-purple": "#F2E5FF",
        "frontier-models": "#19012E",
        "frontier-models-color": "#E7CCFF",
      },
      screens: {
        "wide": "1440px",
      },
      animation: {
        scroll: 'scroll 15s linear infinite',
        scrollSeamless: "scrollSeamless 15s linear infinite",
        scrollSeamlessReverse: "scrollSeamlessReverse 15s linear infinite",

      },
      keyframes: {
        scroll: {
          '100%': { transform: 'translateX(0)' },
          '0%': { transform: 'translateX(-100%)' },
        },
        scrollSeamless: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollSeamlessReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },

      },
      padding: {
        "56": "224px",
        "140": "560px",
      },
      width: {
        "99": "396px",
      },
      height: {
        "115": "460px",
        "37": "148px",
        "87": "348px",
      },
      boxShadow: {
        'custom-purple': `
          0 10px 40px rgba(85, 23, 143, 0.8), 
          0 20px 40px rgba(85, 23, 143, 0.6), 
          0 30px 50px rgba(85, 23, 143, 0.4)
        `,
      },
    },
  },
  plugins: [],
};