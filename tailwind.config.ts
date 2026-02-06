import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'emotion-happy': '#FFD700',
        'emotion-sad': '#6495ED',
        'emotion-angry': '#FF6B6B',
        'emotion-calm': '#4ECDC4',
        'emotion-excited': '#FF1493',
        'emotion-neutral': '#A0AEC0',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(99, 102, 241, 0.8), 0 0 60px rgba(139, 92, 246, 0.5)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-grow': {
          '0%': { transform: 'scale(1)', boxShadow: '0 0 10px rgba(99, 102, 241, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(99, 102, 241, 0.8)' },
          '100%': { transform: 'scale(1.1)', boxShadow: '0 0 30px rgba(139, 92, 246, 0.8)' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow-grow': 'glow-grow 0.6s ease-out',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(99, 102, 241, 0.4)',
        'glow-md': '0 0 25px rgba(99, 102, 241, 0.6)',
        'glow-lg': '0 0 40px rgba(99, 102, 241, 0.8)',
        'glow-xl': '0 0 60px rgba(99, 102, 241, 1)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config
