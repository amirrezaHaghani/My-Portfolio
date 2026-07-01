import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        graphite: '#05070d',
        panel: 'rgba(255,255,255,0.075)',
        cyanfire: '#49d7ff',
        mintvolt: '#4dffbf',
        ember: '#f4b35e',
      },
      boxShadow: {
        glow: '0 0 80px rgba(73, 215, 255, 0.24)',
        gold: '0 18px 60px rgba(244, 179, 94, 0.16)',
      },
    },
  },
  plugins: [],
} satisfies Config;
