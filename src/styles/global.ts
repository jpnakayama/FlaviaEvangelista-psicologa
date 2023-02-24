import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-700']};
  }

  body {
    background-color: ${(props) => props.theme['bg-primary-color']};
    color: #000;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Barlow, sans-serif;
  }
`

export const GetInTouchButton = styled.button`
  margin-top: 2rem;
  padding: 1rem 3rem;
  border: none;
  border-radius: 6px;

  background: ${props => props.theme["bg-secondary-color"]};
  color: #FFF;

  width: fit-content;
  cursor: pointer;

  :hover {
    transform: scale(1.05);
    transition: 0.3s;
  }
`