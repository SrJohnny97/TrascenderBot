/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'night-blue-bg': '#0c142c',
        'deep-purple-hint': '#2a1a4c',
        'deep-black-bg': '#0d0617',
        'golden-glow': '#ffc371',
        'off-white-text': '#f0f0f0',
      },
      fontFamily: {
        philosopher: ['Philosopher', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-in-out forwards',
        'pulse-glow': 'pulseGlow 2.5s infinite ease-in-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { 
            transform: 'scale(1)',
            boxShadow: '0 0 20px rgba(255, 195, 113, 0.4)',
          },
          '50%': { 
            transform: 'scale(1.05)',
            boxShadow: '0 0 40px rgba(255, 195, 113, 0.8)',
          },
        },
      },
    },
  },
  plugins: [],
}
