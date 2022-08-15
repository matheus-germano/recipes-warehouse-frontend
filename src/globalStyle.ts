import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-yellow-orange: #FE9920;
    --secondary-yellow-orange: #FEAC48;
    --primary-pumpkin: #FA7921;
    --secondary-pumpkin: #FB924B;
    --black-olive: #363732;
    --text: #333;
    --white: #FFF;
    --black: #000;
    --muted: #999;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: var(--text);
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;