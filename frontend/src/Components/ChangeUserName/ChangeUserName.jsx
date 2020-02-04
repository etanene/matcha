import React from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { useForm } from '../../Hooks';
import { apiService } from '../../Services';
import { profileAction } from '../../Actions';

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
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  console.log(profile);

  function handleChange(field) {
    return (event) => {
      event.persist();
      console.log('hello');

      const { value } = event.target;
      dispatch(profileAction.setData(field, value));
    };
  }

  async function submitForm(data) {
    try {
      await apiService.postJson('/api/user/changeUserName', data);
    } catch (e) {
      console.log(e.message);
    }
  }

  const { handleSubmit } = useForm(formSchema, submitForm);

  return (
    <form onSubmit={handleSubmit} className={changeUserNameCss({}, [cls])}>
      <span className={changeUserNameCss('form-name')}>Change First name and Last name</span>
      <Input
        type="text"
        name="first_name"
        placeholder="First name"
        value={profile.firstName.value}
        error={profile.firstName.error}
        onChange={handleChange('firstName')}
        cls={inputCss}
      >
        {profile.firstName.error}
      </Input>
      <Input
        type="text"
        name="last_name"
        placeholder="Last name"
        value={profile.lastName.value}
        error={profile.lastName.error}
        onChange={handleChange('lastName')}
        cls={inputCss}
      >
        {profile.lastName.error}
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
