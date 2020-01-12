import React from 'react';
import { Add, LocalGroceryStoreOutlined } from '@material-ui/icons';
import { Typography, Container, Fab, makeStyles, CssBaseline, useTheme } from '@material-ui/core';
import { expenseDataArray } from '../dummyData';
import ExpenseEntry from './ExpenseEntry';

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

function generate() {
  console.log(expenseDataArray)
  return expenseDataArray.map(e => <ExpenseEntry key={e.id} id={e.id} title={e.title} amount={e.amount} icon={<LocalGroceryStoreOutlined />}/>)
}

function Friend(props) {
  const {id} = props.match.params;
  const classes = useStyles();
  const theme = useTheme();
  return ( 
    <Container style={{padding: 0}} maxWidth="xs">
      <CssBaseline />
      <div style={{color: 'white', backgroundColor: theme.palette.primary.main, padding: '1rem'}} className={classes.fabContainer}>
        <Typography variant="h4">
          {id}
        </Typography>
        <Typography variant="caption">
          {id}@gmail.com
        </Typography>
        <Typography variant="subtitle1">
          You are owed: $100
        </Typography>
        <Fab className={classes.fab} color="secondary" size="large" aria-label="add" onClick={() => props.history.push(`/friend/${id}/add-expense`)}>
          <Add />
        </Fab>
      </div>
      {generate()}
    </Container>
  )
}

export default Friend;