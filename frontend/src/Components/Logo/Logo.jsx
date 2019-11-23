import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import './Logo.css';

const logoCss = cn('logo');

function Logo(props) {
  const { children } = props;

  return (
    <span className={logoCss()}>
      {children}
    </span>
  );
}

Logo.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Logo;
