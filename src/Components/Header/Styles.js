import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 11%; /* Define um tamanho fixo */
    padding-left: 2%;
`;

export const HeaderContainer = styled.header`
    width: 100%;
    height: 135px;
    background-color:rgb(0, 0, 0);
    display: flex;
    justify-content: space-between;
    align-items: center;
   
`;

export const Logo = styled.img`
    width: 90%;
    height: 90%;
    margin-left: 2%;
`;

export const Nav = styled.nav`
    margin-right: 12%;
    display: flex;  
    gap: 50px;

    @media (max-width: 1024px) {
        gap: 30px;
        margin-right: 5%;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
`;

export const NavLink = styled(Link)`   
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 30px;
    line-height: 36.31px;
    position: relative;
    padding: 0.5rem;

    &:hover {
        color: #0056b3;
    }

    @media (max-width: 768px) {
        font-size: 24px;
    }

    @media (max-width: 480px) {
        font-size: 20px;
    }
`;
