import "./styles.css";

const Option = ({ key, selectOption, option, type, isSelected}) => {
	return (
		<div key={key} className="optionWrapper">
			<button className={isSelected(option) ? ("optionSelected") : ("option")} onClick={() => selectOption(option, type)}>{option}</button>
		</div>
	)
}

export default Option;