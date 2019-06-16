import { createGlobalStyle } from "styled-components";
import media from "./breakPoints";

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

    #app{
        overflow-x: hidden;
    }

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    button {
        cursor: pointer;
        &:focus{
            outline: none;
        }
        &:disabled{
            cursor: default;

        }
    }

    a, a:visited{
        color: inherit;
        text-decoration: none;
    };

    .gridTwoColumns{
        display: grid;
        padding: 0 8rem;
        grid-gap: 0 8rem;

        & > * {
            ${media.medium_2`
                grid-column: 1/3 !important;
            `}
        }

        ${media.big`
        padding: 0 4rem;
        grid-gap: 0 4rem;
        `}
    }
`;
