import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container} from "./Styles";
import abobora from "../../Assets/ImagensCarrossel/abobora.jpg"
import milho from "../../Assets/ImagensCarrossel/milho.jpg"
import quiabo from "../../Assets/ImagensCarrossel/quiabo.webp"
import vo from "../../Assets/Images/vo.jpeg"
import { Title } from "../../Components/Title/Styles";
import { StyledCarousel } from "../../Components/Carousel/Styles";
import { ImageContainer } from "../../Components/ImageContainer/Styles";
import { FlexRowContainer } from "../../Components/FlexRowContainer/Stiles";
import { TextContainer } from "../../Components/TextConteiner/Styles";

const Home = () => {
  return (
    <Container>
      <Title>Fazenda Quati</Title>
      <FlexRowContainer>
        <TextContainer>
          olá
        </TextContainer>
        <ImageContainer>
  <img 
    src={vo} 
    alt="Adilson Geraldo dos Santos Campelo" 
    loading="lazy" // Carregamento otimizado
  />
</ImageContainer>
      </FlexRowContainer>
      <TextContainer>
      
      A Fazenda Quati é o reflexo do trabalho árduo e da visão de futuro de quem sempre acreditou no potencial da terra. Sua história começou com Adilson Geraldo dos Santos Campelo, que iniciou sua jornada como carvoeiro. No início, parte do terreno foi herdada e outra parte adquirida por Adilson, que, com muito esforço, expandiu suas terras e viu uma oportunidade além da produção de carvão.

Com o tempo, ele investiu na pecuária, transformando a fazenda em um espaço produtivo e próspero. O crescimento foi resultado de anos de dedicação e aprimoramento, tornando a Fazenda Quati uma referência no setor agropecuário.

Hoje, sob a administração de Júlio César Campelo, a fazenda mantém suas atividades no agro e sobrevive também por meio do arrendamento de terras. A Fazenda Quati é mais do que um pedaço de terra; é o legado de uma família que soube transformar desafios em oportunidades, garantindo sua continuidade no campo.

      </TextContainer>
      
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
