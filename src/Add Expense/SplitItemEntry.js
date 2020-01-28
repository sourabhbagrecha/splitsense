import React, { useContext, useEffect } from 'react';
import { FormControlLabel, TextField, Checkbox, makeStyles, Avatar } from '@material-ui/core';
import { AddExpenseContext } from '../Contexts/addExpenseProvider';
import { PersonOutline } from '@material-ui/icons';
import { getName } from '../utils/userIdLocal';

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
  }, [ totalAmount, calculateShare, splitMethod, calculatePercentage, splitEqually]);
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
  const textFieldLabel = {
    "equally": "INR",
    "unequally": "INR",
    "share": "Share",
    "percentage": "%age",
  };
  
  const onChangeTextField = {
    "equally": handleShareChange,
    "unequally": handleSplitUnequally,
    "share": handleSplitByShare,
    "percentage": handleSplitByPercentage, 
  }
  
  const textFieldDisabled = {
    "equally": true,
    "unequally": !enabled,
    "share": !enabled,
    "percentage": !enabled,
  }
  
  const textFieldValue = {
    "equally": amount,
    "unequally": amount,
    "share": share,
    "percentage": percentage,
  }
  
  const secondaryAmountField = {
    "equally": false,
    "unequally": false,
    "share": true,
    "percentage": true,
  }
  return (
    <>
    <span>
        { secondaryAmountField[splitMethod] ?
          <>
            <FormControlLabel className={classes.formControlAdditionalInfo} control={<Checkbox size="medium" value={name} onChange={() => toggleSplitEnabled(user)} />} label={labelThings} checked={enabled} />
            <span style={{fontSize: '0.7rem'}}>{amount}</span>
          </>
          :
          <FormControlLabel control={<Checkbox size="medium" value={name} onChange={() => toggleSplitEnabled(user)} />} label={labelThings} checked={enabled} />
        }
    </span>
    <span>
      <TextField 
        type="number"
        inputProps={{personid: user}} 
        disabled={textFieldDisabled[splitMethod]} 
        className={classes.dialogTextField} 
        value={textFieldValue[splitMethod] === 0 ? '': textFieldValue[splitMethod]}
        onChange={onChangeTextField[splitMethod]} 
        variant="outlined"  
        label={textFieldLabel[splitMethod]} 
        size="small"
      />
    </span>
    <br/><br/>
  </>
  )
}

export default SplitItemEntry;