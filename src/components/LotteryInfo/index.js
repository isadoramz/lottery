import { useContext } from "react"; 
import { LotteryContext } from "../../contexts/loterry/index.js";
import { useHistory } from "react-router-dom"

import "./styles.css"

const OptionText = ({ options, optionsToRender, price, type}) => {
	let history = useHistory();

	const { setGamePrice } = useContext(LotteryContext);

	if(options.length === 0) {
		return <p className="text">Você ainda não marcou nenhuma dezena!</p>
	} 
	
	if(type === "sena") {
		if(options.length >= 1 && options.length < 6) {
			return (
				<div className="priceWrapper">
					<p className="text">Você selecionou a(s) dezena(s):</p>
					<p className="text">{optionsToRender}</p>
				</div>
			)
		} 
		if(options.length >= 6) {
			return (
				<>
					<p className="text">Você selecionou a(s) dezena(s): {optionsToRender}</p>
					<div className="priceWrapper">
						<p className="text">Valor do jogo: R${price(options, "sena")}</p>
						<button tyoe="button" className="button" onClick={() => {setGamePrice(price(options, "sena"), history.push("/pagamento"))}}>Confirmar jogo</button>
					</div>
				</>
			)
		} 
	} else if(type === "quina") {
			if(options.length >= 1 && options.length < 5) {
				return (
					<div className="priceWrapper">
						<p className="text">Você selecionou a(s) dezena(s):</p>
						<p className="text">{optionsToRender}</p>
					</div>
				)
			}
			if(options.length >= 5) {
				return (
					<>
						<p className="text">Você selecionou a(s) dezena(s): {optionsToRender}</p>
						<div className="priceWrapper">
							<p className="text">Valor do jogo: R${price(options, "quina")}</p>
							<button tyoe="button" className="button" onClick={() => {setGamePrice(price(options, "quina"), history.push("/pagamento"))}}>Confirmar jogo</button>
						</div>
					</>
				)
			}
		}
}

export default OptionText;