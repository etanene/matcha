import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux/';
import { cn } from '@bem-react/classname';

import Header from './Components/Header/Header';
import MessageBox from './Components/common/MessageBox/MessageBox';
import PageContent from './Components/PageContent/PageContent';
import RegForm from './Components/RegForm/RegForm';
import LoginForm from './Components/LoginForm/LoginForm';
import ResetpwForm from './Components/ResetpwForm/ResetpwForm';
import ChangepwForm from './Components/ChangepwForm/ChangepwForm';
import Main from './Components/Main/Main';

import './App.css';

const pageContentCss = cn('page-content');

function App() {
  const user = useSelector((state) => state.user);
  const messagebox = useSelector((state) => state.messageBox);
  return (
    <div>
      <Header />
      <PageContent>
        <Switch>
          <Route path="/login">
            <LoginForm cls={pageContentCss('login-form')} />
          </Route>
          <Route path="/signup">
            <RegForm cls={pageContentCss('reg-form')} />
          </Route>
          <Route path="/reset">
            <ResetpwForm cls={pageContentCss('resetpw-form')} />
          </Route>
          <Route path="/changepw/:uuid">
            <ChangepwForm cls={pageContentCss('changepw-form')} />
          </Route>
          <Route path="/">
            {user.isAuth ? <Main /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </PageContent>
      <MessageBox
        isOpen={messagebox.isOpen}
        message={messagebox.message}
        error={messagebox.error}
      />
    </div>
  );
}

export default App;
