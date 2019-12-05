import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import './Input.css';

const inputCss = cn('input');

function Input(props) {
  const {
    size,
    type,
    name,
    placeholder,
    value,
    children,
    error,
    cls,
    onChange,
  } = props;

  return (
    <div className={inputCss({}, [cls])}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        className={inputCss('input-tag', { size, error })}
        onChange={onChange}
      />
      { error && <span className={inputCss('message')}>{children}</span> }
    </div>
  );
}

Input.propTypes = {
  size: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.string,
  error: PropTypes.bool,
  cls: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  size: 's',
  name: null,
  type: 'text',
  placeholder: null,
  value: null,
  children: null,
  error: false,
  cls: null,
  onChange: null,
};

export default Input;
