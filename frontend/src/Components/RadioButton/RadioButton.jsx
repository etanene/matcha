import React from 'react';
import PropTypes from 'prop-types';

function RadioButton(props) {
  const {
    label,
    value,
    checked,
    onChange,
  } = props;

  return (
    <label htmlFor={value}>
      <input
        id={value}
        value={value}
        checked={checked}
        type="radio"
        onChange={onChange}
      />
      {label && <span>{label}</span>}
    </label>
  );
}

RadioButton.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

RadioButton.defaultProps = {
  label: '',
  value: '',
  checked: false,
  onChange: null,
};

export default RadioButton;
