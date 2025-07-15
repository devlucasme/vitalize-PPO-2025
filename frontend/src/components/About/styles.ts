import styled from "styled-components";
import { shade } from "polished";

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30vh;
    background: ${props => shade(0.04, props.theme.colors.background)};
    border-top: 1px solid ${({ theme }) => theme.colors.text}33;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 70%;
    width: 50%;
    height: 100%;
`

export const Title = styled.h2`
    color: #7c7b7b;
    font-size: 18px;
`

export const Text = styled.p`
    color:rgb(134, 132, 132);
    font-size: 15px;
`