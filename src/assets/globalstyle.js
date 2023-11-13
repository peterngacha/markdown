import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle `
  * {
    box-sizing: border-box;
  }

  .markdown {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
  }

  h1 {
    color: #333;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  textarea {
    width: 100%;
    height: 50vh;
    padding: 1rem;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
    resize: none;
  }

  #preview {
    width: 100%;
    height: 50vh;
    padding: 1rem;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    overflow-y: scroll;
  }
`;

export default GlobalStyles;
