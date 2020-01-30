import React, { useEffect, useState } from 'react';
import { Container, CssBaseline, Typography, makeStyles, CircularProgress, Input, TextField, Button } from '@material-ui/core';
import Axios from 'axios';
import { serverUrl } from '../constants';
import { getParams } from '../utils/getParams';
import { authHeader } from '../utils/authHeader';
import ArrowDownAnimated from '../SvgHelpers/ArrowDown';
import UserCard from './UserCard';
import { SaveAlt, Save } from '@material-ui/icons';

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
  let {from, to, balance} = getParams(search);
  console.log(from, to)
  const [amount, setAmount] = useState(balance);
  const classes = useStyles();
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
            <TextField label="Amount" value={amount > 0 ? amount : ""} fullWidth variant="outlined" />
          </div>
          <div className={classes.inputBasics}>
            <Button fullWidth variant="contained" color="secondary" startIcon={<Save />}>
              Save
            </Button>
          </div>
        </>
    </Container>
  )
};

export default AddPayment;
