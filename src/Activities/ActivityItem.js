import React, { useState, useEffect } from 'react';
import ListItemLoader from '../Loaders/ListItemLoader';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { ListItem, ListItemAvatar, Avatar, useTheme, ListItemText } from '@material-ui/core';
import { AccountBalanceWalletOutlined } from '@material-ui/icons';
import {  Categories  } from '../utils/categoriesData';
import { authHeader  } from '../utils/authHeader';
import { currencies } from '../utils/currencyData';
import { serverUrl } from '../utils/constants';
import { findVerb } from '../utils/activityVerbs';

function ActivityItem(props) {
  const {actType, operation, by, refId} = props;
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState();
  const [meta, setMeta] = useState();
  const theme = useTheme();

  useEffect(() => {
    loadActivity();// eslint-disable-next-line
  }, []);
  const loadActivity = async () => {
    const metaResponse = await Axios.get(`${serverUrl}/${actType}/${refId}/meta`, authHeader);
    setMeta(metaResponse.data.results);
    const personResponse = await Axios.get(`${serverUrl}/user/get-meta/${by}`, authHeader);
    setPerson(personResponse.data.user);
    setLoading(false);
  }
  return (
    loading ?
    <ListItemLoader/>
    :
    <Link to={`/${actType}/${meta._id}`} style={{textDecoration: 'none', color: 'black'}}>
      <ListItem divider>
        <ListItemAvatar>
          <Avatar style={{backgroundColor: theme.palette.primary.main}}>
          { actType === 'expense' ? Categories.find(c => c.name === meta.category).icon : <AccountBalanceWalletOutlined/>}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={actType === "expense" ? `${person.name.full} ${findVerb(operation)} ${meta.title}` : `${meta.from.name.full} paid ${meta.to.name.full}`}
          secondary={actType === "expense" ? `${currencies.find(c => c.code === meta.currency).symbol_native} ${meta.amount}` : meta.amount}
        />
      </ListItem>
    </Link>
  )
};

export default ActivityItem
