/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': {'max': '780px'}, 
        'sm': {'max': '640px'},
        'lg': {'max': '1000px'},
        'xs': {'max': '350px'},
        "xsx":{'max': '390px'},
        'xl': {'max': '1140px'},
        "custom790": {'max': '790px'},
        "custom800": {'max': '800px'},


      },
      colors: {
        primary: '#34b9e8', 
        secondary:"#304884",
        white: '#fff', 
        black:'#28283C',
        grey:"#74788D",
        lightGrey:"#F5F6FA",
        yellow:"#FBAE17",
        red:"#F82424",
        pink:"#F8242429",
        'custom-white': 'rgba(255, 255, 255, 0.5)'

      },
      height: {
        'banner-height': 'calc(100vh - 4.25rem)',
        sidebarHeight:'calc(100vh - 4.375rem)',
      
      },
      padding:{
        Xpad:"5rem",
        Ypad:"3rem",

        XCard:"2rem",
        YCard:"3rem",


        XFooterPad:"5rem",
        YFooterPad:"2.46rem",


        MXpad:"2rem",
        MYpad:"2rem"

      },
      margin:{
        MMT:"3rem"
      },
      width:{
        formWidth:"40.53rem",
        resetPasswordWidth:"31.89rem"
      },

      boxShadow: {
        'custom-shadow': '0px 3px 53px 0px rgba(197, 197, 197, 0.27)',
        'card-shadow':' 4px 4px 0px 0px #14A09D',
        'card-shadowhome':' 0px 3px 18px -2px #34b9e8',
      },
      backgroundColor:{
        modalBG:"#00000099"
      },
      
    },
  },
  plugins: [],
}
