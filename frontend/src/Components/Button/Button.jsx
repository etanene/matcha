import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import './Button.css';

const buttonCss = cn('button');

function Button(props) {
  const {
    text,
    type,
    size,
    color,
    cls,
  } = props;

  return (
    <button
      type={type}
      className={buttonCss({ size, color }, [cls])}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset', null]),
  size: PropTypes.oneOf(['s', 'm', 'l', null]),
  color: PropTypes.string,
  cls: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  size: 'm',
  color: 'dark',
  cls: null,
};

export default Button;
