import React from 'react';
import { Router } from "react-router-dom";
import LotteryProvider from '../../contexts/loterry/index';
import LotteryOption from "./index"

import { render, screen, fireEvent, waitFor } from "@testing-library/react";

const Component = ({  key, selectOption, option, type, isSelected }) => {
    
    return (
        <LotteryProvider>
            <LotteryOption key={key} selectOption={selectOption} option={option} type={type} isSelected={isSelected} />
        </LotteryProvider>
    )
}

test("shoul render lottery number selected option test", async () => {

    const { container } = render(<Component index={1} selectedOption={() => {}} option={1} type={"sena"} isSelected={() => true}></Component>)

    const one = screen.getByText(/1/i)
    expect(one).toHaveClass("optionSelected")
})

test("should render lottery number unseleced option test", async () => {

    const { container } = render(<Component index={2} selectedOption={() => {}} option={2} type={"sena"} isSelected={() => false}></Component>)

    const two = screen.getByText(/2/i)
    expect(two).toHaveClass("option")
})

