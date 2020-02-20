const { userModel } = require('../models');

const getPartnerSex = (sex, orientation) => {
  const options = {
    homo: {
      male: ['male'],
      female: ['female'],
    },
    hetero: {
      male: ['female'],
      female: ['male'],
    },
    bi: {
      male: ['male', 'female'],
      female: ['male', 'female'],
    },
  };

  return options[sex][orientation];
};

const getRecommendUsers = async (params) => {
  console.log('params', params);
  const { sex, orientation } = params;
  const partnerSex = getPartnerSex(sex, orientation);
  console.log('partnersex', partnerSex);
  const users = await userModel.getUser({ partnerSex });
  console.log('users', users);
  return users;
};

module.exports = {
  getRecommendUsers,
};
