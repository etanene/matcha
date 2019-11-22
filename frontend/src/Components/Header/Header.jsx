import React from 'react';
import { cn } from '@bem-react/classname';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const headerCss = cn('header');
const buttonCss = headerCss('button');

function Header() {
  return (
    <header className={headerCss()}>
      <Logo>Matcha</Logo>
      <NavBar>
        <Button text="Log in" size="m" cls={buttonCss} />
        <Button text="Sign in" size="m" cls={buttonCss} />
      </NavBar>
    </header>
  );
}

export default Header;
