import React from 'react';
import AddExpenseForm from './AddExpenseForm';
import { AddExpenseProvider } from '../Contexts/addExpenseProvider';

function AddExpenseMain(props) {
  const {splitBetween, splitMethod, editMode, paidBy, title, amount, id, history, match, friend, group} = props;
  return (
    <AddExpenseProvider
      splitBetween={splitBetween}
      paidBy={paidBy}
      splitMethod={splitMethod}
      editMode={editMode}
      title={title}  
      amount={amount}
      id={id}
      currency="INR"
    >
      <AddExpenseForm 
        history={history}
        friend={friend}
        group={group} 
        match={match} 
      />
    </AddExpenseProvider>
  )
}

export default AddExpenseMain;