import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import './MessageBox.css';
const messageBoxCss = cn('message-box');

const MessageBox = (props) => {
  const {isOpen, message} = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    isOpen && (
      <div className={messageBoxCss()}>
      <button onClick={() => setIsOpen(false)} className={messageBoxCss('box-close')}>
        X
      </button>
      <div className={messageBoxCss('box-body')}>
        {message}
      </div>
    </div>
    )
  );
}

MessageBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MessageBox;
