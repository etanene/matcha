const db = require('../db');

const signupUser = async (req, res) => {
  console.log(req.body);
  console.log(req.body.username);
  res.send('test');
};

const loginUser = () => {
  db.query('SELECT 1 as count');
  console.log('login');
};

const logoutUser = (req, res) => {
  console.log('logout');
  res.send('logout');
};

module.exports = {
  signupUser,
  loginUser,
  logoutUser,
};
