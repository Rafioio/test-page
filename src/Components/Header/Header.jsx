import React from "react";
import { HeaderContainer, Logo, Nav, NavLink } from "./Styles";
import logo from "../../Assets/Logo/logo.svg";

export default function Header({ showNav }) {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      {showNav && (
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/perfil">Perfil</NavLink>
          <NavLink to="/usuarios">Usuários</NavLink>
        </Nav>
      )}
    </HeaderContainer>
  );
}
