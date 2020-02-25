const { userModel, tagModel, photoModel } = require('../models');
const { UserException } = require('../errors');

function getPartnerSex(sex, orientation) {
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
}

function mappingUserData(data) {
  return data.reduce((result, item) => ({
    ...result,
    [item.user_id]: result[item.user_id] ? [
      ...result[item.user_id],
      item,
    ] : [
      item,
    ],
  }), {});
}

const getRecommendUsers = async (params) => {
  const { login, sex: userSex, orientation } = params;
  const partnerSex = getPartnerSex(userSex, orientation);
  const users = await userModel.getUser({ sex: partnerSex, login }, { login: true });
  const logins = users.map((user) => user.login);
  if (!logins.length) {
    throw new UserException('No recommend users for you');
  }
  const tags = await tagModel.getTagsByUser(logins);
  const photos = await photoModel.getPhotos(logins);

  const mappedPhotos = mappingUserData(photos);
  const mappedTags = mappingUserData(tags);

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
      photos: mappedPhotos[userId],
      tags: mappedTags[userId],
    };
  });
  return result;
};

module.exports = {
  getRecommendUsers,
};
