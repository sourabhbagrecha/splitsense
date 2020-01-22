import React from 'react';
import { Edit } from '@material-ui/icons';
import { Typography, Fab, makeStyles, Avatar, useTheme } from '@material-ui/core';
import Moment from 'react-moment';
import LoadingBar from '../LoadingBar';
import { Categories } from '../categoriesData';

// const useStyles = makeStyles(theme => ({
//   fabContainer: {
//     backgroundColor: theme.palette.primary.main, 
//     position: 'relative',
//     color: 'white', 
//     padding: '1rem'
//   },
//   fab: {
//     position: 'absolute',
//     zIndex: '2',
//     bottom: theme.spacing(-3),
//     right: theme.spacing(3),
//   },
// }));

const useStyles = makeStyles(theme => ({
  fabContainer: {
    position: 'relative'
  },
  fab: {
    position: 'absolute',
    zIndex: '2',
    bottom: theme.spacing(-3),
    right: theme.spacing(3),
  },
}));

function ExpenseHeader(props) {
  const {id, expenseData, loading} = props;
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div style={{color: 'white', backgroundColor: theme.palette.primary.main, padding: '1rem'}} className={classes.fabContainer}>
      <div style={{display: "flex"}}>
        <Avatar variant="rounded" style={{backgroundColor: theme.palette.secondary.main, height: "4rem", width: "4rem", fontSize: "3rem" }} >
          {Categories.find(c => c.name === expenseData.category).icon}
        </Avatar>
        <div style={{margin: "auto 0 auto 1rem"}}>
          <Typography variant="h4">
            {loading ? <LoadingBar height={42}/> : expenseData.title}
          </Typography>
          <Typography variant="subtitle1">
            {loading ? <LoadingBar height={15} /> : `${expenseData.currency} ${expenseData.amount}`}
          </Typography>
        </div>
      </div>
      <Typography variant="caption">
        {loading ? <LoadingBar height={28}/> : <>Added by {expenseData.createdBy.name.full} <Moment fromNow>{new Date(expenseData.createdAt)}</Moment></>}
      </Typography>
      <Fab className={classes.fab} color="secondary" size="large" aria-label="add" onClick={() => props.history.push(`/expense/${id}/edit`)}>
        <Edit />
      </Fab>
    </div>


  )
}

export default ExpenseHeader;