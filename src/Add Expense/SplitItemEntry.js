import React, { useContext, useEffect } from 'react';
import { FormControlLabel, TextField, Checkbox, makeStyles } from '@material-ui/core';
import { AddExpenseContext } from '../Contexts/addExpenseProvider';

const useStyles = makeStyles(theme => ({
  dialogTextField: {
    width: "30%",
    float: "right"
  },
  formControlAdditionalInfo: {
    width: '40%', 
    overflow: 'hidden'
  }
}));

function SplitItemEntry(props) {
  const {id, person, amount, enabled, percentage, share, splitMethod, handleShareChange} = props;
  const {toggleSplitEnabled, splitEqually, splitUnequally, splitByPercentage, splitByShare, totalAmount, splitBetween, calculateShare, calculatePercentage} = useContext(AddExpenseContext);
  const classes = useStyles();
  const handleSplitUnequally = (e) => {
    const personId = e.target.getAttribute('personid');
    const amount = e.target.value;
    splitUnequally(totalAmount, personId, amount)
  }
  const handleSplitByPercentage = (e) => {
    const personId = e.target.getAttribute('personid');
    const percentage = e.target.value;
    splitByPercentage(totalAmount, personId, percentage)
  }
  const handleSplitByShare = (e) => {
    const personId = e.target.getAttribute('personid');
    const share = e.target.value;
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
      default: splitEqually(totalAmount);
        break;
    }
  }, [splitBetween, totalAmount, calculateShare, splitMethod, calculatePercentage, splitEqually])
  const percentageSplit = 
  <>
    <span>
        <FormControlLabel className={classes.formControlAdditionalInfo} control={<Checkbox size="medium" value={person} onChange={() => toggleSplitEnabled(id)} />} label={person} checked={enabled} />
        <span style={{fontSize: '0.7rem'}}>{amount}</span>
    </span>
    <span>
      <TextField 
        inputProps={{personid: id}} 
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
        <FormControlLabel control={<Checkbox size="medium" value={person} onChange={() => toggleSplitEnabled(id)} />} label={person} checked={enabled} />
    </span>
    <span>
      <TextField 
        inputProps={{personid: id}} 
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
      <FormControlLabel className={classes.formControlAdditionalInfo} control={<Checkbox size="medium" value={person} onChange={() => toggleSplitEnabled(id)} />} label={person} checked={enabled} />
      <span style={{fontSize: '0.7rem'}}>{amount}</span>
    </span>
    <span>
      <TextField 
        inputProps={{personid: id}} 
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
        <FormControlLabel control={<Checkbox size="medium" value={person} onChange={() => toggleSplitEnabled(id)} />} label={person} checked={enabled} />
    </span>
    <span>
      <TextField 
        inputProps={{personid: id}} 
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
