import styled from "styled-components";

export const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2rem;
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
