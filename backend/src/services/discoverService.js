const { userModel } = require('../models');

const get

const getRecommendUsers = async (params) => {
  console.log('params', params);
  const { sex, orientation } = params;
  const users = await userModel.getUser({ sex, orientation });
  console.log('users', users);
};
