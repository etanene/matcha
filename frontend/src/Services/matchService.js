import socketIo from 'socket.io-client';

import userService from './userService';

const connect = () => {
  const user = userService.getUser();

  const io = socketIo.connect('http://localhost:8000/discover');

  io.on('connect', () => {
    io.emit('setUser', user.username);
  });
};

export default {
  connect,
};
