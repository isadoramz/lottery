import React, { useState, createContext, useEffect } from "react";

export const LotteryContext = createContext();

const LotteryProvider = ({ children }) => {
    const [currentTab, setCurrentTab] = useState("sena")
    const [gamePrice, setGamePrice] = useState()

    return (
        <LotteryContext.Provider value={{currentTab, setCurrentTab, gamePrice, setGamePrice}}>
            {children}
        </LotteryContext.Provider>
    )
}

export default LotteryProvider;