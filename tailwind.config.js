/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#09090a',
          2: '#111113',
          3: '#18181b',
          4: '#1f1f23',
        },
        amber: {
          DEFAULT: '#e8a030',
          bright: '#f5b84a',
          dim: 'rgba(232,160,48,0.12)',
        },
        green: {
          accent: '#3ddc84',
          dim: 'rgba(61,220,132,0.1)',
        },
        text: {
          DEFAULT: '#e2e0db',
          muted: '#6b6966',
          muted2: '#908d89',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.07)',
          2: 'rgba(255,255,255,0.13)',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
