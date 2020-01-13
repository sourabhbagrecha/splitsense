import React, { useEffect, useState } from 'react';
import { Container, CssBaseline, LinearProgress } from '@material-ui/core';
import ExpenseHeader from './ExpenseHeader';
import ExpenseBody from './ExpenseBody';
import firebase from '../firebaseConfig';
import { expenseDataArray } from '../dummyData';
import LoadingBar from '../LoadingBar';

function Expense(props) {
  const {id} = props.match.params;
  const [expenseData, setExpenseData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch();
  }, [])
  const db = firebase.firestore();
  const fetch = async () => {
    const doc = await db.collection('expenses').doc(id).get()
    console.log(doc.data())
    setExpenseData(doc.data());
    setLoading(false)
  }
  return (
    <Container style={{padding: 0}} maxWidth="xs">
      <CssBaseline />
      <ExpenseHeader id={id} loading={loading} expenseData={expenseData} history={props.history} />
      <ExpenseBody {...expenseData} loading={loading} />
    </Container>
  )
}

export default Expense
