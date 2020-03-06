import React from 'react';
import io from 'socket.io-client';
import { cn } from '@bem-react/classname';

import Input from '../common/Input/Input';
import MatchList from '../MatchList/MatchList';
import Button from '../common/Button/Button';
import './Chat.css';

const socket = io('ws://localhost:8000');
const chatCss = cn('chat');
const inputChatCss = chatCss('input');
const chatFormCss = chatCss('form');

socket.on('connect', () => {
  console.log('connected!');
});

socket.on('respond', (data) => {
  console.log(data);
});

function Chat() {
  const matchList = 
  console.log(socket);

  return (
    <div className={chatCss({})}>
      <MatchList list={matchList} />
      <form className={chatFormCss}>
        <Input
          type="text"
          name="message"
          placeholder="Your message"
          // value={message}
          cls={inputChatCss}
        />
        <Button type="button" onClick={console.log('messagee here')}>Send</Button>
      </form>
    </div>
  );
}

export default Chat;
