import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 100%; // Ocupa a largura do elemento pai
  max-width: 800px; // Largura máxima (ajuste conforme necessário)
  margin: 0 auto; // Centraliza horizontalmente
  padding: 8px;
  border-radius: 8px; // Bordas arredondadas
  background-color: #f5f5f5; // Cor de fundo opcional
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Sombra sutil

  /* Estilo da imagem dentro do container */
  img {
    width: 100%;
    height: auto; // Mantém a proporção original
    border-radius: 4px; // Bordas arredondadas na imagem
    display: block; // Remove espaços indesejados abaixo da imagem
    object-fit: contain; // Garante que a imagem inteira seja visível
  }

  /* Responsividade */
  @media (max-width: 600px) {
    max-width: 100%;
    padding: 4px;
  }
`;