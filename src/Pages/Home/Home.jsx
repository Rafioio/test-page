import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container, StyledCarousel} from "./Styles";
import ImagemTartaruga from "../../Assets/ImagensCarrossel/Minecraft.jpg"
import ImagemSherek from "../../Assets/ImagensCarrossel/Sherek.jpeg"
import ImagemDog from "../../Assets/ImagensCarrossel/Dog.jpg"
import { useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <StyledCarousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        showStatus={false}
        emulateTouch
      >
        <div>
          <img
            src={ImagemTartaruga}
            
          />
          <p className="legend">Minecraft</p>
        </div>
        <div>
          <img
            src={ImagemSherek}
            
          />
          <p className="legend">Sherek</p>
        </div>
        <div>
          <img
            src={ImagemDog}
            alt="Slide 3"
          />
          <p className="legend">Dog</p>
        </div>
      </StyledCarousel>
      
    </Container>
  );
};

export default Home;
