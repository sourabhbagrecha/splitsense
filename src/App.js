import React from 'react';
import './App.css';
import Homepage from './Homepage';
import { Switch, Route } from 'react-router-dom';
import Friend from './Friend';
import AddExpense from './Add Expense';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { deepPurple, red } from '@material-ui/core/colors';

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Homepage/>} />
          <Route exact path="/friend/:id" render={(routeProps) => <Friend {...routeProps} />} />
          <Route exact path="/friend/:id/add-expense" render={(routeProps) => <AddExpense {...routeProps} />} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
