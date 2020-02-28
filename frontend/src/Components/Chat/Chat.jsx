import React from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:8000');

function Chat() {
  console.log(socket);

  return (
    <div>Chat</div>
  );
}

export default Chat;
