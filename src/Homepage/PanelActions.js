import React from 'react';
import { Zoom, Fab, makeStyles } from '@material-ui/core';
import { PersonAddOutlined, ReceiptOutlined, Add, GroupAddOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  firstIcon: {
    float: "right"
  },
  secondIcon: {
    float: "right", 
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));
function PanelActions(props) {
  const {value} = props;
  const classes = useStyles();
  return (
    <>
      {
        value === 0 && 
        <Zoom in>
          <div>
            <Link to="/friend/new">
              <Fab className={classes.firstIcon}  color="primary" size="large" aria-label="add" >
                <PersonAddOutlined />
              </Fab>
            </Link>
            <br/>
            <Link to="/expense/new">
              <Fab className={classes.secondIcon} variant='extended' color="secondary" size="large" aria-label="add" >
                <Add/> <ReceiptOutlined />
              </Fab>
            </Link>
          </div>
        </Zoom>
      }
      {
        value === 1 && 
        <Zoom in>
          <div>
            <Link to="/group/new">
              <Fab className={classes.firstIcon} color="primary" size="large" aria-label="add" >
                <GroupAddOutlined />
              </Fab>
            </Link>
            <br/>
            <Link to="/expense/new">
              <Fab className={classes.secondIcon} variant='extended' color="secondary" size="large" aria-label="add" >
                <Add/> <ReceiptOutlined />
              </Fab>
            </Link>
          </div>
        </Zoom>
      }
      {
        value === 2 && 
        <Zoom in>
          <Link to="/expense/new">
            <Fab variant='extended' className={classes.firstIcon} color="secondary" size="large" aria-label="add" >
              <Add/> <ReceiptOutlined />
            </Fab>
          </Link>
        </Zoom>
      }
    </>    
  )
}

export default PanelActions
