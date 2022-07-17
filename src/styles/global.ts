import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    font-size: ${(props) => props.theme.fontSize.base};
    font-family: ${(props) => props.theme.fontFamily.primary};  }
    overflow-x: hidden;
`;
