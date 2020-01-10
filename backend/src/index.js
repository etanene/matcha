const express = require('express');
const cors = require('cors');
const session = require('express-session');
const path = require('path');

const router = require('./routes');

const app = express();
const port = process.env.PORT || 8000;

app.use('/public', express.static(path.resolve(__dirname, '../public')));
app.use(cors());
app.use(session({
  secret: 'matcha',
  saveUninitialized: false,
  resave: false,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.listen(port, () => console.log(`Server listening on port ${port}`));
