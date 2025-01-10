import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }

    body {
        background-color: #E6F4F1
        ;
    }

    body, button, input {
        font-family: Georgia, 'Times New Roman', Times, serif;
    }

    button{
        cursor: pointer;
        transition: filter 0.3s;

        &:hover {
            filter: brightness(1.2);
            transition: filter 0.3s;
        }
    }
`;