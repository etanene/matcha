import React from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';

import { useForm } from '../../Hooks';
import { REGEX } from '../../Constants';
// import { apiService } from '../../Services';

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

function ChangeUserEmail(props) {
  const { cls } = props;

  // async function submitForm(data) {
  //   try {
  //     await apiService.postJson(`/api/user/changeuseremail`, data);
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // }

  const { state, handleChange, handleSubmit } = useForm(formSchema);

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
}

ChangeUserEmail.propTypes = {
  cls: PropTypes.string,
};

ChangeUserEmail.defaultProps = {
  cls: null,
};

export default ChangeUserEmail;
