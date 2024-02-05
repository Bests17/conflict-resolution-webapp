/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        screens: {
          "3xl": "1920px",
        },
      },
      fontSize: {
        sm: "14px",
        md: "16px",
        lg: ["20px", "normal"],
      },
      colors: {
        primary: {
          DEFAULT: "#204ECF",
          800: "#1D5BD6",
          950: "#0400D0",
        },
        purple: {
          500: "#524FFF",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *")
      addVariant("child-hover", "& > *:hover")
    },
  ],
}
