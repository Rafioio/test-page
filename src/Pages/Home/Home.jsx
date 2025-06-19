import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'leaflet/dist/leaflet.css';
import { Container} from "./Styles";
import abobora from "../../Assets/ImagensCarrossel/abobora.jpg";
import milho from "../../Assets/ImagensCarrossel/milho.jpg";
import quiabo from "../../Assets/ImagensCarrossel/quiabo.webp";
import vo from "../../Assets/Images/vo.jpeg";
import tio from "../../Assets/Images/tio.jpg";
import casa from "../../Assets/Images/casa.jpeg";
import fazenda from "../../Assets/Images/fazenda.jpg";
import { Title } from "../../Components/Title/Styles";
import { StyledCarousel } from "../../Components/Carousel/Styles";
import { TextContainer } from "../../Components/TextConteiner/Styles";
import { HomeTexts } from "../../data/HomeTexts";
import BlockPerson from "../../Components/BlockPerson/BlockPerson";
import { Spacer } from "../../Components/Spacer/Spacer";
import { ImageContainer } from "../../Components/ImageContainer/Styles";
import Map from '../../Components/Map/Map';
import { useEffect } from 'react';
// import styled from 'styled-components';
import axios from 'axios';



const Home = () => {
  // const [address, setAddress] = useState(null);
  // const [loadingAddress, setLoadingAddress] = useState(false);

  // Coordenadas fixas da Fazenda Quati
  const fixedCoordinates = {
    lat: -19.026315360742426,
    lng: -43.91017115987215
  };

  // Função para obter o endereço a partir das coordenadas fixas
  const fetchAddress = async () => {
    // setLoadingAddress(true);
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${fixedCoordinates.lat}&lon=${fixedCoordinates.lng}&zoom=18&addressdetails=1`
      );
      
      if (response.data.display_name) {
        // setAddress(response.data.display_name);
      }
    } catch (error) {
      console.error("Erro ao buscar endereço:", error);
    } finally {
      // setLoadingAddress(false);
    }
  };

  // Busca o endereço quando o componente é montado
  useEffect(() => {
    fetchAddress();
  }, []);

  return (
    <Container>
      <Spacer height="6rem" />
      <Title>Fazenda Quati</Title>
      <Spacer height="7rem" />
      <BlockPerson
        texto={HomeTexts.texto1}
        imagem={vo}
        alt="Adilson Geraldo dos Santos Campelo"
      />
      <Spacer height="2rem" />
      <TextContainer>{HomeTexts.texto12}</TextContainer>
      <Spacer height="10rem" />
      <ImageContainer> 
        <img src={casa} alt={"casa"} loading="lazy" />
      </ImageContainer>
      <Spacer height="10rem" />
      <BlockPerson
        texto={HomeTexts.texto2}
        imagem={tio}
        alt="Julio Cesar Campelo"
        inverter
      />

      <Spacer height="2rem" />
      <TextContainer>{HomeTexts.texto3}</TextContainer>
      <Spacer height="10rem" />
      <StyledCarousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        showStatus={false}
        emulateTouch
      >
        <div>
          <img src={abobora} alt="Abóbora" />
          <p className="legend">Abóbora</p>
        </div>
        <div>
          <img src={quiabo} alt="Quiabo" />
          <p className="legend">Quiabo</p>
        </div>
        <div>
          <img src={milho} alt="Milho" />
          <p className="legend">Milho</p>
        </div>
      </StyledCarousel>
      <Spacer height="2rem" />
      <TextContainer>{HomeTexts.texto3}</TextContainer>
      <Spacer height="2rem" />
      <ImageContainer> 
        <img src={fazenda} alt={"fazenda"} loading="lazy" />
      </ImageContainer>
      <Spacer height="5rem" />
      <TextContainer>

      </TextContainer>
      <Container>
      <Map />
      </Container>
      <Spacer height="10rem" />

      {/* Componente de exibição das coordenadas e endereço */}
      {/* <CoordinatesContainer>
        <div><strong>Localização da Fazenda Quati:</strong></div>
        <div>Latitude: {fixedCoordinates.lat.toFixed(6)}</div>
        <div>Longitude: {fixedCoordinates.lng.toFixed(6)}</div>
        
        {loadingAddress ? (
          <AddressText>Buscando endereço...</AddressText>
        ) : address ? (
          <>
            <div style={{marginTop: '8px'}}><strong>Endereço:</strong></div>
            <AddressText>{address}</AddressText>
          </>
        ) : (
          <AddressText>Endereço não disponível</AddressText>
        )}
      </CoordinatesContainer> */}
    </Container>
  );
};

export default Home;