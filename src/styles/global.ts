import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['gold-500']};
  }

  body {
    background-color: #fff;
    color: #000;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Cabin, sans-serif;
  }
`

