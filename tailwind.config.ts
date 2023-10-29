import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xxs: '380px',
        xxsMax: { max: '379px' },
        xs: '540px',
        xsMax: { max: '540px' },
        sm: '640px',
        smMax: { max: '639px' },
        md: '768px',
        mdMax: { max: '767px' },
        bg: '962px',
        bgMax: { max: '961px' },
        lg: '1024px',
        lgMax: { max: '1023px' },
        lx: '1180px',
        lxMax: { max: '1179px' },
        xl: '1280px',
        xlMax: { max: '1279px' },
        ['2xl']: '1400px',
        ['2xlMax']: { max: '1399px' },
      },
    },
  },
  plugins: [],
};
export default config;
