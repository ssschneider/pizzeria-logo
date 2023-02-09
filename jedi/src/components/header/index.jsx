import { Logo, Menu, NavBtn, Wrapper } from "./styles"
import LogoImage from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()

    return (
        <Wrapper>
            <Logo src={LogoImage} alt="Logo da Empresa"/>
            <Menu>
                <NavBtn onClick={() => navigate("/")}>Home</NavBtn>
                <NavBtn onClick={() => navigate("/cardapio")}>Cardápio</NavBtn>
            </Menu>
        </Wrapper>
    )
}

export default Header