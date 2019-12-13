import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { cn } from '@bem-react/classname';

import { ICONS } from '../../Constants';

import NavBar from '../NavBar/NavBar';
import Icon from '../Icon/Icon';
import Profile from '../Profile/Profile';
import Match from '../Match/Match';
import Chat from '../Chat/Chat';
import './Main.css';

const mainCss = cn('main');
const navBarCss = mainCss('navbar');

function Main() {
  return (
    <div className={mainCss()}>
      <NavBar cls={navBarCss}>
        <Link to="/profile"><Icon icon={ICONS.PROFILE} /></Link>
        <Link to="/match"><Icon icon={ICONS.MATCH} /></Link>
        <Link to="/chat"><Icon icon={ICONS.CHAT} /></Link>
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
