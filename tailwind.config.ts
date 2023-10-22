import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'theme': {
          500: '#4C8AA3'
        },
        'main': {
          100: '#FFFFFF',
          700: '#262F2C'
        }
      }
    },
  },
  plugins: [],
}
export default config
