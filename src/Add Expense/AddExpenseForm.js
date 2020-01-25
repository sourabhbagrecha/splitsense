import React, { useContext } from 'react';
import { Container, CssBaseline, makeStyles, Avatar, Typography, TextField, Button, Checkbox, FormControlLabel, Dialog, DialogContent, Divider, DialogTitle, MenuItem, Grid } from '@material-ui/core';
import { PieChart } from '@material-ui/icons';
import {splitNames, serverUrl} from '../constants.js';
import SplitDialog from './SplitDialog.js';
import { AddExpenseContext } from '../Contexts/addExpenseProvider';
import Axios from 'axios';
import { currencies } from '../currencyData.js';
import { Categories } from '../categoriesData.js';
import { AlertContext } from '../Contexts/AlertContext.js';
import { authHeader } from '../utils/authHeader.js';
import PaidByDialog from './PaidByDialog.js';

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
  },
  currencySelect: {
    width: 40
  },
  categorySelect: {
    ".MuiSelect-selectMenu": {
      padding: 0
    }
  }
}));

function AddExpenseForm(props) {
  const {history} = props;
  const {setAlert} = useContext(AlertContext);
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
    setCurrency,
    splitMethod,
    setCategory,
    totalAmount, 
    setPaidBy,
    editMode,
    category,
    currency,
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
      if(s.user === personId) {
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
  const urlParams = () => {
    console.log(props);
    if(props.group){
      return `/group/${props.match.params.groupId}`
    } else if(props.friend){
      return `/friend/${props.match.params.friendId}`
    } else {
      return ``
    }
  }
  const handleSave = async () => {
      try {
        const expenseResponse = await Axios.post(`${serverUrl}${urlParams()}/expense/new`, {title, amount: totalAmount, category, currency, description: "Healthy", splitBy: splitBetween, paidBy, createdBy: 'Sourabh', splitMethod}, authHeader);
        console.log("ding ding ding ding:::>>>", expenseResponse.data);
        setAlert(true, "Expense Added", "success");
        history.push(`/expense/${expenseResponse.data.expense._id}`)
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
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                onChange={handleTitleChange} required
                label="Expense Title" autoFocus
                variant="outlined" fullWidth
                id="title"
                value={title} type="text"
                name="title"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Category"
                value={category}
                onChange={setCategory}
                variant="outlined"
              >
                {Categories.map(category => (
                  <MenuItem key={category.name} value={category.name}>
                    <div style={{display: "flex"}}><Avatar sizes="small" variant="rounded">{category.icon}</Avatar> <span style={{margin: "auto 0 auto 1rem"}}>{`${category.name}`}</span></div>
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <TextField
                fullWidth
                select
                label="currency"
                value={currency}
                onChange={setCurrency}
                variant="outlined" margin="normal"
              >
                {currencies.map(currency => (
                  <MenuItem key={currency.code} value={currency.code}>
                    {`${currency.symbol_native} ${currency.code} ${currency.name}`}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs>
              <TextField
                value={totalAmount === 0 ? "" : totalAmount} name="amount"
                onChange={updateAmount} required
                variant="outlined" fullWidth
                label="Amount" type="number"
                margin="normal" id="amount"
              />
            </Grid>
          </Grid>
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
            <PaidByDialog paidByDialog={paidByDialog} classes={classes} paidBy={paidBy} handleShareChange={handleShareChange} handleDialogClose={handleDialogClose} />
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
