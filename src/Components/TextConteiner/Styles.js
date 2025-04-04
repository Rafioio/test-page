import styled from "styled-components";

export const TextContainer = styled.div`
  width: 70%;
  background-color: #fff;
  color: #000;
  padding: 20px;
  margin-top: 2%;
  border-radius: 10px;
  text-align: justify;
  font-size: 18px;
  margin-bottom: 2%;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;