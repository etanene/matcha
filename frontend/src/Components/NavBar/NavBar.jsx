import React from 'react';
import PropTypes from 'prop-types';

function NavBar(props) {
  const { children } = props;

  return (
    <div>
      {children}
    </div>
  );
}

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavBar;
