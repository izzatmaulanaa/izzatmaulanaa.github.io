import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        foreground: '#FFFFFF',
        muted: '#A3A3A3',
        card: '#111111',
        border: '#1F1F1F',
        accent: {
          DEFAULT: '#FACC15',
          300: '#FDE047',
          400: '#FACC15'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: [
          'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas',
          '"Liberation Mono"', '"Courier New"', 'monospace'
        ]
      }
    }
  },
  plugins: []
}

export default config
