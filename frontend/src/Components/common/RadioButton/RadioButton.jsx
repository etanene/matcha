import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import './RadioButton.css';

const radioButtonCss = cn('radio-button');

function RadioButton(props) {
  const {
    label,
    value,
    checked,
    name,
    onChange,
    cls,
  } = props;

  return (
    <label htmlFor={value} className={radioButtonCss({}, [cls])}>
      <input
        id={value}
        value={value}
        checked={checked}
        type="radio"
        name={name}
        onChange={onChange}
        className={radioButtonCss('input')}
      />
      {label && <div className={radioButtonCss('label', { checked })}>{label}</div>}
    </label>
  );
}

RadioButton.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  cls: PropTypes.string,
};

RadioButton.defaultProps = {
  label: '',
  value: '',
  checked: false,
  name: '',
  onChange: null,
  cls: '',
};

export default RadioButton;
