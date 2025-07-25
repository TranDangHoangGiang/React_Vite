import { createTheme } from "@mui/material/styles";
import { teal, deepOrange, cyan, orange } from "@mui/material/colors";
const theme = createTheme({
  trello: {
    appBarHeight: "48px",
    boardBarHeight: "58px",
  },
  colorSchemes: {
    light: { palette: { primary: teal, secondary: deepOrange } },
    dark: { palette: { primary: cyan, secondary: orange } },
  },
});

export default theme;
