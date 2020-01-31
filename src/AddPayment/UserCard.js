import React, { useEffect, useState } from 'react';
import { CardHeader, Avatar, Card, makeStyles } from '@material-ui/core';
import Axios from 'axios';
import { serverUrl } from '../utils/constants';
import { authHeader } from '../utils/authHeader';
import ListItemLoader from '../Loaders/ListItemLoader';

const useStyles = makeStyles(theme =>({
  Card: {
    margin: "2rem auto",
    width: "75%"
  }
}))

function UserCard(props) {
  const [user, setUser] = useState(props.user);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  useEffect(() => {
    fetchParticipants();// eslint-disable-next-line
  }, []);
  const fetchParticipants = async () => {
    try {
      const response = await Axios.get(`${serverUrl}/user/get-meta/${user}`, authHeader);
      setUser(response.data.user);
      setLoading(false);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    
    <Card className={classes.Card}>
      {
        loading ? 
        <ListItemLoader/>
        :
        <CardHeader
          className={classes.cardHeader}
          avatar={
            <Avatar src={user.picture}>
            </Avatar>
          }
          title={<span>{user.name.full}</span>}
        />
      }
    </Card>
  )
};

export default UserCard;
