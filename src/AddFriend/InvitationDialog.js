import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Axios from 'axios';
import { serverUrl } from '../constants';

export default function InvitationDialog(props) {
  const {email, setEmail, open, closeInvitationDialog} = props;
  const sendInvitation = async (e) => {
    e.preventDefault();
    const response = await Axios.post(`${serverUrl}/helper/send-invitation`, {email});
    console.log(response);
  }
  return (
    <div>
      <Dialog open={open} onClose={closeInvitationDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Send An Invitation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            No user found with that email id, do you want to send an invitation?
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            value={email}
            onChange={setEmail}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeInvitationDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={sendInvitation} color="primary">
            Invite
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}