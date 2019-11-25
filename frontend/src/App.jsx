import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { cn } from '@bem-react/classname';

import Header from './Components/Header/Header';
import PageContent from './Components/PageContent/PageContent';
import RegForm from './Components/RegForm/RegForm';
import LoginForm from './Components/LoginForm/LoginForm';
import './App.css';

const pageContentCss = cn('page-content');

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
            <LoginForm />
          </Route>
          <Route path="/signup">
            <RegForm cls={pageContentCss('reg-form')} />
          </Route>
        </Switch>
      </PageContent>
    </div>
  );
}

export default App;
