import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import './Input.css';

const inputCss = cn('input');

function Input(props) {
  const {
    size,
    type,
    placeholder,
    children,
    cls,
  } = props;

  return (
    <div className={inputCss({}, [cls])}>
      <input
        type={type}
        placeholder={placeholder}
        className={inputCss('input-tag', { size })}
      />
      { children && <span>{children}</span> }
    </div>
  );
}

Input.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  children: PropTypes.string,
  cls: PropTypes.string,
};

Input.defaultProps = {
  size: 's',
  type: 'text',
  placeholder: null,
  children: null,
  cls: null,
};

export default Input;
