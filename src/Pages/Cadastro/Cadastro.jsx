import React, { useState } from 'react';
import { message } from 'antd'; 
import { useCreateUser } from "../../Hooks/user";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
    BotaoOcultar,
    StyledForm,
    Container,
    Inputsenha,
    Inputemail,
    InputNome,
    Inputcargo,
    InputRepitaSenha,
    Button,
    LinkText,
    Title,
    FooterText,
} from "./Styles";

export default function Cadastro() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate(); 
    const { handleSubmit, register, formState: { errors },} = useForm();
   

    const loginMutation = useCreateUser({
        onSuccess: (data) => {
            console.log("Usuário criado:", data);
            localStorage.setItem("token", data.token); 
            message.success("Usuário criado com sucesso!");
            navigate("/login"); 
        },
        onError: (error) => {
            console.error("Erro ao criar usuário:", error);
            console.log(message.error);
            message.error(error.message || "Erro ao criar usuário. Tente novamente.");
        },
    });
    
    function onSubmit(data) {
        loginMutation.mutate(data); 
    }

    return (
        <Container>
            <Title>CADASTRO</Title>   
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <Inputemail
                    {...register("email")} 
                    placeholder="Email"
                />
                <Inputsenha
                    {...register("senha")} 
                    placeholder="Senha"
                    type={passwordVisible ? 'text' : 'password'}
                />
                <InputNome
                    {...register("nome")} 
                    placeholder="Nome"
                />
                <Inputcargo
                    {...register("cargo")} 
                    placeholder="Cargo"
                />
                <InputRepitaSenha
                    {...register("status")}         
                    placeholder="Repita a Senha"
                    type={passwordVisible ? 'text' : 'password'}
                    
                />
                <BotaoOcultar
                    onClick={(event) => {
                     event.preventDefault(); // Impede que o clique dispare o envio do formulário
                        setPasswordVisible(!passwordVisible); // Alterna a visibilidade da senha
                 }}
                />

                <FooterText>
                    Já tem uma conta? Faça o seu login {" "}
                    <LinkText onClick={() => navigate("/login")}>
                        aqui.
                    </LinkText>
                </FooterText>
                <Button type="submit">CRIAR CONTA</Button>
            </StyledForm>
        </Container>
    );
}
