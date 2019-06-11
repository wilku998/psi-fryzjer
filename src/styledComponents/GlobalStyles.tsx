import { createGlobalStyle } from "styled-components";
import media from './breakPoints';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    ul, ol {
        list-style: none;
    }

    h1, h2, h3, h4, h5 {
        margin: 0;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
        ${media.medium`
            font-size: 50%;
        `}
    }

    body {
        font-family: 'Open Sans', sans-serif;
        font-size: 1.6rem;
        line-height: 1.6;
        position: relative;
        padding: 10px;
        background-color: #52B87E;

        ${media.small`
            padding: 0;
        `}
    }

    button {
        cursor: pointer;
    }

    button:disabled {
        cursor: default;
    }

    a, a:visited{
        color: inherit;
        text-decoration: none;
    };
`;
