import React from 'react';
import { cn } from '@bem-react/classname';
import {
  Link,
} from 'react-router-dom';

import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const headerCss = cn('header');
const buttonCss = headerCss('button');

function Header() {
  return (
    <header className={headerCss()}>
      <Link to="/">
        <Logo>Matcha</Logo>
      </Link>
      <NavBar>
        <Link to="/login">
          <Button size="m" cls={buttonCss}>Log in</Button>
        </Link>
        <Link to="/signup">
          <Button size="m" cls={buttonCss}>Sign up</Button>
        </Link>
      </NavBar>
    </header>
  );
}

export default Header;
