import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import './MessageBox.css';
const messageBoxCss = cn('message-box');

const MessageBox = (props) => {
  const { children } = props;
  const [isMessageBoxOpen, setIsMessageBoxOpen] = useState(false);

  return (
    isMessageBoxOpen && (
      <div className={messageBoxCss()}>
      <button onClick={() => setIsMessageBoxOpen(false)} className={messageBoxCss('box-close')}>
        X
      </button>
      <div className={messageBoxCss('box-body')}>
        {children}
      </div>
    </div>
    )
  );
}

MessageBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MessageBox;
