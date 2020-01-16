import React, { useContext } from 'react';
import { Typography, CssBaseline, Container, TextField, makeStyles, Button } from '@material-ui/core'
import useInputState from '../Hooks/useInputState';
import UserContext from '../Contexts/userContext';
import Axios from 'axios';
import { serverUrl } from '../constants';
import InvitationDialog from './InvitationDialog';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  title: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(3),
    margin: "0 -20px",
    color: "white",
  }
}));


function AddFriend(props) {
  const {user} = useContext(UserContext);
  const classes = useStyles();
  const [email, setEmail] = useInputState('');
  const [open, setOpen] = React.useState(false);
  const openInvitationDialog = () => {
    setOpen(true);
  };
  const closeInvitationDialog = () => {
    setOpen(false);
  }
  const addFriendSubmit = async e => {
    const requesterId = user.providerData[0].uid;
    const accepterEmail = email;
    const defaultCurrency = 'INR';

    const response = await Axios.post(`${serverUrl}/helper/check-user-existence`, { email });
    console.log(response);
    if(response.status === 204){
      openInvitationDialog();
      return;
    }
    else if(response.status === 200){
      const response = await Axios.post(`${serverUrl}/friend/new`, {requesterId, accepterEmail, defaultCurrency});
      console.log(response);
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <Typography className={classes.title} component="h1" variant="h5">Add New Friend</Typography>
      <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            name="email"
            value={email}
            onChange={setEmail}
            autoFocus
          />
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={addFriendSubmit}
          >
            Invite
          </Button>
          <InvitationDialog
            email={email}
            setEmail={setEmail}
            open={open}
            openInvitationDialog={openInvitationDialog}
            closeInvitationDialog={closeInvitationDialog}
          />
      </form>
    </Container>
  )
};

export default AddFriend
