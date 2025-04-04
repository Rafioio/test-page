import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: auto; /* Altura flexível */
  min-height: 150px; /* Altura mínima */
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 20px; /* Espaçamento interno maior */

  /* Responsividade para tablets */
  @media (max-width: 768px) {
    min-height: 120px;
    padding: 20px 15px;
  }

  /* Responsividade para celulares */
  @media (max-width: 480px) {
    min-height: 100px;
    padding: 15px 10px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Logo = styled.img`
  width: clamp(80px, 15vw, 180px); /* Tamanho flexível (mínimo 80px, máximo 180px) */
  height: auto;
  transition: transform 0.3s ease;

  /* Ajustes para telas pequenas */
  @media (max-width: 480px) {
    width: clamp(60px, 12vw, 100px);
  }
`;