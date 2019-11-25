import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import './Input.css';

const inputCss = cn('input');

function Input(props) {
  const { size } = props;

  return (
    <div className={inputCss()}>
      <input type="text" className={inputCss('input-tag', { size })} />
      <span>hello</span>
    </div>
  );
}

Input.propTypes = {
  size: PropTypes.string,
};

Input.defaultProps = {
  size: 's',
};

export default Input;
