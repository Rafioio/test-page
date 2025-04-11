import styled from "styled-components";

export const TextContainer = styled.div`
  flex: 1;
  text-align: justify;
  line-height: 1.6;
  background-color: #fff;
  max-width: 80%;
  color: #000;
  padding: 25px;
  margin: auto; 
  border-radius: 12px;
  text-align: justify;
  font-size: clamp(16px, 2vw, 18px); /* Tamanho de fonte responsivo */
  line-height: 1.6; /* Melhora a legibilidade */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  word-wrap: break-word; /* Evita overflow de texto */

  @media (max-width: 480px) {
    width: 92%;
    padding: 15px;
    border-radius: 8px;
    text-align: left; /* Justificado pode ficar ruim em telas pequenas */
    hyphens: auto; /* Hifenização automática */
  }
`;