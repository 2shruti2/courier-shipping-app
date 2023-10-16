/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['40px', '50px'],
      '4xl': ['48px', '58px'],
      '6xl': ['64px', '74px'],
      '8xl': ['96px', '106px']
    },

    safelist: ['animate-[fade-in_0.5s_ease-in-out]', 
    'animate-[fade-in-down_1s_ease-in-out]',
    'animate-[slideRight_1s_ease-in-out]',
  ],
    
    extend: {
      gridTemplateColumns: {
        "five": "repeat(5 , min(0, 100vw))"
        // "five": "100vw 100vw 100vw 100vw 100vw"
      },

      keyframes: {
        comefromright: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        comefromleft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        imgfromleft: {
          '0%': {
            width: '10%',
          },
          '100%': {
            width: '100%',

          },
        },
        
      },

      animation: {
        right: 'comefromright 0.5s ease-out',
        left: 'comefromleft 0.5s ease-out',
        img: 'imgfromleft 0.5s ease-in'
      },

      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        yeseva: ['Yeseva One', 'cursive'],
        sarabun: ['Sarabun', 'sans-serif'],
      },

      colors: {
        'primary': "#1b1b1b",
        'secondary': "#F7C60",
        'grey': "#dfdfdf",
        'dark-grey': "#7A7A7A",
      },

      backgroundImage: {
        'man-cycle': "url('https://globefarer.qodeinteractive.com/wp-content/uploads/2021/10/main-home-parallax-1-new.jpg')",
        'truck': "url('https://globefarer.qodeinteractive.com/wp-content/uploads/2021/10/main-home-image-3-new.jpg')"
      },

      screens: {
        "xs": "300px",
        "sm": "400px",
        "md": "900px",
        "xl" : "1200px",
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
}