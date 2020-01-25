import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import './Modal.css';

const modalStyle = cn('modal');

function Modal(props) {
  const { children, visible } = props;

  return visible ? (
    <div className={modalStyle()}>
      {children}
    </div>
  ) : null;
}

Modal.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool.isRequired,
};

Modal.defaultProps = {
  children: null,
};

export default Modal;
