import React from 'react';
import { Avatar, Typography, Fab, makeStyles, useTheme } from '@material-ui/core';
import { Add, GroupOutlined, NavigationOutlined, AccountBalance, AccountBalanceOutlined, AccountBalanceWalletOutlined, AccountBalanceWallet } from '@material-ui/icons';
import HeaderLoader from '../Loaders/HeaderLoader';
import BalancesDialog from './BalancesDialog';
import useDialogCloseState from '../Hooks/useDialogCloseState';
import { balanceMsg } from '../utils/balanceMsg';

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
  headerActions: {
    marginTop: theme.spacing(1.5)
  }
}));

function GroupHeader(props) {
  const {group, history, loading, balanceSelf} = props;
  const classes = useStyles();
  const theme = useTheme();
  const [settleUpDialog, handleSettleUpOpen, handleSettleUpClose] = useDialogCloseState(false);
  const [balancesDialog, handleBalancesOpen, handleBalancesClose] = useDialogCloseState(false);
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
          <Typography variant="body2">
            You {balanceMsg(balanceSelf, 'INR', false, true)}
          </Typography>
        </div>
      </div>
      <div className={classes.headerActions}>
        <Fab
          variant="extended"
          size="small"
          color="default"
          aria-label="add"
          onClick={e => handleBalancesOpen(e)}
        >
          <AccountBalance />
          Balances
        </Fab>
        <BalancesDialog balances={group.balances} balancesOpen={balancesDialog} handleBalancesClose={handleBalancesClose} />
        <Fab
          style={{marginLeft: '1rem'}}
          variant="extended"
          size="small"
          color="default"
          aria-label="add"
        >
          <AccountBalanceWallet />
          Settle Up
        </Fab>
      </div>
      <Fab className={classes.fab} color="secondary" size="large" aria-label="add" onClick={() => history.push(`/group/${group._id}/add-expense`)}>
        <Add />
      </Fab>
    </div>
  )
};

export default GroupHeader;
