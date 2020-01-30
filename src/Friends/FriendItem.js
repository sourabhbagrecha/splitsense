import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { PersonOutline } from '@material-ui/icons';
import { useTheme } from '@material-ui/core';
import ListItemLoader from '../Loaders/ListItemLoader';

function FriendItem(props) {
  const {friend, loading} = props
  const theme = useTheme();

  return (
    loading ?
    <ListItemLoader/>
    :
    <Link key={friend._id} to={`/friend/${friend._id}`} style={{textDecoration: 'none', color: 'black'}}>
      <ListItem divider>
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
    </Link>
  )
};

export default FriendItem
