import React from "react";
import { HeaderContainer,LogoContainer, Logo, Nav, NavLink } from "./Styles";
import logo from "../../Assets/Logo/logo.svg";

export default function Header({ showNav }) {
  return (
    <HeaderContainer>
      <LogoContainer>
              <Logo src={logo} alt="Logo" />
      </LogoContainer>
      {showNav && (
        <Nav>
        </Nav>
      )}
    </HeaderContainer>
  );
}
