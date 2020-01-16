import React from 'react';
import AddExpenseForm from './AddExpenseForm';
import { Container } from '@material-ui/core';
import { AddExpenseProvider } from '../Contexts/addExpenseProvider';
import { splitBetweenData, expenseDataArray } from "../dummyData";

function AddExpense(props) {
  const {path} = props.match;
  const editMode = path === '/expense/:id/edit';
  const id = editMode ? props.match.params.id : "";
  const expenseData = expenseDataArray.find((v) => v.id === id)
  const splitMethod = editMode ? expenseData.splitMethod : "equally";
  const splitBetween = editMode ? expenseData.splitBetween : splitBetweenData;
  const amount = editMode ? expenseData.amount : 0;
  const title = editMode ? expenseData.title : "";
  return (
    <Container maxWidth='xs'>
      <AddExpenseProvider
        splitBetween={splitBetween}
        splitMethod={splitMethod}
        editMode={editMode}
        title={title}  
        amount={amount}
        id={id}
        currency="INR"
      >
        <AddExpenseForm history={props.history}/>
      </AddExpenseProvider>
    </Container>
  )
}

export default AddExpense
