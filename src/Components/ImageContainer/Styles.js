import styled from "styled-components";

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 1300px;
  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    object-fit: cover;
  }
  @media (max-width: 700px) {
    width: 100%;
    height: auto;
    hyphens: auto; 
  }
`;