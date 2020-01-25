import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemAvatar, Avatar, ListItemText, useTheme } from '@material-ui/core';
import { PersonOutline } from '@material-ui/icons';
import { getName } from '../utils/userIdLocal';

function Entry(props) {
  const {amount} = props
  const {_id, name, picture} = props.user;
  const theme = useTheme();
  return (
  <Link to={`/person/${_id}`} style={{textDecoration: 'none', color: 'black'}}>
    <ListItem style={{borderBottom: "1px solid #cfcdc8"}}>
      <ListItemAvatar>
        <Avatar src={picture} style={{backgroundColor: theme.palette.primary.main}}>
          <PersonOutline />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={getName(_id, name.full)}
        secondary={amount}
      />
    </ListItem>
  </Link>
    
  )
}
export default Entry;