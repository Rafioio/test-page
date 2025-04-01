import styled from "styled-components";
import Olho from "../../Assets/Detalhes/SenhaOlho.jpg"

export const BotaoOcultarSenha = styled.button`
  width: 40px;
  height: 26px;
  transform: translateY(-50%);
  background: url(${Olho}) no-repeat center;
  border: none;
  font-size: 14px;
  color: #007BFF;
  cursor: pointer;
  &:hover {
    color: #0056b3;
  }
`;