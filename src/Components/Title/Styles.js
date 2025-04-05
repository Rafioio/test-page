import styled, { keyframes } from "styled-components";

// Efeitos de animação
const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const subtlePulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  /* Tamanho generoso e espaçamento */
  font-size: clamp(3rem, 8vw, 5rem); /* Cresce com a tela */
  margin: 2rem 0 1.5rem; /* Espaço superior aumentado */
  padding: 1rem 0;
  
  /* Fonte premium */
  font-family: 'Poppins', sans-serif; /* Fonte moderna */
  font-weight: 700;
  letter-spacing: 0.1rem;
  line-height: 1.1;
  text-transform: uppercase;
  
  /* Efeito visual avançado */
  color: transparent;
  background: linear-gradient(
    135deg,
    #237d69 0%,
    #34c297 50%,
    #237d69 100%
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${gradientFlow} 8s ease infinite, 
             ${subtlePulse} 3s ease-in-out infinite;
  
  /* Detalhe decorativo */
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 60%;
    height: 4px;
    background: linear-gradient(90deg, #237d69, #34c297);
    margin: 1rem auto 0;
    border-radius: 2px;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 6vw, 4rem);
    margin: 1.5rem 0 1rem;
  }
`;