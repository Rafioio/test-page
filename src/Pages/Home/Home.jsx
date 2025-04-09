import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container} from "./Styles";
import abobora from "../../Assets/ImagensCarrossel/abobora.jpg"
import milho from "../../Assets/ImagensCarrossel/milho.jpg"
import quiabo from "../../Assets/ImagensCarrossel/quiabo.webp"
import vo from "../../Assets/Images/vo.jpeg"
import tio from "../../Assets/Images/tio.jpg"
import { Title } from "../../Components/Title/Styles";
import { StyledCarousel } from "../../Components/Carousel/Styles";
import { ImageContainer } from "../../Components/ImageContainer/Styles";
import { FlexRowContainer } from "../../Components/FlexRowContainer/Stiles";
import { TextContainer } from "../../Components/TextConteiner/Styles";
import { HomeTexts } from "../../data/HomeTexts";

const Home = () => {
  return (
    <Container>
      <Title>Fazenda Quati</Title>
      <FlexRowContainer>
        <TextContainer>
          <p>{HomeTexts.texto1}</p>
          </TextContainer>
        <ImageContainer>
  <img 
    src={vo} 
    alt="Adilson Geraldo dos Santos Campelo" 
    loading="lazy" // Carregamento otimizado
  />
</ImageContainer>
      </FlexRowContainer>
      
      <TextContainer>{HomeTexts.texto12}</TextContainer>

      <FlexRowContainer>
        <ImageContainer>
  <img 
    src={tio} 
    alt="Julio Cesar Campelo" 
    loading="lazy" // Carregamento otimizado
  />
</ImageContainer>
      <TextContainer>{HomeTexts.texto2}</TextContainer>
      </FlexRowContainer>

      
      <TextContainer>{HomeTexts.texto3}</TextContainer>
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
            src={abobora}
            
          />
          <p className="legend">Abobora</p>
        </div>
        <div>
          <img
            src={quiabo}
            
          />
          <p className="legend">Quiabo</p>
        </div>
        <div>
          <img
            src={milho}
            
          />
          <p className="legend">Milho</p>
        </div>
      </StyledCarousel>
    </Container>
  );
};

export default Home;
