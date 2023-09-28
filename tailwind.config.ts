import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        'text': '600px',
        'lg': '738px',
      },
      maxWidth: {
        'text': '600px',
      }
    }
  },
  plugins: [],
}
export default config
