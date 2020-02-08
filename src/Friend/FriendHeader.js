import React from 'react';
import { Avatar, Typography, Fab, makeStyles, useTheme } from '@material-ui/core';
import { PersonOutline, Add, AccountBalanceWallet } from '@material-ui/icons';
import HeaderLoader from '../Loaders/HeaderLoader';
import { balanceMsg } from '../utils/balanceMsg';
import useDialogCloseState from '../Hooks/useDialogCloseState';
import SettleUpDialog from './SettleUpDialog';

const useStyles = makeStyles(theme => ({
  fabContainer: {
    position: 'relative'
  },
  fab: {
    position: 'absolute',
    zIndex: '2',
    bottom: theme.spacing(-3),
    right: theme.spacing(3),
  }
}));

function FriendHeader(props) {
  const {friendPerson, friend, history, loading, balanceSelf} = props;
  const classes = useStyles();
  const theme = useTheme();
  const [settleUpDialog, handleSettleUpOpen, handleSettleUpClose] = useDialogCloseState(false);
  return (
    loading ? 
    <HeaderLoader/>
    :
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
          <Typography variant="body2">
            You {balanceMsg(balanceSelf, 'INR', false, true)}
          </Typography>
        </div>
      </div>
      {
        balanceSelf !== 0 &&
        <div className={classes.headerActions}>
          <Fab
            style={{marginTop: '0.5rem'}}
            variant="extended"
            size="small"
            color="default"
            aria-label="add"
            onClick={e => handleSettleUpOpen(e)}
          >
            <AccountBalanceWallet />
            Settle Up
          </Fab>
          <SettleUpDialog friend={friend} transfer={friend.transfer} settleUpOpen={settleUpDialog} handleSettleUpClose={handleSettleUpClose} />
        </div>
      }
      <Fab className={classes.fab} color="secondary" size="large" aria-label="add" onClick={() => history.push(`/friend/${friend._id}/add-expense`)}>
        <Add />
      </Fab>
    </div>
  )
}

export default FriendHeader
