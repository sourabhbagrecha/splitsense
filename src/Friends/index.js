import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { PersonOutline } from '@material-ui/icons';
import Axios from 'axios';
import { serverUrl } from '../constants';
import { Divider } from '@material-ui/core';
import { authHeader } from '../utils/authHeader';

const useStyles = makeStyles(theme => ({
  
}));
function generate(friends, classes, theme) {
  return friends.map(friend =>
    <Link key={Math.random()*10000000} to={`/friend/${friend._id}`} className={classes.friend} style={{textDecoration: 'none', color: 'black'}}>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{color: "white", backgroundColor: theme.palette.secondary.main}} src={friend.picture}>
            <PersonOutline />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={friend.name.full}
          secondary="You owe nothing"
        />
      </ListItem>
      <Divider/>
    </Link>
  );
}

function Friends(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [friends, setFriends] = useState([]);
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
      <div className={classes.demo}>
        <List>
          {!loading && generate(friends, classes, theme)}
        </List>
      </div>
    </>
  );
}

export default Friends;