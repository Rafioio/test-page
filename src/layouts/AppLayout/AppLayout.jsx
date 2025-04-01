import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Container } from "./Styles";
import Header from "../../Components/Header/Header";

export default function AppLayout() {
  const location = useLocation();

  // Páginas que devem mostrar o menu de navegação
  const pagesWithNav = ["/", "/perfil", "/usuarios"];
  const showNav = pagesWithNav.includes(location.pathname);

  return (
    <Container>
      <Header showNav={showNav} />
      <Outlet />
    </Container>
  );
}