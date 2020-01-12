import React, { useContext } from 'react'
import { Dialog, DialogTitle, DialogContent, FormControl, InputLabel, Select, MenuItem, Divider, Button } from '@material-ui/core';
import SplitItemEntry from './SplitItemEntry';
import { AddExpenseContext } from '../Contexts/addExpenseProvider';

function SplitDialog(props) {
  const {handleSplitMethodChange, handleDialogClose, handleShareChange} = props
  const {splitBetween, toggleSplitEnabled, splitDialogOpen, splitMethod, splitNames} = useContext(AddExpenseContext);
  

  return (
    <Dialog open={splitDialogOpen} onClose={handleDialogClose} >
      <DialogTitle>Split Between</DialogTitle>
      <DialogContent>
      <FormControl fullWidth variant="outlined">
        <InputLabel>Split Method</InputLabel>
        <Select
          onChange={handleSplitMethodChange}
          value={splitMethod}
          labelWidth={100}
        >
          {splitNames.map(s => <MenuItem key={s.value} value={s.value}>{s.display}</MenuItem>)}
        </Select>
        <br/>
      </FormControl>
      {splitBetween.map(({id, person, amount, enabled, percentage, share}) => (
          <SplitItemEntry
            toggleSplitEnabled={toggleSplitEnabled}
            handleShareChange={handleShareChange}
            splitMethod={splitMethod}
            percentage={percentage}
            share={share}
            enabled={enabled}
            amount={amount}
            person={person}
            key={id}
            id={id}
          />
        )
      )}
      <Divider/>
      <Button onClick={handleDialogClose}>Done</Button>
      </DialogContent>
    </Dialog>    
  )
}

export default SplitDialog;
