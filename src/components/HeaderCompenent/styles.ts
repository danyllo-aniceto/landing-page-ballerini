import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 17px;

    @media (max-width: 700px) {
        flex-direction: column;
        gap: 20px;
    }
`

export const Image = styled.img`
    width: 62px !important;
    height: 62px !important;
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 32px;

    @media (max-width: 400px) {
        flex-direction: column;
    }
`
export const Link = styled.a`
    color: #FFF2E7;
    font-family: "Sarala", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
`

