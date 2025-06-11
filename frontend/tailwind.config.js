// // tailwind.config.js

// import daisyui from "daisyui"; // Importing daisyUI plugin

// export default {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // Includes all React files in the src folder
//     "./public/index.html", // Includes the index.html file
//   ],
//   theme: {
//     extend: {
//       colors: {
//         brand: {
//           c1: '#1e58af', // replace with your desired color
//         },
//       },
//       container: {},
//     },
//   },
//   plugins: [
//     daisyui(), // DaisyUI plugin for ready-to-use components
//   ],
// };



// tailwind.config.js
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        braces: {
          Aa: '#1e58af',
        },
      },
    },
  },
  plugins: [daisyui],
};

export default config;
