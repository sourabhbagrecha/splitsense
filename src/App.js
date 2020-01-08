import React from 'react';
import './App.css';
import Homepage from './Homepage';
import { Switch, Route } from 'react-router-dom';
import Friend from './Friend';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Homepage/>} />
          <Route exact path="/friend/:id" render={(routeProps) => <Friend {...routeProps} />} />
        </Switch>
    </div>
  );
}

export default App;
