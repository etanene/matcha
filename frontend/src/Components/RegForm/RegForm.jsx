import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import Input from '../Input/Input';
import Button from '../Button/Button';
import './RegForm.css';

const regFormCss = cn('reg-form');
const inputCss = regFormCss('input');

function useForm(formSchema) {
  const [state, setState] = useState(formSchema);

  const fetchUser = async (params) => {
    if (params.error) {
      return;
    }

    const res = await fetch(`/api/user/get?${params.name}=${params.value}`);
    const data = await res.json();

    if (data.length) {
      setState((prevState) => ({
        ...prevState,
        [params.key]: {
          ...[params.key],
          error: true,
          message: params.message,
        },
      }));
    }
  };

  useEffect(() => {
    fetchUser({
      key: 'username',
      name: 'login',
      value: state.username.value,
      message: 'Login already exists!',
      error: state.username.error,
    });
  }, [state.username.value, state.username.error]);

  useEffect(() => {
    fetchUser({
      key: 'email',
      name: 'email',
      value: state.email.value,
      message: 'Email already exists!',
      error: state.email.error,
    });
  }, [state.email.value, state.email.error]);

  const validateField = (name, value) => {
    if (name === 'confirm_password') {
      return (value !== state.password.value);
    }
    return ((formSchema[name].regex && !formSchema[name].regex.test(value)) || value === '');
  };

  const validateForm = () => {
    const names = Object.keys(state);
    let result = true;

    for (let i = 0; i < names.length; i += 1) {
      if (state[names[i]].error || !state[names[i]].value) {
        result = false;
        setState((prevState) => ({
          ...prevState,
          [names[i]]: {
            ...prevState[names[i]],
            error: true,
          },
        }));
      }
    }
    return (result);
  };

  const handleChange = (event) => {
    event.persist();

    const { name, value } = event.target;

    setState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        error: validateField(name, value),
        message: formSchema[name].message,
        value,
      },
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = Object.values(event.target).reduce((obj, current) => {
      let mergeObj = {};

      if (current.nodeName === 'INPUT') {
        mergeObj = { [current.name]: current.value };
      }
      return (Object.assign(obj, mergeObj));
    }, {});

    if (validateForm()) {
      try {
        const response = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          const error = await response.json();
          throw Error(error.message);
        }
        console.log('signup');
      } catch (e) {
        console.log(e.message);
      }
    }
  };
  // console.log(state);
  return { state, handleChange, handleSubmit };
}

const formSchema = {
  username: {
    // доступны: большие/маленькие буквы, цифры
    // длина: 4 - 12
    regex: /^[A-Za-z\d]{4,12}$/,
    message: 'You can use a-z, A-Z, 0-9. Length from 4 to 12.',
  },
  email: {
    // доступны: любые символы
    // обязательно: @ и точка
    regex: /^\S+@\S+\.\S+$/,
    message: 'Invalid email layout.',
  },
  first_name: {},
  last_name: {},
  password: {
    // доступны: большие/маленькие буквы, цифры
    // обязательно: большая и маленькая буква, цифра
    // длина: 4 - 12
    regex: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{4,12}$/,
    message: 'Password must contain upper and lower letter, number. Length from 4 to 12.',
  },
  confirm_password: {
    message: 'Passwords do not match.',
  },
};

function RegForm(props) {
  const { cls } = props;
  const { state, handleChange, handleSubmit } = useForm(formSchema);

  return (
    <form onSubmit={handleSubmit} className={regFormCss({}, [cls])}>
      <span className={regFormCss('form-name')}>Sign Up</span>
      <Input
        type="text"
        name="username"
        placeholder="Username"
        error={state.username.error}
        onChange={handleChange}
        cls={inputCss}
      >
        {state.username.message}
      </Input>
      <Input
        type="text"
        name="email"
        placeholder="Email"
        error={state.email.error}
        onChange={handleChange}
        cls={inputCss}
      >
        {state.email.message}
      </Input>
      <Input
        type="text"
        name="first_name"
        placeholder="First name"
        error={state.first_name.error}
        onChange={handleChange}
        cls={inputCss}
      />
      <Input
        type="text"
        name="last_name"
        placeholder="Last name"
        error={state.last_name.error}
        onChange={handleChange}
        cls={inputCss}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        error={state.password.error}
        onChange={handleChange}
        cls={inputCss}
      >
        {state.password.message}
      </Input>
      <Input
        type="password"
        name="confirm_password"
        placeholder="Confirm password"
        error={state.confirm_password.error}
        onChange={handleChange}
        cls={inputCss}
      >
        {state.confirm_password.message}
      </Input>
      <Button type="submit" cls={regFormCss('submit')}>Sign up</Button>
    </form>
  );
}

RegForm.propTypes = {
  cls: PropTypes.string,
};

RegForm.defaultProps = {
  cls: null,
};

export default RegForm;
