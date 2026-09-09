/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FFFDF8',
          light: '#FFFFFD',
          dark: '#FBF7EE',
        },
        cream: {
          DEFAULT: '#F8F1E9',
          light: '#FCF8F3',
          dark: '#EFE4D6',
        },
        blush: {
          DEFAULT: '#FADCE6',
          light: '#FDF0F4',
          dark: '#F4BED0',
        },
        rose: {
          dusty: '#E8A5B8',
          deep: '#D17C94',
        },
        brown: {
          soft: '#5C4B43',
          deep: '#3A2E2B',
          muted: '#8C7A70',
          light: '#A6958C',
        }
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      },
      borderRadius: {
        '28': '28px',
        '32': '32px',
        '20': '20px',
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(92, 75, 67, 0.06)',
        'card': '0 10px 35px rgba(92, 75, 67, 0.05)',
        'card-hover': '0 20px 45px rgba(92, 75, 67, 0.12)',
        'floating': '0 12px 40px rgba(92, 75, 67, 0.08)',
      },
      animation: {
        'heart-beat': 'heartBeat 0.8s ease-in-out',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        heartBeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.2)' },
          '50%': { transform: 'scale(0.95)' },
          '75%': { transform: 'scale(1.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
