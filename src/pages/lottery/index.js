import React, { useEffect, useContext } from "react";
import Presentation from "./presentation";
import { LotteryContext } from "../../contexts/LotteryContext"
import LotteryProvider from "../../contexts/LotteryContext"

const Lottery = () => {
	const { currentTab, setCurrentTab, gamePrice, setGamePrice } = useContext(LotteryContext);

	const [senaOptions, setSenaOptions] = React.useState([]);
	const [quinaOptions, setQuinaOptions] = React.useState([]);

	const [selectedSenaOptions, setSelectedSenaOptions] = React.useState([]);
	const [selectedQuinaOptions, setSelectedQuinaOptions] = React.useState([]);
	const senaTax = [
		{ options: 6, value: 4.5 },
		{ options: 7, value: 31.5 },
		{ options: 8, value: 126 },
		{ options: 9, value: 378 },
		{ options: 10, value: 945},
		{ options: 11, value: 2079 },
		{ options: 12, value: 4158 },
		{ options: 13, value: 7722 },
		{ options: 14, value: 13513.50},
		{ options: 15, value: 22522.50 }
	];
	const quinaTax = [
		{ options: 5, value: 2 },
		{ options: 6, value: 12 },
		{ options: 7, value: 42 },
		{ options: 8, value: 112 },
		{ options: 9, value: 252 },
		{ options: 10, value: 504} ,
		{ options: 11, value: 924 },
		{ options: 12, value: 1584 },
		{ options: 13, value: 2574 },
		{ options: 14, value: 4004 },
		{ options: 15, value: 6006 }
	]
	
	useEffect(() => {
		const numbers = []
		for (let i = 1; i <= 60; i++) {
			numbers.push(i)
		}
		setSenaOptions(numbers)
	}, [setSenaOptions])

	useEffect(() => {
		const numbers = []
		for (let i = 1; i <= 80; i++) {
			numbers.push(i)
		}
		setQuinaOptions(numbers)
	}, [setQuinaOptions])

	useEffect(() => {
		setGamePrice(null);
		setSelectedQuinaOptions([]);
		setSelectedSenaOptions([]);
	}, [currentTab, setGamePrice])

	const selectSenaOption = (number, type) => {
		if(type === "sena") {
			if(senaOptionIsSelected(number)) {
				setSelectedSenaOptions(selectedSenaOptions.filter((option) => option !== number))
			} else if(selectedSenaOptions?.length < 15 && !senaOptionIsSelected(number)) {
				setSelectedSenaOptions([...selectedSenaOptions, number])
			}
		} else {
			if(quinaOptionIsSelected(number)) {
				setSelectedQuinaOptions(selectedQuinaOptions.filter((option) => option !== number))
			} else if(selectedQuinaOptions?.length < 15 && !quinaOptionIsSelected(number)) {
				setSelectedQuinaOptions([...selectedQuinaOptions, number])
			}
		}
		
	}

	const formatNumber = (number) => {
		if(number < 10) return "0" + number;
		return number;
	}

	let formatedSenaOptions = selectedSenaOptions?.map((option) => formatNumber(option)).sort().join("-");
	let formatedQuinaOptions = selectedQuinaOptions?.map((option) => formatNumber(option)).sort().join("-");

	const senaOptionIsSelected = (number) => {
		return selectedSenaOptions.filter((option) => option === number).length > 0
	}

	const quinaOptionIsSelected = (number) => {
		return selectedQuinaOptions.filter((option) => option === number).length > 0
	}

	const calculatePrice = (options, type) => {
		let numberOfOptions = options.length;
		let price;
		if(type === "sena") {
			price = senaTax.find((price) => {
				return price.options === numberOfOptions
			})
		} else {
			price = quinaTax.find((price) => {
				return price.options === numberOfOptions
			})
		}
		
		if(price === undefined) {
			return null;
		} else {
			return price.value;
		}
	}

	return (
			<Presentation
				currentTab={currentTab}
				setCurrentTab={setCurrentTab}
				senaOptions={senaOptions}
				selectSenaOption={selectSenaOption}
				formatedSenaOptions={formatedSenaOptions}
				formatedQuinaOptions={formatedQuinaOptions}
				selectedSenaOptions={selectedSenaOptions}
				selectedQuinaOptions={selectedQuinaOptions}
				calculatePrice={calculatePrice}
				quinaOptions={quinaOptions}
			/>	
	)
}

export default Lottery;