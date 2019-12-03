const bcrypt = require('bcrypt');

const { userModel } = require('../models');
const { AuthException } = require('../errors');

const signup = async (data) => {
  try {
    const user = data;

    const checkLogin = await userModel.getUser({ login: user.username });
    if (checkLogin.length) {
      throw new AuthException('Login already exists!');
    }
    const checkEmail = await userModel.getUser({ email: user.email });
    if (checkEmail.length) {
      throw new AuthException('Email already exists!');
    }
    user.password = await bcrypt.hash(user.password, 1);
    await userModel.addUser(user);
  } catch (e) {
    throw e;
  }
};

module.exports = {
  signup,
};
