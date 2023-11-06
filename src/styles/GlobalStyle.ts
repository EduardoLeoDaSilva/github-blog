import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        font-family: ${props => props.theme.fontFamily};
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 16px;
        color: ${props => props.theme.baseTitle};
    }

    body{
        background-color: ${props => props.theme.baseBackground};
    }
    
    button{
        font-family: ${props => props.theme.fontFamily};
    }

    a{
        text-decoration: none;
        cursor: pointer;
    }
`