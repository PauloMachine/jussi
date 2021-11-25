import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  :root {
    --green: #03FFA5;
    --pink: #EE0E7D;
    --black: #000000;
    --grey: #F2F2F2;
    --dark-grey: #5B5B5B;
    --white: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%
    }

    @media (max-width: 720px) {
      font-size: 87.5%
    }

    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothin: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Barlow', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  #modal {
    background-color: var(--white) !important;
    margin-left: 20%;
    inset: 0 !important;
  }
`