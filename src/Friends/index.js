import React, { useEffect, useContext, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { PersonOutline } from '@material-ui/icons';
import UserContext from '../Contexts/userContext';
import Axios from 'axios';
import { serverUrl } from '../constants';

const useStyles = makeStyles(theme => ({
  
}));

function generate(friends, classes, theme) {
  return friends.map(friend =>
    <Link key={Math.random()*10000000} to={`/friend/${friend._id}`} className={classes.friend} style={{textDecoration: 'none', color: 'black'}}>
      <ListItem style={{borderTop: "1px solid #cfcdc8"}}>
        <ListItemAvatar>
          <Avatar style={{color: "white", backgroundColor: theme.palette.secondary.main}}>
            <PersonOutline />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={friend.name.full}
          secondary="You owe nothing"
        />
      </ListItem>
    </Link>
  );
}

function Friends(props) {
  const classes = useStyles();
  const theme = useTheme();
  const {user} = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [friends, setFriends] = useState([]);
  useEffect(() =>  {
    if(user){
      fetchFriends(user)
    }
  }, [user])
  const fetchFriends = async (user) => {
    const response = await Axios.post(`${serverUrl}/friend/fetch-all`,{googleId: user.providerData[0].uid});
    console.log(response);
    setFriends(response.data.friends);
    setLoading(false);
  }
  return (
    <div className={classes.root}>
      <Typography variant="h6" style={{paddingLeft: theme.spacing(2)}}>
        You owe: $249,<br/>
        You are owed: $100
      </Typography>
      <div className={classes.demo}>
        <List>
          {!loading && generate(friends, classes, theme)}
        </List>
      </div>
    </div>
  );
}

export default Friends;