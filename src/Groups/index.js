import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { PersonOutline, Add } from '@material-ui/icons';
import { Fab } from '@material-ui/core';

const useStyles = makeStyles(theme => ({}));

function generate(classes, theme) {
  return ['Amay', 'Prit', 'Harit', 'Shubham', 'Tushar', 'Simran', 'Saloni', 'Sundar Pichai', 'Amay', 'Prit', 'Harit', 'Shubham', 'Tushar', 'Simran', 'Saloni', 'Sundar Pichai'].map(friend =>
    <Link to={`/friend/${friend}`} className={classes.friend} style={{textDecoration: 'none', color: 'black'}}>
      <ListItem style={{borderTop: "1px solid #cfcdc8"}}>
        <ListItemAvatar>
          <Avatar style={{color: "white", backgroundColor: theme.palette.secondary.main}}>
            <PersonOutline />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={friend}
          secondary="You owe nothing"
        />
      </ListItem>
    </Link>
  );
}

function Groups(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.groups}>
      <Typography variant="h6" style={{paddingLeft: theme.spacing(2)}}>
        You owe: $249,<br/>
        You are owed: $100
      </Typography>
      <div className={classes.demo}>
        <List>
          {generate(classes, theme)}
        </List>
      </div>
      <Fab className={classes.addIcon} color="primary" size="large" aria-label="add" onClick>
        <Add />
      </Fab>
    </div>    
  )
};

export default Groups
