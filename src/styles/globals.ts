import { globalCss } from "@nextui-org/react";
import { lightTheme, darkTheme, fonts, } from "styles/shared";

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    fontFamily: fonts.headings,
  },
  "html, body": {
    padding: 0,
    margin: 0,
  },
  "a": {
    color: "inherit",
    textDecoration: "none",
  },
});
