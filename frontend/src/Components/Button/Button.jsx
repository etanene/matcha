import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import './Button.css';

const buttonCss = cn('button');

function Button(props) {
  const {
    children,
    type,
    size,
    color,
    onClick,
    cls,
  } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonCss({ size, color }, [cls])}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset', null]),
  size: PropTypes.oneOf(['s', 'm', 'l', null]),
  color: PropTypes.string,
  onClick: PropTypes.func,
  cls: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  size: 'm',
  color: 'light',
  onClick: null,
  cls: null,
};

export default Button;
