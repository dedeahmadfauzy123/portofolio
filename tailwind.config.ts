import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
        display: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1B365D',
          dark: '#0F2440',
          light: '#2C5282',
          50: '#EDF2F8',
          100: '#D4E2F1',
          200: '#A8C5E2',
          300: '#7BA8D3',
          400: '#5B9BD5',
          500: '#3182CE',
          600: '#2B6CB0',
          700: '#2C5282',
          800: '#1B365D',
          900: '#0F2440',
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
