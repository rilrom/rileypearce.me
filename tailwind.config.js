const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nav: "#242424",
        heading: "#eaeaea",
        light: "#b1b1b1",
      },
      fontFamily: {
        sans: ["DM Mono", ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "color": `${theme("colors.light")}`,
            "a": {
              "color": `${theme("colors.light")}`,
              "borderBottomWidth": "2px",
              "borderBottomColor": `${theme("colors.light")}`,
              "textDecoration": "none",
              "transitionProperty":
                "color, border-bottom-color, background-color",
              "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
              "transitionDuration": "150ms",
              // using important as temporary workaround - see issues/231
              "&:hover": {
                color: `${theme("colors.white")} !important`,
                borderBottomColor: `${theme("colors.white")} !important`,
              },
            },
            ".icon": {
              borderBottomWidth: "0px !important",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
