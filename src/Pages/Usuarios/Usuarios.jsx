import { useForm } from "react-hook-form";
import { Container, TabelaContainer } from "./Styles";
import { Titulo } from "../../Components/Titulo/Styles";
import { useGetUser } from "../../Hooks/user";

export default function Perfil() {
    // Hooks
    const { data: users, isLoading } = useGetUser({});

    return (
        <Container>
            <Titulo>Gerenciar Usuários</Titulo>
            <TabelaContainer>
                {isLoading ? (
                    <p>Carregando...</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Cargo</th>
                                <th>Usuário</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(users) && users.length > 0 ? (
                                users.map((usuario) => (
                                    <tr key={usuario?._id}>
                                        <td>{usuario?.nome || "N/A"}</td>
                                        <td>{usuario?.cargo || "N/A"}</td>
                                        <td> {"N/A"}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3">Nenhum usuário encontrado.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </TabelaContainer>
        </Container>
    );
}
