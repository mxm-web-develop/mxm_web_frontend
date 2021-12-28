module.exports = {
  darkMode:'class',
  content: ["./src/**/*.{html,js,vue}"],
  theme: {

    extend: {
      fontFamily: {
        'animate': ['"Saira Stencil One"'],
        'animate-2':['"Secular One"'],
        'animate-3':['Catamaran']
      },
      colors: {
        'theme-red':'#F13842',
        'theme-yellow':'#F9E001'
      },
      spacing:{
        pcBody:'1200px',
        quote:'295px',
        lbbox:'650px',
        half:'50%'
      },
      minHeight: {
        pageMin:'325px',
        homeUnit:'280px',
        cover:'1024px'
      }, 
      minWidth: {
        padPage:'750px'
      },
      maxWidth: {
        HdPage:'1400px'
      }
    },

  },
  plugins: [],
}
