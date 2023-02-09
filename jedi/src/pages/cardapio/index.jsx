import Produtos from "../../components/produtos";
import { Btn, TinyBanner, Wrapper } from "./styles";
import Banner from "../../assets/banner.svg";
import Footer from "../../components/footer";
import Item from "../../components/item";

const pizzasTipos = [
	{
		sabor: "Calabresa",
		descricao:
			"Lorem ipsum dolor sit amet consectetur. Lacus nulla sagittis quis ut sit. Augue molestie ut tempor risus. Volutpat quis massa.",
		valor: "R$30,00",
	},
	{
		sabor: "Pepperoni",
		descricao:
			"Lorem ipsum dolor sit amet consectetur. Lacus nulla sagittis quis ut sit. Augue molestie ut tempor risus. Volutpat quis massa.",
		valor: "R$32,00",
	},
	{
		sabor: "Margherita",
		descricao:
			"Lorem ipsum dolor sit amet consectetur. Lacus nulla sagittis quis ut sit. Augue molestie ut tempor risus. Volutpat quis massa.",
		valor: "R$34,00",
	},
	{
		sabor: "Primavera",
		descricao:
			"Lorem ipsum dolor sit amet consectetur. Lacus nulla sagittis quis ut sit. Augue molestie ut tempor risus. Volutpat quis massa.",
		valor: "R$36,00",
	},
];

const bebidasTipos = [
	{
		sabor: "Refrigerante",
		descricao:
			"Lorem ipsum dolor sit amet consectetur. Lacus nulla sagittis quis ut sit. Augue molestie ut tempor risus. Volutpat quis massa.",
		valor: "R$8,00",
	},
	{
		sabor: "Cervejas",
		descricao:
			"Lorem ipsum dolor sit amet consectetur. Lacus nulla sagittis quis ut sit. Augue molestie ut tempor risus. Volutpat quis massa.",
		valor: "R$10,00",
	},
	{
		sabor: "Vinhos",
		descricao:
			"Lorem ipsum dolor sit amet consectetur. Lacus nulla sagittis quis ut sit. Augue molestie ut tempor risus. Volutpat quis massa.",
		valor: "R$30,00",
	},
	{
		sabor: "Drinks",
		descricao:
			"Lorem ipsum dolor sit amet consectetur. Lacus nulla sagittis quis ut sit. Augue molestie ut tempor risus. Volutpat quis massa.",
		valor: "R$15,00",
	},
];

const Cardapio = () => {
	const handleClick = () => {
		alert(
			"Poxa, ainda não estamos abertos! Que tal tentar de novo mais tarde?"
		);
	};
	return (
		<>
			<TinyBanner src={Banner} alt="Imagem de uma pizza" />
			<Wrapper>
				<Produtos
					tituloDaSecao="Pizzas"
					itens={pizzasTipos.map((pizza) => {
						return (
							<Item
								nome={pizza.sabor}
								descricao={pizza.descricao}
								preco={pizza.valor}
								key={pizza.sabor}
							/>
						);
					})}
				/>
				<Produtos
					tituloDaSecao="Bebidas"
					itens={bebidasTipos.map((bebida) => {
						return (
							<Item
								nome={bebida.sabor}
								descricao={bebida.descricao}
								preco={bebida.valor}
								key={bebida.sabor}
							/>
						);
					})}
				/>
				<Btn onClick={handleClick}>Fazer Pedido</Btn>
			</Wrapper>
			<Footer />
		</>
	);
};

export default Cardapio;
