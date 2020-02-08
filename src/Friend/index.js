import React, { useEffect, useState } from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import Axios from 'axios';
import { serverUrl } from '../utils/constants';
import { authHeader } from '../utils/authHeader';
import FriendHeader from './FriendHeader';
import FriendBody from './FriendBody';
import { userId } from '../utils/userIdLocal';

function Friend(props) {
  const {id} = props.match.params;
  const [loading, setLoading] = useState(true);
  const [friend, setFriend] = useState({});
  const [friendPerson, setFriendPerson] = useState({});
  const [activities, setActivities] = useState([]);
  const [balanceSelf, setBalanceSelf] = useState(0);
  useEffect(() => {
    fetchFriend();
    //eslint-disable-next-line
  }, []);
  const fetchFriend = async () => {
    const response = await Axios.get(`${serverUrl}/friend/${id}`, authHeader);
    console.log("::::::::::::>>>>>>>", userId);
    const balanceSelfResponse = response.data.friend.balances.find(b => b.user.toString() === userId.toString()).balance ;
    setBalanceSelf(balanceSelfResponse);
    setFriend(response.data.friend);
    setFriendPerson(response.data.friendPerson);
    setActivities(response.data.activities);
    setLoading(false);
  }

  return ( 
    <Container style={{padding: 0}} maxWidth="xs">
      <CssBaseline />
      <FriendHeader loading={loading} friend={friend} friendPerson={friendPerson} balanceSelf={balanceSelf} history={props.history} />
      <FriendBody activities={activities} />
    </Container>
  )
}

export default Friend;