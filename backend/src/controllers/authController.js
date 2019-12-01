const {
  validateService,
  authService,
} = require('../services');

const signupUser = async (req, res) => {
  try {
    validateService.validateUserSignup(req.body);
    authService.signup(req.body);
    res.send('Ok!');
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

const loginUser = (req, res) => {
  console.log('login');
  res.send('login');
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
