import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    --f-family: 'Poppins', sans-serif;
    --f-color: #111;
    --accent-color: #20A68E;
    --accent-color-light: #20b89e;
    --accent-color-bg: #1B3837;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: var(--f-family);
    color: var(--f-color);
  }

  #app {
    height: 100%;
  }


  img, a {
    display: inline-block;
  }

  button, a {
    font-family: inherit;
    font-size: inherit;
  }s

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }


  a:focus, button:focus, input:focus {
    outline: none;
  } 

  a:focus-visible, button:focus-visible, input:focus-visible {
    outline-offset: 3px;
    outline-style: dashed;
    outline-color: var(--f-color);
    outline-width: 1px;
  } 

`;

export default GlobalStyles;
