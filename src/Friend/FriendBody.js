import React from 'react';
import Entry from './Entry';
import { Divider } from '@material-ui/core';

function FriendBody(props) {
  const {activities} = props;

  const renderBody = activities.map(a => <Entry key={a._id} {...a} />);
  return (
    renderBody
  )
};

export default FriendBody
