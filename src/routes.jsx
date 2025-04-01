import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements, // Corrigido
    Route,
} from "react-router-dom";

import Home from "./Pages/Home/Home"; // Corrigido


import { AppLayout } from "./layouts";

const router = createBrowserRouter(
    createRoutesFromElements( // Corrigido
        <Route>
            <Route path="/" element={<AppLayout/>}>
                <Route index path="/" element={<Home />} />
            </Route>
        </Route>
    )
);

export default function Routes() {
    return <RouterProvider router={router} />;
}
