import styled from "styled-components";
import { Carousel } from "react-responsive-carousel"; 

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

export const StyledCarousel = styled(Carousel)`
  width: 90%;
  max-width: 800px;
  height: auto;
  border-radius: 10px;

  .carousel .slide img {
    object-fit: cover;
    width: 100%;
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
