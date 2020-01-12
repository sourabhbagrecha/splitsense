import React from 'react';
import { expenseData } from '../dummyData';
import { Container, CssBaseline } from '@material-ui/core';
import ExpenseHeader from './ExpenseHeader';
import ExpenseBody from './ExpenseBody';

function Expense(props) {
  const {id} = props.match.params;
  return (
    <Container style={{padding: 0}} maxWidth="xs">
      <CssBaseline />
      <ExpenseHeader id={id} expenseData={expenseData} history={props.history} />
      <ExpenseBody {...expenseData} />
    </Container>
  )
}

export default Expense
