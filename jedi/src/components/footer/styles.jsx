import styled from "styled-components";
import FooterBg from "../../assets/footer-bg.svg"

export const Wrapper = styled.footer`
    background: url(${FooterBg}) center center no-repeat;
    width: 98vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 23rem;
`

export const Text = styled.p`
    font-size: 3.2rem;
    padding-left: 12rem;
    max-width: 39rem;
`