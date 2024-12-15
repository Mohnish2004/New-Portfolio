import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slower': 'pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'typing': 'typing 1.4s ease-in-out infinite',
      },
      keyframes: {
        typing: {
          '0%': { 
            transform: 'translateY(0px)',
            opacity: '0.4'
          },
          '50%': { 
            transform: 'translateY(-4px)', 
            opacity: '0.8'
          },
          '100%': { 
            transform: 'translateY(0px)',
            opacity: '0.4'
          },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: 'inherit',
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require('@tailwindcss/typography')],        
}