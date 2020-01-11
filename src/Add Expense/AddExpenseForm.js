import React, { useState, useContext } from 'react';
import { Container, CssBaseline, makeStyles, Avatar, Typography, TextField, Button, Checkbox, FormControlLabel, Dialog, DialogContent, Divider, DialogTitle } from '@material-ui/core';
import { PieChart } from '@material-ui/icons';
import {splitNames} from '../constants.js'
import useInputState from '../Hooks/useInputState';
import SplitDialog from './SplitDialog.js';
import { SplitBetweenContext } from '../Contexts/splitBetweenProvider.js';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  dialogTextField: {
    width: "30%",
    float: "right"
  }
}));

function AddExpenseForm(props) {  
  const classes = useStyles();
  const [title, handleTitleChange] = useInputState("");
  const [splitMethod, handleSplitMethodChange] = useInputState("equally");
  const [paidBy, setPaidBy] = useState([{ id: '5bed12234', person: "Amay", amount: 0, enabled: false }, { id: '5bed12245', person: "Harit", amount: 0, enabled: false }, { id: '5bed12278', person: "Shubham", amount: 0, enabled: false }, { id: '5bed12290', person: "Prit", amount: 0, enabled: false }]);
  const {splitBetween, toggleSplitEnabled, resetValues, totalAmount, handleAmountChange} = useContext(SplitBetweenContext);
  const [paidByDialog, togglePaidByDialog] = useState(false);
  const [splitDialogOpen, toggleSplitDialog] = useState(false);
  const handleDialogClose = () => {
    toggleSplitDialog(false);
    togglePaidByDialog(false);
    return true;
  }
  const handleShareChange = e => {
    const personId = e.target.getAttribute('personid');
    const from = e.target.getAttribute('from');
    const amount = e.target.value;
    const updateFunction = s => {
      if(s.id === personId) {
        return {...s, amount: amount};
      }
      return s;
    };
    if(from === 'paidBy'){
      setPaidBy(paidBy.map(updateFunction))
    }
  }
  const updateSplitMethod = (e) => {
    resetValues();
    handleSplitMethodChange(e);
  }
  const updateAmount = (e) => {
    handleAmountChange(e);
  }
  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PieChart />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Expense
        </Typography>
        <form className={classes.form}>
          <TextField
            onChange={handleTitleChange}
            label="Expense Title"
            variant="outlined"
            margin="normal"
            value={title}
            name="title"
            type="text"
            id="title"
            fullWidth
            autoFocus
            required
          />
          <TextField
            onChange={updateAmount}
            variant="outlined"
            margin="normal"
            label="Amount"
            value={totalAmount}
            name="amount"
            type="number"
            id="amount"
            fullWidth
            required
          />
          <>
            <Button 
              onClick={() => (toggleSplitDialog(true))}
              color="secondary"
              variant="outlined"
            >
              Split {splitNames.find(({value})=> value === splitMethod).display}
            </Button>
            <SplitDialog 
              handleSplitMethodChange={updateSplitMethod} 
              handleDialogClose={handleDialogClose} 
              handleShareChange={handleShareChange} 
              splitDialogOpen={splitDialogOpen}  
              splitMethod={splitMethod} 
              splitNames={splitNames} 
              splitBetween={splitBetween} 
              toggleSplitEnabled={toggleSplitEnabled} 
            />
            <Button 
              onClick={() => (togglePaidByDialog(true))} 
              color="secondary"
              style={{float: "right"}}
              variant="outlined"
            >
              Paid By: You
            </Button>
            <Dialog open={paidByDialog} className={classes.dialog} onClose={handleDialogClose} >
              <DialogTitle>Paid By:</DialogTitle>
              <DialogContent>
                {paidBy.map(({id, person, amount, enabled}) => (
                <div key={id}>
                  <div>
                    <span>
                      <FormControlLabel control={<Checkbox value={person} />} label={person} checked={enabled} />
                    </span>
                    <span>
                      <TextField 
                        inputProps={{personid: id, from: "paidBy"}}
                        className={classes.dialogTextField} 
                        value={amount === 0 ? '': amount} 
                        onChange={handleShareChange} 
                        variant="standard" 
                        size="small"
                        label="Amt"
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default AddExpenseForm
