import React, { useEffect, useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Axios from 'axios';
import { serverUrl } from '../constants';
import { authHeader } from '../utils/authHeader';
import FriendItem from './FriendItem';

function Friends(props) {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [friends, setFriends] = useState([0]);
  useEffect(() => {fetchFriends()}, []);
  const fetchFriends = async () => {
    const response = await Axios.get(`${serverUrl}/friend/fetch-all`, authHeader );
    console.log(response);
    setFriends(response.data.friends);
    setLoading(false);
  }
  return (
    <>
      <Typography variant="h6" style={{paddingLeft: theme.spacing(2)}}>
        You owe: $249,<br/>
        You are owed: $100
      </Typography>
      <div>
        <List>
          {friends.map(friend =>
            <FriendItem friend={friend} loading={loading} />
          )}
        </List>
      </div>
    </>
  );
}

export default Friends;