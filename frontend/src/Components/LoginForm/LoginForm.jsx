import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import { Link } from 'react-router-dom';

import Input from '../Input/Input';
import Button from '../Button/Button';
import './LoginForm.css';

const loginFormCss = cn('login-form');

function LoginForm(props) {
  const { cls } = props;
  const inputCss = loginFormCss('input');

  return (
    <div className={loginFormCss({}, [cls])}>
      <span className={loginFormCss('form-name')}>Log In</span>
      <Input
        type="text"
        placeholder="Username or Email"
        cls={inputCss}
      />
      <Input
        type="password"
        placeholder="Password"
        cls={inputCss}
      />
      <Button
        type="submit"
      >
        Log In
      </Button>
      <Link to="/reset" className={loginFormCss('link-reset')}>
        Reset password
      </Link>
    </div>
  );
}

LoginForm.propTypes = {
  cls: PropTypes.string,
};

LoginForm.defaultProps = {
  cls: null,
};

export default LoginForm;
