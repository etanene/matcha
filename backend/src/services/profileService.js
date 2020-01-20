const photoService = require('./photoService');
const { userModel } = require('../models');

const saveProfile = async (profile, user) => {
  const { photo, about } = profile;

  await photoService.savePhotos(photo, user);
  await userModel.updateUser({ info: about }, { login: user });
};

const getProfile = async (params) => {
  console.log('getProfileService', params);
  const { login } = params;
  const photos = await photoService.getPhotos(login);
  const user = await userModel.getUser({ login });
  console.log('user', user[0]);
  console.log('info', user[0].info);

  return { photos, about: user[0].info };
};

module.exports = {
  saveProfile,
  getProfile,
};
