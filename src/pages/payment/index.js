
import {  useContext } from "react";
import { LotteryContext } from "../../contexts/LotteryContext";

import "../styles.css"

const Payment = () => {
	const { gamePrice } = useContext(LotteryContext);

	return (
		<div className="container">
			<p className="title">Você finalizou o jogo!</p>
			<p className="title">Valor total R${gamePrice}</p>
		</div>
	)
}

export default Payment;
