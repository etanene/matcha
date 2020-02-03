import React from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';

import { useForm } from '../../Hooks';
import { apiService } from '../../Services';
import { REGEX } from '../../Constants';

import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import './ChangeUserPwForm.css';

const changeUserPwFormCss = cn('changeuserpw-form');
const inputCss = changeUserPwFormCss('input');

const formSchema = {
  old_password: {
    message: 'Required field.',
  },
  password: {
    regex: REGEX.PASSWORD,
    message: 'Password must contain upper and lower letter, number. Length from 4 to 12.',
  },
  confirm_password: {
    message: 'Passwords do not match.',
  },
};

function ChangeUserPwForm(props) {
  const { cls } = props;

  async function submitForm(data) {
    try {
      await apiService.postJson('/api/user/changeUserpw', data);
    } catch (e) {
      console.log(e.message);
    }
  }

  const { state, handleChange, handleSubmit } = useForm(formSchema, submitForm);

  return (
    <form onSubmit={handleSubmit} className={changeUserPwFormCss({}, [cls])}>
      <span className={changeUserPwFormCss('form-name')}>Change password</span>
      <Input
        type="password"
        name="old_password"
        placeholder="Old password"
        value={state.old_password.value}
        error={state.old_password.error}
        onChange={handleChange}
        cls={inputCss}
      >
        {state.old_password.message}
      </Input>
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={state.password.value}
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
        value={state.confirm_password.value}
        error={state.confirm_password.error}
        onChange={handleChange}
        cls={inputCss}
      >
        {state.confirm_password.message}
      </Input>
      <Button type="submit" cls={changeUserPwFormCss('submit')}>Change password</Button>
    </form>
  );
}

ChangeUserPwForm.propTypes = {
  cls: PropTypes.string,
};

ChangeUserPwForm.defaultProps = {
  cls: null,
};

export default ChangeUserPwForm;
