import React, { useContext } from 'react';
import { Container, CssBaseline, makeStyles, Typography, TextField, Button } from '@material-ui/core';
import {handleGoogleSignIn} from '../utils/handleGoogleSignIn';
import { UserContext } from '../Contexts/userContext';
import { red } from '@material-ui/core/colors';
const useStyles = makeStyles( theme => ({
  root: {
    backgroundColor: "#14BCFF",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23cc0000' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23aa0000' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23d6002b' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23b10022' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d9004b' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23b2003d' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23d3006c' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23ac0057' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23c4008c' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%239e0071' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23aa00aa' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23880088' points='943 900 1210 900 971 687'/%3E%3C/svg%3E")`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    minHeight: "100vh"
  },
  title: {
    textAlign: "center",
    color: red[200],
    fontWeight: 600,
    paddingTop: "2rem"
  },
  inputTextField: {
    paddingTop: "2rem"
  }
}))

function Login(props) {
  const classes = useStyles();
  const {setUserLocal} = useContext(UserContext);
  const {signInWithGoogle} = props.authProps;
  const handleGoogleSignInClick = (e) => {
    handleGoogleSignIn(e, signInWithGoogle, setUserLocal)
  }
  return (
    <div className={classes.root}>
      <Container maxWidth="xs">
        <CssBaseline/>
        <Typography className={classes.title} variant="h2">
          Splitsense
        </Typography>
        <div className={classes.inputTextField}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            color="secondary"
            className={classes.inputTextFieldMain}
          />
        </div>
        <div className={classes.inputTextField}>
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            color="secondary"
            className={classes.inputTextFieldMain}
          />
        </div>
        <div className={classes.inputTextField}>
          <Button fullWidth variant="outlined" color="secondary">
            Sign In
          </Button>
        </div>
        <div className={classes.inputTextField}>
          <Button onClick={handleGoogleSignInClick} fullWidth variant="contained" color="secondary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
            &nbsp;&nbsp;
            Sign In
          </Button>
        </div>
      </Container>
    </div>
  )
};

export default Login;
