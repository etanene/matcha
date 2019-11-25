import React from 'react';
import { cn } from '@bem-react/classname';

import Input from '../Input/Input';
import './LoginForm.css';

const loginFormCss = cn('login-form');

function LoginForm() {
  return (
    <div className={loginFormCss()}>
      <span> Sign In</span>
      <Input />
    </div>
  );
}

export default LoginForm;
