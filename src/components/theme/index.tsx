import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "../../index.css";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const customTheme = createTheme({
  spacing: 12,
  shape: {
    borderRadius: 12,
  },
  palette: {
    primary: {
      dark: "#442781",
      main: "#61459C",
      light: "#A992DB",
    },
    secondary: {
      main: "#FF7917",
    },
  },
});

const CustomThemeProvider: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
