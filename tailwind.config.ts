import { transform } from 'next/dist/build/swc';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        xl: '1200px',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        floating: {
          '0%': {
            shadow: '0 5px 15px 0px rgba(0,0,0,0.6)',
            transform: 'translateY(0px)',
          },
          '50%': {
            shadow: '0 25px 15px 0px rgba(0,0,0,0.2)',
            transform: 'translateY(-20px)',
          },
          '100%': {
            shadow: '0 5px 15px 0px rgba(0,0,0,0.6)',
            transform: 'translateY(0px)',
          },
        },
      },
      animation: {
        floating: 'floating 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
