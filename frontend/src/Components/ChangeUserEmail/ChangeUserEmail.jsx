import React, { useEffect } from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { useForm } from '../../Hooks';
import { REGEX } from '../../Constants';
import { apiService } from '../../Services';
import { messageBoxAction } from '../../Actions';

import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import './ChangeUserEmail.css';

const changeUserEmailCss = cn('changeuseremail-form');
const inputCss = changeUserEmailCss('input');

const formSchema = {
  email: {
    // доступны: любые символы
    // обязательно: @ и точка
    regex: REGEX.EMAIL,
    message: 'Invalid email layout.',
  },
};

const ChangeUserEmail = React.memo((props) => {
  const { cls } = props;
  const dispatch = useDispatch();

  async function submitForm(data) {
    try {
      const res = await apiService.postJson('/api/user/changeUserEmail', data);
      dispatch(messageBoxAction.open(res.message));
    } catch (e) {
      dispatch(messageBoxAction.open(e.message, true));
    }
  }

  const {
    state,
    handleChange,
    handleSubmit,
    fetchUser,
  } = useForm(formSchema, submitForm);

  useEffect(() => {
    fetchUser({
      name: 'email',
      value: state.email.value,
      field: 'email',
      message: 'Email already exists!',
      error: state.email.error,
      exists: true,
    });
  }, [state.email.value, state.email.error, fetchUser]);

  return (
    <form onSubmit={handleSubmit} className={changeUserEmailCss({}, [cls])}>
      <span className={changeUserEmailCss('form-name')}>Change Email</span>
      <Input
        type="text"
        name="email"
        placeholder="Email"
        value={state.email.value}
        error={state.email.error}
        onChange={handleChange}
        cls={inputCss}
      >
        {state.email.message}
      </Input>
      <Button type="submit" cls={changeUserEmailCss('submit')}>Change email</Button>
    </form>
  );
});

ChangeUserEmail.propTypes = {
  cls: PropTypes.string,
};

ChangeUserEmail.defaultProps = {
  cls: '',
};

export default ChangeUserEmail;
