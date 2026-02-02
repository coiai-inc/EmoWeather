import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'emotion-happy': '#FFD700',
        'emotion-sad': '#4169E1',
        'emotion-angry': '#FF4500',
        'emotion-calm': '#90EE90',
        'emotion-excited': '#FF1493',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
export default config
