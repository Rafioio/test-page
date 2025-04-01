import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { message } from 'antd'; 
import { useLoginUsers } from '../../Hooks/login';
import {
    StyledForm,
    Container,
    Inputsenha,
    Inputemail,
    Button,
    LinkText,
    Title,
    FooterText,
    BotaoOcultar,
} from "./Styles"; 

export default function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const { handleSubmit, register, formState: { errors } } = useForm();

  
    const loginMutation = useLoginUsers({
        onSuccess: (data) => {  
            console.log("Login bem-sucedido:", data);
            localStorage.setItem("token", data.token); 
            message.success("Login realizado com sucesso!");
            navigate("/"); 
        },
        onError: (error) => {
            console.error("Erro ao logar:", error);
            message.error(error.response?.data?.message || "Erro ao logar. Tente novamente.");
        },
    });

    function onSubmit(data) {
        loginMutation.mutate(data); 
    }

    return (
        <Container>
            <Title>LOGIN</Title>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                {/* Campo de email */}
                <Inputemail
                    {...register("email", { required: "O email é obrigatório." })}
                    placeholder="Email"
                />
                {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}

                {/* Campo de senha */}
                <Inputsenha
                    {...register("senha", { required: "A senha é obrigatória." })}
                    placeholder="Senha"
                    type={passwordVisible ? 'text' : 'password'}
                />
                {errors.senha && <span style={{ color: "red" }}>{errors.senha.message}</span>}

                {/* Botão para alternar visibilidade da senha */}
                <BotaoOcultar
                    type="button"
                    onClick={(event) => {
                        event.preventDefault();
                        setPasswordVisible(!passwordVisible); // Alterna a visibilidade da senha
                    }}
                >
                </BotaoOcultar>

                {/* Link para página de cadastro */}
                <FooterText>
                    Não tem um login? Faça o seu{" "}
                    <LinkText onClick={() => navigate("/cadastro")}>
                        aqui.
                    </LinkText>
                </FooterText>

                {/* Botão para enviar o formulário */}
                <Button type="submit">ENTRAR</Button>
            </StyledForm>
        </Container>
    );
}
