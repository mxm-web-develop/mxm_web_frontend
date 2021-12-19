module.exports = {
  darkMode:'class',
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        'theme-red':'#F13842',
        'theme-yellow':'#F9E001'
      },
      spacing:{
        pcBody:'1200px',
        quote:'295px'
      },
      minHeight: {
        pageMin:'325px',
        homeUnit:'280px'
      }, 
    },

  },
  plugins: [],
}
