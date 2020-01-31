import React, { createContext, useState } from "react";
import useSplitBetweenState from "../Hooks/useSplitBetweenState";
import useInputState from "../Hooks/useInputState";
import {splitNames} from '../utils/constants.js';
import useNumberInputState from "../Hooks/useNumberInputState";

export const AddExpenseContext = createContext();

export function AddExpenseProvider(props) {
    const [splitMethod, handleSplitMethodChange] = useInputState(props.splitMethod);
    const [totalAmount, handleAmountChange] = useNumberInputState(props.amount);
    const [title, handleTitleChange] = useInputState(props.title);
    const [splitDialogOpen, toggleSplitDialog] = useState(false);
    const [paidByDialog, togglePaidByDialog] = useState(false);
    const [paidBy, setPaidBy] = useState(props.paidBy);
    const [currency, setCurrency] = useInputState(props.defaultCurrency || 'INR');
    const [category, setCategory] = useInputState(props.category || 'General');
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
                currency, 
                setCurrency,
                category,
                setCategory
            }}
        >
            {props.children}
        </AddExpenseContext.Provider>
    )
}