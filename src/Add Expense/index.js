import React from 'react';
import AddExpenseForm from './AddExpenseForm';
import { Container } from '@material-ui/core';
import { SplitBetweenProvider } from '../Contexts/splitBetweenProvider';

function AddExpense(props) {
  // const {id} = props.match.params;
  return (
    <Container maxWidth='xs'>
      <SplitBetweenProvider>
        <AddExpenseForm/>
      </SplitBetweenProvider>
    </Container>
  )
}

export default AddExpense
