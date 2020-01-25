import React from 'react';
import { Typography, makeStyles, Button } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import Entry from './Entry';
import { red } from '@material-ui/core/colors';
import LoadingBar from '../LoadingBar';
import ListItemLoader from '../Loaders/ListItemLoader';

const useStyles = makeStyles( theme => ({
  subsectionTitle: {
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
  const {splitBy, paidBy, loading} = props;
  console.log(props)
  const classes = useStyles();
  return (
    loading ?
    <ListItemLoader/>
    :
    <>
      <Typography variant="subtitle1" className={classes.subsectionTitle} >
        Split Details
      </Typography>
      {loading ? <LoadingBar height={100}/> : splitBy.map(s => s.amount > 0 && <Entry key={s._id} {...s} />) } 
      <Typography variant="subtitle1" className={classes.subsectionTitle} >
        Paid By:
      </Typography>
      {loading ? <LoadingBar height={100}/> : paidBy.map(p => p.amount > 0 && <Entry key={p._id} {...p} />) } 
      <div className={classes.deleteButtonContainer}><Button className={classes.deleteExpense} variant="contained" startIcon={<DeleteOutline />}>Delete Expense</Button></div>
    </>
  )
}

export default ExpenseBody
