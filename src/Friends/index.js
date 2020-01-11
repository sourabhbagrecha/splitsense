import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { PersonOutline } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      width: "100vw"
    }
  }
}));

function generate(classes, theme) {
  return ['Amay', 'Prit', 'Harit', 'Shubham', 'Tushar', 'Simran', 'Saloni', 'Sundar Pichai'].map(value =>
    <Link to={`/friend/${value}`} className={classes.friend} style={{textDecoration: 'none', color: 'black'}}>
      <ListItem style={{borderTop: "1px solid grey"}}>
        <ListItemAvatar>
          <Avatar style={{color: "white", backgroundColor: theme.palette.secondary.main}}>
            <PersonOutline />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={value}
          secondary="You owe nothing"
        />
      </ListItem>
    </Link>
  );
}

export default function Friends() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <Typography variant="h6" style={{paddingLeft: theme.spacing(2)}}>
        You owe: $249,<br/>
        You are owed: $100
      </Typography>
      <div className={classes.demo}>
        <List>
          {generate(classes, theme)}
        </List>
      </div>
    </div>
  );
}
