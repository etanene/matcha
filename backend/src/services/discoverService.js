const { userModel, tagModel, photoModel } = require('../models');

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

  return options[orientation][sex];
};

const getRecommendUsers = async (params) => {
  console.log('params', params);
  const { login, sex: userSex, orientation } = params;
  const partnerSex = getPartnerSex(userSex, orientation);
  console.log('partnersex', partnerSex);
  const users = await userModel.getUser({ sex: partnerSex, login }, { login: true });
  const logins = users.map((user) => user.login);
  const tags = await tagModel.getTagsByUser(logins);
  const photos = await photoModel.getPhotos(logins);
  console.log('users recommend', users);
  console.log('tags', tags);
  console.log('photos', photos);
  const result = users.map((user) => {
    const {
      user_id: userId,
      first_name: firstName,
      last_name: lastName,
      sex,
      info,
    } = user;
    return {
      userId,
      firstName,
      lastName,
      sex,
      info,
      photos,
      tags,
    };
  });
  return result;
};

module.exports = {
  getRecommendUsers,
};
