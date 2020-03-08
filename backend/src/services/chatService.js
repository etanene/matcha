const { userModel } = require('../models');
const { UserException } = require('../errors');

const getMatchUsers = async (params) => {
  console.log('hi im chat service');
  const { login } = params;
  const users = await userModel.getMatchUsers({ login });
  const logins = users.map((user) => user.login);
  if (!logins.length) {
    throw new UserException('No match users yet');
  }
  const result = users.map((user) => {
    const {
      user_id: userId,
      first_name: firstName,
      last_name: lastName,
    } = user;
    return {
      userId,
      firstName,
      lastName,
    };
  });
  console.log('result matchUser', result);
  return result;
};

module.exports = {
  getMatchUsers,
};
