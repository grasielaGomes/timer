import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./themes/global";
import { defaultTheme } from "./themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
};
