import styled from "styled-components";

export const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row; /* Padrão, mas explícito para clareza */
  justify-content: flex-start; /* Alinha os itens no início (esquerda) */
  align-items: center; /* Centraliza verticalmente */
  gap: 2%; /* Espaço entre os itens */
  padding: 20px;
  width: 70%; /* Garante que o container ocupe toda a largura */
  flex-wrap: nowrap; /* Impede que os itens quebrem para outra linha */
`;