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
      {splitBetween.map((s) => (
          <SplitItemEntry
            toggleSplitEnabled={toggleSplitEnabled}
            handleShareChange={handleShareChange}
            splitMethod={splitMethod}
            key={s._id}
            _id={s.user}
            {...s}
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
