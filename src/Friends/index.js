import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  friend: {
    textDecoration: 'none'
  }
}));

function generate(classes) {
  return ['Amay', 'Prit', 'Harit', 'Shubham', 'Tushar', 'Simran', 'Saloni', 'Sundar Pichai'].map(value =>
    <Link to={`/friend/${value}`} className={classes.friend}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={value}
          secondary={value.toLowerCase()}
        />
      </ListItem>
    </Link>
  );
}

export default function Friends() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid>
        <Typography variant="h6">
          You owe: $249,<br/>
          You are owed: $100
        </Typography>
        <div className={classes.demo}>
          <List>
            {generate(classes)}
          </List>
        </div>
      </Grid>
    </div>
  );
}
