import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import './ListButton.css';

const listButtonCss = cn('list-button');

function ListButton(props) {
  const { children, cls, onClick } = props;

  return (
    <button onClick={onClick} className={listButtonCss({}, [cls])}>
      {children}
    </button>
  );
}

ListButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  cls: PropTypes.string,
};

ListButton.defaultProps = {
  cls: '',
};

export default ListButton;
