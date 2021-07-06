import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  body {
    font-family: "Roboto", sans-serif;
  }
`;

export default GlobalStyle;
