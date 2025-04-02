import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 131px;
    background-color:rgb(35, 192, 4);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;

    @media (max-width: 768px) {
        height: 100px;
        flex-direction: column;
        align-items: center;
        padding: 10px 0;
    }
`;

export const Logo = styled.img`
    width: 232px;
    height: 160px;
    margin-bottom: 1%;

    @media (max-width: 1024px) {
        width: 200px;
        height: 140px;
    }

    @media (max-width: 768px) {
        width: 180px;
        height: 120px;
    }

    @media (max-width: 480px) {
        width: 150px;
        height: 100px;
    }

    @media (max-width: 320px) {
        width: 120px;
        height: 80px;
    }
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
