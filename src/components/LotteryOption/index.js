import "./styles.css"

const Option = ({ key, selectOption, option, type }) => {
    return (
        <div key={key} className="optionWrapper">
            <button className="option" onClick={() => selectOption(option, type)}>{option}</button>
        </div>
    )
}

export default Option;