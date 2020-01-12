import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useTheme, CssBaseline } from '@material-ui/core';
import Friends from '../Friends';
import SwipeableViews from 'react-swipeable-views';
import DrawerLeft from '../DrawerLeft';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{padding: 0}}
    >
      {value === index && <Box>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2.5)
  },
  tabPanelRoot: {
    marginTop: theme.spacing(0)
  },
  Container: {
    padding: '0px'
  }
}));

export default function Homepage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <DrawerLeft authProps={ props.authProps } >
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} variant="fullWidth">
            <Tab label="Friends" {...a11yProps(0)} />
            <Tab label="Groups" {...a11yProps(1)} />
            <Tab label="Activity" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel className={classes.tabPanelRoot} value={value} index={0}>
            <Friends/>
          </TabPanel>
          <TabPanel className={classes.tabPanelRoot} value={value} index={1}>
            <Friends/>
          </TabPanel>
          <TabPanel className={classes.tabPanelRoot} value={value} index={2}>
            <Friends/>
          </TabPanel>
        </SwipeableViews>
      </div>
    </DrawerLeft>
  );
}