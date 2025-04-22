// tailwind.config.js
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      color: {
        'pl-red': {
          '50': '#fff1f2',
          '100': '#ffe0e3',
          '200': '#ffc6cc',
          '300': '#ff9fa8',
          '400': '#ff6776',
          '500': '#fc374a',
          '600': '#ea1f33',
          '700': '#c51022',
          '800': '#a21220',
          '900': '#861621',
          '950': '#49060d',
        },
        'pl-green': {
          '50': '#f0fdf2',
          '100': '#dcfce1',
          '200': '#bcf6c5',
          '300': '#87ee99',
          '400': '#4bdd65',
          '500': '#23c441',
          '600': '#1ab537',
          '700': '#167f2a',
          '800': '#176426',
          '900': '#155222',
          '950': '#052e0f',
        },
        'pl-blue': {
          '50': '#f0f9ff',
          '100': '#e1f3fd',
          '200': '#bce7fb',
          '300': '#81d6f8',
          '400': '#3ec1f2',
          '500': '#15a9e2',
          '600': '#088ac4',
          '700': '#086d9c',
          '800': '#0b5c81',
          '900': '#0f4c6b',
          '950': '#0a3147',
        },
        'pl-yellow': {
          '50': '#ffffe7',
          '100': '#fdffc1',
          '200': '#ffff86',
          '300': '#fff741',
          '400': '#ffe90d',
          '500': '#ffda00',
          '600': '#d1a100',
          '700': '#a67302',
          '800': '#89590a',
          '900': '#74490f',
          '950': '#442604',
        },
      },
      zIndex: {
        '100': '999',
        '999': '999',
        '1000': '1000',
      },
      aspectRatio: {
        'insta': '1.91', // Custom aspect ratio for Instagram (1.91:1)
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    typography,
    forms,
    aspectRatio,
  ],
}