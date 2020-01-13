const photoService = require('./photoService');

const saveProfile = async (profile, user) => {
  const { photo } = profile;

  await photoService.savePhotos(photo, user);
  console.log('done');
};

const getProfile = async (params) => {
  console.log('getProfileService', params);
  // const photos = await photoService;
};

module.exports = {
  saveProfile,
  getProfile,
};
