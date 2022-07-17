import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { DefaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
