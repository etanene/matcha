const {
  validateService,
  authService,
} = require('../services');

const signupUser = async (req, res) => {
  try {
    validateService.validateUserSignup(req.body);
    const { username, email } = await authService.signup(req.body);
    res.send({ username, email });
  } catch (e) {
    res.status(e.status || 500).send(e);
  }
};

const loginUser = async (req, res) => {
  try {
    console.log('login');
    console.log(req.body);
    console.log(req.session);
    console.log('sessionID', req.session.id);
    await authService.login(req.body);
    res.send({ token: req.session.id });
  } catch (e) {
    console.log(e);
    res.status(e.status || 500).send(e);
  }
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
