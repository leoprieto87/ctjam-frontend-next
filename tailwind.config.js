/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        gray: '#303030',
        grayText: '#404040',
        grayBg: '#dadada',
        redJam: '#C62E31',
        blueActions: '#2D4A95',
      },
      backgroundImage: {
        // 'logo': "url('http://www.ctjam.kinghost.net/images/logo-ctjam.png')",
        heroBanner:
          "url('http://www.ctjam.kinghost.net/images/bgCtJamApp.jpg')",
        'gradient-linear':
          'linear-gradient(180deg, rgba(218,218,218,1) 20%, rgba(255,255,255,1) 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
