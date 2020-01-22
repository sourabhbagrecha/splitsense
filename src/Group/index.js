import React, { useEffect, useState } from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import Axios from 'axios';
import { serverUrl } from '../constants';
import { authHeader } from '../utils/authHeader';
import GroupHeader from './GroupHeader';
import GroupBody from './GroupBody';

function Group(props) {
  const {id} = props.match.params;
  const [loading, setLoading] = useState(true);
  const [group, setGroup] = useState({});
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetchGroup();
    //eslint-disable-next-line
  }, []);
  const fetchGroup = async () => {
    const response = await Axios.get(`${serverUrl}/group/${id}`, authHeader);
    console.log("::::::::::::>>>>>>>", response);
    setGroup(response.data.group);
    setActivities(response.data.activities);
    setLoading(false);
  }

  return ( 
    <Container style={{padding: 0}} maxWidth="xs">
      <CssBaseline />
      {!loading && <GroupHeader group={group} history={props.history} />}
      {!loading && <GroupBody activities={activities} />}
    </Container>
  )
}

export default Group;