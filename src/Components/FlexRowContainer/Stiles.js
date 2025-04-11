import styled from "styled-components";

export const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row; /* PC: lado a lado */
  gap: 2rem;
  padding: 20px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 700px) {
    flex-direction: column; 
    gap: 1rem;
    max-width: 100%;
    padding: 15px;
    border-radius: 8px;
    text-align: left;
    hyphens: auto;
  }
`;
