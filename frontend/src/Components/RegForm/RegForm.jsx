import React from 'react';
import { cn } from '@bem-react/classname';

import Input from '../Input/Input';
import './RegForm.css';

const regFormCss = cn('reg-form');

function RegForm() {
  return (
    <div className={regFormCss()}>
      <span>Sign Up</span>
      <Input />
    </div>
  );
}

export default RegForm;
