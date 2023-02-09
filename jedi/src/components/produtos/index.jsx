import { Itens, Title } from "./styles"

const Produtos = ({tituloDaSecao, itens}) => {
    return (
        <>
            <Title>{tituloDaSecao}</Title>
            <Itens>
                {itens}
            </Itens>
        </>
    )
}

export default Produtos