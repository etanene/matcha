const {
  validateService,
  authService,
} = require('../services');

const signupUser = async (req, res) => {
  try {
    validateService.validateUser(req.body);
    const { username, email } = await authService.signup(req.body);
    res.send({ username, email });
  } catch (e) {
    res.status(e.status || 500).send(e);
  }
};

const loginUser = async (req, res) => {
  try {
    await authService.login(req.body);
    req.session.logged = req.body.username;
    res.send({ token: req.session.id });
  } catch (e) {
    res.status(e.status || 500).send(e);
  }
};

const logoutUser = (req, res) => {
  try {
    req.session.destroy();
    res.send({ message: 'user logout!' });
  } catch (e) {
    res.status(e.status || 500).send(e);
  }
};

const verifyUser = async (req, res) => {
  try {
    if (req.params) {
      await authService.verify(req.params.uuid);

      res.redirect('/login');
    }
  } catch (e) {
    res.status(e.status || 500).send(e);
  }
};

module.exports = {
  signupUser,
  loginUser,
  logoutUser,
  verifyUser,
};
