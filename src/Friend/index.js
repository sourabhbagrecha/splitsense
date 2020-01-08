import React from 'react';
import {Folder, Add} from '@material-ui/icons';
import { Typography, Paper, Container, Fab, makeStyles } from '@material-ui/core';
import { expenseDataArray } from '../dummyData';
import Entry from '../Entry';

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
  return expenseDataArray.map(e => <Entry title={e.title} amount={e.amount} icon={<Folder />}/>)
}

function Friend(props) {
  const {id} = props.match.params;
  const classes = useStyles();
  return (
    <Container maxWidth="xs">
      <Paper>
          <div style={{color: 'white', backgroundColor: '#2579b1', padding: '1rem'}} className={classes.fabContainer}>
            <Typography variant="h4">
              {id}
            </Typography>
            <Typography variant="subtitle1">
              You owe: $249,<br/>
              You are owed: $100
            </Typography>
            <Fab className={classes.fab} color="primary" size="large" aria-label="add" onClick={() => props.history.push(`/friend/${id}/add-expense`)}>
              <Add />
            </Fab>
          </div>
          {generate()}
      </Paper>
    </Container>
  )
}

export default Friend;