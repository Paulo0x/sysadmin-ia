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
        // Cyberpunk color palette
        primary: {
          50: '#e0f7ff',
          100: '#b3ecff',
          200: '#80e0ff',
          300: '#4dd4ff',
          400: '#26c9ff',
          500: '#00bfff',
          600: '#00a8e6',
          700: '#008fcc',
          800: '#0076b3',
          900: '#005c99',
        },
        'neon-cyan': '#00f0ff',
        'neon-magenta': '#ff00ff',
        'neon-purple': '#b000ff',
        'neon-pink': '#ff006e',
        'dark-bg': '#0a0a0f',
        'dark-card': '#13131a',
        'dark-border': '#1f1f29',
        'dark-text': '#e0e0e0',
      },
      backgroundImage: {
        'gradient-cyberpunk': 'linear-gradient(135deg, #00f0ff 0%, #b000ff 100%)',
      },
      boxShadow: {
        'neon-cyan': '0 0 10px rgba(0, 240, 255, 0.5)',
        'neon-magenta': '0 0 10px rgba(255, 0, 255, 0.5)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#e0e0e0',
            a: {
              color: '#00f0ff',
              '&:hover': {
                color: '#b000ff',
              },
            },
            code: {
              color: '#00f0ff',
              backgroundColor: '#1f1f29',
              padding: '0.25rem 0.4rem',
              borderRadius: '0.25rem',
              fontWeight: '600',
              border: '1px solid rgba(0, 240, 255, 0.3)',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#0a0a0f',
              color: '#e0e0e0',
              border: '1px solid rgba(0, 240, 255, 0.2)',
            },
            h1: { color: '#00f0ff' },
            h2: { color: '#00f0ff' },
            h3: { color: '#b000ff' },
            strong: { color: '#ff00ff' },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
