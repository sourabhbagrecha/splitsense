import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemAvatar, Avatar, ListItemText, useTheme } from '@material-ui/core';
import Axios from 'axios';
import { serverUrl } from '../utils/constants';
import { authHeader } from '../utils/authHeader';
import { Categories } from '../utils/categoriesData';
import { currencies } from '../utils/currencyData';
import ListItemLoader from '../Loaders/ListItemLoader';
import {  AccountBalanceWalletOutlined } from '@material-ui/icons';

function Entry(props) {
  const { refId, actType} = props;
  const theme = useTheme();
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchEntry();// eslint-disable-next-line
  }, []);
  const fetchEntry = async () => {
    const metaResponse = await Axios.get(`${serverUrl}/${actType}/${refId}/meta`, authHeader);
    console.log(metaResponse);
    setMeta(metaResponse.data.results);
    setLoading(false)
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
          primary={actType === "expense" ? meta.title : `${meta.from.name.full} paid ${meta.to.name.full}`}
          secondary={actType === "expense" ? `${currencies.find(c => c.code === meta.currency).symbol_native} ${meta.amount}` : meta.amount}
        />
      </ListItem>
    </Link>    
  )
}
export default Entry;