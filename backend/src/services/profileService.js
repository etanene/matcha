const photoService = require('./photoService');

const saveProfile = async (profile, user) => {
  const { photo } = profile;

  await photoService.savePhotos(photo, user);
};

const getProfile = async (params) => {
  console.log('getProfileService', params);
  const { login } = params;
  const photos = await photoService.getPhotos(login);

  return { photos };
};

module.exports = {
  saveProfile,
  getProfile,
};
