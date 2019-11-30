const db = require('../db');

const { validateService } = require('../services');

const signupUser = async (req, res) => {
  try {
    validateService.validateUserSignup(req.body);
    res.send('Ok!');
  } catch (e) {
    res.status(500).send(e);
  }
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
