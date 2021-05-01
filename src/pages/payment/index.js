
import {  useContext } from "react"
import { LotteryContext } from "../../contexts/LotteryContext"

const Payment = () => {
    const { gamePrice } = useContext(LotteryContext);
    console.log(gamePrice)

    return (
        <p>pagamento {gamePrice}</p>
    )
}

export default Payment;
