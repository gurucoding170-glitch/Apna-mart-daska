/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0a0a0c',
          900: '#0a0a0c',
          800: '#121214',
          700: '#1a1a1e',
        },
        cocoa: {
          DEFAULT: '#1e110a',
          900: '#1e110a',
          800: '#2a1a10',
          700: '#3a2415',
        },
        gold: {
          DEFAULT: '#e5b869',
          50: '#fdf6e3',
          100: '#f8e9c4',
          200: '#f0d99a',
          300: '#e5b869',
          400: '#d4a44f',
          500: '#b88a3a',
          600: '#94692a',
        },
        oreo: {
          DEFAULT: '#0088ff',
          300: '#5bb5ff',
          400: '#0088ff',
          500: '#0066cc',
          600: '#004d99',
        },
        success: '#3ecf8e',
        warning: '#f5a623',
        error: '#e5484d',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 30px rgba(229, 184, 105, 0.25)',
        'glow-oreo': '0 0 30px rgba(0, 136, 255, 0.25)',
        card: '0 8px 30px rgba(0,0,0,0.5)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        shimmer: 'shimmer 3s linear infinite',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
