import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container, StyledCarousel, TextContainer} from "./Styles";
import ImagemTartaruga from "../../Assets/ImagensCarrossel/Minecraft.jpg"
import ImagemSherek from "../../Assets/ImagensCarrossel/Sherek.jpeg"
import ImagemDog from "../../Assets/ImagensCarrossel/Dog.jpg"
import { Titulo } from "../../Components/Titulo/Styles";
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
      <Titulo>Família: O Abrigo do Coração</Titulo>
      <TextContainer>
      
Família é mais do que laços de sangue; é a essência do amor, do cuidado e da conexão que nos fortalece ao longo da vida. É onde encontramos abrigo nos dias difíceis e alegria nos momentos felizes.

Na família, aprendemos nossas primeiras palavras, damos nossos primeiros passos e descobrimos o verdadeiro significado da cumplicidade. Não importa se é pequena ou grande, se é de laços biológicos ou de afinidades escolhidas—família é aquele lugar onde podemos ser nós mesmos, sem medo de julgamentos.

Os abraços de uma mãe, os conselhos de um pai, as brincadeiras entre irmãos, os ensinamentos dos avós... São esses momentos que constroem nossa essência e deixam marcas eternas em nossa história.

Nem sempre é perfeita, nem sempre é fácil, mas a família é o porto seguro que nos lembra que, independentemente dos desafios da vida, nunca estamos sozinhos. No fim do dia, é o amor que nos mantém unidos, superando qualquer distância, desentendimento ou tempo.

Família é lar, é raiz, é afeto. E o maior presente que podemos dar uns aos outros é cultivar esse amor todos os dias.

      </TextContainer>
    </Container>
  );
};

export default Home;
