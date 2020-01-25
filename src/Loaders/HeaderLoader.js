import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { Typography, Avatar, useTheme } from '@material-ui/core';

function HeaderLoader(props) {
  const theme = useTheme();
  return (
    <div style={{color: 'white', backgroundColor: theme.palette.primary.main, padding: '1rem'}}>
      <div style={{display: "flex"}}>
        <Avatar variant="rounded" style={{backgroundColor: theme.palette.secondary.main, height: "4rem", width: "4rem"}} >
          <Skeleton animation="wave" variant="rect" width={70} height={70} />
        </Avatar>
        <div style={{margin: "auto 0 auto 1rem"}}>
          <Typography variant="h5">
            <Skeleton animation="wave" variant="text" width={250} height={60} />
          </Typography>
          <Typography variant="caption">
            <Skeleton animation="wave" variant="text" width={250} height={25} />
          </Typography>
        </div>
      </div>
      <Typography variant="subtitle1">
        <Skeleton animation="wave" variant="text" width={250} height={20} />
      </Typography>
    </div>
  )
};

export default HeaderLoader;
