/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts,scss}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        'crusta': '#E67E22',
        'ming': '#2C5F5F',
        'green-vogue': '#1A2332',
        'oxford-blue': '#383E4A',
        'surface': '#F8FAFC',
        'background': '#FFFFFF',
        
        // Legacy Support
        primary: '#E67E22',
        'primary-light': '#ED8936',
        'primary-dark': '#C05621',
        dark: '#1A2332',
        text: '#383E4A'
      },
      fontFamily: {
        title: ['Exo', 'sans-serif'],
        body: ['Fira Sans', 'sans-serif'],
        ui: ['Red Hat Display', 'sans-serif']
      },
      boxShadow: {
        'md-soft': '0 6px 18px rgba(230, 126, 34, 0.08)',
        'card-hover': '0 12px 32px rgba(44, 95, 95, 0.15)'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay-1': 'float-delay-1 8s ease-in-out infinite',
        'float-delay-2': 'float-delay-2 10s ease-in-out infinite',
        'glow': 'glow 8s ease-in-out infinite',
        'glow-delay': 'glow-delay 10s ease-in-out infinite',
        'fade-in': 'fade-in 1s ease-out',
        'fade-in-up': 'fade-in-up 1s ease-out 0.3s both'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'float-delay-1': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-15px) translateX(10px)' }
        },
        'float-delay-2': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-25px) translateX(-10px)' }
        },
        glow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.1)' }
        },
        'glow-delay': {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(1.15)' }
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: [],
}
