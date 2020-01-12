import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { PersonOutline } from '@material-ui/icons';
import SplitEntry from './SplitEntry';

const useStyles = makeStyles( theme => ({
  sDetailsTitle: {
    padding: theme.spacing(1)
  }
}))

function ExpenseBody(props) {
  const {splitBy} = props
  const classes = useStyles();

  return (
    <>
      <Typography variant="subtitle1" className={classes.sDetailsTitle} >
        Split Details
      </Typography>
      {splitBy.map(s => <SplitEntry key={s.id} {...s} icon={<PersonOutline />} />)} 
    </>
  )
}

export default ExpenseBody
