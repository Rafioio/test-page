import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container, StyledCarousel, TextContainer} from "./Styles";
import abobora from "../../Assets/ImagensCarrossel/abobora.jpg"
import milho from "../../Assets/ImagensCarrossel/milho.jpg"
import quiabo from "../../Assets/ImagensCarrossel/quiabo.webp"
import { Titulo } from "../../Components/Titulo/Styles";
import { useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Titulo>Fazenda Quati</Titulo>
      <TextContainer>
      
Família é mais do que laços de sangue; é a essência do amor, do cuidado e da conexão que nos fortalece ao longo da vida. É onde encontramos abrigo nos dias difíceis e alegria nos momentos felizes.

Na família, aprendemos nossas primeiras palavras, damos nossos primeiros passos e descobrimos o verdadeiro significado da cumplicidade. Não importa se é pequena ou grande, se é de laços biológicos ou de afinidades escolhidas—família é aquele lugar onde podemos ser nós mesmos, sem medo de julgamentos.

Os abraços de uma mãe, os conselhos de um pai, as brincadeiras entre irmãos, os ensinamentos dos avós... São esses momentos que constroem nossa essência e deixam marcas eternas em nossa história.

Nem sempre é perfeita, nem sempre é fácil, mas a família é o porto seguro que nos lembra que, independentemente dos desafios da vida, nunca estamos sozinhos. No fim do dia, é o amor que nos mantém unidos, superando qualquer distância, desentendimento ou tempo.

Família é lar, é raiz, é afeto. E o maior presente que podemos dar uns aos outros é cultivar esse amor todos os dias.

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
