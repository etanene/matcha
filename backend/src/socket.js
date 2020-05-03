const socketIo = require('socket.io');

const matchUsers = {};

function listen(server) {
  const io = socketIo(server, {
    pingTimeout: 60000,
  });

  io
    .of('/discover')
    .on('connection', (socket) => {
      let socketUser;
      socket.on('setUser', (user) => {
        console.log('message from client', user);
        socketUser = user;
        matchUsers[user] = {
          username: user,
          socketId: socket.id,
        };
      });

      socket.on('disconnect', () => {
        console.log('disconnect');
        if (socketUser) {
          delete matchUsers[socketUser];
        }
      });
    });

  return io;
}

module.exports = {
  listen,
  matchUsers,
};
