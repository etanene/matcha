import React from 'react';
import PropTypes from 'prop-types';

function NavBar(props) {
  const { children, cls } = props;

  return (
    <div className={cls}>
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
