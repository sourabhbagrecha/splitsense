import React, { useEffect, useState } from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import ExpenseHeader from './ExpenseHeader';
import ExpenseBody from './ExpenseBody';
import Axios from 'axios';
import { serverUrl } from '../utils/constants';
import { authHeader } from '../utils/authHeader';

function Expense(props) {
  const {id} = props.match.params;
  const [expenseData, setExpenseData] = useState({})
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch();
    // eslint-disable-next-line
  }, [])
  // const db = firebase.firestore();
  const fetch = async () => {
    // const doc = await db.collection('expenses').doc(id).get()
    // console.log(doc.data())
    const expenseResponse = await Axios.get(`${serverUrl}/expense/${id}`, authHeader);
    setExpenseData(expenseResponse.data.expense);
    setLoading(false)
  }
  return (
    <Container style={{padding: 0}} maxWidth="xs">
      <CssBaseline />
        <>
          <ExpenseHeader id={id} loading={loading} expenseData={expenseData} history={props.history} />
          <ExpenseBody {...expenseData} loading={loading} />
        </>
    </Container>
  )
}

export default Expense;