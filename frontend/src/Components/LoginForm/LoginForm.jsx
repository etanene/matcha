import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { authAction } from '../../Actions';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './LoginForm.css';

const loginFormCss = cn('login-form');
const inputCss = loginFormCss('input');

function useForm(formSchema) {
  const [state, setState] = useState(formSchema);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(authAction.login(state.username.value, state.password.value));
  };

  const handleChange = (event) => {
    event.persist();

    const { name, value } = event.target;

    setState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value,
      },
    }));
  };

  return { state, handleSubmit, handleChange };
}

const formSchema = {
  username: {},
  password: {
    message: 'Invalid login or password!',
  },
};

function LoginForm(props) {
  const { cls } = props;
  const { state, handleSubmit, handleChange } = useForm(formSchema);

  return (
    <form onSubmit={handleSubmit} className={loginFormCss({}, [cls])}>
      <span className={loginFormCss('form-name')}>Log In</span>
      <Input
        type="text"
        name="username"
        placeholder="Username or Email"
        value={state.username.value}
        onChange={handleChange}
        cls={inputCss}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={state.password.value}
        onChange={handleChange}
        cls={inputCss}
      >
        {state.password.message}
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
