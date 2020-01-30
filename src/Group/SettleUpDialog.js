import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Dialog, DialogTitle, makeStyles, ListItemSecondaryAction, IconButton, CircularProgress } from '@material-ui/core';
import { PersonOutline, ArrowRightAlt, ArrowForwardOutlined } from '@material-ui/icons';
import { balanceMsg, settleUpMsg } from '../utils/balanceMsg';
import { userId, getName } from '../utils/userIdLocal';
import Axios from 'axios';
import { serverUrl } from '../constants';
import { authHeader } from '../utils/authHeader';
import { Link } from 'react-router-dom';

const settleUpPrimaryText = (from, to) => {
  return (
    <>

      <ArrowRightAlt/>
    </>
  )
}

const Entry = ({user, balance, role}) => (
  <Link style={{textDecoration: 'none', color: 'black'}} to={`/payment?from=${role === "from" ? user._id : userId}&to=${role === "to" ? user._id : userId}&balance=${balance > 0 ? balance : -balance}`}>
    <ListItem button>
      <ListItemAvatar>
        <Avatar src={user.picture}>
          <PersonOutline/>
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={user.name.full}
        secondary={settleUpMsg(balance, 'INR')}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="comments">
          <ArrowForwardOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  </Link>
);

const useStyles = makeStyles({
  title: {
    padding: '16px 24px 0px 24px'
  },
  list: {
    paddingTop: "0px"
  }
});

function SettleUpDialog(props) {
  const {transfers, settleUpOpen, handleSettleUpClose} = props;
  const classes = useStyles();
  const [myTransfers, setMyTransfer] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchUsersData();
  }, []);
  const fetchUsersData = async () => {
    try {
      const userTransfers = transfers
        .filter(t => t.to === userId || t.from === userId)
        .map(t => t.from === userId ? {user: t.to, balance: -t.balance, role: "to"} : {user: t.from, balance: t.balance, role: "from"});
      const response = await Axios.post(`${serverUrl}/user/get-many-meta`, {users: userTransfers.map(t => t.user)}, authHeader);
      const {usersMeta} = response.data;
      const updatedTransfers = userTransfers.map(t => ({...t, user: usersMeta.find(u => u._id === t.user)}));
      console.log(updatedTransfers)
      setMyTransfer(updatedTransfers);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    loading ?
    <CircularProgress />
    :
    <>
      <Dialog onClose={handleSettleUpClose} open={settleUpOpen}>
        <DialogTitle className={classes.title}>Settle Up</DialogTitle>
          <List className={classes.list}>
            {myTransfers.map( t => <Entry key={t.user._id} user={t.user} balance={t.balance} role={t.role}/>)}
          </List>
      </Dialog>
    </>
  )
};

export default SettleUpDialog;
