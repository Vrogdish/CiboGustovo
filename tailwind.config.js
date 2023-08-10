/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      
    },
    fontFamily: {
      body: "Roboto",
      display: "Montserrat",
      logo: "Elsie",
    },
    colors : {
      "main-0": "#000000",
      "main-10": "#1B1D16",
      "main-20": "#36392D",
      "main-30": "#515643",
      "main-40": "#6C7359",
      "main-50": "#878F70",
      "main-60": "#9FA68C",
      "main-70": "#B7BCA9",
      "main-80": "#CFD2C6",
      "main-90": "#E7E9E2",
      "main-100": "#FFFFFF",
    }
  },
  plugins: [],
};
