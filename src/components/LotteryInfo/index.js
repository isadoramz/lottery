import { Link } from "react-router-dom"

const OptionText = ({ options, optionsToRender, price, type}) => {
    if(options.length === 0) {
        return <p>Você ainda nao marcou nenhuma dezena</p>
    } else if(options.length === 1) {
        return <p>Você selecionou a dezena: {optionsToRender}</p>
    } else if(options.length > 1) {
        if(type === "sena") {
            if(options.length >= 6) {
                return (
                    <>
                        <p>Você selecionou as dezenas: {optionsToRender}</p>
                        <p>valor jogo: {price(options, "sena")} reais</p>
                        <button><Link to="/pagamento">Confirmar Jogo</Link></button>
                    </>
                )
            }
        } else if(type === "quina") {
            if(options.length >= 5) {
                return (
                    <>
                        <p>Você selecionou as dezenas: {optionsToRender}</p>
                        <p>valor jogo: {price(options, "quina")} reais</p>
                        <button><Link to="/pagamento">Confirmar Jogo</Link></button>
                    </>
                )
            }
        }
        
        return <p>Você selecionou as dezenas: {optionsToRender}</p>
    }
}

export default OptionText;