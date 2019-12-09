import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from '../Input/Input';
import Button from '../Button/Button';
import './ResetpwForm.css';

const resetpwFormCss = cn('resetpw-form');

function ResetpwForm(props) {
  const { cls } = props;
  const inputCss = resetpwFormCss('input');
  const userState = useSelector((reduxState) => reduxState.user);

  if (userState.isAuth) {
    return (<Redirect to="/" />);
  }
  return (
    <div className={resetpwFormCss({}, [cls])}>
      <span className={resetpwFormCss('form-name')}>Reset Password</span>
      <Input
        type="email"
        placeholder="Email"
        cls={inputCss}
      />
      <Button type="submit">Reset</Button>
    </div>
  );
}

ResetpwForm.propTypes = {
  cls: PropTypes.string,
};

ResetpwForm.defaultProps = {
  cls: null,
};

export default ResetpwForm;
