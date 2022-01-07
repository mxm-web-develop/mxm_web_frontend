module.exports = {
  darkMode:'class',
  important: true,
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      fontFamily: {
        'animate': ['"Saira Stencil One"'],
        'animate-2':['"Secular One"'],
        'animate-3':['DM Sans']
      },
      fontSize: {
        '2xs': ['0.55rem', { lineHeight: '0.75rem' }],
      },
      colors: {
        'theme-red':'#F13842',
        'theme-yellow':'#F9E001',
        'theme-dark':'#1d2024'
      },
      spacing:{
        pcBody:'1200px',
        quote:'295px',
        lbbox:'650px',
        designbox:'780px',
        half:'50%'
      },
      minHeight: {
        pageMin:'325px',
        homeUnit:'280px',
        cover:'795px'
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
