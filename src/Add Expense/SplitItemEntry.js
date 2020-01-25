import React, { useContext, useEffect } from 'react';
import { FormControlLabel, TextField, Checkbox, makeStyles, Avatar } from '@material-ui/core';
import { AddExpenseContext } from '../Contexts/addExpenseProvider';
import { PersonOutline } from '@material-ui/icons';
import { userId, getName } from '../utils/userIdLocal';

const useStyles = makeStyles(theme => ({
  dialogTextField: {
    width: "30%",
    float: "right"
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    display: "inline-block"
  },
  formControlAdditionalInfo: {
    width: '40%', 
    overflow: 'hidden'
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
  }
}));

function SplitItemEntry(props) {
  useEffect(() => {
    console.log(props);
  }, [])
  const { amount, enabled, percentage, share, splitMethod, handleShareChange, picture, user} = props;
  let name = getName(user, props.name);
  const {toggleSplitEnabled, splitEqually, splitUnequally, splitByPercentage, splitByShare, totalAmount, splitBetween, calculateShare, calculatePercentage} = useContext(AddExpenseContext);
  const classes = useStyles();
  const handleSplitUnequally = (e) => {
    const personId = e.target.getAttribute('personid');
    const amount = parseInt(e.target.value);
    splitUnequally(totalAmount, personId, amount)
  }
  const handleSplitByPercentage = (e) => {
    const personId = e.target.getAttribute('personid');
    const percentage = parseInt(e.target.value);
    splitByPercentage(totalAmount, personId, percentage)
  }
  const handleSplitByShare = (e) => {
    const personId = e.target.getAttribute('personid');
    const share = parseInt(e.target.value);
    splitByShare(totalAmount, personId, share)
  }
  useEffect(() => {
    switch (splitMethod) {
      case 'equally': splitEqually(totalAmount)
        break;
      case 'share': calculateShare(totalAmount);
        break;
      case 'percentage': calculatePercentage(totalAmount);
        break;
      case 'unequally' : console.log("Splitting unequally");
        break;
      default: console.log('No split method specified!')
        break;
    }
  }, [splitBetween, totalAmount, calculateShare, splitMethod, calculatePercentage, splitEqually]);
  const labelThings = 
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
  const percentageSplit = 
  <>
    <span>
        <FormControlLabel className={classes.formControlAdditionalInfo} control={<Checkbox size="medium" value={name} onChange={() => toggleSplitEnabled(user)} />} label={labelThings} checked={enabled} />
        <span style={{fontSize: '0.7rem'}}>{amount}</span>
    </span>
    <span>
      <TextField 
        type="number"
        inputProps={{personid: user}} 
        disabled={!enabled} 
        className={classes.dialogTextField} 
        value={percentage === 0 ? '': percentage}
        onChange={handleSplitByPercentage} 
        variant="outlined"  
        label="%age" 
        size="small"
      />
    </span>
    <br/><br/>
  </>;
  const equalSplit = 
  <>
    <span>
        <FormControlLabel control={<Checkbox size="medium" value={name} onChange={() => toggleSplitEnabled(user)} />} label={labelThings} checked={enabled} />
    </span>
    <span>
      <TextField 
        type="number"
        inputProps={{personid: user}} 
        disabled
        className={classes.dialogTextField} 
        value={amount === 0 ? '': amount}
        onChange={handleShareChange} 
        variant="outlined"  
        label="INR" 
        size="small"
      />
    </span>
    <br/><br/>
  </>;
  const shareSplit = 
  <>
    <span>
      <FormControlLabel className={classes.formControlAdditionalInfo} control={<Checkbox size="medium" value={name} onChange={() => toggleSplitEnabled(user)} />} label={labelThings} checked={enabled} />
      <span style={{fontSize: '0.7rem'}}>{amount}</span>
    </span>
    <span>
      <TextField 
        type="number"
        inputProps={{personid: user}} 
        disabled={!enabled} 
        className={classes.dialogTextField} 
        value={share === 0 ? '': share}
        onChange={handleSplitByShare} 
        variant="outlined"  
        label="Share"
        size="small"
      />
    </span>
    <br/><br/>
  </>;
  const unequalSplit = 
  <>
    <span>
        <FormControlLabel control={<Checkbox size="medium" value={name} onChange={() => toggleSplitEnabled(user)} />} label={labelThings} checked={enabled} />
    </span>
    <span>
      <TextField 
        type="number"
        inputProps={{personid: user}} 
        disabled={!enabled} 
        className={classes.dialogTextField} 
        value={amount === 0 ? '': amount}
        onChange={handleSplitUnequally} 
        variant="outlined"  
        label="INR" 
        size="small"
      />
    </span>
    <br/><br/>
  </>
  return (
    <>
      {splitMethod === 'percentage' && percentageSplit}
      {splitMethod === 'equally' && equalSplit}
      {splitMethod === 'unequally' && unequalSplit}
      {splitMethod === 'share' && shareSplit}
    </>
  )
}

export default SplitItemEntry
