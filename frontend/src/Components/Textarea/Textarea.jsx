import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import './Textarea.css';

const textareaCss = cn('textarea');

function Textarea(props) {
  const {
    value,
    placeholder,
    error,
    cls,
    onChange,
  } = props;

  return (
    <div className={textareaCss({}, [cls])}>
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      { error && <span>{error}</span> }
    </div>
  );
}

Textarea.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  cls: PropTypes.string,
  onChange: PropTypes.func,
};

Textarea.defaultProps = {
  value: '',
  placeholder: '',
  error: '',
  cls: null,
  onChange: null,
};

export default Textarea;
