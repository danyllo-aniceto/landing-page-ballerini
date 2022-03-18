import styled from "styled-components";

export const Main = styled.main`
    margin-bottom: 48px;
    border-top: 0.4px solid #FFF2E7;
`
export const Section1 = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 700px) {
        flex-direction: column;
        margin-top: 30px;
    }
`
export const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (max-width: 700px) {
        justify-content: center;
        align-items: center;
    }    
`
export const H1 = styled.h1`
    font-family: Righteous;
    font-weight: 400;
    font-size: 64px;
    color: #FFF2E7;

    @media (max-width: 700) {
        font-weight: 200;
    }
`
export const H2 = styled.h2`
    font-family: 'Sarala';
    font-weight: 400;
    font-size: 24px;
    color: #ECD6C4;
`
export const Button = styled.button`
    background-color: #ECD6C4;
    width: 180px;
    height: 60px;
    border: none;
    box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    color: #2F2325;
    font-family: 'Sarala';
    font-weight: 400;
    font-size: 24px;
    :hover{
        background-color: rgba(236, 214, 196, 0.36);
    }
`

export const Image = styled.img`
    height: 430px;
`
export const Section2 = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-top: 48px;
`
export const H3 = styled.h3`
    border-top: 0.4px solid #FFF2E7;
    padding-top: 48px;
    font-family: 'Righteous';
    font-weight: 400;
    font-size: 24px;
    color: #FFF2E7;
    margin-bottom: 16px;
`
export const P = styled.p`
    font-family: 'Sarala';
    font-weight: 300;
    font-size: 18px;
    color: #ECD6C4;
`