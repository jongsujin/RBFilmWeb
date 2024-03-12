import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      pre: ["pretendard"],
      pt: ["PT Serif Caption"],
    },
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      gray: "#707070",
    },
    extend: {
      fontSize: {
        headline1: "22px",
        headline2: "20px",
        headline3: "18px",
        body: "16px",
        lg: "14px",
        m: "12px",
        sm: "10px",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        photo:
          "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 18px",
      },
      screens: {
        sm: "480px",
        ml: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1921px",
        xxxl: "2300px",
      },
    },
  },
  plugins: [],
};
export default config;
