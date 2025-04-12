import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  width: 100%;
  height: auto;
  min-height: 80px;
  background-color: rgb(0, 0, 0);
  display: flex;
  flex-wrap: wrap; /* Permite quebra de linha em telas pequenas */
  justify-content: space-between;
  align-items: center;
  padding: 15px 5%;

  @media (max-width: 768px) {
    padding: 15px 3%;
    gap: 20px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: clamp(100px, 15vw, 200px); /* Tamanho responsivo */
  min-width: 100px; /* Largura mínima */

  @media (max-width: 768px) {
    width: 120px;
    justify-content: center;
    padding-left: 0;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: auto;
  max-width: 180px;
  transition: transform 0.3s ease;

  @media (max-width: 480px) {
    max-width: 140px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: clamp(20px, 3vw, 50px); /* Espaçamento responsivo */

  @media (max-width: 1024px) {
    gap: 30px;
    margin-right: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px 30px; /* Linha/coluna */
  }

  @media (max-width: 480px) {
    gap: 10px 20px;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #ffd100; /* Cor dourada para contraste no preto */
  font-weight: bold;
  font-size: clamp(16px, 2vw, 30px); /* Tamanho responsivo */
  position: relative;
  padding: 0.5rem;
  transition: all 0.3s ease;
  white-space: nowrap; /* Evita quebra de texto */

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: #ffd100;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 0.3rem;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;