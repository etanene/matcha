import React, { useEffect } from 'react';
import io from 'socket.io-client';
import { cn } from '@bem-react/classname';
import { useDispatch, useSelector } from 'react-redux';

import { chatAction } from '../../Actions';

import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import RadioGroup from '../common/RadioGroup/RadioGroup';
import RadioButton from '../common/RadioButton/RadioButton';
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

  function handleChange(field) {
    console.log('handle change field', field);
  }


  useEffect(() => {
    dispatch(chatAction.getUsers({
      login: user.username,
    }));
  }, [dispatch, user]);

  return (
    <div className={chatCss({})}>
      <RadioGroup
        cls="matchusers"
        title="Match Users"
        name="matchusers"
        // value={profile.sex.value}
        // error={profile.sex.error}
        onChange={handleChange()}
      >
        {usersMatch.map(({ userId, firstName, lastName }) => (
          <RadioButton cls="matchuser" userId={userId} value={`${firstName} ${lastName}`} label={`${firstName} ${lastName}`} />
        ))}
      </RadioGroup>
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
