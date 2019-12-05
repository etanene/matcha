const { userModel } = require('../models');

const getUser = async (params) => {
  console.log(params);
  try {
    const user = await userModel.getUser(params);
    return (user);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = {
  getUser,
};
