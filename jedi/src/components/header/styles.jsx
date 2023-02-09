import styled from "styled-components";

export const Wrapper = styled.header`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    padding: 3.2rem 6.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
` 

export const Logo = styled.img`
    max-width: 29rem;
    transition: var(--transition);
    scale: var(--scale);
`

export const Menu = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2.4rem;
`

export const NavBtn = styled.button`
    font-size: 3.2rem;
    border: none;
    outline: none;
    background-color: transparent;
    transition: var(--transition);

    &:hover{
        scale: var(--scale);
        color: var(--orange);
        cursor: pointer;
    }
`