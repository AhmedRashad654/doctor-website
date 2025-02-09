"use client";
import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface Palette {
    babyBlue: Palette["primary"];
    lightBlue: Palette["primary"];
    gray: Palette["primary"];
    backGround: Palette["primary"];
    placeholder: Palette["primary"];
  }
  interface PaletteOptions {
    babyBlue?: PaletteOptions["primary"];
    lightBlue?: PaletteOptions["primary"];
    gray?: PaletteOptions["primary"];
    backGround?: PaletteOptions["primary"];
    placeholder?: PaletteOptions["primary"];
  }
}
const theme = createTheme({
  palette: {
    primary: {
      main: "#0a456f",
    },
    secondary: {
      main: "#32bfed",
    },
    babyBlue: {
      main: "#a4e4fd",
    },
    lightBlue: {
      main: "#32a4ea",
    },
    gray: {
      main: "#7a7a7a",
    },
    backGround: {
      main: "#eeffff",
    },
    placeholder: {
      main: "#dddddd",
    },
  },
});

export default theme;
