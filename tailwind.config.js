/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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
      '6xl' : ['64px', '74px' ],
      '8xl': ['96px', '106px']
    },
    extend: { 

      fontFamily: {
        roboto: ['Roboto', 'sans-serif' ],
        yeseva: ['Yeseva One', 'cursive'],
        sarabun : ['Sarabun', 'sans-serif'],
      },

      colors: {
        'primary': "#1b1b1b",
        'secondary' : "#F7C60",
        'grey' : "#dfdfdf",
        'dark-grey' : "#7A7A7A",
      },

      backgroundImage: {
        'man-cycle': "url('https://globefarer.qodeinteractive.com/wp-content/uploads/2021/10/main-home-parallax-1-new.jpg')",
        'truck' : "url('https://globefarer.qodeinteractive.com/wp-content/uploads/2021/10/main-home-image-3-new.jpg')"
      },
      
      screens : {
        "xs" : "300px",
        "sm" : "400px",
        "md" : "900px",
      }
    },
  },
  plugins: [],
}