import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import { useDispatch } from 'react-redux';

import CloseButton from '../CloseButton/CloseButton';
import { messageBoxAction } from '../../../Actions';
import './MessageBox.css';

const messageBoxCss = cn('message-box');

const MessageBox = (props) => {
  const { isOpen, message, error } = props;
  const dispatch = useDispatch();

  function close() {
    dispatch(messageBoxAction.close());
  }

  return (
    isOpen && (
    <div className={messageBoxCss()}>
      <div className={messageBoxCss('body', { error })}>
        <CloseButton onClick={close}> </CloseButton>
        <div className={messageBoxCss('text')}>{message}</div>
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
