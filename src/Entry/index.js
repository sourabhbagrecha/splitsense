import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';

function Entry(props) {
  const {title, amount, icon} = props

  return (
  <Link to={`/friend/`}>
    <ListItem style={{backgroundColor: "#abc4e0", border: "1px solid white", textDecoration: 'none'}}>
      <ListItemAvatar>
        <Avatar>
          {icon}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={amount}
      />
    </ListItem>
  </Link>
    
  )
}
export default Entry;