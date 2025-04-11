// PessoaBloco/Styles.js
import styled from "styled-components";

export const BlockPersonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  margin: 0 auto;
  background-color: #d89028 ;

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 5px;

  }
`;
