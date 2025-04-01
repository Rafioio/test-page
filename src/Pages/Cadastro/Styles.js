import { BotaoOcultarSenha } from "../../Components/BotaoOcultarSenha/Styles";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  body {
    font-family: 'Roboto', sans-serif; 
  }
`;
export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    width: 567px;
    height: 49px;
    position: absolute;
    top: 522px;
    left: 495px;
    gap: 0px;
    border-radius: 25px 25px 25px 25px;
    opacity: 0px;
    font-family: "Roboto" , sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.09px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;


`;
export const Inputemail = styled.input`
    width: 567px;
    height: 50px;
    position: absolute;
    top: 373px;
    left: 495px;
    gap: 0px;
    border-radius: 25px 25px 25px 25px;
    opacity: 0px;
    font-family: "Roboto" , sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.09px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;


`;
export const InputRepitaSenha = styled.input`
    width: 567px;
    height: 50px;
    position: absolute;
    top: 600px;
    left: 495px;
    gap: 0px;
    border-radius: 25px 25px 25px 25px;
    opacity: 0px;
    font-family: "Roboto" , sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.09px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;


`;
export const InputNome = styled.input`
    width: 567px;
    height: 49px;
    position: absolute;
    top: 297px;
    left: 495px;
    gap: 0px;
    border-radius: 25px 25px 25px 25px;
    opacity: 0px;
    font-family: "Roboto" , sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.09px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;


`;
export const Inputcargo = styled.input`
    width: 567px;
    height: 50px;
    position: absolute;
    top: 449px;
    left: 495px;
    gap: 0px;
    border-radius: 25px 25px 25px 25px;
    opacity: 0px;
    font-family: "Roboto" , sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.09px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;


`;
export const Button = styled.button`
    width: 251px;
    height: 57px;
    border-radius: 20px 20px 20px 20px;
    opacity: 0px;
    font-family: 'Roboto', sans-serif; 
    font-size: 32px;
    font-weight: 600;
    line-height: 37.5px;
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
    opacity: 0px;
    color: #FFE712;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;
export const Title = styled.h1`
    width: 250px;
    height: 60px;
    font-family:'Roboto', sans-serif; 
    font-size: 48px;
    font-weight: 600;
    line-height: 56.25px;
    margin-bottom: 27%;
`;
export const FooterText = styled.p`
    width: 331px;
    height: 23px;
    font-size: 14px;
    text-align: center;
    color: #777;
    margin-bottom: 4%;
`;
export const BotaoOcultar = styled(BotaoOcultarSenha)`
    position: absolute;
    top: 547px;
    left: 990px;
`;