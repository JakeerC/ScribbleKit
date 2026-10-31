/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        scribble: {
          orange: '#EA552B',
          yellow: '#F7D046',
          green: '#4CA96D',
          pink: '#EE8DB9',
          blue: '#55BBDA',
          blush: '#FDD5E7',
          cream: '#FBE8DE',
          mint: '#0BDC85', // ScribbleKit mint
          dark: '#141416',
          paper: '#FDFBF7',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'wiggle-slow': 'wiggle 2.5s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spinReverse 22s linear infinite',
        'rotate': 'spin 8s linear infinite',
        'rotate-slow': 'spin 16s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'float-reverse': 'floatReverse 6.5s ease-in-out infinite',
        'float-gentle': 'float 4.5s ease-in-out infinite',
        'wobble': 'wobble 2s ease-in-out infinite',
        'wobble-slow': 'wobble 4s ease-in-out infinite',
        'sparkle': 'sparkle 2.5s ease-in-out infinite',
        'bounce-subtle': 'bounceSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        spinReverse: {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2.5deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-3deg)' },
        },
        wobble: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(-2.5deg) scale(1.02)' },
          '75%': { transform: 'rotate(2.5deg) scale(0.98)' },
        },
        sparkle: {
          '0%, 100%': { transform: 'scale(0.9) rotate(0deg)', opacity: '0.85' },
          '50%': { transform: 'scale(1.2) rotate(45deg)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': {
            transform: 'scale(1)',
            filter: 'drop-shadow(0 0 2px rgba(234, 85, 43, 0.35))',
          },
          '50%': {
            transform: 'scale(1.04)',
            filter: 'drop-shadow(0 0 10px rgba(247, 208, 70, 0.75)) drop-shadow(0 0 3px rgba(234, 85, 43, 0.6))',
          },
        },
      }
    },
  },
  plugins: [],
}
