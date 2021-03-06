import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto" , sans-serif;
  }
  
  
  a {
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
  
  body {
    overflow-x: hidden;
    background: #232324;
    scroll-behavior: smooth;
  }
`;

export default GlobalStyle;
