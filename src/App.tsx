import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { DefaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Header />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
