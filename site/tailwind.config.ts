import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D62027',
          dark: '#A8181E',
          light: '#E84047',
        },
        tertiary: '#005ca6',
        ink: '#0B0B0C',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        headline: ['var(--font-headline)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
