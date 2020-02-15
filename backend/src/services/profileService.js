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
  // console.log('save profile', profile);
  console.log('tags', tags);

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
  console.log('getProfileService', params);
  const { login } = params;
  const photos = await photoService.getPhotos(login);
  const user = await userModel.getUser({ login });
  // const tags = await
  console.log('user', user[0]);
  console.log('info', user[0].info);
  const {
    sex,
    info,
    orientation,
    first_name: firstName,
    last_name: lastName,
  } = user[0];
  const tags = await tagService.getTagsByUser({ login });
  console.log('tags profile', tags);
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

module.exports = {
  saveProfile,
  getProfile,
};
