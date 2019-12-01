const { userModel } = require('../models');

function AuthException(message) {
  this.message = message;
  this.name = 'Auth';
}

const signup = async (user) => {
  try {
    await userModel.addUser(user);
  } catch (e) {
    console.log(e.message);
    throw new AuthException('Error signup user!');
  }
};

module.exports = {
  signup,
};
