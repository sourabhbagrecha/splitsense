import React, { useContext } from 'react';
import { Dialog, DialogTitle, DialogContent, FormControlLabel, Checkbox, TextField, Divider, Button, Avatar, makeStyles } from '@material-ui/core';
import { AddExpenseContext } from '../Contexts/addExpenseProvider';
import { PersonOutline } from '@material-ui/icons';
import { getName } from '../utils/userIdLocal';

const useStyles = makeStyles(theme => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    display: "inline-block"
  },
  avatarName: {
    position: 'relative',
    height: "100%"
  },
  avatarNameText: {
    margin: 0,
    position: 'absolute',
    top: '20%',
    msTransform: "translateY(-50%)",
    transform: "translateY(-50%)"
  },
  dialogTextField: {
    width: "30%",
    float: "right"
  },
}))

function PaidByDialog(props) {
  const { setPaidBy, paidBy, paidByDialog, togglePaidByDialog} = useContext(AddExpenseContext);
  const { handleShareChange, handleDialogClose} = props;
  const classes = useStyles();
  const labelThings = (name, picture) => 
  <>
    <Avatar className={classes.small} src={picture}>
      <PersonOutline />
    </Avatar>
    <span className={classes.avatarName}>
      <span className={classes.avatarNameText}>
        {name}
      </span>
    </span>
  </>;
  const togglePaidByEnabled = (user) => {
    const newPaidBy = paidBy.map(p => {
      return p.user === user ? {...p, enabled: !p.enabled} : p;
    })
    setPaidBy(newPaidBy);
  }
  return (
    <>
      <Button 
        onClick={() => (togglePaidByDialog(true))} 
        color="secondary"
        style={{float: "right"}}
        variant="outlined"
      >
        Paid By: {paidBy.filter(v => v.enabled).length > 1 ? `${paidBy.filter(v => v.enabled).length} people` : "You"}
      </Button>
      <Dialog open={paidByDialog} className={classes.dialog} onClose={handleDialogClose} >
      <DialogTitle>Paid By:</DialogTitle>
      <DialogContent>
        {paidBy.map(({user, name, picture, enabled, amount}) => (
        <div key={user}>
          <div>
            <span>
              <FormControlLabel control={<Checkbox value={name} />} onChange={() => togglePaidByEnabled(user)} label={labelThings(getName(user, name), picture)} checked={enabled} />
            </span>
            <span>
              <TextField 
                inputProps={{personid: user, from: "paidBy"}}
                className={classes.dialogTextField} 
                value={amount === 0 ? '': amount} 
                onChange={handleShareChange} 
                variant="outlined" 
                size="small"
                label="Amt"
                disabled={!enabled}
              />
            </span>
          </div>
          <br/>
        </div>
        ))}
        <Divider/>
        <Button onClick={handleDialogClose}>Done</Button>
      </DialogContent>
    </Dialog>  
  </>
  )
};

export default PaidByDialog
