import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./themes/global";
import { defaultTheme } from "./themes/default";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello World</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
};
