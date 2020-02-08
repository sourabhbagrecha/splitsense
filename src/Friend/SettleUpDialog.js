import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Dialog, DialogTitle, makeStyles, ListItemSecondaryAction, CircularProgress, Icon } from '@material-ui/core';
import { PersonOutline, ArrowForwardOutlined } from '@material-ui/icons';
import { settleUpMsg } from '../utils/balanceMsg';
import { userId } from '../utils/userIdLocal';
import Axios from 'axios';
import { serverUrl } from '../utils/constants';
import { authHeader } from '../utils/authHeader';
import { Link } from 'react-router-dom';

const Entry = ({user, balance, role, friend}) => (
  <Link 
    style={{textDecoration: 'none', color: 'black'}} 
    to={`/payment?from=${role === "from" ? user._id : userId}&to=${role === "to" ? user._id : userId}&amount=${balance > 0 ? balance : -balance}&belongsTo=${friend._id}&belongsType=${"friend"}`}>
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
        <Icon edge="end" aria-label="comments">
          <ArrowForwardOutlined />
        </Icon>
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
  const {transfer, settleUpOpen, handleSettleUpClose, friend} = props;
  const classes = useStyles();
  const [myTransfer, setMyTransfer] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchUsersData();
    console.log(myTransfer);// eslint-disable-next-line
  }, []);
  const fetchUsersData = async () => {
    try {
      const userTransfer = transfer.from === userId ? {user: transfer.to, balance: -transfer.balance, role: "to"} : {user: transfer.from, balance: transfer.balance, role: "from"};
      const response = await Axios.get(`${serverUrl}/user/get-meta/${userTransfer.user}`, authHeader);
      const {user} = response.data;
      const updatedTransfer = {...userTransfer, user};
      console.log({updatedTransfer, transfer})
      setMyTransfer(updatedTransfer);
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
            {<Entry key={myTransfer.user._id} friend={friend} user={myTransfer.user} balance={myTransfer.balance} role={myTransfer.role}/>}
          </List>
      </Dialog>
    </>
  )
};

export default SettleUpDialog;