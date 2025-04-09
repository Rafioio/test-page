import styled from "styled-components";

export const FlexRowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  align-items: start;
  gap: 2rem;
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const TextContainer = styled.div`
  grid-column: 1 / -1;  /* Ocupa todas as colunas por padrão */
  display: grid;
  grid-template-columns: subgrid;  /* Herda o grid do container pai */
  align-items: start;

  /* Quando tem uma imagem como irmão adjacente */
  @media (min-width: 992px) {
    img ~ & {
      grid-column: 2 / -1;  /* Começa depois da imagem */
      display: block;  /* Muda para fluxo normal de texto */
      
      /* Formatação de texto que permite fluir */
      text-align: justify;
      hyphens: auto;
      overflow-wrap: break-word;
    }

    /* Se a imagem for pequena, permite que o texto ocupe espaço vertical extra */
    img[height="small"] ~ & {
      margin-top: -100px;  /* Ajuste conforme necessário */
      padding-top: 100px;
    }
  }

  /* Estilos base do texto */
  p {
    margin-bottom: 1em;
    line-height: 1.6;
    
    @media (min-width: 992px) {
      &:first-child {
        margin-top: 0;
      }
    }
  }
`;