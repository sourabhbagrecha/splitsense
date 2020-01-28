import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Dialog, DialogTitle, DialogContent, makeStyles } from '@material-ui/core';
import { PersonOutline } from '@material-ui/icons';
import { balanceMsg } from '../utils/balanceMsg';
import { userId, getName } from '../utils/userIdLocal';

const Entry = (_id, name, picture, balance) => (
  <ListItem>
    <ListItemAvatar>
      <Avatar src={picture}>
        <PersonOutline/>
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={getName(_id, name)}
      secondary={balanceMsg(balance, 'INR', userId !== _id)}
    />
  </ListItem>
);

const useStyles = makeStyles({
  title: {
    padding: '16px 24px 0px 24px'
  },
  list: {
    paddingTop: "0px"
  }
});

function BalancesDialog(props) {
  const {balances, balancesOpen, handleBalancesClose} = props;
  const classes = useStyles();
  return (
    <>
      <Dialog onClose={handleBalancesClose} open={balancesOpen}>
        <DialogTitle className={classes.title}>Balances</DialogTitle>
          <List className={classes.list}>
            {balances.map(b => Entry(b.user._id, b.user.name.full, b.user.picture, b.balance))}
          </List>
      </Dialog>
    </>
  )
};

export default BalancesDialog;
