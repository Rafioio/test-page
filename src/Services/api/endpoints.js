import api from "./api";
//user
export async function GetUsers() {
    const {data} = await api.get(`/usuarios`);
    console.log(data)
    return data;
}

export async function CreateUsers(body) {
    console.log("cheguei na endpoint", body);
    try {
        const { data } = await api.post("/usuarios", body); // Aguarda a resposta do POST
        console.log(data);
        return data;
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        throw error; // Lança o erro para ser capturado no hook
    }
}

export async function UpdateUsers(id, body) {
    const {data} = await api.put(`/usuarios${id}`, body);
    return data;
}
export async function DeleteUsers(id) {
    const {data} = await api.get(`/usuarios${id}`);
    return data;
}
//entidade2s
export async function LoginUsers(body) {
    console.log("cheguei na endpoint", body);
    try {
        const { data } = await api.post("/login", body); // Aguarda a resposta do POST
        console.log(data);
        return data;
    } catch (error) {
        console.error("Erro ao logar usuário:", error);
        throw error; // Lança o erro para ser capturado no hook
    }
}

export const loginApi = async (data) => {
    const response = await api.post("/sessoes", data);
    return response.data;
};