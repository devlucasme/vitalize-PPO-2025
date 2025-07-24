import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

`