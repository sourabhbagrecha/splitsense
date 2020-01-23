import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

function ListItemLoader(props) {
  const {} = props

  return (
      <ListItem divider>
        <ListItemAvatar>
          <Avatar>
            <Skeleton variant="circle" width={40} height={40} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Skeleton variant="text" width={100} height={25} />
          <Skeleton variant="text" width={100} height={15} />
        </ListItemText>
      </ListItem>  
  )
};

export default ListItemLoader;