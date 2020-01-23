import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemAvatar, Avatar, ListItemText, useTheme } from '@material-ui/core';
import Axios from 'axios';
import { serverUrl } from '../constants';
import { authHeader } from '../utils/authHeader';
import { Categories } from '../categoriesData';
import { currencies } from '../currencyData';
import ListItemLoader from '../Loaders/ListItemLoader';

function Entry(props) {
  const {_id, refId, actType, operation} = props;
  const theme = useTheme();
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchEntry();
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
            {Categories.find(c => c.name === meta.category).icon}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={meta.title}
          secondary={`${currencies.find(c => c.code === meta.currency).symbol_native} ${meta.amount}`}
        />
      </ListItem>
    </Link>    
  )
}
export default Entry;