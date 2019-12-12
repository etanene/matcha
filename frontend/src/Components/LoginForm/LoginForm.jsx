import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '../../Hooks';
import { authAction, userAction } from '../../Actions';

import Input from '../Input/Input';
import Button from '../Button/Button';
import './LoginForm.css';

const loginFormCss = cn('login-form');
const inputCss = loginFormCss('input');

const formSchema = {
  username: {
    message: 'Required field.',
  },
  password: {
    message: 'Required field.',
  },
};

function LoginForm(props) {
  const { cls } = props;
  const dispatch = useDispatch();

  function submitForm(data) {
    dispatch({ type: authAction.LOGIN_REGUEST, ...data });
    console.log('submit loginForm');
  }

  const { state, handleSubmit, handleChange } = useForm(formSchema, submitForm);
  const userState = useSelector((reduxState) => reduxState.user);

  useEffect(() => (
    () => {
      dispatch({ type: userAction.USER_RESET_ERROR });
    }
  ), [dispatch]);

  if (userState.isAuth) {
    return (<Redirect to="/" />);
  }
  return (
    <form onSubmit={handleSubmit} className={loginFormCss({}, [cls])}>
      <span className={loginFormCss('form-name')}>Log In</span>
      <Input
        type="text"
        name="username"
        placeholder="Username or Email"
        value={state.username.value}
        error={Boolean(userState.error) || state.username.error}
        onChange={handleChange}
        cls={inputCss}
      >
        {Boolean(userState.error) || state.username.message}
      </Input>
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={state.password.value}
        error={Boolean(userState.error) || state.password.error}
        onChange={handleChange}
        cls={inputCss}
      >
        {userState.error || state.password.message}
      </Input>
      <Button type="submit" cls={loginFormCss('submit')}>Log In</Button>
      <Link to="/reset" className={loginFormCss('link-reset')}>
        Reset password
      </Link>
    </form>
  );
}

LoginForm.propTypes = {
  cls: PropTypes.string,
};

LoginForm.defaultProps = {
  cls: null,
};

export default LoginForm;
