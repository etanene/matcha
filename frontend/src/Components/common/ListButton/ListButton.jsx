import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import Button from '../Button/Button';
import './ListButton.css';

const listButtonCss = cn('list-button');

function ListButton(props) {
  const { children, cls, onClick } = props;

  return (
    <Button type="button" onClick={onClick} className={listButtonCss({}, [cls])}>
      {children}
    </Button>
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
