import React from 'react';
import ListItemLoader from '../Loaders/ListItemLoader';
import { ListItem, ListItemAvatar, Avatar, ListItemText, useTheme } from '@material-ui/core';
import { GroupOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

function GroupItem(props) {
  const theme = useTheme();
  const {group, loading} = props;

  return (
    loading ?
    <ListItemLoader/>
    :
    <>
      <Link to={`/group/${group._id}`} style={{textDecoration: 'none', color: 'black'}}>
        <ListItem divider>
          <ListItemAvatar>
            <Avatar style={{color: "white", backgroundColor: theme.palette.secondary.main}} src={group.picture}>
              <GroupOutlined />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={group.name}
            secondary="You owe nothing"
          />
        </ListItem>
      </Link>
    </>
  )
}

export default GroupItem
