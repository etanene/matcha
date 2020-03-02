import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import './Message.css';

const messageCss = cn('message');

function Message(props) {
  const {
    name,
    message,
    cls,
  } = props;

  return (
    <div className={messageCss({}, cls)}>
      <b>{name}</b>
      <br />
      {message}
    </div>
  );
}

Message.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string,
  cls: PropTypes.string,
};

Message.defaultProps = {
  name: '',
  message: '',
  cls: null,
};

export default Message;
