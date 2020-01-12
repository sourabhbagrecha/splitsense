import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemAvatar, Avatar, ListItemText, useTheme } from '@material-ui/core';

function ExpenseEntry(props) {
  const {id, title, amount, icon} = props
  const theme = useTheme();
  return (
  <Link to={`/expense/${id}`} style={{textDecoration: 'none', color: 'black'}}>
    <ListItem style={{borderTop: "1px solid #cfcdc8"}}>
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
export default ExpenseEntry;