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
        subtitle: "#eaeaea",
        light: "#b1b1b1",
      },
      screens: {
        xs: "600px",
      },
      fontFamily: {
        mono: ["DM Mono", ...fontFamily.sans],
        sans: ["Inter", ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "color": `${theme("colors.light")}`,
            "a.icon": {
              "color": `${theme("colors.light")}`,
              "textDecoration": "none",
              "transitionProperty": "color",
              "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
              "transitionDuration": "150ms",
              "&:hover": {
                color: `${theme("colors.white")}`,
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
