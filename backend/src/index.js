const express = require('express');
const cors = require('cors');
const session = require('express-session');
const path = require('path');
const http = require('http');

const router = require('./routes');
const socket = require('./socket');

const app = express();
const httpServer = http.createServer(app);

const port = process.env.PORT || 8000;

const io = socket.listen(httpServer);
httpServer.listen(port, () => console.log(`Server listening on port ${port}`));

app.set('io', io);

app.use('/public', express.static(path.resolve(__dirname, '../public')));
app.use(cors({
  credentials: true,
  origin: 'http://localhost:8080',
}));
app.use(session({
  secret: 'matcha',
  saveUninitialized: false,
  resave: false,
}));
app.use(express.json({ limit: '50mb', extended: true }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/', router);
