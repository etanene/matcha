import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import './Icon.css';

const iconCss = cn('icon');

function Icon(props) {
  const {
    icon,
    size,
    viewBox,
    fill,
  } = props;

  return (
    <svg viewBox={viewBox} className={iconCss({ size, fill })}>
      <path d={icon} />
    </svg>
  );
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  size: PropTypes.string,
  fill: PropTypes.string,
};

Icon.defaultProps = {
  size: 'm',
  fill: null,
};

export default Icon;
