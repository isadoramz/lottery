import React from 'react';
import LotteryProvider from '../../contexts/loterry/index';
import LotteryInfo from "./index"


import { render, screen } from "@testing-library/react";

const senaTax = [
    { options: 6, value: "4,50" },
    { options: 7, value: "31,50"},
    { options: 8, value: "126,00" },
    { options: 9, value: "378,00" },
    { options: 10, value: "945,00"},
    { options: 11, value: "2079,00"},
    { options: 12, value: "4158,00" },
    { options: 13, value: "7722,00" },
    { options: 14, value: "13513,50"},
    { options: 15, value: "22522,50" }
];
const quinaTax = [
    { options: 5, value: "2,00" },
    { options: 6, value: "12,00"},
    { options: 7, value: "42,00" },
    { options: 8, value: "112,00" },
    { options: 9, value: "252,00" },
    { options: 10, value: "504,00" } ,
    { options: 11, value: "924,00" },
    { options: 12, value: "1584,00" },
    { options: 13, value: "2574,00" },
    { options: 14, value: "4004,00" },
    { options: 15, value: "6006,00" }
];

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

const Component = ({  options, optionsToRender, price, type }) => {
     
    return (
        <LotteryProvider>
            <LotteryInfo options={options} optionsToRender={optionsToRender} price={price} type={type}/>
        </LotteryProvider>
    )
}

test("should render lottery information message in case none of the number options selected", async () => {
    const { container } = render(<Component options={[]} optionsToRender={[]} price={calculatePrice} type={"sena"}></Component>)
    
    const text = screen.getByText(/Você ainda não marcou nenhuma dezena!/i)
    expect(text).toBeInTheDocument()
})

test("should render lottery information message in case 1 of the number options selected", async () => {
    const { container } = render(<Component options={[1]} optionsToRender="01" price={calculatePrice} type={"sena"}></Component>)
    
    const text = screen.getByText("Você selecionou a(s) dezena(s):")
    expect(text).toBeInTheDocument()

    const numbers = screen.getByText("01")
    expect(numbers).toBeInTheDocument()
})

test("should render lottery information message in case of 6 or more number options selected", async () => {

    const { container } = render(<Component options={[1, 2, 3, 4, 5, 6, 7]} optionsToRender="01 - 02 - 03 - 04 - 05 - 06 - 07" price={calculatePrice} type={"sena"}></Component>)

    const text = screen.getByText("Você selecionou a(s) dezena(s):")
    expect(text).toBeInTheDocument()

    const numbers = screen.getByText("01 - 02 - 03 - 04 - 05 - 06 - 07")
    expect(numbers).toBeInTheDocument()

    const priceText = screen.getByText("Valor do jogo: R$") 
    expect(priceText).toBeInTheDocument()

    const priceValue = screen.getByText("31,50")
    expect(priceValue).toBeInTheDocument()
})

test("should render confirm game button", async () => {

    const { container } = render(<Component options={[1, 2, 3, 4, 5, 6, 7]} optionsToRender="01 - 02 - 03 - 04 - 05 - 06 - 07" price={calculatePrice} type={"sena"}></Component>)

    const button = screen.getByText("Confirmar jogo")
    expect(button).toBeInTheDocument()
})
