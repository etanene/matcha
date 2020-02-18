import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { cn } from '@bem-react/classname';

import { ICONS } from '../../Constants';

import NavBar from '../NavBar/NavBar';
import Icon from '../common/Icon/Icon';
import Profile from '../Profile/Profile';
import Match from '../Match/Match';
import Chat from '../Chat/Chat';
import UserSettings from '../UserSettings/UserSettings';
import './Main.css';

const mainCss = cn('main');
const navBarCss = mainCss('navbar');

function Main() {
  return (
    <div className={mainCss()}>
      <NavBar cls={navBarCss}>
        <Link to="/profile"><Icon icon={ICONS.PROFILE} viewBox="0 0 64 64" /></Link>
        <Link to="/match"><Icon icon={ICONS.MATCH} viewBox="0 0 64 64" /></Link>
        <Link to="/chat"><Icon icon={ICONS.CHAT} viewBox="0 0 64 64" /></Link>
      </NavBar>
      <Switch>
        <Route path="/profile">
          <Profile cls={mainCss('profile')} />
        </Route>
        <Route path="/match">
          <Match cls={mainCss('match')} />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
        <Route path="/user/settings">
          <UserSettings cls={mainCss('user-settings')} />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
