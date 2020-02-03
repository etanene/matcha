import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import './ListGroup.css';

const listGroupCss = cn('list-group');

function ListGroup(props) {
  const { children, cls } = props;

  return (
    <div className={listGroupCss({}, [cls])}>
      {children}
    </div>
  );
}

ListGroup.propTypes = {
  children: PropTypes.node.isRequired,
  cls: PropTypes.string,
};

ListGroup.defaultProps = {
  cls: '',
};

export default ListGroup;
