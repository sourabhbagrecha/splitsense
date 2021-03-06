import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from './utils/firebaseConfig';
import './App.css';
import Homepage from './Homepage';
import { Switch, Route } from 'react-router-dom';
import Friend from './Friend';
import AddExpense from './Add Expense';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, pink } from '@material-ui/core/colors';
import Expense from './Expense';
import CreateGroup from './CreateGroup';
import AddFriend from './AddFriend';
import { AlertProvider } from './Contexts/AlertContext';
import Layout from './Layout';
import Group from './Group';
import About from './About';
import AddPayment from './AddPayment';
import { UserProvider } from './Contexts/userContext';


const firebaseAppAuth = firebase.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
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
  return (
    <ThemeProvider theme={theme}>
      <AlertProvider>
        <UserProvider>
          <div className="App">
            <Layout authProps={authProps}>
              {
                <Switch>
                  <Route exact path="/" render={(routeProps) => <Homepage {...routeProps} />} />
                  <Route exact path="/about" render={(routeProps) => <About {...routeProps} />} />
                  <Route exact path="/expense/new" render={(routeProps) => <AddExpense {...routeProps} />} />
                  <Route exact path="/expense/:id" render={(routeProps) => <Expense {...routeProps} />} />
                  <Route exact path="/expense/:id/edit" render={(routeProps) => <AddExpense {...routeProps} />} />
                  <Route exact path="/friend/new" render={(routeProps) => <AddFriend {...routeProps} />} />
                  <Route exact path="/friend/:id" render={(routeProps) => <Friend {...routeProps} />} />
                  <Route exact path="/friend/:friendId/add-expense" render={(routeProps) => <AddExpense friend={true} {...routeProps} />} />
                  <Route exact path="/group/new" render={(routeProps) => <CreateGroup {...routeProps} />} />
                  <Route exact path="/group/:id" render={(routeProps) => <Group {...routeProps} />} />
                  <Route exact path="/group/:groupId/add-expense" render={(routeProps) => <AddExpense group={true} {...routeProps} />} />
                  <Route exact path="/payment" render={(routeProps) => <AddPayment {...routeProps}/>} />
                </Switch>
              }
            </Layout>
          </div>
        </UserProvider>
      </AlertProvider>
    </ThemeProvider>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);