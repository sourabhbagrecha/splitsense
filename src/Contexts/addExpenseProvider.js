import React, { createContext, useState } from "react";
import useSplitBetweenState from "../Hooks/useSplitBetweenState";
import useInputState from "../Hooks/useInputState";
import {splitNames} from '../constants.js';
import { paidByData } from "../dummyData";

export const AddExpenseContext = createContext();

export function AddExpenseProvider(props) {
    const [splitMethod, handleSplitMethodChange] = useInputState(props.splitMethod);
    const [totalAmount, handleAmountChange] = useInputState(props.amount);
    const [title, handleTitleChange] = useInputState(props.title);
    const [splitDialogOpen, toggleSplitDialog] = useState(false);
    const [paidByDialog, togglePaidByDialog] = useState(false);
    const [paidBy, setPaidBy] = useState(paidByData);
    const editMode = props.editMode;
    const {
            calculatePercentage,
            toggleSplitEnabled, 
            splitByPercentage, 
            calculateShare, 
            splitUnequally, 
            splitBetween, 
            splitEqually, 
            splitByShare, 
            resetValues, 
        } = useSplitBetweenState(props.splitBetween);
    return(
        <AddExpenseContext.Provider 
            value={{
                handleSplitMethodChange,
                calculatePercentage,
                togglePaidByDialog,
                toggleSplitEnabled, 
                handleAmountChange, 
                handleTitleChange,
                toggleSplitDialog,
                splitByPercentage, 
                splitDialogOpen, 
                splitUnequally, 
                calculateShare, 
                paidByDialog,
                splitByShare, 
                splitEqually, 
                splitBetween, 
                resetValues, 
                splitMethod,
                totalAmount, 
                splitNames,
                setPaidBy,
                editMode,
                paidBy,
                title,
            }}
        >
            {props.children}
        </AddExpenseContext.Provider>
    )
}