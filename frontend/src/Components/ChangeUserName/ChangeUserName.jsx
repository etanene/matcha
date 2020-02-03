import React from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';

import { useForm } from '../../Hooks';
// import { apiService } from '../../Services';

import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import './ChangeUserName.css';

const changeUserNameCss = cn('changeusername-form');
const inputCss = changeUserNameCss('input');

const formSchema = {
  first_name: {
    message: 'Required field.',
  },
  last_name: {
    message: 'Required field.',
  },
};

function ChangeUserName(props) {
  const { cls } = props;

  // async function submitForm(data) {
  //   try {
  //     await apiService.postJson(`/api/user/changeusername`, data);
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // }

  const { state, handleChange, handleSubmit } = useForm(formSchema);

  return (
    <form onSubmit={handleSubmit} className={changeUserNameCss({}, [cls])}>
      <span className={changeUserNameCss('form-name')}>Change Firstname and Lastname</span>
      <Input
        type="text"
        name="first_name"
        placeholder="First name"
        value={state.first_name.value}
        error={state.first_name.error}
        onChange={handleChange}
        cls={inputCss}
      >
        {state.first_name.message}
      </Input>
      <Input
        type="text"
        name="last_name"
        placeholder="Last name"
        value={state.last_name.value}
        error={state.last_name.error}
        onChange={handleChange}
        cls={inputCss}
      >
        {state.last_name.message}
      </Input>
      <Button type="submit" cls={changeUserNameCss('submit')}>Change name</Button>
    </form>
  );
}

ChangeUserName.propTypes = {
  cls: PropTypes.string,
};

ChangeUserName.defaultProps = {
  cls: null,
};

export default ChangeUserName;
