import styled from "styled-components";
import { Carousel } from "react-responsive-carousel"; 

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