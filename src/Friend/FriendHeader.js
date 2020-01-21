import React from 'react';
import { Avatar, Typography, Fab, makeStyles, useTheme } from '@material-ui/core';
import { PersonOutline, Add } from '@material-ui/icons';


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

function FriendHeader(props) {
  const {friendPerson, friend, history} = props;
  const classes = useStyles();
  const theme = useTheme();
  console.log(friendPerson, friend);

  return (
    <div style={{color: 'white', backgroundColor: theme.palette.primary.main, padding: '1rem'}} className={classes.fabContainer}>
    <div style={{display: "flex"}}>
      <Avatar variant="rounded" src={friendPerson.picture} style={{backgroundColor: theme.palette.secondary.main, height: "4rem", width: "4rem"}} >
        <PersonOutline/>
      </Avatar>
      <div style={{margin: "auto 0 auto 1rem"}}>
        <Typography variant="h5">
          {friendPerson.name.full}
        </Typography>
        <Typography variant="caption">
          {friendPerson.email}
        </Typography>
      </div>
    </div>
    <Typography variant="subtitle1">
      You are owed: $100
    </Typography>
    <Fab className={classes.fab} color="secondary" size="large" aria-label="add" onClick={() => history.push(`/friend/${friend._id}/add-expense`)}>
      <Add />
    </Fab>
  </div>
  )
}

export default FriendHeader
