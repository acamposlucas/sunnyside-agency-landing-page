import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-size: 1.125rem;
    font-family: "Barlow", sans-serif;
    overflow-x: hidden;
  }
`;
