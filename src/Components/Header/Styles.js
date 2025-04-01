import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 131px;
    background-color: #FFE712;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


export  const Logo = styled.img`
    width: 232px;
    height: 160px;
    gap: 0%;
    margin-bottom: 1%;
`;
export const Nav = styled.nav`
  margin-right: 12%;
  display: flex;  
  gap : 150px;
`;

export const NavLink = styled(Link)`   
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 30px;
  font-weight: 400;
  line-height: 36.31px;
  font-weight: bold;
  position: relative;
  padding: 0.5rem;

  &:hover {
    color: #0056b3;
  }
`;