import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import './NavBar.css';

const navBarCss = cn('navbar');

function NavBar(props) {
  const { children, cls } = props;

  return (
    <div className={navBarCss({}, [cls])}>
      {children}
    </div>
  );
}

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
  cls: PropTypes.string,
};

NavBar.defaultProps = {
  cls: null,
};

export default NavBar;
