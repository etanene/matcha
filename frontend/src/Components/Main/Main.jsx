import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { cn } from '@bem-react/classname';

import NavBar from '../NavBar/NavBar';
import Profile from '../Profile/Profile';
import Match from '../Match/Match';
import Chat from '../Chat/Chat';
import './Main.css';

const mainCss = cn('main');

function Main() {
  return (
    <div className={mainCss()}>
      <NavBar>
        <Link to="/profile">Profile</Link>
        <Link to="/match">Matching</Link>
        <Link to="/chat">Chat</Link>
      </NavBar>
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/match">
          <Match />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
