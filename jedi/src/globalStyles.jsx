import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --black: #030303;
        --white: #f1f1f1;
        --orange: #ED834E;
        --transition: 0.5s linear;
        --scale: 1.1;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font: 400 62.5% 'Italiana', serif;
        color: var(--white);
        transition: var(--transition);
        text-decoration: none;
        list-style: none;
    }

    *::selection {
        background-color: var(--orange);
        color: var(--black);
    }

    body {
        background: var(--black);
    }
`

export default GlobalStyles