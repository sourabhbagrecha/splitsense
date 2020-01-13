import React, { useContext } from 'react';
import { Container, CssBaseline, makeStyles, Avatar, Typography, TextField, Button, Checkbox, FormControlLabel, Dialog, DialogContent, Divider, DialogTitle } from '@material-ui/core';
import { PieChart } from '@material-ui/icons';
import {splitNames} from '../constants.js';
import SplitDialog from './SplitDialog.js';
import { AddExpenseContext } from '../Contexts/addExpenseProvider';
import UserContext from '../Contexts/userContext.js';
import firebase from '../firebaseConfig';
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
  console.log(useContext(UserContext))
  const {history} = props;
  const classes = useStyles();
  const {
    handleSplitMethodChange,
    togglePaidByDialog,
    toggleSplitEnabled, 
    handleAmountChange, 
    handleTitleChange,
    toggleSplitDialog,
    splitBetween,
    paidByDialog, 
    resetValues, 
    splitMethod,
    totalAmount, 
    setPaidBy,
    editMode,
    paidBy,
    title,
    } = useContext(AddExpenseContext);
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
  const handleSave = async () => {
      try {
        const db = firebase.firestore();
        const dbFun = await db.collection('expenses').add({title, amount: totalAmount, category: "groceries", currency: "INR", description: "Healthy", splitBetween, paidBy: [], createdBy: 'Sourabh', splitMethod});
        history.push(`/expense/${dbFun.id}`)
      } catch (error) {
        console.error(error)
      }
  }
  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PieChart />
        </Avatar>
        <Typography component="h1" variant="h5">
          {editMode ? "Edit Expense" : "Add Expense"}
        </Typography>
        <form className={classes.form}>
          <TextField
            onChange={handleTitleChange} required
            label="Expense Title" autoFocus
            variant="outlined" fullWidth
            margin="normal" id="title"
            value={title} type="text"
            name="title"
          />
          <TextField
            value={totalAmount} name="amount"
            onChange={updateAmount} required
            variant="outlined" fullWidth
            label="Amount" type="number"
            margin="normal" id="amount"
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
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSave}
          >
            Save
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default AddExpenseForm
