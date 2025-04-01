import styled from "styled-components";
import { Carousel } from "react-responsive-carousel"; // Importando o Carousel aqui

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 20px;
`;

export const StyledCarousel = styled(Carousel)`
  width: 800px;
  height: 500px;
  border-radius: 10px 10px 10px 10px;

  .carousel .slide img {
    object-fit: cover;
    width: 100%;
  }
`;

export const Botao = styled.div`
  width: 118px;
  height: 61px;
  position: absolute;
  top: 670px;
  left: 1364px;

`; 
