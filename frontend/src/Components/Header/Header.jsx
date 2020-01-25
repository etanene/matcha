import React from 'react';
import { cn } from '@bem-react/classname';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { authAction } from '../../Actions';

import Button from '../common/Button/Button';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const headerCss = cn('header');
const buttonCss = headerCss('button');

function Header() {
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.user);

  const navBar = isAuth ? (
    <NavBar>
      {user.username}
      <Button size="l" onClick={() => dispatch({ type: authAction.LOGIN_LOGOUT })} cls={buttonCss}>Log out</Button>
    </NavBar>
  ) : (
    <NavBar>
      <Link to="/login">
        <Button size="l" cls={buttonCss}>Log in</Button>
      </Link>
      <Link to="/signup">
        <Button size="l" cls={buttonCss}>Sign up</Button>
      </Link>
    </NavBar>
  );

  return (
    <header className={headerCss()}>
      <Link className={headerCss('link-logo')} to="/">
        <Logo>Matcha</Logo>
      </Link>
      {navBar}
    </header>
  );
}

export default Header;
