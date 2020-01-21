import React, { useContext, useEffect } from 'react';
import { FormControlLabel, TextField, Checkbox, makeStyles, Avatar } from '@material-ui/core';
import { AddExpenseContext } from '../Contexts/addExpenseProvider';
import { PersonOutline } from '@material-ui/icons';

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
  const {_id, name, amount, enabled, percentage, share, splitMethod, handleShareChange, picture} = props;
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
        <FormControlLabel className={classes.formControlAdditionalInfo} control={<Checkbox size="medium" value={name} onChange={() => toggleSplitEnabled(_id)} />} label={labelThings} checked={enabled} />
        <span style={{fontSize: '0.7rem'}}>{amount}</span>
    </span>
    <span>
      <TextField 
        inputProps={{personid: _id}} 
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
        <FormControlLabel control={<Checkbox size="medium" value={name} onChange={() => toggleSplitEnabled(_id)} />} label={labelThings} checked={enabled} />
    </span>
    <span>
      <TextField 
        inputProps={{personid: _id}} 
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
      <FormControlLabel className={classes.formControlAdditionalInfo} control={<Checkbox size="medium" value={name} onChange={() => toggleSplitEnabled(_id)} />} label={labelThings} checked={enabled} />
      <span style={{fontSize: '0.7rem'}}>{amount}</span>
    </span>
    <span>
      <TextField 
        inputProps={{personid: _id}} 
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
        <FormControlLabel control={<Checkbox size="medium" value={name} onChange={() => toggleSplitEnabled(_id)} />} label={labelThings} checked={enabled} />
    </span>
    <span>
      <TextField 
        inputProps={{personid: _id}} 
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
