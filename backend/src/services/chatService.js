const {
  userModel,
  photoModel,
} = require('../models');
const { UserException } = require('../errors');

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

const getMatchUsers = async (params) => {
  console.log('hi im chat service');
  const { login } = params;
  const users = await userModel.getMatchUsers({ login });
  const logins = users.map((user) => user.login);
  if (!logins.length) {
    throw new UserException('No match users yet');
  }

  const photos = await photoModel.getPhotos(logins);
  const mappedPhotos = mappingUserData(photos);

  const result = users.map((user) => {
    const {
      user_id: userId,
      first_name: firstName,
      last_name: lastName,
    } = user;
    return {
      userId,
      firstName,
      lastName,
      photo: mappedPhotos[userId][0],
    };
  });
  console.log('result matchUser', result);
  return result;
};

module.exports = {
  getMatchUsers,
};
