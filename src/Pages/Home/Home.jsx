import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from "./Styles";
import abobora from "../../Assets/ImagensCarrossel/abobora.jpg";
import milho from "../../Assets/ImagensCarrossel/milho.jpg";
import quiabo from "../../Assets/ImagensCarrossel/quiabo.webp";
import vo from "../../Assets/Images/vo.jpeg";
import tio from "../../Assets/Images/tio.jpg";
import { Title } from "../../Components/Title/Styles";
import { StyledCarousel } from "../../Components/Carousel/Styles";
import { TextContainer } from "../../Components/TextConteiner/Styles";
import { HomeTexts } from "../../data/HomeTexts";
import BlockPerson from "../../Components/BlockPerson/BlockPerson";
import { Spacer } from "../../Components/Spacer/Spacer";
const Home = () => {
  return (
    <Container>
      <Title>Fazenda Quati</Title>

      <Spacer height="4rem" />

      <BlockPerson
        texto={HomeTexts.texto1}
        imagem={vo}
        alt="Adilson Geraldo dos Santos Campelo"
      />

      <Spacer height="2rem" />

      <TextContainer>{HomeTexts.texto12}</TextContainer>

      <Spacer height="2rem" />

      <BlockPerson
        texto={HomeTexts.texto2}
        imagem={tio}
        alt="Julio Cesar Campelo"
        inverter
      />

      <Spacer height="2rem" />

      <TextContainer>{HomeTexts.texto3}</TextContainer>

      <Spacer height="2rem" />

      <StyledCarousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        showStatus={false}
        emulateTouch
      >
        <div>
          <img src={abobora} />
          <p className="legend">Abóbora</p>
        </div>
        <div>
          <img src={quiabo} />
          <p className="legend">Quiabo</p>
        </div>
        <div>
          <img src={milho} />
          <p className="legend">Milho</p>
        </div>
      </StyledCarousel>

      <Spacer height="2rem" />

    </Container>
  );
};

export default Home;
