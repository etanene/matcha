import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Header from './Components/Header/Header';
import PageContent from './Components/PageContent/PageContent';
import RegForm from './Components/RegForm/RegForm';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <PageContent>
        <Switch>
          <Route exact path="/">
            home
          </Route>
          <Route path="/login">
            login
          </Route>
          <Route path="/signup">
            <RegForm />
          </Route>
        </Switch>
      </PageContent>
    </div>
  );
}

export default App;
