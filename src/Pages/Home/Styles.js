import styled from "styled-components";
import { Carousel } from "react-responsive-carousel"; 

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  background-color: aliceblue;
`;

export const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row; /* Padrão, mas explícito para clareza */
  justify-content: flex-start; /* Alinha os itens no início (esquerda) */
  align-items: center; /* Centraliza verticalmente */
  gap: 2%; /* Espaço entre os itens */
  padding: 20px;
  width: 70%; /* Garante que o container ocupe toda a largura */
  flex-wrap: nowrap; /* Impede que os itens quebrem para outra linha */
`;
export const StyledCarousel = styled(Carousel)`
  width: 90%;
  max-width: 800px;
  height: auto;
  border-radius: 10px;

  .carousel .slide img {
    width: 100%;
    height: 50vh; /* Altura baseada na tela para manter proporção */
    max-height: 500px; /* Evita que fique exageradamente grande */
    object-fit: cover; /* Garante que a imagem preencha o espaço */
  }
`;

export const TextContainer = styled.div`
  width: 70%;
  background-color: #fff;
  color: #000;
  padding: 20px;
  margin-top: 2%;
  border-radius: 10px;
  text-align: justify;
  font-size: 18px;
  margin-bottom: 2%;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
export const Botao = styled.div`
  width: 118px;
  height: 61px;
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1024px) {
    top: 90%;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 50px;
    top: 95%;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 40px;
    top: 98%;
  }
`;


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