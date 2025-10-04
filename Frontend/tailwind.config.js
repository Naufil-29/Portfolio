/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite', // slower spin
      },
    },
  },
}

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'spin-y': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        'spin-y': 'spin-y 2s linear infinite', // 2s per full spin
        'spin-y-slow': 'spin-y 5s linear infinite', // slower version
      },
    },
  },
  plugins: [],
};

