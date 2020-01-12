import React from 'react';
import { Edit } from '@material-ui/icons';
import { Typography, Fab, makeStyles } from '@material-ui/core';
import Moment from 'react-moment';

const useStyles = makeStyles(theme => ({
  fabContainer: {
    backgroundColor: theme.palette.primary.main, 
    position: 'relative',
    color: 'white', 
    padding: '1rem'
  },
  fab: {
    position: 'absolute',
    zIndex: '2',
    bottom: theme.spacing(-3),
    right: theme.spacing(3),
  },
}));

function ExpenseHeader(props) {
  const {id, expenseData} = props;
  const classes = useStyles();
  return (
    <div style={{}} className={classes.fabContainer}>
      <Typography variant="h4">
        {expenseData.title}
      </Typography>
      <Typography variant="caption">
        {expenseData.currency} {expenseData.amount}
      </Typography>
      <Typography variant="subtitle1">
        Added by {expenseData.createdBy} <Moment fromNow>{new Date(1578851877173)}</Moment>
      </Typography>
      <Fab className={classes.fab} color="secondary" size="large" aria-label="add" onClick={() => props.history.push(`/expense/${id}/edit`)}>
        <Edit />
      </Fab>
    </div>
  )
}

export default ExpenseHeader
