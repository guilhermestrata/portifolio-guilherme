import daisyui from "daisyui";

// tailwind.config.js
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/daisyui/dist/**/*.js",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "base-100": "#ffffff",  
        },
      },
      "dark", 
    ],
  },
  plugins: [
    daisyui,
  ],
};
