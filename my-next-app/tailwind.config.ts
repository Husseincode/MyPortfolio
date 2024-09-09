/** @format */

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      boxShadow: {
        'custom-gray':
          '0 8px 10px -1px rgba(207, 215, 226, 0.5), 0 6px 8px -1px rgba(207, 215, 226, 0.25)',
      },
    },
  },
  plugins: [],
};
export default config;
