import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.textContent};
    padding: 20px;
  }
  button {
    display: block;
  }
  a {
    color: ${({ theme }) => theme.textContent};
  }
`;
