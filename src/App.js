import React from 'react';

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

import './App.css';
import Homepage from './Homepage';
import { Switch, Route } from 'react-router-dom';
import Friend from './Friend';
import AddExpense from './Add Expense';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { deepPurple, red } from '@material-ui/core/colors';
import Expense from './Expense';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: red,
    primary2: {
      main: "#7e57c2"
    }
  },
  status: {
    danger: 'orange',
  },
});

function App(props) {
  const {
    user,
    signOut,
    signInWithGoogle,
  } = props;
  const authProps =  { user, signOut, signInWithGoogle }
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Homepage authProps={authProps} />} />
          <Route exact path="/expense/:id" render={(routeProps) => <Expense {...routeProps} />} />
          <Route exact path="/expense/:id/edit" render={(routeProps) => <AddExpense {...routeProps} />} />
          <Route exact path="/friend/:id" render={(routeProps) => <Friend {...routeProps} />} />
          <Route exact path="/friend/:id/add-expense" render={(routeProps) => <AddExpense {...routeProps} />} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);