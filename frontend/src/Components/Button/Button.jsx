import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { text, type } = props;

  return (
    <button type={type}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.custom,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
