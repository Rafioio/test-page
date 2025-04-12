import styled from "styled-components";
export const Title = styled.div` 
  
  font-family: 'Georgia', serif;
  font-size: 10rem;
  color: #237d69; /* Verde musgo */
  text-align: center;
  margin-top: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  letter-spacing: 2px;


/* Responsivo para telas pequenas */
@media (max-width: 480px) {
    font-size: 6rem;
    margin-top: -30px;
  }
`;
