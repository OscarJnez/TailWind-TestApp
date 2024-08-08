module.exports = {
  content: [
    './src/**/*.{html,js}',
    './index.html'
  ],
  theme: {
    extend: {
      screens: {

      },
      backgroundImage: theme => ({

        'body-pattern': "url('../img/pattern.png')",
        'banner': "url('../img/bakbaner.png')"

      }),
      backgroundPosition: {
        'banner-position': "-200px -200px"
      },
      colors: {
        "azul-claro": "#37bcf9",
        "azul-oscuro": "#0370b9",
      },
      animation: {
        'spin-low': 'spin 2s linear infinite',
        'from-below': 'fromBelow 500ms linear',
        'from-right': 'fromRight 300ms linear',
        'text-baner': 'textBaner 12s linear',
        'bg-banner': 'bgBanner 10s linear',
        'cardIcon-top': 'cardIconTop 300ms linear',
        'cardCategory-top': 'cardCategoryTop 300ms linear',
        'cardDescription-left': 'cardDescriptionLeft 400ms linear'

      },
      keyframes: {

        fromBelow: {
          '0%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(200%)' },
          '100%': { transform: 'translateY(0%)' }
        },
        fromRight: {
          '0%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(200%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        textBaner: {
          '0%': {
            transform: 'translateX(-600%) scale(5,5)',
            opacity: 1
          },
          '50%': {
            transform: 'translateX(600%) scale(5,5)',
            opacity: 1
          },
          '75%': {
            transform: 'translateX(-600%) scale(5,5)',
            'text-shadow': 'none',
            color: "transparent",
            opacity: 1
          },
          '100%': {
            transform: 'translateX(10%) scale(1,1)',
            'text-shadow': '2px 2px 1px black',
            color: "white",
            opacity: 1
          },

        },

        bgBanner: {
          '0%': { 'background-position': '0px -0px' },
          '100%': { 'background-position': '-200px -200px' }
        },

        cardIconTop: {
          '0%': { transform: 'translateY(-200%)' },
          '100%': { transform: 'translateY(0%)' }
        },

        cardCategoryTop: {
          '0%': { transform: 'translateY(-200%)' },
          '100%': { transform: 'translateY(0%)' }
        },

        cardDescriptionLeft: {
          '0%': { transform: 'translateX(-200%)' },
          '100%': { transform: 'translateX(0%)' }
        }

      }

    },
  },
  variants: {
    extend: {
      animation: ['responsive', 'hover', 'group-hover'],
      textColor: ['responsive', 'hover', 'group-hover'],
      fontSize: ['responsive', 'hover', 'group-hover'],
      backgroundColor: ['responsive', 'hover', 'group-hover'],
      borderColor: ['responsive', 'hover', 'group-hover'],
      transform: ['responsive', 'hover', 'group-hover'],
      scale: ['responsive', 'hover', 'group-hover'],
      translate: ['responsive', 'hover', 'group-hover'],
      margin:['responsive', 'hover', 'group-hover'],
      padding: ['responsive', 'hover', 'group-hover'],
    },
  },
  plugins: [],
}