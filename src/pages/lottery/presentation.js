import React from "react";

import Option from "../../components/LotteryOption";
import LotteryInfo from "../../components/LotteryInfo";

import "../styles.css";

const Presentation = ({
	currentTab,
	setCurrentTab,
	senaOptions,
	selectSenaOption,
	formatedSenaOptions,
	formatedQuinaOptions,
	selectedSenaOptions,
	selectedQuinaOptions,
	calculatePrice,
	quinaOptions,
	senaOptionIsSelected,
	quinaOptionIsSelected
}) => {
	return (
		<div className="container">
			<div className="titleWrpper">
				<p className="title">uMov.me Loterias</p>
			</div>
			<div className="optionsButtonsWrapper">
					<button className={currentTab === "sena" ? ("optionButtonSelected") : ("optionButton")} onClick={() => setCurrentTab("sena")}>Sena</button>
				<button className={currentTab === "quina" ? ("optionButtonSelected") : ("optionButton")} onClick={() => setCurrentTab("quina")}>Quina</button>
			</div>
			<div>
				<div className="optionsWrapper">
					<div className="options">
						{currentTab === "sena" ? (
							senaOptions.map((option, i) => (
								<Option index={i} option={option} selectOption={selectSenaOption} isSelected={senaOptionIsSelected} type="sena"/>
							))
						) : (
							quinaOptions.map((option, i) => (
								<Option index={i} option={option} selectOption={selectSenaOption} isSelected={quinaOptionIsSelected} type="quina"/>
							))
						)
						}
					</div>
				</div>
				{currentTab === "sena" ? (
						<LotteryInfo options={selectedSenaOptions} optionsToRender={formatedSenaOptions} price={calculatePrice} type="sena"/>
					) : (
						<LotteryInfo options={selectedQuinaOptions} optionsToRender={formatedQuinaOptions} price={calculatePrice} type="quina"/>
					)
				}
			</div>
		</div>
	)
}

export default Presentation;