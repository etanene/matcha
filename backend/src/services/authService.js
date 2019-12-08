const bcrypt = require('bcrypt');

const { userModel } = require('../models');
const { AuthException } = require('../errors');
const validateService = require('../services/validateService');

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

    return (user);
  } catch (e) {
    console.log(e.message);
    throw e;
  }
};

const login = async (data) => {
  try {
    const loginData = validateService.getLoginData(data.username);
    const users = await userModel.getUser(loginData);
    if (!users.length) {
      throw new AuthException('Invalid username or password!');
    }
    const user = users[0];

    const validPasswd = await bcrypt.compare(data.password, user.passwd);
    if (!validPasswd) {
      throw new AuthException('Invalid username or password!');
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = {
  signup,
  login,
};
