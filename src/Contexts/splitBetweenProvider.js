import React, { createContext } from "react";
import useSplitBetweenState from "../Hooks/useSplitBetweenState";
import { splitBetweenData } from "../dummyData";
import useInputState from "../Hooks/useInputState";

export const SplitBetweenContext = createContext();

export function SplitBetweenProvider(props) {
    const initialVal = splitBetweenData;
    const {splitBetween, toggleSplitEnabled, splitEqually, splitUnequally, splitByPercentage, splitByShare, resetValues, calculateShare, calculatePercentage} = useSplitBetweenState(initialVal);
    const [totalAmount, handleAmountChange] = useInputState("");
    return(
        <SplitBetweenContext.Provider value={{splitBetween, toggleSplitEnabled, splitEqually, splitUnequally, splitByPercentage, splitByShare, totalAmount, handleAmountChange, resetValues, calculateShare, calculatePercentage}}>
            {props.children}
        </SplitBetweenContext.Provider>
    )
}