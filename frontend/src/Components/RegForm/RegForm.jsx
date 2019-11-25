import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import Input from '../Input/Input';
import './RegForm.css';

const regFormCss = cn('reg-form');

function RegForm(props) {
  const { cls } = props;

  return (
    <div className={regFormCss({}, [cls])}>
      <span>Sign Up</span>
      <Input />
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
