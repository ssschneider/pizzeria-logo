import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    max-width: 80%;
    margin: 5.4rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Btn = styled.button`
    background-color: var(--orange);
    font-size: 3.2rem;
    padding: 2.4rem 4.8rem;
    border-radius: 0.8rem;
    transition: var(--transition);
    color: var(--black);
    margin: 0 auto 7.8rem;
    cursor: pointer;

    &:hover{
        scale: var(--scale);
    }
`

export const TinyBanner = styled.img`
    width: 98vw;
    margin: 0 auto;
`