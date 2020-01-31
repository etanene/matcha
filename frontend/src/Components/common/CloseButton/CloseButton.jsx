import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import './CloseButton.css';

const closebuttonCss = cn('close-btn');

function CloseButton(props) {
  const {
    onClick,
    cls,
  } = props;

  return (
    <button
      onClick={onClick}
      aria-label="x"
      className={closebuttonCss({}, [cls])}
    />
  );
}

CloseButton.propTypes = {
  onClick: PropTypes.func,
  cls: PropTypes.string,
};

CloseButton.defaultProps = {
  onClick: null,
  cls: null,
};

export default CloseButton;
