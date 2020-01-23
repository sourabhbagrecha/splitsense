import React from 'react';
import Entry from './Entry';

function GroupBody(props) {
  const {activities} = props;

  const renderBody = activities.map(a => <Entry key={a._id} {...a} />);
  return (
    renderBody
  )
};

export default GroupBody
