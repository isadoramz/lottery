import "./styles.css";

const Option = ({ index, selectOption, option, type, isSelected }) => {
	return (
		<div key={index} className="optionWrapper">
			<button className={isSelected(option) ? ("optionSelected") : ("option")} onClick={() => selectOption(option, type)}>{option}</button>
		</div>
	)
}

export default Option;