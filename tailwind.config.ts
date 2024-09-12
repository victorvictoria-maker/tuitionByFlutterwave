/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryBlue: "#2A3362",
        primaryText: "#01020D",
        blueGradient: "#0A0E27",
        textColor: "#1D1D1D",
        orangeColor: "#FF4500",
        neutralWhite: "#FDFDFD",
        grayColor2: "#414141",
        greyColor3: "#676767",
        grayColor900: "061C3D",
        grayColor500: "838E9E",
        grayColor300: "#B8B4B4",
        grayColor200: "#DFE0E5",
        grayColor50: "#CBD9E4",
        greenColor25: "rgba(0, 158, 58, 0.25)",
        greenColor: "#35A162",
      },
      fontFamily: {
        moderat: ["Moderat", "sans-serif"],
        millik: ["Millik", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        semiBold: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
};
