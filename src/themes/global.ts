import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['gray-500']}
  }
  body {
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    transition: all 0.50s linear;
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
