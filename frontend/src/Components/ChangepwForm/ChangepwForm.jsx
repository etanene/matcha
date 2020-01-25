import React, { useEffect, useState } from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';
import { Redirect, useParams } from 'react-router-dom';

import { useForm } from '../../Hooks';
import { apiService } from '../../Services';
import { REGEX } from '../../Constants';

import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import './ChangepwForm.css';

const changepwFormCss = cn('changepw-form');
const inputCss = changepwFormCss('input');

const formSchema = {
  password: {
    regex: REGEX.PASSWORD,
    message: 'Password must contain upper and lower letter, number. Length from 4 to 12.',
  },
  confirm_password: {
    message: 'Passwords do not match.',
  },
};

function ChangepwForm(props) {
  const { cls } = props;
  const { uuid } = useParams();
  const [redirect, setRedirect] = useState(false);

  async function submitForm(data) {
    try {
      await apiService.postJson(`/api/user/changepw?unique_link=${uuid}`, data);
    } catch (e) {
      console.log(e.message);
    }
  }

  const { state, handleChange, handleSubmit } = useForm(formSchema, submitForm);

  useEffect(() => {
    async function fetchUser() {
      try {
        const users = await apiService.getJson(`/api/user/get?unique_link=${uuid}`);
        if (!users.length) {
          setRedirect(true);
        }
      } catch (e) {
        console.log(e.message);
      }
    }

    fetchUser();
  }, [uuid]);

  if (redirect) {
    return (<Redirect to="/" />);
  }
  return (
    <form onSubmit={handleSubmit} className={changepwFormCss({}, [cls])}>
      <span className={changepwFormCss('form-name')}>Change password</span>
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
      <Button type="submit" cls={changepwFormCss('submit')}>Change</Button>
    </form>
  );
}

ChangepwForm.propTypes = {
  cls: PropTypes.string,
};

ChangepwForm.defaultProps = {
  cls: null,
};

export default ChangepwForm;
