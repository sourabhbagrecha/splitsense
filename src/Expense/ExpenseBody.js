import React from 'react';
import { Typography, makeStyles, Button } from '@material-ui/core';
import { PersonOutline, DeleteOutline } from '@material-ui/icons';
import SplitEntry from './SplitEntry';
import { red } from '@material-ui/core/colors';
import firebase from '../firebaseConfig';
import { expenseData } from '../dummyData';
import LoadingBar from '../LoadingBar';

const useStyles = makeStyles( theme => ({
  sDetailsTitle: {
    padding: theme.spacing(1)
  },
  deleteExpense: {
    marginTop: "2rem",
    color: "white",
    backgroundColor: red[700],
    '&:hover': {
      backgroundColor: red[700],
    }
  },
  deleteButtonContainer: {
    display: "flex",
    justifyContent: "center"
  }
}))

function ExpenseBody(props) {
  const {splitBetween, loading} = props
  const classes = useStyles();
  return (
    <>
      <Typography variant="subtitle1" className={classes.sDetailsTitle} >
        Split Details
      </Typography>
      {loading ? <LoadingBar/> : splitBetween.map(s => <SplitEntry key={s.id} {...s} icon={<PersonOutline />} />) } 
      <div className={classes.deleteButtonContainer}><Button className={classes.deleteExpense} variant="contained" startIcon={<DeleteOutline />}>Delete Expense</Button></div>
    </>
  )
}

export default ExpenseBody
