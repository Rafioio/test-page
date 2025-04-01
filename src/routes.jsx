import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements, // Corrigido
    Route,
} from "react-router-dom";

import Home from "./Pages/Home/Home"; // Corrigido
import Perfil from "./Pages/Perfil/Perfil";
import Usuarios from "./Pages/Usuarios/Usuarios";
import Login from "./Pages/Login/Login";
import Cadastro from "./Pages/Cadastro/Cadastro";
import { AppLayout } from "./layouts";

const router = createBrowserRouter(
    createRoutesFromElements( // Corrigido
        <Route>
            <Route path="/" element={<AppLayout/>}>
                <Route index path="/" element={<Home />} />
                <Route path="perfil" element={<Perfil/>} />
                <Route path="usuarios" element={<Usuarios/>} />
                <Route path="login" element={<Login />} />
                <Route path="cadastro" element={<Cadastro />} />
            </Route>
        </Route>
    )
);

export default function Routes() {
    return <RouterProvider router={router} />;
}
