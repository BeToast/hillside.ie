import type { Config } from 'tailwindcss'

//remove at deployment!!! TODO:
const colors = require('tailwindcss/colors')


const config: Config = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      colors: {
         'inherit': 'inherit',
         'transparent': 'transparent',

         // bg: 'hsl(25, 92%, 95%)', // pri-100'

         'grey': colors.gray,
         // 'grey': {
         //    '50': 'hsl(0, 0%, 97%)',
         //    '100': 'hsl(0, 7%, 94%)',
         //    '200': 'hsl(15, 7%, 89%)',
         //    '300': 'hsl(9, 8%, 82%)',
         //    '400': 'hsl(13, 6%, 71%)',
         //    '500': 'hsl(10, 6%, 60%)',
         //    '600': 'hsl(10, 5%, 51%)',
         //    '700': 'hsl(11, 5%, 42%)',
         //    '800': 'hsl(7, 4%, 35%)',
         //    '900': 'hsl(10, 4%, 31%)',
         //    '950': 'hsl(12, 6%, 15%)',
         // },
         'pri': {
            '50': 'hsl(167, 53%, 97%)',
            '100': 'hsl(168, 53%, 89%)',
            '200': 'hsl(168, 51%, 78%)',
            '300': 'hsl(171, 47%, 64%)',
            '400': 'hsl(172, 41%, 50%)',
            '500': 'hsl(173, 50%, 40%)',
            '600': 'hsl(175, 52%, 32%)',
            '700': 'hsl(175, 47%, 26%)',
            '800': 'hsl(176, 42%, 22%)',
            '900': 'hsl(175, 38%, 19%)',
            '950': 'hsl(178, 53%, 10%)',
         },
         'ax1': {
            '50': 'hsl(24, 100%, 98%)',
            '100': 'hsl(25, 92%, 95%)',
            '200': 'hsl(22, 91%, 87%)',
            '300': 'hsl(20, 85%, 79%)',
            '400': 'hsl(17, 80%, 67%)',
            '500': 'hsl(14, 75%, 60%)',
            '600': 'hsl(10, 70%, 56%)',
            '700': 'hsl(8, 65%, 48%)',
            '800': 'hsl(7, 57%, 42%)',
            '900': 'hsl(6, 45%, 35%)',
            '950': 'hsl(5, 45%, 22%)',
         },
      },
      extend: {
         width: {
            'text': '600px',
            'lg': '738px',
         },
         height: {
            'heading': '10rem', //h-40
         },
         maxWidth: {
            'text': '600px',
         },
         fontFamily: {
            head: 'var(--font-head)',
            body: 'var(--font-body)',
         },
      }
   },
   plugins: [],
}
export default config
