import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import './CloseButton.css';

const closebuttonCss = cn('close-btn');

function CloseButton(props) {
  const { onClick } = props;

  return (
    <button
      onClick={onClick}
      aria-label="x"
      className={closebuttonCss()}
    />
  );
}

CloseButton.propTypes = {
  onClick: PropTypes.func,
};

CloseButton.defaultProps = {
  onClick: null,
};

export default CloseButton;
