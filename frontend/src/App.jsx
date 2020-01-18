import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux/';
import { cn } from '@bem-react/classname';

import Header from './Components/Header/Header';
import PageContent from './Components/PageContent/PageContent';
import RegForm from './Components/RegForm/RegForm';
import LoginForm from './Components/LoginForm/LoginForm';
import ResetpwForm from './Components/ResetpwForm/ResetpwForm';
import MessageBox from './Components/MessageBox/MessageBox';
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
          <Route exact path="/">
            {user.isAuth ? 'home' : <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            <LoginForm cls={pageContentCss('login-form')} />
          </Route>
          <Route path="/signup">
            <RegForm cls={pageContentCss('reg-form')} />
          </Route>
          <Route path="/reset">
            <ResetpwForm cls={pageContentCss('resetpw-form')} />
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
