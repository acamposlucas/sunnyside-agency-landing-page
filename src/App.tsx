import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <h1>Hello World</h1>
    </ThemeProvider>
  );
}

export default App;
