import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import Input from '../Input/Input';
import Button from '../Button/Button';
import './RegForm.css';

const regFormCss = cn('reg-form');
const inputCss = regFormCss('input');

function RegForm(props) {
  const { cls } = props;

  return (
    <div className={regFormCss({}, [cls])}>
      <span className={regFormCss('form-name')}>Sign Up</span>
      <Input
        type="text"
        placeholder="Username"
        cls={inputCss}
      >
        validation
      </Input>
      <Input
        type="text"
        placeholder="Email"
        cls={inputCss}
      >
        validation
      </Input>
      <Input
        type="text"
        placeholder="First name"
        cls={inputCss}
      >
        validation
      </Input>
      <Input
        type="text"
        placeholder="Last name"
        cls={inputCss}
      >
        validation
      </Input>
      <Input
        type="text"
        placeholder="Password"
        cls={inputCss}
      >
        validation
      </Input>
      <Input
        type="text"
        placeholder="Confirm password"
        cls={inputCss}
      >
        validation
      </Input>
      <Button>Sign up</Button>
    </div>
  );
}

RegForm.propTypes = {
  cls: PropTypes.string,
};

RegForm.defaultProps = {
  cls: null,
};

export default RegForm;
