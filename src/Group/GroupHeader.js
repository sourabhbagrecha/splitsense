import React from 'react';
import { Avatar, Typography, Fab, makeStyles, useTheme } from '@material-ui/core';
import { Add, GroupOutlined } from '@material-ui/icons';
import HeaderLoader from '../Loaders/HeaderLoader';

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

function GroupHeader(props) {
  const {group, history, loading} = props;
  const classes = useStyles();
  const theme = useTheme();
  return (
    loading ?
    <HeaderLoader/>
    :
    <div style={{color: 'white', backgroundColor: theme.palette.primary.main, padding: '1rem'}} className={classes.fabContainer}>
      <div style={{display: "flex"}}>
        <Avatar variant="rounded" src={group.picture||null} style={{backgroundColor: theme.palette.secondary.main, height: "4rem", width: "4rem", fontSize: "4rem"}} >
          <GroupOutlined fontSize="inherit" />
        </Avatar>
        <div style={{margin: "auto 0 auto 1rem"}}>
          <Typography variant="h5">
            {group.name}
          </Typography>
          <Typography variant="caption">
            {group.members.length}
          </Typography>
        </div>
      </div>
      <Typography variant="subtitle1">
        You are owed: $100
      </Typography>
      <Fab className={classes.fab} color="secondary" size="large" aria-label="add" onClick={() => history.push(`/group/${group._id}/add-expense`)}>
        <Add />
      </Fab>
    </div>
  )
};

export default GroupHeader;
