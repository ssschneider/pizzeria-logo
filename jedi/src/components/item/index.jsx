import { Description, Info, Name, Price, Wrapper } from "./styles"

const Item = ({nome, descricao, preco}) => {
    return (
        <Wrapper>
            <Info>
                <Name>{nome}</Name>

                <Description>
                    {descricao}
                </Description>
            </Info>

            <Price>{preco}</Price>
        </Wrapper>
    )
}

export default Item