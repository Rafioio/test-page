import styled from "styled-components";


export const TabelaContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 14%;
    width: 100%;

    table {
        width: 80%;
        border-collapse: collapse;
        text-align: center;
        font-size: 18px;
        font-family: "Roboto", sans-serif;
        font-size: 25px;
        font-weight: 600;
        line-height: 29.3px;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: white;
        justify-content: center
    }

    th, td {
        
        padding: 8px;
    }

    th {
        color: white;
        font-family: "Roboto", sans-serif;
        font-size: 38px;
        font-weight: 600;
        line-height: 44.53px;
        text-underline-position: from-font;

    }


`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    width: 100%; 
    padding: 20px;
`;
