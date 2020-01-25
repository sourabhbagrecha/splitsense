import React from 'react';
import { Typography, Avatar, useTheme } from '@material-ui/core';
import { HomeOutlined } from '@material-ui/icons';
import Stack from './Stack';

function About(props) {
  const theme = useTheme();
  return (
    <>
      <div style={{color: 'white', backgroundColor: theme.palette.primary.main, padding: '1rem'}}>
        <div style={{display: "flex"}}>
          <Avatar variant="rounded" style={{backgroundColor: theme.palette.secondary.main, height: "4rem", width: "4rem", fontSize: "3rem" }} >
            <HomeOutlined/>
          </Avatar>
          <div style={{margin: "auto 0 auto 1rem"}}>
            <Typography variant="h4">
              About SplitSense
            </Typography>
          </div>
        </div>
      </div>
      <Stack/>
    </>
  )
}
export default About;