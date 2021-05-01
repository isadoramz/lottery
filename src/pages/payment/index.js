
import {  useContext } from "react";
import { LotteryContext } from "../../contexts/LotteryContext";

const Payment = () => {
	const { gamePrice } = useContext(LotteryContext);

	return (
		<div>
			<p>Você finalizou o jogo!</p>
			<p>Valor total R${gamePrice}</p>
		</div>
	)
}

export default Payment;
