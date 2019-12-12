const uuid = require('uuid/v4');
const bcrypt = require('bcrypt');

const { userModel } = require('../models');
const { UserException } = require('../errors');
const { HOST_URL } = require('../config');
const mailService = require('./mailService');

const getUser = async (params) => {
  try {
    const user = await userModel.getUser(params);
    return (user);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const resetPwUser = async (email) => {
  try {
    const uniqueLink = uuid();
    const res = await userModel.updateUser({ unique_link: uniqueLink }, { email });
    if (!res) {
      throw new UserException('Email does not exists!');
    }

    const link = `<a href="${HOST_URL}/changepw/${uniqueLink}">Click me</a>`;
    await mailService.sendMail(
      email,
      'Matcha reset password',
      `Please, use link to reset password ${link}`,
    );
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const changePwUser = async (password, userData) => {
  try {
    const hashPassword = await bcrypt.hash(password, 1);
    const res = await userModel.updateUser({ passwd: hashPassword }, userData);

    if (!res) {
      throw new UserException('Can not find user!');
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = {
  getUser,
  resetPwUser,
  changePwUser,
};
