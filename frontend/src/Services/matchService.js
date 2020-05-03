import socketIo from 'socket.io-client';

import userService from './userService';

import messageBoxAction from '../Actions/messageBoxAction';

import { getDispatch } from '../store';

const connect = () => {
  const user = userService.getUser();

  const io = socketIo.connect('http://localhost:8000/discover');

  const dispatch = getDispatch();

  io.on('connect', () => {
    io.emit('setUser', user.username);
  });
  io.on('match', (data) => {
    dispatch(messageBoxAction.open(data.message));
  });
  io.on('disconnect', (reason) => {
    console.log('reason', reason);
  });
};

export default {
  connect,
};
