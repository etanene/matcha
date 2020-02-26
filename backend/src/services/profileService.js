const photoService = require('./photoService');
const { userModel } = require('../models');
const tagService = require('./tagService');

const saveProfile = async (profile, user) => {
  const {
    photo,
    sex,
    orientation,
    about,
    tags,
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
  await tagService.saveTags(tags, user);
};

const getProfile = async (params) => {
  const { login } = params;
  const photos = await photoService.getPhotos(login);
  const user = await userModel.getUser({ login });
  const {
    sex,
    info,
    orientation,
    first_name: firstName,
    last_name: lastName,
  } = user[0];
  const tags = await tagService.getTagsByUser({ login });
  return {
    photos,
    sex,
    about: info,
    orientation,
    tags,
    firstName,
    lastName,
  };
};

const updateInfo = async (params, login) => {
  await userModel.updateUser(params, { login });
};

module.exports = {
  saveProfile,
  getProfile,
  updateInfo,
};
