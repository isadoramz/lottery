import React from "react";
import Option from "../../components/LotteryOption"
import LotteryInfo from "../../components/LotteryInfo"

import "./styles.css";

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
	quinaOptions
}) => {
	return (
		<div className="container">
			<div className="titleWrpper">
				<p>uMov.me Loterias</p>
			</div>
			<div className="optionsButtonsWrapper">
				<button onClick={() => setCurrentTab("sena")}>Sena</button>
				<button onClick={() => setCurrentTab("quina")}>Quina</button>
			</div>
			{currentTab === "sena" ? (
				<>
					<div className="loteryWrapper">
						{
							senaOptions.map((option, i) => (
								<Option key={i} option={option} selectOption={selectSenaOption} type="sena"/>
							))
						}
					</div>
					<LotteryInfo options={selectedSenaOptions} optionsToRender={formatedSenaOptions} price={calculatePrice} type="sena"/>
				</>
			) : (
				<>
					<div className="loteryWrapper">
						{
							quinaOptions.map((option, i) => (
								<Option key={i} option={option} selectOption={selectSenaOption} type="quina"/>
							))
						}
					</div>
					<LotteryInfo options={selectedQuinaOptions} optionsToRender={formatedQuinaOptions} price={calculatePrice} type="quina"/>
				</>
			)}
			</div>
	)
}

export default Presentation;