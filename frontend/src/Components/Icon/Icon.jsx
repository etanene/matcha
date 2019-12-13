import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import './Icon.css';

const iconCss = cn('icon');

function Icon(props) {
  const { icon, size } = props;

  return (
    <svg viewBox="0 0 64 64" className={iconCss({ size })}>
      <path d={icon} />
    </svg>
  );
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
};

Icon.defaultProps = {
  size: 'm',
};

export default Icon;
