import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

export const StyledCarousel = styled(Carousel)`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 10px;

  /* Imagens responsivas */
  .carousel .slide img {
    width: 100%;
    height: 50vh; /* Baseado na altura da tela */
    min-height: 250px; /* Altura mínima */
    max-height: 500px; /* Altura máxima */
    object-fit: cover;
    
    /* Tablet */
    @media (max-width: 768px) {
      height: 40vh;
      min-height: 200px;
    }
    
    /* Celular */
    @media (max-width: 480px) {
      height: 30vh;
      min-height: 150px;
    }
  }

  /* Controles */
  .carousel .control-arrow {
    @media (max-width: 480px) {
      width: 30px;
      height: 30px;
    }
  }

  /* Indicadores */
  .carousel .control-dots .dot {
    @media (max-width: 480px) {
      width: 10px;
      height: 10px;
      margin: 0 4px;
    }
  }
`;