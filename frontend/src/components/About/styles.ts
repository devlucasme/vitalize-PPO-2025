import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 50vh;
`

export const Container = styled.div`
    border: 1px solid ${props => props.theme.colors.text};
    border-radius: 5px;
    max-width: 70%;
    width: 50%;
    height: 300px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

export const Title = styled.h2`
    margin: 20px 10px;
    text-transform: uppercase;
`

export const Text = styled.p`
    margin: 20px 10px;
    font-size: 18px;

    strong {
        color: ${props => props.theme.colors.primary};
    }
`

export const SubTitle = styled(Title)``

