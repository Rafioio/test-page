import styled from "styled-components";

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    object-fit: cover;
  }
`;