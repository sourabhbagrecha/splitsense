import React, { useEffect } from 'react';

import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from './firebaseConfig';
import './App.css';
import Homepage from './Homepage';
import { Switch, Route } from 'react-router-dom';
import Friend from './Friend';
import AddExpense from './Add Expense';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { deepPurple, red } from '@material-ui/core/colors';
import Expense from './Expense';
import UserContext from './Contexts/userContext';
import CreateGroup from './CreateGroup';
import AddFriend from './AddFriend';


const firebaseAppAuth = firebase.auth();
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
  const authProps =  { user, signOut, signInWithGoogle };
  useEffect(() =>  console.log(user ? user.providerData[0].uid : "No user"), [user]);
  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{user}}>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => <Homepage authProps={authProps} />} />
            <Route exact path="/expense/new" render={(routeProps) => <AddExpense {...routeProps} />} />
            <Route exact path="/expense/:id" render={(routeProps) => <Expense {...routeProps} />} />
            <Route exact path="/expense/:id/edit" render={(routeProps) => <AddExpense {...routeProps} />} />
            <Route exact path="/friend/new" render={(routeProps) => <AddFriend {...routeProps} />} />
            <Route exact path="/friend/:id" render={(routeProps) => <Friend {...routeProps} />} />
            <Route exact path="/group/new" render={(routeProps) => <CreateGroup {...routeProps} />} />
            <Route exact path="/friend/:id/add-expense" render={(routeProps) => <AddExpense friend {...routeProps} />} />
            <Route exact path="/group/:id/add-expense" render={(routeProps) => <AddExpense group {...routeProps} />} />
          </Switch>
        </div>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);