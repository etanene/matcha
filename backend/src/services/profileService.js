const photoService = require('./photoService');

const saveProfile = async (profile, user) => {
  const { photo } = profile;

  await photoService.savePhotos(photo, user);
  console.log('done');
};

module.exports = {
  saveProfile,
};
