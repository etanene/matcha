const { tagModel } = require('../models');
const userService = require('./userService');

const saveTags = async (tags, user) => {
  await tagModel.saveTags(tags);
  const users = await userService.getUser({ login: user });
  console.log('user', users);
  const userId = users[0] && users[0].user_id;
  await tagModel.saveTaggings(tags, userId);
};

const getTags = async (params) => {
  const { tag } = params;
  const tags = await tagModel.getTags(tag);
  return tags;
};

const getTagsByUser = async (params) => {
  const { login } = params;
  const tags = await tagModel.getTagsByUser(login);
  return tags;
};

module.exports = {
  saveTags,
  getTags,
  getTagsByUser,
};
