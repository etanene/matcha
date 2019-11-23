import React from 'react';
import { cn } from '@bem-react/classname';

import './Input.css';

const inputCss = cn('input');

function Input() {
  return (
    <div className={inputCss()}>
      <input type="text" />
      <span>hello</span>
    </div>
  );
}

export default Input;
