import React, { useEffect, useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Axios from 'axios';
import { serverUrl } from '../utils/constants';
import { authHeader } from '../utils/authHeader';
import GroupItem from './GroupItem';

function Groups(props) {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [groups, setGroups] = useState([0]);
  useEffect(() => {fetchGroups()}, []);
  const fetchGroups = async () => {
    const response = await Axios.get(`${serverUrl}/group/fetch-all`, authHeader );
    console.log(response);
    setGroups(response.data.groups);
    setLoading(false);
  }
  return (
    <>
      <Typography variant="h6" style={{paddingLeft: theme.spacing(2)}}>
        You owe: $249,<br/>
        You are owed: $100
      </Typography>
      <div>
        <List>
          {groups.map((group) =>
            <GroupItem group={group} loading={loading} />
          )}
        </List>
      </div>
    </>
  );
}

export default Groups;