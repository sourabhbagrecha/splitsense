import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import GoogleSignInButton from './GoogleSignInButton';
import { useLocalStorageState } from '../Hooks/useLocalStorageState';
import { HomeOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function DrawerLeft(props) {
  const classes = useStyles();
  const {authProps} = props;
  const [userLocal, setUserLocal] = useLocalStorageState("user");
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
          <ListItem>
            <GoogleSignInButton  {...authProps}  setUserLocal={setUserLocal} userLocal={userLocal} />
          </ListItem>
      </List>
      <Divider />
      <List>
        <Link to="/" style={{textDecoration: "none"}}>
          <ListItem button key="Home">
            <ListItemIcon> <HomeOutlined/> </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer('left', true)}
            edge="start"
            className={clsx(classes.menuButton, state.left && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            SplitSense
          </Typography>
        </Toolbar>
      </AppBar>
      <Button onClick={toggleDrawer('left', true)}>Open Left</Button>
      {props.children}
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>
    </div>
  );
}