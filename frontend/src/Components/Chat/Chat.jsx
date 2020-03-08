import React, { useEffect } from 'react';
import io from 'socket.io-client';
import { cn } from '@bem-react/classname';
import { useDispatch, useSelector } from 'react-redux';

import { chatAction } from '../../Actions';

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
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const findMatch = useSelector((state) => state.chat);
  const usersMatch = findMatch.users;
  console.log('match users', usersMatch);
  console.log('user', user);
  console.log('socket', socket);


  useEffect(() => {
    dispatch(chatAction.getUsers({
      login: user.username,
    }));
  }, [dispatch, user]);

  return (
    <div className={chatCss({})}>
      <MatchList list={usersMatch} />
      <form className={chatFormCss}>
        <Input
          type="text"
          name="message"
          placeholder="Your message"
          // value={message}
          cls={inputChatCss}
        />
        <Button type="button">Send</Button>
      </form>
    </div>
  );
}

export default Chat;
