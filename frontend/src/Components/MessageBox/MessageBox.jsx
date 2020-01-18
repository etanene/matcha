import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import { useDispatch } from 'react-redux';

import { messageBoxAction } from '../../Actions';
import './MessageBox.css';

const messageBoxCss = cn('message-box');

const MessageBox = (props) => {
  const { isOpen, message, error } = props;
  const dispatch = useDispatch();

  return (
    isOpen && (
    <div className={messageBoxCss()}>
      <div className={messageBoxCss('body', { error })}>
        <button onClick={() => dispatch(messageBoxAction.close())} className={messageBoxCss('close')}>
        X
        </button>
        {message}
      </div>
    </div>
    )
  );
};

MessageBox.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default MessageBox;
