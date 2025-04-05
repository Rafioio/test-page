import styled from "styled-components";

export const TextContainer = styled.div`
  width: 90%; /* Largura maior para melhor leitura */
  max-width: 1000px; /* Limite máximo para telas grandes */
  background-color: #fff;
  color: #000;
  padding: 25px;
  margin: 2% auto; /* Centraliza o container */
  border-radius: 12px;
  text-align: justify;
  font-size: clamp(16px, 2vw, 18px); /* Tamanho de fonte responsivo */
  line-height: 1.6; /* Melhora a legibilidade */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  word-wrap: break-word; /* Evita overflow de texto */

  /* Tablet */
  @media (max-width: 768px) {
    width: 85%;
    padding: 20px;
    line-height: 1.5;
  }

  /* Celular */
  @media (max-width: 480px) {
    width: 92%;
    padding: 15px;
    border-radius: 8px;
    text-align: left; /* Justificado pode ficar ruim em telas pequenas */
    hyphens: auto; /* Hifenização automática */
  }

  /* Telas muito pequenas */
  @media (max-width: 360px) {
    padding: 12px;
    font-size: 15px;
  }
`;