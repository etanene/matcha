import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux/';

import Header from './Components/Header/Header';
import PageContent from './Components/PageContent/PageContent';
import RegForm from './Components/RegForm/RegForm';
import LoginForm from './Components/LoginForm/LoginForm';
import ResetpwForm from './Components/ResetpwForm/ResetpwForm';
import ChangepwForm from './Components/ChangepwForm/ChangepwForm';
import Main from './Components/Main/Main';
import './App.css';


function App() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <Header />
      <PageContent>
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/signup">
            <RegForm />
          </Route>
          <Route path="/reset">
            <ResetpwForm />
          </Route>
          <Route path="/changepw/:uuid">
            <ChangepwForm />
          </Route>
          <Route path="/">
            {user.isAuth ? <Main /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </PageContent>
    </div>
  );
}

export default App;
