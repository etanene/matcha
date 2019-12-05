import React from 'react';
import { cn } from '@bem-react/classname';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const headerCss = cn('header');
const buttonCss = headerCss('button');

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const navBar = user ? (
    <NavBar>
      {user}
      <Button size="l" onClick={() => dispatch({ type: 'USER_LOGOUT' })} cls={buttonCss}>Log out</Button>
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
      <Link to="/">
        <Logo>Matcha</Logo>
      </Link>
      {navBar}
    </header>
  );
}

export default Header;
