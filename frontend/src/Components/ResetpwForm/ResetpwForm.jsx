import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { useForm } from '../../Hooks';
import { apiService } from '../../Services';
import { REGEX } from '../../Constants';

import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import './ResetpwForm.css';

const resetpwFormCss = cn('resetpw-form');
const inputCss = resetpwFormCss('input');

const formSchema = {
  email: {
    regex: REGEX.EMAIL,
    message: 'Invalid email layout.',
  },
};

const submitForm = async (data) => {
  await apiService.postJson('/api/user/resetpw', data);
  console.log('submit ResetpwForm');
};

function ResetpwForm(props) {
  const { cls } = props;
  const {
    state,
    handleChange,
    handleSubmit,
    fetchUser,
  } = useForm(formSchema, submitForm);
  const userState = useSelector((reduxState) => reduxState.user);

  useEffect(() => {
    fetchUser({
      name: 'email',
      value: state.email.value,
      field: 'email',
      message: 'Email does not exists.',
      error: state.email.error,
      exists: false,
    });
  });

  if (userState.isAuth) {
    return (<Redirect to="/" />);
  }
  return (
    <form onSubmit={handleSubmit} className={resetpwFormCss({}, [cls])}>
      <span className={resetpwFormCss('form-name')}>Reset Password</span>
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={state.email.value}
        error={state.email.error}
        onChange={handleChange}
        cls={inputCss}
      >
        {state.email.message}
      </Input>
      <Button type="submit">Reset</Button>
    </form>
  );
}

ResetpwForm.propTypes = {
  cls: PropTypes.string,
};

ResetpwForm.defaultProps = {
  cls: null,
};

export default ResetpwForm;
