import React, {useEffect, useState} from 'react';
import { List } from '@material-ui/core';
import Axios from 'axios';
import { serverUrl } from '../utils/constants';
import { authHeader } from '../utils/authHeader';
import ActivityItem from './ActivityItem';

function Activities(props) {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("Mounted!");
    loadActivities();
  }, []);
  const loadActivities = async () => {
    try {
      const response = await Axios.get(`${serverUrl}/activity/fetch-all`, authHeader)
      console.log(response);
      setActivities(response.data.activities);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    !loading && 
    <div>
      <List>
        {
          activities.map(a => <ActivityItem {...a} by='5e32e5b544f7943db84fd56e' />)
        }
      </List>
    </div>
  )
};

export default Activities;
