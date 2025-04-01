import { createGlobalStyle } from "styled-components";

// Define estilos globais unificados
const GlobalStyles = createGlobalStyle`
  /* Importação das fontes */
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

  /* Estilo geral */
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
    scroll-behavior: smooth;

    /* Respeitar preferências do usuário para animações */
    @media (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }
  }

  body {
    font-family: "Roboto", sans-serif; /* Fonte padrão */
    font-size: 1.4rem; /* Tamanho padrão do texto */
    background: black;
    color: #ffd100;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  /* Define altura total para os elementos principais */
  html,
  body,
  #root {
    height: 100%;
  }
`;

export default GlobalStyles;
