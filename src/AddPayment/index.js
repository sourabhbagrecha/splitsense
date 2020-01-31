import React, { useState } from 'react';
import { Container, CssBaseline, Typography, makeStyles, TextField, Button } from '@material-ui/core';
import Axios from 'axios';
import { serverUrl } from '../utils/constants';
import { getParams } from '../utils/getParams';
import { authHeader } from '../utils/authHeader';
import ArrowDownAnimated from '../SvgHelpers/ArrowDown';
import UserCard from './UserCard';
import { Save } from '@material-ui/icons';

const useStyles = makeStyles(theme =>({
  title: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(3),
    margin: "0 -10px",
    color: "white",
  },
  arrowAnimation: {
    margin: "-20px auto 120px auto",
    position: "relative"
  },
  inputBasics: {
    margin: "1rem auto",
    width: "75%"
  },
}))

function AddPayment(props) {
  const { search } = props.location;
  const { history } = props;
  let {from, to, belongsTo, belongsType} = getParams(search);
  const [amount, setAmount] = useState(getParams(search).amount);
  const classes = useStyles();
  const handleSave = async e => {
    try {
      e.preventDefault();
      const {payment} = (await Axios.post(`${serverUrl}/payment/new`, {from, to, amount, belongsTo, belongsType}, authHeader)).data;
      history.push(`/payment/${payment._id}`);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container style={{padding: 0}} maxWidth="xs">
      <CssBaseline/>
        <>
          <Typography className={classes.title} component="h1" variant="h5">Record Cash Payment</Typography>
          <UserCard user={from}/>
          <div className={classes.arrowAnimation}>
            <ArrowDownAnimated/>
          </div>
          <UserCard user={to}/>
          <div className={classes.inputBasics}>
            <TextField label="Amount" value={amount > 0 ? amount : ""} onChange={e => setAmount(e.target.value)} fullWidth variant="outlined" />
          </div>
          <div className={classes.inputBasics}>
            <Button 
              fullWidth 
              color="secondary" 
              variant="contained" 
              startIcon={<Save />}
              onClick={handleSave}
            >
              Save
            </Button>
          </div>
        </>
    </Container>
  )
};

export default AddPayment;
