import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Header from './Components/Header/Header';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          home
        </Route>
        <Route path="/login">
          login
        </Route>
        <Route path="/signup">
          signup
        </Route>
      </Switch>
    </div>
  );
}

export default App;
