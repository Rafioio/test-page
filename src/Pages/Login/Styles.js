import { BotaoOcultarSenha } from "../../Components/BotaoOcultarSenha/Styles";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  body {
    font-family: 'Roboto', sans-serif; 
  }
`;



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%; 
`;



export const Inputsenha = styled.input`
    position: relative;
    width: 548px;
    height: 49px;
    margin: 2%;
    border-radius: 25px 25px 25px 25px;
`;

export const Inputemail = styled.input`
    width: 548px;
    height: 49px;
    margin: 25px;
    border-radius: 25px 25px 25px 25px;
    
`;
export const Button = styled.button`
    width: 197px;
    height: 57px;
    border-radius: 20px 20px 20px 20px; 
    font-size: 32px;
    font-weight: 600;

    color: black;
    background: #FFE712;
    border: none;
    cursor: pointer;

    &:hover {
        background: #FFE712;
    }
`;

export const LinkText = styled.a`
    width: 331px;
    height: 23px;
    color: #FFE712;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const Title = styled.h1`
    width: 152px;
    height: 58px;
    font-size: 48px;
    font-weight: 600;
    margin: 7%;

`;

export const FooterText = styled.p`
    width: 331px;
    height: 23px;
    top: 586px;
    left: 474px;
    font-size: 14px;
    text-align: center;
    color: #777;
    margin-bottom: 6%;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const BotaoOcultar = styled(BotaoOcultarSenha)`
    position: absolute;
    top: 640px;
    left: 985px;
`;