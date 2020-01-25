const photoService = require('./photoService');
const { userModel } = require('../models');

const saveProfile = async (profile, user) => {
  const {
    photo,
    sex,
    orientation,
    about,
  } = profile;

  await photoService.savePhotos(photo, user);
  await userModel.updateUser(
    {
      info: about,
      sex,
      orientation,
    }, {
      login: user,
    },
  );
};

const getProfile = async (params) => {
  console.log('getProfileService', params);
  const { login } = params;
  const photos = await photoService.getPhotos(login);
  const user = await userModel.getUser({ login });
  console.log('user', user[0]);
  console.log('info', user[0].info);
  const {
    sex,
    info,
    orientation,
  } = user[0];
  return {
    photos,
    sex,
    about: info,
    orientation,
  };
};

module.exports = {
  saveProfile,
  getProfile,
};
