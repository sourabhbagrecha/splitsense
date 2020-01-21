import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemAvatar, Avatar, ListItemText, useTheme } from '@material-ui/core';

function SplitEntry(props) {
  // const {id, person, amount, icon} = props
  const {id, amount, icon} = props
  const theme = useTheme();
  return (
  <Link to={`/friend/${id}`} style={{textDecoration: 'none', color: 'black'}}>
    <ListItem style={{borderBottom: "1px solid #cfcdc8"}}>
      <ListItemAvatar>
        <Avatar style={{backgroundColor: theme.palette.primary.main}}>
          {icon}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        style={{textDecoration: 'none'}}
        primary={"Sourabh"}
        secondary={amount}
      />
    </ListItem>
  </Link>
    
  )
}
export default SplitEntry;