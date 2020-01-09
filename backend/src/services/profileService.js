const photoService = require('./photoService');

const saveProfile = (profile) => {
  const { photo } = profile;

  Object.values(photo).forEach((item) => {
    photoService.savePhoto(item);
  });
};

module.exports = {
  saveProfile,
};
