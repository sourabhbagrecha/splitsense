import React, { useEffect, useState } from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import Axios from 'axios';
import GroupBody from './GroupBody';
import GroupHeader from './GroupHeader';
import { userId } from '../utils/userIdLocal';
import { serverUrl } from '../constants';
import { authHeader } from '../utils/authHeader';

function Group(props) {
  const {id} = props.match.params;
  const [loading, setLoading] = useState(true);
  const [group, setGroup] = useState({});
  const [activities, setActivities] = useState([]);
  const [balanceSelf, setBalanceSelf] = useState(0);
  useEffect(() => {
    fetchGroup();
    //eslint-disable-next-line
  }, []);
  const fetchGroup = async () => {
    try {
      const response = await Axios.get(`${serverUrl}/group/${id}`, authHeader);
      const {group} = response.data;
      console.log("::::::::::::>>>>>>>", group.balances.find(b => b.user._id === userId));
      const balanceSelf = group.balances.find(b => b.user._id === userId).balance ;
      setGroup(group);
      setBalanceSelf(balanceSelf);
      setActivities(response.data.activities);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return ( 
    <Container style={{padding: 0}} maxWidth="xs">
      <CssBaseline />
      <GroupHeader loading={loading} group={group} balanceSelf={balanceSelf} history={props.history} />
      <GroupBody activities={activities} />
    </Container>
  )
}

export default Group;