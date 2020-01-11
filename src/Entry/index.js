import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemAvatar, Avatar, ListItemText, useTheme } from '@material-ui/core';

function Entry(props) {
  const {title, amount, icon} = props
  const theme = useTheme();
  return (
  <Link to={`/friend/`} style={{textDecoration: 'none', color: 'black'}}>
    <ListItem style={{borderTop: "1px solid grey"}}>
      <ListItemAvatar>
        <Avatar style={{backgroundColor: theme.palette.primary.main}}>
          {icon}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        style={{textDecoration: 'none'}}
        primary={title}
        secondary={amount}
      />
    </ListItem>
  </Link>
    
  )
}
export default Entry;